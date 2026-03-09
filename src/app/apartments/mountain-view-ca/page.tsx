import type { Metadata } from 'next';
import MountainViewContent from './MountainViewContent';

export const metadata: Metadata = {
  title: 'Mountain View Roommate Finder — Near Google HQ | Find MyRoomie',
  description:
    "Mountain View has the Bay Area's fastest rent growth at 7.9% YoY. Median 2BR: $4,200/month. With a verified roommate: $2,100/person. Free messaging, no paywall.",
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/mountain-view-ca/',
  },
  openGraph: {
    title: 'Mountain View Roommate Finder — Near Google HQ | Find MyRoomie',
    description:
      "Mountain View has the Bay Area's fastest rent growth at 7.9% YoY. Median 2BR: $4,200/month. With a verified roommate: $2,100/person. Free messaging, no paywall.",
    url: 'https://findmyroomy.com/apartments/mountain-view-ca/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a shared room cost in Mountain View?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "$1,600-$2,400/month for a shared room near Google in Mountain View, depending on proximity to Castro Street and exact neighborhood. The Reserve at Mountain View runs $2,100/person when sharing a 2BR. More affordable areas near Old Middlefield Way run $1,600-$1,900.",
      },
    },
    {
      "@type": "Question",
      name: "Is Mountain View near Google headquarters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Google's Googleplex HQ is at 1600 Amphitheatre Pkwy, Mountain View. Many Mountain View apartments are within 0.5-2 miles of the main campus. Google operates a free shuttle network that covers Mountain View, Sunnyvale, and surrounding cities.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Mountain View rent growing so fast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mountain View has the Bay Area's highest YoY rent growth at 7.9% (Zumper Q4 2025 data). The combination of Google HQ proximity, limited new supply, and continued tech hiring pressure has outpaced all other Bay Area cities including San Francisco.",
      },
    },
    {
      "@type": "Question",
      name: "Can I afford Mountain View on a Google salary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google L4 median base: $200K+. Mountain View 1BR solo: $3,100/month = $37,200/year = 19% of gross. Manageable solo. For L3 or new grad roles ($160K-$180K base), a roommate at $2,100/month keeps housing under 16% of gross. Efficient.",
      },
    },
    {
      "@type": "Question",
      name: "Is it better to live in Mountain View or Sunnyvale for Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mountain View puts you on Google's doorstep (0.5-2 miles vs Sunnyvale's 3-5 miles). But Mountain View is 15-20% more expensive. Sunnyvale is the tradeoff: slightly longer commute (Google shuttle covers it), meaningfully lower rent. If you walk/bike to work: Mountain View. If you take the shuttle: Sunnyvale.",
      },
    },
  ],
};

export default function MountainViewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MountainViewContent />
    </>
  );
}
