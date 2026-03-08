import type { Metadata } from 'next';
import SpareRoomAlternativeContent from './SpareRoomAlternativeContent';

export const metadata: Metadata = {
  title: 'Free SpareRoom Alternative for US Renters 2026 | Find MyRoomy',
  description:
    "SpareRoom locks new listings behind a $14–$28/month paywall. Find MyRoomy is 100% free — no subscription, no early bird fees. Verified US roommates.",
  alternates: { canonical: 'https://findmyroomy.com/spareroom-alternative/' },
  openGraph: {
    title: 'Free SpareRoom Alternative for US Renters | Find MyRoomy',
    description: "SpareRoom's Early Bird subscription is $14–$28/month for new listings. Find MyRoomy is free, always.",
    url: 'https://findmyroomy.com/spareroom-alternative/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is SpareRoom free in the US?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpareRoom is free to browse and post a listing, but you can only contact listings that are either older than 7 days or paid 'Bold' ads without upgrading. To contact new listings (posted within the last 7 days — the ones most worth responding to), you need an Early Bird subscription at $14/week, $25/two weeks, or $28/four weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What is SpareRoom's Early Bird subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpareRoom's Early Bird subscription lets you contact any listing, including new ones under 7 days old. Pricing: $14 for 1 week, $25 for 2 weeks, $28 for 4 weeks, $149 for 6 months, or $199 for 1 year.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best free alternative to SpareRoom in the US?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Find MyRoomy (findmyroomy.com) is completely free with no Early Bird subscription or messaging paywall. Unlike SpareRoom, every listing on Find MyRoomy can be contacted immediately at no cost. It is focused on US cities, especially the Bay Area, with national coverage expanding.",
      },
    },
    {
      "@type": "Question",
      name: "Is SpareRoom good for US renters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpareRoom originated in the UK and its US coverage is much thinner than its UK database. It works best in major US metros like New York and San Francisco. For smaller US cities or Bay Area-specific search, US-native platforms like Find MyRoomy offer better local coverage without a subscription paywall.",
      },
    },
    {
      "@type": "Question",
      name: "Does SpareRoom have fake profiles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpareRoom has a named fraud prevention team and receives generally positive reviews for responding to scam reports. However, outdated and expired listings remain on the platform and some users report discriminatory screening with no enforcement mechanism.",
      },
    },
  ],
};

export default function SpareRoomAlternativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SpareRoomAlternativeContent />
    </>
  );
}
