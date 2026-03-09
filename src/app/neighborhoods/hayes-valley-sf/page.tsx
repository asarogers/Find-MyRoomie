import type { Metadata } from 'next';
import HayesValleyContent from './HayesValleyContent';

export const metadata: Metadata = {
  title: 'Hayes Valley Roommates SF — Design Workers, Arts Community, Verified & Free (2026)',
  description:
    'Hayes Valley room prices: $2,200–$3,000/month. SF\'s design and creative neighborhood. Find verified roommates near Civic Center BART — free, no subscription.',
  alternates: { canonical: 'https://findmyroomy.com/neighborhoods/hayes-valley-sf/' },
  openGraph: {
    title: 'Hayes Valley SF Roommates — Design Community, Verified & Free',
    description: 'Hayes Valley rent breakdown, best blocks for design workers, walkability, transit. Find verified Hayes Valley roommates free — no paywall.',
    url: 'https://findmyroomy.com/neighborhoods/hayes-valley-sf/',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is rent in Hayes Valley San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayes Valley room prices in 2026: $2,200–$3,000/month. The neighborhood commands a premium over the Mission and Richmond because of walkability, boutique density, and proximity to multiple transit options. Best value: the blocks east of Gough toward Civic Center.",
      },
    },
    {
      "@type": "Question",
      name: "Is Hayes Valley good for designers and creative workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Hayes Valley is SF's design and creative workers' neighborhood by reputation. Proximity to the design and architecture firms along Market Street, the arts venues at SFJAZZ and Davies Symphony Hall, and boutique retail make it the highest-concentration creative district in SF.",
      },
    },
  ],
};

export default function HayesValleyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HayesValleyContent />
    </>
  );
}
