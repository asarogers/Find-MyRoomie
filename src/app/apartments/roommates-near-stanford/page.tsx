import type { Metadata } from 'next';
import RoommatesNearStanfordContent from './RoommatesNearStanfordContent';

export const metadata: Metadata = {
  title: 'Roommates Near Stanford University — Verified, Free | Find MyRoomie',
  description:
    'Stanford students, postdocs, and researchers finding roommates near Stanford campus Palo Alto. Palo Alto, Menlo Park, East Palo Alto, Redwood City — rent math, commute times, free verified matching.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/roommates-near-stanford/',
  },
  openGraph: {
    title: 'Roommates Near Stanford University — Verified, Free | Find MyRoomie',
    description:
      'Stanford students, postdocs, and researchers finding roommates near Stanford campus Palo Alto. Palo Alto, Menlo Park, East Palo Alto, Redwood City — rent math, commute times, free verified matching.',
    url: 'https://findmyroomy.com/apartments/roommates-near-stanford/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the cheapest place to live near Stanford?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "East Palo Alto ($1,300–$1,600/person shared 2BR, 10 min to campus) is the lowest-cost option near Stanford. Redwood City ($1,700–$1,900/person, 15–20 min) and Menlo Park ($2,000–$2,400/person, 5–10 min) offer progressively higher cost and convenience.",
      },
    },
    {
      "@type": "Question",
      name: "Is Palo Alto too expensive for graduate students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for most. Palo Alto 2BR splits run $2,000–$2,500/person. Stanford Housing Office waitlists are long. Most PhD students and postdocs end up in Menlo Park, East Palo Alto, or Redwood City where roommate splits bring costs to $1,300–$1,900/person.",
      },
    },
    {
      "@type": "Question",
      name: "How do international Stanford students find roommates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many use Stanford's off-campus housing board or Facebook groups — neither has verification. International students on F-1 or J-1 visas face no US rental history, no US credit, and a narrow pre-arrival window. Verified matching is especially valuable for first-year admits arriving from abroad.",
      },
    },
    {
      "@type": "Question",
      name: "How does Find MyRoomie work for Stanford?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free messaging, verified profiles, and Peninsula-specific context including East Palo Alto, Menlo Park, and Redwood City proximity to campus. No subscription — search for verified roommates without paying Roomster first.",
      },
    },
  ],
};

export default function RoommatesNearStanfordPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RoommatesNearStanfordContent />
    </>
  );
}
