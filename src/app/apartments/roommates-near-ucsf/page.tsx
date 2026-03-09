import type { Metadata } from 'next';
import RoommatesNearUCSFContent from './RoommatesNearUCSFContent';

export const metadata: Metadata = {
  title: 'Roommates Near UCSF — Verified, Free | Find MyRoomie',
  description:
    'UCSF students, residents, and staff finding roommates near UCSF campuses. Inner Sunset, Mission Bay, Cole Valley, SOMA — rent math, commute times, free verified matching.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/roommates-near-ucsf/',
  },
  openGraph: {
    title: 'Roommates Near UCSF — Verified, Free | Find MyRoomie',
    description:
      'UCSF students, residents, and staff finding roommates near UCSF campuses. Inner Sunset, Mission Bay, Cole Valley, SOMA — rent math, commute times, free verified matching.',
    url: 'https://findmyroomy.com/apartments/roommates-near-ucsf/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where do UCSF residents and students live?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Inner Sunset ($1,700–$2,100/person split, 10 min to Parnassus), Cole Valley ($1,900–$2,200/person, 5–10 min to Parnassus), Mission Bay ($2,000–$2,400/person, walking to Mission Bay campus), and SOMA ($2,000–$2,300/person, 10–15 min to Mission Bay).",
      },
    },
    {
      "@type": "Question",
      name: "What's the cheapest neighborhood near UCSF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Inner Sunset offers the best value near the Parnassus campus — 10–15 min uphill, significantly cheaper than Cole Valley or SOMA. For the Mission Bay campus, the Mission District ($1,700–$2,000/person, 20 min) and Oakland ($1,300–$1,600/person, 30–35 min BART) are the budget options.",
      },
    },
    {
      "@type": "Question",
      name: "Do UCSF international medical students struggle with housing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. UCSF enrolls students from over 50 countries in its PhD, MD, and professional programs. International students on F-1 visas have no US credit history and face the same SF income verification requirements as all renters. Verified roommate matching is essential for pre-arrival housing.",
      },
    },
    {
      "@type": "Question",
      name: "How does Find MyRoomie help near UCSF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free messaging, verified profiles, and SF neighborhood context for both UCSF campuses — Parnassus and Mission Bay. No subscription — search for verified UCSF roommates without paying Roomster $30/month first.",
      },
    },
  ],
};

export default function RoommatesNearUCSFPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RoommatesNearUCSFContent />
    </>
  );
}
