import type { Metadata } from 'next';
import SunnyvaleNoAcContent from './SunnyvaleNoAcContent';

export const metadata: Metadata = {
  title: 'Sunnyvale Apartments Without Central AC — The Complete 2026 List | Find MyRoomie',
  description:
    'Many Sunnyvale apartments built before 1990 lack central AC. Mission Pointe confirmed no AC. What to check before signing — and which complexes actually have it.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/sunnyvale-no-ac-apartments/',
  },
  openGraph: {
    title: 'Sunnyvale Apartments Without Central AC — The Complete 2026 List | Find MyRoomie',
    description:
      'Many Sunnyvale apartments built before 1990 lack central AC. Mission Pointe confirmed no AC. What to check before signing — and which complexes actually have it.',
    url: 'https://findmyroomy.com/apartments/sunnyvale-no-ac-apartments/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunnyvale Apartments Without Central AC 2026 | Find MyRoomie',
    description: 'Mission Pointe confirmed no AC. Full list of Sunnyvale buildings with and without central air.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Mission Pointe Sunnyvale have central AC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Mission Pointe by Windsor in Sunnyvale does not have central air conditioning. Units rely on wall heaters for climate control. This has been confirmed through resident reports and listing descriptions. Given Sunnyvale's summer temperatures (average July high: 84°F, peaks above 100°F), this is a significant factor for many renters.",
      },
    },
    {
      "@type": "Question",
      name: "Which Sunnyvale apartments have central air conditioning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Confirmed central AC buildings in Sunnyvale include Montclaire at Sunnyvale, Villas at Moorpark, and Mithila (newer construction). Generally, any complex built after 2000 or advertising 'central HVAC' or 'forced air' in the amenity list has central AC.",
      },
    },
    {
      "@type": "Question",
      name: "How hot does Sunnyvale get in summer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sunnyvale averages a July high of 84°F with frequent heat waves pushing temperatures above 100°F. Unlike coastal SF, Sunnyvale lacks marine layer cooling. An apartment without AC in Sunnyvale is genuinely uncomfortable from June through September.",
      },
    },
    {
      "@type": "Question",
      name: "What should I check before renting in Sunnyvale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Always ask directly: 'Does this unit have central air conditioning or only wall heaters?' Look for 'wall heater' in the amenity list (this signals no AC). Check listing photos for window or wall-mounted AC units. Visit in summer if possible, and ask current residents about summer temperature management.",
      },
    },
  ],
};

export default function SunnyvaleNoAcPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SunnyvaleNoAcContent />
    </>
  );
}
