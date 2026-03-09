import type { Metadata } from 'next';
import RoommatesNearAirbnbContent from './RoommatesNearAirbnbContent';

export const metadata: Metadata = {
  title: 'Roommates Near Airbnb SF — Verified, Free | Find MyRoomie',
  description:
    'Airbnb employees finding roommates near Airbnb HQ SOMA San Francisco. SOMA, Mission, Hayes Valley, East Bay — rent math, commute times, free verified matching.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/roommates-near-airbnb/',
  },
  openGraph: {
    title: 'Roommates Near Airbnb SF — Verified, Free | Find MyRoomie',
    description:
      'Airbnb employees finding roommates near Airbnb HQ SOMA San Francisco. SOMA, Mission, Hayes Valley, East Bay — rent math, commute times, free verified matching.',
    url: 'https://findmyroomy.com/apartments/roommates-near-airbnb/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where do Airbnb employees live in SF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SOMA (walking distance, $2,000–$2,300/person split), Mission District ($1,700–$2,000/person, 20 min bike or BART), Hayes Valley ($1,900–$2,200/person, 20–25 min), and Oakland ($1,300–$1,600/person, 30 min BART).",
      },
    },
    {
      "@type": "Question",
      name: "Is Airbnb's SOMA office expensive to live near?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SOMA at 888 Brannan St has high density and premium rents. Solo 1BR runs $3,600–$4,200/month. A roommate split brings that to $2,000–$2,400/person. Oakland via BART or Mission District saves $400–$700/month per person.",
      },
    },
    {
      "@type": "Question",
      name: "Does Airbnb have international employees who need housing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Airbnb's global workforce includes significant international hiring for engineering and product roles. H-1B and L-1 arrivals face SF's income requirements and need verified roommate matching — particularly because Airbnb's culture makes international employees more likely to have roommates who work in hospitality or tech.",
      },
    },
    {
      "@type": "Question",
      name: "Is it ironic to use Find MyRoomie if you work at Airbnb?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only slightly. Airbnb is a great platform for short-term stays but not designed for long-term roommate matching in SF. Find MyRoomie adds the verification layer — government ID confirmed — that long-term roommate relationships require.",
      },
    },
  ],
};

export default function RoommatesNearAirbnbPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RoommatesNearAirbnbContent />
    </>
  );
}
