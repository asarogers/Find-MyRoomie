import type { Metadata } from 'next';
import FaqContent from './FaqContent';

export const metadata: Metadata = {
  title: 'FindMyRoomy FAQ — Free Roommate Finder, Verified Profiles',
  description:
    'Answers to common questions about FindMyRoomy: is it really free, how verification works, how to find a roommate safely, what makes it different from Roomster and Roomi.',
  alternates: { canonical: 'https://findmyroomy.com/faq/' },
  openGraph: {
    title: 'FindMyRoomy FAQ — Free Roommate Finder, Verified Profiles',
    description:
      'Answers to common questions about FindMyRoomy: is it really free, how verification works, how to find a roommate safely, what makes it different from Roomster and Roomi.',
    url: 'https://findmyroomy.com/faq/',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is FindMyRoomy really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Browsing, messaging, and connecting are all free. That is the founding promise. Beta members lock in free messaging permanently — even after full launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will FindMyRoomy always be free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Free messaging is guaranteed for life for beta testers who sign up now. The platform will stay free to use. Premium features may exist in the future, but core functionality — browsing verified profiles and messaging — will always be free for founding members.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a credit card required to sign up?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. No credit card, no subscription, no trial period. Sign up in 60 seconds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is FindMyRoomy different from Roomster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Roomster requires $29.99/month to read or send messages. The FTC has filed a complaint against Roomster for fake reviews and fake profiles. FindMyRoomy is free to message, verifies all users, and has no paywall.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is FindMyRoomy different from Roomi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Roomi charges up to $29.99/month for Gold tier and has an 88% 1-star rating on Trustpilot and a 2.2/5 App Store rating. FindMyRoomy is free and built around verification and safety.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is FindMyRoomy different from SpareRoom?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "SpareRoom's Early Bird paywall hides new listings behind a subscription. FindMyRoomy shows all listings to all users — no paywall, no subscription.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is FindMyRoomy different from Craigslist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Craigslist has no identity verification. Scammers post fake listings, demand deposits upfront, and disappear. FindMyRoomy verifies every user's identity before they can contact anyone.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does FindMyRoomy verify users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All users complete government ID verification. Many also complete optional background checks. Profiles include verification badges so you can see at a glance what has been confirmed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I avoid roommate scams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Never pay a deposit before meeting in person. Reverse image search all profile photos. Be skeptical of anyone who claims to be overseas or can't meet in person. Use a platform with identity verification. FindMyRoomy verifies government ID on every account.",
      },
    },
    {
      '@type': 'Question',
      name: 'What questions should I ask a potential roommate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Work schedule and sleep hours. Cleanliness standards. Guest frequency. How they handle splitting utilities and groceries. Whether they have pets or smoke. Red flags: vague answers, pressure to decide fast, or reluctance to video call or meet in a public place first.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find a roommate on FindMyRoomy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Create a free profile, browse verified roommates in your city, and message anyone for free. No paywall, no subscription, no credit card.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cities does FindMyRoomy cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FindMyRoomy covers 30+ U.S. cities including San Francisco, Oakland, San Jose, Los Angeles, Chicago, New York, Austin, Seattle, Boston, and more. Bay Area coverage is the deepest.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to find a roommate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most renters on verified platforms find compatible options within 1–3 weeks. The Bay Area moves faster. Completing your profile fully and messaging proactively shortens the timeline significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I find pet-friendly roommates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Filter by pet-friendly to find dog owners, cat lovers, and pet-welcoming roommates. All filters are free to use.',
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqContent />
    </>
  );
}
