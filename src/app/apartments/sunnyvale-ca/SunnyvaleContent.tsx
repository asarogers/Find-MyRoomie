"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NEIGHBORHOODS = [
  { name: "Downtown Sunnyvale / Murphy Ave", desc: "1BR $2,900–$3,400/mo", detail: "Walking distance to Caltrain and Murphy Ave restaurant strip. Most walkable pocket in the city. Active roommate market driven by LinkedIn and Yahoo employees. Transit-first renters cluster here." },
  { name: "Lawrence / Fairbrae", desc: "1BR $2,700–$3,100/mo", detail: "Central Sunnyvale, close to Lawrence Expressway and Hwy 101. Good access to Synopsys and Juniper Networks campuses. Slightly lower rents than downtown with decent walkability." },
  { name: "Lakewood Village", desc: "Quieter, lower density", detail: "North Sunnyvale residential area. Lower renter turnover, more family units. Good for renters seeking stability over tech-adjacent proximity." },
  { name: "Sunnyvale / Mountain View Border", desc: "Best Google proximity", detail: "Near the Sunnyvale/Mountain View line on Castro St and Rengstorff. Google shuttle access. Rents run slightly higher due to proximity to Google's main campus 2 miles east. Fastest-moving roommate inventory in the city." },
  { name: "Moffett Field Area", desc: "Lockheed-adjacent", detail: "North Sunnyvale near NASA Ames and Lockheed Martin's Silicon Valley facility. More suburban, car-dependent. Best value per square foot in the city. Popular with defense/aerospace workers and engineers on government contracts." },
];

const RENT_TABLE = [
  { scenario: "1BR in Sunnyvale, alone", monthly: "$2,700–$3,200", annual: "$32,400–$38,400" },
  { scenario: "Share a 2BR, split evenly", monthly: "$1,500–$1,800", annual: "$18,000–$21,600" },
  { scenario: "Annual savings", monthly: "—", annual: "$14,400–$16,800" },
];

const FAQS = [
  {
    q: "What major employers are in Sunnyvale?",
    a: "LinkedIn's global headquarters is in Sunnyvale. Lockheed Martin's Silicon Valley hub is headquartered here. Google's main Mountain View campus is approximately two miles east. Juniper Networks, Synopsys, and Yahoo are also headquartered in Sunnyvale. The city sits in one of the densest employer corridors in Silicon Valley.",
  },
  {
    q: "How much can I save with a roommate in Sunnyvale?",
    a: "Sunnyvale 1BR runs $2,700–$3,200/month. A 2BR split brings your cost to $1,500–$1,800/person — saving $1,200–$1,700/month versus living alone. Over a year, that's $14,400–$20,400 in additional take-home pay.",
  },
  {
    q: "Is the Caltrain commute good from Sunnyvale?",
    a: "Yes. Sunnyvale has its own Caltrain station with direct service to San Francisco (about 70 minutes local, 55 minutes Baby Bullet). It's the main non-car commute option for LinkedIn, Google, and Lockheed employees who want to avoid driving on 101 or 237.",
  },
  {
    q: "How much does Find MyRoomie cost?",
    a: "Find MyRoomie is completely free. No subscription, no credit card, no paywall to message anyone. Unlike Roomster, which charges $29.99/month to access messaging, Find MyRoomie is free to browse, post, and contact verified roommates.",
  },
];

const RELATED_CITIES = [
  { name: "Santa Clara, CA", slug: "santa-clara-ca", desc: "Intel, Nvidia, AMD HQs within 2 miles. Adjacent to Sunnyvale." },
  { name: "Cupertino, CA", slug: "cupertino-ca", desc: "Apple Park. Higher rents, strongest tech roommate density." },
  { name: "Mission Pointe Sunnyvale", slug: "mission-pointe-sunnyvale", desc: "Mid-range complex in Sunnyvale. 2BR splits ~$1,500–1,800/person." },
  { name: "Palo Alto, CA", slug: "palo-alto-ca", desc: "Stanford, Sand Hill Road. 15 min from Sunnyvale by Caltrain." },
];

