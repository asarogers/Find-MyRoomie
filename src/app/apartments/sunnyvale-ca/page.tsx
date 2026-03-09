import type { Metadata } from 'next';
import SunnyvaleContent from './SunnyvaleContent';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Find a Roommate in Sunnyvale — LinkedIn, Google, Lockheed Corridor | Find MyRoomie',
  description:
    'Sunnyvale is home to LinkedIn HQ, Lockheed Martin HQ, and 2 miles from Google. Find verified roommates near Caltrain and the tech corridor — free messaging, no subscription.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/sunnyvale-ca/',
  },
  openGraph: {
    title: 'Find a Roommate in Sunnyvale — LinkedIn, Google, Lockheed Corridor | Find MyRoomie',
    description:
      'LinkedIn HQ, Lockheed Martin HQ, Google 2 miles east. Find verified roommates in Sunnyvale — free messaging, no subscription.',
    url: 'https://findmyroomy.com/apartments/sunnyvale-ca/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What major employers are in Sunnyvale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LinkedIn's global headquarters is in Sunnyvale. Lockheed Martin's Silicon Valley hub is headquartered here. Google's main Mountain View campus is approximately two miles east. Juniper Networks, Synopsys, and Yahoo are also headquartered in Sunnyvale. The city sits in one of the densest employer corridors in Silicon Valley.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I save with a roommate in Sunnyvale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sunnyvale 1BR runs $2,700–$3,200/month. A 2BR split brings your cost to $1,500–$1,800/person — saving $1,200–$1,700/month versus living alone. Over a year, that's $14,400–$20,400 in additional take-home pay.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Caltrain commute good from Sunnyvale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sunnyvale has its own Caltrain station with direct service to San Francisco (about 70 minutes local, 55 minutes Baby Bullet). It's the main non-car commute option for LinkedIn, Google, and Lockheed employees who want to avoid driving on 101 or 237.",
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
  { name: 'Sunnyvale, CA', url: 'https://findmyroomy.com/apartments/sunnyvale-ca/' },
]);

const svcSchema = serviceSchema({
  name: 'Find MyRoomie — Sunnyvale Roommate Finder',
  description: 'Sunnyvale is home to LinkedIn HQ, Lockheed Martin HQ, and 2 miles from Google. Find verified roommates near Caltrain and the tech corridor — free messaging, no subscription.',
  url: 'https://findmyroomy.com/apartments/sunnyvale-ca/',
  areaServed: 'Sunnyvale, California',
});

export default function SunnyvalePage() {
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
      <SunnyvaleContent />
    </>
  );
}
