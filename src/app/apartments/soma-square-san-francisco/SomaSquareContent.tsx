"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "How much does SOMA Square San Francisco cost?",
    a: "Studio units start around $2,200–$2,600/month. One-bedrooms run $2,800–$3,200. Shared two-bedrooms split between two compatible roommates bring individual costs to $1,600–$1,900/month.",
  },
  {
    q: "Is SOMA a good neighborhood for tech workers?",
    a: "Yes. SOMA (South of Market) is SF's tech district — walkable to Caltrain, most major tech shuttle stops, and the Embarcadero. It has the highest concentration of tech workers of any SF neighborhood.",
  },
  {
    q: "What's the roommate market like in SOMA?",
    a: "High renter turnover means fresh roommate opportunities constantly. The neighborhood skews young professional, remote worker, and tech employee. Compatibility around work schedule and home office use matters more in SOMA than most SF neighborhoods.",
  },
];

export default function SomaSquareContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-sm font-semibold text-blue-700">Tech District</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              SOMA Square San Francisco — The Tech Corridor Rent Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Studios from $2,200. Caltrain walkable. High renter turnover. Fresh roommate opportunities constantly. Here's the SOMA math.
            </p>
          </div>
        </section>

        {/* ── Why SOMA ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why SOMA</h2>
            <p className="text-gray-600 mb-4">
              SOMA — South of Market — is SF's tech corridor. Walkable to Caltrain and every major tech shuttle stop. The Embarcadero is 10 minutes east. The neighborhood has the highest concentration of tech workers of any SF district.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Studios", value: "$2,200–$2,600/mo" },
                { label: "1-Bedrooms", value: "$2,800–$3,200/mo" },
                { label: "2BR per person (shared)", value: "$1,600–$1,900/mo" },
              ].map((item, i) => (
                <div key={i} className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <div className="font-bold text-blue-900 text-lg">{item.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-600">
              Best for: tech workers, night owls, startup crowd. High renter turnover means fresh roommate opportunities constantly appearing in the building and neighborhood.
            </p>
          </div>
        </section>

        {/* ── Roommate Math ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The SOMA Roommate Math</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Scenario</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Monthly Cost</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Annual Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-200">Solo 1BR at SOMA Square</td>
                    <td className="p-3 border border-gray-200 text-red-600 font-medium">~$3,000/month</td>
                    <td className="p-3 border border-gray-200 text-red-600 font-medium">$36,000/year</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200">Share 2BR with verified roommate</td>
                    <td className="p-3 border border-gray-200 text-green-600 font-medium">$1,600–$1,800/month</td>
                    <td className="p-3 border border-gray-200 text-green-600 font-medium">$19,200–$21,600/year</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-200 font-semibold">Annual savings</td>
                    <td className="p-3 border border-gray-200" colSpan={2}>
                      <span className="font-bold text-purple-700 text-lg">$14,400–$16,800/year</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── What SOMA Actually Is ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What SOMA Actually Is</h2>
            <p className="text-gray-600 mb-4">
              SOMA is a startup district — walkable, loud on weekends, not quiet, not family-friendly. The best neighborhood in SF if you want to be 5 minutes from your office and 10 minutes from a bar.
            </p>
            <p className="text-gray-600 mb-4">
              High-density living means frequent neighbor interactions. Building hallways, shared floors, and the neighborhood streets create more contact with more people than in low-density neighborhoods. That is a feature if you are social and looking to meet people. It is a drawback if you need deep quiet.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="font-semibold text-green-800 mb-2">SOMA is ideal if you:</h3>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>Work at a tech company or startup</li>
                  <li>Want to walk to Caltrain</li>
                  <li>Like being in the middle of things</li>
                  <li>Value tech-worker neighbor density</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <h3 className="font-semibold text-red-800 mb-2">SOMA is wrong if you:</h3>
                <ul className="space-y-1 text-red-700 text-sm">
                  <li>Need sustained quiet for deep work</li>
                  <li>Prioritize family-friendly environment</li>
                  <li>Want to avoid weekend noise</li>
                  <li>Prefer suburban density and pace</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Verification Gap ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Verification Gap in SOMA</h2>
            <p className="text-gray-600 mb-4">
              SOMA's renter transience makes it a target for listing fraud. People in a hurry, relocating for jobs, on tight timelines — and fake listings designed to exploit exactly that urgency.
            </p>
            <div className="space-y-3">
              {[
                { platform: "Craigslist SOMA", issue: "Active fake listing operations. Deposit scams targeting time-pressured renters." },
                { platform: "Roomster", issue: "$29.99/month paywall before you know if anyone in SOMA matches your criteria." },
                { platform: "Facebook groups", issue: "Real people, zero verification, no accountability." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-red-50 border border-red-100 rounded-xl">
                  <div className="font-semibold text-red-800 min-w-[120px]">{item.platform}</div>
                  <div className="text-red-700 text-sm">{item.issue}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-4">
                Find verified roommates at SOMA Square or nearby in San Francisco
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates in SOMA →
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
            <h2 className="text-3xl font-bold mb-4">Save $14,400–$16,800/Year in SOMA</h2>
            <p className="text-purple-200 mb-8">
              The SOMA roommate math is compelling. Solo living at $3,000/month vs sharing at $1,600–$1,800/month. The difference is real — if you find the right person.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates in San Francisco →
            </a>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
