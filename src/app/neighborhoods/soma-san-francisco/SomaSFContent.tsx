"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const SOMA_BLOCKS = [
  { area: "4th & King (Caltrain zone)", rent: "$2,400–$3,200/room", vibe: "Best commute to peninsula. Oracle Park + SAP Center within walking distance. New construction density." },
  { area: "5th–7th Streets", rent: "$2,100–$2,700/room", vibe: "Mid-SOMA sweet spot. Good transit access, slightly quieter than the Caltrain corridor. Best value in SOMA." },
  { area: "Brannan / Bryant St corridor", rent: "$2,000–$2,600/room", vibe: "Warehouse-conversion aesthetic. Quiet during the week. Close to the bay. Popular with design and engineering workers." },
  { area: "Mission Bay (adjacent)", rent: "$2,600–$3,400/room", vibe: "UCSF proximity. Newer buildings. Higher prices but luxury amenities. Strong young professional density." },
];

const SOMA_EMPLOYERS = [
  "Salesforce (HQ, Salesforce Tower)",
  "Twitter/X (former HQ, Market & 10th)",
  "Dropbox (Mission & 3rd)",
  "GitHub (HQ, Market St)",
  "Airbnb (HQ, SOMA)",
  "Square/Block (HQ, Market & 1st)",
  "Stripe (nearby in SoMa)",
  "Adobe (HQ, Mission & 1st)",
];

const COST_MATH = [
  { label: "Solo 1BR in SOMA (2026)", cost: "$3,200–$4,100/mo" },
  { label: "2BR shared with 1 roommate", cost: "$4,200–$5,600/mo total" },
  { label: "Your share (2BR split)", cost: "$2,100–$2,800/mo" },
  { label: "Annual savings vs solo", cost: "$12,000–$16,000/yr" },
];

export default function SomaSFContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-3">SOMA · San Francisco · Updated March 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              SOMA Roommates: Move 2 Blocks, Save $12,000/Year
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              SOMA is San Francisco's best tech worker roommate district — Caltrain access, Salesforce and
              Dropbox HQs, Oracle Park. A roommate here cuts your housing cost by $12,000–$16,000/year
              versus living alone. Find MyRoomie lets you search for free.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {COST_MATH.map((d, i) => (
                <div key={i} className={`rounded-xl p-4 border ${i >= 2 ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className={`text-xl font-extrabold ${i >= 2 ? 'text-green-700' : 'text-gray-900'}`}>{d.cost}</div>
                  <div className="text-xs text-gray-500 mt-1">{d.label}</div>
                </div>
              ))}
            </div>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find SOMA Roommates Free →
            </a>
          </div>
        </section>

        {/* ── SOMA blocks ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">SOMA Rent by Micro-Zone</h2>
            <div className="space-y-4">
              {SOMA_BLOCKS.map((block, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="font-bold text-sm">{block.area}</h3>
                    <span className="text-sm font-semibold text-purple-700">{block.rent}</span>
                  </div>
                  <div className="px-5 py-3">
                    <p className="text-gray-600 text-sm">{block.vibe}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Employers ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Who Works Here</h2>
            <p className="text-gray-600 mb-6">
              SOMA houses the highest concentration of tech company HQs in SF. If you work at any of these —
              or commute to the peninsula via Caltrain — SOMA is your optimal base.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {SOMA_EMPLOYERS.map((employer, i) => (
                <div key={i} className="p-3 border border-gray-200 rounded-lg bg-white text-sm text-gray-700">
                  {employer}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why not Roomster ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">How NOT to Find a SOMA Roommate</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-red-300 bg-red-50 pl-4 py-3 pr-4 rounded-r-lg">
                <p className="font-semibold text-gray-800 mb-1">Roomster: $29/month + FTC settlement</p>
                <p className="text-gray-700 text-sm">
                  Roomster charges $29.99/month to send a single message. The FTC settled a $1.6M case
                  against Roomster in 2023 for fake listings. For SOMA engineers earning $200K+, spending
                  money on a platform that may show you bots is an odd use of funds.
                </p>
              </div>
              <div className="border-l-4 border-red-300 bg-red-50 pl-4 py-3 pr-4 rounded-r-lg">
                <p className="font-semibold text-gray-800 mb-1">Craigslist: scam-dense in SOMA</p>
                <p className="text-gray-700 text-sm">
                  SOMA on Craigslist has above-average scam density because of the high income profile of
                  searchers. No verification means bad actors specifically target SOMA listings.
                </p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-semibold text-green-800 mb-2">Find MyRoomie: verified, free, SOMA-aware</p>
              <p className="text-sm text-green-700">
                Verified profiles. Free messaging. Neighborhood-level search that understands the difference
                between the 4th St corridor and the Mission Street side of SOMA.
              </p>
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
                  q: "How much is rent in SOMA San Francisco?",
                  a: "SOMA room prices in 2026 run $2,100–$3,200/month depending on proximity to Caltrain, building age, and amenities. A 2BR split between verified roommates brings the cost to $1,800–$2,400/person — 35–40% below solo living.",
                },
                {
                  q: "Is SOMA good for tech workers?",
                  a: "Yes. SOMA is SF's best tech worker district by commute access. Caltrain at 4th & King, easy BART/Muni connections, and walking distance to Salesforce, Twitter HQ, and Dropbox. Oracle Park for game nights. For anyone working in tech in SF or commuting to the peninsula, SOMA is the optimal neighborhood.",
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
              <Link href="/apartments/san-francisco-ca/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">SF roommate guide</Link>
              <Link href="/apartments/soma-square-san-francisco/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">SOMA Square apartments</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">SOMA Roommates. Verified. Free.</h2>
            <p className="text-purple-200 mb-8">
              The best tech worker neighborhood in SF. No Roomster paywall. No Craigslist risk.
              Find verified SOMA roommates and save $12,000/year versus living alone.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find SOMA Roommates Free →
            </a>
            <p className="text-sm text-purple-300 mt-3">No credit card · No subscription · Verified profiles</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
