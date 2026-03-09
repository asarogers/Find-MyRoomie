import type { Metadata } from 'next';
import Soma788SfContent from './Soma788SfContent';

export const metadata: Metadata = {
  title: 'SOMA 788 San Francisco — Premium Positioning, Real Resident Data (2026) | Find MyRoomie',
  description:
    "SOMA 788 at 788 Harrison St is one of SF's highest-rated luxury apartment buildings. 1BR from $4,200/month. What residents actually say and the roommate math.",
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/soma-788-san-francisco/',
  },
  openGraph: {
    title: 'SOMA 788 San Francisco — Premium Positioning, Real Resident Data (2026) | Find MyRoomie',
    description:
      "SOMA 788 at 788 Harrison St is one of SF's highest-rated luxury apartment buildings. 1BR from $4,200/month. What residents actually say and the roommate math.",
    url: 'https://findmyroomy.com/apartments/soma-788-san-francisco/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOMA 788 SF — Luxury Review & Roommate Math | Find MyRoomie',
    description: '788 Harrison St, SoMa SF. 1BR from $4,200. Rooftop pool, concierge, EV charging. 2BR split: $2,900-$3,600/person.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is rent at SOMA 788?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "788 Harrison St, San Francisco: Studios $3,400-$4,100/month. 1BR $4,200-$5,500/month. 2BR $5,800-$7,200/month. Completed 2017, 350 units. Among SoMa's most expensive and highest-rated buildings.",
      },
    },
    {
      "@type": "Question",
      name: "Is SOMA 788 on Harrison Street worth the price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SOMA 788 is consistently cited for genuinely responsive management — rare in SF. The building features a rooftop pool, fitness center, dog run, concierge, EV charging, and bike storage. Location is 3 blocks from BART Civic Center and 1 block from Caltrain. The premium is earned.",
      },
    },
    {
      "@type": "Question",
      name: "What do residents say about 788 Harrison Street SF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Residents consistently note management responsiveness as above-average for SF. Common positives: well-maintained common areas, gym, rooftop pool. Common negatives: street noise from Harrison Street is real, and 2BR pricing is high even by SoMa standards.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a roommate reduce cost at SOMA 788?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 2BR at SOMA 788 runs $5,800-$7,200/month. Split two ways: $2,900-$3,600/person. Compare to a 1BR at $4,200-$5,500 solo. Sharing saves $600-$1,900/month per person — up to $22,800/year.",
      },
    },
  ],
};

export default function Soma788SfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Soma788SfContent />
    </>
  );
}
