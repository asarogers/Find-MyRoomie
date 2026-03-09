import type { Metadata } from 'next';
import RoomsForRentSfContent from './RoomsForRentSfContent';

export const metadata: Metadata = {
  title: 'Rooms for Rent San Francisco — Verified Listings, Free to Message | Find MyRoomie',
  description:
    'Find rooms for rent in SF neighborhoods from $1,400/month. SOMA, Mission, Castro, Nob Hill — verified listings, free messaging, no $30/month subscription.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/rooms-for-rent-san-francisco/',
  },
  openGraph: {
    title: 'Rooms for Rent San Francisco — Verified Listings, Free to Message | Find MyRoomie',
    description:
      'Find rooms for rent in SF neighborhoods from $1,400/month. SOMA, Mission, Castro, Nob Hill — verified listings, free messaging, no $30/month subscription.',
    url: 'https://findmyroomy.com/apartments/rooms-for-rent-san-francisco/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is a room for rent in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In 2026, rooms for rent in SF typically range from $1,200–$1,600/month in outer neighborhoods (Richmond, Sunset, Excelsior) to $1,600–$2,400/month in central neighborhoods (SOMA, Mission, Castro, Hayes Valley). Shared rooms can be found for $800–$1,200/month.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I find rooms for rent in San Francisco without paying a subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Find MyRoomie lists verified rooms for rent in all SF neighborhoods — free to message, no subscription, no paywall. Craigslist rooms for rent listings have a documented fake listing and deposit scam problem in SF. Roomster charges $29.99/month before you can contact any listing.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in a room for rent in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most SF rooms include utilities in the rent price (PG&E, water/trash, internet). Some rooms are furnished. Key questions to ask: Is it a master lease sublease or a co-signed lease? What is the kitchen access policy? How are cleaning responsibilities divided?",
      },
    },
    {
      "@type": "Question",
      name: "Is it legal to rent a room in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Renting a room in San Francisco is legal under standard California tenant law. Key notes: if the unit is under rent control, subletting rules apply. The master tenant retains liability for the lease. All financial arrangements should be in writing.",
      },
    },
  ],
};

export default function RoomsForRentSfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RoomsForRentSfContent />
    </>
  );
}
