import type { Metadata } from 'next';
import ApartmentsIndexContent from './ApartmentsIndexContent';

export const metadata: Metadata = {
  title: 'Bay Area Apartments & Roommate Guides — All Neighborhoods | Find MyRoomie',
  description:
    'Browse verified roommate guides for every Bay Area city, neighborhood, and apartment complex. Free messaging, no subscription. SF, Oakland, San Jose, Cupertino, Sunnyvale, Fremont.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/',
  },
  openGraph: {
    title: 'Bay Area Apartments & Roommate Guides | Find MyRoomie',
    description:
      'Verified roommate guides for every Bay Area city and apartment complex. Free to contact — no paywall, no subscription.',
    url: 'https://findmyroomy.com/apartments/',
    type: 'website',
  },
};

export default function ApartmentsIndexPage() {
  return <ApartmentsIndexContent />;
}
