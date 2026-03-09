"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NEIGHBORHOODS = [
  { name: "Rockridge", rent: "2BR $2,600–$3,000/mo", desc: "The most in-demand neighborhood in Oakland. Walkable to College Avenue's restaurants, direct BART at Rockridge Station. Low vacancy, competitive market — roommate opportunities move fast." },
  { name: "Temescal", rent: "2BR $2,400–$2,800/mo", desc: "Food scene, murals, independent shops. The energy that Hayes Valley had ten years ago — before it got expensive. Best for creatives and food people who want a neighborhood with edges." },
  { name: "Lake Merritt", rent: "2BR $2,400–$2,900/mo", desc: "Views, active lifestyle, proximity to Downtown Oakland. Lake Merritt BART makes it one of the most connected East Bay locations. Best for outdoor-oriented renters." },
  { name: "Grand Lake", rent: "Slightly below Rockridge", desc: "Quieter, established, strong existing community feel. Long-term residents, neighborhood organizations, weekend farmers markets. Best for renters who want to settle in." },
  { name: "Fruitvale", rent: "1BR under $1,600/mo", desc: "The budget option that is becoming less of one as Oakland rents rise citywide. Strong community culture, direct BART access. Best for cost-first renters." },
];

const RENT_TABLE = [
  { scenario: "Solo in SF (median 1BR)", monthly: "$3,545", annual: "$42,540" },
  { scenario: "Solo in Oakland 1BR", monthly: "$2,100", annual: "$25,200" },
  { scenario: "Oakland 2BR split with roommate", monthly: "$1,300–$1,500", annual: "$15,600–$18,000" },
  { scenario: "Savings vs. SF alone", monthly: "$2,045–$2,245", annual: "$24,540–$26,940" },
];

const FAQS = [
  {
    q: "Is Oakland cheaper than San Francisco for roommates?",
    a: "Significantly. A 2BR in Oakland's Rockridge runs $2,600–$3,000/month — split to $1,300–$1,500/person. The same apartment in SOMA SF runs $4,500–$5,500, split to $2,250–$2,750. That's $750–$1,250/month savings — or $9,000–$15,000/year — for a comparable BART commute to the Financial District.",
  },
  {
    q: "What are Oakland's best neighborhoods for roommates?",
    a: "Rockridge is the most in-demand — walkable, BART-connected, 2BR $2,600–$3,000. Temescal has the energy and slightly lower rents ($2,400–$2,800). Lake Merritt offers views and excellent BART connections. Fruitvale is the most affordable option with a strong community culture.",
  },
  {
    q: "Why do Oakland renters stay longer than SF renters?",
    a: "Oakland's desirable neighborhoods attract people who make a deliberate choice to be there — often SF tech workers who ran the math and chose the East Bay. These renters put down roots. Oakland tenancies average 18–36 months, making compatibility in a roommate match more important than in SF's more transient market.",
  },
];

const RELATED_CITIES = [
  { name: "San Francisco, CA", slug: "san-francisco-ca", desc: "SF median rent $3,545/mo — split it with a verified roommate and save $21K/year." },
  { name: "Berkeley, CA", slug: "berkeley-ca", desc: "UC Berkeley campus, vibrant neighborhoods, verified roommate matching." },
  { name: "Fremont, CA", slug: "fremont-ca", desc: "The Bay Area's largest South Asian community. Warm Springs BART to Silicon Valley." },
  { name: "Palo Alto, CA", slug: "palo-alto-ca", desc: "Stanford, Sand Hill Road, Caltrain. The most expensive South Bay zip." },
];

