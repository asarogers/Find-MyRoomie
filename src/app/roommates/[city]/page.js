// app/roommates/[city]/page.js
import { notFound } from 'next/navigation';
import Link from 'next/link';
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
  return paths;
}

// ✅ Enhanced metadata for better CTR
export async function generateMetadata({ params }) {
  const { city: citySlug } = params;
  const city = cityList.find((c) => c.slug === citySlug);

  if (!city) notFound();

  // More compelling, action-oriented titles
  const title = `Roommate Finder ${city.name} | Find Compatible Roommates Fast - No Scams`;
  const description = `Find verified roommates in ${city.name} today. Browse pet-friendly, student & professional roommates. Free to use. Background-checked profiles only.`;

  return {
    title,
    description,
    keywords: [
      `roommate finder ${city.name.toLowerCase()}`,
      `find roommates ${city.name.toLowerCase()}`,
      `${city.name.toLowerCase()} roommates`,
      `roommate finder ${city.name.toLowerCase()} ${city.state?.toLowerCase()}`,
      `how to find a roommate in ${city.name.toLowerCase()}`,
      `shared apartments ${city.name.toLowerCase()}`,
      `findmyroomie ${city.name.toLowerCase()}`,
      `pet friendly roommates ${city.name.toLowerCase()}`,
      `student roommates ${city.name.toLowerCase()}`,
      `professional roommates ${city.name.toLowerCase()}`,
      'verified roommates',
      'roommate matching app',
      'safe roommate search'
    ].join(', '),
    openGraph: {
      title: `Find Roommates in ${city.name} | Verified & Compatible Matches`,
      description: `Browse hundreds of verified roommate profiles in ${city.name}. Pet-friendly options, student housing, professional matches. Join free today.`,
      url: `https://findmyroomy.com/roommates/${city.slug}/`,
      siteName: 'MyRoomie - Roommate Finder',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: `https://findmyroomy.com/og-images/roommates-${city.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `Find roommates in ${city.name} - MyRoomie`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Roommate Finder ${city.name} | MyRoomie`,
      description: `Find your perfect roommate in ${city.name}. Verified profiles, no scams, free to use.`,
      images: [`https://findmyroomy.com/og-images/roommates-${city.slug}.jpg`],
    },
    alternates: {
      canonical: `https://findmyroomy.com/roommates/${city.slug}/`,
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
      'geo.position': `${city.lat};${city.lng}`,
    },
  };
}

