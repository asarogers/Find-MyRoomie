import type { Metadata } from 'next';
import RoomiAlternativeContent from './RoomiAlternativeContent';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Free Roomi Alternative 2026 — No $30/Month Paywall | Find MyRoomy',
  description:
    "Roomi has 88% one-star reviews and charges $29.99/month. Find MyRoomy is 100% free — no subscription, no hidden fees. Verified roommates in SF, LA, NYC & beyond.",
  alternates: { canonical: 'https://findmyroomy.com/roomi-alternative/' },
  openGraph: {
    title: 'Free Roomi Alternative — No $30/Month | Find MyRoomy',
    description: "Roomi: 88% one-star reviews, $29.99/month. Find MyRoomy: free messaging, verified listings, no subscription.",
    url: 'https://findmyroomy.com/roomi-alternative/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Roomi free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Roomi has a limited free tier (5 messages/day, 2 active listings), but meaningful search requires Roomi Gold at $29.99/month or $14.99/week. Without Gold, you cannot unlock unlimited messaging, boost your listing, or access advanced filters.",
      },
    },
    {
      "@type": "Question",
      name: "Is Roomi a scam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Roomi has 88% one-star reviews on Trustpilot and a 2.2/5 rating on the App Store as of 2026. Common complaints include: geographic filters that don't work, customer support that never responds, accidental charges of $120+, and scam listings despite identity verification claims. One BBB complaint documents a user losing $5,200 to a fake landlord operating through the platform.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best free alternative to Roomi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Find MyRoomy (findmyroomy.com) is completely free — no subscription, no messaging paywall, no credit card required. Unlike Roomi, listings are verified before going live and there is no auto-renewal risk.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Roomi cost per month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Roomi Gold costs $29.99/month or $14.99/week. There is also a Safety Bundle at $14.99–$29.99 and a Listing Boost credit at $4.99 each. The free tier is limited to 5 messages/day and 2 active listings.",
      },
    },
    {
      "@type": "Question",
      name: "Can I find a roommate without paying for Roomi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can send 5 messages per day on Roomi's free tier, but this is too limited for an active roommate search. A better option is Find MyRoomy, which has completely free, unlimited messaging with no subscription required.",
      },
    },
  ],
};

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'Roomi Alternative', url: 'https://findmyroomy.com/roomi-alternative/' },
]);

const svcSchema = serviceSchema({
  name: 'Find MyRoomie — Free Bay Area Roommate Finder',
  description: "Roomi has 88% one-star reviews and charges $29.99/month. Find MyRoomy is 100% free — no subscription, no hidden fees. Verified roommates in SF, LA, NYC & beyond.",
  url: 'https://findmyroomy.com/roomi-alternative/',
  areaServed: 'San Francisco Bay Area, California',
});

export default function RoomiAlternativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }} />
      <RoomiAlternativeContent />
    </>
  );
}
