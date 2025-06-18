// app/roommates/[city]/page.tsx
import React from 'react';
import { MapPin } from 'lucide-react';
import CityClientShell from './CityClientShell';
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
    title: `Find Roommates in ${city.name} | Verified & Pet-Friendly – MyRoomie`,
    description: `Find verified roommates in ${city.name} who match your lifestyle. Pet-friendly options, zero scams, and shared apartment listings.`,
  };
}

export default async function RoommateCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = cityList.find((c) => c.slug === citySlug);
  if (!city) notFound();

  return (
    <CityClientShell>
      <main className="bg-[#FDFBF7] text-gray-900 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Find Roommates in {city.name}</h1>
          <p className="text-center text-lg text-gray-700 mb-8">
            Discover safe, verified roommates in {city.name} who match your vibe and lifestyle. 
          </p>
          <h2 className="text-xl font-semibold mb-6">Why Use MyRoomie?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Verified roommate profiles with lifestyle compatibility</li>
            <li>Pet-friendly and budget-aware options</li>
            <li>Zero scam listings, no hidden fees</li>
          </ul>
        </div>
      </main>
    </CityClientShell>
  );
}
