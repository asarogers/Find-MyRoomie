"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const ROOMI_REVIEWS = [
  { quote: "They collect money. Don't have a working website and don't respond to messages.", date: "Trustpilot, 2026" },
  { quote: "Filters don't work, if I search a certain neighborhood I still get listings from all the other boroughs too.", date: "App Store, 2023" },
  { quote: "I can't even message people!!!", date: "Trustpilot, 2026" },
  { quote: "Accidental overcharge of $120 for a brief usage period. Zero response from support for months.", date: "Trustpilot, 2026" },
];

const COMPARISON = [
  { feature: "Messaging", roomi: "5/day free — $29.99/month for unlimited", us: "Free — always, no limit" },
  { feature: "Monthly cost", roomi: "$29.99 (Gold) or $14.99/week", us: "$0" },
  { feature: "Geographic filters", roomi: "Documented as broken by users", us: "City-level search works" },
  { feature: "Customer support", roomi: "Reported as unresponsive for months", us: "Direct founder access (beta)" },
  { feature: "Verified profiles", roomi: "GlobalID (claimed — scam listings still appear)", us: "Listings verified before going live" },
  { feature: "Auto-renewal risk", roomi: "Yes — credit card required", us: "None — no subscription" },
  { feature: "Trust rating", roomi: "88% one-star on Trustpilot, 2.2/5 App Store", us: "Beta — growing" },
];

export default function RoomiAlternativeContent() {
  const [isOpen, setIsOpen] = useState(false);

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
              <span className="text-sm font-semibold text-red-700">Roomi: 88% one-star reviews on Trustpilot</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              The Best Free Roomi Alternative
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Roomi charges $29.99/month for unlimited messaging, has broken filters, and unresponsive support.
              Find MyRoomy is completely free — no subscription, no credit card, no auto-renewal.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find Roommates Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">No credit card · No subscription · No auto-renewal</p>
          </div>
        </section>

        {/* ── Why people are leaving Roomi ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why People Are Leaving Roomi in 2026</h2>
            <p className="text-gray-600 mb-4">
              Roomi's Trustpilot page has 88% one-star reviews and a 2.2/5 rating on the App Store.
              The same complaints repeat: broken filters, customer support that never responds, and a $29.99/month
              subscription that doesn't fix either problem.
            </p>
            <p className="text-gray-600 mb-8">
              One BBB complaint documents a user losing $5,200 to a fake landlord operating through the platform — despite Roomi's claimed identity verification.
            </p>
            <div className="space-y-4">
              {ROOMI_REVIEWS.map((r, i) => (
                <blockquote key={i} className="border-l-4 border-red-300 bg-red-50 pl-4 py-3 pr-4 rounded-r-lg">
                  <p className="text-gray-700 italic">"{r.quote}"</p>
                  <cite className="text-sm text-gray-400 mt-1 block not-italic">— {r.date}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparison table ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Roomi vs. Find MyRoomie</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Feature</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-red-600">Roomi</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-green-600">Find MyRoomie</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium">{row.feature}</td>
                      <td className="p-3 border border-gray-200 text-red-700">{row.roomi}</td>
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
                { q: "Is Roomi free to use?", a: "Roomi has a limited free tier (5 messages/day, 2 active listings), but meaningful search requires Roomi Gold at $29.99/month or $14.99/week." },
                { q: "Is Roomi a scam?", a: "Roomi has 88% one-star reviews on Trustpilot and a 2.2/5 App Store rating as of 2026. Complaints: geographic filters don't work, customer support never responds, accidental charges of $120+, scam listings despite verification claims." },
                { q: "What is the best free alternative to Roomi?", a: "Find MyRoomy (findmyroomy.com) is completely free — no subscription, no messaging paywall, no credit card required." },
                { q: "How much does Roomi cost per month?", a: "Roomi Gold costs $29.99/month or $14.99/week. There is also a Safety Bundle and Listing Boost credit available separately." },
                { q: "Can I find a roommate without paying for Roomi?", a: "You can send 5 messages per day on Roomi's free tier, but this is too limited for a real search. Find MyRoomy has completely free, unlimited messaging with no subscription." },
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
              <Link href="/spareroom-alternative/" className="text-gray-700 border border-gray-200 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">SpareRoom alternative</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Done paying $30/month to find a roommate?</h2>
            <p className="text-purple-200 mb-8">Find MyRoomy is free. No subscription. No credit card. No auto-renewal.</p>
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
