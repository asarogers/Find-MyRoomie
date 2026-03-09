import type { Metadata } from 'next';
import H1BRoommateContent from './H1BRoommateContent';

export const metadata: Metadata = {
  title: 'H1B Visa Roommate Finder Bay Area — Verified, Free, No Scams (2026)',
  description:
    'Arriving on H1B or L1 in the Bay Area? Find verified roommates in Fremont, Cupertino, Santa Clara, San Jose before your start date. Free messaging. No Craigslist scam risk.',
  alternates: { canonical: 'https://findmyroomy.com/roommates/h1b-visa-bay-area/' },
  openGraph: {
    title: 'H1B Visa Roommate Finder Bay Area — Verified & Free',
    description: 'H1B and L1 arrivals: find verified Bay Area roommates before your start date. Works remotely. No Craigslist risk. Free messaging. Fremont, Cupertino, Santa Clara, San Jose.',
    url: 'https://findmyroomy.com/roommates/h1b-visa-bay-area/',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I find a roommate in the Bay Area on an H1B visa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Find MyRoomie is a verified Bay Area roommate platform that works fully remotely — you can verify your identity, browse listings, and contact verified roommates before you arrive. The platform is free, which matters when you're starting a new job without a US credit history or local network.",
      },
    },
    {
      "@type": "Question",
      name: "What neighborhoods are best for H1B workers in the Bay Area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fremont (47% South Asian in some zip codes, Tesla/Meta employers, Warm Springs BART), Cupertino (Apple HQ, majority Asian-American), Santa Clara (Intel/Nvidia HQ), and Sunnyvale (LinkedIn, Google) are the top tech worker neighborhoods. All offer strong South Asian community infrastructure including verified roommates with cultural compatibility filters.",
      },
    },
    {
      "@type": "Question",
      name: "Can I find a roommate before I arrive in the US?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Find MyRoomie's entire process works remotely. Identity verification accepts international documents. You can contact verified listings, communicate, and coordinate a lease before your arrival date. Many Bay Area landlords accept remote lease signing.",
      },
    },
  ],
};

export default function H1BRoommatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <H1BRoommateContent />
    </>
  );
}
