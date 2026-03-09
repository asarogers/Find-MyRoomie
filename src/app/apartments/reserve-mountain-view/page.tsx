import type { Metadata } from 'next';
import ReserveMountainViewContent from './ReserveMountainViewContent';

export const metadata: Metadata = {
  title: 'Reserve at Mountain View — 7.9% YoY Rent Growth Warning & Roommate Math | Find MyRoomie',
  description:
    'Reserve at Mountain View has the fastest rent growth in the Bay Area at 7.9% YoY. Median 2BR at $4,200/month. Here\'s the roommate math that makes it manageable.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/reserve-mountain-view/',
  },
  openGraph: {
    title: 'Reserve at Mountain View — 7.9% YoY Rent Growth Warning & Roommate Math | Find MyRoomie',
    description:
      'Reserve at Mountain View has the fastest rent growth in the Bay Area at 7.9% YoY. Median 2BR at $4,200/month. Here\'s the roommate math that makes it manageable.',
    url: 'https://findmyroomy.com/apartments/reserve-mountain-view/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reserve at Mountain View — Rent Growth & Roommate Math | Find MyRoomie',
    description: '7.9% YoY rent growth at Reserve Mountain View. 2BR $4,200/month solo — or $2,100/person shared. The math is clear.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the average rent at Reserve Mountain View?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reserve at Mountain View median rent: 1BR at $3,100/month, 2BR at $4,200/month as of Q4 2025. Mountain View has experienced 7.9% YoY rent growth — the fastest of any Bay Area city per Zumper Q4 2025 data.",
      },
    },
    {
      "@type": "Question",
      name: "Is Reserve at Mountain View near Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Reserve at Mountain View is approximately 0.6 miles from Google's main campus (1600 Amphitheatre Parkway). It is one of the closest large apartment complexes to Google HQ.",
      },
    },
    {
      "@type": "Question",
      name: "Can I afford Mountain View on a Google salary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solo occupancy of a 1BR at $3,100/month requires $124,000/year gross income under the standard 30% rent rule. A roommate split on a 2BR at $4,200/month brings per-person cost to $2,100/month — requiring $84,000/year each. Both are achievable on Google L4+ salaries.",
      },
    },
    {
      "@type": "Question",
      name: "How much do I save with a roommate near Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solo 1BR at Reserve Mountain View: $3,100/month ($37,200/year). Shared 2BR split: $2,100/person/month ($25,200/year). Annual savings: $12,000 per person — enough to max a Roth IRA and still have $6,000 left over.",
      },
    },
  ],
};

export default function ReserveMountainViewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ReserveMountainViewContent />
    </>
  );
}
