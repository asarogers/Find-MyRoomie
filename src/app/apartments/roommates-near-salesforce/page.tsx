import type { Metadata } from 'next';
import RoommatesNearSalesforceContent from './RoommatesNearSalesforceContent';

export const metadata: Metadata = {
  title: 'Roommates Near Salesforce SF — Verified, Free | Find MyRoomie',
  description:
    'Salesforce employees finding roommates near Salesforce Tower SF. SOMA, Financial District, Mission, East Bay — rent math, commute times, free verified matching.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/roommates-near-salesforce/',
  },
  openGraph: {
    title: 'Roommates Near Salesforce SF — Verified, Free | Find MyRoomie',
    description:
      'Salesforce employees finding roommates near Salesforce Tower SF. SOMA, Financial District, Mission, East Bay — rent math, commute times, free verified matching.',
    url: 'https://findmyroomy.com/apartments/roommates-near-salesforce/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where do Salesforce employees live in SF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SOMA and Rincon Hill (walking distance, $2,000–$2,400/person split), Mission District ($1,700–$2,000/person, 20 min), Oakland ($1,300–$1,600/person, 30 min BART), and Berkeley ($1,500–$1,800/person, 35 min BART).",
      },
    },
    {
      "@type": "Question",
      name: "Is Salesforce Tower expensive to live near?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Salesforce Tower is in SF's Financial District/SOMA. Solo 1BR within a 15-min walk runs $3,500–$4,200/month. A roommate split brings that to $2,000–$2,400/person — still expensive. Oakland via BART cuts that nearly in half.",
      },
    },
    {
      "@type": "Question",
      name: "Do Salesforce Ohana relocations include housing help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Salesforce offers relocation packages for some hires but no direct housing placement. International employees still face the same SF housing gauntlet: no US credit history, income requirements, and a competitive rental market. Verified roommate matching solves the first-mover problem.",
      },
    },
    {
      "@type": "Question",
      name: "How does Find MyRoomie work for Salesforce Tower commuters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free messaging, verified profiles, and Bay Area-specific context including BART route times from Oakland and Berkeley to Salesforce Tower. No subscription. No Roomster paywall.",
      },
    },
  ],
};

export default function RoommatesNearSalesforcePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RoommatesNearSalesforceContent />
    </>
  );
}
