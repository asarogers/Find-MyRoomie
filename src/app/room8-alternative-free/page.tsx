import type { Metadata } from 'next';
import Room8AlternativeContent from './Room8AlternativeContent';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Room8 Alternative — Free Messaging vs Room8\'s Paywall (2026) | Find MyRoomie',
  description:
    'Room8 requires a paid subscription to message matches. Find MyRoomie is permanently free to message — no paywall, no subscription, Bay Area-focused with ID verification.',
  alternates: {
    canonical: 'https://findmyroomy.com/room8-alternative-free/',
  },
  openGraph: {
    title: 'Room8 Alternative — Free Messaging vs Room8\'s Paywall (2026) | Find MyRoomie',
    description:
      'Room8 requires a paid subscription to message matches. Find MyRoomie is permanently free to message — no paywall, no subscription, Bay Area-focused with ID verification.',
    url: 'https://findmyroomy.com/room8-alternative-free/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Room8 Alternative — Free Messaging for Bay Area Roommates | Find MyRoomie',
    description: 'Room8 paywall vs Find MyRoomie free forever. ID verification, Bay Area focus, zero subscription.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Room8 free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Room8 (formerly RoomieMatch) is free to browse and create a profile, but full messaging access requires a paid subscription. As of 2026, paid tiers run approximately $9.99-$19.99/month. You cannot read or send full messages to matches without paying.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best free alternative to Room8?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Find MyRoomie (findmyroomy.com) offers completely free messaging — no subscription, no paywall, no credit card required. It is Bay Area-focused and includes government ID verification on profiles, making it a more secure option than platforms with self-reported profiles only.",
      },
    },
    {
      "@type": "Question",
      name: "Does Room8 have ID verification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Room8 relies on self-reported profiles without government ID verification. This means you are matching with people based on unverified information. Find MyRoomie verifies government IDs, which is particularly important in high-scam markets like San Francisco.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best roommate app for San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For San Francisco specifically, Find MyRoomie is purpose-built for the Bay Area market with government ID verification, free messaging, and local-specific search. Global platforms like Room8 lack the local depth and have messaging paywalls that add friction in an already expensive housing market.",
      },
    },
  ],
};

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'Room8 Alternative Free', url: 'https://findmyroomy.com/room8-alternative-free/' },
]);

const svcSchema = serviceSchema({
  name: 'Find MyRoomie — Free Bay Area Roommate Finder',
  description: 'Room8 requires a paid subscription to message matches. Find MyRoomie is permanently free to message — no paywall, no subscription, Bay Area-focused with ID verification.',
  url: 'https://findmyroomy.com/room8-alternative-free/',
  areaServed: 'San Francisco Bay Area, California',
});

export default function Room8AlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }}
      />
      <Room8AlternativeContent />
    </>
  );
}
