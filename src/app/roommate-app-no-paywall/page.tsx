import type { Metadata } from 'next';
import NoPaywallContent from './NoPaywallContent';

export const metadata: Metadata = {
  title: 'Roommate App With No Paywall — Free Messaging Forever | Find MyRoomie',
  description:
    'Most roommate apps lock messages behind a $20-30/month paywall. Find MyRoomie lets you message verified roommates for free. Bay Area focused.',
  alternates: {
    canonical: 'https://findmyroomy.com/roommate-app-no-paywall/',
  },
  openGraph: {
    title: 'Roommate App With No Paywall — Free Messaging Forever | Find MyRoomie',
    description:
      'Most roommate apps lock messages behind a $20-30/month paywall. Find MyRoomie lets you message verified roommates for free. Bay Area focused.',
    url: 'https://findmyroomy.com/roommate-app-no-paywall/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roommate App With No Paywall | Find MyRoomie',
    description: 'Free messaging forever. No paywall. Verified Bay Area roommates.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the messaging actually free — no catch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. There is no catch, no hidden tier, and no credit card required. You can browse, message, and connect with verified roommates at no charge.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to verify my identity to message people?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — basic profile verification is required before you can contact listings. This protects both parties. Verification does not require payment.",
      },
    },
    {
      "@type": "Question",
      name: "Is Find MyRoomie only for San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Find MyRoomie is built for the Bay Area specifically — San Francisco, San Jose, Oakland, Berkeley, Fremont, Cupertino, Sunnyvale, and surrounding cities.",
      },
    },
    {
      "@type": "Question",
      name: "What if I already paid for Roomster or another app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can't get that money back for you. What we can do is make sure you never have to pay again. Join Find MyRoomie free and start messaging verified listings today.",
      },
    },
    {
      "@type": "Question",
      name: "Why do other roommate apps charge for messaging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The paywall is not an accident. These apps show you real-looking profiles, let you get excited about a match, and then extract a monthly fee at the exact moment you are most willing to pay. Find MyRoomie's business model is different.",
      },
    },
  ],
};

export default function NoPaywallPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NoPaywallContent />
    </>
  );
}
