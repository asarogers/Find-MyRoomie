import type { Metadata } from 'next';
import RoommatesNearMeSfContent from './RoommatesNearMeSfContent';

export const metadata: Metadata = {
  title: 'Roommates Near Me San Francisco — Verified, Free to Message | Find MyRoomie',
  description:
    "Find roommates near your SF neighborhood. SOMA, Mission, Hayes Valley, Castro — verified profiles, free messaging, no subscription. The Bay Area's only free verified roommate platform.",
  alternates: {
    canonical: 'https://findmyroomy.com/roommates-near-me-san-francisco/',
  },
  openGraph: {
    title: 'Roommates Near Me San Francisco — Verified, Free to Message | Find MyRoomie',
    description:
      "Find roommates near your SF neighborhood. SOMA, Mission, Hayes Valley, Castro — verified profiles, free messaging, no subscription.",
    url: 'https://findmyroomy.com/roommates-near-me-san-francisco/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roommates Near Me San Francisco | Find MyRoomie',
    description: 'Verified SF roommates by neighborhood. Free messaging, no subscription.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I find roommates near me in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Create a verified profile on Find MyRoomie and set your target neighborhoods. You can search by SF neighborhood — SOMA, Mission, Castro, Hayes Valley, Nob Hill, Richmond, Sunset — and message compatible matches directly. Free messaging, no subscription.",
      },
    },
    {
      "@type": "Question",
      name: "What SF neighborhoods have the most roommate listings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SOMA has the highest renter turnover and most active roommate listings due to its proximity to tech offices and transit. Mission and Castro have large active roommate communities. Richmond and Sunset have lower density but more affordable options.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I find a roommate in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timing depends on your neighborhood and budget. SOMA and Mission have active listing rotation — new profiles appear daily. Spring (March–May) is peak roommate season when lease cycles align with student arrivals and tech hire relocations.",
      },
    },
  ],
};

export default function RoommatesNearMeSfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RoommatesNearMeSfContent />
    </>
  );
}
