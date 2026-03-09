import type { Metadata } from 'next';
import Find30DaysContent from './Find30DaysContent';

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

const howToSchema = {
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

export default function Find30DaysPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Find30DaysContent />
    </>
  );
}
