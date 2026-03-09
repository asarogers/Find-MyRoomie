"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "What is the average rent at Reserve Mountain View?",
    a: "Reserve at Mountain View median rent: 1BR at $3,100/month, 2BR at $4,200/month as of Q4 2025. Mountain View has experienced 7.9% YoY rent growth — the fastest of any Bay Area city per Zumper Q4 2025 data.",
  },
  {
    q: "Is Reserve at Mountain View near Google?",
    a: "Yes. Reserve at Mountain View is approximately 0.6 miles from Google's main campus (1600 Amphitheatre Parkway). It is one of the closest large apartment complexes to Google HQ.",
  },
  {
    q: "How much do I save with a roommate near Google?",
    a: "Solo 1BR at Reserve Mountain View: $3,100/month ($37,200/year). Shared 2BR split: $2,100/person/month ($25,200/year). Annual savings: $12,000 per person — enough to max a Roth IRA and still have $6,000 left over.",
  },
];

export default function ReserveMountainViewContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-3">Mountain View, CA · Updated March 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Reserve at Mountain View — 7.9% Rent Growth & The Roommate Math
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Mountain View has the fastest rent growth in the Bay Area at 7.9% year-over-year.
              Reserve's 2BR units run $4,200/month. A roommate brings that to $2,100/person
              — and keeps you 0.6 miles from Google HQ. Find your match free on Find MyRoomie.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                ["1BR solo at Reserve", "$3,100/mo"],
                ["2BR split — your share", "$2,100/mo"],
                ["Annual savings with roommate", "$12,000/yr"],
                ["Cost to find one on Find MyRoomie", "$0 — free"],
              ].map(([label, val], i) => (
                <div key={i} className={`rounded-xl p-4 border ${i === 3 ? 'bg-green-50 border-green-200' : i === 2 ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className={`text-xl font-extrabold ${i >= 2 ? 'text-green-700' : 'text-gray-900'}`}>{val}</div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find Mountain View Roommates Free →
            </a>
          </div>
        </section>

        {/* ── Location context ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Mountain View Rents Keep Climbing</h2>
            <p className="text-gray-600 mb-6">
              Mountain View is the center of gravity for Silicon Valley tech employment. Google's main campus
              is 0.6 miles from Reserve. LinkedIn (Sunnyvale), Intuit, Microsoft, and dozens of major tech
              employers are within a 3-mile radius. Demand keeps absorbing new supply.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Distance to Google HQ", "0.6 miles"],
                ["YoY rent growth (Zumper Q4 2025)", "7.9% — fastest in Bay Area"],
                ["Caltrain access", "Mountain View station (0.8 miles)"],
                ["VTA Light Rail", "Charleston station walking distance"],
              ].map(([label, val], i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="font-bold text-gray-900 text-sm">{val}</div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
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
              {FAQS.map((faq, i) => (
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
              <Link href="/apartments/sunnyvale-ca/" className="text-purple-700 border border-purple-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">Sunnyvale apartments →</Link>
              <Link href="/apartments/cupertino-ca/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Cupertino (Apple)</Link>
              <Link href="/free-roommate-app-no-subscription/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Free roommate app</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Mountain View is $3,100/month Solo. With a Roommate: $2,100.</h2>
            <p className="text-purple-200 mb-8">
              Find verified Mountain View roommates free on Find MyRoomie. No $29/month Roomster paywall.
              No Craigslist scam risk. Verified profiles for one of the Bay Area's most competitive markets.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Mountain View Roommates Free →
            </a>
            <p className="text-sm text-purple-300 mt-3">No credit card · No subscription · Verified profiles</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
