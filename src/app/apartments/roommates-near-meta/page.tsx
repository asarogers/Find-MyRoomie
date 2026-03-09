import type { Metadata } from 'next';
import RoommatesNearMetaContent from './RoommatesNearMetaContent';

export const metadata: Metadata = {
  title: 'Roommates Near Meta Menlo Park — Verified, Free | Find MyRoomie',
  description:
    'Meta employees and contractors finding roommates near 1 Hacker Way. Menlo Park, Redwood City, East Palo Alto — rent math, commute times, free verified matching.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/roommates-near-meta/',
  },
  openGraph: {
    title: 'Roommates Near Meta Menlo Park — Verified, Free | Find MyRoomie',
    description:
      'Meta employees and contractors finding roommates near 1 Hacker Way. Menlo Park, Redwood City, East Palo Alto — rent math, commute times, free verified matching.',
    url: 'https://findmyroomy.com/apartments/roommates-near-meta/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the cheapest neighborhood near Meta Menlo Park?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "East Palo Alto ($1,300–$1,600/person shared 2BR, 5–10 min to Meta) and Redwood City ($1,700–$1,900/person, 10–15 min) offer the best cost-to-commute ratio. Menlo Park itself runs $2,000–$2,400/person shared 2BR.",
      },
    },
    {
      "@type": "Question",
      name: "Do Meta H-1B employees face housing challenges?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Meta recruits globally and many first arrivals have no US rental history, no local network, and a compressed timeline. The pre-arrival window (4–6 weeks from offer to start) is when verified roommate matching matters most.",
      },
    },
    {
      "@type": "Question",
      name: "Is Menlo Park walkable from Meta HQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Meta campus is in Menlo Park and several walkable neighborhoods exist within 1–2 miles. However, most Meta employees live in Menlo Park, Redwood City, or Palo Alto and commute by shuttle, bike, or car.",
      },
    },
    {
      "@type": "Question",
      name: "How does Find MyRoomie work for Meta employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free messaging, verified profiles, and proximity-based search. No $30/month subscription like Roomster. Meta contractors and full-time employees can filter by neighborhood and commute time to the Menlo Park campus.",
      },
    },
  ],
};

export default function RoommatesNearMetaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RoommatesNearMetaContent />
    </>
  );
}
