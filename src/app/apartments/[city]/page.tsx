// src/app/apartment/[city]/page.tsx
import { notFound } from 'next/navigation';
import cityList from '@/components/_data/cities.json';
import CityClientShell from '../../roommates/[city]/CityClientShell';
import Map from '../../../map/map'; // Adjust path as needed
import type { Metadata } from 'next';

type Params = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return cityList.map(({ slug }) => ({ city: slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cityList.find((c) => c.slug === citySlug);
  
  
  if (!city) notFound();

  const title = `Shared Apartments in ${city.name} | Affordable Living – MyRoomie`;
  const description = `Explore affordable apartments in ${city.name} designed for roommates. Shared spaces, better prices, and verified co-living matches.`;
  
  return {
    title,
    description,
    keywords: [
      `apartments ${city.name}`,
      `roommates ${city.name}`,
      `shared housing ${city.name}`,
      `co-living ${city.name}`,
      `affordable rent ${city.name}`,
      'split rent',
      'roommate matching',
      'shared apartments'
    ].join(', '),
    openGraph: {
      title,
      description,
      url: `https://findmyroomy.com/apartment/${city.slug}`,
      siteName: 'MyRoomie',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: `https://findmyroomy.com/og-images/apartment-${city.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `Apartments for roommates in ${city.name}`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://findmyroomy.com/og-images/apartment-${city.slug}.jpg`],
    },
    alternates: {
      canonical: `https://findmyroomy.com/apartment/${city.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'geo.region': city.state || 'US',
      'geo.placename': city.name,
    },
  };
}

export default async function ApartmentCityPage({ params }: Params) {
  const { city: citySlug } = await params;
  const city = cityList.find((c) => c.slug === citySlug);
  
  if (!city) notFound();

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Shared Apartments in ${city.name}`,
    "description": `Find affordable shared apartments and roommates in ${city.name}. Split rent, utilities, and enjoy better living with verified matches.`,
    "url": `https://findmyroomy.com/apartment/${city.slug}`,
    "mainEntity": {
      "@type": "Service",
      "name": "MyRoomie Apartment Sharing",
      "serviceType": "Apartment Rental and Roommate Matching",
      "areaServed": {
        "@type": "City",
        "name": city.name,
        "addressRegion": city.state || "US"
      },
      "provider": {
        "@type": "Organization",
        "name": "MyRoomie",
        "url": "https://findmyroomy.com"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://findmyroomy.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Apartments",
          "item": "https://findmyroomy.com/apartment"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": city.name,
          "item": `https://findmyroomy.com/apartment/${city.slug}`
        }
      ]
    }
  };

  return (
    <CityClientShell>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="bg-[#FDFBF7] text-gray-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Apartments for Roommates in {city.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Lower rent, better living. MyRoomie helps you find shared apartments in {city.name} that match your lifestyle and budget.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Find Apartments
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Post Your Listing
              </button>
            </div>
          </div>

          {/* Map Section */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Explore Available Apartments in {city.name}
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Browse shared apartments on our interactive map. Click on markers to see details, photos, and roommate preferences.
              </p>
              <Map stateKey={city.state} citySlug={city} useCurrentLocation={false} />
            </div>
          </section>

          {/* Benefits Section */}
          <section className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Share a Space in {city.name}?</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Split rent and utilities</strong> — Save 30-50% on housing costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Filter by lifestyle</strong> — Find apartments that match your preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Apply together</strong> — Skip the stress of individual applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Verified roommates</strong> — Background checks and identity verification</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Popular Neighborhoods</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Add dynamic neighborhoods based on city data */}
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h4 className="font-semibold text-gray-800">Downtown</h4>
                  <p className="text-sm text-gray-600">Urban living, walkable</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h4 className="font-semibold text-gray-800">University Area</h4>
                  <p className="text-sm text-gray-600">Student-friendly, affordable</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h4 className="font-semibold text-gray-800">Suburbs</h4>
                  <p className="text-sm text-gray-600">Quiet, family-friendly</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h4 className="font-semibold text-gray-800">Arts District</h4>
                  <p className="text-sm text-gray-600">Creative, vibrant nightlife</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section for SEO */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions About Apartments in {city.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-3">How much can I save by sharing an apartment?</h3>
                <p className="text-gray-700">
                  In {city.name}, roommates typically save 30-50% on rent and utilities by sharing a 2-3 bedroom apartment compared to living alone.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-3">Are roommates verified on MyRoomie?</h3>
                <p className="text-gray-700">
                  Yes! All users complete identity verification and optional background checks for safe, trusted roommate matching.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-3">What's included in shared apartments?</h3>
                <p className="text-gray-700">
                  Most shared apartments include furnished common areas, utilities, WiFi, and amenities like gyms or pools.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-3">How do I apply for apartments with roommates?</h3>
                <p className="text-gray-700">
                  Once matched, you and your roommates can submit joint applications through our platform, simplifying the process.
                </p>
              </div>
            </div>
          </section>

          {/* Local SEO Content */}
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Start Your Roommate Journey in {city.name}</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of people who've found their perfect shared living situation in {city.name}. 
              Better apartments, better prices, better roommates.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors">
              Get Started Today
            </button>
          </section>
        </div>
      </main>
    </CityClientShell>
  );
}