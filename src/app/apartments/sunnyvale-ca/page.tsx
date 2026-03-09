import type { Metadata } from 'next';
import SunnyvaleContent from './SunnyvaleContent';

export const metadata: Metadata = {
  title: "Find a Roommate in Sunnyvale — The AC Divide, Tech Clusters & Verified Roommates | Find MyRoomie",
  description:
    "Before you sign a lease in Sunnyvale, there are two things renters wish someone had told them. Find verified roommates — free, no paywall, no scammers.",
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/sunnyvale-ca/',
  },
  openGraph: {
    title: "Find a Roommate in Sunnyvale — The AC Divide, Tech Clusters & Verified Roommates | Find MyRoomie",
    description:
      "LinkedIn HQ, Apple/Google access. The quiet achiever of Silicon Valley. 2BR $3,000–$3,600/mo — split to $1,500–$1,800/person. Free, verified, no paywall.",
    url: 'https://findmyroomy.com/apartments/sunnyvale-ca/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Sunnyvale a good place to live for tech workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, with caveats. LinkedIn's headquarters is in downtown Sunnyvale. Apple Park is a 10-minute drive. Google's Mountain View campus is on the border. The key things to know before signing a lease: (1) the AC divide — some complexes have central air, some don't, and the market doesn't price this premium correctly; (2) employer geography — the city is long and narrow, and what's optimal for a LinkedIn employee is not optimal for a Google shuttle rider.",
      },
    },
    {
      "@type": "Question",
      name: "How do Sunnyvale rents compare to San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sunnyvale 2BR apartments run $3,000–$3,600/month — lower than SF's $4,500–$5,500 for a comparable unit. Split with a roommate: $1,500–$1,800/person in Sunnyvale versus $2,250–$2,750 in SF. That's $450–$950/month less — and most Sunnyvale employers are accessible without the SF premium.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Sunnyvale AC divide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sunnyvale's rental market has a documented split: some apartment complexes were built with central air conditioning, others weren't. The city regularly hits 90–95°F in summer. A unit without central AC means 90 nights of poor sleep and a window unit you bought yourself. The market hasn't fully priced this premium — you can find complexes with and without AC at similar rents. Know before you sign.",
      },
    },
  ],
};

export default function SunnyvalePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SunnyvaleContent />
    </>
  );
}
