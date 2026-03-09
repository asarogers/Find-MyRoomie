"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "Is The Fay San Jose in foreclosure?",
    a: "Yes. The Fay at 600 S. First Street entered active foreclosure proceedings in January 2026 after a $182.5 million loan default. The building is approximately 60% vacant as of early 2026.",
  },
  {
    q: "What happens to my lease if my building forecloses?",
    a: "Under California law, existing leases survive a foreclosure sale. The new owner inherits your lease and is bound by its terms through the lease period. However, month-to-month arrangements and renewals are not guaranteed by incoming ownership.",
  },
  {
    q: "Is Neo on First San Jose in foreclosure?",
    a: "Neo on First filed for Chapter 11 bankruptcy protection in January 2026 to halt a $21 million foreclosure action. The building remains operational but ownership restructuring is in progress.",
  },
  {
    q: "Which San Jose apartments are financially stable?",
    a: "Crescent Village in North San Jose and Miro Downtown are operating at or near full occupancy with no known financial distress. Suburban and mid-market properties have significantly outperformed the downtown luxury segment in 2026.",
  },
];

const BUILDINGS = [
  {
    name: "The Fay",
    address: "600 S. First Street, Downtown San Jose",
    status: "Active Foreclosure",
    statusColor: "red",
    units: "336 units",
    vacancy: "~60% vacant",
    loanDefault: "$182.5M",
    details: "The Fay entered active foreclosure in January 2026 after defaulting on its $182.5M construction loan. At approximately 60% vacancy — one of the highest vacancy rates in downtown San Jose — the building has been offering significant concessions including 1–2 months free rent to attract tenants during the foreclosure period.",
    renterImplication: "California law protects your lease through foreclosure. A 12-month signed lease is legally binding on any incoming owner. The risk is management instability, staffing cuts, and renewal uncertainty post-foreclosure.",
  },
  {
    name: "Neo on First",
    address: "First Street, Downtown San Jose",
    status: "Chapter 11 Bankruptcy",
    statusColor: "orange",
    units: "Multiple towers",
    vacancy: "Elevated",
    loanDefault: "$21M",
    details: "Neo on First filed for Chapter 11 bankruptcy protection in January 2026 to halt a $21 million foreclosure action. Chapter 11 allows the building to continue operations while restructuring its debt obligations under court supervision.",
    renterImplication: "Chapter 11 is generally less disruptive than outright foreclosure. Operations typically continue normally during reorganization. Existing leases are usually honored. The primary risk is uncertainty about post-reorganization ownership and management quality.",
  },
];

const STABLE = [
  {
    name: "Crescent Village",
    area: "North San Jose",
    status: "Stable — Near Full Occupancy",
    notes: "Suburban mid-rise complex with no known financial distress. Suburban markets have significantly outperformed downtown luxury in 2026.",
  },
  {
    name: "Miro Downtown",
    area: "N. First Street, Downtown SJ",
    status: "Stable — Strong Occupancy",
    notes: "303-unit modern complex operating near full occupancy with no known financial issues as of early 2026.",
  },
  {
    name: "North SJ Suburban Stock",
    area: "Alviso, Berryessa, Milpitas border",
    status: "Stable",
    notes: "Suburban and mid-market properties throughout North SJ have maintained healthy occupancy and face no equivalent financial pressure to the downtown luxury segment.",
  },
];

const RELATED = [
  { slug: 'san-jose-ca', name: 'San Jose Roommates — City Guide', desc: 'Full San Jose roommate market overview.' },
  { slug: 'north-san-jose-vs-downtown', name: 'North SJ vs Downtown', desc: 'Cost comparison guide for San Jose renters.' },
  { slug: 'miro-san-jose', name: 'Miro San Jose', desc: 'Downtown option. Near Diridon Station.' },
  { slug: 'roommates-near-cisco', name: 'Roommates Near Cisco', desc: 'North SJ guide for Cisco commuters.' },
];

export default function SanJoseForeclosureTrackerContent() {
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
              San Jose Apartment Foreclosure Tracker 2026 — Live Status Updates
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Several San Jose luxury apartment buildings entered default or foreclosure in 2024–2026. Here's the current status, what it means for renters, and which buildings are financially stable.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
            >
              Find Verified Roommates in San Jose →
            </a>
          </div>
        </section>

        {/* ── At-Risk Buildings ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Buildings in Foreclosure or Bankruptcy</h2>
            <p className="text-gray-600 mb-6">
              The 2019–2022 San Jose luxury apartment construction boom produced more supply than demand could absorb when remote work policies persisted. High debt loads on recently completed buildings created significant foreclosure risk as vacancy rates stayed elevated.
            </p>
            <div className="space-y-6">
              {BUILDINGS.map((b, i) => (
                <div key={i} className={`p-6 border rounded-xl ${b.statusColor === 'red' ? 'border-red-200 bg-red-50' : 'border-orange-200 bg-orange-50'}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{b.name}</h3>
                      <p className="text-gray-500 text-sm">{b.address}</p>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${b.statusColor === 'red' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'}`}>
                      {b.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{b.units}</div>
                      <div className="text-gray-500 text-xs">Units</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{b.vacancy}</div>
                      <div className="text-gray-500 text-xs">Vacancy</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{b.loanDefault}</div>
                      <div className="text-gray-500 text-xs">Default Amount</div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">{b.details}</p>
                  <div className="bg-white bg-opacity-60 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-800 mb-1">Renter Implication:</p>
                    <p className="text-gray-700 text-xs">{b.renterImplication}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stable Buildings ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Financially Stable San Jose Buildings</h2>
            <p className="text-gray-600 mb-5">
              Not all San Jose buildings are in distress. Suburban and mid-market properties have significantly outperformed the downtown luxury segment in 2026.
            </p>
            <div className="space-y-4">
              {STABLE.map((s, i) => (
                <div key={i} className="p-5 border border-green-200 bg-green-50 rounded-xl">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{s.name}</h3>
                    <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">{s.status}</span>
                  </div>
                  <p className="text-green-700 text-xs font-medium mb-1">{s.area}</p>
                  <p className="text-gray-600 text-sm">{s.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Renter's Checklist ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Before You Sign: Financial Health Checklist</h2>
            <p className="text-gray-600 mb-5">
              Before signing a multi-year lease at any San Jose building, check the following:
            </p>
            <div className="space-y-3">
              {[
                "Search the building's address + 'foreclosure' or 'default' in Google News (last 12 months)",
                "Check Santa Clara County Superior Court records for lis pendens filings",
                "Ask leasing staff directly: 'Is this building under new ownership or in any restructuring process?'",
                "Look up the building's LLC on the California Secretary of State website — recent changes in registered agent can signal ownership transitions",
                "Review Yelp and Google Reviews filtered to the last 6 months for maintenance and management complaints",
                "If a building is offering 2+ months free rent, ask why — aggressive concessions are a signal worth investigating",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                  <span className="text-purple-600 font-bold flex-shrink-0">{i + 1}.</span>
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-4">
                Find verified roommates in financially stable San Jose buildings
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates in San Jose →
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
            <h2 className="text-3xl font-bold mb-4">Find Verified Roommates in Stable San Jose Buildings</h2>
            <p className="text-purple-200 mb-8">
              Know your building's financial status before signing. Find My Roomie is free — no $29/month Roomster paywall. Verified roommates in Crescent Village, Miro, and throughout San Jose.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates in San Jose →
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
