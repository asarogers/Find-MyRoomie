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

export async function generateMetadata({ params } : Params): Promise<Metadata> {
  const {city : citySlug} = await params;
  const city = cityList.find((c) => c.slug === citySlug);
  if (!city) notFound();

  return {
    title: `Pet-Friendly Housing in ${city.name} | Live With Your Pets – MyRoomie`,
    description: `Searching for pet-friendly roommates or apartments in ${city.name}? MyRoomie connects you with people and places that welcome pets.`,
    alternates: {
      canonical: `https://findmyroomy.com/pets/${city.slug}`,
    },
  };
}

export default async function PetsCityPage({ params } :  Params) {
  const {city : citySlug} = await params;
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
