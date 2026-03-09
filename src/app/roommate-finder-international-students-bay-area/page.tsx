import type { Metadata } from 'next';
import InternationalStudentsContent from './InternationalStudentsContent';

export const metadata: Metadata = {
  title: 'Roommate Finder for International Students — Bay Area, Verified & Free | Find MyRoomie',
  description:
    'Arriving for Fall 2026? UC Berkeley, Stanford, UCSF, and USF students are forming roommate groups now. Find verified Bay Area roommates before cohorts fill — free.',
  alternates: {
    canonical: 'https://findmyroomy.com/roommate-finder-international-students-bay-area/',
  },
  openGraph: {
    title: 'Roommate Finder for International Students — Bay Area, Verified & Free | Find MyRoomie',
    description:
      'Arriving for Fall 2026? UC Berkeley, Stanford, UCSF, and USF students are forming roommate groups now. Find verified Bay Area roommates before cohorts fill — free.',
    url: 'https://findmyroomy.com/roommate-finder-international-students-bay-area/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roommate Finder — International Students Bay Area | Find MyRoomie',
    description: 'Fall 2026 cohorts forming now. Free, verified Bay Area roommates for UC Berkeley, Stanford, UCSF, USF.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need to pay anything?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Messaging is free. Creating a verified profile is free. There is no subscription and no trial period that converts to a charge.",
      },
    },
    {
      "@type": "Question",
      name: "I'm not in the US yet — can I still create a profile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The entire process works remotely. You can verify your identity, create your profile, and message potential roommates before you arrive.",
      },
    },
    {
      "@type": "Question",
      name: "What if I don't find a match before I land?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your profile stays active. But students who start in March have consistently better options than students who start in July — because the people who found each other in March are signing leases before you arrive.",
      },
    },
    {
      "@type": "Question",
      name: "Is this specific to the Bay Area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are a Bay Area specialist. This is not a national platform that happens to include San Francisco. Every feature, every neighborhood guide, and every active user is Bay Area-focused.",
      },
    },
  ],
};

export default function InternationalStudentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <InternationalStudentsContent />
    </>
  );
}
