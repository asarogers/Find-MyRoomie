"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "How much does Mission Pointe Sunnyvale cost?",
    a: "Studio units start around $2,300–$2,600/month. One-bedrooms run $2,700–$3,200. Two-bedrooms split between verified roommates bring individual costs to $1,500–$1,800/month.",
  },
  {
    q: "Is Mission Pointe close to Apple, Google, and other tech campuses?",
    a: "Yes. Mission Pointe is in Sunnyvale, within commuting distance of Apple's main campus in Cupertino, Google in Mountain View, LinkedIn in Sunnyvale, and the Caltrain corridor connecting the full Peninsula.",
  },
  {
    q: "Why do tech workers choose Sunnyvale over San Francisco?",
    a: "Sunnyvale rents are meaningfully lower than SF while remaining close to major Silicon Valley employers. A 2BR split between tech workers at Mission Pointe costs $1,500–$1,800/person vs $2,250–$2,750 for the same split in SOMA SF.",
  },
];

const RELATED = [
  { slug: 'the-crossings-sunnyvale', name: 'The Crossings Sunnyvale', desc: 'Near LinkedIn. Best Sunnyvale roommate value.' },
  { slug: 'montclaire-sunnyvale', name: 'Montclaire Sunnyvale', desc: 'Caltrain access. Central AC confirmed.' },
  { slug: 'roommates-near-apple', name: 'Roommates Near Apple Park', desc: 'Find roommates near Apple headquarters.' },
  { slug: 'sunnyvale-ca', name: 'Sunnyvale City Guide', desc: 'Full Sunnyvale roommate market overview.' },
];

export default function MissionPointeContent() {
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
              Mission Pointe Sunnyvale — Rent Guide for Silicon Valley's Tech Corridor
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Studios from $2,300. Near Apple, Google, and LinkedIn. What Sunnyvale renters and roommate seekers need to know.
            </p>
          </div>
        </section>

        {/* ── Location ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Location</h2>
            <p className="text-gray-600 mb-4">
              Mission Pointe by Windsor sits in Sunnyvale — the center of gravity of Silicon Valley's tech campus corridor. Cupertino (Apple's main campus) is adjacent. Mountain View (Google) is 10 minutes. LinkedIn's Sunnyvale campus is close.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { label: "Apple (Cupertino)", value: "Adjacent — 5–10 min" },
                { label: "Google (Mountain View)", value: "~10 minutes" },
                { label: "LinkedIn (Sunnyvale)", value: "Short commute" },
                { label: "Caltrain", value: "Full Peninsula corridor access" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="text-gray-500 text-sm mb-1">{item.label}</div>
                  <div className="font-semibold text-gray-900">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Rent Math ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Rent Math</h2>
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
                    <td className="p-3 border border-gray-200">Solo 1BR at Mission Pointe</td>
                    <td className="p-3 border border-gray-200 text-red-600 font-medium">~$2,950/month</td>
                    <td className="p-3 border border-gray-200 text-red-600 font-medium">$35,400/year</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200">Share 2BR with verified roommate</td>
                    <td className="p-3 border border-gray-200 text-green-600 font-medium">~$1,600/person</td>
                    <td className="p-3 border border-gray-200 text-green-600 font-medium">$19,200/year</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-200 font-semibold">Annual savings</td>
                    <td className="p-3 border border-gray-200" colSpan={2}>
                      <span className="font-bold text-purple-700 text-lg">$16,200/year</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="text-blue-800 font-medium">
                Sunnyvale vs SOMA SF comparison: A 2BR split at Mission Pointe runs $1,500–$1,800/person. The same arrangement in SOMA SF runs $2,250–$2,750/person. Sunnyvale saves $750–$950/person per month — $9,000–$11,400/year — while keeping you closer to most South Bay tech campuses.
              </p>
            </div>
          </div>
        </section>

        {/* ── Who Lives Here ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Who Lives at Mission Pointe</h2>
            <p className="text-gray-600 mb-4">
              The tenant profile at Mission Pointe skews toward tech workers at Apple, Google, LinkedIn, AMD, and Nvidia. Remote workers who want South Bay positioning without paying SF prices. International tech workers — the H-1B community is significant in this corridor.
            </p>
            <p className="text-gray-600 mb-4">
              Sunnyvale tenancies tend toward longer-term than SF. Stability matters here — people stay 2–3 years, not 12–18 months. That affects the roommate search dynamic: you're looking for someone who has similar tenure intentions, not someone passing through.
            </p>
          </div>
        </section>

        {/* ── Roommate Search Problem ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Roommate Search Problem in Sunnyvale</h2>
            <div className="space-y-3 mb-6">
              {[
                { platform: "Generic national platforms", issue: "Show national listings — limited real inventory for Sunnyvale specifically." },
                { platform: "Craigslist Sunnyvale", issue: "Active deposit scams targeting H-1B workers on tight visa timelines." },
                { platform: "Roomster", issue: "$29.99/month paywall before knowing if Sunnyvale has real inventory matching your criteria." },
                { platform: "Sulekha", issue: "Real listings within the Desi community, but zero verification process." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                  <div className="font-semibold text-gray-800 min-w-[160px]">{item.platform}</div>
                  <div className="text-gray-600 text-sm">{item.issue}</div>
                </div>
              ))}
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-4">
                Find verified roommates at Mission Pointe or nearby in Sunnyvale
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates in Sunnyvale →
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
            <h2 className="text-3xl font-bold mb-4">Find Verified Roommates in Silicon Valley</h2>
            <p className="text-purple-200 mb-8">
              Mission Pointe's 2BR split brings costs to $1,500–$1,800/person — significantly less than comparable SF arrangements. Find a verified co-tenant who matches your tenure goals and work schedule.
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
