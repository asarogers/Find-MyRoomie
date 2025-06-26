// app/pets/[city]/page.tsx
import { notFound } from 'next/navigation';
import cityList from '@/components/_data/cities.json';
import CityClientShell from '../../roommates/[city]/CityClientShell';
import { Metadata } from 'next';

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

  return {
    title: `Pet-Friendly Roommates & Apartments in ${city.name} | Find Housing That Welcomes Pets`,
    description: `Find pet-friendly roommates and apartments in ${city.name}. Search dog-friendly, cat-friendly housing. No pet deposits surprises. Connect with pet owners today.`,
    keywords: [
      `pet friendly roommates ${city.name.toLowerCase()}`,
      `dog friendly apartments ${city.name.toLowerCase()}`,
      `cat friendly housing ${city.name.toLowerCase()}`,
      `pets allowed ${city.name.toLowerCase()}`,
      `roommate finder ${city.name.toLowerCase()}`,
      `pet owner roommates ${city.name.toLowerCase()}`
    ].join(', '),
    alternates: {
      canonical: `https://findmyroomy.com/pets/${city.slug}`,
    },
    openGraph: {
      title: `Pet-Friendly Housing in ${city.name} | MyRoomie`,
      description: `Connect with pet-friendly roommates and find apartments that welcome your pets in ${city.name}.`,
      type: 'website',
      url: `https://findmyroomy.com/pets/${city.slug}`,
    },
  };
}

export default async function PetsCityPage({ params }: Params) {
  const { city: citySlug } = await params;
  const city = cityList.find((c) => c.slug === citySlug);
  
  if (!city) notFound();

  return (
    <CityClientShell>
      <main className="bg-[#FDFBF7] text-gray-900 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Find Pet-Friendly Roommates & Apartments in {city.name}
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Connect with pet owners and find housing that welcomes your furry friends. 
              No surprise pet fees or deposit drama.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
              <span className="bg-green-100 px-3 py-1 rounded-full">🐕 Dog Friendly</span>
              <span className="bg-green-100 px-3 py-1 rounded-full">🐱 Cat Friendly</span>
              <span className="bg-green-100 px-3 py-1 rounded-full">🏠 Pet Deposits Known</span>
            </div>
          </div>

          {/* Benefits Section - Targets "how to find" queries */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              How to Find Pet-Friendly Housing in {city.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-green-700">
                  🔍 Smart Pet Filters
                </h3>
                <p className="text-gray-700">
                  Filter for dog-friendly and cat-friendly roommates upfront. 
                  See who already has pets and loves animals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-blue-700">
                  🏠 Transparent Pet Policies
                </h3>
                <p className="text-gray-700">
                  Know pet deposits, restrictions, and policies before you visit. 
                  No surprises from landlords later.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-purple-700">
                  🤝 Pet Owner Community
                </h3>
                <p className="text-gray-700">
                  Connect with fellow pet parents who understand the challenges 
                  of finding pet-friendly housing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-orange-700">
                  ✅ Verified Listings
                </h3>
                <p className="text-gray-700">
                  Scam-free platform with verified users and legitimate 
                  pet-friendly housing options.
                </p>
              </div>
            </div>
          </section>

          {/* Pet Types Section - Targets specific pet searches */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Pet-Friendly Options in {city.name}
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">🐕 Dog-Friendly</h3>
                  <p className="text-sm text-gray-600">
                    Roommates with dogs, dog parks nearby, fenced yards
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">🐱 Cat-Friendly</h3>
                  <p className="text-sm text-gray-600">
                    Cat owners, multiple cats OK, indoor/outdoor options
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">🐾 All Pets Welcome</h3>
                  <p className="text-sm text-gray-600">
                    Birds, reptiles, small pets, emotional support animals
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Local SEO Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Why Choose Pet-Friendly Roommates in {city.name}?
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Finding pet-friendly housing in {city.name} doesn't have to be stressful. 
                Whether you're looking for dog-friendly apartments or cat-friendly roommates, 
                MyRoomie connects you with the right people and places.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Browse verified pet-friendly listings in {city.name}</li>
                <li>Connect directly with pet-loving roommates</li>
                <li>Know pet policies and deposits upfront</li>
                <li>Join a community that understands pet ownership</li>
                <li>Skip the rental application rejections</li>
              </ul>
            </div>
          </section>

          {/* FAQ Section - Targets question-based searches */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Common Questions About Pet-Friendly Housing in {city.name}
            </h2>
            <div className="space-y-4">
              <details className="bg-white p-4 rounded-lg shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  How do I find roommates who accept pets in {city.name}?
                </summary>
                <p className="mt-2 text-gray-700">
                  Use MyRoomie's pet-friendly filters to find roommates who already have pets 
                  or explicitly welcome them. You can see their pet preferences before messaging.
                </p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  What about pet deposits and fees?
                </summary>
                <p className="mt-2 text-gray-700">
                  Our listings show pet deposit requirements upfront. Many roommates share 
                  pet costs, and some landlords waive deposits for responsible pet owners.
                </p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Can I find apartments that allow large dogs?
                </summary>
                <p className="mt-2 text-gray-700">
                  Yes! Our platform includes filters for dog size preferences and breed restrictions. 
                  Connect with roommates who understand large dog needs.
                </p>
              </details>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-green-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Ready to Find Your Perfect Pet-Friendly Match?
            </h2>
            <p className="text-gray-700 mb-6">
              Join thousands of pet owners who found their ideal living situation in {city.name}
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Start Your Search
            </button>
          </section>
        </div>
      </main>
    </CityClientShell>
  );
}