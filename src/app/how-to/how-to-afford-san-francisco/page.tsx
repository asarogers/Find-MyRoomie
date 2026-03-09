import type { Metadata } from 'next';
import HowToAffordSfContent from './HowToAffordSfContent';

export const metadata: Metadata = {
  title: 'How to Afford San Francisco in 2026 — The Roommate Math (With Numbers) | Find MyRoomie',
  description:
    'SF median rent is $3,545/month. Solo requires $142K income. With a roommate: $68K. Here is the exact math, broken down by neighborhood, income bracket, and roommate count.',
  alternates: { canonical: 'https://findmyroomy.com/how-to/how-to-afford-san-francisco/' },
  openGraph: {
    title: 'How to Afford San Francisco in 2026 — The Roommate Math (With Numbers)',
    description: 'SF median rent is $3,545/month. Solo requires $142K income. With a roommate: $68K. The exact math by neighborhood.',
    url: 'https://findmyroomy.com/how-to/how-to-afford-san-francisco/',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What income do you need to live in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Using the standard 3x rent rule, the SF median 1BR rent of $3,545/month (Dec 2025) requires $127,620/year gross income to qualify solo. In high-cost neighborhoods like SOMA or Hayes Valley, solo 1BRs at $4,200-$4,500/month push the requirement to $151,000-$162,000/year.",
      },
    },
    {
      "@type": "Question",
      name: "How much can you save with a roommate in SF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sharing a 2BR in SF saves $18,000-$24,000/year depending on neighborhood, compared to renting a 1BR solo. In SOMA, the annual savings are approximately $24,000 ($2,000/month). In the Sunset, approximately $18,000 ($1,500/month). Over two years that is $36,000-$48,000 in housing savings.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cheapest way to live in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most cost-effective strategy in SF is sharing a 2BR or 3BR with roommates in the Sunset or Inner Richmond neighborhoods. A shared room in the Sunset runs $1,900/month, requiring roughly $68,400/year gross income — compared to $122,400/year needed to rent a solo 1BR in the same neighborhood.",
      },
    },
    {
      "@type": "Question",
      name: "Can you live in San Francisco on $70,000/year?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — with a roommate. A $70,000/year salary translates to roughly $5,833/month gross. Under the 3x rule, you qualify for roughly $1,944/month in rent. A shared room in the Sunset ($1,900/month) or Inner Richmond ($2,000/month) fits within this budget. Solo living in SF is not viable at $70,000/year.",
      },
    },
  ],
};

export default function HowToAffordSfPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HowToAffordSfContent />
    </>
  );
}
