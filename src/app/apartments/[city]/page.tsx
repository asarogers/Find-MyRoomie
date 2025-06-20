// app/apartment/[city]/page.tsx

import { notFound } from 'next/navigation';
import cityList from '@/components/_data/cities.json';
import CityClientShell from '../../roommates/[city]/CityClientShell';
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

  return {
    title: `Shared Apartments in ${city.name} | Affordable Living – MyRoomie`,
    description: `Explore affordable apartments in ${city.name} designed for roommates. Shared spaces, better prices, and verified co-living matches.`,
    alternates: {
      canonical: `https://findmyroomy.com/apartment/${city.slug}`,
    },
  };
}

export default async function ApartmentCityPage({ params }: Params) {
  const { city: citySlug } = await params;
  const city = cityList.find((c) => c.slug === citySlug);
  if (!city) notFound();

  return (
    <CityClientShell>
      <main className="bg-[#FDFBF7] text-gray-900 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Apartments for Roommates in {city.name}
          </h1>
          <p className="text-center text-lg text-gray-700 mb-8">
            Lower rent, better living. MyRoomie helps you find shared apartments in {city.name} that match your lifestyle.
          </p>
          <h2 className="text-xl font-semibold mb-6">Why Share a Space?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Split rent and utilities with ease</li>
            <li>Filter by apartment type, amenities, and lifestyle fit</li>
            <li>Apply together with roommates — skip the stress</li>
          </ul>
        </div>
      </main>
    </CityClientShell>
  );
}