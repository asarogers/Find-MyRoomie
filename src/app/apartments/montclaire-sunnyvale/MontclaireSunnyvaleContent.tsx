"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "Does Montclaire Sunnyvale have central AC?",
    a: "Yes. Montclaire at Sunnyvale includes central AC in all units — unlike some older Sunnyvale complexes that rely on window units or have no cooling at all. This is a meaningful differentiator during Bay Area heat waves.",
  },
  {
    q: "Is Montclaire near the Sunnyvale Caltrain?",
    a: "Yes. Montclaire at Sunnyvale is walking distance from the Sunnyvale Caltrain station, making it well-suited for commuters to San Francisco or San Jose. It is also approximately 2 miles from LinkedIn and 4 miles from Apple via Lawrence Expressway.",
  },
  {
    q: "What is rent at Montclaire Sunnyvale?",
    a: "Montclaire at Sunnyvale: 1BR $2,600-$3,000/month, 2BR $3,400-$3,900/month. Amenities include pool, gym, and assigned parking. A 2BR roommate split lands at $1,700-$1,950/person — one of Sunnyvale's more balanced price-to-value options.",
  },
  {
    q: "Is Montclaire Sunnyvale good for tech workers?",
    a: "Yes, particularly for tech workers who commute via Caltrain or company shuttle. Montclaire offers central AC, a walkable location, and responsive management. The main noted downsides are thin walls in some buildings and no dedicated pet area.",
  },
];

export default function MontclaireSunnyvaleContent() {
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
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Montclaire at Sunnyvale — Honest Review for Tech Workers (2026)
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Well-maintained mid-tier complex near LinkedIn and Apple. Central AC included. Caltrain walking distance. Real rent data and roommate math for sharing a 2BR at $1,700–$1,950/person.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
            >
              Find Roommates at Montclaire →
            </a>
          </div>
        </section>

        {/* ── The Building ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Building</h2>
            <p className="text-gray-600 mb-4">
              Montclaire at Sunnyvale is a mid-tier apartment complex within walking distance of the Sunnyvale Caltrain station. It sits in the sweet spot between Sunnyvale's older no-AC stock and the newer premium towers — offering central AC, a functional amenity package, and proximity to the major tech campuses without the luxury pricing.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "1-Bedrooms", value: "$2,600–$3,000/mo" },
                { label: "2-Bedrooms", value: "$3,400–$3,900/mo" },
                { label: "2BR per person (shared)", value: "$1,700–$1,950/mo" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 text-lg">{item.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-900 mb-2">Central AC — Confirmed</h3>
              <p className="text-green-800 text-sm">
                All Montclaire units include central AC — a real differentiator from older Sunnyvale stock. Sunnyvale summer temperatures regularly exceed 100°F, making AC a practical necessity rather than a luxury.
              </p>
            </div>
          </div>
        </section>

        {/* ── Location ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Location and Commute</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Sunnyvale Caltrain (Walking Distance)",
                  desc: "Direct Caltrain service to San Francisco (55–65 min), San Jose (15 min), and the full Peninsula corridor. Montclaire's proximity to the station makes it viable for both northbound SF commuters and southbound SJ commuters.",
                },
                {
                  title: "LinkedIn HQ (~2 miles)",
                  desc: "LinkedIn's headquarters at 700 East Middlefield Road in Mountain View is approximately 2 miles from Montclaire via Lawrence Expressway. The company runs shuttle service from the Sunnyvale Caltrain — effectively door-to-desk.",
                },
                {
                  title: "Apple Park (~4 miles)",
                  desc: "Apple's campus at One Apple Park Way is approximately 4 miles via Lawrence Expressway. Apple shuttle service is available from multiple Sunnyvale stops.",
                },
              ].map((item, i) => (
                <div key={i} className="p-5 border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Roommate Math ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Roommate Math at Montclaire</h2>
            <p className="text-gray-600 mb-5">
              Montclaire's 2BR pricing creates one of Sunnyvale's better roommate value propositions. Find MyRoomie is free — no $29/month Roomster paywall, no subscription required.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Scenario</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Monthly</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Annual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-200">Solo 1BR at Montclaire</td>
                    <td className="p-3 border border-gray-200 text-red-600 font-medium">~$2,800/month</td>
                    <td className="p-3 border border-gray-200 text-red-600 font-medium">$33,600/year</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200">Share 2BR with verified roommate</td>
                    <td className="p-3 border border-gray-200 text-green-600 font-medium">$1,700–$1,950/person</td>
                    <td className="p-3 border border-gray-200 text-green-600 font-medium">$20,400–$23,400/year</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-200 font-semibold">Annual savings</td>
                    <td className="p-3 border border-gray-200" colSpan={2}>
                      <span className="font-bold text-purple-700 text-lg">$10,200–$13,200/year</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-4">
                Find verified roommates at Montclaire or nearby in Sunnyvale
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates at Montclaire →
              </a>
              <p className="text-sm text-purple-400 mt-3">Free · No subscription · Verified profiles</p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4 bg-white border-t border-gray-100">
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
            <h2 className="text-3xl font-bold mb-4">Find Verified Roommates Near Sunnyvale Caltrain</h2>
            <p className="text-purple-200 mb-8">
              Montclaire's 2BR split brings costs to $1,700–$1,950/person — well below solo 1BR pricing. Find My Roomie is free. No subscription, no $29/month paywall.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates in Sunnyvale →
            </a>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
