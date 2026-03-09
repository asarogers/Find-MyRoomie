import type { Metadata } from 'next';
import CompatibilityQuizContent from './CompatibilityQuizContent';

export const metadata: Metadata = {
  title: 'Roommate Compatibility Quiz — Find Your Match Type | Find MyRoomie',
  description:
    'Take the 2-minute Bay Area roommate compatibility quiz. Discover your compatibility profile, see what matters most to your match, and find verified roommates who fit — free.',
  alternates: {
    canonical: 'https://findmyroomy.com/roommate-compatibility-quiz/',
  },
  openGraph: {
    title: 'Roommate Compatibility Quiz — Find Your Match Type | Find MyRoomie',
    description:
      'Take the 2-minute Bay Area roommate compatibility quiz. Discover your compatibility profile and find verified roommates who fit — free.',
    url: 'https://findmyroomy.com/roommate-compatibility-quiz/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roommate Compatibility Quiz | Find MyRoomie',
    description: '2-minute quiz. Find your match type. Free — no email required.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does the roommate compatibility quiz test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The quiz covers 6 dimensions that actually cause roommate conflicts: sleep schedule, cleanliness standards, guest frequency, kitchen use, work-from-home habits, and financial reliability expectations. These are the factors Reddit's r/roommates community identifies as the top sources of roommate disputes.",
      },
    },
    {
      "@type": "Question",
      name: "Is the roommate compatibility quiz free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The quiz is completely free. No email required to see your results. If you want to find verified roommates who match your profile, that's also free — no subscription, no paywall.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most common roommate compatibility issues?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per Reddit r/roommates (773K members): cleanliness standards (#1), guests/overnight visitors, rent and bill splitting disputes, kitchen etiquette, noise/quiet hours, and work-from-home schedule overlap. The quiz scores you on all 6 to identify potential friction points before you commit.",
      },
    },
  ],
};

export default function CompatibilityQuizPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CompatibilityQuizContent />
    </>
  );
}
