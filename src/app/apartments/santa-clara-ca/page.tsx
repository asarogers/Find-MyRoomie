import type { Metadata } from 'next';
import SantaClaraContent from './SantaClaraContent';

export const metadata: Metadata = {
  title: 'Find a Roommate in Santa Clara — Near Intel, Nvidia & Silicon Valley Tech Corridor | Find MyRoomie',
  description:
    'Santa Clara hosts Intel HQ, Nvidia HQ, and the largest tech employer concentration in the valley. Find verified roommates — free, no paywall.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/santa-clara-ca/',
  },
  openGraph: {
    title: 'Find a Roommate in Santa Clara — Near Intel, Nvidia & Silicon Valley Tech Corridor | Find MyRoomie',
    description:
      'Santa Clara: Intel HQ, Nvidia HQ, AMD, Palo Alto Networks. Find verified roommates — free messaging, no subscription.',
    url: 'https://findmyroomy.com/apartments/santa-clara-ca/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What tech companies are in Santa Clara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Santa Clara hosts Intel HQ (Robert Noyce Blvd), Nvidia HQ (Voyager campus, 12,000+ employees), AMD headquarters, Palo Alto Networks, and Santa Clara University — all within five miles of each other. No other city in Silicon Valley has this density of major employer campuses in such a compact footprint.",
      },
    },
    {
      "@type": "Question",
      name: "How does Santa Clara compare to San Jose for renters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Santa Clara is typically $200–$400/month more expensive than comparable San Jose neighborhoods, but offers better proximity to the major tech campuses on the 101/280 corridor. The Lawrence Caltrain station provides access to San Francisco (55 min), Mountain View (8 min), and Sunnyvale (5 min) — making it one of the most commute-flexible bases in the valley.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I save with a roommate in Santa Clara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Santa Clara 2BR apartments run $2,800–$3,400/month. Split with one roommate: $1,400–$1,700/person versus $2,000–$2,500 for a 1BR solo. Savings: $600–$800/month. Over a two-year H-1B stint or new hire contract, that's $14,400–$19,200 back in your pocket.",
      },
    },
  ],
};

export default function SantaClaraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SantaClaraContent />
    </>
  );
}
