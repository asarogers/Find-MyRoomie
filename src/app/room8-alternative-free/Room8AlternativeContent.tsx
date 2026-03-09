"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "Is Room8 free to use?",
    a: "Room8 (formerly RoomieMatch) is free to browse and create a profile, but full messaging access requires a paid subscription. As of 2026, paid tiers run approximately $9.99-$19.99/month. You cannot read or send full messages to matches without paying.",
  },
  {
    q: "What is the best free alternative to Room8?",
    a: "Find MyRoomie (findmyroomy.com) offers completely free messaging — no subscription, no paywall, no credit card required. It is Bay Area-focused and includes government ID verification on profiles, making it a more secure option than platforms with self-reported profiles only.",
  },
  {
    q: "Does Room8 have ID verification?",
    a: "No. Room8 relies on self-reported profiles without government ID verification. This means you are matching with people based on unverified information. Find MyRoomie verifies government IDs, which is particularly important in high-scam markets like San Francisco.",
  },
  {
    q: "What is the best roommate app for San Francisco?",
    a: "For San Francisco specifically, Find MyRoomie is purpose-built for the Bay Area market with government ID verification, free messaging, and local-specific search. Global platforms like Room8 lack the local depth and have messaging paywalls that add friction in an already expensive housing market.",
  },
];

export default function Room8AlternativeContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              <span className="text-sm font-semibold text-red-700">Room8 Requires Subscription · FindMyRoomie is Free Forever</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Room8 Alternative — Free Messaging vs Room8&apos;s Paywall (2026)
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Room8 locks messaging behind a paid subscription. Find MyRoomie doesn&apos;t. Here&apos;s the full comparison.
            </p>
          </div>
        </section>

        {/* ── Fact box ── */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="text-red-900 font-semibold text-lg leading-relaxed">
                Room8 requires a paid subscription to access full messaging with matches. In a market where the average shared room costs $2,000/month, adding a $10-20/month platform fee is an unnecessary tax on finding housing.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 1: What is Room8? ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What is Room8?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Room8 (formerly RoomieMatch) is a global roommate matching app with a freemium model. You can create a profile and browse for free, but to actually message your matches you need to upgrade to a paid subscription.
            </p>
            <div className="space-y-3 mt-6">
              {[
                { label: "Business model", val: "Freemium — browse free, messaging requires subscription" },
                { label: "Profile verification", val: "Self-reported only — no government ID check" },
                { label: "Matching approach", val: "Algorithm-based on self-reported lifestyle preferences" },
                { label: "Geographic focus", val: "Global platform — not Bay Area specific" },
                { label: "Subscription cost", val: "~$9.99–$19.99/month for full messaging" },
              ].map((row) => (
                <div key={row.label} className="flex gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="font-semibold text-gray-700 w-40 shrink-0 text-sm">{row.label}</div>
                  <div className="text-gray-600 text-sm">{row.val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 2: Feature Comparison Table ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Feature Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-200">Feature</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 border border-gray-200">Room8</th>
                    <th className="text-center px-4 py-3 font-semibold text-purple-700 border border-gray-200 bg-purple-50">FindMyRoomie</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Messaging", room8: "Paid subscription required", fmr: "Free forever", highlight: true },
                    { feature: "ID verification", room8: "Self-reported only", fmr: "Government ID", highlight: true },
                    { feature: "Bay Area focus", room8: "Global platform", fmr: "Bay Area-first", highlight: false },
                    { feature: "Subscription fee", room8: "~$9.99–$19.99/month", fmr: "$0", highlight: true },
                    { feature: "Fake profile risk", room8: "No verification", fmr: "ID prevents fakes", highlight: true },
                  ].map((row, i) => (
                    <tr key={i} className={row.highlight ? "bg-green-50" : ""}>
                      <td className="px-4 py-3 border border-gray-200 font-medium text-gray-700">{row.feature}</td>
                      <td className="px-4 py-3 border border-gray-200 text-center text-red-700">{row.room8}</td>
                      <td className="px-4 py-3 border border-gray-200 text-center text-green-700 font-medium bg-green-50">{row.fmr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Section 3: Why Bay Area Renters Are Switching ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Bay Area Renters Are Switching</h2>
            <div className="space-y-4">
              {[
                {
                  num: "1",
                  heading: "Paying to search on top of paying to live",
                  body: "At $3,500/month average rent in SF, adding $10–20/month for a platform subscription is illogical. The platform fee doesn't improve your match quality — it just unlocks access to conversations you should be having for free.",
                },
                {
                  num: "2",
                  heading: "Bay Area-specific search beats global volume",
                  body: "Room8's global user base means your search results include listings from cities you'll never move to. A Bay Area-first platform surfaces San Francisco, Oakland, and San Jose listings with the density and local context that matters for your actual search.",
                },
                {
                  num: "3",
                  heading: "ID verification matters in a high-scam market",
                  body: "San Francisco is one of the highest-scam-density cities for housing in the US per IC3 data. Self-reported profiles — which Room8 relies on — enable the fake-profile scams that plague unverified platforms. Government ID verification eliminates that category of risk.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 border border-gray-200 rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center shrink-0 text-sm">
                    {item.num}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 mb-1">{item.heading}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: What the Best Roommate App Actually Needs ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What the Best Roommate App Actually Needs</h2>
            <p className="text-gray-700 mb-6">Three non-negotiables for a Bay Area roommate platform:</p>
            <div className="space-y-4">
              {[
                {
                  title: "Verified IDs",
                  body: "Fake profiles kill trust. When someone has submitted a government ID to use the platform, you know you're talking to a real person. Self-reported profiles enable the exact scam behavior that makes people distrust roommate apps.",
                },
                {
                  title: "Local listings",
                  body: "A global platform with millions of users sounds impressive until you realize 90% of those users are in cities you'll never live in. Bay Area search requires Bay Area depth — neighborhood-level filtering, local context, and results that reflect actual local housing stock.",
                },
                {
                  title: "Free messaging",
                  body: "Payment walls select for desperation, not compatibility. When messaging costs money, only the most desperate renters pay — which skews the user pool. Free messaging creates a healthier, larger pool of candidates at all income levels.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-purple-50 border border-purple-200 rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-bold text-purple-900 mb-1">{item.title}</div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
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
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find your Bay Area roommate — free. No Room8 paywall.</h2>
            <p className="text-purple-200 mb-8">
              Government ID verification. Free messaging forever. Bay Area-first search. No subscription required.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates Free →
            </a>
            <p className="text-sm text-purple-400 mt-3">Free · No subscription · Verified profiles</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
