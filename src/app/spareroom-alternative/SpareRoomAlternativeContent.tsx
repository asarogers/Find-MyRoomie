"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const COMPARISON = [
  { feature: "Contact new listings (< 7 days)", spareroom: "Requires Early Bird ($14–$28/month)", us: "Free — always, no paywall" },
  { feature: "Monthly cost", spareroom: "$28/4 weeks ($149/6mo or $199/yr)", us: "$0" },
  { feature: "US city coverage", spareroom: "Strong NYC/SF, thin elsewhere", us: "Bay Area-focused, expanding nationally" },
  { feature: "Lifestyle/compatibility matching", spareroom: "No — listings board only", us: "Yes — match by vibe" },
  { feature: "Verified profiles", spareroom: "Email and phone only", us: "Listings verified before going live" },
  { feature: "Group apartment applications", spareroom: "No", us: "Yes — coordinate with future roommates" },
  { feature: "Origin", spareroom: "UK-first — thinner US inventory", us: "US-built, US-focused" },
];

export default function SpareRoomAlternativeContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-sm font-semibold text-amber-700">SpareRoom charges $14–$28/month to contact new listings</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              The Best Free SpareRoom Alternative for US Renters
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              SpareRoom's Early Bird subscription gates new listings behind a paywall.
              Find MyRoomy is built for US renters — free messaging, no Early Bird fee, no subscription required.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find Roommates Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">No credit card · No Early Bird · No paywall</p>
          </div>
        </section>

        {/* ── SpareRoom's paywall explained ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">How SpareRoom's Paywall Works</h2>
            <p className="text-gray-600 mb-6">
              SpareRoom lets you browse and post for free — but to contact a listing posted within the last 7 days,
              you need their "Early Bird" subscription. New listings are the most competitive ones, because
              the best rooms get taken fast. SpareRoom knows this.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <h3 className="font-bold mb-4">SpareRoom Early Bird Pricing (US)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[["1 week", "$14"], ["2 weeks", "$25"], ["4 weeks", "$28"], ["6 months", "$149"]].map(([period, price]) => (
                  <div key={period} className="bg-white rounded-lg p-3 border border-amber-200">
                    <div className="font-bold text-amber-700 text-lg">{price}</div>
                    <div className="text-sm text-gray-500">{period}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">Without Early Bird, you can only contact: listings older than 7 days, or "Bold" paid ads.</p>
            </div>
            <p className="text-gray-600">
              SpareRoom built a strong platform in the UK — 4.6/5 on Trustpilot and genuinely good fraud prevention.
              But for US renters, it's a UK-first platform with thinner inventory and a pricing model that
              penalises anyone searching under time pressure.
            </p>
          </div>
        </section>

        {/* ── Comparison table ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">SpareRoom vs. Find MyRoomie</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Feature</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-amber-700">SpareRoom</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-green-600">Find MyRoomie</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium">{row.feature}</td>
                      <td className="p-3 border border-gray-200 text-amber-800">{row.spareroom}</td>
                      <td className="p-3 border border-gray-200 text-green-700 font-medium">{row.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "Is SpareRoom free in the US?", a: "SpareRoom is free to browse and post, but you can only contact listings older than 7 days without an Early Bird subscription ($14/week, $25/2 weeks, $28/4 weeks). New listings — the most competitive ones — require a paid subscription to contact." },
                { q: "What is SpareRoom's Early Bird subscription?", a: "Early Bird lets you contact any listing immediately, including new ones under 7 days old. Pricing: $14/week, $25/2 weeks, $28/4 weeks, $149/6 months, $199/year." },
                { q: "What is the best free alternative to SpareRoom in the US?", a: "Find MyRoomy (findmyroomy.com) is completely free — no Early Bird fee, no messaging paywall. Every listing can be contacted immediately at no cost. US-built and Bay Area-focused." },
                { q: "Is SpareRoom good for US renters?", a: "SpareRoom is strongest in major US metros like NYC and SF, but thinner elsewhere. For Bay Area-specific search or smaller US cities, US-native platforms like Find MyRoomy offer better local coverage without a subscription paywall." },
                { q: "Does SpareRoom have fake profiles?", a: "SpareRoom has a named fraud prevention team and responds quickly to scam reports. Its overall Trustpilot rating is 4.6/5. However, outdated listings remain on the platform, and some users report discriminatory screening with no enforcement mechanism." },
              ].map((faq, i) => (
                <div key={i}>
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── See all comparisons ── */}
        <section className="py-12 px-4 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Compare all roommate apps</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/roommate-apps/" className="text-purple-700 border border-purple-200 px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">All roommate apps →</Link>
              <Link href="/roomster-alternative/" className="text-gray-700 border border-gray-200 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Roomster alternative</Link>
              <Link href="/roomi-alternative/" className="text-gray-700 border border-gray-200 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Roomi alternative</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">No Early Bird. No paywall. Just free.</h2>
            <p className="text-purple-200 mb-8">Find MyRoomy — free messaging for US renters with no subscription required.</p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates Free →
            </a>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
