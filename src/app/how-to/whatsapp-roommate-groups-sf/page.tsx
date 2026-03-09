import type { Metadata } from 'next';
import WhatsAppGroupsContent from './WhatsAppGroupsContent';
import { breadcrumbSchema, articleSchema, howToSchema } from '@/lib/schema';

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

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'How-To Guides', url: 'https://findmyroomy.com/how-to/' },
  { name: 'WhatsApp Roommate Groups San Francisco', url: 'https://findmyroomy.com/how-to/whatsapp-roommate-groups-sf/' },
]);

const artSchema = articleSchema({
  title: 'WhatsApp Roommate Groups San Francisco — Where to Find Real Ones (2026)',
  description: 'Looking for WhatsApp roommate groups in San Francisco? Here are the real ones, how to get in, the risks, and a safer verified alternative that\'s completely free.',
  url: 'https://findmyroomy.com/how-to/whatsapp-roommate-groups-sf/',
  datePublished: '2025-12-01',
  dateModified: '2026-03-09',
});

const howSchema = howToSchema({
  name: 'How to Find SF WhatsApp Roommate Groups — and a Safer Alternative',
  description: 'How to locate SF WhatsApp housing groups, understand their limitations, and use a verified platform instead',
  steps: [
    { name: 'Find neighborhood-based WhatsApp groups', text: 'SF WhatsApp housing groups organized by neighborhood (SOMA, Mission, Oakland) are posted in neighborhood Facebook groups, Reddit (r/SanFranciscoHousing, r/bayarea), and local Nextdoor communities. They require a join link from an existing member.' },
    { name: 'Find university or employer-based groups', text: 'University housing groups (UC Berkeley, Stanford, UCSF) are accessible via school email lists and international student orientation materials. Employer-based groups (Apple Housing, Google Employees Housing) are the highest quality — shared employer is a strong trust signal — but require employment access.' },
    { name: 'Understand the core limitations of WhatsApp groups', text: 'Your phone number and name are visible to every group member when you join — often 50–200+ strangers. There is no identity verification, no moderation, and no recourse if you are scammed through a group connection. Use WhatsApp groups for initial discovery only, not as your primary search channel.' },
    { name: 'Use a verified platform for the actual roommate connection', text: 'Find MyRoomie is open to any Bay Area renter — no invite required. Every profile is verified before going live. Your contact information is only shared with people you choose to message. This gives you the community feel of a WhatsApp group without the privacy exposure or scam risk.' },
  ],
});

export default function WhatsAppGroupsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(artSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howSchema) }} />
      <WhatsAppGroupsContent />
    </>
  );
}
