import type { Metadata } from 'next';
import RoommatesNearAppleContent from './RoommatesNearAppleContent';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Roommates Near Apple Cupertino — Verified, Free | Find MyRoomie',
  description:
    'Apple employees and contractors looking for roommates near Apple Park or Infinite Loop. Cupertino, Sunnyvale, and Santa Clara options — rent math, commute times, free matching.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/roommates-near-apple/',
  },
  openGraph: {
    title: 'Roommates Near Apple Cupertino — Verified, Free | Find MyRoomie',
    description:
      'Apple employees and contractors looking for roommates near Apple Park or Infinite Loop. Cupertino, Sunnyvale, and Santa Clara options — rent math, commute times, free matching.',
    url: 'https://findmyroomy.com/apartments/roommates-near-apple/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the cheapest place to live near Apple Park?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sunnyvale ($1,600–$1,900/person shared 2BR, 10–15 min to Apple Park), Santa Clara ($1,500–$1,800/person, 15–20 min), San Jose North ($1,400–$1,600/person, 25–30 min). Cupertino itself is expensive ($1,900–$2,300/person shared 2BR).",
      },
    },
    {
      "@type": "Question",
      name: "Is Cupertino expensive for Apple employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cupertino is the most expensive city in the South Bay tech corridor. Solo 1BR runs $2,700–$3,200/month. A 2BR roommate split brings per-person costs to $1,900–$2,300/month — still one of the pricier South Bay options.",
      },
    },
    {
      "@type": "Question",
      name: "Do Apple H-1B employees struggle to find housing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — especially for first-time arrivals. No US credit history, unfamiliar neighborhood geography, and a compressed timeline (start date already set) make the standard search process very difficult. Verified profiles solve the trust gap before the first in-person meeting.",
      },
    },
    {
      "@type": "Question",
      name: "How does Find MyRoomie help Apple contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free messaging, verified profiles, and Bay Area-specific context (commute times, neighborhood guides). Apple contractors on shorter contracts particularly benefit from finding compatible roommates quickly — without paying $29.99/month to Roomster before knowing if anyone in Cupertino is available.",
      },
    },
  ],
};

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'Apartments', url: 'https://findmyroomy.com/apartments/' },
  { name: 'Roommates Near Apple', url: 'https://findmyroomy.com/apartments/roommates-near-apple/' },
]);

const svcSchema = serviceSchema({
  name: 'Find MyRoomie — Roommates Near Apple',
  description: 'Apple employees and contractors looking for roommates near Apple Park or Infinite Loop. Cupertino, Sunnyvale, and Santa Clara options — rent math, commute times, free matching.',
  url: 'https://findmyroomy.com/apartments/roommates-near-apple/',
  areaServed: 'San Francisco Bay Area, California',
});

export default function RoommatesNearApplePage() {
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
      <RoommatesNearAppleContent />
    </>
  );
}
