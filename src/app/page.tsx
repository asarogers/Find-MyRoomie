import type { Metadata } from 'next';
import HomepageClient from './HomepageClient';

export const metadata: Metadata = {
  title: 'Find a Roommate Free — Verified Profiles, No Paywall | FindMyRoomy',
  description:
    'FindMyRoomy is the only roommate app with free messaging — forever. Browse verified profiles in 30+ U.S. cities. No Roomster paywall. No subscription. Beta open now.',
  alternates: {
    canonical: 'https://findmyroomy.com/',
  },
  openGraph: {
    title: 'Find a Roommate Free — Verified Profiles, No Paywall | FindMyRoomy',
    description:
      'The only roommate finder with free messaging — forever. Verified profiles, no subscription, 30+ U.S. cities.',
    url: 'https://findmyroomy.com/',
    siteName: 'FindMyRoomy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find a Roommate Free — Verified Profiles, No Paywall | FindMyRoomy',
    description:
      'The only roommate finder with free messaging — forever. Verified profiles, no subscription, 30+ U.S. cities.',
  },
};

export default function Page() {
  return <HomepageClient />;
}
