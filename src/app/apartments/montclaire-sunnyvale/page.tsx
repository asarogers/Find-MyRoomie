import type { Metadata } from 'next';
import MontclaireSunnyvaleContent from './MontclaireSunnyvaleContent';

export const metadata: Metadata = {
  title: 'Montclaire at Sunnyvale — Honest Review for Tech Workers (2026) | Find MyRoomie',
  description:
    'Montclaire at Sunnyvale: well-maintained mid-tier complex near LinkedIn and Apple. Real rent data, resident reviews, and roommate math for sharing a 2BR.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/montclaire-sunnyvale/',
  },
  openGraph: {
    title: 'Montclaire at Sunnyvale — Honest Review for Tech Workers (2026) | Find MyRoomie',
    description:
      'Montclaire at Sunnyvale: well-maintained mid-tier complex near LinkedIn and Apple. Real rent data, resident reviews, and roommate math for sharing a 2BR.',
    url: 'https://findmyroomy.com/apartments/montclaire-sunnyvale/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Montclaire Sunnyvale — Tech Worker Review 2026 | Find MyRoomie',
    description: 'Near Sunnyvale Caltrain. 2BR $3,400-$3,900/month, roommate split $1,700-$1,950/person. Central AC included.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Montclaire Sunnyvale have central AC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Montclaire at Sunnyvale includes central AC in all units — unlike some older Sunnyvale complexes that rely on window units or have no cooling at all. This is a meaningful differentiator during Bay Area heat waves.",
      },
    },
    {
      "@type": "Question",
      name: "Is Montclaire near the Sunnyvale Caltrain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Montclaire at Sunnyvale is walking distance from the Sunnyvale Caltrain station, making it well-suited for commuters to San Francisco or San Jose. It is also approximately 2 miles from LinkedIn and 4 miles from Apple via Lawrence Expressway.",
      },
    },
    {
      "@type": "Question",
      name: "What is rent at Montclaire Sunnyvale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Montclaire at Sunnyvale: 1BR $2,600-$3,000/month, 2BR $3,400-$3,900/month. Amenities include pool, gym, and assigned parking. A 2BR roommate split lands at $1,700-$1,950/person — one of Sunnyvale's more balanced price-to-value options.",
      },
    },
    {
      "@type": "Question",
      name: "Is Montclaire Sunnyvale good for tech workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, particularly for tech workers who commute via Caltrain or company shuttle. Montclaire offers central AC, a walkable location, and responsive management. The main noted downsides are thin walls in some buildings and no dedicated pet area.",
      },
    },
  ],
};

export default function MontclaireSunnyvalePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MontclaireSunnyvaleContent />
    </>
  );
}
