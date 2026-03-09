"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NO_AC = [
  {
    name: "Mission Pointe by Windsor",
    status: "Confirmed No Central AC",
    statusColor: "red",
    notes: "Documented in resident reviews and confirmed through listing descriptions. Units rely on wall heaters only. No central cooling system.",
    built: "Pre-2000",
    action: "If you rent here, plan for portable AC units ($200-$500/unit) and higher summer electric bills.",
  },
  {
    name: "Crossings (older units)",
    status: "No Central AC (older buildings)",
    statusColor: "red",
    notes: "Older buildings within the Crossings complex lack central AC. Some newer buildings added during later phases may have it — verify by specific building number.",
    built: "Mixed vintage",
    action: "Ask specifically about your target unit's building vintage before committing.",
  },
  {
    name: "Americana at Brand (older units)",
    status: "Partial — verify unit",
    statusColor: "yellow",
    notes: "Mixed results depending on building phase. Older units confirmed wall-heater only. Ask for the specific unit's HVAC system in writing before signing.",
    built: "Mixed",
    action: "Request HVAC documentation from leasing office.",
  },
];

const HAS_AC = [
  {
    name: "Montclaire at Sunnyvale",
    status: "Confirmed Central AC",
    notes: "Central HVAC system confirmed. Listed in amenities as 'central air conditioning.'",
    priceRange: "$2,800–$3,800/month",
  },
  {
    name: "Villas at Moorpark",
    status: "Confirmed Central AC",
    notes: "Central air confirmed. Contemporary finishes. AC included in all units.",
    priceRange: "$2,600–$3,500/month",
  },
  {
    name: "Mithila",
    status: "Confirmed Central AC",
    notes: "Newer construction. Central HVAC standard across all units.",
    priceRange: "$2,500–$3,400/month",
  },
  {
    name: "Any complex with 'central HVAC' or 'forced air' listed",
    status: "Standard indicator",
    notes: "If a listing explicitly states 'central HVAC,' 'forced air,' or 'central air conditioning' in the amenity list, central AC is present. These are the keywords to look for.",
    priceRange: "Varies",
  },
];

const CHECKLIST = [
  {
    step: 1,
    title: "Ask directly and specifically",
    body: "Say: 'Does this unit have central air conditioning, or does it only have wall heaters?' Do not accept 'heating and cooling' as an answer — that can mean wall heaters plus a window AC unit. Ask for 'central HVAC' confirmation.",
  },
  {
    step: 2,
    title: "Look for 'wall heater' in the amenity list",
    body: "'Wall heater' in the amenity description means no central system. If you see 'forced air' or 'central air,' you have central HVAC. If only 'wall heater' is listed, you have heat with no cooling.",
  },
  {
    step: 3,
    title: "Check listing photos for window or wall-mounted AC units",
    body: "If photos show a window AC unit or a wall-mounted unit (a box installed through the wall), the building has no central system. These are supplemental units added by tenants or management to compensate.",
  },
  {
    step: 4,
    title: "Visit in summer if possible",
    body: "The real test: stand inside the unit at 2pm on a July afternoon. Sunnyvale regularly exceeds 90°F from late June through September. If the unit has no central AC and no supplemental cooling, you will know immediately.",
  },
  {
    step: 5,
    title: "Ask current residents",
    body: "Other tenants will tell you the truth. Look for residents near the mailboxes, parking lot, or leasing office and ask directly: 'How do you handle summers here? Does the unit have AC?'",
  },
];

const FAQS = [
  {
    q: "Does Mission Pointe Sunnyvale have central AC?",
    a: "No. Mission Pointe by Windsor in Sunnyvale does not have central air conditioning. Units rely on wall heaters for climate control. Resident reviews and listing descriptions confirm this consistently. Given Sunnyvale's summer temperatures — average July high 84°F, frequent heat waves above 100°F — this is a significant quality-of-life gap.",
  },
  {
    q: "Which Sunnyvale apartments have central air conditioning?",
    a: "Confirmed central AC buildings include Montclaire at Sunnyvale, Villas at Moorpark, and Mithila. Generally, complexes built after 2000 or those advertising 'central HVAC' or 'forced air' in their amenity list have central air. Buildings that list only 'wall heater' do not.",
  },
  {
    q: "How hot does Sunnyvale get in summer?",
    a: "Sunnyvale averages a July high of 84°F with heat waves regularly pushing above 100°F from late June through September. Unlike coastal San Francisco, Sunnyvale receives no marine layer cooling. An apartment without AC is genuinely uncomfortable from June through September.",
  },
  {
    q: "What should I check before renting in Sunnyvale?",
    a: "Ask directly about central AC (not just 'heating and cooling'). Look for 'wall heater' in the amenity list. Check photos for window or wall-mounted AC units. Visit in summer. Ask current residents. Get any HVAC details in writing before signing.",
  },
];

