import type { Metadata } from 'next';
import PaloAltoContent from './PaloAltoContent';

export const metadata: Metadata = {
  title: 'Find a Roommate in Palo Alto — Stanford Proximity, Tech Money & Verified Roommates | Find MyRoomie',
  description:
    'Palo Alto has the highest 1BR rents in the Bay Area outside San Francisco. Find verified roommates near Stanford, Sand Hill Road, and Caltrain — free, no subscription.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/palo-alto-ca/',
  },
  openGraph: {
    title: 'Find a Roommate in Palo Alto — Stanford Proximity, Tech Money & Verified Roommates | Find MyRoomie',
    description:
      'Palo Alto median 2BR $3,800–$4,800. Find verified roommates near Stanford, Sand Hill Road, Caltrain — free messaging, no subscription.',
    url: 'https://findmyroomy.com/apartments/palo-alto-ca/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Palo Alto affordable for Stanford students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not solo. Stanford PhD students on $38,000–$45,000 stipends cannot survive Palo Alto alone — the cheapest livable 1BR rents for $2,800/month. Most Stanford graduate students share. A 2BR split runs $1,900–$2,400/person versus $2,800–$3,500 solo. Even GSB students with larger budgets typically share to preserve optionality.",
      },
    },
    {
      "@type": "Question",
      name: "What neighborhoods are most affordable in Palo Alto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "East Palo Alto (technically a separate city on the border) is significantly more affordable. Within Palo Alto proper, Midtown and College Terrace are more affordable than Downtown or Professorville. The Caltrain station is walkable from downtown and College Terrace — making those neighborhoods the best value for non-car commuters.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I save with a roommate in Palo Alto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solo 2BR in Palo Alto: $4,300/month = $51,600/year. Split with one roommate: $2,150/month = $25,800/year. Annual savings: $25,800. Over a two-year Stanford program or early-stage startup stint, that's $51,600 — enough to meaningfully impact runway or investment capacity.",
      },
    },
  ],
};

export default function PaloAltoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PaloAltoContent />
    </>
  );
}
