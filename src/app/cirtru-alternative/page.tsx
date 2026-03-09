import type { Metadata } from 'next';
import CirtruContent from './CirtruContent';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Cirtru Alternative — Verified Bay Area Roommates, Free (2026)',
  description:
    'Cirtru has ScamAdviser warnings and limited Bay Area coverage. Find MyRoomie offers verified roommate matching in SF, Oakland, and Silicon Valley — completely free.',
  alternates: { canonical: 'https://findmyroomy.com/cirtru-alternative/' },
  openGraph: {
    title: 'Cirtru Alternative — Verified Bay Area Roommates, Free',
    description: 'Cirtru has scam risk flags and thin Bay Area coverage. Here\'s a free, verified alternative built specifically for the Bay Area.',
    url: 'https://findmyroomy.com/cirtru-alternative/',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Cirtru legit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cirtru has received scam risk flags from ScamAdviser and user reports of fake listings and poor verification. If you're searching in the Bay Area, verified alternatives like Find MyRoomie offer a safer search with no payment required.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best Cirtru alternatives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Bay Area roommate searches: Find MyRoomie (free, verified, Bay Area specialist), followed by Craigslist (free but no verification) and Roomster (verified but $29/month paywall). Find MyRoomie is the only option that is both verified and free.",
      },
    },
  ],
};

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'Cirtru Alternative', url: 'https://findmyroomy.com/cirtru-alternative/' },
]);

const svcSchema = serviceSchema({
  name: 'Find MyRoomie — Free Bay Area Roommate Finder',
  description: 'Cirtru has ScamAdviser warnings and limited Bay Area coverage. Find MyRoomie offers verified roommate matching in SF, Oakland, and Silicon Valley — completely free.',
  url: 'https://findmyroomy.com/cirtru-alternative/',
  areaServed: 'San Francisco Bay Area, California',
});

export default function CirtruAlternativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }} />
      <CirtruContent />
    </>
  );
}
