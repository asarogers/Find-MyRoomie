import { MetadataRoute } from 'next';
import cityList from '@/components/_data/cities.json';
import { allBlogs } from '@/components/_data/blogs';
import { getAllNeighborhoods } from '@/components/_data/neighborhoods';

export const dynamic = 'force-static';

// ─── sitemap.ts ───────────────────────────────────────────────────────────────
// City pages auto-generate from cities.json — Forge never needs to touch those.
//
// Forge: when publishing a new blog post, add its slug to BLOG_SLUGS below.
// When adding a new static route (e.g. /about), add it to STATIC_PAGES.
// ─────────────────────────────────────────────────────────────────────────────

const BASE_URL = 'https://findmyroomy.com';
const TODAY = new Date().toISOString();

// ── Static apartment complex + specialty pages (not in cities.json) ───────────
const STATIC_APARTMENT_PAGES: MetadataRoute.Sitemap = [
  // SF apartment guides
  { url: `${BASE_URL}/apartments/`, changeFrequency: 'weekly', priority: 0.9 },
  { url: `${BASE_URL}/apartments/rooms-for-rent-san-francisco/`, changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE_URL}/apartments/soma-788-san-francisco/`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/apartments/soma-residences-san-francisco/`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/apartments/soma-square-san-francisco/`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/apartments/venn-on-market-san-francisco/`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/apartments/ansel-hayes-valley-sf/`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/apartments/most-overrated-sf-apartments/`, changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE_URL}/apartments/sf-apartment-value-guide/`, changeFrequency: 'monthly', priority: 0.75 },
  // Sunnyvale complexes
  { url: `${BASE_URL}/apartments/the-crossings-sunnyvale/`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/apartments/montclaire-sunnyvale/`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/apartments/mission-pointe-sunnyvale/`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/apartments/americana-sunnyvale/`, changeFrequency: 'monthly', priority: 0.65 },
  { url: `${BASE_URL}/apartments/sunnyvale-no-ac-apartments/`, changeFrequency: 'monthly', priority: 0.65 },
  // San Jose complexes
  { url: `${BASE_URL}/apartments/miro-san-jose/`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/apartments/neo-on-first-san-jose/`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/apartments/crescent-village-san-jose/`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/apartments/the-fay-san-jose/`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/apartments/north-san-jose-vs-downtown/`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/apartments/san-jose-foreclosure-tracker/`, changeFrequency: 'monthly', priority: 0.65 },
  { url: `${BASE_URL}/apartments/reserve-mountain-view/`, changeFrequency: 'monthly', priority: 0.7 },
  // Tech campus corridors
  { url: `${BASE_URL}/apartments/roommates-near-apple/`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/apartments/roommates-near-google/`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/apartments/roommates-near-meta/`, changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE_URL}/apartments/roommates-near-nvidia/`, changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE_URL}/apartments/roommates-near-cisco/`, changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE_URL}/apartments/roommates-near-salesforce/`, changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE_URL}/apartments/roommates-near-oracle/`, changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE_URL}/apartments/roommates-near-stanford/`, changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE_URL}/apartments/roommates-near-ucsf/`, changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE_URL}/apartments/roommates-near-stripe/`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/apartments/roommates-near-uber/`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/apartments/roommates-near-airbnb/`, changeFrequency: 'monthly', priority: 0.7 },
];

// ── Data / research pages ─────────────────────────────────────────────────────
const DATA_PAGES: MetadataRoute.Sitemap = [
  { url: `${BASE_URL}/data/sf-rent-prices/`, changeFrequency: 'monthly', priority: 0.95 },
];

// ── Static pages ─────────────────────────────────────────────────────────────
const STATIC_PAGES: MetadataRoute.Sitemap = [
  { url: `${BASE_URL}/`,                    changeFrequency: 'weekly',  priority: 1.0 },
  { url: `${BASE_URL}/Find`,               changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/downloadApp`,        changeFrequency: 'weekly',  priority: 0.9 },
  { url: `${BASE_URL}/blogs`,              changeFrequency: 'weekly',  priority: 0.8 },
  { url: `${BASE_URL}/neighborhoods`,      changeFrequency: 'weekly',  priority: 0.8 },
  { url: `${BASE_URL}/roomster-alternative`,  changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/roomi-alternative`,     changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/spareroom-alternative`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/roommate-apps`,         changeFrequency: 'monthly', priority: 0.95 },
  { url: `${BASE_URL}/roommate-safety`,       changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/about`,              changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/privacy`,              changeFrequency: 'yearly',  priority: 0.3 },
  { url: `${BASE_URL}/terms`,              changeFrequency: 'yearly',  priority: 0.3 },
  { url: `${BASE_URL}/cookie-policy`,      changeFrequency: 'yearly',  priority: 0.3 },
  { url: `${BASE_URL}/faq`,               changeFrequency: 'monthly', priority: 0.7 },
];

// ── Blog posts — auto-generated from blogs.ts (no manual editing needed) ─────
const BLOG_SLUGS = allBlogs.map((b) => b.slug);

export default function sitemap(): MetadataRoute.Sitemap {
  // ── City pages — auto-generated, never edit manually ──
  const roommatePages: MetadataRoute.Sitemap = cityList.map((city) => ({
    url: `${BASE_URL}/roommates/${city.slug}`,
    lastModified: TODAY,
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  const apartmentPages: MetadataRoute.Sitemap = cityList.map((city) => ({
    url: `${BASE_URL}/apartments/${city.slug}`,
    lastModified: TODAY,
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  const petPages: MetadataRoute.Sitemap = cityList.map((city) => ({
    url: `${BASE_URL}/pets/${city.slug}`,
    lastModified: TODAY,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  // ── Blog posts ──
  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${BASE_URL}/blogs/${slug}`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // ── Neighborhood guides — auto-generated from neighborhoods.ts ──
  const neighborhoodPages: MetadataRoute.Sitemap = getAllNeighborhoods().map((n) => ({
    url: `${BASE_URL}/neighborhoods/${n.slug}`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    ...STATIC_PAGES.map((p) => ({ ...p, lastModified: TODAY })),
    ...DATA_PAGES.map((p) => ({ ...p, lastModified: TODAY })),
    ...STATIC_APARTMENT_PAGES.map((p) => ({ ...p, lastModified: TODAY })),
    ...roommatePages,
    ...apartmentPages,
    ...petPages,
    ...blogPages,
    ...neighborhoodPages,
  ];
}
