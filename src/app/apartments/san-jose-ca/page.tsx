import type { Metadata } from 'next';
import SanJoseContent from './SanJoseContent';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Find a Roommate in San Jose — Silicon Valley\'s Affordable Hub | Find MyRoomie',
  description:
    'San Jose median 2BR: $2,800–$3,400. Find verified roommates near Diridon, Berryessa, downtown SJ — free messaging, no subscription.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/san-jose-ca/',
  },
  openGraph: {
    title: 'Find a Roommate in San Jose — Silicon Valley\'s Affordable Hub | Find MyRoomie',
    description:
      'San Jose median 2BR: $2,800–$3,400. Find verified roommates near Diridon, Berryessa, downtown SJ — free messaging, no subscription.',
    url: 'https://findmyroomy.com/apartments/san-jose-ca/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is San Jose cheaper than San Francisco for renters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. San Jose median 1BR runs $2,200–$2,700/month vs SF's $3,545 median. A 2BR split in San Jose brings per-person costs to $1,400–$1,700/month — among the lowest in the Bay Area tech corridor.",
      },
    },
    {
      "@type": "Question",
      name: "What neighborhoods are best for tech workers in San Jose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Downtown SJ (near Diridon/SAP Center), North San Jose/Berryessa (near Intel, Cisco, BART), Willow Glen (family-friendly, lower density), and Rose Garden (walkable, established). Each has a distinct renter profile and price point.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Indian community large in San Jose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. San Jose's Berryessa district and surrounding North San Jose neighborhoods have one of the most established Indian-American communities in the Bay Area — second only to Fremont in density. Many H-1B and L-1 workers at Intel, Cisco, and Nvidia live here.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I save with a roommate in San Jose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solo 1BR in San Jose: ~$2,400/month ($28,800/year). Share a 2BR: ~$1,500/person ($18,000/year). Annual savings: $10,800 — plus the flexibility to live in a better location than your solo budget would allow.",
      },
    },
  ],
};

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'Apartments', url: 'https://findmyroomy.com/apartments/' },
  { name: 'San Jose, CA', url: 'https://findmyroomy.com/apartments/san-jose-ca/' },
]);

const svcSchema = serviceSchema({
  name: 'Find MyRoomie — San Jose Roommate Finder',
  description: "San Jose median 2BR: $2,800–$3,400. Find verified roommates near Diridon, Berryessa, downtown SJ — free messaging, no subscription.",
  url: 'https://findmyroomy.com/apartments/san-jose-ca/',
  areaServed: 'San Jose, California',
});

export default function SanJosePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }}
      />
      <SanJoseContent />
    </>
  );
}
