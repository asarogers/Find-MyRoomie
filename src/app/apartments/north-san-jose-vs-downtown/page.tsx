import type { Metadata } from 'next';
import NorthVsDowntownSjContent from './NorthVsDowntownSjContent';

export const metadata: Metadata = {
  title: 'North San Jose vs Downtown San Jose — Where to Live in 2026 | Find MyRoomie',
  description:
    'North SJ: stable, near Tesla/Cisco, $900-$1,500 shared rooms. Downtown SJ: 2 towers in foreclosure, concession deals, urban amenities. The definitive 2026 comparison.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/north-san-jose-vs-downtown/',
  },
  openGraph: {
    title: 'North San Jose vs Downtown San Jose — Where to Live in 2026 | Find MyRoomie',
    description:
      'North SJ: stable, near Tesla/Cisco, $900-$1,500 shared rooms. Downtown SJ: 2 towers in foreclosure, concession deals, urban amenities. The definitive 2026 comparison.',
    url: 'https://findmyroomy.com/apartments/north-san-jose-vs-downtown/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'North San Jose vs Downtown San Jose 2026 | Find MyRoomie',
    description: 'Stability vs urban life. Tech proximity vs walkability. The full 2026 comparison for SJ renters.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is North San Jose or Downtown San Jose better for tech workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your employer. For Cisco, Intel, Samsung, or Western Digital employees, North San Jose offers 10-15 minute commutes with zero traffic stress. For Adobe employees, downtown San Jose is a 5-minute walk to Adobe HQ. For SF-based hybrid workers, downtown's Caltrain access is superior.",
      },
    },
    {
      "@type": "Question",
      name: "Why are downtown San Jose apartments cheap right now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Two major downtown towers — The Fay (336 units, $182.5M default, 60% vacant) and Neo on First (Chapter 11 bankruptcy) — are offering concessions to attract tenants during financial distress. This creates temporarily below-market pricing in the downtown core.",
      },
    },
    {
      "@type": "Question",
      name: "Which San Jose neighborhood has the best roommate options?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "North San Jose has a deep roommate pool among tech workers, particularly near Berryessa and the Milpitas border. Shared rooms run $900-$1,500/month. Downtown has fewer shared listings but more flexible lease terms due to current vacancy pressure.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to rent in downtown San Jose during the foreclosure situation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "California law protects existing leases through foreclosure — your lease survives a building sale. The real risk is management instability: maintenance delays, staffing cuts, and renewal uncertainty. If you sign a 12-month lease at a foreclosure-discounted rate, you're legally protected for that term. The risk is post-lease uncertainty.",
      },
    },
  ],
};

export default function NorthVsDowntownSjPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NorthVsDowntownSjContent />
    </>
  );
}
