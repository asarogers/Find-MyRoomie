import type { Metadata } from 'next';
import TechWorkerRelocationContent from './TechWorkerRelocationContent';
import { breadcrumbSchema, articleSchema, howToSchema } from '@/lib/schema';

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

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'How-To Guides', url: 'https://findmyroomy.com/how-to/' },
  { name: 'Tech Worker Bay Area Relocation Guide', url: 'https://findmyroomy.com/how-to/tech-worker-relocation-bay-area/' },
]);

const artSchema = articleSchema({
  title: 'Tech Worker Bay Area Relocation Guide — Find a Roommate Before You Move',
  description: 'Relocating to the Bay Area for a tech job? The roommate-first strategy saves $20,000+ in your first year. Timeline, neighborhoods, and verified platforms that work.',
  url: 'https://findmyroomy.com/how-to/tech-worker-relocation-bay-area/',
  datePublished: '2025-12-01',
  dateModified: '2026-03-09',
});

const howSchema = howToSchema({
  name: 'Tech Worker Bay Area Relocation — Roommate-First Strategy',
  description: 'How to relocate to the Bay Area for a tech job and save $13,800+ in your first six months by finding a roommate before you move',
  steps: [
    { name: '90 days out: Create a verified profile and start browsing', text: 'Set up a verified Find MyRoomie profile 90 days before your start date. Browse listings in your target neighborhood based on your office location. Google, Apple, and LinkedIn employees should target the South Bay — not SF — to avoid the 90+ minute daily commute.' },
    { name: '60 days out: Start real conversations and video call candidates', text: 'Message 5–10 verified profiles in your target neighborhood. Video call 2–3 candidates who seem promising. Check for schedule compatibility, cleanliness norms, and deal-breakers before scheduling any in-person visit.' },
    { name: '45 days out: Schedule your pre-start relocation trip', text: 'Narrow to 1–2 finalists. Schedule a Bay Area trip to see the actual apartments in person — never sign based on photos alone. Walk the neighborhoods at different times. This trip also gives you a chance to scope out the commute route.' },
    { name: '30 days out: Sign the lease', text: 'Commit to your roommate and apartment. Sign the lease. Arrange movers. You now start your job on day one with housing fully sorted — zero distraction during onboarding.' },
    { name: 'Use corporate housing correctly if offered', text: 'If your employer offers 30–60 days of corporate housing, use it as a search base — not as a reason to delay. By day 30 of corporate housing, you should have a signed lease ready to transition into. This is the optimal sequence.' },
  ],
});

export default function TechWorkerRelocationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(artSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howSchema) }} />
      <TechWorkerRelocationContent />
    </>
  );
}
