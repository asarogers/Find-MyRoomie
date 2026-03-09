import type { Metadata } from 'next';
import AmericanaSunnyvaleContent from './AmericanaSunnyvaleContent';

export const metadata: Metadata = {
  title: 'Americana at Sunnyvale — Who It\'s Actually For (Honest Review 2026) | Find MyRoomie',
  description:
    'Americana at Sunnyvale targets seniors and mature renters, not tech workers. Age-restricted units, swimming pool, quiet policy. Here\'s whether it fits your situation.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/americana-sunnyvale/',
  },
  openGraph: {
    title: 'Americana at Sunnyvale — Who It\'s Actually For (Honest Review 2026) | Find MyRoomie',
    description:
      'Americana at Sunnyvale targets seniors and mature renters, not tech workers. Age-restricted units, swimming pool, quiet policy. Here\'s whether it fits your situation.',
    url: 'https://findmyroomy.com/apartments/americana-sunnyvale/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Americana at Sunnyvale — 55+ Age-Restricted Review | Find MyRoomie',
    description: '55+ age-restricted community. $1,800-$2,400/month 1BR. Not for tech workers — here\'s who it\'s actually for.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Americana at Sunnyvale age-restricted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Americana at Sunnyvale is a 55+ age-restricted senior community. At least one resident per unit must be 55 or older. This is a legal requirement under federal housing law, not a preference.",
      },
    },
    {
      "@type": "Question",
      name: "Can tech workers live at Americana Sunnyvale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — not unless they are 55 or older. Americana at Sunnyvale is a legal 55+ community. Tech workers in their 20s-40s are ineligible regardless of income. If you're looking for Sunnyvale apartments near LinkedIn or Apple, see Mission Pointe, The Crossings, or Montclaire instead.",
      },
    },
    {
      "@type": "Question",
      name: "What is the rent at Americana Sunnyvale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Americana at Sunnyvale offers below-market pricing due to its age restrictions: 1BR units typically run $1,800-$2,400/month — significantly less than comparable non-restricted Sunnyvale apartments. The trade-off is the 55+ residency requirement.",
      },
    },
    {
      "@type": "Question",
      name: "What Sunnyvale apartments are actually for tech workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tech workers in Sunnyvale should look at: The Crossings at 450 West Maude Ave (near LinkedIn/Yahoo), Montclaire at Sunnyvale (near Caltrain), or Mission Pointe (newer construction near Apple). All are general-occupancy without age restrictions.",
      },
    },
  ],
};

export default function AmericanaSunnyvalePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AmericanaSunnyvaleContent />
    </>
  );
}
