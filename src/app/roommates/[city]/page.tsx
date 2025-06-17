import React from 'react';
import { MapPin } from 'lucide-react';
import CityClientShell from './CityClientShell';

const cityData: Record<string, { title?: string; description?: string }> = {
  'huntsville-al': {
    title: 'Find Roommates in Huntsville, AL • MyRoomie',
    description: 'Looking for a roommate in Huntsville, AL? Be the first to hear when matches go live.',
  },
};

export async function generateMetadata({ params }: { params: { city: string } }) {
  const slug = params.city;
  const pretty = formatCityName(slug);
  const meta = cityData[slug];

  return {
    title: meta?.title || `Find Roommates in ${pretty} • MyRoomie`,
    description: meta?.description || `Looking for roommates in ${pretty}? Join MyRoomie to connect with compatible matches.`,
  };
}

function formatCityName(slug: string) {
  const parts = slug.split('-');
  return parts
    .map((w, i) => (i === parts.length - 1 && w.length === 2 ? w.toUpperCase() : capitalize(w)))
    .join(' ');
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function CityPage({ params }: { params: { city: string } }) {
  const pretty = formatCityName(params.city);
  const meta = cityData[params.city];
  const description =
    meta?.description || `Looking for roommates in ${pretty}? Join MyRoomie to connect with compatible matches.`;

  return (
    <CityClientShell>
      <main className="bg-[#FDFBF7] text-gray-900 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Find Roommates in {pretty}</h1>
          <p className="text-center text-lg text-gray-700 mb-8">{description}</p>

          <div className="text-center mb-12">
            <a
              href="https://forms.gle/qJQXtqEgHb45Y2Y8A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-6 py-3 rounded-2xl font-semibold hover:bg-gray-800 transition"
            >
              Become a Beta Tester
            </a>
          </div>

          <section id="map" className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Explore {pretty}</h2>
            <div className="scroll-mt-28 relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/20 shadow-2xl">
                <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-sm text-gray-500">MyRoomie Map Demo</span>
                  </div>
                  <div className="h-64 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                      <p className="text-gray-600 font-medium">Interactive map demo coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </CityClientShell>
  );
}
