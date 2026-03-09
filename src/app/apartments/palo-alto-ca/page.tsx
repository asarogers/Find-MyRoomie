import type { Metadata } from 'next';
import PaloAltoContent from './PaloAltoContent';

export const metadata: Metadata = {
  title: 'Find a Roommate in Palo Alto — Stanford, High Rents, Verified & Free | Find MyRoomie',
  description:
    'Palo Alto 1BR averages $4,200+/month. Find verified roommates near Stanford, Sand Hill Road, and Caltrain — free messaging, no subscription, no fake listings.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/palo-alto-ca/',
  },
  openGraph: {
    title: 'Find a Roommate in Palo Alto — Stanford, High Rents, Verified & Free | Find MyRoomie',
    description:
      'Palo Alto 1BR averages $4,200+/month. Find verified roommates near Stanford and Sand Hill Road — free messaging, no subscription.',
    url: 'https://findmyroomy.com/apartments/palo-alto-ca/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How expensive is Palo Alto rent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "$4,200+/month for a 1BR. A 2BR split brings your cost to $2,300–2,600/person — saving $1,600–1,900/month vs living alone.",
      },
    },
    {
      "@type": "Question",
      name: "Is Palo Alto good for Stanford students looking for roommates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Stanford graduate students — especially PhD students and post-docs on stipends that don't match Palo Alto rents — are the most active roommate seekers in the city. A 2BR split at $2,400/person is the standard way to afford Palo Alto on an academic salary or first-job tech compensation.",
      },
    },
    {
      "@type": "Question",
      name: "How is the Caltrain commute from Palo Alto to San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Palo Alto Caltrain station runs Baby Bullet express trains to San Francisco in approximately 55 minutes. It's one of the fastest Caltrain commutes on the Peninsula. Most tech workers in SF who value the Palo Alto lifestyle use this route daily.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Find MyRoomie cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Find MyRoomie is completely free. No subscription, no credit card, no paywall to message anyone. Unlike Roomster, which charges $29.99/month to access messaging, Find MyRoomie is free to browse, post, and contact verified roommates.",
      },
    },
  ],
};

export default function PaloAltoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PaloAltoContent />
    </>
  );
}
