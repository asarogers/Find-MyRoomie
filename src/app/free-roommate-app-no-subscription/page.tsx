import type { Metadata } from 'next';
import FreeAppContent from './FreeAppContent';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Free Roommate App — No Subscription, No Fees, No Paywall (2026)',
  description:
    'Find a roommate in the Bay Area without paying $30/month. Find MyRoomie is 100% free — no subscription, no messaging fees, no credit card required. Verified profiles.',
  alternates: { canonical: 'https://findmyroomy.com/free-roommate-app-no-subscription/' },
  openGraph: {
    title: 'Free Roommate App — No Subscription, No Fees (2026)',
    description:
      'The only Bay Area roommate app where messaging is free forever. No subscription, no trial, no credit card. Verified profiles in SF, Oakland, San Jose, and surrounding cities.',
    url: 'https://findmyroomy.com/free-roommate-app-no-subscription/',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there really a free roommate app with no subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Find MyRoomie is completely free with no subscription, no messaging fees, and no credit card required. You can browse and message verified Bay Area roommate listings at no cost.",
      },
    },
    {
      "@type": "Question",
      name: "What's the catch with free roommate apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most 'free' roommate apps are free to browse but charge $15-30/month to send messages. Find MyRoomie has no such paywall — messaging is genuinely free, permanently.",
      },
    },
    {
      "@type": "Question",
      name: "Why did Roomster charge me after a free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Roomster's 7-day trial auto-converts to a $29/month subscription unless you cancel. The FTC settled with Roomster in 2023 for $1.6 million over deceptive billing practices. Find MyRoomie has no trial, no subscription, and no auto-charge.",
      },
    },
    {
      "@type": "Question",
      name: "Does Find MyRoomie cover the Bay Area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Find MyRoomie is Bay Area-focused with verified listings in San Francisco, Oakland, Berkeley, San Jose, Fremont, Cupertino, Sunnyvale, Palo Alto, and surrounding cities.",
      },
    },
  ],
};

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'Free Roommate App No Subscription', url: 'https://findmyroomy.com/free-roommate-app-no-subscription/' },
]);

const svcSchema = serviceSchema({
  name: 'Find MyRoomie — Free Bay Area Roommate Finder',
  description: 'Find a roommate in the Bay Area without paying $30/month. Find MyRoomie is 100% free — no subscription, no messaging fees, no credit card required. Verified profiles.',
  url: 'https://findmyroomy.com/free-roommate-app-no-subscription/',
  areaServed: 'San Francisco Bay Area, California',
});

export default function FreeRoommateAppPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }} />
      <FreeAppContent />
    </>
  );
}
