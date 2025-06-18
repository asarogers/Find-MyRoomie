// app/apartment/[city]/page.tsx
import React from 'react';
import { Building2 } from 'lucide-react';
import CityClientShell from '../../roommates/[city]/CityClientShell';
import cityList from '../../../components/_data/cities.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return cityList.map(({ slug }) => ({ city: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = cityList.find((c) => c.slug === citySlug);
  if (!city) notFound();
  return {
    title: `Shared Apartments in ${city.name} | Affordable Living – MyRoomie`,
    description: `Explore affordable apartments in ${city.name} designed for roommates. Shared spaces, better prices, and verified co-living matches.`,
  };
}

export default async function ApartmentCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = cityList.find((c) => c.slug === citySlug);
  if (!city) notFound();

  return (
    <CityClientShell>
      <main className="bg-[#FDFBF7] text-gray-900 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Apartments for Roommates in {city.name}</h1>
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
