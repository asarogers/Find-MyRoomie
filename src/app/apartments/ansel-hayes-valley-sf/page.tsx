import type { Metadata } from 'next';
import AnselHayesValleyContent from './AnselHayesValleyContent';

export const metadata: Metadata = {
  title: 'Ansel Hayes Valley SF — High Design, Real Resident Data & Roommate Math | Find MyRoomie',
  description:
    "Ansel at Hayes Valley is SF's highest-design new apartment building. Studios from $3,800/month. The roommate math: sharing a 2BR drops cost to $2,600/person.",
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/ansel-hayes-valley-sf/',
  },
  openGraph: {
    title: 'Ansel Hayes Valley SF — High Design, Real Resident Data & Roommate Math | Find MyRoomie',
    description:
      "Ansel at Hayes Valley is SF's highest-design new apartment building. Studios from $3,800/month. The roommate math: sharing a 2BR drops cost to $2,600/person.",
    url: 'https://findmyroomy.com/apartments/ansel-hayes-valley-sf/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ansel Hayes Valley SF — Luxury Review & Roommate Math | Find MyRoomie',
    description: '30 Oak Street, SF. Studios from $3,800. 2BR $6,200-$7,200. Roommate split: $3,100-$3,600/person. Is it worth it?',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is rent at Ansel Hayes Valley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ansel at 30 Oak Street, Hayes Valley SF: Studios $3,800-$4,500/month. 1BR $4,800-$5,800/month. 2BR $6,200-$7,200/month. Completed 2023. Among the most expensive new apartment buildings in SF.",
      },
    },
    {
      "@type": "Question",
      name: "Is Ansel Hayes Valley worth the price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ansel offers genuinely exceptional finishes and walkability (99/100). The building was designed by David Baker Architects and features top-floor bay views, a rooftop deck, and co-working space. Whether the premium is worth it depends on your budget — but the quality is real, not just marketing.",
      },
    },
    {
      "@type": "Question",
      name: "What is the neighborhood like around Ansel at 30 Oak Street?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ansel at 30 Oak Street sits across from the SF Symphony, one block from Civic Center BART, and near multiple Muni lines (F, J, K, L, M). The Hayes Valley neighborhood is walkable, restaurant-dense, and culturally active — one of SF's most central locations.",
      },
    },
    {
      "@type": "Question",
      name: "How much do I save sharing a 2BR at Ansel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 2BR at Ansel runs $6,200-$7,200/month. Split two ways: $3,100-$3,600/person. Compare that to a 1BR at $4,800-$5,800/month solo. Sharing saves $1,200-$2,200/month per person — between $14,400 and $26,400/year.",
      },
    },
  ],
};

export default function AnselHayesValleyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AnselHayesValleyContent />
    </>
  );
}
