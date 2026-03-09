import type { Metadata } from 'next';
import RoommateAppsContent from './RoommateAppsContent';

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Best Roommate Finder Apps 2026 (Free & Paid) | Find MyRoomy',
  description:
    'The 6 best roommate finder apps in 2026, ranked by price and trust. One is completely free — no subscription, no paywall on messaging. Updated March 2026.',
  alternates: { canonical: 'https://findmyroomy.com/roommate-apps/' },
  openGraph: {
    title: 'Best Roommate Finder Apps 2026 — Free vs Paid, Ranked',
    description:
      'We ranked the top roommate apps by price, user trust, and fake-profile risk. One is completely free. Updated March 2026.',
    url: 'https://findmyroomy.com/roommate-apps/',
    type: 'article',
  },
};

// ─── Structured data ──────────────────────────────────────────────────────────

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best Roommate Finder Apps 2026",
  description: "Ranked list of the best roommate finder apps in 2026, comparing pricing, trust, and features.",
  url: "https://findmyroomy.com/roommate-apps/",
  numberOfItems: 6,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Find MyRoomy", url: "https://findmyroomy.com/" },
    { "@type": "ListItem", position: 2, name: "Diggz", url: "https://diggz.co/" },
    { "@type": "ListItem", position: 3, name: "SpareRoom", url: "https://spareroom.com/" },
    { "@type": "ListItem", position: 4, name: "Roomi", url: "https://roomiapp.com/" },
    { "@type": "ListItem", position: 5, name: "Roomster", url: "https://roomster.com/" },
    { "@type": "ListItem", position: 6, name: "Cirtru", url: "https://cirtru.com/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Roommate Finder Apps 2026 (Free & Paid)",
  description: "We ranked the top roommate apps by price, user trust, and fake-profile risk.",
  datePublished: "2026-03-07",
  dateModified: "2026-03-07",
  author: { "@type": "Organization", name: "FindMyRoomy", url: "https://findmyroomy.com/" },
  publisher: { "@type": "Organization", name: "FindMyRoomy", logo: { "@type": "ImageObject", url: "https://findmyroomy.com/logo.png" } },
  url: "https://findmyroomy.com/roommate-apps/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best free roommate finder app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Find MyRoomy (findmyroomy.com) is the only major roommate app that is completely free to message — no subscription, no credit card, no paywall. Diggz offers limited free messaging (5/day). Roomster and Roomi require paid subscriptions ($14.99–$30/month) to contact anyone.",
      },
    },
    {
      "@type": "Question",
      name: "Is Roomster free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Roomster requires a $30/month subscription to read or send messages. Browsing is free, but you cannot contact any listing without paying. Their 7-day trial auto-charges $29/month if not manually cancelled.",
      },
    },
    {
      "@type": "Question",
      name: "Is Roomi a good app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Roomi has a 2.2/5 rating on the App Store and 88% one-star reviews on Trustpilot as of 2026. Common complaints include non-working geographic filters, unresponsive customer support, accidental overcharges, and scam listings. Roomi Gold costs $29.99/month.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best Roomster alternative?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Find MyRoomy is the top free alternative to Roomster — it offers free messaging with no subscription, verified listings, and Bay Area-focused search. Unlike Roomster, there is no credit card required and no auto-renewal risk.",
      },
    },
    {
      "@type": "Question",
      name: "Which roommate app has the most verified profiles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Find MyRoomy verifies listings before they go live. Roomi uses GlobalID-powered identity verification. SpareRoom verifies email and phone. Cirtru's verification is reported by users as non-functional. Craigslist and Facebook Marketplace have no verification at all.",
      },
    },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RoommateAppsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <RoommateAppsContent />
    </>
  );
}
