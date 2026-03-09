import type { Metadata } from 'next';
import NeoOnFirstContent from './NeoOnFirstContent';

export const metadata: Metadata = {
  title: 'Neo on First San Jose — Loan Default, Renter Rights & What the Foreclosure Means | Find MyRoomie',
  description:
    'Neo on First at 955–975 S. First Street is in active default on a multi-million dollar loan as of February 2026. What current and prospective renters need to know before signing.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/neo-on-first-san-jose/',
  },
  openGraph: {
    title: 'Neo on First San Jose — Loan Default, Renter Rights & What the Foreclosure Means | Find MyRoomie',
    description:
      'Neo on First at 955–975 S. First Street is in active default on a multi-million dollar loan as of February 2026. What current and prospective renters need to know before signing.',
    url: 'https://findmyroomy.com/apartments/neo-on-first-san-jose/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neo on First San Jose — Loan Default & Renter Guide | Find MyRoomie',
    description: 'Neo on First is in active loan default as of Feb 2026. What renters need to know before signing.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Neo on First San Jose in financial trouble?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Neo on First at 955–975 S. First Street is in active loan default as of February 2026, with foreclosure proceedings underway — the second downtown San Jose luxury complex to enter distress within 60 days.",
      },
    },
    {
      "@type": "Question",
      name: "How long does foreclosure take in California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Six to twelve months from initial default to completed sale or receivership. Budget for 6–18 months of ownership ambiguity if you sign a lease at Neo on First today.",
      },
    },
    {
      "@type": "Question",
      name: "Is the South First Street corridor a good location despite the foreclosure situation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the location is genuinely strong. Caltrain's Diridon Station provides direct access to SF and the Peninsula. The nearby Google Downtown West campus represents a long-term demand signal. The financial distress is about oversupply and interest rates, not location quality.",
      },
    },
  ],
};

export default function NeoOnFirstPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NeoOnFirstContent />
    </>
  );
}
