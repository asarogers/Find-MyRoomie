"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const BUILDINGS = [
  {
    name: "The Fay",
    address: "600 S. First St, San Jose",
    status: "Active Foreclosure",
    statusColor: "red",
    statusIcon: "🔴",
    filed: "January 2026",
    details: [
      { label: "Loan Default", value: "$182.5 million" },
      { label: "Vacancy", value: "~60%" },
      { label: "Units", value: "336" },
      { label: "Filed", value: "January 2026" },
    ],
    what: "Construction loan default after the luxury downtown SJ market failed to absorb supply. The building never reached stabilized occupancy. With 60% vacancy, revenue is insufficient to service the debt load.",
    renterRisk: "Lease survives foreclosure under CA law — existing tenants are legally protected through their lease term. However, management may transfer to a court-appointed receiver, renewals are not guaranteed, and amenity service levels may decline significantly.",
    opportunity: "At 60% vacancy, below-market rent, free months, and reduced deposits are all actively negotiable. You're taking on transition risk in exchange for pricing concessions.",
  },
  {
    name: "Neo on First",
    address: "W. St. John St, San Jose",
    status: "Chapter 11 Bankruptcy",
    statusColor: "orange",
    statusIcon: "🟠",
    filed: "January 2026",
    details: [
      { label: "Bankruptcy Amount", value: "$21M foreclosure halted" },
      { label: "Units", value: "~250" },
      { label: "Filed", value: "January 2026" },
      { label: "Status", value: "Restructuring in progress" },
    ],
    what: "Filed Chapter 11 to halt a $21 million foreclosure action. Ownership restructuring is in progress under court supervision. The building remains operational but management continuity is uncertain.",
    renterRisk: "Same CA law protections apply — existing leases survive. Chapter 11 means the ownership is restructuring, not liquidating, which is slightly less disruptive than The Fay's outright foreclosure. Still: renewals uncertain, management may change.",
    opportunity: "Some below-market availability, but ownership uncertainty makes this higher risk than The Fay for new renters. The restructuring timeline is unclear.",
  },
  {
    name: "Venn on Market",
    address: "San Francisco (Market St corridor)",
    status: "Monitoring",
    statusColor: "yellow",
    statusIcon: "🟡",
    filed: "No filing",
    details: [
      { label: "Rent/sqft", value: "$2.15/sqft (reported)" },
      { label: "Mission Avg", value: "$8–10/sqft" },
      { label: "Status", value: "No foreclosure" },
      { label: "Watch reason", value: "Price-to-market gap" },
    ],
    what: "No foreclosure proceedings. Monitoring flag is for a different reason: Venn on Market's reported $2.15/sqft pricing creates an unusual gap vs Mission District averages of $8-10/sqft. Sustainable long-term? Unknown. But no financial distress currently.",
    renterRisk: "Low near-term risk. This is a monitoring item for pricing sustainability, not ownership instability.",
    opportunity: "If the pricing gap is real and stable, Venn on Market represents genuine value vs the Mission. See our full SF value guide for neighborhood context.",
  },
  {
    name: "Crescent Village",
    address: "North San Jose",
    status: "Stable",
    statusColor: "green",
    statusIcon: "🟢",
    filed: "None",
    details: [
      { label: "Occupancy", value: "Near 100%" },
      { label: "Status", value: "No financial distress" },
      { label: "Location", value: "North SJ / Berryessa" },
      { label: "Why stable", value: "Suburban orientation, parking, community" },
    ],
    what: "Crescent Village has been a consistent outperformer while its downtown counterparts collapse. Suburban orientation, ample parking, and a community-focused environment align with the actual demand profile of North San Jose tech workers.",
    renterRisk: "Very low. No known financial distress, near-full occupancy.",
    opportunity: "Standard market pricing, but stable. For renters prioritizing predictability over concessions, this is the reference point.",
  },
  {
    name: "Miro Downtown SJ",
    address: "Downtown San Jose",
    status: "Stable",
    statusColor: "green",
    statusIcon: "🟢",
    filed: "None",
    details: [
      { label: "Status", value: "Stable" },
      { label: "Occupancy", value: "Strong retention" },
      { label: "Location", value: "Downtown SJ core" },
      { label: "Why stable", value: "Diversified amenity base" },
    ],
    what: "Miro has maintained strong retention through the downtown distress cycle by diversifying its amenity and community programming. Not immune to market headwinds, but not in financial distress.",
    renterRisk: "Low. No known financial concerns.",
    opportunity: "One of the few downtown SJ buildings operating normally. Standard market terms apply.",
  },
];

