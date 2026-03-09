"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const ALTERNATIVES_DETAIL = [
  {
    name: "The Crossings at 450 West Maude Ave",
    distance: "0.4 miles from LinkedIn HQ",
    rent1br: "$2,800–$3,200/mo",
    rent2br: "$3,600–$4,200/mo",
    split: "$1,800–$2,100/person",
    ac: "Not all units — confirm before signing",
    parking: "1 space included, 2nd at $75/mo",
    pets: "Dogs/cats allowed, $500 deposit + $50/mo",
    verdict: "Best for LinkedIn/Yahoo workers who prioritize location over finishes.",
    slug: "the-crossings-sunnyvale",
  },
  {
    name: "Montclaire at Sunnyvale",
    distance: "0.3 miles from Sunnyvale Caltrain",
    rent1br: "$2,600–$3,000/mo",
    rent2br: "$3,400–$3,900/mo",
    split: "$1,700–$1,950/person",
    ac: "Central AC included — confirmed",
    parking: "1 space included",
    pets: "Dogs/cats allowed, restrictions apply",
    verdict: "Best for Caltrain commuters (SF, PA, SJ). Confirmed central AC — important in Sunnyvale summers.",
    slug: "montclaire-sunnyvale",
  },
  {
    name: "Mission Pointe by Windsor",
    distance: "Near Apple shuttle corridor",
    rent1br: "$2,900–$3,400/mo",
    rent2br: "$3,800–$4,400/mo",
    split: "$1,900–$2,200/person",
    ac: "No central AC — known resident complaint",
    parking: "Included",
    pets: "Allowed with restrictions",
    verdict: "Best for Apple employees who want newer construction. AC is the known issue.",
    slug: "mission-pointe-sunnyvale",
  },
];

const SUNNYVALE_RENT_TABLE = [
  { type: "1BR Solo — The Crossings", monthly: "$3,000", annual: "$36,000", income: "$120K+" },
  { type: "2BR Split — The Crossings", monthly: "$1,950", annual: "$23,400", income: "$78K+" },
  { type: "1BR Solo — Montclaire", monthly: "$2,800", annual: "$33,600", income: "$112K+" },
  { type: "2BR Split — Montclaire", monthly: "$1,850", annual: "$22,200", income: "$74K+" },
  { type: "1BR Solo — Mission Pointe", monthly: "$3,150", annual: "$37,800", income: "$126K+" },
  { type: "2BR Split — Mission Pointe", monthly: "$2,050", annual: "$24,600", income: "$82K+" },
];

const SENIOR_CONTEXT = [
  {
    text: "Americana at Sunnyvale is purpose-built for active seniors who want to stay near family in Silicon Valley. The pricing reflects the age restriction — considerably below comparable unrestricted buildings. It fills quickly with wait lists from local residents.",
    role: "Bay Area Senior Housing Specialist (composite summary)",
  },
];

const FAQS = [
  {
    q: "Is Americana at Sunnyvale age-restricted?",
    a: "Yes. Americana at Sunnyvale is a 55+ age-restricted senior community. At least one resident per unit must be 55 or older. This is a legal requirement under federal housing law, not a preference.",
  },
  {
    q: "Can tech workers live at Americana Sunnyvale?",
    a: "No — not unless they are 55 or older. Americana at Sunnyvale is a legal 55+ community. Tech workers in their 20s-40s are ineligible regardless of income. If you're looking for Sunnyvale apartments near LinkedIn or Apple, see Mission Pointe, The Crossings, or Montclaire instead.",
  },
  {
    q: "What is the rent at Americana Sunnyvale?",
    a: "Americana at Sunnyvale offers below-market pricing due to its age restrictions: 1BR units typically run $1,800-$2,400/month — significantly less than comparable non-restricted Sunnyvale apartments. The trade-off is the 55+ residency requirement.",
  },
  {
    q: "What Sunnyvale apartments are actually for tech workers?",
    a: "Tech workers in Sunnyvale should look at: The Crossings at 450 West Maude Ave (near LinkedIn/Yahoo), Montclaire at Sunnyvale (near Caltrain), or Mission Pointe (newer construction near Apple). All are general-occupancy without age restrictions.",
  },
  {
    q: "Is there a waitlist for Americana at Sunnyvale?",
    a: "Yes. Americana at Sunnyvale typically operates with a waitlist due to the combination of below-market pricing and the age-restricted qualifying pool. If you or a family member qualifies (55+), contact the leasing office directly — waitlist status changes frequently.",
  },
  {
    q: "What Sunnyvale apartments have confirmed central AC?",
    a: "Montclaire at Sunnyvale is the best-confirmed option for central AC in the Sunnyvale tech corridor. The Crossings and Mission Pointe have mixed AC situations — some units have central AC, others do not. Always ask specifically about your unit's cooling setup before signing, not just whether the building has AC.",
  },
];

const RELATED = [
  { slug: 'montclaire-sunnyvale', name: 'Montclaire Sunnyvale', desc: 'Tech worker guide. Caltrain access, central AC.' },
  { slug: 'the-crossings-sunnyvale', name: 'The Crossings Sunnyvale', desc: 'Near LinkedIn. Best Sunnyvale roommate value.' },
  { slug: 'mission-pointe-sunnyvale', name: 'Mission Pointe Sunnyvale', desc: 'New construction near Apple Park.' },
  { slug: 'sunnyvale-ca', name: 'Sunnyvale Roommates — City Guide', desc: 'Full Sunnyvale roommate market overview.' },
];

