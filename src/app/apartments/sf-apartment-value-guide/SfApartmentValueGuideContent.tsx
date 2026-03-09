"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "Which SF neighborhood has the best value for renters?",
    a: "Inner Richmond and the Sunset District consistently rank highest for value in 2026. Inner Richmond averages $5.50-$7/sqft with an 8.5/10 value score. The Outer Sunset reaches 9/10 value at $4.50-$6/sqft — the best pure dollar-per-square-foot value in San Francisco.",
  },
  {
    q: "What is the price per sqft in SOMA?",
    a: "SOMA (South of Market) averages $8-10/sqft/month in 2026. A typical 500 sqft studio runs approximately $4,000-$5,000/month. SOMA scores 7/10 on the FindMyRoomie value index — high walkability (95) and transit partially offset the premium pricing.",
  },
  {
    q: "Is the Sunset District cheaper than SOMA?",
    a: "Yes, significantly. The Inner Sunset averages $5-6.50/sqft versus SOMA's $8-10/sqft — a 30-40% discount. A 700 sqft 1BR in the Inner Sunset typically runs $3,400/month versus $4,500+ in SOMA. The trade-off is slightly longer transit commutes to the Financial District.",
  },
  {
    q: "Where does my rent dollar go furthest in San Francisco?",
    a: "For solo renters: the Outer Sunset ($4.50-$6/sqft, 9/10 value score) and Inner Richmond ($5.50-$7/sqft, 8.5/10) offer the most square footage per dollar. For roommate arrangements: the Castro and Mission offer the best combination of roommate pool density, walkability, and reasonable $/sqft.",
  },
];

const NEIGHBORHOODS = [
  { name: "Outer Sunset", avgRent: "$4.50–$6/sqft", walkability: "72", transit: "75", value: "9/10", color: "green" },
  { name: "Inner Richmond", avgRent: "$5.50–$7/sqft", walkability: "88", transit: "82", value: "8.5/10", color: "green" },
  { name: "Outer Mission", avgRent: "$5–$6.50/sqft", walkability: "84", transit: "78", value: "8/10", color: "green" },
  { name: "Inner Sunset", avgRent: "$5–$6.50/sqft", walkability: "91", transit: "84", value: "8/10", color: "green" },
  { name: "Castro / Eureka Valley", avgRent: "$6–$8/sqft", walkability: "96", transit: "88", value: "7.5/10", color: "yellow" },
  { name: "Mission District", avgRent: "$6–$8/sqft", walkability: "97", transit: "90", value: "7.5/10", color: "yellow" },
  { name: "SOMA", avgRent: "$8–$10/sqft", walkability: "95", transit: "95", value: "7/10", color: "yellow" },
  { name: "Hayes Valley", avgRent: "$8–$10/sqft", walkability: "99", transit: "94", value: "6.5/10", color: "yellow" },
  { name: "Nob Hill", avgRent: "$9–$12/sqft", walkability: "94", transit: "88", value: "5/10", color: "red" },
  { name: "Pacific Heights", avgRent: "$9–$12/sqft", walkability: "91", transit: "78", value: "4.5/10", color: "red" },
];

export default function SfApartmentValueGuideContent() {
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
              SF Apartment Value Score — Where Your Dollar Goes Furthest in 2026
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Price-per-sqft analysis across SF neighborhoods. Outer Sunset: $4.50–$6/sqft. Pacific Heights: $9–$12/sqft. Where you actually get the most for your money.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
            >
              Find a Roommate in SF →
            </a>
          </div>
        </section>

        {/* ── Value Table ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Neighborhood Value Score Table</h2>
            <p className="text-gray-600 mb-5">
              Value score combines price-per-sqft, walkability, and transit access. A high value score means your money goes further relative to what the neighborhood provides.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Neighborhood</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Avg Rent/sqft</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Walkability</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Transit</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Value Score</th>
                  </tr>
                </thead>
                <tbody>
                  {NEIGHBORHOODS.map((n, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium">{n.name}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{n.avgRent}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{n.walkability}/100</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{n.transit}/100</td>
                      <td className="p-3 border border-gray-200">
                        <span className={`font-bold ${n.color === 'green' ? 'text-green-700' : n.color === 'red' ? 'text-red-600' : 'text-yellow-700'}`}>
                          {n.value}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Best Value ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Best Value Neighborhoods</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Outer Sunset — 9/10 Value",
                  desc: "The Outer Sunset is SF's most underrated neighborhood for value. $4.50–$6/sqft gets you a spacious 1BR for under $3,000 in many buildings. The trade-off: N Judah Muni adds 20–30 minutes to a downtown commute versus BART. For remote workers or those with flexible hours, this is SF's best dollar.",
                },
                {
                  title: "Inner Richmond — 8.5/10 Value",
                  desc: "Inner Richmond combines reasonable pricing ($5.50–$7/sqft), strong walkability (88), and a dense restaurant corridor on Clement Street. Transit via the 38 Geary bus connects to downtown in 25–30 minutes. Among the best overall lifestyle-to-cost ratios in SF.",
                },
                {
                  title: "Outer Mission — 8/10 Value",
                  desc: "The Outer Mission offers genuine value at $5–$6.50/sqft with BART access at Balboa Park and Mission Street walkability. Less tech-worker focused than SOMA but strong for Mission-adjacent lifestyle at 25–30% lower cost.",
                },
              ].map((item, i) => (
                <div key={i} className="p-5 border border-green-200 bg-green-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Worst Value ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Worst Value Neighborhoods</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Pacific Heights — 4.5/10 Value",
                  desc: "Pacific Heights is beautiful and prestigious. It is also among SF's least transit-connected neighborhoods ($9–$12/sqft). You're paying for the address and the views. The 2 and 3 buses are the primary transit options — not BART. For anyone commuting daily, the math is punishing.",
                },
                {
                  title: "Nob Hill — 5/10 Value",
                  desc: "Similar to Pacific Heights in pricing ($9–$12/sqft) with cable car proximity that's a tourist draw rather than a commuter benefit. Management quality in Nob Hill luxury buildings has been inconsistent, and the limited transit options make car ownership nearly mandatory.",
                },
              ].map((item, i) => (
                <div key={i} className="p-5 border border-red-200 bg-red-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Roommate Multiplier ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Roommate Value Multiplier</h2>
            <p className="text-gray-600 mb-5">
              Regardless of neighborhood, a verified roommate is the single most powerful value multiplier available to SF renters. Find MyRoomie is free — no $29/month Roomster paywall.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="text-purple-900 font-semibold mb-4">
                In every SF neighborhood, a roommate reduces per-person cost by 35–50% compared to a solo 1BR. The Castro at $6–$8/sqft goes from $3,500+/month solo to $1,900–$2,200/person shared — while keeping you in one of SF's most walkable, transit-rich locations.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-4">
                Find verified roommates in any SF neighborhood — free, no subscription
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find a Roommate in San Francisco →
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
            <h2 className="text-3xl font-bold mb-4">Maximize Your SF Rent Dollar</h2>
            <p className="text-purple-200 mb-8">
              Best value neighborhoods: Outer Sunset (9/10), Inner Richmond (8.5/10). Best value multiplier: a verified roommate in any neighborhood. Find My Roomie is free — no subscription.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates in San Francisco →
            </a>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
