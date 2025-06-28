'use client';

import { useRouter } from 'next/navigation';
import Map from '../../../map/map';

export default function CityContent({ city }) {
  const router = useRouter();

  const handleNavigateToApp = () => {
    router.push('/downloadApp');
  };

  return (
    <main className="pt-24 pb-16 bg-[#FDFBF7] text-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Roommate Finder {city.name} | Find Your Perfect Match
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-4xl mx-auto">
          Browse verified roommate profiles in {city.name}.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl"
            onClick={handleNavigateToApp}
          >
            Browse {city.name} Roommates
          </button>
          <button
            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            onClick={handleNavigateToApp}
          >
            Create Free Profile
          </button>
        </div>

        <Map stateKey={city.state} citySlug={city.slug} useCurrentLocation={false} />
      </div>
    </main>
  );
}
