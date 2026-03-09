import type { Metadata } from 'next';
import Find30DaysContent from './Find30DaysContent';
import { breadcrumbSchema, articleSchema, howToSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Find a Verified SF Roommate in 30 Days — The Checklist (2026)',
  description:
    'The 30-day roommate search checklist for San Francisco. What to do weeks 1-4 to go from "I need a roommate" to signed lease with a verified match. Free platforms only.',
  alternates: { canonical: 'https://findmyroomy.com/how-to/find-roommate-30-days/' },
  openGraph: {
    title: 'Find a Verified SF Roommate in 30 Days — The Checklist (2026)',
    description: 'Week-by-week checklist for finding a verified SF roommate in 30 days. What to do, what to skip, and which platforms to use (free vs paid).',
    url: 'https://findmyroomy.com/how-to/find-roommate-30-days/',
    type: 'article',
  },
};

const inlineHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Find a Verified SF Roommate in 30 Days",
  description: "The 30-day checklist to go from 'I need a roommate' to signed lease with a verified Bay Area match.",
  step: [
    {
      "@type": "HowToStep",
      name: "Week 1: Create a verified profile and send 20 messages",
      text: "Create your profile on Find MyRoomie. Write a specific bio. Send 20 personalized first messages — not copy-paste. Your response rate will be 20-40%.",
    },
    {
      "@type": "HowToStep",
      name: "Week 2: Conduct video calls with your top 5 matches",
      text: "Move promising conversations to a 20-minute video call. Red flags at this stage save you from bad in-person viewings. Confirm schedule compatibility, cleanliness norms, and deal-breakers.",
    },
    {
      "@type": "HowToStep",
      name: "Week 3: In-person viewings and reference checks",
      text: "Visit the top 3 in person. Ask for one previous roommate reference for each. Verify their identity independently. Check the actual bedroom, not just common areas.",
    },
    {
      "@type": "HowToStep",
      name: "Week 4: Lease signing and move coordination",
      text: "Send your top choice a written offer. Get a roommate agreement in writing even if informal. Confirm lease terms with the landlord. Confirm move-in date, utilities split, and key handoff.",
    },
  ],
};

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'How-To Guides', url: 'https://findmyroomy.com/how-to/' },
  { name: 'Find a Verified SF Roommate in 30 Days', url: 'https://findmyroomy.com/how-to/find-roommate-30-days/' },
]);

const artSchema = articleSchema({
  title: 'Find a Verified SF Roommate in 30 Days — The Checklist (2026)',
  description: 'The 30-day roommate search checklist for San Francisco. What to do weeks 1-4 to go from "I need a roommate" to signed lease with a verified match.',
  url: 'https://findmyroomy.com/how-to/find-roommate-30-days/',
  datePublished: '2025-12-01',
  dateModified: '2026-03-09',
});

const howSchema = howToSchema({
  name: 'Find a Verified SF Roommate in 30 Days',
  description: 'The week-by-week checklist to find a verified Bay Area roommate and reach a signed lease within 30 days',
  steps: [
    { name: 'Week 1: Create a verified profile and send 20 messages', text: 'Create your profile on Find MyRoomie. Write a specific bio. Send 20 personalized first messages — not copy-paste. Your response rate will be 20–40%.' },
    { name: 'Week 2: Conduct video calls with your top 5 matches', text: 'Move promising conversations to a 20-minute video call. Confirm schedule compatibility, cleanliness norms, and deal-breakers before any in-person visit.' },
    { name: 'Week 3: In-person viewings and reference checks', text: 'Visit the top 3 candidates in person. Ask for one previous roommate reference for each. Verify identity independently through a verified platform.' },
    { name: 'Week 4: Lease signing and move coordination', text: 'Send your top choice a written offer. Get a roommate agreement in writing. Confirm lease terms, move-in date, utilities split, and key handoff.' },
  ],
});

export default function Find30DaysPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(inlineHowToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(artSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howSchema) }} />
      <Find30DaysContent />
    </>
  );
}
