import type { Metadata } from 'next';
import RoommatesNearGoogleContent from './RoommatesNearGoogleContent';

export const metadata: Metadata = {
  title: 'Roommates Near Google Mountain View — Find Verified Roommates, Free | Find MyRoomie',
  description:
    'Google employees and contractors looking for roommates near campus. Mountain View, Sunnyvale, Palo Alto, and East Bay options — rent math, commute times, verified matching free.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/roommates-near-google/',
  },
  openGraph: {
    title: 'Roommates Near Google Mountain View — Find Verified Roommates, Free | Find MyRoomie',
    description:
      'Google employees and contractors looking for roommates near campus. Mountain View, Sunnyvale, Palo Alto, and East Bay options — rent math, commute times, verified matching free.',
    url: 'https://findmyroomy.com/apartments/roommates-near-google/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the cheapest place to live near Google Mountain View?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By per-person cost with a roommate: North San Jose/Berryessa ($1,400–$1,600/person, 25 min commute), Sunnyvale ($1,600–$1,900/person, 15 min), Mountain View itself ($2,000–$2,200/person, walking/biking). East Bay via BART (Fremont $1,300–$1,500/person, 40 min) is the lowest cost option.",
      },
    },
    {
      "@type": "Question",
      name: "Do Google employees need roommates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — even at L4+ salaries, Mountain View rents require $124K gross income for a solo 1BR under the 30% rule. A 2BR roommate split at Mountain View brings per-person costs to ~$2,100/month, requiring $84K/year each — achievable but not trivial.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Fremont from Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fremont to Google Mountain View via 880/84 is typically 35–45 minutes by car, or about 55 minutes via BART + shuttle. Fremont 2BR splits run $1,300–$1,500/person — saving $600–$900/month vs Mountain View for the same commute.",
      },
    },
    {
      "@type": "Question",
      name: "Is Find MyRoomie free for Google employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — completely free. No subscription, no paywall on messaging. Roomster charges $29.99/month — you can send unlimited messages on Find MyRoomie for $0.",
      },
    },
  ],
};

export default function RoommatesNearGooglePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RoommatesNearGoogleContent />
    </>
  );
}
