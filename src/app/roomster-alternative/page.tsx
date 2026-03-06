"use client";
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const ROOMSTER_REVIEWS = [
  { quote: "Used to be free to use, now costs $30/month for the essential feature of messaging. Very few real people on it. Waste of time trying to use this anymore.", date: "March 4, 2026" },
  { quote: "I created a listing for a property and all this app did was steal my money. After 189 people viewed it not one person responded back to me... This app is a scam and a joke complete money pit.", date: "February 26, 2026" },
  { quote: "You have to pay to see your messages, which in my case was ninety copies of my own advert, but under everyone else's name.", date: "February 25, 2026" },
  { quote: "Joined for 7 day trial and was charged $29 without being aware they would do that. Customer service is a joke and all I got was scammers.", date: "February 20, 2026" },
];

const COMPARISON = [
  { feature: "Messaging", roomster: "Paywalled — $30/month subscription", us: "Free — no subscription, ever" },
  { feature: "Browse listings", roomster: "Free (but can't contact without paying)", us: "Free" },
  { feature: "Fake profiles / bots", roomster: "Documented issue — Trustpilot + Reddit reports", us: "Verified listing process" },
  { feature: "Auto-renewal risk", roomster: "7-day trial auto-charges $29/month", us: "No subscription, no auto-renewal" },
  { feature: "Bay Area listings", roomster: "Generic national — limited SF depth", us: "Bay Area focused" },
  { feature: "FTC action", roomster: "Settled 2023 — deceptive listings", us: "N/A" },
  { feature: "Price to find a roommate", roomster: "$30/month minimum", us: "$0" },
];

const FAQS = [
  {
    q: "Is Roomster free to use?",
    a: "No. Roomster is free to browse, but you cannot message listings or read messages without a paid subscription. As of March 2026, the basic subscription starts at $30/month, auto-renewing from a $11.99 7-day trial unless manually cancelled.",
  },
  {
    q: "Is Roomster a scam?",
    a: "In 2023, the FTC settled a case against Roomster over fake listings and deceptive practices — this is public record. Current Trustpilot reviews (February–March 2026) document: fake bot messages, unexpected recurring billing, no customer service response, and listings that don't exist in the user's market.",
  },
  {
    q: "What is the best free alternative to Roomster?",
    a: "Find MyRoomie offers free messaging, free listing, and Bay Area-specific search — with no subscription, no auto-renewal, and no credit card required.",
  },
  {
    q: "Does Find MyRoomie have fake profiles?",
    a: "Find MyRoomie verifies listings before they go live. You're not paying to discover fake matches. The verification process means fewer listings but higher signal-to-noise than platforms that let anyone post anything.",
  },
  {
    q: "Can I find a roommate in San Francisco without paying?",
    a: "Yes. Browse San Francisco roommate listings on Find MyRoomie — no credit card, no subscription, no paywall on messaging.",
  },
];

export default function RoomsterAlternativePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Free Roomster Alternative — No Subscription, No Paywall | Find MyRoomie</title>
        <meta
          name="description"
          content="Tired of Roomster's $30/month paywall and fake listings? Find MyRoomie is 100% free — no subscription, no hidden fees. Find verified roommates in SF, LA & beyond."
        />
        <link rel="canonical" href="https://findmyroomy.com/roomster-alternative/" />
      </Head>

      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              <span className="text-sm font-semibold text-red-700">Roomster charging $30/month to read messages</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              The Best Free Roomster Alternative
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find roommates in San Francisco and the Bay Area for free. No credit card. No subscription. No hidden fees.
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

        {/* ── Why people are leaving Roomster ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why People Are Leaving Roomster in 2026</h2>
            <p className="text-gray-600 mb-8">
              Roomster's Trustpilot page filled up with complaints in February and March 2026 — the same complaints, over and over: pay to see your messages, fake listings everywhere, unexpected charges.
              Their FTC settlement in 2023 for deceptive listings is public record.
            </p>
            <div className="space-y-4">
              {ROOMSTER_REVIEWS.map((r, i) => (
                <blockquote key={i} className="border-l-4 border-red-300 bg-red-50 pl-4 py-3 pr-4 rounded-r-lg">
                  <p className="text-gray-700 italic">"{r.quote}"</p>
                  <cite className="text-sm text-gray-400 mt-1 block not-italic">— {r.date}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ── What makes a good alternative ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What Makes a Good Roomster Alternative?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "💬", title: "Free messaging — no subscription", desc: "A real alternative lets you contact any listing without pulling out a credit card. Period." },
                { icon: "✅", title: "Real profiles, not bots", desc: "A legitimate platform verifies users before they can message you — not after you pay." },
                { icon: "📍", title: "Bay Area listings that actually exist", desc: "Real listings specifically in the cities you're searching — not a national grid with 10 SF results buried under Chicago." },
                { icon: "🚫", title: "No auto-renewal traps", desc: "You should never need to set a calendar reminder to cancel a roommate search tool." },
              ].map((item, i) => (
                <div key={i} className="p-5 border border-gray-200 rounded-xl">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FindMyRoomie pitch ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find MyRoomie: The Completely Free Roomster Alternative</h2>
            <p className="text-gray-600 mb-6">
              Find MyRoomie is a Bay Area-focused roommate matching platform. It's free — not freemium, not "free to browse but pay to message." Free to contact people, free to post, free to search.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  ["Browse profiles", "Free"],
                  ["Post your own listing", "Free"],
                  ["Message anyone", "Free"],
                  ["Search SF, San Jose, Oakland", "Free"],
                  ["Credit card required", "No"],
                  ["Auto-renewal risk", "None"],
                ].map(([label, val], i) => (
                  <div key={i} className="text-center">
                    <div className="text-green-600 font-bold text-lg">{val}</div>
                    <div className="text-gray-500 text-xs mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Comparison table ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Roomster vs. Find MyRoomie</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Feature</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-red-600">Roomster</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-green-600">Find MyRoomie</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium">{row.feature}</td>
                      <td className="p-3 border border-gray-200 text-red-700">{row.roomster}</td>
                      <td className="p-3 border border-gray-200 text-green-700 font-medium">{row.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Bay Area city links ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find Roommates in the Bay Area — For Free</h2>
            <p className="text-gray-600 mb-8">
              The Bay Area is where Roomster's failure is felt most acutely. Find MyRoomie has active listings across the region — no paywall to contact anyone.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { city: "San Francisco, CA", slug: "san-francisco-ca", desc: "Browse SF roommates free. No paywall to contact anyone." },
                { city: "San Jose, CA", slug: "san-jose-ca", desc: "Silicon Valley roommate search. Free messaging, verified profiles." },
                { city: "Los Angeles, CA", slug: "los-angeles-ca", desc: "Southern California listings for anyone leaving Roomster." },
              ].map((c, i) => (
                <Link
                  key={i}
                  href={`/roommates/${c.slug}/`}
                  className="block p-5 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-colors"
                >
                  <div className="font-bold mb-1">{c.city}</div>
                  <div className="text-gray-500 text-sm">{c.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {FAQS.map((faq, i) => (
                <div key={i}>
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">You Don't Have to Pay to Find a Roommate</h2>
            <p className="text-purple-200 mb-8">
              Roomster built a business on the assumption that once you've invested time in a listing, you'll pay to unlock your messages.
              There's a free alternative. No credit card. No subscription. No auto-renewal. Ever.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates Free in San Francisco →
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
