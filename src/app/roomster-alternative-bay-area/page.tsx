import type { Metadata } from 'next';
import RoomsterAlternativeBayAreaContent from './RoomsterAlternativeBayAreaContent';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Roomster Alternative Bay Area — FTC-Settled Competitor, Free Messaging | Find MyRoomie',
  description:
    'Roomster was FTC-fined $1.4M for fake listings in 2023. Still charging $30/month. Bay Area roommate seekers need a verified, free alternative. Find MyRoomie delivers.',
  alternates: {
    canonical: 'https://findmyroomy.com/roomster-alternative-bay-area/',
  },
  openGraph: {
    title: 'Roomster Alternative Bay Area — FTC-Settled Competitor, Free Messaging | Find MyRoomie',
    description:
      'Roomster was FTC-fined $1.4M for fake listings in 2023. Still charging $30/month. Bay Area roommate seekers need a verified, free alternative. Find MyRoomie delivers.',
    url: 'https://findmyroomy.com/roomster-alternative-bay-area/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is Roomster banned in some states?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Roomster settled with the FTC in 2023 over deceptive practices including fake listings and false endorsements — paying a $1.4 million settlement. The settlement required Roomster to stop its deceptive practices, but the platform still operates with paid subscriptions.",
      },
    },
    {
      "@type": "Question",
      name: "What does Roomster charge in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of March 2026, Roomster's basic subscription starts at approximately $30/month, auto-renewing from an $11.99 7-day trial unless manually cancelled. Users cannot message listings or read messages without an active subscription.",
      },
    },
    {
      "@type": "Question",
      name: "Does FindMyRoomie work in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. FindMyRoomie is built specifically for Bay Area roommate seekers. Verified listings in San Francisco, San Jose, Oakland, Berkeley, Sunnyvale, and all major Bay Area cities. Free messaging, no subscription, no credit card required.",
      },
    },
    {
      "@type": "Question",
      name: "Is FindMyRoomie safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Government ID verification on every profile. No advance deposit transactions via platform. Free messaging means you can screen potential roommates thoroughly before committing. Unlike Craigslist or Roomster's unverified listings.",
      },
    },
    {
      "@type": "Question",
      name: "Why did the FTC sue Roomster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In 2023, the FTC alleged that Roomster bought fake reviews, posted fake listings to make the platform appear more active, and deceived consumers. The $1.4 million settlement required them to stop these practices.",
      },
    },
  ],
};

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'Roomster Alternative Bay Area', url: 'https://findmyroomy.com/roomster-alternative-bay-area/' },
]);

const svcSchema = serviceSchema({
  name: 'Find MyRoomie — Free Bay Area Roommate Finder',
  description: 'Roomster was FTC-fined $1.4M for fake listings in 2023. Still charging $30/month. Bay Area roommate seekers need a verified, free alternative. Find MyRoomie delivers.',
  url: 'https://findmyroomy.com/roomster-alternative-bay-area/',
  areaServed: 'San Francisco Bay Area, California',
});

export default function RoomsterAlternativeBayAreaPage() {
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
      <RoomsterAlternativeBayAreaContent />
    </>
  );
}
