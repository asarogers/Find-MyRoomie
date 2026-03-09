"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const COMPARISON = [
  { feature: "Messaging cost", room8: "Paid subscription required (~$9.99–$19.99/mo)", fmr: "Free forever — no paywall" },
  { feature: "Identity verification", room8: "Self-reported profile only", fmr: "Government ID verified" },
  { feature: "Geographic focus", room8: "National/global", fmr: "Bay Area-specific" },
  { feature: "Fake listing protection", room8: "No verification layer", fmr: "Verified before live" },
  { feature: "Profile depth", room8: "Personality matching (self-reported)", fmr: "Verified identity + preferences" },
  { feature: "Cost to first contact", room8: "$9.99–$19.99/month", fmr: "$0" },
  { feature: "Cancel anytime", room8: "Yes, but billed monthly", fmr: "Nothing to cancel" },
];

export default function Room8AlternativeContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-3">App Comparison · Updated March 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Room8 Alternative — Free Messaging vs Room8's Paywall (2026)
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Room8 (formerly RoomieMatch) locks messaging behind a monthly subscription.
              In a market where rent is already $2,000–$3,500/month, adding a $10–$20/month
              messaging fee to find a roommate is backwards. Find MyRoomie is permanently free to message — no paywall, no subscription.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-6">
              <strong>The Room8 paywall:</strong> You can browse profiles for free, but full messaging access — what you need to actually find a roommate — requires a paid tier.
              As of 2026, that's approximately $9.99–$19.99/month depending on the plan.
            </div>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find Bay Area Roommates Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">No subscription · No paywall · Government ID verified</p>
          </div>
        </section>

        {/* ── Comparison table ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Room8 vs Find MyRoomie — Full Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Feature</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Room8</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Find MyRoomie</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className="bg-white">
                      <td className="p-3 border border-gray-200 font-medium">{row.feature}</td>
                      <td className="p-3 border border-gray-200 text-red-600">{row.room8}</td>
                      <td className="p-3 border border-gray-200 text-green-700 font-medium">{row.fmr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Why free matters ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why a Messaging Paywall Is a Bad Deal for Bay Area Renters</h2>
            <div className="space-y-4">
              {[
                {
                  point: "You're already paying Bay Area rents",
                  detail: "The median SF room is $2,500–$3,000/month. Adding a $20/month subscription to find that room is a 0.7% tax on top of an already brutal housing market. There's no reason to pay it.",
                },
                {
                  point: "Good roommates don't wait for you to upgrade",
                  detail: "A verified roommate listing that fits your criteria will receive multiple messages. If you're behind a paywall deciding whether to subscribe, the person with free messaging got there first.",
                },
                {
                  point: "Verification matters more than personality matching",
                  detail: "Room8's value proposition is personality compatibility scoring. In the Bay Area, the bigger risk is fake listings and unverified strangers. ID verification addresses the actual problem; personality algorithms don't.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4 bg-white">
                  <p className="font-semibold mb-2">{item.point}</p>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Is Room8 free to use?",
                  a: "Room8 is free to browse and create a profile, but full messaging access requires a paid subscription. As of 2026, paid tiers run approximately $9.99–$19.99/month. You cannot read or send full messages to matches without paying.",
                },
                {
                  q: "What is the best free alternative to Room8?",
                  a: "Find MyRoomie (findmyroomy.com) offers completely free messaging — no subscription, no paywall, no credit card required. It is Bay Area-focused and includes government ID verification on profiles.",
                },
                {
                  q: "Does Room8 have ID verification?",
                  a: "No. Room8 relies on self-reported profiles without government ID verification. Find MyRoomie verifies government IDs, which matters in high-scam markets like San Francisco.",
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
            <p className="text-sm font-semibold text-gray-500 mb-3">Related comparisons</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/free-roommate-app-no-subscription/" className="text-purple-700 border border-purple-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">Free roommate app guide →</Link>
              <Link href="/cirtru-alternative/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Cirtru alternative</Link>
              <Link href="/roomster-alternative-bay-area/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Roomster alternative</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Free Messaging. No Room8 Paywall.</h2>
            <p className="text-purple-200 mb-8">
              Find MyRoomie is the free alternative to Room8 — government ID verified profiles,
              Bay Area-specific search, zero subscription. Message verified roommates without paying a monthly fee.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Bay Area Roommates Free →
            </a>
            <p className="text-sm text-purple-300 mt-3">No credit card · No subscription · Verified profiles</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
