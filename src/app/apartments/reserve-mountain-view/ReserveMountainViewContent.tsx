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
    q: "Can I afford Mountain View on a Google salary?",
    a: "Solo occupancy of a 1BR at $3,100/month requires $124,000/year gross income under the standard 30% rent rule. A roommate split on a 2BR at $4,200/month brings per-person cost to $2,100/month — requiring $84,000/year each. Both are achievable on Google L4+ salaries.",
  },
  {
    q: "How much do I save with a roommate near Google?",
    a: "Solo 1BR at Reserve Mountain View: $3,100/month ($37,200/year). Shared 2BR split: $2,100/person/month ($25,200/year). Annual savings: $12,000 per person — enough to max a Roth IRA and still have $6,000 left over.",
  },
];

export default function ReserveMountainViewContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-orange-700">7.9% YoY Rent Growth — Fastest in Bay Area</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Reserve at Mountain View — The Rent Growth Warning and the Roommate Math That Changes Everything
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Mountain View now has the fastest rent growth in the Bay Area. Here is what that means for your budget — and the one number that makes it manageable.
            </p>
          </div>
        </section>

        {/* ── Fact box ── */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-900 font-semibold text-lg leading-relaxed">
                Reserve at Mountain View — luxury complex 0.6 miles from Google HQ. Median 2BR: $4,200/month. YoY rent growth: 7.9% (Zumper Q4 2025 — fastest in the Bay Area). Solo 1BR requires $124,000/year income. Shared 2BR requires $84,000/year each.
              </p>
            </div>
          </div>
        </section>

        {/* ── Location and Context ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Mountain View Rents Are Rising Faster Than Anywhere Else</h2>
            <p className="text-gray-600 mb-4">
              Mountain View sits at the center of what Zumper calls the Bay Area&apos;s highest-pressure rental market. The explanation is simple: Google&apos;s campus expansion, the return-to-office push in 2024-2025, and a constrained supply pipeline have converged in the same ZIP codes.
            </p>
            <p className="text-gray-600 mb-4">
              Reserve at Mountain View is a direct beneficiary and victim of that dynamic. It&apos;s one of the most sought-after complexes precisely because of its proximity to Google HQ — 0.6 miles on foot. That proximity commands a premium, and that premium has grown 7.9% in a single year.
            </p>
            <div className="space-y-3 mt-6">
              {[
                { label: "Distance to Google HQ (1600 Amphitheatre Pkwy)", value: "0.6 miles" },
                { label: "YoY rent growth — Mountain View (Zumper Q4 2025)", value: "7.9% — #1 in Bay Area" },
                { label: "Median 1BR rent", value: "$3,100/month" },
                { label: "Median 2BR rent", value: "$4,200/month" },
                { label: "Building type", value: "Luxury apartment complex" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">{row.label}</span>
                  <span className="font-semibold text-gray-900">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What 7.9% Actually Means ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What 7.9% Rent Growth Actually Means for Your Budget</h2>
            <p className="text-gray-600 mb-4">
              Seven-point-nine percent sounds like an abstraction until you calculate what it means at renewal time. A 2BR at $4,200/month in Q4 2025 — if the trend holds through Q4 2026 — becomes $4,532/month. That&apos;s an extra $332/month, or $3,984 more per year, without any change to your apartment.
            </p>
            <p className="text-gray-600 mb-4">
              Most renters underestimate this because they think about the sticker price when they sign the lease. The real number is what the second year costs — particularly in a market with no rent control on new construction.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-6">
              <h3 className="font-bold text-red-900 mb-2">The Compounding Problem</h3>
              <p className="text-red-800">
                If Mountain View&apos;s 7.9% growth rate continues: Year 1 $4,200 → Year 2 $4,532 → Year 3 $4,889. Over three years, you&apos;ll have paid approximately $14,000 more than a renter who locked in an earlier rate. Mountain View&apos;s supply constraints suggest this is not a one-year anomaly.
              </p>
            </div>
          </div>
        </section>

        {/* ── Roommate Math ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Roommate Math — Solo vs. Shared</h2>
            <p className="text-gray-600 mb-6">
              One message changes the math entirely. Here&apos;s what the numbers look like:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-red-900 mb-4 text-lg">Solo — 1BR</h3>
                <div className="space-y-2 text-red-800">
                  <div className="flex justify-between">
                    <span>Monthly rent</span>
                    <span className="font-bold">$3,100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual rent</span>
                    <span className="font-bold">$37,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Income required (3x rule)</span>
                    <span className="font-bold">$124,000/yr</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-4 text-lg">Shared — 2BR split</h3>
                <div className="space-y-2 text-green-800">
                  <div className="flex justify-between">
                    <span>Per-person monthly</span>
                    <span className="font-bold">$2,100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Per-person annual</span>
                    <span className="font-bold">$25,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Income required (3x rule)</span>
                    <span className="font-bold">$84,000/yr</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <p className="text-green-900 font-bold text-xl">$12,000 saved per person, per year</p>
              <p className="text-green-700 mt-1">Enough to max a Roth IRA ($7,000) and still have $5,000 left over.</p>
            </div>
          </div>
        </section>

        {/* ── Who Lives Here ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Who Actually Lives at Reserve Mountain View</h2>
            <p className="text-gray-600 mb-4">
              The resident mix skews heavily toward Google employees — L4 through L7, mostly software engineers and PMs. There is also a subset of Intuit and LinkedIn employees who prefer Mountain View&apos;s walkable downtown over Sunnyvale&apos;s more suburban feel.
            </p>
            <p className="text-gray-600 mb-4">
              Remote workers who relocated during 2021-2022 and chose Mountain View for its proximity to tech offices have largely stayed — the combination of excellent schools, walkable Castro Street, and a genuine town center has kept attrition low despite rising rents.
            </p>
            <ul className="space-y-3 text-gray-700 mt-4">
              {[
                "Google employees (the majority of tech-worker residents)",
                "Intuit and LinkedIn employees on company shuttles",
                "Caltrain commuters to San Francisco (Mountain View is a direct-service stop)",
                "Remote workers who value walkable downtown access",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-green-600 font-bold mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CTA mid-page ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-2 text-lg">
                One message changes the math from $3,100/month to $2,100/month
              </p>
              <p className="text-purple-700 mb-5">
                Find a verified roommate near Reserve Mountain View — free, no subscription, no paywall.
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates Near Mountain View →
              </a>
              <p className="text-sm text-purple-400 mt-3">Free · No subscription · Verified profiles</p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4 bg-[#FDFBF7] border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left p-5 font-semibold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="text-gray-400 ml-4">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-600">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find Verified Roommates Near Mountain View</h2>
            <p className="text-purple-200 mb-8">
              The fastest-growing rental market in the Bay Area is more manageable with a roommate. Find MyRoomie connects you with verified people looking to share near Google, LinkedIn, and downtown Mountain View. Free — no subscription, no paywall.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates in Mountain View →
            </a>
            <p className="text-purple-300 mt-4 text-sm">Free messaging. No subscription. Ever.</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
