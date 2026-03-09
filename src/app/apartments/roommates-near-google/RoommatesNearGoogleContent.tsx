"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const COMMUTE_TABLE = [
  { location: "Mountain View", solo: "$3,100", split: "$2,100", commute: "0–5 min walk/bike" },
  { location: "Sunnyvale", solo: "$2,750", split: "$1,700", commute: "10–15 min" },
  { location: "Palo Alto", solo: "$3,200", split: "$2,200", commute: "5–15 min" },
  { location: "San Jose (North)", solo: "$2,400", split: "$1,500", commute: "25–30 min" },
  { location: "Fremont", solo: "$2,200", split: "$1,400", commute: "35–45 min" },
  { location: "Oakland (Rockridge)", solo: "$2,800", split: "$1,600", commute: "45 min (BART)" },
];

const FAQS = [
  {
    q: "What's the cheapest place to live near Google Mountain View?",
    a: "By per-person cost with a roommate: North San Jose/Berryessa ($1,400–$1,600/person, 25 min commute), Sunnyvale ($1,600–$1,900/person, 15 min), Mountain View itself ($2,000–$2,200/person, walking/biking). East Bay via BART (Fremont $1,300–$1,500/person, 40 min) is the lowest cost option.",
  },
  {
    q: "Do Google employees need roommates?",
    a: "Yes — even at L4+ salaries, Mountain View rents require $124K gross income for a solo 1BR under the 30% rule. A 2BR roommate split at Mountain View brings per-person costs to ~$2,100/month, requiring $84K/year each — achievable but not trivial.",
  },
  {
    q: "How far is Fremont from Google?",
    a: "Fremont to Google Mountain View via 880/84 is typically 35–45 minutes by car, or about 55 minutes via BART + shuttle. Fremont 2BR splits run $1,300–$1,500/person — saving $600–$900/month vs Mountain View for the same commute.",
  },
  {
    q: "Is Find MyRoomie free for Google employees?",
    a: "Yes — completely free. No subscription, no paywall on messaging. Roomster charges $29.99/month — you can send unlimited messages on Find MyRoomie for $0.",
  },
];

const RELATED_CITIES = [
  { name: "Roommates Near Apple", slug: "roommates-near-apple", desc: "Apple Park Cupertino — verified roommate matching for Apple employees and contractors." },
  { name: "San Jose, CA", slug: "san-jose-ca", desc: "Silicon Valley's most livable city. North SJ is minutes from Intel and Cisco campuses." },
  { name: "Fremont, CA", slug: "fremont-ca", desc: "Lowest cost Bay Area option with BART to Caltrain connections. Large South Asian community." },
  { name: "San Francisco, CA", slug: "san-francisco-ca", desc: "45–60 min to Google via Caltrain. SF median rent $3,545 — use a roommate." },
];

