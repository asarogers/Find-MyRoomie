import type { Metadata } from 'next';
import FemaleRoommateSfContent from './FemaleRoommateSfContent';

export const metadata: Metadata = {
  title: 'Female Roommate Finder San Francisco — Safety-First, Verified Profiles | Find MyRoomie',
  description:
    'Find female roommates in San Francisco with verified government IDs. Safety-first design, no anonymous profiles, free messaging. Serving women-only households since 2024.',
  alternates: {
    canonical: 'https://findmyroomy.com/female-roommate-san-francisco/',
  },
  openGraph: {
    title: 'Female Roommate Finder San Francisco — Safety-First, Verified Profiles | Find MyRoomie',
    description:
      'Find female roommates in San Francisco with verified government IDs. Safety-first design, no anonymous profiles, free messaging. Serving women-only households since 2024.',
    url: 'https://findmyroomy.com/female-roommate-san-francisco/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I find a female-only roommate in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. FindMyRoomie allows filtering for female-only households. Government ID verification on every profile means you're not relying on self-reported gender. Bay Area-specific listings including SF, Oakland, Berkeley, and South Bay.",
      },
    },
    {
      "@type": "Question",
      name: "Is it legal to advertise for female-only roommates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In California, the Unruh Civil Rights Act generally prohibits housing discrimination. However, an exception exists for shared living situations where tenants share common spaces — a shared apartment with shared kitchen and bathroom typically qualifies. Consult a California tenant attorney for specifics.",
      },
    },
    {
      "@type": "Question",
      name: "How do I screen a female roommate safely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Always: video call before in-person meeting. Meet first in a public place. Never send deposits before in-person apartment visit. Use a platform with ID verification. FindMyRoomie's verification means every profile has been government ID-checked — eliminating anonymous listings.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average rent for a shared room in a female household in SF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Female-only listings in SF typically run $2,000-$2,800/month for a shared room — slightly above SF average due to higher demand. Most are in walkable SF neighborhoods (Mission, Castro, Inner Richmond, Sunset). Waitlists for well-priced female households are common.",
      },
    },
  ],
};

export default function FemaleRoommateSfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FemaleRoommateSfContent />
    </>
  );
}
