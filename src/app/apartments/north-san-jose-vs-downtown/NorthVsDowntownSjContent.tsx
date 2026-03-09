"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "Is North San Jose or Downtown San Jose better for tech workers?",
    a: "It depends on your employer. For Cisco, Intel, Samsung, or Western Digital employees, North San Jose offers 10-15 minute commutes with zero traffic stress. For Adobe employees, downtown San Jose is a 5-minute walk to Adobe HQ. For SF-based hybrid workers, downtown's Caltrain access is superior.",
  },
  {
    q: "Why are downtown San Jose apartments cheap right now?",
    a: "Two major downtown towers — The Fay (336 units, $182.5M default, 60% vacant) and Neo on First (Chapter 11 bankruptcy) — are offering concessions to attract tenants during financial distress. This creates temporarily below-market pricing in the downtown core.",
  },
  {
    q: "Which San Jose neighborhood has the best roommate options?",
    a: "North San Jose has a deep roommate pool among tech workers, particularly near Berryessa and the Milpitas border. Shared rooms run $900-$1,500/month. Downtown has fewer shared listings but more flexible lease terms due to current vacancy pressure.",
  },
  {
    q: "Is it safe to rent in downtown San Jose during the foreclosure situation?",
    a: "California law protects existing leases through foreclosure — your lease survives a building sale. The real risk is management instability: maintenance delays, staffing cuts, and renewal uncertainty. If you sign a 12-month lease at a foreclosure-discounted rate, you're legally protected for that term. The risk is post-lease uncertainty.",
  },
];

export default function NorthVsDowntownSjContent() {
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
              North San Jose vs Downtown San Jose — Where to Live in 2026
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              North SJ: stable, near Cisco and Brocade, cheaper with a car. Downtown SJ: walkable, Caltrain access, two towers in foreclosure. The definitive 2026 comparison for SJ renters.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
            >
              Find Roommates in San Jose →
            </a>
          </div>
        </section>

        {/* ── Side by Side ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Factor</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">North San Jose</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Downtown San Jose</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { factor: "Shared room price", north: "$900–$1,500/mo", downtown: "$2,300–$3,000/mo" },
                    { factor: "Car required?", north: "Yes (most destinations)", downtown: "No (walkable + Caltrain)" },
                    { factor: "Tech proximity", north: "Cisco, Brocade, Intel, North First St corridor", downtown: "Adobe HQ, Google SJ (developing)" },
                    { factor: "Financial stability", north: "Stable — suburban market", downtown: "2 towers in foreclosure (The Fay, Neo on First)" },
                    { factor: "Roommate pool density", north: "Deep — strong tech worker density", downtown: "Thinner — but flexible lease terms" },
                    { factor: "Transit to SF", north: "BART from Berryessa (30 min to downtown SF)", downtown: "Caltrain from Diridon (60 min direct)" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium">{row.factor}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{row.north}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{row.downtown}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── North SJ Deep Dive ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">North San Jose: The Case For</h2>
            <div className="space-y-4">
              {[
                {
                  title: "North First Street Tech Corridor",
                  desc: "Cisco, Brocade, Altera, and a cluster of enterprise tech companies line North First Street. For employees at these companies, North SJ offers 10–15 minute commutes with no freeway stress.",
                },
                {
                  title: "Lower Shared Room Pricing",
                  desc: "North SJ shared rooms typically run $900–$1,500/month — among the most affordable in the Bay Area for tech workers who want to remain close to their campus. The trade-off is car dependency.",
                },
                {
                  title: "Financial Stability",
                  desc: "North SJ's suburban apartment market is stable. No foreclosure proceedings, no vacancy crisis. If you want low-risk housing with a predictable renewal environment, North SJ is the better bet.",
                },
                {
                  title: "BART Access (Berryessa Station)",
                  desc: "The Berryessa BART station provides direct service to Oakland and San Francisco without driving. Transit-dependent renters in North SJ can reach downtown SF in approximately 30 minutes.",
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

        {/* ── Downtown Deep Dive ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Downtown San Jose: The Case For</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Caltrain at Diridon Station",
                  desc: "Downtown's Diridon Station connects directly to SF (60 min), Mountain View (25 min), Palo Alto, and the Peninsula. For hybrid workers commuting north, downtown SJ is significantly more transit-convenient than North SJ.",
                },
                {
                  title: "Walkability and Urban Density",
                  desc: "Downtown SJ is genuinely walkable — restaurants, grocery, the SAP Center, and the San Jose Museum are all accessible on foot. North SJ's suburban layout requires a car for most daily tasks.",
                },
                {
                  title: "Foreclosure Concessions = Below-Market Rent",
                  desc: "The Fay ($182.5M default) and Neo on First (Chapter 11) are offering significant concessions to attract tenants. 1–2 months free rent and below-ask pricing are available now — though with associated management risk.",
                },
                {
                  title: "Google Downtown West (Developing)",
                  desc: "Google's SJ campus development represents a long-term demand driver for the downtown corridor. The 7.3 million square foot mixed-use project will eventually add significant employment density to the immediate area.",
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

        {/* ── CTA ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-4">
                Find verified roommates in North SJ or Downtown SJ — free, no subscription
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates in San Jose →
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
            <h2 className="text-3xl font-bold mb-4">Find Verified Roommates in San Jose</h2>
            <p className="text-purple-200 mb-8">
              North SJ shared rooms run $900–$1,500/month. Downtown shared arrangements run $2,300–$3,000. Either way, Find My Roomie is free — no $29/month Roomster paywall.
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

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
