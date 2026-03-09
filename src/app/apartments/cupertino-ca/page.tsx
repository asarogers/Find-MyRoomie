import type { Metadata } from 'next';
import CupertinoContent from './CupertinoContent';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Find a Roommate in Cupertino — Near Apple Park, Verified & Free | Find MyRoomie',
  description:
    "Cupertino's Apple Park campus draws 12,000+ employees. Find verified roommates near De Anza Blvd and Apple Park — free messaging, no subscription.",
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/cupertino-ca/',
  },
  openGraph: {
    title: 'Find a Roommate in Cupertino — Near Apple Park, Verified & Free | Find MyRoomie',
    description:
      "Cupertino's Apple Park draws 12,000+ employees. Find verified roommates near Apple Park — free messaging, no subscription.",
    url: 'https://findmyroomy.com/apartments/cupertino-ca/',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Cupertino affordable for Apple employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not solo. A 1BR near Apple Park runs $2,400–$2,800/month. A 2BR runs $3,200–$3,800. Even on a $200K+ total comp package, engineers run the math and share — paying $1,600–$1,900/person on a 2BR instead of $2,800 alone. The two-mile proximity premium to Apple Park is real and unavoidable if you want to walk or bike to campus.",
      },
    },
    {
      "@type": "Question",
      name: "What neighborhoods are near Apple Park in Cupertino?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The South De Anza corridor and areas near Wolfe Road are closest to Apple Park with a 5–15 minute bike ride. Homestead has slightly lower rents. Monta Vista commands the highest prices due to the school district premium. Most Apple employees use the internal shuttle network, so exact proximity matters less than being on a shuttle route.",
      },
    },
    {
      "@type": "Question",
      name: "Who are the typical roommates in Cupertino?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three groups: Apple employees — especially new transfers and incoming engineers from abroad who have no local network. De Anza College students — serious, often international, cost-conscious, using De Anza as a transfer pipeline to UC schools. And Monta Vista homeowners subletting rooms to working professionals, which is one of the best-value pockets in the city.",
      },
    },
  ],
};

const crumbSchema = breadcrumbSchema([
  { name: 'Home', url: 'https://findmyroomy.com/' },
  { name: 'Apartments', url: 'https://findmyroomy.com/apartments/' },
  { name: 'Cupertino, CA', url: 'https://findmyroomy.com/apartments/cupertino-ca/' },
]);

const svcSchema = serviceSchema({
  name: 'Find MyRoomie — Cupertino Roommate Finder',
  description: "Cupertino's Apple Park campus draws 12,000+ employees. Find verified roommates near De Anza Blvd and Apple Park — free messaging, no subscription.",
  url: 'https://findmyroomy.com/apartments/cupertino-ca/',
  areaServed: 'Cupertino, California',
});

export default function CupertinoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }}
      />
      <CupertinoContent />
    </>
  );
}
