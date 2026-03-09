import type { Metadata } from 'next';
import RoommatesNearUberContent from './RoommatesNearUberContent';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Roommates Near Uber SF — Verified, Free | Find MyRoomie',
  description:
    'Uber employees finding roommates near Uber HQ Mission Bay San Francisco. Mission Bay, SOMA, Mission District, Oakland — rent math, commute times, free verified matching.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/roommates-near-uber/',
  },
  openGraph: {
    title: 'Roommates Near Uber SF — Verified, Free | Find MyRoomie',
    description:
      'Uber employees finding roommates near Uber HQ Mission Bay San Francisco. Mission Bay, SOMA, Mission District, Oakland — rent math, commute times, free verified matching.',
    url: 'https://findmyroomy.com/apartments/roommates-near-uber/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where do Uber employees typically live in SF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mission Bay and SOMA (walking distance, $2,000–$2,400/person split), Mission District ($1,700–$2,000/person, 15–20 min bike or BART), Potrero Hill ($1,900–$2,200/person, 10–15 min), and Oakland ($1,300–$1,600/person, 30–35 min BART).",
      },
    },
    {
      "@type": "Question",
      name: "Is Uber's Mission Bay HQ expensive to live near?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mission Bay is one of SF's newer and pricier districts. Solo 1BR runs $3,500–$4,000/month. A roommate split brings that to $2,000–$2,400/person. The Mission District or Oakland via BART can cut that by 25–40%.",
      },
    },
    {
      "@type": "Question",
      name: "What about international Uber employees needing housing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Uber employs a significant international workforce across engineering, data science, and product roles. H-1B arrivals face SF's income requirements (3x rent) and competitive market. Verified roommate matching is the fastest path to a viable living situation.",
      },
    },
    {
      "@type": "Question",
      name: "How does Find MyRoomie work for Uber's Mission Bay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free messaging, verified profiles, and SF neighborhood context including Mission Bay, Potrero Hill, and Mission District commute times. No subscription — no Roomster paywall.",
      },
    },
  ],
};

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'Apartments', url: 'https://findmyroomy.com/apartments/' },
  { name: 'Roommates Near Uber', url: 'https://findmyroomy.com/apartments/roommates-near-uber/' },
]);

const svcSchema = serviceSchema({
  name: 'Find MyRoomie — Roommates Near Uber',
  description: 'Uber employees finding roommates near Uber HQ Mission Bay San Francisco. Mission Bay, SOMA, Mission District, Oakland — rent math, commute times, free verified matching.',
  url: 'https://findmyroomy.com/apartments/roommates-near-uber/',
  areaServed: 'San Francisco Bay Area, California',
});

export default function RoommatesNearUberPage() {
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
      <RoommatesNearUberContent />
    </>
  );
}
