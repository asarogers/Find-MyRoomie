import type { Metadata } from 'next';
import CrossingsSunnyvaleContent from './CrossingsSunnyvaleContent';

export const metadata: Metadata = {
  title: 'The Crossings Sunnyvale — What Renters Say vs What the Listing Shows | Find MyRoomie',
  description:
    'The Crossings at Sunnyvale is a mid-tier complex near LinkedIn and Google. Honest review: what reviews say, what to check before signing, and how to split rent.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/the-crossings-sunnyvale/',
  },
  openGraph: {
    title: 'The Crossings Sunnyvale — What Renters Say vs What the Listing Shows | Find MyRoomie',
    description:
      'The Crossings at Sunnyvale is a mid-tier complex near LinkedIn and Google. Honest review: what reviews say, what to check before signing, and how to split rent.',
    url: 'https://findmyroomy.com/apartments/the-crossings-sunnyvale/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Crossings Sunnyvale — Honest Review | Find MyRoomie',
    description: 'Near LinkedIn and Yahoo. 2BR $3,600-$4,200/month. Roommate split: $1,800-$2,100/person. What residents actually say.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is The Crossings near LinkedIn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Crossings at 450 West Maude Ave, Sunnyvale is 1.2 miles from LinkedIn HQ and 0.8 miles from Yahoo. Google's main campus is approximately 3 miles away.",
      },
    },
    {
      "@type": "Question",
      name: "Does The Crossings Sunnyvale have AC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some units at The Crossings do not have central AC — a common issue in older Sunnyvale apartment construction. Confirm your specific unit's cooling situation before signing. Window units may be permitted but are not standard.",
      },
    },
    {
      "@type": "Question",
      name: "What is rent at The Crossings Sunnyvale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Crossings Sunnyvale: 1BR $2,800-$3,200/month, 2BR $3,600-$4,200/month. Parking: 1 spot included, second spot $75/month. A 2BR roommate split lands at $1,800-$2,100/person/month.",
      },
    },
    {
      "@type": "Question",
      name: "Is it worth renting at The Crossings with a roommate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At $1,800-$2,100/person on a 2BR split, The Crossings offers a reasonable price-to-location ratio for tech workers at LinkedIn or Yahoo. The main tradeoffs: dated finishes and thin walls in some buildings. Maintenance response is generally noted as positive.",
      },
    },
  ],
};

export default function CrossingsSunnyvalePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CrossingsSunnyvaleContent />
    </>
  );
}
