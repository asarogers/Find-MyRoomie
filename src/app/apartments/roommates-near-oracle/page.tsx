import type { Metadata } from 'next';
import RoommatesNearOracleContent from './RoommatesNearOracleContent';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Roommates Near Oracle Redwood City — Verified, Free | Find MyRoomie',
  description:
    'Oracle employees finding roommates near Oracle HQ Redwood City. Redwood City, San Carlos, Menlo Park, East Palo Alto — rent math, commute times, free verified matching.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/roommates-near-oracle/',
  },
  openGraph: {
    title: 'Roommates Near Oracle Redwood City — Verified, Free | Find MyRoomie',
    description:
      'Oracle employees finding roommates near Oracle HQ Redwood City. Redwood City, San Carlos, Menlo Park, East Palo Alto — rent math, commute times, free verified matching.',
    url: 'https://findmyroomy.com/apartments/roommates-near-oracle/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the best neighborhood near Oracle HQ Redwood City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Redwood City itself offers the shortest commute (0–10 min, $1,700–$2,000/person shared 2BR). San Carlos (10–15 min north, $1,600–$1,900/person) and East Palo Alto (10–15 min south, $1,300–$1,600/person) are the best budget options.",
      },
    },
    {
      "@type": "Question",
      name: "Is Oracle's Redwood City campus expensive to live near?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Redwood City is mid-range for the Peninsula. Solo 1BR runs $2,500–$3,000/month. A 2BR roommate split brings per-person costs to $1,700–$2,000 — substantially less than Palo Alto or Menlo Park.",
      },
    },
    {
      "@type": "Question",
      name: "Does Oracle hire many H-1B workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Oracle is one of the largest H-1B petition filers in the US, particularly for database engineering, cloud infrastructure, and consulting roles. First-time arrivals from India and China face the same pre-arrival housing challenge: no US rental history, no local network, compressed timeline.",
      },
    },
    {
      "@type": "Question",
      name: "How does Find MyRoomie help Oracle employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free messaging, verified profiles, and Peninsula-specific context including commute times from San Carlos, East Palo Alto, and Menlo Park to Oracle campus. No subscription — search for verified roommates without paying Roomster first.",
      },
    },
  ],
};

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'Apartments', url: 'https://findmyroomy.com/apartments/' },
  { name: 'Roommates Near Oracle', url: 'https://findmyroomy.com/apartments/roommates-near-oracle/' },
]);

const svcSchema = serviceSchema({
  name: 'Find MyRoomie — Roommates Near Oracle',
  description: 'Oracle employees finding roommates near Oracle HQ Redwood City. Redwood City, San Carlos, Menlo Park, East Palo Alto — rent math, commute times, free verified matching.',
  url: 'https://findmyroomy.com/apartments/roommates-near-oracle/',
  areaServed: 'San Francisco Bay Area, California',
});

export default function RoommatesNearOraclePage() {
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
      <RoommatesNearOracleContent />
    </>
  );
}
