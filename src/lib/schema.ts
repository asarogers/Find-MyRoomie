/**
 * Find MyRoomie — Structured Data Helpers
 *
 * Generates JSON-LD schema objects for use in page.tsx files.
 * Each function returns a plain object — pass it to JSON.stringify()
 * inside a <script type="application/ld+json"> tag.
 *
 * Usage:
 *   import { breadcrumbSchema, articleSchema } from '@/lib/schema';
 *   const crumbs = breadcrumbSchema([
 *     { name: 'Home', url: 'https://findmyroomy.com/' },
 *     { name: 'Apartments', url: 'https://findmyroomy.com/apartments/' },
 *     { name: 'San Francisco', url: 'https://findmyroomy.com/apartments/san-francisco-ca/' },
 *   ]);
 */

const SITE_URL = 'https://findmyroomy.com';
const SITE_NAME = 'Find MyRoomie';

// ─── BreadcrumbList ────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── Article (for guides and how-tos) ─────────────────────────────────────────

export interface ArticleSchemaOptions {
  title: string;
  description: string;
  url: string;
  /** ISO 8601 date string, e.g. "2025-12-01" */
  datePublished: string;
  /** ISO 8601 date string — update whenever content changes */
  dateModified: string;
  authorName?: string;
  imageUrl?: string;
}

export function articleSchema(opts: ArticleSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: {
      '@type': 'Organization',
      name: opts.authorName ?? SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    ...(opts.imageUrl ? { image: opts.imageUrl } : {}),
  };
}

// ─── Service / LocalBusiness (for app and city landing pages) ─────────────────

export interface ServiceSchemaOptions {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
  /** Use 'LocalBusiness' for pages with a physical-area focus, 'Service' for app pages */
  type?: 'Service' | 'LocalBusiness';
  priceRange?: string;
}

export function serviceSchema(opts: ServiceSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': opts.type ?? 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: opts.areaServed ?? 'San Francisco Bay Area, California',
    serviceType: 'Roommate Finder',
    ...(opts.priceRange ? { priceRange: opts.priceRange } : { offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free — no subscription required' } }),
  };
}

// ─── HowTo (for step-by-step guide pages) ─────────────────────────────────────

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

export interface HowToSchemaOptions {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration, e.g. "PT30M"
}

export function howToSchema(opts: HowToSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    step: opts.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url ? { url: step.url } : {}),
    })),
  };
}
