"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const HAYES_BLOCKS = [
  {
    area: "Hayes Street corridor (between Gough and Laguna)",
    rent: "$2,400–$3,000/room",
    feel: "The neighborhood's main drag. Boutique density, restaurant row, SFJAZZ and Davies Symphony Hall nearby. Premium rent for the convenience.",
  },
  {
    area: "Patricia's Green adjacent (Octavia to Gough)",
    rent: "$2,200–$2,700/room",
    feel: "Best of Hayes Valley living at slightly lower price. Park access, café culture, walkable to Civic Center BART.",
  },
  {
    area: "East of Gough toward Civic Center",
    rent: "$2,000–$2,400/room",
    feel: "Hayes Valley address with Civic Center proximity. Slightly less boutique-dense but meaningfully lower rent.",
  },
];

const WHO_LIVES_HERE = [
  { profile: "Design and architecture workers", note: "Hayes Valley is SF's design industry neighborhood by reputation. Proximity to design firms, studios, and the architecture schools near Market." },
  { profile: "Arts and music workers", note: "SFJAZZ and Davies Symphony Hall are anchors. The neighborhood has a higher-than-average density of performing arts workers and musicians." },
  { profile: "Civic Center and government workers", note: "City Hall, SF Superior Court, SF Main Library — the Civic Center government cluster draws a significant residential audience to adjacent Hayes Valley." },
  { profile: "Remote workers prioritizing walkability", note: "Hayes Valley is consistently rated among SF's most walkable neighborhoods. For remote workers who want to leave the apartment without getting in a car, this is optimal." },
];

export default function HayesValleyContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-3">Hayes Valley · San Francisco · March 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Hayes Valley Roommates — Design Workers, Arts Community, Verified & Free
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Hayes Valley is SF's highest-density design and creative workers' neighborhood.
              Room prices run $2,200–$3,000/month. Inventory is limited — listings disappear faster
              here than in most SF neighborhoods. Find verified Hayes Valley roommates free on Find MyRoomie.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-sm text-purple-800 mb-6">
              <strong>Hayes Valley inventory note:</strong> The neighborhood is small and dense.
              Good listings appear and disappear within days. Start your search before you need to move.
            </div>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find Hayes Valley Roommates Free →
            </a>
          </div>
        </section>

        {/* ── Block guide ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Hayes Valley Rent by Block</h2>
            <div className="space-y-4">
              {HAYES_BLOCKS.map((b, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="font-bold text-sm">{b.area}</h3>
                    <span className="text-sm font-semibold text-purple-700">{b.rent}</span>
                  </div>
                  <div className="px-5 py-3">
                    <p className="text-gray-600 text-sm">{b.feel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who lives here ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Who Lives in Hayes Valley</h2>
            <div className="space-y-4">
              {WHO_LIVES_HERE.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4 bg-white">
                  <p className="font-bold mb-1">{item.profile}</p>
                  <p className="text-gray-600 text-sm">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Transit ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Getting Around From Hayes Valley</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Civic Center BART", "10-min walk — direct to downtown, Mission, Oakland, Airport"],
                ["Van Ness Muni", "F-Market, 49 bus — connects to SOMA and Fisherman's Wharf"],
                ["Bike to downtown", "15 min — flat route along Market Street"],
                ["Caltrain (from 4th & King)", "15 min by BART or 20 min by bike"],
              ].map(([label, detail], i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="font-bold text-sm text-gray-900 mb-1">{label}</div>
                  <div className="text-xs text-gray-500">{detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-12 px-4 bg-white border-t border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How much is rent in Hayes Valley San Francisco?",
                  a: "Hayes Valley room prices in 2026: $2,200–$3,000/month. The neighborhood commands a premium over the Mission and Richmond because of walkability, boutique density, and proximity to multiple transit options. Best value: the blocks east of Gough toward Civic Center.",
                },
                {
                  q: "Is Hayes Valley good for designers and creative workers?",
                  a: "Yes — Hayes Valley is SF's design and creative workers' neighborhood by reputation. Proximity to the design and architecture firms along Market Street, the arts venues at SFJAZZ and Davies Symphony Hall, and boutique retail make it the highest-concentration creative district in SF.",
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
              <Link href="/neighborhoods/soma-san-francisco/" className="text-purple-700 border border-purple-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">SOMA neighborhood →</Link>
              <Link href="/neighborhoods/mission-district-sf/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Mission District</Link>
              <Link href="/apartments/san-francisco-ca/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Full SF guide</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Hayes Valley Roommates. Verified. Free.</h2>
            <p className="text-purple-200 mb-8">
              SF's creative neighborhood with SF's most competitive inventory. Find MyRoomie has verified
              Hayes Valley listings — free to contact, no $29/month paywall.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Hayes Valley Roommates Free →
            </a>
            <p className="text-sm text-purple-300 mt-3">No credit card · No subscription · Verified profiles</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
