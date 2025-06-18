// app/pets/[city]/page.tsx
import React from 'react';
import { PawPrint } from 'lucide-react';
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
    title: `Pet-Friendly Housing in ${city.name} | Live With Your Pets – MyRoomie`,
    description: `Searching for pet-friendly roommates or apartments in ${city.name}? MyRoomie connects you with people and places that welcome pets.`,
  };
}

export default async function PetsCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = cityList.find((c) => c.slug === citySlug);
  if (!city) notFound();

  return (
    <CityClientShell>
      <main className="bg-[#FDFBF7] text-gray-900 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Pet-Friendly Housing in {city.name}</h1>
          <p className="text-center text-lg text-gray-700 mb-8">
            Live with your dog, cat, or support animal. MyRoomie makes finding pet-friendly housing in {city.name} simple and scam-free.
          </p>
          <h2 className="text-xl font-semibold mb-6">Made for Pet Owners</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Filter for dog- and cat-friendly roommates</li>
            <li>Know up front which apartments accept pets</li>
            <li>Avoid landlord surprises or fees</li>
          </ul>
        </div>
      </main>
    </CityClientShell>
  );
}
