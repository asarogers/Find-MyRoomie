import type { Metadata } from 'next';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
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

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'Apartments & Roommate Guides', url: 'https://findmyroomy.com/apartments/' },
]);

const svcSchema = serviceSchema({
  name: 'Bay Area Apartments & Roommate Guides',
  description: 'Verified roommate guides for every Bay Area city, neighborhood, and apartment complex. Free to contact — no paywall.',
  url: 'https://findmyroomy.com/apartments/',
  areaServed: 'Bay Area, CA',
});

export default function ApartmentsIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }} />
      <ApartmentsIndexContent />
    </>
  );
}
