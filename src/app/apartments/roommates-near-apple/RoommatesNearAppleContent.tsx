"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const CITIES = [
  {
    city: "Cupertino",
    commute: "0–5 min (Apple Park/Infinite Loop)",
    rent: "$1,900–$2,300/person (2BR split)",
    note: "Most convenient but most expensive. Living in Cupertino means walking or biking to campus. Majority Asian-American city with vegetarian restaurant and Indian grocery density.",
  },
  {
    city: "Sunnyvale",
    commute: "10–15 min by car or Apple shuttle",
    rent: "$1,600–$1,900/person (2BR split)",
    note: "Best balance of commute and cost. Strong South Asian community, Caltrain station. Apple shuttles run through Sunnyvale. 20–25% lower rent than Cupertino.",
  },
  {
    city: "Santa Clara",
    commute: "15–20 min by car",
    rent: "$1,500–$1,800/person (2BR split)",
    note: "Intel, Nvidia, AMD are nearby — useful for Apple contractors who rotate employers. Diridon station connects to Caltrain and future BART.",
  },
  {
    city: "San Jose (North)",
    commute: "25–30 min by car or express shuttle",
    rent: "$1,400–$1,600/person (2BR split)",
    note: "Most affordable South Bay option with reasonable commute. Strong South Asian neighborhood infrastructure. BART via Berryessa station.",
  },
];

export default function RoommatesNearAppleContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-3">Apple Park · Cupertino · Updated March 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Roommates Near Apple Cupertino — Verified, Free
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Apple employees and contractors looking for roommates near Apple Park and Infinite Loop.
              Rent by commute zone, shuttle routes, H-1B arrival guide, and free verified matching.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-sm text-purple-800 mb-6">
              <strong>Apple H-1B tip:</strong> Start 8–10 weeks before your start date.
              Groups forming now will have signed leases before your arrival date.
              Find MyRoomie works fully remotely — no US credit history required.
            </div>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find Apple Campus Roommates Free →
            </a>
          </div>
        </section>

        {/* ── City guide ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Where to Live Near Apple Park — by Commute vs Cost</h2>
            <div className="space-y-4">
              {CITIES.map((c, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold">{c.city}</h3>
                      <span className="text-sm font-semibold text-purple-700">{c.rent}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Commute: {c.commute}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-gray-600 text-sm">{c.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Annual savings ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Roommate vs Solo — Annual Cost Difference</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">City</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Solo 1BR</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Shared 2BR</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Annual savings</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Cupertino", "$2,700–$3,200", "$1,900–$2,300", "$9,600–$10,800"],
                    ["Sunnyvale", "$2,200–$2,600", "$1,600–$1,900", "$7,200–$8,400"],
                    ["Santa Clara", "$2,000–$2,400", "$1,500–$1,800", "$6,000–$7,200"],
                    ["San Jose North", "$1,800–$2,000", "$1,400–$1,600", "$4,800–$4,800"],
                  ].map(([city, solo, shared, savings], i) => (
                    <tr key={i} className="bg-white">
                      <td className="p-3 border border-gray-200 font-medium">{city}</td>
                      <td className="p-3 border border-gray-200">{solo}</td>
                      <td className="p-3 border border-gray-200 text-green-700 font-medium">{shared}</td>
                      <td className="p-3 border border-gray-200 text-purple-700 font-medium">{savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  q: "What's the cheapest place to live near Apple Park?",
                  a: "Sunnyvale ($1,600–$1,900/person shared 2BR, 10–15 min to Apple Park), Santa Clara ($1,500–$1,800/person, 15–20 min), San Jose North ($1,400–$1,600/person, 25–30 min). Cupertino itself is expensive ($1,900–$2,300/person shared 2BR).",
                },
                {
                  q: "Is Cupertino expensive for Apple employees?",
                  a: "Yes. Cupertino is the most expensive city in the South Bay tech corridor. Solo 1BR runs $2,700–$3,200/month. A 2BR roommate split brings per-person costs to $1,900–$2,300/month — still one of the pricier South Bay options.",
                },
                {
                  q: "Do Apple H-1B employees struggle to find housing?",
                  a: "Yes — especially for first-time arrivals. No US credit history, unfamiliar neighborhood geography, and a compressed timeline (start date already set) make the standard search process very difficult. Verified profiles solve the trust gap before the first in-person meeting.",
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
            <p className="text-sm font-semibold text-gray-500 mb-3">Related pages</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/apartments/cupertino-ca/" className="text-purple-700 border border-purple-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">Cupertino guide →</Link>
              <Link href="/roommates/h1b-visa-bay-area/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">H1B visa guide</Link>
              <Link href="/apartments/roommates-near-google/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Roommates near Google</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Apple Campus Roommates. Verified. Free.</h2>
            <p className="text-purple-200 mb-8">
              Find verified roommates in Cupertino, Sunnyvale, and Santa Clara — free messaging,
              no subscription, works before you arrive. No Roomster paywall.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Apple Campus Roommates Free →
            </a>
            <p className="text-sm text-purple-300 mt-3">No credit card · No subscription · Verified profiles</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
