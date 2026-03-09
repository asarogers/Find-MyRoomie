import type { Metadata } from 'next';
import BerkeleyContent from './BerkeleyContent';

export const metadata: Metadata = {
  title: 'Find a Roommate in Berkeley — Students, Grad Students & Professionals | Find MyRoomie',
  description:
    'Berkeley near UC Berkeley and LBNL. Find verified roommates near campus, North Berkeley, Elmwood. Free messaging. No subscription. Fall 2026 cohorts forming now.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/berkeley-ca/',
  },
  openGraph: {
    title: 'Find a Roommate in Berkeley — Students, Grad Students & Professionals | Find MyRoomie',
    description:
      'Berkeley near UC Berkeley. Find verified roommates near campus, Elmwood, Downtown. Free messaging. No subscription. Fall 2026 cohorts forming now.',
    url: 'https://findmyroomy.com/apartments/berkeley-ca/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Find MyRoomie good for UC Berkeley students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Find MyRoomie is built specifically for verified roommate matching — which is what Berkeley students need most. WhatsApp groups and Craigslist have no verification. Roomster charges $29.99/month, which is not reasonable on a graduate stipend. Find MyRoomie is free, verified, and designed for the March-April search window when Berkeley roommate groups actually form.",
      },
    },
    {
      "@type": "Question",
      name: "When should I start my Berkeley roommate search?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "March and April are the peak window. Groups that form in this period lock in housing by June. People who start searching in July are competing for what is left — often paying 15–20% more for lower-quality options. If you're starting a program in Fall 2026, start now.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I save with a roommate near UC Berkeley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A solo studio near campus runs $2,200–$2,600/month. A verified room in a shared house via Find MyRoomie runs $1,200–$1,600/month. That's $600–$1,400/month in savings — or $7,200–$16,800/year. On a graduate stipend, that difference determines financial stability.",
      },
    },
  ],
};

export default function BerkeleyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BerkeleyContent />
    </>
  );
}
