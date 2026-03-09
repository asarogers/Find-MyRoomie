import type { Metadata } from 'next';
import RoommatesNearCiscoContent from './RoommatesNearCiscoContent';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Roommates Near Cisco San Jose — Verified, Free | Find MyRoomie',
  description:
    'Cisco employees and contractors finding roommates near Cisco HQ North San Jose. North San Jose, Sunnyvale, Milpitas, Fremont — rent math, commute times, free verified matching.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/roommates-near-cisco/',
  },
  openGraph: {
    title: 'Roommates Near Cisco San Jose — Verified, Free | Find MyRoomie',
    description:
      'Cisco employees and contractors finding roommates near Cisco HQ North San Jose. North San Jose, Sunnyvale, Milpitas, Fremont — rent math, commute times, free verified matching.',
    url: 'https://findmyroomy.com/apartments/roommates-near-cisco/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is the best neighborhood for Cisco employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "North San Jose is directly adjacent to the Cisco campus (0–10 min, $1,500–$1,700/person shared 2BR). Sunnyvale (15–20 min, $1,600–$1,800/person) has better walkability. Milpitas (10–15 min, $1,400–$1,600/person) is the lowest-cost option with BART access.",
      },
    },
    {
      "@type": "Question",
      name: "Is Cisco HQ in San Jose expensive to live near?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "North San Jose is among the more affordable Bay Area tech corridors. Solo 1BR runs $2,200–$2,600/month. A 2BR roommate split brings per-person costs to $1,400–$1,700 — significantly less than SF or Menlo Park.",
      },
    },
    {
      "@type": "Question",
      name: "Does Cisco hire many H-1B employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cisco has historically been one of the top H-1B petition filers in the US. Many employees arrive from India, China, and Europe with no US rental history and a compressed pre-arrival timeline. Verified roommate matching is essential for this segment.",
      },
    },
    {
      "@type": "Question",
      name: "How does Find MyRoomie help near Cisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free messaging, verified profiles, proximity filtering near the North San Jose campus, and South Bay neighborhood context. No $30/month subscription required.",
      },
    },
  ],
};

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'Apartments', url: 'https://findmyroomy.com/apartments/' },
  { name: 'Roommates Near Cisco', url: 'https://findmyroomy.com/apartments/roommates-near-cisco/' },
]);

const svcSchema = serviceSchema({
  name: 'Find MyRoomie — Roommates Near Cisco',
  description: 'Cisco employees and contractors finding roommates near Cisco HQ North San Jose. North San Jose, Sunnyvale, Milpitas, Fremont — rent math, commute times, free verified matching.',
  url: 'https://findmyroomy.com/apartments/roommates-near-cisco/',
  areaServed: 'San Francisco Bay Area, California',
});

export default function RoommatesNearCiscoPage() {
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
      <RoommatesNearCiscoContent />
    </>
  );
}