export default function RoommatesNearGoogleContent() {
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
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-sm font-semibold text-amber-700">Google Campus — Mountain View</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Roommates Near Google Mountain View — The Full Commute + Cost Map
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Mountain View 1BR: $3,100/month. A roommate split saves <strong>$12,000/year</strong> and lets you live closer to campus on the same budget.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Get Early Access — Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">No credit card · No subscription · Verified profiles only</p>
          </div>
        </section>

        {/* Where Google Employees Actually Live */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Where Google Employees Actually Live</h2>
            <p className="text-gray-600 mb-8">
              <Link href="/apartments/mountain-view-ca/" className="text-purple-700 underline hover:text-purple-900">Mountain View</Link>{" "}
              is the obvious choice — but it is also the most expensive. Most Googlers optimize for either cost ({" "}
              <Link href="/apartments/fremont-ca/" className="text-gray-900 underline hover:text-gray-700">Fremont</Link>,{" "}
              <Link href="/apartments/san-jose-ca/" className="text-purple-700 underline hover:text-purple-900">San Jose</Link>) or commute ({" "}
              <Link href="/apartments/sunnyvale-ca/" className="text-purple-700 underline hover:text-purple-900">Sunnyvale</Link>, Palo Alto). With a roommate, both options become viable on the same income.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Location</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Solo 1BR</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">2BR Split/Person</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Google Commute</th>
                  </tr>
                </thead>
                <tbody>
                  {COMMUTE_TABLE.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium">{row.location}</td>
                      <td className="p-3 border border-gray-200">{row.solo}</td>
                      <td className="p-3 border border-gray-200 font-semibold text-purple-700">{row.split}</td>
                      <td className="p-3 border border-gray-200 text-gray-500">{row.commute}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* The Roommate Math for Google L4+ */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Roommate Math for Google L4+</h2>
            <p className="text-gray-600 mb-6">
              L4 total comp: approximately $175K. Solo Mountain View 1BR at $3,100/month = $37,200/year. That is 21% of gross — manageable, but it leaves less for savings, investing, or loan repayment than most financial advisors recommend.
            </p>
            <p className="text-gray-600 mb-6">
              2BR roommate split: $2,100/person = $25,200/year. Saves $12,000/year. Use a{" "}
              <Link href="/tools/rent-split-calculator/" className="text-purple-700 underline hover:text-purple-900">rent split calculator</Link>{" "}
              to model the exact numbers for your situation. At 7.9% Mountain View rent growth (Zumper Q4 2025 data), that savings compounds materially over a 3-year vesting period.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900">The $12,000/year case for a Mountain View roommate:</p>
              <ul className="mt-4 space-y-2 text-sm text-purple-800">
                <li>✓ $12,000/year redirected to index funds at 7% average return = $49,000 after 3 years</li>
                <li>✓ Or: $12,000/year toward student loans = paid off significantly faster</li>
                <li>✓ Or: live in a nicer apartment on the same budget than you could alone</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Roomster Doesn't Work for Google Employees */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why Roomster Does Not Work for Google Employees</h2>
            <p className="text-gray-600 mb-6">
              Roomster charges $29.99/month before you know if anyone near your specific office location has active listings. Google&apos;s employee demographic skews young, international, and cost-conscious — exactly who Roomster&apos;s paywall frustrates most.
            </p>
            <p className="text-gray-600 mb-6">
              The Mountain View roommate search is competitive and time-sensitive. Googlers relocating for a new role have a start date. They cannot spend two weeks discovering that Roomster&apos;s Mountain View listings are thin before pivoting to a different platform.
            </p>
          </div>
        </section>

        {/* Verification Matters Near Google */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Verification Matters Near Google</h2>
            <p className="text-gray-600 mb-6">
              Google does background checks on employees. Shouldn&apos;t your roommate get the same level of vetting?
            </p>
            <p className="text-gray-600 mb-6">
              Find MyRoomie verifies every profile before you can contact it. Real identity, real photo, real contact information confirmed. Background checks available at transparent, flat-rate pricing — no upsell surprises.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900">What verification gives you near Google:</p>
              <ul className="mt-4 space-y-2 text-sm text-purple-800">
                <li>✓ No anonymous listings — every profile is accountable</li>
                <li>✓ No Venmo-before-showing deposit requests</li>
                <li>✓ Messaging is free — no $29.99/month just to say hello</li>
                <li>✓ Background-check option if you want an extra layer</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find your verified Google-area roommate — free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. Members who join now get first access to verified listings in Mountain View, Sunnyvale, and the full Google commute corridor — before the platform opens to the public.
            </p>
            <ul className="text-purple-200 text-sm mb-8 space-y-1">
              <li>✓ Priority matching before the platform goes public</li>
              <li>✓ Free messaging — permanently, no subscription tier required</li>
              <li>✓ Set commute radius and compatibility filters now</li>
            </ul>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Join the Verified Waitlist — Free →
            </a>
            <p className="text-purple-300 text-sm mt-3">Free messaging · Verified profiles · No subscription · No fake listings</p>
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
                    className="w-full text-left p-5 font-bold flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="text-purple-600 ml-4">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-600">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Find Roommates Near Other Bay Area Tech Campuses</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {RELATED_CITIES.map((c, i) => (
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
