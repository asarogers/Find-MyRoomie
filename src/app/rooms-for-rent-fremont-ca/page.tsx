import type { Metadata } from 'next';
import RoomsForRentFremontContent from './RoomsForRentFremontContent';

export const metadata: Metadata = {
  title: 'Rooms for Rent in Fremont CA — Verified, Free to Message | Find MyRoomie',
  description:
    "Find rooms for rent in Fremont's Irvington, Centerville, and Warm Springs neighborhoods. Vegetarian households, BART-accessible, H-1B friendly. Free messaging.",
  alternates: {
    canonical: 'https://findmyroomy.com/rooms-for-rent-fremont-ca/',
  },
  openGraph: {
    title: 'Rooms for Rent in Fremont CA — Verified, Free to Message | Find MyRoomie',
    description:
      "Rooms for rent in Fremont's Irvington, Centerville, and Warm Springs neighborhoods. Vegetarian households, BART-accessible, H-1B friendly. Free messaging.",
    url: 'https://findmyroomy.com/rooms-for-rent-fremont-ca/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rooms for Rent Fremont CA | Find MyRoomie',
    description: 'Vegetarian households, BART access, H-1B friendly. Free messaging, verified profiles.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is a room for rent in Fremont CA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rooms for rent in Fremont typically range from $900–$1,400/month in a shared house, or $1,200–$1,700/month for a private room in a shared apartment. Furnished rooms in vegetarian households near Warm Springs BART run $1,100–$1,500/month.",
      },
    },
    {
      "@type": "Question",
      name: "Are there vegetarian rooms for rent in Fremont?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Fremont's large South Asian community means many shared households maintain vegetarian kitchens. Find MyRoomie's cultural filters let you search specifically for vegetarian households — something no other roommate platform offers.",
      },
    },
    {
      "@type": "Question",
      name: "Is Fremont good for H-1B workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fremont is one of the most H-1B-friendly cities in the US. 47% South Asian in some zip codes, established temples/grocery/restaurants, BART access via Warm Springs station to Silicon Valley, and lower rents than Cupertino or Palo Alto. Most H-1B arrivals at Fremont-area tech companies find housing here first.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find a room for rent in Fremont without getting scammed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Craigslist Fremont has documented scam operations specifically targeting the South Asian community: culturally resonant listing + deposit request + ghost after payment. Find MyRoomie verifies every profile before you can contact them — you know who you're meeting before you agree to anything.",
      },
    },
  ],
};

export default function RoomsForRentFremontPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RoomsForRentFremontContent />
    </>
  );
}
