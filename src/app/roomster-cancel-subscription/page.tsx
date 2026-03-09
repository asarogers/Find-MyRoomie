import type { Metadata } from 'next';
import CancelContent from './CancelContent';

export const metadata: Metadata = {
  title: 'How to Cancel Roomster Subscription (2026) | Step-by-Step Guide',
  description:
    'Cancel your Roomster subscription on iPhone, Android, or web. What to do if they keep charging you after canceling. Plus: a free roommate finder that has no subscription.',
  alternates: { canonical: 'https://findmyroomy.com/roomster-cancel-subscription/' },
  openGraph: {
    title: 'How to Cancel Roomster — And Stop the Charges for Good',
    description:
      'Step-by-step: cancel Roomster on iOS, Android, and web. What Roomster won\'t tell you about refunds. Plus a completely free alternative.',
    url: 'https://findmyroomy.com/roomster-cancel-subscription/',
    type: 'article',
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Cancel Your Roomster Subscription",
  description: "Step-by-step guide to canceling Roomster on web, iPhone (iOS), and Android.",
  step: [
    {
      "@type": "HowToStep",
      name: "Cancel via Roomster Website",
      text: "Log in to roomster.com → Account → Settings → Subscription → Cancel my Subscription. Take a screenshot.",
    },
    {
      "@type": "HowToStep",
      name: "Cancel via iPhone",
      text: "Settings → Apple ID → Subscriptions → Roomster → Cancel Subscription. Required if you subscribed through the App Store.",
    },
    {
      "@type": "HowToStep",
      name: "Cancel via Android",
      text: "Google Play Store → Profile → Payments & subscriptions → Subscriptions → Roomster → Cancel subscription.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I cancel Roomster on iPhone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go to iPhone Settings → your Apple ID → Subscriptions → Roomster → Cancel Subscription. This is the only way to cancel if you originally subscribed through the App Store.",
      },
    },
    {
      "@type": "Question",
      name: "Does canceling Roomster give me a refund?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rarely. Roomster's refund policy states no refunds are available if any services were rendered — including posting a profile, browsing listings, or sending messages. To dispute an unauthorized charge, contact your credit card issuer directly.",
      },
    },
    {
      "@type": "Question",
      name: "Why did Roomster charge me without warning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 7-day trial automatically converts to a $29/month subscription unless you cancel before the trial ends. The FTC settled with Roomster in 2023 for $1.6 million over similar deceptive practices.",
      },
    },
    {
      "@type": "Question",
      name: "What if Roomster keeps charging me after I cancel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Document your cancellation confirmation (screenshot), then file a chargeback with your credit card issuer as an unauthorized charge. You can also file a complaint at reportfraud.ftc.gov.",
      },
    },
  ],
};

export default function RoomsterCancelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CancelContent />
    </>
  );
}
