"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NEIGHBORHOODS = [
  {
    hood: "SOMA",
    rent: "$1,800–$2,400/room",
    note: "Highest roommate listing density in SF. Tech office proximity. BART at Civic Center, Caltrain at 4th & King. Fast-moving inventory.",
  },
  {
    hood: "Mission District",
    rent: "$1,600–$2,200/room",
    note: "Most active roommate community in SF. 24th St BART. Mix of workers and creatives. Better value than SOMA for similar transit access.",
  },
  {
    hood: "Hayes Valley",
    rent: "$2,200–$3,000/room",
    note: "Design and arts community. Civic Center BART. Highly walkable. Inventory is limited — good rooms disappear in days.",
  },
  {
    hood: "Castro",
    rent: "$1,800–$2,400/room",
    note: "LGBTQ+ community anchor. Castro Muni station. Community-oriented roommate culture. Strong demand in spring season.",
  },
  {
    hood: "Richmond District",
    rent: "$1,400–$1,900/room",
    note: "Best value for SF proximity. Good Asian food infrastructure. Bus to downtown. Popular with UCSF medical students.",
  },
  {
    hood: "Sunset District",
    rent: "$1,200–$1,700/room",
    note: "Lowest rent in SF for a central neighborhood. Foggy but quiet. N-Judah Muni to downtown. Strong family and student presence.",
  },
];

export default function RoomsForRentSfContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-3">San Francisco · All Neighborhoods · Updated March 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Rooms for Rent San Francisco — Verified Listings, Free to Message
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Rooms for rent in SF range from $1,200/month in the Sunset to $3,000/month in Hayes Valley.
              Find MyRoomie lists verified rooms across all SF neighborhoods — free to message,
              no $30/month subscription, no fake listings.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-sm text-purple-800 mb-6">
              <strong>Spring 2026 market:</strong> March–May is peak roommate season in SF.
              New rooms listed now will be taken within days. Start your search before your move date.
            </div>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find SF Rooms for Rent Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">No subscription · Verified listings · Free messaging</p>
          </div>
        </section>

        {/* ── Neighborhood guide ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">SF Rooms for Rent by Neighborhood (2026)</h2>
            <div className="space-y-4">
              {NEIGHBORHOODS.map((n, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="font-bold text-sm">{n.hood}</h3>
                    <span className="text-sm font-semibold text-purple-700">{n.rent}</span>
                  </div>
                  <div className="px-5 py-3">
                    <p className="text-gray-600 text-sm">{n.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What's included ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">What's Typically Included in an SF Room Rental</h2>
            <div className="space-y-3">
              {[
                { item: "Utilities", detail: "Most SF rooms include PG&E, water/trash, and internet in the rent price. Confirm in writing before signing." },
                { item: "Furnished vs unfurnished", detail: "SF rooms are split roughly 50/50. Ask specifically — 'furnished' can mean anything from a bed frame to full kitchen equipment." },
                { item: "Kitchen access", detail: "Standard in most SF rooms. Some high-density shared houses have kitchen schedules or limited pantry space." },
                { item: "Lease type", detail: "Is this a sublet (master tenant remains on the lease) or a co-sign (you're on the primary lease)? Sublets have more flexibility but less legal protection." },
                { item: "Rent control", detail: "SF has rent control. If the unit was built before 1979, increases are capped. This matters if you plan to stay more than 12 months." },
              ].map((row, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4 bg-white">
                  <p className="font-semibold mb-1">{row.item}</p>
                  <p className="text-gray-600 text-sm">{row.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How much is a room for rent in San Francisco?",
                  a: "In 2026, rooms for rent in SF range from $1,200–$1,700/month in outer neighborhoods (Sunset, Richmond, Excelsior) to $1,800–$3,000/month in central neighborhoods (SOMA, Mission, Hayes Valley, Castro).",
                },
                {
                  q: "Where can I find rooms for rent in SF without paying a subscription?",
                  a: "Find MyRoomie lists verified rooms for rent in all SF neighborhoods — free to message, no subscription. Roomster charges $29.99/month. Craigslist has documented fake listing and deposit scam problems in SF.",
                },
                {
                  q: "Is it legal to rent a room in San Francisco?",
                  a: "Yes. Renting a room in San Francisco is legal under California tenant law. Key note: if the unit is under rent control, subletting rules apply. The master tenant retains liability for the lease. All financial arrangements should be in writing.",
                },
              ].map((faq, i) => (
                <div key={i}>
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related ── */}
        <section className="py-8 px-4 bg-gray-50 border-t border-gray-200">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-gray-500 mb-3">Related pages</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/apartments/san-francisco-ca/" className="text-purple-700 border border-purple-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">Full SF guide →</Link>
              <Link href="/neighborhoods/soma-san-francisco/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">SOMA guide</Link>
              <Link href="/how-to/roommate-lease-agreement-california/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">CA lease agreement guide</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Rooms for Rent in SF. Verified. Free.</h2>
            <p className="text-purple-200 mb-8">
              Find MyRoomie lists verified SF rooms for rent across all neighborhoods — free messaging,
              no subscription, no fake listings. From $1,200/month in the Sunset to Hayes Valley.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find SF Rooms for Rent Free →
            </a>
            <p className="text-sm text-purple-300 mt-3">No credit card · No subscription · Verified profiles</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