export default function SunnyvaleContent() {
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
              <span className="text-sm font-semibold text-amber-700">LinkedIn HQ · Lockheed Martin HQ · Google 2 miles east</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Find a Roommate in Sunnyvale — LinkedIn, Google, Lockheed Corridor
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Sunnyvale's 1BR averages $2,700–$3,200/month. Split a 2BR with a verified roommate and you're paying <strong>$1,500–$1,800/month</strong> — saving up to $20,000/year while staying in the center of Silicon Valley's densest employer corridor.
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

        {/* Sunnyvale Rental Reality */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Sunnyvale Rental Reality</h2>
            <p className="text-gray-600 mb-6">
              Sunnyvale sits at the geographic center of Silicon Valley's employer density. LinkedIn's global headquarters is on North Mathilda. Lockheed Martin's Silicon Valley facility employs thousands of defense and aerospace engineers near Moffett Field. Google's main campus in Mountain View is approximately two miles east. Juniper Networks, Synopsys, Yahoo, and Raytheon Technologies round out the employer picture.
            </p>
            <p className="text-gray-600 mb-6">
              The result is a city with one of the most consistently active roommate markets in the Bay Area. Tech workers arrive in waves — LinkedIn and Google cohorts in January and July, Lockheed and defense contractors throughout the year. Rents are lower than Cupertino or Palo Alto but the commute access is often superior: Caltrain, Hwy 101, and US-237 all run through or adjacent to the city.
            </p>
            <p className="text-gray-600 mb-8">
              Sunnyvale also has one of the Bay Area's most underrated transit stories: its Caltrain station runs Baby Bullet service to San Francisco in under 60 minutes. For LinkedIn or Google employees who occasionally work from SF or want weekend access to the city, Sunnyvale's Caltrain connection is a material quality-of-life advantage.
            </p>

            <h3 className="text-2xl font-bold mb-6">Sunnyvale Neighborhoods</h3>
            <div className="space-y-4">
              {NEIGHBORHOODS.map((n, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-lg">{n.name}</h4>
                    <span className="text-sm font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full">{n.desc}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{n.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why platforms are failing Sunnyvale renters */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why Roomster and Craigslist Fail Sunnyvale Renters</h2>
            <p className="text-gray-600 mb-6">
              Sunnyvale's roommate market moves quickly. New cohorts arriving for LinkedIn, Google, and Lockheed roles often need housing within two to four weeks. Roomster's $29.99/month subscription gate — from the same platform the FTC and New York AG fined $1.6M in 2023 for fake listings — adds cost and delay to an already time-pressured search.
            </p>
            <p className="text-gray-600 mb-6">
              Craigslist South Bay listings are routinely flagged by incoming tech workers on r/SFBayHousing and r/Sunnyvale for being fake, outdated, or fronts for deposit collection scams. H-1B visa holders — a large share of LinkedIn and Google incoming engineers — are disproportionately targeted.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900">Find MyRoomie is free — no $29/month Roomster paywall.</p>
              <ul className="mt-4 space-y-2 text-sm text-purple-800">
                <li>✓ Profile verification — real identity, real photo, confirmed contact information</li>
                <li>✓ Free messaging — contact any verified member without a subscription or credit card</li>
                <li>✓ No auto-renew traps — we do not charge you without consent</li>
                <li>✓ Background-check ready — available at transparent, flat-rate pricing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rent math */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Sunnyvale Rent Math</h2>
            <p className="text-gray-600 mb-8">
              What a verified roommate is worth in Sunnyvale.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Living situation</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Monthly cost</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Annual cost</th>
                  </tr>
                </thead>
                <tbody>
                  {RENT_TABLE.map((row, i) => (
                    <tr key={i} className={i === RENT_TABLE.length - 1 ? "bg-green-50 font-bold" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200">{row.scenario}</td>
                      <td className="p-3 border border-gray-200">{row.monthly}</td>
                      <td className={`p-3 border border-gray-200 ${i === RENT_TABLE.length - 1 ? "text-green-700" : ""}`}>{row.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-600">
              $14,400–$16,800/year. Sunnyvale's rents are lower than Cupertino or Palo Alto, which means the absolute savings number is slightly smaller — but the net benefit as a percentage of take-home is similar. For LinkedIn engineers on RSU vesting cycles, the difference compounds over four years into real portfolio value.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Get Early Access — Free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. Members who join now get first access to verified roommate listings in Sunnyvale — near LinkedIn, Caltrain, downtown Murphy Ave, and the Google corridor — before the platform opens to the public.
            </p>
            <ul className="text-purple-200 text-sm mb-8 space-y-1">
              <li>✓ Priority matching before the platform goes public</li>
              <li>✓ Free messaging — permanently, no subscription tier required</li>
              <li>✓ Set employer proximity and lifestyle compatibility filters now</li>
            </ul>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Join the Verified Sunnyvale Waitlist — Free →
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

        {/* Related city links */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Find Roommates Across Silicon Valley</h2>
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
