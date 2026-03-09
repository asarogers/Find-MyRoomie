import type { Metadata } from 'next';
import TechWorkerRelocationContent from './TechWorkerRelocationContent';

export const metadata: Metadata = {
  title: 'Tech Worker Bay Area Relocation Guide — Find a Roommate Before You Move | Find MyRoomie',
  description:
    'Relocating to the Bay Area for a tech job? The roommate-first strategy saves $20,000+ in your first year. Timeline, neighborhoods, and verified platforms that work.',
  alternates: { canonical: 'https://findmyroomy.com/how-to/tech-worker-relocation-bay-area/' },
  openGraph: {
    title: 'Tech Worker Bay Area Relocation Guide — Find a Roommate Before You Move',
    description: 'Relocating to the Bay Area for a tech job? The roommate-first strategy saves $20,000+ in your first year.',
    url: 'https://findmyroomy.com/how-to/tech-worker-relocation-bay-area/',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I find a roommate in the Bay Area before I move?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start 90 days before your start date. Create a verified profile on Find MyRoomie — Bay Area-specific, free messaging, ID-verified. Message 5–10 profiles in your target neighborhood 60 days out. Video call 2–3 candidates, then schedule an in-person visit during your pre-start relocation trip 45 days out. Finalize 30 days before your start date. This timeline gives you a roommate and apartment lined up before day one.",
      },
    },
    {
      "@type": "Question",
      name: "What neighborhood should I live in if I work at Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google's main campus is in Mountain View. The best neighborhoods for Google employees are Mountain View itself, Sunnyvale, or North San Jose — all within easy commute on Google's shuttle routes. Shared rooms in these areas run $1,100–$1,600/month, significantly cheaper than SF proper.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a tech worker need to earn to live in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solo in SF requires roughly $142,000–$162,000/year depending on neighborhood, using the standard 3x rent rule. With a roommate sharing a 2BR, the income requirement drops to $79,000–$90,000/year in most SF neighborhoods. South Bay tech workers (Google, Apple, Cisco) face lower rents: $1,100–$1,600/month for a shared room, requiring $40,000–$58,000/year.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best way to relocate to the Bay Area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The roommate-first strategy consistently outperforms the solo approach. Find your roommate before you move, target a neighborhood based on your office location, and use month 1 of any employer corporate housing to finalize your permanent situation. Arriving with housing already sorted eliminates the $13,800+ first-6-months premium of going solo.",
      },
    },
  ],
};

export default function TechWorkerRelocationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TechWorkerRelocationContent />
    </>
  );
}
