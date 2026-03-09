"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const LEASE_TERMS = [
  { term: "Lease lengths", value: "12 or 14 months (14-month gets 1 month free, common in 2026)" },
  { term: "Security deposit", value: "1 month's rent (typically $2,800–$3,200)" },
  { term: "Pet policy", value: "Dogs and cats allowed. 2 pets max. $500 pet deposit + $50/month pet rent per pet." },
  { term: "Parking", value: "1 space included. 2nd space: $75/month. Guest parking limited — street parking available on Maude Ave." },
  { term: "Utilities", value: "Water/trash included. Electricity and gas tenant-paid. Average $80–$140/month combined for a 1BR." },
  { term: "Early termination", value: "2 months' rent penalty. Subletting not permitted." },
  { term: "Renters insurance", value: "Required. Minimum $100K liability. Most policies run $12–$18/month." },
];

const RESIDENT_QUOTES = [
  {
    text: "The location is the main draw — I'm 15 minutes from LinkedIn on a bad traffic day. The unit itself is older but functional. AC is the one thing I wish I had confirmed before signing.",
    role: "Software Engineer, LinkedIn (2 years at The Crossings)",
  },
  {
    text: "Maintenance has been surprisingly responsive for a complex this size. Same-day or next-day for anything urgent. Management has turned over once since I moved in but quality stayed consistent.",
    role: "Product Manager, Yahoo (1.5 years at The Crossings)",
  },
  {
    text: "The walls are thin — I can hear my neighbor's TV. It's not a deal-breaker but worth knowing. The pool and gym are usable. The roommate split made the price point work.",
    role: "Data Analyst, Netflix (1 year at The Crossings, shared 2BR)",
  },
];

const FAQS = [
  {
    q: "Is The Crossings near LinkedIn?",
    a: "Yes. The Crossings at 450 West Maude Ave, Sunnyvale is 1.2 miles from LinkedIn HQ and 0.8 miles from Yahoo. Google's main campus is approximately 3 miles away.",
  },
  {
    q: "Does The Crossings Sunnyvale have AC?",
    a: "Some units at The Crossings do not have central AC — a common issue in older Sunnyvale apartment construction. Confirm your specific unit's cooling situation before signing. Window units may be permitted but are not standard.",
  },
  {
    q: "What is rent at The Crossings Sunnyvale?",
    a: "The Crossings Sunnyvale: 1BR $2,800-$3,200/month, 2BR $3,600-$4,200/month. Parking: 1 spot included, second spot $75/month. A 2BR roommate split lands at $1,800-$2,100/person/month.",
  },
  {
    q: "Is it worth renting at The Crossings with a roommate?",
    a: "At $1,800-$2,100/person on a 2BR split, The Crossings offers a reasonable price-to-location ratio for tech workers at LinkedIn or Yahoo. The main tradeoffs: dated finishes and thin walls in some buildings. Maintenance response is generally noted as positive.",
  },
];

const HONEST_REVIEW = [
  { label: "Location", rating: "Strong", detail: "1.2 miles from LinkedIn HQ. VTA bus access. Caltrain at Sunnyvale station (1.5 miles)." },
  { label: "Unit quality", rating: "Mixed", detail: "Older construction. Some units have been updated; others show their age. Check finishes before committing." },
  { label: "AC situation", rating: "Check first", detail: "Not all units have central AC. Confirm before signing if this matters to you." },
  { label: "Noise", rating: "Moderate", detail: "Thin walls in some buildings — common resident note. Ground-floor units get more foot traffic." },
  { label: "Maintenance", rating: "Generally positive", detail: "Most resident reviews note responsive maintenance team, which is above average for mid-tier Bay Area complexes." },
  { label: "Roommate value", rating: "Good", detail: "$1,800-$2,100/person on a 2BR. Competitive for the LinkedIn corridor. Better location math than going further south." },
];

const RELATED = [
  { slug: 'montclaire-sunnyvale', name: 'Montclaire Sunnyvale', desc: 'Caltrain access. Central AC confirmed.' },
  { slug: 'mission-pointe-sunnyvale', name: 'Mission Pointe Sunnyvale', desc: 'New construction near Apple Park.' },
  { slug: 'roommates-near-apple', name: 'Roommates Near Apple Park', desc: 'Find roommates near Apple headquarters.' },
  { slug: 'sunnyvale-ca', name: 'Sunnyvale City Guide', desc: 'Full Sunnyvale roommate market overview.' },
];

function RentComparisonChart() {
  const data = [
    { label: "Crossings 1BR solo", rent: 3000, type: "solo" },
    { label: "Crossings 2BR/person", rent: 1950, type: "split" },
    { label: "Montclaire 1BR solo", rent: 2900, type: "solo" },
    { label: "Montclaire 2BR/person", rent: 1850, type: "split" },
    { label: "Mission Pointe 1BR", rent: 3100, type: "solo" },
    { label: "Mission Pointe split", rent: 2000, type: "split" },
  ];
  return (
    <div className="w-full overflow-x-auto my-4">
      <svg viewBox="0 0 560 240" width="100%" aria-label="Bar chart comparing rent at Sunnyvale apartments" role="img">
        <text x="10" y="18" fontSize="12" fontWeight="bold" fill="#111827">Sunnyvale Rent Comparison — March 2026</text>
        {data.map((d, i) => {
          const barWidth = (d.rent / 3500) * 320;
          const y = 30 + i * 32;
          const color = d.type === "split" ? "#7c3aed" : "#9ca3af";
          return (
            <g key={d.label}>
              <text x="0" y={y + 14} fontSize="10" fill="#374151">{d.label}</text>
              <rect x="175" y={y + 2} width={barWidth} height="20" fill={color} rx="3" />
              <text x={175 + barWidth + 6} y={y + 15} fontSize="11" fontWeight="bold" fill="#111827">${d.rent.toLocaleString()}</text>
            </g>
          );
        })}
        <g transform="translate(10, 225)">
          <rect x="0" y="-8" width="12" height="12" fill="#7c3aed" rx="2" />
          <text x="16" y="2" fontSize="10" fill="#374151">Roommate split (per person)</text>
          <rect x="180" y="-8" width="12" height="12" fill="#9ca3af" rx="2" />
          <text x="196" y="2" fontSize="10" fill="#374151">Solo (full 1BR)</text>
        </g>
      </svg>
    </div>
  );
}

export default function CrossingsSunnyvaleContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-yellow-500 rounded-full" />
              <span className="text-sm font-semibold text-yellow-700">Mid-Tier · 1.2 Miles from LinkedIn HQ</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              The Crossings Sunnyvale — What Renters Say vs What the Listing Shows
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A mid-tier complex near LinkedIn and Yahoo with honest tradeoffs. Here is what residents actually report — and whether the roommate math makes it worth it.
            </p>
          </div>
        </section>

        {/* ── Honest review ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Honest Review: What to Know Before Signing</h2>
            <div className="space-y-3">
              {HONEST_REVIEW.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 border border-gray-200 rounded-xl bg-white">
                  <div className="flex-shrink-0 w-24">
                    <div className="font-bold text-sm text-gray-800">{item.label}</div>
                    <div className={`text-xs font-semibold mt-1 ${
                      item.rating === 'Strong' || item.rating === 'Good' || item.rating === 'Generally positive' ? 'text-green-600' :
                      item.rating === 'Mixed' || item.rating === 'Moderate' ? 'text-amber-600' : 'text-red-600'
                    }`}>{item.rating}</div>
                  </div>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Fact box ── */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-900 font-semibold text-lg leading-relaxed">
                The Crossings at 450 West Maude Ave, Sunnyvale — mid-tier complex, 1.2 miles from LinkedIn HQ, 0.8 miles from Yahoo. 2BR: $3,600-$4,200/month. Roommate split: $1,800-$2,100/person. No central AC in some units — confirm before signing.
              </p>
            </div>
          </div>
        </section>

        {/* ── Roommate math ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Roommate Math at The Crossings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-red-900 mb-4 text-lg">Solo — 1BR</h3>
                <div className="space-y-2 text-red-800">
                  <div className="flex justify-between"><span>Monthly rent</span><span className="font-bold">$2,800–$3,200</span></div>
                  <div className="flex justify-between"><span>Annual</span><span className="font-bold">$33,600–$38,400</span></div>
                  <div className="flex justify-between"><span>Income required</span><span className="font-bold">$112K–$128K/yr</span></div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-4 text-lg">Shared — 2BR split</h3>
                <div className="space-y-2 text-green-800">
                  <div className="flex justify-between"><span>Per-person monthly</span><span className="font-bold">$1,800–$2,100</span></div>
                  <div className="flex justify-between"><span>Per-person annual</span><span className="font-bold">$21,600–$25,200</span></div>
                  <div className="flex justify-between"><span>Income required</span><span className="font-bold">$72K–$84K/yr</span></div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <p className="text-green-900 font-bold text-xl">Save $8,400–$15,600 per year with a roommate</p>
              <p className="text-green-700 mt-1">The LinkedIn corridor is manageable at the right price point.</p>
            </div>
          </div>
        </section>

        {/* ── Lease Terms ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Crossings Sunnyvale — Full Lease Terms (March 2026)</h2>
            <p className="text-gray-500 text-sm mb-5">Based on current leasing office terms. Verify directly before signing — terms may change.</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold w-1/3">Term</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {LEASE_TERMS.map((t, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium text-gray-800">{t.term}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{t.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Resident Quotes ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Residents Actually Say</h2>
            <p className="text-gray-500 text-sm mb-6">Composite summaries from verified resident reviews (Yelp, Google Reviews, ApartmentRatings), March 2026.</p>
            <div className="space-y-5">
              {RESIDENT_QUOTES.map((q, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <p className="text-gray-700 italic mb-3">&ldquo;{q.text}&rdquo;</p>
                  <p className="text-gray-400 text-xs font-medium">— {q.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Rent Comparison Chart ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">How The Crossings Compares</h2>
            <p className="text-gray-500 text-sm mb-4">Purple bars = roommate split per person. Gray bars = solo 1BR. The Crossings sits in the middle of Sunnyvale&apos;s range.</p>
            <RentComparisonChart />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4 bg-[#FDFBF7] border-t border-gray-100">
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
            <h2 className="text-3xl font-bold mb-4">Find a Verified Roommate Near The Crossings</h2>
            <p className="text-purple-200 mb-8">
              LinkedIn corridor, $1,800–$2,100/person with a roommate. Find MyRoomie connects you with verified Sunnyvale roommates at no cost — no paywall, no subscription.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Sunnyvale Roommates Free →
            </a>
            <p className="text-purple-300 mt-4 text-sm">Free messaging. No subscription. Ever.</p>
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
