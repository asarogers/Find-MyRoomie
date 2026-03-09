import type { Metadata } from 'next';
import RefundContent from './RefundContent';

export const metadata: Metadata = {
  title: 'Roomster Charged Me — How to Get a Refund (2026)',
  description:
    'Roomster charged you without warning or after you cancelled? Here\'s how to get your money back — credit card chargeback, Apple/Google refund, and FTC complaint. Plus a free alternative.',
  alternates: { canonical: 'https://findmyroomy.com/roomster-refund/' },
  openGraph: {
    title: 'Roomster Charged Me: How to Get Your Money Back (2026)',
    description:
      'Step-by-step guide to disputing Roomster charges. Credit card chargeback, App Store refund, FTC complaint. Plus: a roommate app that won\'t charge you anything.',
    url: 'https://findmyroomy.com/roomster-refund/',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will Roomster give me a refund?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Roomster's policy allows refunds only when no services were rendered. In practice, most users report being denied. A credit card chargeback is more effective.",
      },
    },
    {
      "@type": "Question",
      name: "How do I dispute a Roomster charge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call your credit card issuer and file a dispute as an unauthorized charge or billing error. Reference the 2023 FTC settlement ($1.6M) as context. Apple and Google Play also have independent refund processes.",
      },
    },
    {
      "@type": "Question",
      name: "What was the Roomster FTC settlement for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In August 2023, the NY AG and FTC secured $1.6 million from Roomster for allegedly defrauding renters through fake listings and deceptive practices. The CEO and CTO were found to have purchased over 20,000 fake reviews.",
      },
    },
  ],
};

export default function RoomsterRefundPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <RefundContent />
    </>
  );
}
