import type { Metadata } from 'next';
import RoommatesNearNvidiaContent from './RoommatesNearNvidiaContent';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Roommates Near Nvidia Santa Clara — Verified, Free | Find MyRoomie',
  description:
    'Nvidia employees and contractors finding roommates near Nvidia HQ Santa Clara. Santa Clara, Sunnyvale, San Jose — rent math, commute times, free verified matching.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/roommates-near-nvidia/',
  },
  openGraph: {
    title: 'Roommates Near Nvidia Santa Clara — Verified, Free | Find MyRoomie',
    description:
      'Nvidia employees and contractors finding roommates near Nvidia HQ Santa Clara. Santa Clara, Sunnyvale, San Jose — rent math, commute times, free verified matching.',
    url: 'https://findmyroomy.com/apartments/roommates-near-nvidia/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the best neighborhood for Nvidia employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Santa Clara (0–10 min to HQ, $1,550–$1,800/person shared 2BR) and Sunnyvale (10–15 min, $1,600–$1,900/person) offer the best cost-commute ratio. San Jose North (20–25 min, $1,400–$1,600/person) is the budget option.",
      },
    },
    {
      "@type": "Question",
      name: "Is Nvidia HQ in Santa Clara expensive to live near?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Santa Clara is mid-range for the Bay Area. Solo 1BR runs $2,500–$2,900/month. A 2BR roommate split brings per-person cost to $1,550–$1,800 — significantly below SF or Menlo Park.",
      },
    },
    {
      "@type": "Question",
      name: "Do Nvidia H-1B employees struggle with Bay Area housing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nvidia has one of the highest H-1B filing rates of any tech company. First arrivals face no US rental history, a compressed timeline, and a competitive market for rooms near the Santa Clara campus.",
      },
    },
    {
      "@type": "Question",
      name: "How does Find MyRoomie help Nvidia employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free messaging, verified profiles, and Bay Area-specific context including proximity to the Nvidia campus corridors. No subscription fee — search for verified roommates near Santa Clara without paying Roomster $30/month first.",
      },
    },
  ],
};

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'Apartments', url: 'https://findmyroomy.com/apartments/' },
  { name: 'Roommates Near Nvidia', url: 'https://findmyroomy.com/apartments/roommates-near-nvidia/' },
]);

const svcSchema = serviceSchema({
  name: 'Find MyRoomie — Roommates Near Nvidia',
  description: 'Nvidia employees and contractors finding roommates near Nvidia HQ Santa Clara. Santa Clara, Sunnyvale, San Jose — rent math, commute times, free verified matching.',
  url: 'https://findmyroomy.com/apartments/roommates-near-nvidia/',
  areaServed: 'San Francisco Bay Area, California',
});

export default function RoommatesNearNvidiaPage() {
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
      <RoommatesNearNvidiaContent />
    </>
  );
}