export default function OaklandContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm font-semibold text-green-700">2BR split = $1,200–$1,400/mo — the most livable rent in the Bay Area</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Oakland Renters: Find a Verified Roommate and Cut Your Rent in Half
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Oakland's median 2-bedroom runs $2,400–$2,800/month. Split that with a verified roommate and you're paying <strong>$1,200–$1,400/month</strong> — the most livable rent number in the Bay Area without leaving the East Bay.
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

        {/* Why Oakland's market is different */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why Oakland's Roommate Market Is Different from SF</h2>
            <p className="text-gray-600 mb-6">
              Oakland is not a consolation prize for people who cannot afford San Francisco. It is a deliberate choice for people who understand that 40% lower rent, direct BART access to downtown SF and the Peninsula, and a neighborhood culture that San Francisco spent decades pricing out of itself are worth something.
            </p>
            <p className="text-gray-600 mb-6">
              Many of Oakland's renters are SF tech workers who made exactly this calculation. They live in Oakland, commute to SF or the Peninsula, and keep the rent savings. The roommate market here is driven by real income — people who can afford SF but choose not to.
            </p>
            <p className="text-gray-600 mb-8">
              That changes what you need from a roommate platform. Oakland tenancies run longer — 18–36 months on average. Compatibility matters more. People here are not just looking for someone to split the $3,545/month SF median. They are looking for someone they can actually live with for two or three years.
            </p>

            {/* Neighborhoods */}
            <h3 className="text-2xl font-bold mb-6">Oakland Neighborhoods: The Honest Guide</h3>
            <div className="space-y-4">
              {NEIGHBORHOODS.map((n, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-lg">{n.name}</h4>
                    <span className="text-sm font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full">{n.rent}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{n.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform failures */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Craigslist and Roomster Problem in Oakland</h2>
            <p className="text-gray-600 mb-6">
              Oakland has one of the highest fake listing rates of any Bay Area city on Craigslist. The mechanics are consistent: a listing goes up at a below-market price, generates dozens of inquiries, and then requests a deposit or application fee before any showing has occurred. By the time renters figure out it is a scam, the listing is gone.
            </p>
            <p className="text-gray-600 mb-6">
              Roomster's Oakland listings have the same problem as everywhere else: bots, fake profiles, and a $29.99/month paywall that you have to pay before finding out whether the listings in your target neighborhood are real. Reddit's roommate communities have cataloged this in detail.
            </p>
            <p className="text-gray-600">
              These platforms were not built for Oakland renters. They were built for national market share. Local knowledge, local verification, and real accountability are not features they can offer.
            </p>
          </div>
        </section>

        {/* Rent math */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Rent Math — Oakland vs. SF</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Scenario</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Monthly rent</th>
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
              The roommate math in Oakland is the strongest in the Bay Area. You are not just saving on rent relative to living alone — you are saving relative to the baseline of even trying to live in SF at all.
            </p>
          </div>
        </section>

        {/* Compatibility section */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Compatibility Matters More in Oakland</h2>
            <p className="text-gray-600 mb-6">
              Oakland renters stay longer. The data confirms what anyone who has rented here already knows: tenancies in Oakland's desirable neighborhoods run 18–36 months on average, longer than SF's more transient market.
            </p>
            <p className="text-gray-600">
              That means a bad roommate match is not a 6-month inconvenience. It is a multi-year situation. Financial reliability, communication style, cleanliness expectations — these matter more in a market where people put down roots. Find MyRoomie's profile system lets you filter for the things that actually cause roommate conflicts: sleep schedules, guest policies, cleanliness standards, work-from-home frequency.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Get Early Access — Free</h2>
            <p className="text-purple-200 mb-4">
              Oakland's verified roommate community is forming now. Members who join first get first access to verified profiles in Rockridge, Temescal, Lake Merritt, Grand Lake, and Fruitvale.
            </p>
            <ul className="text-purple-200 text-sm mb-8 space-y-1">
              <li>✓ Priority matching before public launch</li>
              <li>✓ Free messaging — permanently</li>
              <li>✓ Compatibility filtering for factors that determine whether a roommate situation actually works</li>
            </ul>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Join the Oakland Waitlist — Free →
            </a>
            <p className="text-purple-300 text-sm mt-3">Free messaging · Verified profiles · No subscription · Built for Oakland renters</p>
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

        {/* Related cities */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Find Roommates Across the Bay Area</h2>
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
