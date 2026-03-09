import type { Metadata } from 'next';
import UcBerkeleyStudentsContent from './UcBerkeleyStudentsContent';

export const metadata: Metadata = {
  title: 'UC Berkeley Roommate Finder — Fall 2026 Guide for New Students | Find MyRoomie',
  description:
    'UC Berkeley roommate search window: March-April is critical. Groups forming now lock in Fall 2026 housing. Free messaging, ID verification, no Roomster paywall.',
  alternates: { canonical: 'https://findmyroomy.com/roommates/uc-berkeley-students/' },
  openGraph: {
    title: 'UC Berkeley Roommate Finder — Fall 2026 Guide for New Students',
    description: 'March-April is the critical Berkeley housing window. Groups forming now lock in Fall 2026 leases. Free messaging, ID verified.',
    url: 'https://findmyroomy.com/roommates/uc-berkeley-students/',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should I start my UC Berkeley roommate search?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start in March. The critical window for Fall 2026 Berkeley housing is March–April. Groups that form now lock in 12-month leases by May–June. Groups that wait until July compete for roughly 30% of the original available options at prices that are typically 15–20% higher, because the best units are already taken.",
      },
    },
    {
      "@type": "Question",
      name: "What is average rent near UC Berkeley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In 2026, shared rooms near UC Berkeley run $1,600–$2,000/month in Northside and Southside neighborhoods closest to campus. Elmwood and North Berkeley are slightly more affordable at $1,400–$1,800/month. Solo studios near campus start at $2,400–$3,200/month. A roommate saves $600–$1,200/month — $7,200–$14,400/year.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to find a roommate online for Berkeley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On platforms with ID verification, yes. The risk is on platforms without verification — Craigslist and Facebook groups are the primary scam vectors for incoming Berkeley students. Find MyRoomie verifies identity before profiles go live, which eliminates the fake listing problem. Always video call before meeting in person, and never send any deposit before seeing the actual unit.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I save with a roommate near UC Berkeley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Berkeley roommate saves $600–$1,200/month compared to renting solo — $7,200–$14,400/year. For grad students on a $22,000–$30,000 annual stipend, that savings represents 25–65% of total stipend income. Housing is the single highest-leverage expense to reduce.",
      },
    },
  ],
};

export default function UcBerkeleyStudentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <UcBerkeleyStudentsContent />
    </>
  );
}
