import type { Metadata } from 'next';
import FremontContent from './FremontContent';

export const metadata: Metadata = {
  title: 'Find a Roommate in Fremont — Verified, Free, Indian & Tech Worker Friendly | Find MyRoomie',
  description:
    'Fremont has the highest concentration of Indian-American residents in the US. Find verified roommates near BART, Warm Springs, and Irvington — free, no subscription.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/fremont-ca/',
  },
  openGraph: {
    title: 'Find a Roommate in Fremont — Verified, Free, Indian & Tech Worker Friendly | Find MyRoomie',
    description:
      'Fremont: highest Indian-American concentration in the US. Find verified roommates near Warm Springs BART, Irvington — free messaging, no subscription.',
    url: 'https://findmyroomy.com/apartments/fremont-ca/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the South Asian community like in Fremont?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fremont has the highest concentration of Indian-American residents of any US city. In zip codes 94538 and 94539, South Asian residents make up 47% or more of the population. The Irvington neighborhood is the cultural heart — with India Cash & Carry, South Indian restaurants, the Fremont Hindu Temple, and South Asian grocery stores on every other block.",
      },
    },
    {
      "@type": "Question",
      name: "Is Fremont close to Silicon Valley tech companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Warm Springs BART connects directly to Milpitas and Berryessa (San Jose) — peak commute to downtown San Jose is about 30 minutes. Highway 680/880 reaches Santa Clara, Sunnyvale, and Mountain View in 35–55 minutes. Tesla's Gigafactory and Lam Research are headquartered in Fremont itself.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I save with a roommate in Fremont?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fremont 2BR apartments run $2,600–$3,200/month. With one roommate, you pay $1,300–$1,600/person — versus $1,900–$2,400 for a 1BR solo. The gap is $300–$800/month, or $3,600–$9,600/year. Over a three-year tech stint, that's $10,000–$30,000 in net take-home pay.",
      },
    },
  ],
};

export default function FremontPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FremontContent />
    </>
  );
}
