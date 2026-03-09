import type { Metadata } from 'next';
import MissionSFContent from './MissionSFContent';

export const metadata: Metadata = {
  title: 'Mission District Roommates SF — Best Price Arbitrage in the City (2026)',
  description:
    'Mission District room prices: $1,700–$2,600/month. Best price-per-square-foot in SF with good transit. Find verified Mission roommates free — no subscription.',
  alternates: { canonical: 'https://findmyroomy.com/neighborhoods/mission-district-sf/' },
  openGraph: {
    title: 'Mission District SF Roommates — Best Price Arbitrage in the City',
    description: 'Mission District rent breakdown, best blocks to target, roommate cost math. Find verified SF roommates free — no $30/month paywall.',
    url: 'https://findmyroomy.com/neighborhoods/mission-district-sf/',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the Mission District good for roommates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the Mission has the best price arbitrage in SF. Room prices run $1,700–$2,600/month vs $3,200+ in SOMA for similar space. BART on 16th and 24th. Close to downtown but not priced like it.",
      },
    },
    {
      "@type": "Question",
      name: "What's the average rent in the Mission District SF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mission District rooms in 2026 run $1,700–$2,600/month. The exact price depends on which part of the Mission — the Valencia Street corridor runs higher; the streets east of Mission St run lower. Best value: 20th–26th Streets between Valencia and Mission.",
      },
    },
  ],
};

export default function MissionSFPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <MissionSFContent />
    </>
  );
}
