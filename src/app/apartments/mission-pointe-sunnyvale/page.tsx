import type { Metadata } from 'next';
import MissionPointeContent from './MissionPointeContent';

export const metadata: Metadata = {
  title: 'Mission Pointe Sunnyvale — Rent Guide, Tech Proximity & Roommate Market | Find MyRoomie',
  description:
    'Mission Pointe by Windsor sits in the heart of Silicon Valley\'s tech corridor. Studios from $2,300. Walkable to Apple HQ, close to Caltrain. What Sunnyvale renters need to know.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/mission-pointe-sunnyvale/',
  },
  openGraph: {
    title: 'Mission Pointe Sunnyvale — Rent Guide, Tech Proximity & Roommate Market | Find MyRoomie',
    description:
      "Mission Pointe by Windsor sits in the heart of Silicon Valley's tech corridor. Studios from $2,300. Walkable to Apple HQ, close to Caltrain.",
    url: 'https://findmyroomy.com/apartments/mission-pointe-sunnyvale/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mission Pointe Sunnyvale — Silicon Valley Rent Guide | Find MyRoomie',
    description: 'Mission Pointe: Studios from $2,300. Near Apple, Google, LinkedIn. Roommate math inside.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does Mission Pointe Sunnyvale cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Studio units start around $2,300–$2,600/month. One-bedrooms run $2,700–$3,200. Two-bedrooms split between verified roommates bring individual costs to $1,500–$1,800/month.",
      },
    },
    {
      "@type": "Question",
      name: "Is Mission Pointe close to Apple, Google, and other tech campuses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Mission Pointe is in Sunnyvale, within commuting distance of Apple's main campus in Cupertino, Google in Mountain View, LinkedIn in Sunnyvale, and the Caltrain corridor connecting the full Peninsula.",
      },
    },
    {
      "@type": "Question",
      name: "Why do tech workers choose Sunnyvale over San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sunnyvale rents are meaningfully lower than SF while remaining close to major Silicon Valley employers. A 2BR split between tech workers at Mission Pointe costs $1,500–$1,800/person vs $2,250–$2,750 for the same split in SOMA SF.",
      },
    },
  ],
};

export default function MissionPointePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MissionPointeContent />
    </>
  );
}
