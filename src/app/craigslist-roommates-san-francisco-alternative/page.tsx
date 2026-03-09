import type { Metadata } from 'next';
import CraigslistAlternativeSfContent from './CraigslistAlternativeSfContent';

export const metadata: Metadata = {
  title: 'Craigslist Roommates San Francisco — Why It\'s Dangerous & What to Use Instead | Find MyRoomie',
  description:
    'Craigslist SF roommate listings have no verification, active scam campaigns, and zero recourse. FTC-documented fraud patterns. What verified alternatives exist in 2026.',
  alternates: {
    canonical: 'https://findmyroomy.com/craigslist-roommates-san-francisco-alternative/',
  },
  openGraph: {
    title: 'Craigslist Roommates San Francisco — Why It\'s Dangerous & What to Use Instead | Find MyRoomie',
    description:
      'Craigslist SF roommate listings have no verification, active scam campaigns, and zero recourse. FTC-documented fraud patterns. What verified alternatives exist in 2026.',
    url: 'https://findmyroomy.com/craigslist-roommates-san-francisco-alternative/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Craigslist Roommates SF — Scam Risks & Safe Alternatives | Find MyRoomie',
    description: 'No verification. Active scams. FTC-documented fraud. What SF roommate seekers should use instead.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Craigslist safe for finding roommates in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Craigslist has no identity verification for posters, no deposit escrow, and no dispute resolution. Common scams include advance deposit theft ($2,000-$4,000 sent before viewing), photo theft (real apartments in fake listings), and ghost listings (address doesn't exist). San Francisco's high housing demand makes it a particularly active target for these scams.",
      },
    },
    {
      "@type": "Question",
      name: "How common are Craigslist roommate scams in SF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Advance-fee fraud — the category covering 'send deposit to hold the room' scams — is the #1 reported fraud type for housing searches nationally per FTC data. SF's high rents ($3,545/month median in Dec 2025) make advance deposit amounts larger and scams more lucrative. The FBI's Internet Crime Complaint Center (IC3) consistently ranks SF among the highest-scam-density cities for housing fraud.",
      },
    },
    {
      "@type": "Question",
      name: "What is the safest way to find a roommate in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use a platform with identity verification on both sides. Find MyRoomie verifies government IDs, requires no advance deposit through the platform, and is Bay Area-specific. The key rules: never send money before an in-person visit, always video call before any transaction, and verify addresses on Google Street View before visiting.",
      },
    },
    {
      "@type": "Question",
      name: "How do I avoid roommate scams in the Bay Area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Five rules: (1) Never send money before seeing a room in person. (2) Never wire-transfer or Zelle to someone you haven't met. (3) Video call before any transaction. (4) Verify the address on Google Street View. (5) Use a verified platform — Find MyRoomie for Bay Area searches.",
      },
    },
  ],
};

export default function CraigslistAlternativeSfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CraigslistAlternativeSfContent />
    </>
  );
}
