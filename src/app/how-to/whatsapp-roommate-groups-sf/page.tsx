import type { Metadata } from 'next';
import WhatsAppGroupsContent from './WhatsAppGroupsContent';

export const metadata: Metadata = {
  title: 'WhatsApp Roommate Groups San Francisco — Where to Find Real Ones (2026)',
  description:
    'Looking for WhatsApp roommate groups in San Francisco? Here are the real ones, how to get in, the risks, and a safer verified alternative that\'s completely free.',
  alternates: { canonical: 'https://findmyroomy.com/how-to/whatsapp-roommate-groups-sf/' },
  openGraph: {
    title: 'WhatsApp Roommate Groups San Francisco — Real Groups + Safer Alternative',
    description: 'How to find SF WhatsApp housing groups, the risks of unverified group messaging, and a free verified alternative.',
    url: 'https://findmyroomy.com/how-to/whatsapp-roommate-groups-sf/',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are there WhatsApp groups for finding roommates in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. There are SF WhatsApp housing groups organized by neighborhood, university affiliation, and community (Indian/South Asian, LGBTQ+, etc.). The main ones circulate through community networks — there is no single public directory. The limitation is that they require knowing someone already in the group.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to find a roommate in a WhatsApp group?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp groups have no identity verification, no moderation, and no recourse if something goes wrong. Your housing search — including your name and contact info — is visible to everyone in the group, including people you've never vetted. Use verified platforms for the actual connection; WhatsApp groups are useful only for initial discovery.",
      },
    },
    {
      "@type": "Question",
      name: "What's a safer alternative to WhatsApp roommate groups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Find MyRoomie is a free Bay Area roommate platform where every profile is verified before going live. You get the same community feel as WhatsApp groups without the privacy exposure or scam risk — and messaging is free, no subscription required.",
      },
    },
  ],
};

export default function WhatsAppGroupsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <WhatsAppGroupsContent />
    </>
  );
}
