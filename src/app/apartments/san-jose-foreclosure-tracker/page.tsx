import type { Metadata } from 'next';
import SanJoseForeclosureTrackerContent from './SanJoseForeclosureTrackerContent';

export const metadata: Metadata = {
  title: 'San Jose Apartment Foreclosure Tracker 2026 — Live Status Updates | Find MyRoomie',
  description:
    'Track San Jose luxury apartment foreclosures in real time. The Fay: active foreclosure Jan 2026. Neo on First: Chapter 11 bankruptcy. What it means for renters.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/san-jose-foreclosure-tracker/',
  },
  openGraph: {
    title: 'San Jose Apartment Foreclosure Tracker 2026 — Live Status Updates | Find MyRoomie',
    description:
      'Track San Jose luxury apartment foreclosures in real time. The Fay: active foreclosure Jan 2026. Neo on First: Chapter 11 bankruptcy. What it means for renters.',
    url: 'https://findmyroomy.com/apartments/san-jose-foreclosure-tracker/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'San Jose Apartment Foreclosure Tracker 2026 | Find MyRoomie',
    description: 'The Fay: active foreclosure. Neo on First: Chapter 11. Full status dashboard for SJ renters.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is The Fay San Jose in foreclosure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Fay at 600 S. First Street entered active foreclosure proceedings in January 2026 after a $182.5 million loan default. The building is approximately 60% vacant as of early 2026.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to my lease if my building forecloses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under California law, existing leases survive a foreclosure sale. The new owner inherits your lease and is bound by its terms through the lease period. However, month-to-month arrangements and renewals are not guaranteed by incoming ownership.",
      },
    },
    {
      "@type": "Question",
      name: "Is Neo on First San Jose in foreclosure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Neo on First filed for Chapter 11 bankruptcy protection in January 2026 to halt a $21 million foreclosure action. The building remains operational but ownership restructuring is in progress.",
      },
    },
    {
      "@type": "Question",
      name: "Which San Jose apartments are financially stable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Crescent Village in North San Jose and Miro Downtown are operating at or near full occupancy with no known financial distress. Suburban and mid-market properties have significantly outperformed the downtown luxury segment in 2026.",
      },
    },
  ],
};

export default function SanJoseForeclosureTrackerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SanJoseForeclosureTrackerContent />
    </>
  );
}