// ✅ Enhanced page component
export default async function RoommateCityPage({ params }) {
  const citySlug = params.city;
  const city = cityList.find((c) => c.slug === citySlug);
  
  if (!city) notFound();

  // Enhanced structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Roommate Finder ${city.name}`,
    "description": `Find verified, compatible roommates in ${city.name}. Browse profiles, connect safely, find your perfect living situation.`,
    "url": `https://findmyroomy.com/roommates/${city.slug}`,
    "mainEntity": {
      "@type": "Service",
      "name": "MyRoomie Roommate Finder",
      "serviceType": "Roommate Finding and Matching Service",
      "areaServed": {
        "@type": "City",
        "name": city.name,
        "addressRegion": city.state || "US",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": city.lat,
          "longitude": city.lng
        }
      },
      "provider": {
        "@type": "Organization",
        "name": "MyRoomie",
        "url": "https://findmyroomy.com",
        "description": "Verified roommate finder platform"
      },
      "offers": {
        "@type": "Offer",
        "description": "Free roommate matching service with verified profiles",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
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
          "name": "Roommate Finder",
          "item": "https://findmyroomy.com/roommates"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": `${city.name} Roommates`,
          "item": `https://findmyroomy.com/roommates/${city.slug}`
        }
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://findmyroomy.com/search?q={search_term_string}&city=" + city.slug,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      {/* Structured Data — must be outside client component wrapper for static export */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    <CityClientShell>
      <main className="bg-[#FDFBF7] text-gray-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Enhanced Hero Section with Local Keywords */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-green-700">Beta open · Free forever · No credit card</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Roommates in {city.name} — Free to Message, Always
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-4xl mx-auto">
              Tired of Roomster charging $30/month just to read a message? Every verified roommate in {city.name} is free to contact — no subscription, no paywall, no catch.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-600">
              <span className="bg-green-100 px-4 py-2 rounded-full flex items-center">
                ✅ Gov ID Verified
              </span>
              <span className="bg-blue-100 px-4 py-2 rounded-full flex items-center">
                🔒 Background Checked
              </span>
              <span className="bg-purple-100 px-4 py-2 rounded-full flex items-center">
                💬 Free to Message
              </span>
              <span className="bg-orange-100 px-4 py-2 rounded-full flex items-center">
                🚫 Zero Fake Profiles
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/downloadApp" className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Find My Roommate in {city.name} — It&apos;s Free
              </Link>
              <Link href="/downloadApp" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105">
                Claim Founding Member Status
              </Link>
            </div>
          </div>

          {/* Map Section */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Roommate Map: {city.name} Housing Locations
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Explore where roommates are looking and available shared apartments in {city.name}. 
                Click markers to view profiles and housing details.
              </p>
              <Map stateKey={city.state} citySlug={city} useCurrentLocation={false} />
            </div>
          </section>
          

          {/* How to Find Roommates Section - Targets "how to" searches */}
          <section className="mb-16 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              How to Find a Roommate in {city.name} (The Right Way)
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="font-bold text-lg mb-3">Browse Verified Profiles</h3>
                <p className="text-gray-600 text-sm">
                  See background-checked roommates in {city.name}. View photos, preferences, and lifestyle details.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="font-bold text-lg mb-3">Connect Safely</h3>
                <p className="text-gray-600 text-sm">
                  Message directly through our secure platform. No phone numbers until you're ready.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="font-bold text-lg mb-3">Find Shared Housing</h3>
                <p className="text-gray-600 text-sm">
                  Browse shared apartments in {city.name} or find someone to apartment hunt with.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-bold text-lg mb-3">Move In Together</h3>
                <p className="text-gray-600 text-sm">
                  Meet in person, visit apartments, and start your roommate journey in {city.name}.
                </p>
              </div>
            </div>
          </section>
          {/* Popular Roommate Types - Enhanced for local SEO */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Popular Roommate Types in {city.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-purple-700">🎓 Student Roommates</h3>
                <p className="text-gray-700 mb-4">
                  College students and grad students looking for study-friendly housing near campus in {city.name}.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Budget-conscious options</li>
                  <li>• Study group friendly</li>
                  <li>• Near public transport</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-green-700">🐕 Pet-Friendly Roommates</h3>
                <p className="text-gray-700 mb-4">
                  Dog and cat lovers seeking pet-friendly shared apartments in {city.name}.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dog parks nearby</li>
                  <li>• Pet deposit sharing</li>
                  <li>• Animal-loving community</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-blue-700">💼 Professional Roommates</h3>
                <p className="text-gray-700 mb-4">
                  Working professionals seeking mature, career-focused roommates in {city.name}.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Clean and organized</li>
                  <li>• Respectful schedules</li>
                  <li>• Higher budget range</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-red-700">🏃‍♀️ Active Lifestyle</h3>
                <p className="text-gray-700 mb-4">
                  Fitness enthusiasts and outdoor lovers looking for like-minded roommates.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Gym memberships</li>
                  <li>• Hiking partners</li>
                  <li>• Healthy living focus</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-yellow-700">🌟 LGBTQ+ Friendly</h3>
                <p className="text-gray-700 mb-4">
                  Inclusive, welcoming roommates creating safe spaces in {city.name}.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Inclusive community</li>
                  <li>• Safe environment</li>
                  <li>• Diverse backgrounds</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-indigo-700">🎨 Creative Types</h3>
                <p className="text-gray-700 mb-4">
                  Artists, musicians, and creatives seeking inspiring living spaces.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Creative workspace</li>
                  <li>• Art-friendly environment</li>
                  <li>• Flexible schedules</li>
                </ul>
              </div>
            </div>
          </section>

          

          {/* Enhanced FAQ Section targeting long-tail searches */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {city.name} Roommate Finder FAQ
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <details className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <summary className="font-bold text-lg cursor-pointer mb-3">
                  How do I find a roommate in {city.name}?
                </summary>
                <p className="text-gray-700">
                  Start by creating a free profile on MyRoomie. Browse verified roommate profiles in {city.name}, 
                  filter by preferences (pet-friendly, budget, lifestyle), and connect directly with compatible matches. 
                  Our platform is designed specifically for {city.name} roommate seekers.
                </p>
              </details>
              
              <details className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <summary className="font-bold text-lg cursor-pointer mb-3">
                  Are roommates on MyRoomie background checked?
                </summary>
                <p className="text-gray-700">
                  Yes! All roommate profiles go through identity verification. Many users opt for additional 
                  background checks. We verify employment, references, and social media to ensure authentic, 
                  safe connections in {city.name}.
                </p>
              </details>
              
              <details className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <summary className="font-bold text-lg cursor-pointer mb-3">
                  Can I find pet-friendly roommates in {city.name}?
                </summary>
                <p className="text-gray-700">
                  Absolutely! Use our pet-friendly filters to find dog lovers, cat owners, and pet-welcoming 
                  roommates in {city.name}. We also show pet-friendly apartments and nearby dog parks for your convenience.
                </p>
              </details>
              
              <details className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <summary className="font-bold text-lg cursor-pointer mb-3">
                  What's the average rent for shared apartments in {city.name}?
                </summary>
                <p className="text-gray-700">
                  Shared housing costs in {city.name} vary by neighborhood. Our platform shows real-time pricing 
                  for roommate situations, helping you find options within your budget. Filter by price range 
                  to see what's available in your preferred areas.
                </p>
              </details>
              
              <details className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <summary className="font-bold text-lg cursor-pointer mb-3">
                  How long does it take to find a roommate in {city.name}?
                </summary>
                <p className="text-gray-700">
                  It depends on your area and preferences — but completing your profile fully and messaging
                  people promptly makes a big difference. Beta testers report getting responses within days
                  of joining. The key is being specific about your lifestyle and reaching out directly.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <summary className="font-bold text-lg cursor-pointer mb-3">
                  Is MyRoomie really free to use?
                </summary>
                <p className="text-gray-700">
                  Yes — messaging, browsing, and connecting are free. That&apos;s the founding promise.
                  Unlike Roomster ($30/month just to read messages), we don&apos;t believe you should pay
                  to find a place to live. Beta testers lock in free messaging permanently.
                </p>
              </details>
              
              <details className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <summary className="font-bold text-lg cursor-pointer mb-3">
                  What makes MyRoomie different from Craigslist?
                </summary>
                <p className="text-gray-700">
                  Unlike Craigslist, MyRoomie verifies all users, eliminating scams and fake profiles. 
                  Our matching algorithm considers lifestyle compatibility, not just budget. Plus, you get 
                  secure messaging and integrated apartment search specifically for {city.name}.
                </p>
              </details>
              
              <details className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <summary className="font-bold text-lg cursor-pointer mb-3">
                  Can I find student roommates near universities in {city.name}?
                </summary>
                <p className="text-gray-700">
                  Yes! Filter by "Student" in our roommate categories to find college and graduate students 
                  looking for shared housing near campuses in {city.name}. We show proximity to public transport 
                  and university shuttle routes.
                </p>
              </details>
            </div>
          </section>

          {/* Local Benefits Section */}
          <section className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Use MyRoomie for {city.name} Roommates?</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <span><strong>Local expertise</strong> — We know {city.name} neighborhoods, transport, and housing market</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <span><strong>Verified profiles only</strong> — No scams, fake profiles, or catfishing in {city.name}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <span><strong>Lifestyle matching</strong> — Find roommates who share your habits and schedules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <span><strong>Safe communication</strong> — Secure messaging until you're ready to meet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <span><strong>Budget transparency</strong> — See real costs upfront, no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <span><strong>Direct founder access</strong> — Beta testers get a direct line to the founder for feedback and issues</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">{city.name} Neighborhood Insights</h3>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Finding the right roommate in {city.name} means understanding the local rental market. 
                  Our platform provides real-time insights into:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Average rent costs by neighborhood</li>
                  <li>• Public transportation accessibility</li>
                  <li>• Pet-friendly building policies</li>
                  <li>• University proximity for students</li>
                  <li>• Nightlife and entertainment areas</li>
                  <li>• Professional networking hubs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Beta Tester Stories */}
          <section className="mb-16 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-2 text-center">What beta testers are saying</h2>
            <p className="text-center text-gray-500 mb-8">Early access members who switched from Roomster and Craigslist</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">S</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;Roomster wanted $30/month just to read messages. I joined here for free and had 4 people reach out in a week. This is what it should have always been.&quot;
                </p>
                <p className="font-semibold">Sarah M.</p>
                <p className="text-sm text-gray-500">Beta tester · {city.name}</p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">J</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;I used Facebook groups and Craigslist for months — half the posts were fake. The verification here is night and day. I actually felt safe meeting someone.&quot;
                </p>
                <p className="font-semibold">Jake L.</p>
                <p className="text-sm text-gray-500">Beta tester · {city.name}</p>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">M</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;The zone map is the feature I didn&apos;t know I needed. I drew my commute circle and only saw roommates in my actual area. Why didn&apos;t this exist sooner?&quot;
                </p>
                <p className="font-semibold">Maya P.</p>
                <p className="text-sm text-gray-500">Beta tester · {city.name}</p>
              </div>
            </div>
          </section>

          {/* Related guides — city ↔ blog cross-linking */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Guides for finding a roommate in {city.name}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href={`/blogs/free-roommate-finder-${city.slug}`}
                className="block bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all"
              >
                <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-2">Free Roommate Finder</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Free Roommate Finder in {city.name} — No Paywall
                </h3>
                <p className="text-sm text-gray-600">
                  Why Roomster costs $29.99/month and what to use instead. Verified, free, no credit card.
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-purple-600">Read guide →</span>
              </Link>
              <Link
                href={`/blogs/how-to-find-a-roommate-${city.slug}`}
                className="block bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all"
              >
                <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-2">2026 Guide</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  How to Find a Roommate in {city.name} (2026)
                </h3>
                <p className="text-sm text-gray-600">
                  What to ask, how to avoid scams, and how to vet a stranger before handing over a deposit.
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-purple-600">Read guide →</span>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white p-12 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">
              Find your roommate in {city.name} — free.
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Beta testers get founding member status, 6 months free premium, and messaging that&apos;s free forever.
              No Roomster paywall. No credit card. Takes 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/downloadApp" className="bg-white text-purple-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                Find My Roommate in {city.name} — It&apos;s Free
              </Link>
              <Link href="/downloadApp" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105">
                Claim Founding Member Status
              </Link>
            </div>
            <p className="text-sm mt-4 opacity-75">
              Free to message · Gov ID verified · No scams · Beta spots limited
            </p>
          </section>
        </div>
      </main>
    </CityClientShell>
    </>
  );
}