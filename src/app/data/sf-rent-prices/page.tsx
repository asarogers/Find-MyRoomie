import type { Metadata } from 'next';
import SfRentPricesContent from './SfRentPricesContent';

export const metadata: Metadata = {
  title: 'SF Bay Area Rent Price Tracker — Monthly Data by Neighborhood 2026 | Find MyRoomie',
  description: 'Monthly median rent data for 15 Bay Area neighborhoods. 1BR and 2BR prices, YoY changes, roommate savings math. Updated March 2026. Free to cite.',
  alternates: {
    canonical: 'https://findmyroomy.com/data/sf-rent-prices/',
  },
  openGraph: {
    title: 'SF Bay Area Rent Price Tracker — Monthly Data by Neighborhood 2026',
    description: 'Monthly median rent data for 15 Bay Area neighborhoods. 1BR and 2BR prices, YoY changes, roommate savings math. Updated March 2026.',
    url: 'https://findmyroomy.com/data/sf-rent-prices/',
    type: 'article',
  },
};

// Article schema with dateModified (critical for freshness signals)
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SF Bay Area Rent Price Tracker — Monthly Data by Neighborhood 2026",
  description: "Monthly median rent data for 15 Bay Area neighborhoods updated March 2026.",
  datePublished: "2026-03-01T00:00:00.000Z",
  dateModified: "2026-03-09T00:00:00.000Z",
  author: { "@type": "Organization", name: "Find MyRoomie", url: "https://findmyroomy.com" },
  publisher: { "@type": "Organization", name: "Find MyRoomie", url: "https://findmyroomy.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://findmyroomy.com/data/sf-rent-prices/" },
};

// Dataset schema — makes this citable in Google's dataset search
const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "SF Bay Area Median Rent by Neighborhood — March 2026",
  description: "Monthly median 1BR and 2BR rent prices for 15 Bay Area neighborhoods, with year-over-year percentage changes.",
  url: "https://findmyroomy.com/data/sf-rent-prices/",
  temporalCoverage: "2025-03/2026-03",
  spatialCoverage: { "@type": "Place", name: "San Francisco Bay Area, California" },
  creator: { "@type": "Organization", name: "Find MyRoomie" },
  dateModified: "2026-03-09",
};

export default function SfRentPricesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <SfRentPricesContent />
    </>
  );
}
