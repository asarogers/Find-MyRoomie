import type { Metadata } from 'next';
import FemaleRoommateContent from './FemaleRoommateContent';

export const metadata: Metadata = {
  title: 'Female Roommates San Francisco — Women-Only, Verified & Free (2026)',
  description:
    'Find women-only roommates in San Francisco. Safety-first, verified profiles, free messaging. No subscription. Castro, Noe Valley, Haight, SOMA — Bay Area specialists.',
  alternates: { canonical: 'https://findmyroomy.com/roommates/female-only-san-francisco/' },
  openGraph: {
    title: 'Female Roommates San Francisco — Women-Only, Verified & Free',
    description: 'Women-only roommate search in SF with verified profiles and identity-controlled visibility. Free messaging, no subscription.',
    url: 'https://findmyroomy.com/roommates/female-only-san-francisco/',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I find female-only roommates in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Find MyRoomie supports gender-preference filters — you can search for and be found by women-only roommate listings. All profiles are verified before going live, which eliminates the fake profile risk that Craigslist and unverified platforms have.",
      },
    },
    {
      "@type": "Question",
      name: "Is it legal to look for a female-only roommate in California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. California's Fair Employment and Housing Act includes an exemption for shared living situations — selecting a roommate based on gender is permitted because you share common living spaces. This is different from housing discrimination in multi-unit rentals.",
      },
    },
    {
      "@type": "Question",
      name: "Is Find MyRoomie free for women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — completely free. No subscription, no credit card, no messaging fee. Find MyRoomie believes the people who need the most safety should face the fewest financial barriers.",
      },
    },
  ],
};

export default function FemaleRoommatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FemaleRoommateContent />
    </>
  );
}
