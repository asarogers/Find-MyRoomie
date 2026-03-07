// src/app/blogs/[slug]/page.tsx

import { notFound } from 'next/navigation'
import { getBlogBySlug, getAllBlogs, BlogPost } from '@/components/_data/blogs'
import cityList from '@/components/_data/cities.json'
import BlogPageClient from '../BlogPageClient'

const BASE_URL = 'https://findmyroomy.com'

// ── Helpers ───────────────────────────────────────────────────────────────────
function getCityName(slug: string): string {
  const citySlug = slug
    .replace('free-roommate-finder-', '')
    .replace('how-to-find-a-roommate-', '')
  const city = (cityList as { slug: string; name: string }[]).find(c => c.slug === citySlug)
  return city?.name ?? citySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

function buildTitle(blog: BlogPost): string {
  const city = getCityName(blog.slug)
  if (blog.slug.startsWith('free-roommate-finder-')) {
    return `Free Roommate Finder in ${city} (2026) — No Paywall | MyRoomy`
  }
  if (blog.slug.startsWith('how-to-find-a-roommate-')) {
    return `How to Find a Roommate in ${city} (2026): Verified & Free | MyRoomy`
  }
  return `${blog.title} | MyRoomy Blog`
}

function buildDescription(blog: BlogPost): string {
  const city = getCityName(blog.slug)
  if (blog.slug.startsWith('free-roommate-finder-')) {
    return `Find verified roommates in ${city} for free. No $29.99/mo Roomster paywall. Free messaging always. Beta access open now — founding members lock it in forever.`
  }
  if (blog.slug.startsWith('how-to-find-a-roommate-')) {
    return `The 2026 guide to finding a roommate in ${city}: where to search, what to ask, how to avoid scams. Free verified platform available now.`
  }
  return blog.excerpt
}

// ── Static generation ─────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllBlogs().map((blog) => ({ slug: blog.slug }))
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  if (!blog) return { title: 'Blog Post Not Found' }

  const title = buildTitle(blog)
  const description = buildDescription(blog)
  const city = getCityName(slug)
  const citySlug = slug.replace('free-roommate-finder-', '').replace('how-to-find-a-roommate-', '')

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/blogs/${slug}`,
      siteName: 'Find MyRoomy',
      type: 'article',
      publishedTime: blog.publishedAt,
      tags: blog.tags,
    },
    alternates: { canonical: `${BASE_URL}/blogs/${slug}` },
    keywords: [
      `roommate finder ${city.toLowerCase()}`,
      `find roommate ${city.toLowerCase()}`,
      `free roommate finder ${city.toLowerCase()}`,
      `roommates ${citySlug}`,
      ...blog.tags,
    ],
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  if (!blog) notFound()

  const city = getCityName(slug)
  const isAdvice = slug.startsWith('how-to-find-a-roommate-')

  // Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog!.title,
    description: buildDescription(blog!),
    author: { '@type': 'Organization', name: 'The MyRoomy Team', url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Find MyRoomy',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
    },
    datePublished: blog!.publishedAt,
    dateModified: blog!.publishedAt,
    url: `${BASE_URL}/blogs/${slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blogs/${slug}` },
  }

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blogs` },
      { '@type': 'ListItem', position: 3, name: blog!.title, item: `${BASE_URL}/blogs/${slug}` },
    ],
  }

  // FAQPage schema — injected for all posts, maps to FAQ accordion on page
  const faqItems = isAdvice
    ? [
        {
          q: `How do I find a roommate in ${city}?`,
          a: `Start with a verified, free platform like FindMyRoomy. Set up a detailed profile including sleep schedule, cleanliness level, and work hours. Reach out proactively. Avoid paywalled apps like Roomster where you can't even read replies without paying $29.99/month.`,
        },
        {
          q: 'What should I ask a potential roommate before moving in?',
          a: 'Work schedule and sleep hours, cleanliness standards, guest frequency, how they split utilities, and whether they have pets or smoke. Red flags: vague answers, pressure to decide fast, reluctance to meet in person first.',
        },
        {
          q: 'How do I avoid roommate scams?',
          a: 'Never pay a deposit before meeting in person. Reverse image search all photos. Be skeptical of anyone claiming to be overseas. Stick to verified platforms with identity checks.',
        },
        {
          q: 'What is a fair rent split?',
          a: 'Proportional to room size is the most common. Equal split works when rooms are similar. Some pairs split by income percentage. Get it in writing regardless of method.',
        },
      ]
    : [
        {
          q: `Is Find MyRoomy really free in ${city}?`,
          a: 'Yes. Free to browse, free to message, free to connect. Founding beta members lock in free messaging permanently — even after full launch.',
        },
        {
          q: 'How is this different from Roomster?',
          a: `Roomster charges $29.99/month to read or send messages. FindMyRoomy charges nothing. You also get profile verification, which Roomster doesn't provide.`,
        },
        {
          q: 'Is it safe to find roommates online?',
          a: 'Use a platform with identity verification, always meet in a public place first, and ask for references. FindMyRoomy builds verification into every profile.',
        },
        {
          q: `How long does it take to find a roommate in ${city}?`,
          a: `Most renters find compatible options within 1–3 weeks on verified platforms. High-demand areas like the Bay Area move faster, so early action matters.`,
        },
      ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  // HowTo schema for advice posts
  const howToSchema = isAdvice
    ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: blog!.title,
        description: buildDescription(blog!),
        step: blog!.sections.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.subtitle,
          text: s.textContent ?? s.listContent?.map(item => `${item.label}: ${item.text}`).join(' ') ?? '',
        })),
      }
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
      <BlogPageClient blog={blog!} faqItems={faqItems} />
    </>
  )
}
