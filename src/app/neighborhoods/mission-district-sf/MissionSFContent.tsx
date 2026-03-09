"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const MISSION_ZONES = [
  {
    zone: "Valencia Corridor (15th–22nd)",
    rent: "$2,100–$2,600/room",
    feel: "Restaurant row, boutiques, nightlife. Highest-demand Mission blocks. Good BART access at 16th St.",
    insider: "Best for social renters. Noisy on weekends. Not ideal if you work early shifts.",
  },
  {
    zone: "20th–26th Streets (Valencia to Mission)",
    rent: "$1,700–$2,100/room",
    feel: "Best price-to-value ratio in the Mission. Still walkable to 24th BART. Quieter than Valencia corridor.",
    insider: "This is the sweet spot. Good inventory, good prices, and the 24th St BART proximity makes it viable for downtown and peninsula commutes.",
  },
  {
    zone: "Inner Mission (North of 16th)",
    rent: "$2,000–$2,500/room",
    feel: "Closer to SOMA and downtown. More tech worker overlap. Higher inventory turnover.",
    insider: "Better for people working near Market Street or in SOMA. The 16th St BART is right here.",
  },
  {
    zone: "Outer Mission (Cesar Chavez+)",
    rent: "$1,500–$2,000/room",
    feel: "More family-residential feel. Lower density of restaurants and nightlife. Most affordable Mission rents.",
    insider: "Best for people with cars. Transit options get thinner this far south. Significantly more space per dollar.",
  },
];

export default function MissionSFContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-3">Mission District · San Francisco · March 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Mission District Roommates — SF's Best Price Arbitrage
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Mission rooms run $1,700–$2,600/month in 2026 — $500–$1,200 less per month than SOMA for comparable space.
              Same city, same transit options, dramatically lower cost. Find verified Mission roommates
              free on Find MyRoomie.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800 mb-6">
              <strong>The arbitrage move:</strong> Move 2 blocks east of Valencia Street and save
              $300–$500/month versus the corridor premium — same BART access, same neighborhood.
            </div>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find Mission District Roommates Free →
            </a>
          </div>
        </section>

        {/* ── Zone guide ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Mission Micro-Zones: Rent + Real Talk</h2>
            <div className="space-y-4">
              {MISSION_ZONES.map((z, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="font-bold text-sm">{z.zone}</h3>
                    <span className="text-sm font-semibold text-purple-700">{z.rent}</span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-gray-700 text-sm mb-2">{z.feel}</p>
                    <p className="text-xs text-gray-500 italic border-t border-gray-100 pt-2 mt-2">Insider: {z.insider}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOMA comparison ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Mission vs. SOMA: The Math</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold"></th>
                    <th className="text-center p-3 border border-gray-200 font-semibold text-purple-700">Mission</th>
                    <th className="text-center p-3 border border-gray-200 font-semibold text-gray-600">SOMA</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Room price (2026)", "$1,700–$2,100", "$2,100–$2,800"],
                    ["BART access", "16th & 24th St stations", "4th & King (Caltrain only)"],
                    ["Restaurant density", "Highest in SF", "High"],
                    ["Walkability", "Excellent", "Good"],
                    ["Annual savings vs SOMA", "$4,800–$8,400/yr", "—"],
                  ].map(([label, mission, soma], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3 border border-gray-200 font-medium text-gray-700">{label}</td>
                      <td className="p-3 border border-gray-200 text-center text-green-700 font-bold">{mission}</td>
                      <td className="p-3 border border-gray-200 text-center text-gray-600">{soma}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm">
              For remote workers and anyone whose primary transit is BART (not Caltrain), the Mission
              is the better deal in every dimension.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Is the Mission District good for roommates?",
                  a: "Yes — the Mission has the best price arbitrage in SF. Room prices run $1,700–$2,600/month vs $3,200+ in SOMA for similar space. BART on 16th and 24th. Close to downtown but not priced like it.",
                },
                {
                  q: "What's the average rent in the Mission District SF?",
                  a: "Mission District rooms in 2026 run $1,700–$2,600/month. The exact price depends on which part of the Mission — the Valencia Street corridor runs higher; the streets east of Mission St run lower. Best value: 20th–26th Streets between Valencia and Mission.",
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
              <Link href="/roommates/san-francisco-ca/" className="text-purple-700 border border-purple-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">All SF roommates →</Link>
              <Link href="/neighborhoods/soma-san-francisco/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">SOMA neighborhood guide</Link>
              <Link href="/apartments/venn-on-market-san-francisco/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Venn on Market (Mission-adjacent)</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Mission. Best Price in SF. Verified Roommates. Free.</h2>
            <p className="text-purple-200 mb-8">
              Find MyRoomie has verified Mission District listings. Free messaging, no subscription,
              no $29/month Roomster paywall. The best-value SF neighborhood is waiting.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Mission Roommates Free →
            </a>
            <p className="text-sm text-purple-300 mt-3">No credit card · No subscription · Verified profiles</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
