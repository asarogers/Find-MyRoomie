import type { Metadata } from 'next';
import SanFranciscoContent from './SanFranciscoContent';

export const metadata: Metadata = {
  title: 'Find a Roommate in San Francisco — Free, Verified, No Paywall | Find MyRoomie',
  description:
    'SF median rent hit $3,545. Find verified roommates in SOMA, Hayes Valley, Mission, Nob Hill — free messaging, no subscription, background-check ready.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/san-francisco-ca/',
  },
  openGraph: {
    title: 'Find a Roommate in San Francisco — Free, Verified, No Paywall | Find MyRoomie',
    description:
      'SF median rent hit $3,545. Find verified roommates in SOMA, Hayes Valley, Mission, Nob Hill — free messaging, no subscription.',
    url: 'https://findmyroomy.com/apartments/san-francisco-ca/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is San Francisco too expensive for a roommate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — a roommate is the primary tool SF renters use to make the market work. SF's median rent hit $3,545/month in December 2025. Split a 2BR with a verified roommate and you're paying $1,600–$1,900/month instead — saving $21,000+ per year versus living alone.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Find MyRoomie cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Find MyRoomie is completely free. No subscription, no credit card, no paywall to message anyone. Unlike Roomster, which charges $29.99/month to access messaging, Find MyRoomie is free to browse, post, and contact verified roommates.",
      },
    },
    {
      "@type": "Question",
      name: "What neighborhoods are best for roommates in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SOMA is best for tech workers near Caltrain. Mission District offers the best price arbitrage if you know which streets to target. Hayes Valley suits design-minded renters. Nob Hill and Castro are quieter options with strong community feel. Richmond and Sunset are the best value for space.",
      },
    },
  ],
};

export default function SanFranciscoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SanFranciscoContent />
    </>
  );
}