const STATUS_COLORS: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  red:    { bg: "bg-red-50",    border: "border-red-200",    text: "text-red-900",    badge: "bg-red-100 text-red-800" },
  orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-900", badge: "bg-orange-100 text-orange-800" },
  yellow: { bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-900", badge: "bg-yellow-100 text-yellow-800" },
  green:  { bg: "bg-green-50",  border: "border-green-200",  text: "text-green-900",  badge: "bg-green-100 text-green-800" },
};

const FAQS = [
  {
    q: "Is The Fay San Jose in foreclosure?",
    a: "Yes. The Fay at 600 S. First Street entered active foreclosure proceedings in January 2026 after a $182.5 million loan default. The building is approximately 60% vacant as of early 2026. Prospective renters should verify current management arrangements before signing.",
  },
  {
    q: "What happens to my lease if my building forecloses?",
    a: "Under California law, existing leases survive a foreclosure sale. The new owner inherits your lease and is bound by its terms through the lease period. However, month-to-month arrangements and renewals are not guaranteed by incoming ownership. Get any renewal commitments in writing before your lease expires.",
  },
  {
    q: "Is Neo on First San Jose in foreclosure?",
    a: "Neo on First filed for Chapter 11 bankruptcy protection in January 2026 to halt a $21 million foreclosure action. Chapter 11 is a restructuring (not liquidation) — the building remains operational but ownership is in flux. Your lease survives under CA law, but management continuity is uncertain.",
  },
  {
    q: "Which San Jose apartments are financially stable?",
    a: "Crescent Village in North San Jose and Miro Downtown are operating at or near full occupancy with no known financial distress. Suburban and mid-market properties have significantly outperformed the downtown luxury segment in 2026.",
  },
];

const colorKey = (color: string) => STATUS_COLORS[color] || STATUS_COLORS.green;

export default function SanJoseForeclosureTrackerContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [expandedBuilding, setExpandedBuilding] = useState<number | null>(null);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* Hero */}
        <section className="pt-28 pb-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-red-700">Live Status Updates — Last reviewed March 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              San Jose Apartment Foreclosure Tracker 2026
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Two downtown luxury towers are in financial distress. One is stable. This is what you need to know before signing a lease in San Jose.
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-sm">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">🔴 Active Foreclosure: The Fay</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">🟠 Chapter 11: Neo on First</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">🟢 Stable: Crescent Village, Miro</span>
            </div>
          </div>
        </section>

        {/* Status Dashboard */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Building Status Dashboard</h2>
            {BUILDINGS.map((b, i) => {
              const c = colorKey(b.statusColor);
              const isExpanded = expandedBuilding === i;
              return (
                <div key={i} className={`border rounded-xl overflow-hidden ${c.border}`}>
                  <div className={`px-6 py-5 ${c.bg}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">{b.statusIcon}</span>
                          <h3 className="text-xl font-bold text-gray-900">{b.name}</h3>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.badge}`}>{b.status}</span>
                        </div>
                        <p className="text-sm text-gray-500">{b.address}</p>
                      </div>
                      <button
                        onClick={() => setExpandedBuilding(isExpanded ? null : i)}
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap"
                      >
                        {isExpanded ? 'Show less −' : 'Full details +'}
                      </button>
                    </div>

                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {b.details.map((d, j) => (
                        <div key={j} className="bg-white bg-opacity-60 rounded-lg px-3 py-2">
                          <div className="text-xs text-gray-500 mb-0.5">{d.label}</div>
                          <div className="text-sm font-semibold text-gray-800">{d.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-6 py-5 bg-white space-y-4">
                      <div>
                        <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">What Happened</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{b.what}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-amber-700 uppercase tracking-wide mb-2">Renter Risk Assessment</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{b.renterRisk}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-green-700 uppercase tracking-wide mb-2">Opportunity / Action</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{b.opportunity}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CA Law Guide */}
        <section className="py-14 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What to Do If You're in a Foreclosed Building</h2>
            <p className="text-gray-600 mb-6">California has strong tenant protections in foreclosure situations. Here's what the law says and what you should do.</p>

            <div className="space-y-4">
              {[
                {
                  icon: "✓",
                  color: "text-green-600",
                  title: "Your existing lease survives the foreclosure sale",
                  body: "CA Civil Code § 2924o: a new owner takes the property subject to existing leases. You cannot be evicted for the foreclosure itself while your lease is active.",
                },
                {
                  icon: "✓",
                  color: "text-green-600",
                  title: "Continue paying rent — to the right entity",
                  body: "Once a receiver or new owner takes over, you'll receive written notice of where to send rent. Until then, keep paying as directed. Get receipts.",
                },
                {
                  icon: "!",
                  color: "text-amber-500",
                  title: "Month-to-month arrangements are more vulnerable",
                  body: "New ownership can decline to renew month-to-month tenancies with proper notice (60 days for tenancies over 1 year in CA). If your lease expires during the transition, negotiate a new fixed-term lease with whoever controls the building.",
                },
                {
                  icon: "!",
                  color: "text-amber-500",
                  title: "Document everything during the transition",
                  body: "Photograph unit condition, keep copies of all communications, get maintenance requests in writing. Management transitions create accountability gaps — paper trails protect you.",
                },
                {
                  icon: "→",
                  color: "text-blue-600",
                  title: "Free legal help: Bay Area Legal Aid",
                  body: "Bay Area Legal Aid (baylegal.org) provides free housing legal services to qualifying tenants. If you're uncertain about your rights in a foreclosure situation, call them before signing anything.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className={`font-bold mt-0.5 text-lg ${item.color}`}>{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roommate CTA */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <h2 className="text-xl font-bold text-purple-900 mb-3">
                Escape the Foreclosure Risk — Find a Verified Roommate in San Jose
              </h2>
              <p className="text-purple-700 text-sm mb-5">
                Shared rooms in stable North San Jose neighborhoods run $900–$1,500/month.
                No ownership uncertainty. No lease-survival anxiety. Just a verified roommate and a stable place to live.
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Verified Roommates in San Jose →
              </a>
              <p className="text-sm text-purple-400 mt-3">Free · No subscription · ID verified</p>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-10 px-4 bg-gray-50 border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-5">Related San Jose Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/apartments/north-san-jose-vs-downtown/" className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-purple-300 hover:shadow-sm transition-all">
                <div className="text-sm font-bold text-blue-700 mb-1">Neighborhood Guide</div>
                <div className="font-semibold text-gray-900">North SJ vs Downtown SJ — 2026</div>
                <div className="text-sm text-gray-500 mt-1">Stability vs urban life. The full comparison.</div>
              </Link>
              <Link href="/apartments/the-fay-san-jose/" className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-purple-300 hover:shadow-sm transition-all">
                <div className="text-sm font-bold text-red-700 mb-1">Deep Dive</div>
                <div className="font-semibold text-gray-900">The Fay San Jose — Full Review</div>
                <div className="text-sm text-gray-500 mt-1">Everything about the $182.5M default</div>
              </Link>
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
            <h2 className="text-3xl font-bold mb-4">Find Stable, Verified Housing in San Jose</h2>
            <p className="text-purple-200 mb-8">
              Skip the ownership uncertainty. Find a verified roommate in a stable San Jose neighborhood — free, no paywall, ID-verified profiles.
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

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
