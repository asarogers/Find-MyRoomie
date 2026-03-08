import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About FindMyRoomy — Built by Someone Who Lived the Problem',
  description:
    'Asa moved to a new city with two dogs and built the roommate finder Roomster should have been. Free messaging, verified profiles, no paywall. Here\'s the story.',
  alternates: { canonical: 'https://findmyroomy.com/about/' },
  openGraph: {
    title: 'About FindMyRoomy — Built by Someone Who Lived the Problem',
    description:
      'Asa moved to a new city with two dogs and built the roommate finder Roomster should have been. Free messaging, verified profiles, no paywall.',
    url: 'https://findmyroomy.com/about/',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who built FindMyRoomy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Asa, the founder. I moved to a new city with two dogs and almost no lead time. I tried Roomster — paid $30 just to find out the listing was dead. I tried Craigslist — met a scammer on day two. FindMyRoomy is what I needed and couldn't find.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is FindMyRoomy really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Free to browse, free to message, free to connect — forever. Beta members lock in free messaging permanently, even after full launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where does FindMyRoomy operate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Currently focused on the Bay Area and 30+ U.S. cities including San Francisco, Chicago, Los Angeles, New York, Austin, Seattle, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is FindMyRoomy different from Roomster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Roomster charges $29.99/month to read or send messages and has an FTC-filed complaint for fake reviews. FindMyRoomy is free, verified, and built by someone who was burned by Roomster firsthand.",
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AboutContent />
    </>
  );
}
