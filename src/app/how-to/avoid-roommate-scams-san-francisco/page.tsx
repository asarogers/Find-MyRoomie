import type { Metadata } from 'next';
import ScamGuideContent from './ScamGuideContent';
import { breadcrumbSchema, articleSchema, howToSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '7 Roommate Scam Red Flags in San Francisco (2026 Guide)',
  description:
    'Craigslist roommate scams cost SF renters thousands of dollars per year. Here are 7 specific red flags — and how verified platforms eliminate the risk entirely.',
  alternates: { canonical: 'https://findmyroomy.com/how-to/avoid-roommate-scams-san-francisco/' },
  openGraph: {
    title: '7 Roommate Scam Red Flags in San Francisco (2026)',
    description:
      'Specific scam patterns targeting Bay Area renters: advance deposits, too-good listings, fake verification requests. Plus how to find roommates safely for free.',
    url: 'https://findmyroomy.com/how-to/avoid-roommate-scams-san-francisco/',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I avoid roommate scams in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use verified platforms only. Never pay a deposit before viewing the room in person or via a verified video call. Any listing that asks for payment via wire transfer, Zelle, or gift cards is a scam. Verify the landlord or lister's identity before sending any money.",
      },
    },
    {
      "@type": "Question",
      name: "What are common roommate scams in SF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common SF roommate scam patterns: (1) Advance deposit requests before viewing, (2) Photos that are too good for the price point, (3) Landlord who is 'traveling' and can't show the unit, (4) Pressure to decide immediately, (5) Payment via wire, Zelle, or gift cards, (6) Requests for your Social Security number or passport before signing anything.",
      },
    },
    {
      "@type": "Question",
      name: "Is Craigslist safe for finding roommates in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Craigslist has no identity verification, no accountability for repeat scammers, and documented scam rings targeting SF newcomers. It is usable with extreme caution — verify in-person before paying anything. Verified platforms like Find MyRoomie eliminate this risk.",
      },
    },
  ],
};

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'How-To Guides', url: 'https://findmyroomy.com/how-to/' },
  { name: '7 Roommate Scam Red Flags in San Francisco', url: 'https://findmyroomy.com/how-to/avoid-roommate-scams-san-francisco/' },
]);

const artSchema = articleSchema({
  title: '7 Roommate Scam Red Flags in San Francisco (2026 Guide)',
  description: 'Craigslist roommate scams cost SF renters thousands of dollars per year. Here are 7 specific red flags — and how verified platforms eliminate the risk entirely.',
  url: 'https://findmyroomy.com/how-to/avoid-roommate-scams-san-francisco/',
  datePublished: '2025-12-01',
  dateModified: '2026-03-09',
});

const howSchema = howToSchema({
  name: '7 Roommate Scam Red Flags in San Francisco',
  description: 'How to spot and avoid roommate scams in the Bay Area',
  steps: [
    { name: 'Recognize advance deposit red flags', text: 'Never pay a deposit, holding fee, or first month before you have physically seen the room. Any request for money before a viewing is a scam.' },
    { name: 'Verify listing photos with a reverse image search', text: 'Do a reverse image search on all listing photos. Scammers use photos scraped from legitimate listings in other cities. If the interior does not match the building exterior, walk away.' },
    { name: 'Insist on in-person viewing', text: 'Any landlord or lister who refuses to show the room in person — citing travel, illness, or being overseas — is a scam signal. Legitimate landlords always agree to an in-person showing before accepting money.' },
    { name: 'Use only verified payment methods', text: 'Legitimate landlords accept checks or bank transfer with a paper trail. Wire transfer, Zelle, Venmo, or gift card requests for deposits are irreversible and untraceable — that is why scammers demand them.' },
    { name: 'Use a verified platform', text: 'Find MyRoomie verifies all profiles before they go live, eliminating anonymous scam operators entirely. You cannot contact a fake profile because fake profiles cannot be created on the platform.' },
  ],
});

export default function ScamGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(artSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howSchema) }} />
      <ScamGuideContent />
    </>
  );
}
