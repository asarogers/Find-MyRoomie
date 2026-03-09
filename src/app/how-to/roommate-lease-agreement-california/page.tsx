import type { Metadata } from 'next';
import LeaseAgreementContent from './LeaseAgreementContent';

export const metadata: Metadata = {
  title: 'California Roommate Lease Agreement — What You Must Have (2026)',
  description:
    'California roommate lease: what\'s legally required, what to add, and what to avoid. Template checklist for Bay Area co-signers and sublettors. Free download alternative.',
  alternates: { canonical: 'https://findmyroomy.com/how-to/roommate-lease-agreement-california/' },
  openGraph: {
    title: 'California Roommate Lease Agreement — What You Must Have (2026)',
    description: 'What California law requires in a roommate agreement. Checklist for rent split, utilities, guests, move-out notice. Plus: how to find a roommate to sign with — free.',
    url: 'https://findmyroomy.com/how-to/roommate-lease-agreement-california/',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is a roommate agreement legally binding in California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A written roommate agreement is legally enforceable as a contract in California, even if it's informal. It doesn't need to be notarized. The key requirements: both parties must agree, it must be in writing, and it must cover the key terms (rent split, utilities, notice period). A California court can enforce a roommate agreement the same as any other written contract.",
      },
    },
    {
      "@type": "Question",
      name: "What should a California roommate agreement include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Required at minimum: names of all parties, address, move-in date, rent amount and how it's split, utilities split, notice period for move-out. Strongly recommended: guest policy, quiet hours, shared space cleaning responsibilities, process for resolving disputes, what happens if one person can't pay.",
      },
    },
    {
      "@type": "Question",
      name: "Can a roommate agreement override the main lease in California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A roommate agreement governs the relationship between roommates — it cannot override the terms of the primary lease with the landlord. All tenants on the primary lease remain jointly and severally liable to the landlord regardless of what the roommate agreement says.",
      },
    },
  ],
};

export default function LeaseAgreementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LeaseAgreementContent />
    </>
  );
}
