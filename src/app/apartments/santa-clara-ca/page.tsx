import type { Metadata } from 'next';
import SantaClaraContent from './SantaClaraContent';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Find a Roommate in Santa Clara — Intel, Nvidia, AMD Hub | Find MyRoomie',
  description:
    'Santa Clara hosts Intel HQ, Nvidia HQ, and AMD HQ within 2 miles. Find verified roommates near Diridon Station and the tech corridor — free messaging, no subscription.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/santa-clara-ca/',
  },
  openGraph: {
    title: 'Find a Roommate in Santa Clara — Intel, Nvidia, AMD Hub | Find MyRoomie',
    description:
      'Intel, Nvidia, AMD HQs all within 2 miles. Find verified roommates in Santa Clara — free messaging, no subscription.',
    url: 'https://findmyroomy.com/apartments/santa-clara-ca/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is Santa Clara a good location for tech workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Santa Clara has the highest concentration of major chip company headquarters of any city in the world. Intel HQ, Nvidia HQ, and AMD HQ are all within a two-mile radius. Add in Applied Materials, Palo Alto Networks, and ServiceNow, and Santa Clara is effectively the semiconductor capital of Silicon Valley.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I save with a roommate in Santa Clara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Santa Clara 1BR runs $2,900–$3,400/month. A 2BR split brings your cost to $1,600–$1,900/person — saving $1,000–$1,500/month versus living alone. Over a year, that's $12,000–$18,000 in additional take-home.",
      },
    },
    {
      "@type": "Question",
      name: "Is Diridon Station useful for commuters in Santa Clara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Diridon is Santa Clara's main transit hub — Caltrain, ACE (Altamont Corridor Express), and Amtrak Capitol Corridor all converge there. Future BART extension will add direct connections to San Jose, Oakland, and San Francisco. Living near Diridon is the smartest commuter decision in the South Bay for anyone who doesn't drive.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Find MyRoomie cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Find MyRoomie is completely free. No subscription, no credit card, no paywall to message anyone. Unlike Roomster, which charges $29.99/month to access messaging, Find MyRoomie is free to browse, post, and contact verified roommates.",
      },
    },
  ],
};

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'Apartments', url: 'https://findmyroomy.com/apartments/' },
  { name: 'Santa Clara, CA', url: 'https://findmyroomy.com/apartments/santa-clara-ca/' },
]);

const svcSchema = serviceSchema({
  name: 'Find MyRoomie — Santa Clara Roommate Finder',
  description: 'Santa Clara hosts Intel HQ, Nvidia HQ, and AMD HQ within 2 miles. Find verified roommates near Diridon Station and the tech corridor — free messaging, no subscription.',
  url: 'https://findmyroomy.com/apartments/santa-clara-ca/',
  areaServed: 'Santa Clara, California',
});

export default function SantaClaraPage() {
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
      <SantaClaraContent />
    </>
  );
}
