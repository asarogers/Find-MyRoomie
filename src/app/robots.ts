import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

// ─── robots.ts ───────────────────────────────────────────────────────────────
// Forge: when adding new routes, add sensitive paths to the Googlebot/Bingbot
// disallow lists if needed. No other changes required — new public pages are
// automatically crawlable under the Allow: / rule.
// ─────────────────────────────────────────────────────────────────────────────

const SENSITIVE_PATHS = [
  '/admin/',
  '/private/',
  '/internal/',
  '/cgi-bin/',
  '/tmp/',
  '/temp/',
  '/cache/',
  '/logs/',
  '/.git/',
  '/.env',
  '/config/',
  '/database/',
  '/backup/',
  '/api/admin',
];

// Query strings that create duplicate content — block from indexing
const DUPLICATE_PARAM_PATTERNS = [
  '/*?sort=',
  '/*?filter=',
  '/*?page=',
  '/*?ref=',
  '/*?utm_',
  '/*?fbclid=',
  '/*?gclid=',
  '/*?sessionid=',
  '/*?PHPSESSID=',
  '/*?print=',
  '/*?mobile=',
  '/search?',
  '/search/',
  '/*?q=',
  '/*?query=',
  '/print/',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Search engines — full access, dedup params blocked ──
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [...SENSITIVE_PATHS, ...DUPLICATE_PARAM_PATTERNS],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [...SENSITIVE_PATHS, ...DUPLICATE_PARAM_PATTERNS],
      },
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: SENSITIVE_PATHS,
      },

      // ── Social preview crawlers — full access (needed for link cards) ──
      { userAgent: 'facebookexternalhit', allow: '/' },
      { userAgent: 'Twitterbot',          allow: '/' },
      { userAgent: 'LinkedInBot',         allow: '/' },
      { userAgent: 'Slackbot',            allow: '/' },
      { userAgent: 'Discordbot',          allow: '/' },
      { userAgent: 'WhatsApp',            allow: '/' },
      { userAgent: 'TelegramBot',         allow: '/' },

      // ── SEO audit tools — allow so Forge can run backlink/audit checks ──
      // Remove these if you want to hide your site from competitor research tools
      { userAgent: 'AhrefsBot',  allow: '/' },
      { userAgent: 'SemrushBot', allow: '/' },

      // ── Block other search engines ──
      { userAgent: 'Slurp',       disallow: '/' },
      { userAgent: 'DuckDuckBot', disallow: '/' },
      { userAgent: 'Baiduspider', disallow: '/' },
      { userAgent: 'YandexBot',   disallow: '/' },

      // ── AI search & answer engines — allow so findmyroomy.com appears in
      //    ChatGPT, Claude, Perplexity, and other AI assistant responses ──
      { userAgent: 'GPTBot',          allow: '/', disallow: SENSITIVE_PATHS },  // OpenAI training
      { userAgent: 'OAI-SearchBot',   allow: '/', disallow: SENSITIVE_PATHS },  // ChatGPT live search
      { userAgent: 'ChatGPT-User',    allow: '/', disallow: SENSITIVE_PATHS },  // ChatGPT browsing
      { userAgent: 'anthropic-ai',    allow: '/', disallow: SENSITIVE_PATHS },  // Anthropic training
      { userAgent: 'ClaudeBot',       allow: '/', disallow: SENSITIVE_PATHS },  // Claude web search
      { userAgent: 'Claude-Web',      allow: '/', disallow: SENSITIVE_PATHS },  // Claude browsing
      { userAgent: 'PerplexityBot',   allow: '/', disallow: SENSITIVE_PATHS },  // Perplexity
      { userAgent: 'cohere-ai',       allow: '/', disallow: SENSITIVE_PATHS },  // Cohere

      // ── Archiving bots — allow for trust signals and historical indexing ──
      { userAgent: 'ia_archiver',     allow: '/' },
      { userAgent: 'archive.org_bot', allow: '/' },
      { userAgent: 'Wayback',         allow: '/' },

      // ── Block aggressive scrapers ──
      { userAgent: 'CCBot',        disallow: '/' },
      { userAgent: 'PetalBot',     disallow: '/' },
      { userAgent: 'MauiBot',      disallow: '/' },
      { userAgent: 'SiteAuditBot', disallow: '/' },

      // ── Block aggressive / malicious crawlers ──
      { userAgent: 'MJ12bot',        disallow: '/' },
      { userAgent: 'DotBot',         disallow: '/' },
      { userAgent: 'BLEXBot',        disallow: '/' },
      { userAgent: 'DataForSeoBot',  disallow: '/' },
      { userAgent: 'SurveyBot',      disallow: '/' },
      { userAgent: 'CensysInspect',  disallow: '/' },

      // ── Block everything else ──
      {
        userAgent: '*',
        disallow: '/',
      },
    ],
    sitemap: [
      'https://findmyroomy.com/sitemap.xml',
    ],
  };
}
