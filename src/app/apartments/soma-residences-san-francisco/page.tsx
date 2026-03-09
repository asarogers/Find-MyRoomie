import type { Metadata } from 'next';
import SomaResidencesSfContent from './SomaResidencesSfContent';

export const metadata: Metadata = {
  title: 'SOMA Residences SF — Best Value in SoMa at $5–$6/sqft (2026) | Find MyRoomie',
  description:
    "SOMA Residences on 7th Street offers SoMa's best value at $5-6/sqft vs $8-10/sqft in comparable buildings. Studios from $2,800/month. Real resident data.",
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/soma-residences-san-francisco/',
  },
  openGraph: {
    title: 'SOMA Residences SF — Best Value in SoMa at $5–$6/sqft (2026) | Find MyRoomie',
    description:
      "SOMA Residences on 7th Street offers SoMa's best value at $5-6/sqft vs $8-10/sqft in comparable buildings. Studios from $2,800/month. Real resident data.",
    url: 'https://findmyroomy.com/apartments/soma-residences-san-francisco/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOMA Residences SF — Best Value SoMa 2026 | Find MyRoomie',
    description: '$5-6/sqft vs $8-10/sqft in newer towers. Studios from $2,800. 2BR roommate split: $2,400-$2,800/person.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the rent at SOMA Residences on 7th Street?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SOMA Residences, 7th Street corridor SF: Studios $2,800-$3,400/month. 1BR $3,500-$4,200/month. 2BR $4,800-$5,600/month. Pricing reflects 2000s construction — older building, better value than newer SoMa towers.",
      },
    },
    {
      "@type": "Question",
      name: "How does SOMA Residences compare to newer SoMa buildings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SOMA Residences runs $5-6/sqft vs $8-10/sqft at newer SoMa towers like SOMA 788. The tradeoff: older appliances in some units and no rooftop pool. The upside: SoMa location at 30-40% lower cost with functional amenities and walkable access to BART and Market Street.",
      },
    },
    {
      "@type": "Question",
      name: "Is SOMA Residences good value for SF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — SOMA Residences is one of the better value options in SoMa. Residents note decent management, walkable location near Civic Center and Market Street, and BART access. The aging appliances and dated finishes are real, but the price-to-location ratio is strong.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best value apartment in SoMa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For pure price-per-sqft value, SOMA Residences is one of SoMa's strongest options — $5-6/sqft vs $8-10 at newer towers. With a roommate on a 2BR, per-person cost drops to $2,400-$2,800/month — among SoMa's most affordable shared-living arrangements.",
      },
    },
  ],
};

export default function SomaResidencesSfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SomaResidencesSfContent />
    </>
  );
}
