import type { Metadata } from 'next';
import VennOnMarketContent from './VennOnMarketContent';

export const metadata: Metadata = {
  title: 'Venn on Market SF Review — Rent, Location & the $12,000/Year Arbitrage Near the Mission | Find MyRoomie',
  description:
    'Venn on Market sits at $4.15/sqft while Mission District apartments two blocks away run $8–10+/sqft. The math on moving slightly west saves $6,000–$12,000/year.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/venn-on-market-san-francisco/',
  },
  openGraph: {
    title: 'Venn on Market SF Review — Rent, Location & the $12,000/Year Arbitrage Near the Mission | Find MyRoomie',
    description:
      'Venn on Market sits at $4.15/sqft while Mission District apartments two blocks away run $8–10+/sqft. The math on moving slightly west saves $6,000–$12,000/year.',
    url: 'https://findmyroomy.com/apartments/venn-on-market-san-francisco/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venn on Market SF — $12,000/Year Arbitrage Near the Mission | Find MyRoomie',
    description: '$4.15/sqft at Venn vs $8–10+/sqft two blocks into the Mission. Same coffee shops. $6,000–$12,000/year difference.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does Venn on Market cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In January 2026, Venn on Market was rated best value in the Mission area at $4.15 per square foot, with rents starting at $2,447/month.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Venn on Market cheaper than the Mission District?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Venn sits in the Van Ness/Market corridor — just outside the Mission zip code that commands premium pricing. Two to three blocks of distance translates to $500–$1,000/month in savings.",
      },
    },
    {
      "@type": "Question",
      name: "What do you give up by living at Venn instead of in the Mission?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The precise 'Mission' address designation. Immediate Dolores Park access. What you gain: $500–$1,000/month, a newer building, better transit connectivity, $6,000–$12,000/year in savings.",
      },
    },
  ],
};

export default function VennOnMarketPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <VennOnMarketContent />
    </>
  );
}
