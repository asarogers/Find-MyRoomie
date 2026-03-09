import type { Metadata } from 'next';
import LGBTQRoommateContent from './LGBTQRoommateContent';

export const metadata: Metadata = {
  title: 'LGBTQ+ Roommate Finder Bay Area — Safe, Verified, Free | Find MyRoomie',
  description:
    'Find LGBTQ-friendly roommates in the Castro, Mission, Oakland, and across the Bay Area. Verified profiles, free messaging, identity filters. No subscription.',
  alternates: {
    canonical: 'https://findmyroomy.com/lgbtq-roommate-bay-area/',
  },
  openGraph: {
    title: 'LGBTQ+ Roommate Finder Bay Area — Safe, Verified, Free | Find MyRoomie',
    description:
      'Find LGBTQ-friendly roommates in the Castro, Mission, Oakland, and across the Bay Area. Verified profiles, free messaging, identity filters. No subscription.',
    url: 'https://findmyroomy.com/lgbtq-roommate-bay-area/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LGBTQ+ Roommate Finder Bay Area | Find MyRoomie',
    description: 'Safe, verified LGBTQ+ roommates in the Castro, Mission, Oakland. Free messaging, identity filters.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Find MyRoomie have LGBTQ+ identity filters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can search for and be found by people who have explicitly indicated they're LGBTQ+ or LGBTQ+ affirming — with controlled visibility so you decide who sees what about you.",
      },
    },
    {
      "@type": "Question",
      name: "Is Find MyRoomie free for LGBTQ+ renters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. No subscription, no credits system, no monthly fee. The platform is free because we believe the people who need the most protection should face the fewest financial barriers.",
      },
    },
    {
      "@type": "Question",
      name: "Which Bay Area neighborhoods have the most LGBTQ+ renters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Castro (historic LGBTQ+ SF), Mission District, Haight-Ashbury, Oakland's Telegraph and Grand Ave corridors, Berkeley, and growing communities in San Jose.",
      },
    },
    {
      "@type": "Question",
      name: "How does Find MyRoomie protect my privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your address and current neighborhood are never shared automatically. Identity visibility is a controlled setting — you decide who can find you and what they see.",
      },
    },
  ],
};

export default function LGBTQRoommatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LGBTQRoommateContent />
    </>
  );
}
