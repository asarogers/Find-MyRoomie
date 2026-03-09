import type { Metadata } from 'next';
import SomaSquareContent from './SomaSquareContent';

export const metadata: Metadata = {
  title: 'SOMA Square San Francisco — Rent Guide, Tech Proximity & Roommate Market | Find MyRoomie',
  description:
    "SOMA Square sits in SF's tech corridor. Studios from $2,200, 1BRs $2,800–$3,200. Caltrain shuttle distance. What SOMA renters need to know about sharing costs.",
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/soma-square-san-francisco/',
  },
  openGraph: {
    title: 'SOMA Square San Francisco — Rent Guide, Tech Proximity & Roommate Market | Find MyRoomie',
    description:
      "SOMA Square sits in SF's tech corridor. Studios from $2,200, 1BRs $2,800–$3,200. Caltrain shuttle distance. What SOMA renters need to know about sharing costs.",
    url: 'https://findmyroomy.com/apartments/soma-square-san-francisco/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOMA Square SF — Tech Corridor Rent Guide | Find MyRoomie',
    description: "SOMA Square in SF's tech district. Studios from $2,200. Caltrain walkable. Roommate math inside.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does SOMA Square San Francisco cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Studio units start around $2,200–$2,600/month. One-bedrooms run $2,800–$3,200. Shared two-bedrooms split between two compatible roommates bring individual costs to $1,600–$1,900/month.",
      },
    },
    {
      "@type": "Question",
      name: "Is SOMA a good neighborhood for tech workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SOMA (South of Market) is SF's tech district — walkable to Caltrain, most major tech shuttle stops, and the Embarcadero. It has the highest concentration of tech workers of any SF neighborhood.",
      },
    },
    {
      "@type": "Question",
      name: "What's the roommate market like in SOMA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "High renter turnover means fresh roommate opportunities constantly. The neighborhood skews young professional, remote worker, and tech employee. Compatibility around work schedule and home office use matters more in SOMA than most SF neighborhoods.",
      },
    },
  ],
};

export default function SomaSquarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SomaSquareContent />
    </>
  );
}
