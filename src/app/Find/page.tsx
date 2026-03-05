// app/find/page.tsx

import { Metadata } from 'next';
import { Search, Filter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Find a Roommate | Find MyRoomy',
  description: 'Search for verified roommates and shared apartments near you. Pet-friendly, budget-aware, and safe listings on Find MyRoomy.',
};

export default function FindPage() {
  return (
    <main className="bg-[#FDFBF7] text-gray-900 pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Find Your Roommate</h1>
        <p className="text-center text-gray-600 mb-10">
          Browse verified roommate listings tailored to your vibe, budget, and lifestyle.
        </p>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
          <div className="flex flex-1 border border-gray-300 rounded-full overflow-hidden bg-white">
            <input
              type="text"
              placeholder="Search by city, zip, or keyword"
              className="flex-grow px-5 py-3 outline-none"
            />
            <button className="px-4 bg-purple-600 text-white hover:bg-purple-700 transition">
              <Search size={20} />
            </button>
          </div>

          <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition">
            <Filter size={18} />
            Filters
          </button>
        </div>

        {/* Results Placeholder */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition border border-gray-100"
            >
              <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
              <h2 className="font-semibold text-lg mb-1">Room in Chicago</h2>
              <p className="text-sm text-gray-600 mb-2">Pet-friendly · $950/month · LGBTQ+ friendly</p>
              <button className="mt-2 px-4 py-2 text-sm bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
                View Listing
              </button>
            </div>
          ))}
        </section>

        <div className="text-center mt-10 text-sm text-gray-500">
          Showing 1–6 of 200 results. Use filters for more specific matches.
        </div>
      </div>
    </main>
  );
}
