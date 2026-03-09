import type { Metadata } from 'next';
import RoommatesNearStripeContent from './RoommatesNearStripeContent';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Roommates Near Stripe SF — Verified, Free | Find MyRoomie',
  description:
    'Stripe employees and contractors finding roommates near Stripe HQ SOMA San Francisco. SOMA, Mission, Hayes Valley, East Bay — rent math, commute times, free verified matching.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/roommates-near-stripe/',
  },
  openGraph: {
    title: 'Roommates Near Stripe SF — Verified, Free | Find MyRoomie',
    description:
      'Stripe employees and contractors finding roommates near Stripe HQ SOMA San Francisco. SOMA, Mission, Hayes Valley, East Bay — rent math, commute times, free verified matching.',
    url: 'https://findmyroomy.com/apartments/roommates-near-stripe/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where do most Stripe employees live in SF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SOMA (walking distance, $2,000–$2,300/person split), Mission District ($1,700–$2,000/person, 15 min by BART or bike), Hayes Valley ($1,900–$2,200/person, 20 min), and Oakland ($1,300–$1,600/person via BART, 30–35 min to office).",
      },
    },
    {
      "@type": "Question",
      name: "Is it worth paying SOMA rent to be near Stripe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only if you're in the office daily. SOMA 2BR split runs $2,000–$2,300/person. Oakland via BART saves $500–$700/month per person. Most Stripe employees who work hybrid prefer Mission or Hayes Valley as a middle ground.",
      },
    },
    {
      "@type": "Question",
      name: "Does Stripe have H-1B employees who need housing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Stripe is a global fintech company with significant international hiring. First arrivals on H-1B or L-1 visas face the same Bay Area housing challenges: no US rental history, no local network, and a compressed pre-arrival timeline.",
      },
    },
    {
      "@type": "Question",
      name: "How does Find MyRoomie help in SOMA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verified profiles, free messaging, and the ability to find verified roommates in SOMA, Mission, Hayes Valley, and East Bay — in one place, for free, without Roomster's $30/month paywall.",
      },
    },
  ],
};

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'Apartments', url: 'https://findmyroomy.com/apartments/' },
  { name: 'Roommates Near Stripe', url: 'https://findmyroomy.com/apartments/roommates-near-stripe/' },
]);

const svcSchema = serviceSchema({
  name: 'Find MyRoomie — Roommates Near Stripe',
  description: 'Stripe employees and contractors finding roommates near Stripe HQ SOMA San Francisco. SOMA, Mission, Hayes Valley, East Bay — rent math, commute times, free verified matching.',
  url: 'https://findmyroomy.com/apartments/roommates-near-stripe/',
  areaServed: 'San Francisco Bay Area, California',
});

export default function RoommatesNearStripePage() {
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
      <RoommatesNearStripeContent />
    </>
  );
}
