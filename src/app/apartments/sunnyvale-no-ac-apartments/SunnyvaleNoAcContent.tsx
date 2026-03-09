"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "Does Mission Pointe Sunnyvale have central AC?",
    a: "No. Mission Pointe by Windsor in Sunnyvale does not have central air conditioning. Units rely on wall heaters for climate control. This has been confirmed through resident reports and listing descriptions. Given Sunnyvale's summer temperatures (average July high: 84°F, peaks above 100°F), this is a significant factor for many renters.",
  },
  {
    q: "Which Sunnyvale apartments have central air conditioning?",
    a: "Confirmed central AC buildings in Sunnyvale include Montclaire at Sunnyvale, Villas at Moorpark, and Mithila (newer construction). Generally, any complex built after 2000 or advertising 'central HVAC' or 'forced air' in the amenity list has central AC.",
  },
  {
    q: "How hot does Sunnyvale get in summer?",
    a: "Sunnyvale averages a July high of 84°F with frequent heat waves pushing temperatures above 100°F. Unlike coastal SF, Sunnyvale lacks marine layer cooling. An apartment without AC in Sunnyvale is genuinely uncomfortable from June through September.",
  },
  {
    q: "What should I check before renting in Sunnyvale?",
    a: "Always ask directly: 'Does this unit have central air conditioning or only wall heaters?' Look for 'wall heater' in the amenity list (this signals no AC). Check listing photos for window or wall-mounted AC units. Visit in summer if possible, and ask current residents about summer temperature management.",
  },
];

const NO_AC = [
  {
    name: "Mission Pointe by Windsor",
    built: "1990s",
    acStatus: "No Central AC",
    acColor: "red",
    notes: "Confirmed no central AC through resident reports and listing descriptions. Wall heaters only. Despite being marketed as a newer-feeling complex, the HVAC infrastructure dates to original construction. Request unit-specific confirmation before signing.",
  },
  {
    name: "The Crossings (some units)",
    built: "1980s–1990s",
    acStatus: "Varies by Unit",
    acColor: "orange",
    notes: "The Crossings has mixed HVAC across its building stock. Some units have been retrofitted with individual units; others remain wall-heater only. Ask specifically about your unit, not the complex generally.",
  },
  {
    name: "Pre-1990 Garden Apartments (various)",
    built: "1970s–1980s",
    acStatus: "No Central AC (Typical)",
    acColor: "red",
    notes: "Sunnyvale's 1970s–1980s garden apartment stock was built before AC became standard. This includes various complexes on Maude Ave, Evelyn Ave, and the older sections of El Camino Real. Always verify directly.",
  },
];

const HAS_AC = [
  {
    name: "Montclaire at Sunnyvale",
    built: "Post-2000",
    acStatus: "Central AC Confirmed",
    notes: "All units confirmed to have central AC. Walking distance from Sunnyvale Caltrain. 2BR $3,400–$3,900/month, roommate split $1,700–$1,950/person.",
  },
  {
    name: "Villas at Moorpark",
    built: "Post-2000",
    acStatus: "Central AC Confirmed",
    notes: "Confirmed central AC. Full amenity complex with pool and gym.",
  },
  {
    name: "Mithila Apartments",
    built: "Newer Construction",
    acStatus: "Central AC Confirmed",
    notes: "Newer construction. Central HVAC included. Higher price point reflects the newer build.",
  },
];

const RELATED = [
  { slug: 'the-crossings-sunnyvale', name: 'The Crossings Sunnyvale', desc: 'Near LinkedIn. AC status confirmed.' },
  { slug: 'montclaire-sunnyvale', name: 'Montclaire Sunnyvale', desc: 'Central AC confirmed. Caltrain access.' },
  { slug: 'mission-pointe-sunnyvale', name: 'Mission Pointe Sunnyvale', desc: 'New construction near Apple Park.' },
  { slug: 'sunnyvale-ca', name: 'Sunnyvale City Guide', desc: 'Full Sunnyvale roommate market overview.' },
];