export default function SunnyvaleNoAcContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* Hero */}
        <section className="pt-28 pb-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
              <span className="text-sm font-semibold text-amber-700">Sunnyvale Renter Warning — 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Sunnyvale Apartments Without Central AC — The Complete 2026 List
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Many Sunnyvale complexes built before 1990 lack central air conditioning. Summers hit 100°F+. This is what leasing offices won't volunteer.
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-sm">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">July avg high: 84°F</span>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">Heat waves: 100°F+</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">Mission Pointe: confirmed no AC</span>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-5">Sunnyvale's Dirty Secret</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Sunnyvale was built out primarily in the 1970s and 1980s, when South Bay summers were considered mild enough to skip air conditioning. That calculus has changed. Sunnyvale regularly exceeds 90°F from late June through September, with heat waves pushing above 100°F. Marine layer cooling from the Bay doesn't reach most of Sunnyvale the way it does coastal cities.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The result: thousands of apartment units across Sunnyvale that charge Silicon Valley tech-worker rents ($2,500-$3,500/month) while lacking the single amenity that makes summer survivable. Leasing offices often describe these units as having "wall heater" without volunteering that there is no cooling system.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Mission Pointe by Windsor has become the poster child for this issue — it is Sunnyvale's most-reviewed complex with confirmed no central AC. But it is far from alone.
            </p>
          </div>
        </section>

        {/* No AC Buildings */}
        <section className="py-10 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-red-700">Buildings Confirmed Without Central AC</h2>
            <div className="space-y-5">
              {NO_AC.map((b, i) => (
                <div key={i} className="border border-red-200 bg-red-50 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-bold text-gray-900">{b.name}</h3>
                    <span className="text-xs font-semibold px-2 py-1 bg-red-200 text-red-800 rounded-full whitespace-nowrap">{b.status}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3 leading-relaxed">{b.notes}</p>
                  <div className="flex gap-4 text-xs text-gray-500 mb-3">
                    <span>Built: {b.built}</span>
                  </div>
                  <div className="bg-white border border-red-200 rounded-lg px-4 py-2">
                    <span className="text-xs font-bold text-red-700 uppercase mr-2">Action:</span>
                    <span className="text-sm text-gray-600">{b.action}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Has AC Buildings */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-green-700">Buildings Confirmed with Central AC</h2>
            <div className="space-y-4">
              {HAS_AC.map((b, i) => (
                <div key={i} className="border border-green-200 bg-green-50 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-gray-900">{b.name}</h3>
                    <span className="text-xs font-semibold px-2 py-1 bg-green-200 text-green-800 rounded-full whitespace-nowrap">{b.status}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2 leading-relaxed">{b.notes}</p>
                  {b.priceRange !== "Varies" && (
                    <span className="text-sm font-medium text-gray-600">Typical range: {b.priceRange}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">5 Things to Check Before Signing in Sunnyvale</h2>
            <div className="space-y-5">
              {CHECKLIST.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roommate Math */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">The AC Premium — Is It Worth Splitting?</h2>
            <p className="text-gray-600 mb-6">
              Buildings with central AC typically command $200-$400/month more than comparable buildings without.
              Here's how that math changes with a roommate:
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Scenario</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Monthly Cost</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Per Person</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Has AC?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scenario: "No-AC complex, solo 1BR", cost: "$2,400/mo", pp: "$2,400", ac: "No" },
                    { scenario: "No-AC complex + portable units", cost: "$2,600/mo", pp: "$2,600", ac: "Partial" },
                    { scenario: "Central AC complex, solo 1BR", cost: "$2,800/mo", pp: "$2,800", ac: "Yes" },
                    { scenario: "Central AC complex, 2BR split (2 ppl)", cost: "$3,600/mo", pp: "$1,800", ac: "Yes" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-gray-700">{row.scenario}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{row.cost}</td>
                      <td className="px-4 py-3 text-right font-semibold text-gray-800">{row.pp}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={row.ac === "Yes" ? "text-green-700 font-bold" : row.ac === "Partial" ? "text-amber-600" : "text-red-600 font-bold"}>{row.ac}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-sm mt-3">
              A 2BR split in a central AC building at $1,800/person beats a solo no-AC unit at $2,400/month AND gives you actual cooling.
            </p>

            <div className="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-3">Find a Verified Roommate in Sunnyvale</p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates in Sunnyvale →
              </a>
              <p className="text-sm text-purple-400 mt-2">Free · No subscription · ID verified</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
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
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find a Verified Roommate in Sunnyvale</h2>
            <p className="text-purple-200 mb-8">
              Split an AC-equipped 2BR for less than a no-AC solo unit. Free, verified, Bay Area-specific.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates in Sunnyvale →
            </a>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
