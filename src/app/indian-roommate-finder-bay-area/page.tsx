import type { Metadata } from 'next';
import IndianRoommateContent from './IndianRoommateContent';

export const metadata: Metadata = {
  title: 'Indian Roommate Finder Bay Area — Verified Desi Roommates, Free | Find MyRoomie',
  description:
    '540,000+ South Asian adults live in the Bay Area. Find verified Indian roommates in Fremont, Cupertino, San Jose, and SF — free messaging, no subscription.',
  alternates: {
    canonical: 'https://findmyroomy.com/indian-roommate-finder-bay-area/',
  },
  openGraph: {
    title: 'Indian Roommate Finder Bay Area — Verified Desi Roommates, Free | Find MyRoomie',
    description:
      '540,000+ South Asian adults live in the Bay Area. Find verified Indian roommates in Fremont, Cupertino, San Jose, and SF — free messaging, no subscription.',
    url: 'https://findmyroomy.com/indian-roommate-finder-bay-area/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indian Roommate Finder Bay Area | Find MyRoomie',
    description: 'Verified Desi roommates in Fremont, Cupertino, San Jose. Free messaging, no subscription.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where do most Indian and South Asian renters live in the Bay Area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fremont has the highest concentration of Indian-Americans in the US (47% South Asian in some zip codes). Other key cities: Cupertino, Santa Clara, San Jose's Berryessa district, Milpitas, and Newark.",
      },
    },
    {
      "@type": "Question",
      name: "Is Find MyRoomie free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — messaging, browsing, and listing are all completely free. No subscription, no credit card required.",
      },
    },
    {
      "@type": "Question",
      name: "What cultural filters does Find MyRoomie support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dietary preferences (vegetarian/non-vegetarian households), household norms, prayer schedules, and family visit expectations — filters designed specifically for the Bay Area's South Asian renter community.",
      },
    },
    {
      "@type": "Question",
      name: "Are Sulekha listings verified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sulekha has real listings but zero verification. You cannot confirm the identity of the person you're messaging or whether the listing is current. Find MyRoomie verifies every profile before it goes live.",
      },
    },
  ],
};

export default function IndianRoommatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <IndianRoommateContent />
    </>
  );
}
