import type { Metadata } from 'next';
import RedFlagsContent from './RedFlagsContent';

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

export default function RedFlagsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <RedFlagsContent />
    </>
  );
}
