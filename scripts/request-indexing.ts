/**
 * request-indexing.ts — Post-deploy Google indexing automation
 *
 * What it does:
 *   1. Pings Google with the sitemap URL (always works, no auth)
 *   2. Fetches the live sitemap.xml from findmyroomy.com
 *   3. Compares against a local cache of previously submitted URLs
 *   4. Submits NEW urls to Google Indexing API (needs service account)
 *   5. Saves the updated cache
 *
 * Setup (one-time):
 *   1. Go to https://console.cloud.google.com
 *   2. Create a project (or use existing)
 *   3. Enable "Web Search Indexing API" (aka Indexing API)
 *   4. Create a Service Account → download JSON key
 *   5. Save the key as google-indexing-key.json in the project root
 *   6. Go to Google Search Console → Settings → Users and permissions
 *   7. Add the service account email (from the JSON) as an Owner
 *
 * Usage:
 *   npx ts-node scripts/request-indexing.ts          # submit new URLs
 *   npx ts-node scripts/request-indexing.ts --all    # re-submit ALL URLs
 *   npx ts-node scripts/request-indexing.ts --dry    # preview without submitting
 *   npx ts-node scripts/request-indexing.ts --ping   # only ping sitemap, skip URL submission
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleAuth } from 'google-auth-library';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://findmyroomy.com';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const INDEXING_API = 'https://indexing.googleapis.com/v3/urlNotifications:publish';
const CACHE_FILE = path.join(__dirname, '..', '.indexing-cache.json');
const KEY_FILE = path.join(__dirname, '..', 'google-indexing-key.json');

// Google Indexing API quota: 200 requests/day for new sites, can increase
const MAX_SUBMISSIONS_PER_RUN = 100;

interface CacheData {
  lastRun: string;
  submittedUrls: Record<string, string>; // url -> last submitted ISO date
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function loadCache(): CacheData {
  try {
    return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
  } catch {
    return { lastRun: '', submittedUrls: {} };
  }
}

function saveCache(cache: CacheData): void {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
}

async function fetchSitemapUrls(): Promise<string[]> {
  const resp = await fetch(SITEMAP_URL);
  if (!resp.ok) throw new Error(`Failed to fetch sitemap: ${resp.status}`);
  const xml = await resp.text();

  // Extract <loc> tags — simple regex, no XML parser needed
  const urls: string[] = [];
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

async function pingSitemap(): Promise<void> {
  // Bing/IndexNow still supports sitemap ping
  const bingPing = `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  try {
    const resp = await fetch(bingPing);
    if (resp.ok) {
      console.log(`[OK] Pinged Bing with sitemap`);
    } else {
      console.log(`[INFO] Bing sitemap ping returned ${resp.status}`);
    }
  } catch (e: any) {
    console.log(`[INFO] Bing sitemap ping failed: ${e.message}`);
  }
  // Note: Google deprecated /ping in 2023. Use the Indexing API instead.
  console.log(`[INFO] Google no longer supports sitemap ping — using Indexing API for URL submission`);
}

async function submitUrl(
  auth: GoogleAuth,
  url: string
): Promise<{ ok: boolean; error?: string }> {
  try {
    const client = await auth.getClient();
    const token = await client.getAccessToken();

    const resp = await fetch(INDEXING_API, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: url,
        type: 'URL_UPDATED',
      }),
    });

    if (resp.ok) {
      return { ok: true };
    } else {
      const body = await resp.text();
      return { ok: false, error: `${resp.status}: ${body.slice(0, 200)}` };
    }
  } catch (e: any) {
    return { ok: false, error: e.message };
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry');
  const submitAll = args.includes('--all');
  const pingOnly = args.includes('--ping');

  console.log('');
  console.log('=== Google Indexing — Post-Deploy ===');
  console.log(`Site: ${SITE_URL}`);
  console.log(`Mode: ${dryRun ? 'DRY RUN' : pingOnly ? 'PING ONLY' : submitAll ? 'ALL URLs' : 'NEW URLs only'}`);
  console.log('');

  // Step 1: Always ping Google with sitemap
  await pingSitemap();

  if (pingOnly) {
    console.log('\nDone (ping only mode).');
    return;
  }

  // Step 2: Check for service account key
  if (!fs.existsSync(KEY_FILE)) {
    console.log('');
    console.log('[SKIP] Google Indexing API — no service account key found.');
    console.log('       To enable per-URL indexing requests:');
    console.log(`       1. Create a service account at https://console.cloud.google.com`);
    console.log(`       2. Enable the "Web Search Indexing API"`);
    console.log(`       3. Save the JSON key as: ${KEY_FILE}`);
    console.log(`       4. Add the service account email as Owner in Google Search Console`);
    console.log('');
    console.log('Sitemap ping was still sent. Google will discover new URLs on its own (usually 2-7 days).');
    return;
  }

  // Step 3: Fetch current sitemap URLs
  console.log('\nFetching sitemap...');
  const sitemapUrls = await fetchSitemapUrls();
  console.log(`Found ${sitemapUrls.length} URLs in sitemap.`);

  // Step 4: Determine which URLs are new
  const cache = loadCache();
  let urlsToSubmit: string[];

  if (submitAll) {
    urlsToSubmit = sitemapUrls;
  } else {
    urlsToSubmit = sitemapUrls.filter((url) => !cache.submittedUrls[url]);
  }

  if (urlsToSubmit.length === 0) {
    console.log('No new URLs to submit. All sitemap URLs already indexed.');
    console.log(`(Use --all to re-submit everything, or delete ${CACHE_FILE} to reset)`);
    cache.lastRun = new Date().toISOString();
    saveCache(cache);
    return;
  }

  // Cap to daily quota
  if (urlsToSubmit.length > MAX_SUBMISSIONS_PER_RUN) {
    console.log(`Capping to ${MAX_SUBMISSIONS_PER_RUN} URLs (${urlsToSubmit.length} total). Run again for the rest.`);
    urlsToSubmit = urlsToSubmit.slice(0, MAX_SUBMISSIONS_PER_RUN);
  }

  console.log(`\nSubmitting ${urlsToSubmit.length} URL(s) to Google Indexing API...`);

  if (dryRun) {
    urlsToSubmit.forEach((url) => console.log(`  [DRY] ${url}`));
    console.log(`\nDry run complete. ${urlsToSubmit.length} URLs would be submitted.`);
    return;
  }

  // Step 5: Authenticate and submit
  const auth = new GoogleAuth({
    keyFile: KEY_FILE,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  let success = 0;
  let failed = 0;
  const now = new Date().toISOString();

  for (const url of urlsToSubmit) {
    const result = await submitUrl(auth, url);
    if (result.ok) {
      console.log(`  [OK] ${url}`);
      cache.submittedUrls[url] = now;
      success++;
    } else {
      console.log(`  [FAIL] ${url} — ${result.error}`);
      failed++;
    }

    // Small delay to avoid rate limiting
    await new Promise((r) => setTimeout(r, 100));
  }

  // Step 6: Save cache
  cache.lastRun = now;
  saveCache(cache);

  console.log('');
  console.log(`=== Results ===`);
  console.log(`Submitted: ${success}  |  Failed: ${failed}  |  Total in cache: ${Object.keys(cache.submittedUrls).length}`);
  console.log('');
}

main().catch((err) => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
