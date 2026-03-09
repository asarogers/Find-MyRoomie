import type { Metadata } from 'next';
import LeaseAgreementContent from './LeaseAgreementContent';
import { breadcrumbSchema, articleSchema, howToSchema } from '@/lib/schema';

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

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'How-To Guides', url: 'https://findmyroomy.com/how-to/' },
  { name: 'California Roommate Lease Agreement — What You Must Have', url: 'https://findmyroomy.com/how-to/roommate-lease-agreement-california/' },
]);

const artSchema = articleSchema({
  title: 'California Roommate Lease Agreement — What You Must Have (2026)',
  description: 'California roommate lease: what\'s legally required, what to add, and what to avoid. Template checklist for Bay Area co-signers and sublettors.',
  url: 'https://findmyroomy.com/how-to/roommate-lease-agreement-california/',
  datePublished: '2025-12-01',
  dateModified: '2026-03-09',
});

const howSchema = howToSchema({
  name: 'How to Write a California Roommate Lease Agreement',
  description: 'How to create a legally enforceable roommate agreement in California with the required and recommended terms',
  steps: [
    { name: 'Include the required minimum terms', text: 'A California roommate agreement is enforceable as a contract with these minimum elements: full legal names of all parties, property address, move-in date, monthly rent total and each person\'s exact share (with due date), and how rent is paid to the landlord.' },
    { name: 'Add the strongly recommended terms', text: 'Include utilities split by name (electricity, gas, water, internet), a guest policy with specific night limits, quiet hours with exact times, shared space cleaning schedule, and the move-out notice period. These prevent the disputes that end roommate situations.' },
    { name: 'Avoid common mistakes', text: 'Never rely on a verbal agreement — it is nearly impossible to enforce. Do not use vague language like "split equally": write exact dollar amounts and dates. Include a notice period (30 days minimum) or your roommate can technically leave immediately with no recourse.' },
    { name: 'Document move-in condition together', text: 'Walk the space together on move-in day and photograph every room. This protects both parties from false damage claims at move-out — in Bay Area apartments at $2,000+/month, deposit disputes can be significant.' },
    { name: 'Both parties sign and keep a copy', text: 'Sign the agreement before or on move-in day. Each party keeps a copy. The agreement does not need to be notarized to be enforceable in California.' },
  ],
});

export default function LeaseAgreementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(artSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howSchema) }} />
      <LeaseAgreementContent />
    </>
  );
}
