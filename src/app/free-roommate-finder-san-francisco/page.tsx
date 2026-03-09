import type { Metadata } from 'next';
import FreeRoommateSfContent from './FreeRoommateSfContent';

export const metadata: Metadata = {
  title: 'Free Roommate Finder San Francisco — No Paywall, Verified Listings | Find MyRoomie',
  description:
    'The only free roommate finder built for San Francisco. No $30/month subscription. Verified profiles in SOMA, Mission, Castro, and every SF neighborhood. Free messaging.',
  alternates: {
    canonical: 'https://findmyroomy.com/free-roommate-finder-san-francisco/',
  },
  openGraph: {
    title: 'Free Roommate Finder San Francisco — No Paywall, Verified Listings | Find MyRoomie',
    description:
      'The only free roommate finder built for San Francisco. No $30/month subscription. Verified profiles in SOMA, Mission, Castro, and every SF neighborhood. Free messaging.',
    url: 'https://findmyroomy.com/free-roommate-finder-san-francisco/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Roommate Finder San Francisco | Find MyRoomie',
    description: 'No $30/month subscription. Verified SF roommate profiles. Free messaging forever.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a truly free roommate finder in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Find MyRoomie is completely free. No subscription to message, no trial period, no credit card required. Roomster charges $29.99/month. Roomi charges $20–30/month. Find MyRoomie charges $0, permanently.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find a roommate in San Francisco for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Create a verified profile on Find MyRoomie, add your move-in timeline and neighborhood preferences, and message compatible verified listings directly — all free. You can also post that you're looking for a room, and verified room-listers can contact you.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Find MyRoomie different from Craigslist for SF roommates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Craigslist has zero profile verification — you have no way of knowing who you're messaging until you meet them, and SF has a documented fake-listing scam problem. Find MyRoomie verifies every profile before it's contactable. Both are free, but Find MyRoomie removes the scam risk.",
      },
    },
  ],
};

export default function FreeRoommateSfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FreeRoommateSfContent />
    </>
  );
}
