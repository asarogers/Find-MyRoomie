"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "How much is rent at Ansel Hayes Valley?",
    a: "Ansel at 30 Oak Street, Hayes Valley SF: Studios $3,800-$4,500/month. 1BR $4,800-$5,800/month. 2BR $6,200-$7,200/month. Completed 2023. Among the most expensive new apartment buildings in SF.",
  },
  {
    q: "Is Ansel Hayes Valley worth the price?",
    a: "Ansel offers genuinely exceptional finishes and walkability (99/100). The building was designed by David Baker Architects and features top-floor bay views, a rooftop deck, and co-working space. Whether the premium is worth it depends on your budget — but the quality is real, not just marketing.",
  },
  {
    q: "What is the neighborhood like around Ansel at 30 Oak Street?",
    a: "Ansel at 30 Oak Street sits across from the SF Symphony, one block from Civic Center BART, and near multiple Muni lines (F, J, K, L, M). The Hayes Valley neighborhood is walkable, restaurant-dense, and culturally active — one of SF's most central locations.",
  },
  {
    q: "How much do I save sharing a 2BR at Ansel?",
    a: "A 2BR at Ansel runs $6,200-$7,200/month. Split two ways: $3,100-$3,600/person. Compare that to a 1BR at $4,800-$5,800/month solo. Sharing saves $1,200-$2,200/month per person — between $14,400 and $26,400/year.",
  },
];

export default function AnselHayesValleyContent() {
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
              Ansel Hayes Valley SF — High Design, Real Resident Data & Roommate Math
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              30 Oak Street, Hayes Valley. SF's highest-design new apartment building. Studios from $3,800. The roommate math: sharing a 2BR drops cost to $3,100–$3,600/person — saving up to $26,400/year.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
            >
              Find Roommates at Ansel →
            </a>
          </div>
        </section>

        {/* ── The Building ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Building</h2>
            <p className="text-gray-600 mb-4">
              Ansel at 30 Oak Street is a 2023-completed luxury tower designed by David Baker Architects — one of SF's most acclaimed residential architecture firms. The building is positioned at the intersection of Hayes Valley, Civic Center, and the cultural core of San Francisco, with the SF Symphony directly across the street.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Studios", value: "$3,800–$4,500/mo" },
                { label: "1-Bedrooms", value: "$4,800–$5,800/mo" },
                { label: "2BR per person (shared)", value: "$3,100–$3,600/mo" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 text-lg">{item.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-600">
              The building targets design-forward residents — arts workers, creative professionals, and tech workers who value architecture and walkability over square footage. The premium is earned: Ansel's finishes and amenity quality are genuinely exceptional by SF standards.
            </p>
          </div>
        </section>

        {/* ── Location ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Location and Transit</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Civic Center BART (1 block)",
                  desc: "Direct access to the entire BART network — Downtown SF, Oakland, Berkeley, the airport. One of SF's most connected transit nodes, one block away.",
                },
                {
                  title: "Hayes Valley Walkability (99/100)",
                  desc: "Restaurants, boutiques, the SF Symphony, and Octavia Boulevard are all walkable. Hayes Valley is consistently ranked as SF's most culturally active neighborhood on a per-block basis.",
                },
                {
                  title: "Muni Access (F, J, K, L, M lines)",
                  desc: "Multiple surface Muni lines serve Oak Street. The F Market line runs to the Ferry Building and Embarcadero. The J, K, L, M lines connect to the Castro, Mission, and Inner Sunset.",
                },
                {
                  title: "Rooftop Deck + Bay Views",
                  desc: "Top-floor units and the rooftop amenity space offer views of the Bay and Twin Peaks. The rooftop deck is among the best in the city given Ansel's central siting.",
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
            <h2 className="text-3xl font-bold mb-6">The Roommate Math at Ansel</h2>
            <p className="text-gray-600 mb-5">
              Ansel is an exceptional building. The question is whether you can make the math work. With a verified roommate from Find MyRoomie (free — no $29/month Roomster paywall), it becomes viable for a much wider income range.
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
                    <td className="p-3 border border-gray-200">Solo 1BR at Ansel</td>
                    <td className="p-3 border border-gray-200 text-red-600 font-medium">~$5,300/month</td>
                    <td className="p-3 border border-gray-200 text-red-600 font-medium">$63,600/year</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200">Share 2BR with verified roommate</td>
                    <td className="p-3 border border-gray-200 text-green-600 font-medium">$3,100–$3,600/person</td>
                    <td className="p-3 border border-gray-200 text-green-600 font-medium">$37,200–$43,200/year</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-200 font-semibold">Annual savings</td>
                    <td className="p-3 border border-gray-200" colSpan={2}>
                      <span className="font-bold text-purple-700 text-lg">$14,400–$26,400/year</span>
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
                Find verified roommates at Ansel or nearby in Hayes Valley
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates at Ansel →
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
            <h2 className="text-3xl font-bold mb-4">Find Verified Roommates at Ansel Hayes Valley</h2>
            <p className="text-purple-200 mb-8">
              Ansel's 2BR split brings costs to $3,100–$3,600/person — saving up to $26,400/year versus a solo 1BR. Find My Roomie is free, with no $29/month Roomster paywall.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates in Hayes Valley →
            </a>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
