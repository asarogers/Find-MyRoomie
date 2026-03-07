import { MetadataRoute } from 'next';
import cityList from '@/components/_data/cities.json';
import { allBlogs } from '@/components/_data/blogs';

// ─── sitemap.ts ───────────────────────────────────────────────────────────────
// City pages auto-generate from cities.json — Forge never needs to touch those.
//
// Forge: when publishing a new blog post, add its slug to BLOG_SLUGS below.
// When adding a new static route (e.g. /about), add it to STATIC_PAGES.
// ─────────────────────────────────────────────────────────────────────────────

const BASE_URL = 'https://findmyroomy.com';
const TODAY = new Date().toISOString();

// ── Static pages ─────────────────────────────────────────────────────────────
const STATIC_PAGES: MetadataRoute.Sitemap = [
  { url: `${BASE_URL}/`,                    changeFrequency: 'weekly',  priority: 1.0 },
  { url: `${BASE_URL}/Find`,               changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/downloadApp`,        changeFrequency: 'weekly',  priority: 0.9 },
  { url: `${BASE_URL}/blogs`,              changeFrequency: 'weekly',  priority: 0.8 },
  { url: `${BASE_URL}/roomster-alternative`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/privacy`,            changeFrequency: 'yearly',  priority: 0.3 },
  { url: `${BASE_URL}/terms`,              changeFrequency: 'yearly',  priority: 0.3 },
  { url: `${BASE_URL}/cookie-policy`,      changeFrequency: 'yearly',  priority: 0.3 },
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

  return [
    ...STATIC_PAGES.map((p) => ({ ...p, lastModified: TODAY })),
    ...roommatePages,
    ...apartmentPages,
    ...petPages,
    ...blogPages,
  ];
}
