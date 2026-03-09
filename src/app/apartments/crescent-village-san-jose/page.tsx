import type { Metadata } from 'next';
import CrescentVillageContent from './CrescentVillageContent';

export const metadata: Metadata = {
  title: 'Crescent Village San Jose — Rent Guide, Berryessa Location & Roommate Market | Find MyRoomie',
  description:
    'Crescent Village is a 900+ unit master-planned community in North San Jose near the Berryessa BART extension. Studios from $2,000. What renters and roommate seekers need to know.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/crescent-village-san-jose/',
  },
  openGraph: {
    title: 'Crescent Village San Jose — Rent Guide, Berryessa Location & Roommate Market | Find MyRoomie',
    description:
      'Crescent Village is a 900+ unit master-planned community in North San Jose near the Berryessa BART extension. Studios from $2,000.',
    url: 'https://findmyroomy.com/apartments/crescent-village-san-jose/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crescent Village San Jose — Berryessa BART Rent Guide | Find MyRoomie',
    description: 'Crescent Village: 900+ units, North San Jose. Studios from $2,000. Near Berryessa BART. Roommate math inside.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does Crescent Village San Jose cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Studio units start around $2,000–$2,300/month. One-bedrooms run $2,400–$2,900. Two-bedrooms split between verified roommates bring individual costs to $1,300–$1,600/month — some of the lowest per-person rates in the Bay Area tech corridor.",
      },
    },
    {
      "@type": "Question",
      name: "Is Crescent Village near BART?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Berryessa BART extension opened a station near North San Jose, providing direct rail access to the East Bay, Downtown Oakland, and BART connections throughout the region.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Crescent Village cheaper than Cupertino or Santa Clara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "North San Jose / Berryessa has lower rents than the western Silicon Valley corridor while remaining close to major tech employers via the 101 and 880. The BART extension has made the corridor more transit-accessible than it was before 2020.",
      },
    },
  ],
};

export default function CrescentVillagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CrescentVillageContent />
    </>
  );
}
