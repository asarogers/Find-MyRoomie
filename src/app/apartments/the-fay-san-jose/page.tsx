import type { Metadata } from 'next';
import TheFaySanJoseContent from './TheFaySanJoseContent';

export const metadata: Metadata = {
  title: 'The Fay San Jose — Foreclosure, Rent Ranges & What Renters Need to Know | Find MyRoomie',
  description:
    "The Fay is a 336-unit luxury high-rise in downtown San Jose currently in active foreclosure with 60% vacancy. Here's what that means if you're considering moving in.",
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/the-fay-san-jose/',
  },
  openGraph: {
    title: 'The Fay San Jose — Foreclosure, Rent Ranges & What Renters Need to Know | Find MyRoomie',
    description:
      "The Fay is a 336-unit luxury high-rise in downtown San Jose currently in active foreclosure with 60% vacancy. Here's what that means if you're considering moving in.",
    url: 'https://findmyroomy.com/apartments/the-fay-san-jose/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Fay San Jose — Foreclosure & Renter Guide | Find MyRoomie',
    description: 'The Fay at 600 S. First Street is in active foreclosure with 60% vacancy. What renters need to know before signing.',
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
        text: "Yes. The Fay at 600 S. First Street entered active foreclosure proceedings in January 2026. The building is approximately 60% vacant. Ownership is in legal dispute.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to my lease if The Fay changes ownership?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under California law, existing leases survive a foreclosure sale — the new owner is bound by them. However, lease renewals and month-to-month arrangements may not be honored by incoming ownership.",
      },
    },
    {
      "@type": "Question",
      name: "Are there good deals available at The Fay right now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buildings at 60% vacancy are actively negotiating. You may be able to secure below-market rent, free months, or reduced deposits — in exchange for taking on the risk of ownership transition during your lease term.",
      },
    },
  ],
};

export default function TheFaySanJosePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TheFaySanJoseContent />
    </>
  );
}
