// app/roommates/[city]/page.js
import { notFound } from 'next/navigation';
import cityList from '@/components/_data/cities.json';
import CityClientShell from './CityClientShell';
import Map from '../../../map/map';  // Adjust path as needed

const getFirstCityInState = (state) =>
  cityList.find((city) => city.state === state);

const STATE_COORDINATES = {};
for (const city of cityList) {
  if (!STATE_COORDINATES[city.state]) {
    STATE_COORDINATES[city.state] = { latitude: city.lat, longitude: city.lng };
  }
}

// ✅ Static paths for SSG
export async function generateStaticParams() {
  const paths = cityList.map(({ slug }) => ({ city: slug }));
  // // console.log("Static Paths:", paths);
  return paths;
}

// ✅ Dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { city: citySlug } = params;  // this is fine
  const city = cityList.find((c) => c.slug === citySlug);

  if (!city) notFound();

  const title = `Find Roommates in ${city.name} | Verified & Pet-Friendly – MyRoomie`;
  const description = `Find verified roommates in ${city.name} who match your lifestyle. Pet-friendly options, zero scams, and shared apartment listings.`;

  return {
    title,
    description,
    keywords: [
      `roommates ${city.name}`,
      `find roommate ${city.name}`,
      `roommate finder ${city.name}`,
      `shared housing ${city.name}`,
      `co-living ${city.name}`,
      `pet-friendly roommates ${city.name}`,
      'verified roommates',
      'roommate matching',
      'safe roommate search',
      'lifestyle compatible roommates'
    ].join(', '),
    openGraph: {
      title,
      description,
      url: `https://findmyroomy.com/roommates/${city.slug}`,
      siteName: 'MyRoomie',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: `https://findmyroomy.com/og-images/roommates-${city.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `Find roommates in ${city.name}`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://findmyroomy.com/og-images/roommates-${city.slug}.jpg`],
    },
    alternates: {
      canonical: `https://findmyroomy.com/roommates/${city.slug}`,
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

// ✅ Page component
export default async function RoommateCityPage({ params }) {
  const citySlug = params.city;
  const city = cityList.find((c) => c.slug === citySlug);
  
  if (!city) notFound();

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Find Roommates in ${city.name}`,
    "description": `Discover safe, verified roommates in ${city.name} who match your lifestyle. Pet-friendly options and scam-free listings.`,
    "url": `https://findmyroomy.com/roommates/${city.slug}`,
    "mainEntity": {
      "@type": "Service",
      "name": "MyRoomie Roommate Matching",
      "serviceType": "Roommate Finding and Matching Service",
      "areaServed": {
        "@type": "City",
        "name": city.name,
        "addressRegion": city.state || "US"
      },
      "provider": {
        "@type": "Organization",
        "name": "MyRoomie",
        "url": "https://findmyroomy.com"
      },
      "offers": {
        "@type": "Offer",
        "description": "Verified roommate matching service",
        "price": "0",
        "priceCurrency": "USD"
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
          "name": "Roommates",
          "item": "https://findmyroomy.com/roommates"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": city.name,
          "item": `https://findmyroomy.com/roommates/${city.slug}`
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
              Find Roommates in {city.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Discover safe, verified roommates in {city.name} who match your vibe and lifestyle. 
              Zero scams, real connections, perfect matches.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Browse Roommates
              </button>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Create Your Profile
              </button>
            </div>
          </div>

          {/* Map Section */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Explore Roommate Opportunities in {city.name}
              </h2>
              <p className="text-gray-600 text-center mb-6">
                See where roommates are looking and available apartments are located. 
                Click on markers to view profiles and apartment details.
              </p>
              <Map stateKey={city.state} citySlug={city} useCurrentLocation={false} />
            </div>
          </section>

          {/* Benefits Section */}
          <section className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Use MyRoomie in {city.name}?</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <span><strong>Verified profiles</strong> — Background checks and identity verification for safety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <span><strong>Lifestyle compatibility</strong> — Match based on habits, schedules, and preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <span><strong>Pet-friendly options</strong> — Find roommates who love your furry friends</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <span><strong>Zero scam listings</strong> — Verified users only, no hidden fees or fake profiles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <span><strong>Budget-aware matching</strong> — Find roommates within your price range</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Popular Roommate Types in {city.name}</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h4 className="font-semibold text-gray-800 mb-2">🎓 Students & Young Professionals</h4>
                  <p className="text-sm text-gray-600">Study-friendly, social, budget-conscious</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h4 className="font-semibold text-gray-800 mb-2">🐕 Pet Owners</h4>
                  <p className="text-sm text-gray-600">Dog parks nearby, pet-friendly apartments</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h4 className="font-semibold text-gray-800 mb-2">💼 Working Professionals</h4>
                  <p className="text-sm text-gray-600">Career-focused, clean, respectful</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h4 className="font-semibold text-gray-800 mb-2">🏃‍♀️ Active Lifestyle</h4>
                  <p className="text-sm text-gray-600">Gym buddies, outdoor enthusiasts</p>
                </div>
              </div>
            </div>
          </section>

          {/* Matching Process */}
          <section className="mb-16 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">How Roommate Matching Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="font-bold text-lg mb-3">Create Your Profile</h3>
                <p className="text-gray-600">
                  Tell us about your lifestyle, budget, and preferences. Upload photos and verify your identity.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="font-bold text-lg mb-3">Get Matched</h3>
                <p className="text-gray-600">
                  Our algorithm finds compatible roommates based on lifestyle, schedule, and housing preferences.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="font-bold text-lg mb-3">Connect & Move In</h3>
                <p className="text-gray-600">
                  Chat, meet up, and find the perfect apartment together. We handle the paperwork.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section for SEO */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions About Finding Roommates in {city.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-3">How are roommates verified on MyRoomie?</h3>
                <p className="text-gray-700">
                  All users complete identity verification, and many opt for background checks. We verify employment, 
                  references, and social media profiles to ensure authenticity.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-3">Can I find pet-friendly roommates in {city.name}?</h3>
                <p className="text-gray-700">
                  Absolutely! Filter by pet preferences to find roommates who love animals. We also show pet-friendly 
                  apartments and nearby dog parks.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-3">What if my roommate and I don't get along?</h3>
                <p className="text-gray-700">
                  Our matching algorithm reduces conflicts by 80%, but we offer mediation services and 
                  re-matching if needed within the first 30 days.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-3">Are there any hidden fees or costs?</h3>
                <p className="text-gray-700">
                  MyRoomie is completely free to use. No hidden fees, no subscription costs. 
                  We only make money when landlords list properties.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-3">How long does it take to find a roommate?</h3>
                <p className="text-gray-700">
                  Most users find compatible roommates within 2-4 weeks. Premium verified profiles 
                  typically match 50% faster.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-3">What makes MyRoomie different from other platforms?</h3>
                <p className="text-gray-700">
                  We focus on lifestyle compatibility, not just budget. Plus, verified profiles, 
                  zero scams, and integrated apartment search make us the safest choice.
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          {/* <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Success Stories from {city.name}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                <p className="text-gray-700 mb-4">
                  "Found my perfect roommate in just 2 weeks! We both love hiking and have similar schedules. 
                  The verification process made me feel so much safer."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-purple-600">S</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah M.</p>
                    <p className="text-sm text-gray-500">Marketing Professional</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                <p className="text-gray-700 mb-4">
                  "As a pet owner, finding roommates was always difficult. MyRoomie matched me with 
                  another dog lover and we found a great place with a yard!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-purple-600">M</span>
                  </div>
                  <div>
                    <p className="font-semibold">Mike T.</p>
                    <p className="text-sm text-gray-500">Software Developer</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                <p className="text-gray-700 mb-4">
                  "The lifestyle matching is incredible. My roommate and I have become best friends! 
                  We both cook, clean, and have similar social preferences."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-purple-600">J</span>
                  </div>
                  <div>
                    <p className="font-semibold">Jessica L.</p>
                    <p className="text-sm text-gray-500">Graduate Student</p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* Local SEO Content */}
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Roommate in {city.name}?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of verified users who've found their ideal living situation in {city.name}. 
              Safe, compatible, and scam-free roommate matching starts here.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors">
              Start Matching Today
            </button>
          </section>
        </div>
      </main>
    </CityClientShell>
  );
}