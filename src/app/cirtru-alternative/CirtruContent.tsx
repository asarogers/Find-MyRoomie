"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const COMPARISON = [
  { label: "Scam risk flags", cirtru: "ScamAdviser warning", findMyRoomie: "Verified profiles only" },
  { label: "Bay Area coverage", cirtru: "Limited / sparse", findMyRoomie: "Specialist — built for Bay Area" },
  { label: "Identity verification", cirtru: "Unclear — user-reported issues", findMyRoomie: "Yes — required to post or message" },
  { label: "Messaging cost", cirtru: "Subscription required", findMyRoomie: "$0 — free forever" },
  { label: "Credit card required", cirtru: "Yes for full access", findMyRoomie: "No — never" },
  { label: "FTC / regulatory action", cirtru: "None documented", findMyRoomie: "None" },
];

export default function CirtruContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-3">Updated March 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Cirtru Alternative — Verified Bay Area Roommates, Free
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Cirtru has received ScamAdviser risk flags and user reports of suspicious listing practices.
              If you're searching for a roommate in the Bay Area, here's a verified alternative
              that's completely free — no subscription, no credit card required.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800 mb-6">
              <strong>Note on Cirtru:</strong> ScamAdviser flags Cirtru with a low trust score due to
              young domain age and user-reported fake listing concerns. For Bay Area roommate searches,
              verified platforms significantly reduce your risk exposure.
            </div>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find Verified Bay Area Roommates Free →
            </a>
          </div>
        </section>

        {/* ── Comparison ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Cirtru vs. Find MyRoomie</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700"></th>
                    <th className="text-center p-3 border border-gray-200 font-semibold text-red-600">Cirtru</th>
                    <th className="text-center p-3 border border-gray-200 font-semibold text-purple-700">Find MyRoomie</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3 border border-gray-200 text-gray-700 font-medium text-sm">{row.label}</td>
                      <td className="p-3 border border-gray-200 text-center text-red-600 text-sm">{row.cirtru}</td>
                      <td className="p-3 border border-gray-200 text-center text-green-700 font-bold text-sm">{row.findMyRoomie}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Why verified matters ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Verification Is the Only Variable That Matters</h2>
            <p className="text-gray-600 mb-6">
              In a $3,545/month rental market, the cost of a bad roommate connection is enormous —
              wasted application fees, lost deposits, bad living situations. Platforms that can't
              verify who you're talking to push that risk onto you.
            </p>
            <div className="space-y-4">
              {[
                { title: "Unverified platforms", desc: "Anonymous profiles. Scam operators can post. You pay to message strangers you can't verify. Risk sits entirely with you." },
                { title: "Platforms with fake listing history (Roomster)", desc: "FTC settled for $1.6M in 2023 after finding Roomster purchased 20,000+ fake reviews. Paying $29/month to message bots is worse than free alternatives." },
                { title: "Find MyRoomie", desc: "Every profile verified before you see it. No anonymous posting. Messaging is free. You're contacting a real person with a confirmed identity." },
              ].map((item, i) => (
                <div key={i} className={`border-l-4 pl-4 py-3 pr-4 rounded-r-lg ${
                  i === 2 ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'
                }`}>
                  <p className="font-semibold text-gray-800 mb-1">{item.title}</p>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bay Area focus ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Bay Area Roommate Search — What You Actually Need</h2>
            <p className="text-gray-600 mb-8">
              National platforms include the Bay Area. Bay Area specialists know the Bay Area.
              Find MyRoomie covers SF, Oakland, Berkeley, San Jose, Fremont, Cupertino, Sunnyvale,
              Palo Alto, and surrounding cities with neighborhood-level context that national platforms don't have.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                "San Francisco", "Oakland", "Berkeley",
                "San Jose", "Fremont", "Cupertino",
                "Sunnyvale", "Palo Alto", "Santa Clara",
              ].map((city, i) => (
                <div key={i} className="text-center p-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white">
                  {city}
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
              {[
                {
                  q: "Is Cirtru legit?",
                  a: "Cirtru has received scam risk flags from ScamAdviser and user reports of fake listings and poor verification. If you're searching in the Bay Area, verified alternatives like Find MyRoomie offer a safer search with no payment required.",
                },
                {
                  q: "What are the best Cirtru alternatives?",
                  a: "For Bay Area roommate searches: Find MyRoomie (free, verified, Bay Area specialist), followed by Craigslist (free but no verification) and Roomster (verified but $29/month paywall). Find MyRoomie is the only option that is both verified and free.",
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
            <p className="text-sm font-semibold text-gray-500 mb-3">Related guides</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/roomster-alternative/" className="text-purple-700 border border-purple-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">Roomster alternatives →</Link>
              <Link href="/roomi-alternative/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Roomi alternatives</Link>
              <Link href="/roommate-apps/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">All roommate apps ranked</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Verified Bay Area Roommates — Free, No Risk</h2>
            <p className="text-purple-200 mb-8">
              No ScamAdviser warnings. No fake listings. No $30/month paywall. Just verified Bay Area
              roommates, free to contact.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Verified Roommates Free →
            </a>
            <p className="text-sm text-purple-300 mt-3">No credit card · No subscription · Verified profiles</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
