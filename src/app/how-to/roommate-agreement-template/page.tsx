import type { Metadata } from 'next';
import RoommateAgreementContent from './RoommateAgreementContent';

export const metadata: Metadata = {
  title: 'Free Roommate Agreement Template — SF & Bay Area Legal Guide (2026) | Find MyRoomie',
  description:
    'Download a free California-compliant roommate agreement. Covers rent splits, utilities, guests, chores, and lease violation procedures. For Bay Area renters in 2026.',
  alternates: { canonical: 'https://findmyroomy.com/how-to/roommate-agreement-template/' },
  openGraph: {
    title: 'Free Roommate Agreement Template — SF & Bay Area Legal Guide (2026)',
    description: 'Free California-compliant roommate agreement template covering rent splits, utilities, guests, and SF-specific rent control clauses.',
    url: 'https://findmyroomy.com/how-to/roommate-agreement-template/',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a written roommate agreement in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You are not legally required to have a written roommate agreement in SF, but it is strongly advisable. San Francisco has some of the most tenant-favorable laws in the US, including rent control rules that create significant consequences when a master tenant moves out. A written agreement protects both parties from disputes about rent splits, utilities, guests, and move-out procedures.",
      },
    },
    {
      "@type": "Question",
      name: "What should a roommate agreement include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A complete roommate agreement should cover: (1) Rent amount and each person's share, (2) Due date and late fee terms, (3) Utilities split method, (4) Which party holds the master lease, (5) Move-out notice period, (6) Guest policy and overnight guest limits, (7) Shared supplies and cost splitting, (8) Quiet hours, and (9) Dispute resolution process. SF-specific agreements should also address what happens if the master leaseholder moves out.",
      },
    },
    {
      "@type": "Question",
      name: "Is a roommate agreement legally binding in California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A written roommate agreement signed by all parties can be legally binding in California as a contract between roommates. However, it does not override the primary lease with the landlord — which governs the formal tenant-landlord relationship. For disputes involving rent-controlled units, the SF Rent Board may have jurisdiction. Consult an SF tenant attorney for complex situations involving rent control, eviction, or subletting disputes.",
      },
    },
    {
      "@type": "Question",
      name: "What are my rights as a subtenant in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under San Francisco rent control rules, if you are a subtenant and the master tenant moves out, you may have rights to the unit under certain conditions — particularly if you have lived there for 12+ months and the landlord knew about your tenancy. The SF Rent Board (sfrb.org) and SF Tenants Union (sftu.org) offer free guidance. This is one of the most important reasons to have a written agreement establishing the nature of your occupancy from day one.",
      },
    },
  ],
};

export default function RoommateAgreementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <RoommateAgreementContent />
    </>
  );
}
