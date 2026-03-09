import type { Metadata } from 'next';
import SomaSFContent from './SomaSFContent';

export const metadata: Metadata = {
  title: 'SOMA San Francisco Roommates — Move 2 Blocks, Save $12K/Year (2026)',
  description:
    'SOMA is SF\'s best tech worker roommate district. $2,100–$3,200/room. Caltrain access, Oracle Park, Salesforce. Find verified SOMA roommates free — no subscription.',
  alternates: { canonical: 'https://findmyroomy.com/neighborhoods/soma-san-francisco/' },
  openGraph: {
    title: 'SOMA SF Roommates — Best Tech Corridor, Verified & Free',
    description: 'SOMA rent breakdown, best blocks for tech workers, roommate cost math, and how to find verified roommates in SOMA without a $30/month paywall.',
    url: 'https://findmyroomy.com/neighborhoods/soma-san-francisco/',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is rent in SOMA San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SOMA room prices in 2026 run $2,100–$3,200/month depending on proximity to Caltrain, building age, and amenities. A 2BR split between verified roommates brings the cost to $1,800–$2,400/person — 35–40% below solo living.",
      },
    },
    {
      "@type": "Question",
      name: "Is SOMA good for tech workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SOMA is SF's best tech worker district by commute access. Caltrain at 4th & King, easy BART/Muni connections, and walking distance to Salesforce, Twitter HQ, and Dropbox. Oracle Park for game nights. For anyone working in tech in SF or commuting to the peninsula, SOMA is the optimal neighborhood.",
      },
    },
  ],
};

export default function SomaSFPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SomaSFContent />
    </>
  );
}
