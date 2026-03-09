import type { Metadata } from 'next';
import FirstWeekSfContent from './FirstWeekSfContent';
import { breadcrumbSchema, articleSchema, howToSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'First Week in San Francisco — Housing Survival Guide (2026) | Find MyRoomie',
  description:
    'Just arrived in SF with no permanent housing? Here is exactly what to do, in order, starting day 1. Includes neighborhoods to avoid, verified platforms, and scam alerts.',
  alternates: { canonical: 'https://findmyroomy.com/how-to/first-week-san-francisco/' },
  openGraph: {
    title: 'First Week in San Francisco — Housing Survival Guide (2026)',
    description: 'Just arrived in SF with no permanent housing? Here is exactly what to do, in order, starting day 1.',
    url: 'https://findmyroomy.com/how-to/first-week-san-francisco/',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where do I stay in SF while apartment hunting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Extended stay hotels in SOMA (Residence Inn, Home2 Suites) are the most practical option at $160–$220/night. Budget 7–14 days maximum. Airbnb in a neighborhood you are considering renting doubles as a trial run — walk the streets at different times before committing to a year-long lease.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to find an apartment in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a solo apartment, the SF market typically takes 4–8 weeks from active searching to move-in. For a shared room via a verified platform like Find MyRoomie, the timeline is faster — typically 2–4 weeks if you are flexible on exact neighborhood. Starting your search before you arrive reduces this to near-zero post-arrival time.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good price for a shared room in SF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In 2026, expect to pay $1,900–$2,500/month for a private room in a shared SF apartment in good neighborhoods (SOMA, Mission, Castro, Hayes Valley). The Sunset and Inner Richmond run $1,700–$2,000/month. Anything under $1,500/month for a private room in SF proper is a red flag — verify the listing carefully before sending any money.",
      },
    },
    {
      "@type": "Question",
      name: "How do I avoid scams when looking for housing in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main rule: never send a deposit to anyone you have not met in person at the actual property. Common SF-specific scams include gorgeous photos of Tenderloin apartments at below-market prices, 'overseas landlord' stories requiring upfront deposits, and micro-units listed as studios. Use verified platforms with ID checks, and always see the unit before paying anything.",
      },
    },
  ],
};

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'How-To Guides', url: 'https://findmyroomy.com/how-to/' },
  { name: 'First Week in San Francisco — Housing Survival Guide', url: 'https://findmyroomy.com/how-to/first-week-san-francisco/' },
]);

const artSchema = articleSchema({
  title: 'First Week in San Francisco — Housing Survival Guide (2026)',
  description: 'Just arrived in SF with no permanent housing? Here is exactly what to do, in order, starting day 1. Includes neighborhoods to avoid, verified platforms, and scam alerts.',
  url: 'https://findmyroomy.com/how-to/first-week-san-francisco/',
  datePublished: '2025-12-01',
  dateModified: '2026-03-09',
});

const howSchema = howToSchema({
  name: 'First Week in San Francisco — Housing Survival Guide',
  description: 'What to do in your first week in SF to secure permanent housing without overpaying or falling for scams',
  steps: [
    { name: 'Days 1–3: Secure temporary housing', text: 'Book an extended stay hotel in SOMA (Residence Inn or Home2 Suites, $160–$220/night) or an Airbnb in a neighborhood you are considering. Do not sign any lease on day one. Your only goal is a stable base.' },
    { name: 'Days 3–7: Scout your target neighborhoods', text: 'Visit SOMA, the Mission, the Sunset, and Inner Richmond at different times of day — 8am and 11pm. Only sign in a neighborhood you have spent at least 4 hours in at different times. SF neighborhoods feel completely different at night.' },
    { name: 'Days 7–14: Find your roommate on a verified platform', text: 'Create a profile on Find MyRoomie — free, ID-verified, Bay Area-specific. Message 10–15 candidates in your target neighborhood. Video call the top matches before scheduling in-person viewings.' },
    { name: 'Verify listings before any payment', text: 'Never send a deposit to anyone you have not met in person at the actual property. Any listing priced 30%+ below comparable SF rooms is almost certainly a scam. Verify the address on Google Street View and check the building exterior against listing photos.' },
    { name: 'Sign a written roommate agreement before move-in', text: 'Once you have found your roommate, get the rent split, utilities, and move-out notice period in writing before move-in day. In SF, an unwritten arrangement has real financial and legal consequences given SF rent control.' },
  ],
});

export default function FirstWeekSfPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(artSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howSchema) }} />
      <FirstWeekSfContent />
    </>
  );
}
