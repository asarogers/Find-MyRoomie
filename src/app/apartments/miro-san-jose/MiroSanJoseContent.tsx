"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "How much does Miro San Jose cost?",
    a: "Studios at Miro start around $2,100–$2,400/month. One-bedrooms run $2,600–$3,100. Shared two-bedrooms between compatible roommates bring costs to $1,400–$1,700/person.",
  },
  {
    q: "Where is Miro located in San Jose?",
    a: "Miro is on N. First Street in downtown San Jose, close to the SAP Center, Diridon Station (Caltrain/ACE), and the developing Google Downtown West campus.",
  },
  {
    q: "Is Miro a good building for tech workers?",
    a: "Yes — Caltrain access at Diridon Station makes Miro viable for both South Bay tech workers and those doing reverse commutes to SF or Mountain View. The Google Downtown West development nearby represents long-term upside for the corridor.",
  },
];

const RELATED = [
  { slug: 'neo-on-first-san-jose', name: 'Neo on First San Jose', desc: 'Downtown comparison. S. First Street corridor.' },
  { slug: 'crescent-village-san-jose', name: 'Crescent Village', desc: 'North SJ option. Lowest per-person costs.' },
  { slug: 'san-jose-ca', name: 'San Jose Roommates — City Guide', desc: 'Full San Jose roommate market overview.' },
  { slug: 'north-san-jose-vs-downtown', name: 'North SJ vs Downtown', desc: 'Cost comparison guide for San Jose renters.' },
];

export default function MiroSanJoseContent() {
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
              Miro San Jose — Rent Guide and Roommate Market Near Diridon Station
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              303 units on N. First Street. Studios from $2,100. Caltrain to SF, Mountain View, and the Peninsula. Here's what renters and roommate seekers need to know.
            </p>
          </div>
        </section>

        {/* ── The Building ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Building</h2>
            <p className="text-gray-600 mb-4">
              Miro is a 303-unit modern luxury complex on N. First Street in downtown San Jose — part of the 2019–2022 construction wave that added significant luxury supply to the downtown corridor. Contemporary finishes, full amenity package, high-rise design.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Studios", value: "$2,100–$2,400/mo" },
                { label: "1-Bedrooms", value: "$2,600–$3,100/mo" },
                { label: "2BR per person (shared)", value: "$1,400–$1,700/mo" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 text-lg">{item.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-600">
              Miro is part of the broader downtown San Jose luxury supply glut — which means renter leverage. Free months, waived fees, and below-ask rent are available with negotiation.
            </p>
          </div>
        </section>

        {/* ── Location ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Location</h2>
            <div className="space-y-4">
              {[
                {
                  title: "SAP Center",
                  desc: "Blocks away. One of the top concert and sports venues in the Bay Area — an asset for some renters, a noise consideration for others on event nights.",
                },
                {
                  title: "Diridon Station (Caltrain / ACE)",
                  desc: "Direct Caltrain service to SF (60 min), Mountain View (25 min), Palo Alto, and the full Peninsula corridor. One of the most transit-connected locations in downtown San Jose.",
                },
                {
                  title: "Google Downtown West",
                  desc: "Under construction in the adjacent blocks. Represents a long-term demand signal for the N. First Street corridor — more foot traffic, more amenities, more reason for the neighborhood to improve over a 5–10 year horizon.",
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
            <h2 className="text-3xl font-bold mb-6">The Roommate Math at Miro</h2>
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
                    <td className="p-3 border border-gray-200">Solo 1BR at Miro</td>
                    <td className="p-3 border border-gray-200 text-red-600 font-medium">~$2,800/month</td>
                    <td className="p-3 border border-gray-200 text-red-600 font-medium">$33,600/year</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200">Share 2BR with verified roommate</td>
                    <td className="p-3 border border-gray-200 text-green-600 font-medium">$1,500–$1,700/person</td>
                    <td className="p-3 border border-gray-200 text-green-600 font-medium">$18,000–$20,400/year</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-200 font-semibold">Annual savings</td>
                    <td className="p-3 border border-gray-200" colSpan={2}>
                      <span className="font-bold text-purple-700 text-lg">$13,200–$15,600/year</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Downtown SJ Context ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Downtown San Jose Context</h2>
            <p className="text-gray-600 mb-4">
              The 2019–2022 luxury apartment boom in downtown San Jose produced more supply than the market absorbed when tech RTO didn't materialize as projected. The result: significant renter leverage across the entire downtown corridor.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-green-900 mb-3">What Renter Leverage Looks Like</h3>
              <p className="text-green-800 mb-2">
                If you have risk tolerance for the current market conditions (some buildings in distress, broader uncertainty), downtown San Jose currently offers the best concession packages in the Bay Area:
              </p>
              <ul className="space-y-1 text-green-700 text-sm">
                <li>1–2 months free rent on 12-month leases</li>
                <li>Waived application and admin fees</li>
                <li>Reduced or eliminated security deposits</li>
                <li>Below-listed rent on negotiated leases</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-4">
                Find verified roommates at Miro or nearby in downtown San Jose
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates Near Miro →
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
            <h2 className="text-3xl font-bold mb-4">Find Verified Roommates Near Diridon Station</h2>
            <p className="text-purple-200 mb-8">
              Miro's 2BR split brings costs to $1,400–$1,700/person — well below solo 1BR pricing. Find a verified roommate and save $13,000–$15,000 annually.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates in San Jose →
            </a>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">More Bay Area Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {RELATED.map((c, i) => (
                <Link
                  key={i}
                  href={`/apartments/${c.slug}/`}
                  className="block p-5 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-colors"
                >
                  <div className="font-bold mb-1">{c.name}</div>
                  <div className="text-gray-500 text-sm">{c.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
