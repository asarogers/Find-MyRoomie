import type { Metadata } from 'next';
import SfApartmentValueGuideContent from './SfApartmentValueGuideContent';

export const metadata: Metadata = {
  title: 'SF Apartment Value Score — Where Your Dollar Goes Furthest in 2026 | Find MyRoomie',
  description:
    'Price-per-sqft analysis across SF neighborhoods. SOMA: $8-10/sqft. Sunset: $5-6/sqft. Inner Richmond: $5.50-$7/sqft. Where you actually get the most for your money.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/sf-apartment-value-guide/',
  },
  openGraph: {
    title: 'SF Apartment Value Score — Where Your Dollar Goes Furthest in 2026 | Find MyRoomie',
    description:
      'Price-per-sqft analysis across SF neighborhoods. SOMA: $8-10/sqft. Sunset: $5-6/sqft. Inner Richmond: $5.50-$7/sqft. Where you actually get the most for your money.',
    url: 'https://findmyroomy.com/apartments/sf-apartment-value-guide/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SF Apartment Value Score 2026 | Find MyRoomie',
    description: 'SOMA vs Sunset vs Mission vs Richmond — full price-per-sqft breakdown for SF renters.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which SF neighborhood has the best value for renters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Inner Richmond and the Sunset District consistently rank highest for value in 2026. Inner Richmond averages $5.50-$7/sqft with an 8.5/10 value score. The Outer Sunset reaches 9/10 value at $4.50-$6/sqft — the best pure dollar-per-square-foot value in San Francisco.",
      },
    },
    {
      "@type": "Question",
      name: "What is the price per sqft in SOMA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SOMA (South of Market) averages $8-10/sqft/month in 2026. A typical 500 sqft studio runs approximately $4,000-$5,000/month. SOMA scores 7/10 on the FindMyRoomie value index — high walkability (95) and transit partially offset the premium pricing.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Sunset District cheaper than SOMA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, significantly. The Inner Sunset averages $5-6.50/sqft versus SOMA's $8-10/sqft — a 30-40% discount. A 700 sqft 1BR in the Inner Sunset typically runs $3,400/month versus $4,500+ in SOMA. The trade-off is slightly longer transit commutes to the Financial District.",
      },
    },
    {
      "@type": "Question",
      name: "Where does my rent dollar go furthest in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For solo renters: the Outer Sunset ($4.50-$6/sqft, 9/10 value score) and Inner Richmond ($5.50-$7/sqft, 8.5/10) offer the most square footage per dollar. For roommate arrangements: the Castro and Mission offer the best combination of roommate pool density, walkability, and reasonable $/sqft.",
      },
    },
  ],
};

export default function SfApartmentValueGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SfApartmentValueGuideContent />
    </>
  );
}
