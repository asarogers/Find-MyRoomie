import type { Metadata } from 'next';
import RedFlagsContent from './RedFlagsContent';
import { breadcrumbSchema, articleSchema, howToSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '23 Roommate Red Flags to Watch For (2026) — From 10,000 SF Listings',
  description:
    'The roommate red flags that show up again and again in San Francisco listings. What to look for in profiles, messages, and viewings — before you sign anything.',
  alternates: { canonical: 'https://findmyroomy.com/how-to/roommate-red-flags/' },
  openGraph: {
    title: '23 Roommate Red Flags to Watch For (2026)',
    description: 'The profile signals, message patterns, and viewing behaviors that predict a bad roommate situation — specific to Bay Area renter context.',
    url: 'https://findmyroomy.com/how-to/roommate-red-flags/',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the biggest roommate red flags?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The highest-risk signals: (1) Refuses to share references, (2) Won't meet in-person before committing, (3) Has had 'misunderstandings' with every previous roommate, (4) Can't explain a gap in housing history, (5) Pushes to sign or pay before you're ready, (6) Inconsistent details between profile and conversation.",
      },
    },
    {
      "@type": "Question",
      name: "How do you screen a potential roommate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key screening steps: Video call before any in-person meeting. Ask for two references from previous roommates (not family). Walk the actual space together — not just common areas. Discuss finances, guests, and noise explicitly. Verify identity through a verified platform before proceeding.",
      },
    },
  ],
};

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'How-To Guides', url: 'https://findmyroomy.com/how-to/' },
  { name: '23 Roommate Red Flags to Watch For (2026)', url: 'https://findmyroomy.com/how-to/roommate-red-flags/' },
]);

const artSchema = articleSchema({
  title: '23 Roommate Red Flags to Watch For (2026) — From 10,000 SF Listings',
  description: 'The roommate red flags that show up again and again in San Francisco listings. What to look for in profiles, messages, and viewings — before you sign anything.',
  url: 'https://findmyroomy.com/how-to/roommate-red-flags/',
  datePublished: '2025-12-01',
  dateModified: '2026-03-09',
});

const howSchema = howToSchema({
  name: 'How to Screen a Roommate and Spot Red Flags',
  description: 'How to identify roommate red flags at each stage of the screening process before signing anything',
  steps: [
    { name: 'Screen the profile for red flags before messaging', text: 'Look for: incomplete profile with no photo, vague bio with no specifics, inconsistencies between listed schedule and described lifestyle, and profiles that have been up for a long time without edits. On unverified platforms, any anonymous profile is a risk.' },
    { name: 'Video call before any in-person meeting', text: 'Require a video call before meeting in person. Watch for: reluctance to video call, inconsistency between what they said in messages vs. what they say on call, and mismatches between described schedule and actual availability. A red flag on video call saves you an in-person visit.' },
    { name: 'Ask for two previous roommate references', text: 'Request references from past roommates — not family or friends. Anyone who has had "misunderstandings" with every previous roommate is signaling a pattern. Anyone who refuses references entirely is disqualified.' },
    { name: 'Do the in-person viewing carefully', text: 'Walk the actual bedroom and every shared space — not just the common areas they want to show you. Look for signs of the actual living situation: condition of kitchen, bathroom, and shared surfaces. Notice how they interact with current roommates if present.' },
    { name: 'Verify identity before committing', text: 'Verify the person\'s identity through a verified platform before signing anything or paying any deposit. Pushing you to sign or pay before you are ready is itself a red flag — legitimate roommates give you time to do due diligence.' },
  ],
});

export default function RedFlagsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(artSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howSchema) }} />
      <RedFlagsContent />
    </>
  );
}
