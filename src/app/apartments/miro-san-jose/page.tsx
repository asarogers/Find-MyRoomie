import type { Metadata } from 'next';
import MiroSanJoseContent from './MiroSanJoseContent';

export const metadata: Metadata = {
  title: 'Miro San Jose Apartments — Rent Guide, Amenities & Roommate Market Near Diridon | Find MyRoomie',
  description:
    'Miro is a 303-unit luxury complex on N. First Street in downtown San Jose. Studios from $2,100. Caltrain-accessible. Here\'s what renters need to know about the building and neighborhood.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/miro-san-jose/',
  },
  openGraph: {
    title: 'Miro San Jose Apartments — Rent Guide, Amenities & Roommate Market Near Diridon | Find MyRoomie',
    description:
      'Miro is a 303-unit luxury complex on N. First Street in downtown San Jose. Studios from $2,100. Caltrain-accessible.',
    url: 'https://findmyroomy.com/apartments/miro-san-jose/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miro San Jose — Rent Guide Near Diridon Station | Find MyRoomie',
    description: 'Miro: 303 units on N. First St, San Jose. Studios from $2,100. Caltrain walkable. Roommate math inside.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does Miro San Jose cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Studios at Miro start around $2,100–$2,400/month. One-bedrooms run $2,600–$3,100. Shared two-bedrooms between compatible roommates bring costs to $1,400–$1,700/person.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Miro located in San Jose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Miro is on N. First Street in downtown San Jose, close to the SAP Center, Diridon Station (Caltrain/ACE), and the developing Google Downtown West campus.",
      },
    },
    {
      "@type": "Question",
      name: "Is Miro a good building for tech workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Caltrain access at Diridon Station makes Miro viable for both South Bay tech workers and those doing reverse commutes to SF or Mountain View. The Google Downtown West development nearby represents long-term upside for the corridor.",
      },
    },
  ],
};

export default function MiroSanJosePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MiroSanJoseContent />
    </>
  );
}