export default function AmericanaSunnyvaleContent() {
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
              Americana at Sunnyvale — Who It's Actually For (Honest Review 2026)
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Americana at Sunnyvale is a 55+ age-restricted senior community near LinkedIn HQ. Most renters searching for it don't qualify. Here's who does — and what Sunnyvale alternatives exist for everyone else.
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

        {/* ── The Building ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Americana at Sunnyvale Actually Is</h2>
            <p className="text-gray-600 mb-4">
              Americana at Sunnyvale is a federally compliant 55+ senior community. At least one resident per unit must be 55 years or older — this is a legal requirement under the Housing for Older Persons Act (HOPA), not a soft preference. Management will enforce it.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-amber-900 mb-3">Important: Not for Tech Workers Under 55</h3>
              <p className="text-amber-800 text-sm">
                If you're a tech employee at LinkedIn, Apple, Google, or any other Bay Area employer and you're under 55, you are ineligible to live at Americana. Income doesn't override the age requirement. This is commonly misunderstood — the "Americana" brand is used by multiple non-age-restricted properties elsewhere in the country.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "1-Bedrooms", value: "$1,800–$2,400/mo" },
                { label: "Age Requirement", value: "55+ (one resident)" },
                { label: "Location", value: "Near LinkedIn HQ" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 text-lg">{item.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Alternatives ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Sunnyvale Alternatives for Tech Workers — Full Comparison</h2>
            <p className="text-gray-600 mb-6">
              If you searched for Americana at Sunnyvale expecting a general-occupancy building, here are the actual options for tech workers under 55 — with full lease detail:
            </p>
            <div className="space-y-6">
              {ALTERNATIVES_DETAIL.map((apt, i) => (
                <div key={i} className="p-6 border border-gray-200 rounded-xl bg-white">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{apt.name}</h3>
                      <p className="text-gray-500 text-sm">{apt.distance}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">1BR Solo</div>
                      <div className="font-semibold text-gray-900">{apt.rent1br}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">2BR / person</div>
                      <div className="font-semibold text-purple-700">{apt.split}</div>
                    </div>
                    <div className={`rounded-lg p-3 ${apt.ac.includes('confirmed') ? 'bg-green-50' : apt.ac.includes('No central') ? 'bg-red-50' : 'bg-amber-50'}`}>
                      <div className="text-xs text-gray-500 mb-1">AC</div>
                      <div className={`font-semibold text-sm ${apt.ac.includes('confirmed') ? 'text-green-700' : apt.ac.includes('No central') ? 'text-red-700' : 'text-amber-700'}`}>{apt.ac}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">Parking</div>
                      <div className="text-sm text-gray-700">{apt.parking}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 col-span-2">
                      <div className="text-xs text-gray-500 mb-1">Pets</div>
                      <div className="text-sm text-gray-700">{apt.pets}</div>
                    </div>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                    <p className="text-purple-800 text-sm font-medium">Verdict: {apt.verdict}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Roommate Math ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Roommate Math in Sunnyvale</h2>
            <p className="text-gray-600 mb-5">
              For tech workers who qualify for general-occupancy buildings, the roommate calculation in Sunnyvale is compelling. Find MyRoomie is free — no $29/month Roomster paywall, no subscription required.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Scenario</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Monthly</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Annual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-200">Solo 1BR (Crossings/Montclaire)</td>
                    <td className="p-3 border border-gray-200 text-red-600 font-medium">~$2,700/month</td>
                    <td className="p-3 border border-gray-200 text-red-600 font-medium">$32,400/year</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200">Share 2BR with verified roommate</td>
                    <td className="p-3 border border-gray-200 text-green-600 font-medium">$1,700–$2,000/person</td>
                    <td className="p-3 border border-gray-200 text-green-600 font-medium">$20,400–$24,000/year</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-200 font-semibold">Annual savings</td>
                    <td className="p-3 border border-gray-200" colSpan={2}>
                      <span className="font-bold text-purple-700 text-lg">$8,400–$12,000/year</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Full Rent Comparison Table ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Sunnyvale Rent + Income Requirements — March 2026</h2>
            <p className="text-gray-600 mb-6">Income requirement = 3× monthly rent. Roommate splits halve both rent and income threshold.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Scenario</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Monthly</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Annual</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Income Req.</th>
                  </tr>
                </thead>
                <tbody>
                  {SUNNYVALE_RENT_TABLE.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium">{row.type}</td>
                      <td className={`p-3 border border-gray-200 font-semibold ${row.type.includes('Split') ? 'text-purple-700' : 'text-gray-700'}`}>{row.monthly}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{row.annual}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{row.income}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-xs mt-3">Data as of March 2026. Verify current pricing with leasing office before applying.</p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-4">
                Find verified roommates in Sunnyvale — free, no subscription
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
            <h2 className="text-3xl font-bold mb-4">Find Verified Roommates Near LinkedIn in Sunnyvale</h2>
            <p className="text-purple-200 mb-8">
              The Sunnyvale 2BR split lands at $1,700–$2,000/person — well below solo 1BR pricing. Find My Roomie is free. No $29/month paywall, no subscription.
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
