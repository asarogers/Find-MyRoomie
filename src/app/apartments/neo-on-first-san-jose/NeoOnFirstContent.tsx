"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "Is Neo on First San Jose in financial trouble?",
    a: "Yes. Neo on First at 955–975 S. First Street is in active loan default as of February 2026, with foreclosure proceedings underway — the second downtown San Jose luxury complex to enter distress within 60 days.",
  },
  {
    q: "How long does foreclosure take in California?",
    a: "Six to twelve months from initial default to completed sale or receivership. Budget for 6–18 months of ownership ambiguity if you sign a lease at Neo on First today.",
  },
  {
    q: "Is the South First Street corridor a good location despite the foreclosure situation?",
    a: "Yes — the location is genuinely strong. Caltrain's Diridon Station provides direct access to SF and the Peninsula. The nearby Google Downtown West campus represents a long-term demand signal. The financial distress is about oversupply and interest rates, not location quality.",
  },
];

export default function NeoOnFirstContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-amber-700">Active Loan Default — Feb 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Neo on First San Jose — Active Default and What Renters Should Know Before Signing
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Two luxury towers within two blocks. Two financial distress filings in 60 days. This is a pattern, not an isolated incident.
            </p>
          </div>
        </section>

        {/* ── Context ── */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-900 font-semibold leading-relaxed">
                The Fay at 600 S. First Street entered foreclosure in January 2026. Neo on First at 955–975 S. First Street entered loan default in February 2026. Two luxury complexes, two blocks apart, both entering financial distress within 60 days of each other. The pattern reflects broader market dynamics — not a coincidence.
              </p>
            </div>
          </div>
        </section>

        {/* ── What a Loan Default Means ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What a Loan Default Means for You as a Renter</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex gap-3">
                <span className="text-blue-500 font-bold mt-0.5">→</span>
                <div>
                  <span className="font-semibold">Not the same as a completed foreclosure.</span> Default means the lender has declared the borrower in breach — foreclosure proceedings take months. The building is in legal limbo, not yet transferred.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-500 font-bold mt-0.5">!</span>
                <div>
                  <span className="font-semibold">Capital investment stops during this period.</span> When ownership is in dispute, maintenance budgets shrink, capital improvements stop, and staffing levels drop. Expect deferred maintenance.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-500 font-bold mt-0.5">!</span>
                <div>
                  <span className="font-semibold">Management may be replaced by a court receiver.</span> A judge can appoint a neutral receiver to run the property during proceedings. Who you signed with may not be who you're dealing with in 6 months.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-red-500 font-bold mt-0.5">!</span>
                <div>
                  <span className="font-semibold">Lease renewals become uncertain.</span> Your signed lease is protected by California law through its end date. Renewals and month-to-month continuations are not — incoming ownership is not bound by prior commitments.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-gray-500 font-bold mt-0.5">→</span>
                <div>
                  <span className="font-semibold">Budget 6–18 months of ownership ambiguity.</span> That is the realistic timeline from default to completed transfer in California. If you are signing a 12-month lease, expect to spend most of it in transition.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Building and Location ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Building and Location</h2>
            <p className="text-gray-600 mb-4">
              Neo on First is a smaller building — approximately 50 units — compared to The Fay's 336. Smaller buildings offer a different renter experience: stronger community, more responsive management (when it's functioning), and fewer anonymous hallways.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "SAP Center", value: "Nearby" },
                { label: "Caltrain — Diridon Station", value: "Walking distance" },
                { label: "Google Downtown West", value: "Under construction nearby" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900">{item.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-600">
              The Google Downtown West campus under construction nearby is a long-term demand signal for the S. First Street corridor. The financial distress at Neo and The Fay reflects oversupply and high-rate refinancing pressure — not a permanent location problem.
            </p>
          </div>
        </section>

        {/* ── Downtown SJ Context ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Downtown San Jose Is a Broader Story</h2>
            <p className="text-gray-600 mb-4">
              The 2019–2022 luxury apartment construction boom in downtown San Jose was financed at low rates, built for a tech workforce that was supposed to return to office. When tech RTO stalled, occupancy never recovered. The result: significant renter negotiating power across the entire downtown corridor.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-green-900 mb-2">What Renter Leverage Looks Like Right Now</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>Free months (1–2 months free on a 12-month lease is common)</li>
                <li>Waived application and admin fees</li>
                <li>Reduced security deposits</li>
                <li>Below-ask rent on negotiated leases</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Roommate Market ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Roommate Market Near Neo on First</h2>
            <p className="text-gray-600 mb-4">
              The SAP Center, Caltrain, and the developing Google campus draw a mix of tech workers, event industry workers, and SJSU students to this corridor. One-bedroom units are increasingly split via co-signed leases — two people on one lease, sharing costs.
            </p>
            <p className="text-gray-600 mb-6">
              At Neo specifically, the smaller building (approximately 50 units) means neighbor relationships matter more. Unlike a 336-unit high-rise where you may never meet the people on your floor, Neo's scale tends to produce actual community — for better or worse, depending on compatibility.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-4">
                Find verified roommates near Neo on First in downtown San Jose
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates Near Neo on First →
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
            <h2 className="text-3xl font-bold mb-4">Find Verified Roommates in Downtown San Jose</h2>
            <p className="text-purple-200 mb-8">
              The S. First Street corridor has strong bones. The financial situation at these buildings creates opportunity for renters who go in with open eyes. Find a verified roommate to share the cost.
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
