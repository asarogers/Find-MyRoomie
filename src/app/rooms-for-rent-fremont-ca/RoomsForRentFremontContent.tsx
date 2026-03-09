"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NEIGHBORHOODS = [
  {
    name: "Warm Springs",
    range: "$1,200–$1,600/room",
    bestFor: "H-1B workers at companies south of Fremont, or anyone prioritizing rail access over car dependency.",
    detail: "BART Warm Springs station (direct to Milpitas, Berryessa, Oakland).",
  },
  {
    name: "Irvington",
    range: "$1,000–$1,400/room",
    bestFor: "New arrivals wanting maximum community infrastructure from day 1.",
    detail: "Dense South Asian community, Indian groceries and restaurants walkable.",
  },
  {
    name: "Centerville",
    range: "$1,100–$1,500/room",
    bestFor: "Renters who want Fremont's community benefits without Irvington's density.",
    detail: "More mixed neighborhood, slightly more affordable.",
  },
  {
    name: "Mission San Jose",
    range: "$1,300–$1,700/room",
    bestFor: "Renters at companies in north San Jose who don't want downtown SJ density.",
    detail: "Southern Fremont, higher rents, more suburban feel.",
  },
];

const BART_COMMUTES = [
  { destination: "Milpitas", time: "4 min" },
  { destination: "Berryessa / North SJ", time: "8 min" },
  { destination: "Downtown San Jose", time: "23 min" },
  { destination: "Oakland", time: "35 min" },
  { destination: "San Francisco", time: "55 min" },
];

const CULTURAL_FILTERS = [
  { label: "Vegetarian households", desc: "Search exclusively for households that maintain a vegetarian kitchen." },
  { label: "Prayer schedule compatibility", desc: "Align morning/evening routines with household norms." },
  { label: "Festival norms", desc: "Know upfront if the household celebrates Diwali, Eid, or similar — and how." },
  { label: "Family visit expectations", desc: "Set expectations around extended family visits before signing anything." },
];

const FAQS = [
  {
    q: "How much is a room for rent in Fremont CA?",
    a: "Rooms for rent in Fremont typically range from $900–$1,400/month in a shared house, or $1,200–$1,700/month for a private room in a shared apartment. Furnished rooms in vegetarian households near Warm Springs BART run $1,100–$1,500/month.",
  },
  {
    q: "Are there vegetarian rooms for rent in Fremont?",
    a: "Yes. Fremont's large South Asian community means many shared households maintain vegetarian kitchens. Find MyRoomie's cultural filters let you search specifically for vegetarian households — something no other roommate platform offers.",
  },
  {
    q: "Is Fremont good for H-1B workers?",
    a: "Fremont is one of the most H-1B-friendly cities in the US. 47% South Asian in some zip codes, established temples/grocery/restaurants, BART access via Warm Springs station to Silicon Valley, and lower rents than Cupertino or Palo Alto. Most H-1B arrivals at Fremont-area tech companies find housing here first.",
  },
  {
    q: "How do I find a room for rent in Fremont without getting scammed?",
    a: "Craigslist Fremont has documented scam operations specifically targeting the South Asian community: culturally resonant listing + deposit request + ghost after payment. Find MyRoomie verifies every profile before you can contact them — you know who you're meeting before you agree to anything.",
  },
];

export default function RoomsForRentFremontContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex flex-wrap justify-center gap-2 mb-6">
              {["Vegetarian-Friendly", "BART Access", "H-1B Welcome"].map((tag, i) => (
                <span key={i} className="px-4 py-1.5 bg-orange-50 border border-orange-200 rounded-full text-sm font-semibold text-orange-700">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Rooms for Rent in Fremont — Verified, Culturally Compatible, Free to Contact
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              47% South Asian. BART to Silicon Valley. Verified vegetarian households. This is where most Bay Area arrivals from India start.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find Rooms in Fremont — Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">No credit card · Verified profiles only · Free messaging</p>
          </div>
        </section>

        {/* ── Neighborhoods ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Fremont Rooms by Neighborhood</h2>
            <div className="space-y-4">
              {NEIGHBORHOODS.map((n, i) => (
                <div key={i} className="p-6 border border-gray-200 rounded-xl bg-white">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-xl text-gray-900">{n.name}</h3>
                    <span className="text-purple-600 font-semibold text-sm whitespace-nowrap ml-4">{n.range}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-2">{n.detail}</p>
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Best for:</span> {n.bestFor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Sulekha / FB is risky ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why the Sulekha and Facebook Route Is Risky</h2>
            <p className="text-gray-600 mb-4">
              Sulekha, Facebook groups, and Craigslist all have the same problem: zero profile verification before contact. For new arrivals in Fremont, this creates a specific vulnerability.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-red-800 mb-3">The Fremont Scam Pattern</h3>
              <ol className="space-y-2 text-gray-700 text-sm list-decimal list-inside">
                <li>Culturally resonant listing — vegetarian household, Warm Springs area, reasonable price</li>
                <li>Quick response, warm tone, religious or community language to build trust</li>
                <li>Request for security deposit or first month before viewing</li>
                <li>Payment received → lister disappears</li>
              </ol>
            </div>
            <p className="text-gray-600">
              Find MyRoomie verifies every profile before you can contact them. You know who you're meeting before you agree to anything — not after you've already sent money.
            </p>
          </div>
        </section>

        {/* ── BART Commute ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">BART Commute Times from Warm Springs Station</h2>
            <p className="text-gray-600 mb-8">
              Fremont is a BART hub, not a BART endpoint. Warm Springs station connects south and north without a transfer.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Destination</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">From Warm Springs BART</th>
                  </tr>
                </thead>
                <tbody>
                  {BART_COMMUTES.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium">{row.destination}</td>
                      <td className="p-3 border border-gray-200 text-purple-700 font-semibold">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Cultural Filters ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Cultural Filters That Actually Matter</h2>
            <p className="text-gray-600 mb-8">
              These are real filters on Find MyRoomie — not just checkboxes. They determine whether a household is genuinely compatible with how you actually live.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {CULTURAL_FILTERS.map((f, i) => (
                <div key={i} className="p-5 border border-gray-200 rounded-xl">
                  <h3 className="font-bold mb-2 text-gray-900">{f.label}</h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4">
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
            <h2 className="text-3xl font-bold mb-4">Find a Verified Room in Fremont — Free</h2>
            <p className="text-purple-200 mb-8">
              Vegetarian households. BART-accessible. H-1B-friendly. Verified before you contact. Free to message.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Rooms for Rent in Fremont →
            </a>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
