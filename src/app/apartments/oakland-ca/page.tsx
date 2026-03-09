import type { Metadata } from 'next';
import OaklandContent from './OaklandContent';

export const metadata: Metadata = {
  title: 'Find a Roommate in Oakland — Free Verified Roommate Finder | Find MyRoomie',
  description:
    'Oakland median 2BR runs $2,400–$3,200. Find verified roommates in Rockridge, Temescal, Lake Merritt — free messaging, no subscription.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/oakland-ca/',
  },
  openGraph: {
    title: 'Find a Roommate in Oakland — Free Verified Roommate Finder | Find MyRoomie',
    description:
      'Oakland median 2BR runs $2,400–$3,200. Find verified roommates in Rockridge, Temescal, Lake Merritt — free messaging, no subscription.',
    url: 'https://findmyroomy.com/apartments/oakland-ca/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Oakland cheaper than San Francisco for roommates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Significantly. A 2BR in Oakland's Rockridge runs $2,600–$3,000/month — split to $1,300–$1,500/person. The same apartment in SOMA SF runs $4,500–$5,500, split to $2,250–$2,750. That's $750–$1,250/month savings — or $9,000–$15,000/year — for a comparable BART commute to the Financial District.",
      },
    },
    {
      "@type": "Question",
      name: "What are Oakland's best neighborhoods for roommates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rockridge is the most in-demand — walkable, BART-connected, 2BR $2,600–$3,000. Temescal has the energy and slightly lower rents ($2,400–$2,800). Lake Merritt offers views and excellent BART connections. Fruitvale is the most affordable option with a strong community culture.",
      },
    },
    {
      "@type": "Question",
      name: "Why do Oakland renters stay longer than SF renters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oakland's desirable neighborhoods attract people who make a deliberate choice to be there — often SF tech workers who ran the math and chose the East Bay. These renters put down roots. Oakland tenancies average 18–36 months, making compatibility in a roommate match more important than in SF's more transient market.",
      },
    },
  ],
};

export default function OaklandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <OaklandContent />
    </>
  );
}