export default function SunnyvaleNoAcContent() {
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
              Sunnyvale Apartments Without Central AC — The Complete 2026 List
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Many Sunnyvale apartments built before 1990 lack central AC. Mission Pointe confirmed no AC. Sunnyvale peaks above 100°F in summer. Here's what to check before signing.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
            >
              Find Roommates in Sunnyvale →
            </a>
          </div>
        </section>

        {/* ── Why This Matters ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why AC Matters More in Sunnyvale Than in SF</h2>
            <p className="text-gray-600 mb-4">
              San Francisco's coastal location provides natural cooling — the marine layer keeps most of the city comfortable without AC even on hot days. Sunnyvale is different. Located inland in Santa Clara County, Sunnyvale regularly reaches 95–100°F during summer heat waves, with peaks above 100°F. Without AC, an apartment becomes genuinely difficult to inhabit from June through September.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "July Average High", value: "84°F" },
                { label: "Heat Wave Peak", value: "100°F+" },
                { label: "Comfortable Months Without AC", value: "Oct–May Only" },
              ].map((item, i) => (
                <div key={i} className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <div className="font-bold text-amber-900 text-lg">{item.value}</div>
                  <div className="text-amber-700 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-900 mb-2">The "Wall Heater" Signal</h3>
              <p className="text-red-800 text-sm">
                If a Sunnyvale apartment listing mentions "wall heater" in the amenities section, this almost always means no central AC. Wall heaters are the original 1970s–1980s heating system — buildings that haven't been retrofitted with forced air HVAC rely solely on them. This phrase in a listing is a flag worth investigating.
              </p>
            </div>
          </div>
        </section>

        {/* ── No AC Buildings ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Sunnyvale Buildings Without Central AC</h2>
            <div className="space-y-4">
              {NO_AC.map((b, i) => (
                <div key={i} className={`p-5 border rounded-xl ${b.acColor === 'red' ? 'border-red-200 bg-red-50' : 'border-orange-200 bg-orange-50'}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900">{b.name}</h3>
                      <p className="text-gray-500 text-sm">Built: {b.built}</p>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${b.acColor === 'red' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'}`}>
                      {b.acStatus}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm">{b.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Has AC Buildings ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Sunnyvale Buildings With Confirmed Central AC</h2>
            <div className="space-y-4">
              {HAS_AC.map((b, i) => (
                <div key={i} className="p-5 border border-green-200 bg-green-50 rounded-xl">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900">{b.name}</h3>
                      <p className="text-gray-500 text-sm">Built: {b.built}</p>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-100 text-green-700">
                      {b.acStatus}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm">{b.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How to Check ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How to Verify Before Signing</h2>
            <p className="text-gray-600 mb-5">
              "Is there AC?" is not a sufficient question. Leasing agents may interpret this as "does any form of cooling exist" — which technically includes a window unit you'd have to buy yourself. Ask the specific questions below:
            </p>
            <div className="space-y-3">
              {[
                { q: "Ask:", a: "'Does this specific unit have central air conditioning with a thermostat that controls the whole unit?'" },
                { q: "Ask:", a: "'What is the heating and cooling system in this unit — forced air, wall heater, heat pump, or something else?'" },
                { q: "Look for:", a: "A thermostat on the wall — this is the clearest signal of central HVAC." },
                { q: "Look for:", a: "'Wall heater' in the listing amenities — this almost always means no central AC." },
                { q: "Check:", a: "Zillow/Apartments.com photos for the presence of window AC units in resident photos. If previous tenants installed them, the building likely lacks central AC." },
                { q: "Ask residents:", a: "'How do you manage the heat in summer?' — current residents will tell you the truth." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                  <span className="text-purple-600 font-bold flex-shrink-0">{item.q}</span>
                  <p className="text-gray-700 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-4">
                Find verified roommates in Sunnyvale buildings with confirmed AC
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates in Sunnyvale →
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
            <h2 className="text-3xl font-bold mb-4">Find Roommates in Sunnyvale Buildings With AC</h2>
            <p className="text-purple-200 mb-8">
              Know what you're signing before summer hits. Find My Roomie connects you with verified Sunnyvale roommates in confirmed-AC buildings. Free — no $29/month Roomster paywall.
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

        {/* Related Links */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">More Bay Area Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {RELATED.map((c, i) => (
                <Link
                  key={i}
                  href={`/apartments/${c.slug}/`}
                  className="block p-5 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-colors"
                >
                  <div className="font-bold mb-1">{c.name}</div>
                  <div className="text-gray-500 text-sm">{c.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
