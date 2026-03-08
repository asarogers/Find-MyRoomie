import type { Metadata } from 'next';
import RoommateSafetyContent from './RoommateSafetyContent';

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Roommate Safety Guide 2026 — How to Avoid Scams and Vet Strangers | FindMyRoomy',
  description:
    'The complete guide to finding a roommate safely in 2026: red flags, scam warning signs, what to ask before moving in, and how to verify a stranger\'s identity.',
  alternates: { canonical: 'https://findmyroomy.com/roommate-safety/' },
  openGraph: {
    title: 'Roommate Safety Guide 2026 — How to Avoid Scams and Vet Strangers',
    description:
      'The complete guide to finding a roommate safely in 2026: red flags, scam warning signs, what to ask before moving in, and how to verify a stranger\'s identity.',
    url: 'https://findmyroomy.com/roommate-safety/',
    type: 'article',
  },
};

// ─── Structured data ──────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Roommate Safety Guide 2026",
  description: "The complete guide to finding a roommate safely in 2026: red flags, scam warning signs, what to ask before moving in, and how to verify a stranger's identity.",
  datePublished: "2026-03-07",
  dateModified: "2026-03-07",
  author: { "@type": "Organization", name: "The FindMyRoomy Team", url: "https://findmyroomy.com/" },
  publisher: { "@type": "Organization", name: "FindMyRoomy", logo: { "@type": "ImageObject", url: "https://findmyroomy.com/logo.png" } },
  url: "https://findmyroomy.com/roommate-safety/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I know if a roommate listing is a scam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common scam signals: landlord or roommate claims to be overseas, asks for a deposit before meeting in person, won't do a video call, listing photos are stolen from other sites (reverse image search them), price is significantly below market. Rule: never send money before you have visited the property in person.",
      },
    },
    {
      "@type": "Question",
      name: "What should I check before meeting a potential roommate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reverse image search their profile photo. Google their name. Ask for their LinkedIn or workplace. Verify any rental property on the county assessor's website. Real people have a verifiable online footprint.",
      },
    },
    {
      "@type": "Question",
      name: "What are the biggest red flags when finding a roommate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pressure to decide within 24 hours. Reluctance to video call or meet in a public place. Asking for Venmo/Zelle deposit before you've signed anything. Vague answers about income or employment. Listing photos that match other rentals online.",
      },
    },
    {
      "@type": "Question",
      name: "What should I ask a potential roommate before moving in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Work schedule and typical hours home. Sleep schedule and noise tolerance. Guests — how often, how long. Cleanliness standard and how cleaning gets divided. Pets or allergies. Whether they've had roommate conflicts before and what happened.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to find roommates online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you use a platform with identity verification. FindMyRoomy verifies government ID before anyone can contact other users. Craigslist and Facebook have no verification — anyone can post. Platforms like Roomster were fined by the FTC for fake reviews and fake profiles.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to safely find a roommate online",
  description: "A step-by-step process for finding a roommate online without getting scammed.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Choose a verified platform",
      text: "Use a roommate platform that requires government ID verification before users can contact each other. Avoid Craigslist and Facebook Marketplace — they have no identity verification.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Complete your own profile fully",
      text: "A complete profile with a real photo, verified ID, and honest information about your lifestyle signals good faith and attracts equally serious responses.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Vet profiles before messaging",
      text: "Reverse image search profile photos. Google their name and verify their online footprint. Check LinkedIn or other professional profiles to confirm their employment.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Video call before meeting",
      text: "Before any in-person meeting, do a video call. A real person will agree. Anyone who refuses to video call is a serious red flag.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Meet in public first",
      text: "Your first in-person meeting should be in a public place — a coffee shop or park. Do not meet a stranger alone in a private location for the first time.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Visit the property together before any money changes hands",
      text: "Tour the actual rental unit in person before any deposit or payment. Never send money for a property you have not physically visited.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Sign a roommate agreement",
      text: "Before moving in, sign a written roommate agreement covering rent split, utilities, guests, quiet hours, and exit terms. This protects both parties.",
    },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RoommateSafetyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <RoommateSafetyContent />
    </>
  );
}
