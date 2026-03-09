import type { Metadata } from 'next';
import MostOverratedSfContent from './MostOverratedSfContent';

export const metadata: Metadata = {
  title: '10 Most Overrated SF Apartments in 2026 — What the Reviews Don\'t Tell You | Find MyRoomie',
  description:
    'These 10 San Francisco apartment buildings charge premium prices for below-average value. Real data from SF rent reports, resident reviews, and price-per-sqft analysis.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/most-overrated-sf-apartments/',
  },
  openGraph: {
    title: '10 Most Overrated SF Apartments in 2026 — What the Reviews Don\'t Tell You | Find MyRoomie',
    description:
      'These 10 San Francisco apartment buildings charge premium prices for below-average value. Real data from SF rent reports, resident reviews, and price-per-sqft analysis.',
    url: 'https://findmyroomy.com/apartments/most-overrated-sf-apartments/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Most Overrated SF Apartments in 2026 | Find MyRoomie',
    description: 'Premium prices, below-average value. Real price-per-sqft data on SF\'s most overrated buildings.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which SF apartments are overpriced?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buildings consistently flagged as overpriced relative to value in 2026 include The Infinity (Folsom/Beale), NEMA SF, 8 Octavia, 33 Tehama, and Noe Valley luxury buildings. These command location premiums that don't align with unit quality, noise levels, or management performance.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if an SF apartment is overrated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key signals: price-per-sqft above $8/sqft in a non-top-tier location, management complaints on Yelp or Google Reviews, building age above 15 years without documented renovation, and amenity lists that look impressive but carry deferred maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "What is the price per sqft for luxury SF apartments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Luxury SF apartments typically range from $7-12/sqft/month depending on neighborhood. SOMA runs $8-10/sqft. Pacific Heights reaches $9-12/sqft. The Sunset District offers comparable quality at $5-6.50/sqft — a 40-60% discount for accepting a longer commute.",
      },
    },
    {
      "@type": "Question",
      name: "Should I pay for SF luxury apartments or use a roommate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With a roommate, a 2BR in a mid-tier SF building often lands at $1,800-$2,200/person — well below any luxury 1BR. San Francisco's median rent is $3,545/month (Dec 2025), requiring a $142K income as a solo renter. With a roommate that drops to $68K/year. The math overwhelmingly favors roommate arrangements in every neighborhood.",
      },
    },
  ],
};

export default function MostOverratedSfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MostOverratedSfContent />
    </>
  );
}
