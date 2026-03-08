// src/app/neighborhoods/[slug]/page.tsx

import { notFound } from 'next/navigation'
import { getNeighborhoodBySlug, getAllNeighborhoods } from '@/components/_data/neighborhoods'
import NeighborhoodPageClient from '../NeighborhoodPageClient'

const BASE_URL = 'https://findmyroomy.com'

export async function generateStaticParams() {
  return getAllNeighborhoods().map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const n = getNeighborhoodBySlug(slug)
  if (!n) return { title: 'Neighborhood Not Found' }

  const title = `Roommate Finder in ${n.neighborhood}, ${n.city} (2026) — Rent, Transit & Verified Matches | MyRoomy`
  const description = `${n.roomRent} for a shared room in ${n.neighborhood}. ${n.savings}. ${n.transit.split('—')[0].trim()} transit. Find a verified roommate in ${n.neighborhood} — free messaging, no paywall.`

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/neighborhoods/${slug}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/neighborhoods/${slug}`,
      siteName: 'Find MyRoomy',
      type: 'article',
      publishedTime: n.publishedAt,
      tags: n.tags,
    },
    keywords: [
      n.primaryKeyword,
      `roommate ${n.neighborhood.toLowerCase()}`,
      `${n.neighborhood.toLowerCase()} ${n.city.toLowerCase()} apartments roommate`,
      `shared housing ${n.neighborhood.toLowerCase()}`,
      `rent ${n.neighborhood.toLowerCase()} 2026`,
      ...n.tags,
    ],
  }
}

export default async function NeighborhoodPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const n = getNeighborhoodBySlug(slug)
  if (!n) notFound()

  // Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${n!.neighborhood}, ${n!.city}: Roommate Guide (2026)`,
    description: `Rent ranges, transit, employer proximity, and how to find a verified roommate in ${n!.neighborhood}.`,
    author: { '@type': 'Organization', name: 'The MyRoomy Team', url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Find MyRoomy',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
    },
    datePublished: n!.publishedAt,
    dateModified: n!.publishedAt,
    url: `${BASE_URL}/neighborhoods/${slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/neighborhoods/${slug}` },
  }

  // 3-level breadcrumb: Home → Neighborhoods → {City} → {Neighborhood}
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Neighborhoods', item: `${BASE_URL}/neighborhoods` },
      { '@type': 'ListItem', position: 3, name: n!.city, item: `${BASE_URL}/roommates/${n!.citySlug}` },
      { '@type': 'ListItem', position: 4, name: n!.neighborhood, item: `${BASE_URL}/neighborhoods/${slug}` },
    ],
  }

  // FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: n!.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  // Place schema for local SEO
  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: `${n!.neighborhood}, ${n!.city}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: n!.city,
      addressRegion: n!.state,
      addressCountry: 'US',
    },
    description: `${n!.vibe}. Shared rooms: ${n!.roomRent}. Best for: ${n!.bestFor}.`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />
      <NeighborhoodPageClient neighborhood={n!} />
    </>
  )
}
