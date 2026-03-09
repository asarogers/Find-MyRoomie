"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NEIGHBORHOODS = [
  { name: "SOMA", desc: "1BR $2,800–$3,200/mo", detail: "Startup district, walkable to Caltrain and every major tech shuttle. High renter turnover — roommate opportunities are always fresh." },
  { name: "Hayes Valley", desc: "2BR $4,000–$5,000/mo", detail: "Central location, independent restaurants, arts scene. Meaningful savings when split. Best for design-minded renters." },
  { name: "Mission District", desc: "1BR $3,200–$4,200/mo", detail: "SF's most culturally dense neighborhood and most price-variable. Best price arbitrage in the city if you know which streets." },
  { name: "Nob Hill", desc: "1BR $3,000–$3,800/mo", detail: "Quieter, genuine hill views, older building stock. Less tech-bro than SOMA, less trendy than Hayes Valley." },
  { name: "Tenderloin / Civic Center", desc: "1BR under $2,400/mo", detail: "The budget option. Meaningfully lower rent. Higher safety variance — honest information for cost-first renters." },
  { name: "Castro", desc: "1BR $2,800–$3,600/mo", detail: "SF's LGBTQ+ community hub. Strong neighborhood identity, excellent transit connections, active community organizations." },
  { name: "Richmond / Sunset", desc: "Lower per-sqft", detail: "The quieter SF. Most family-friendly neighborhoods in the city. Best for renters who prioritize space and quiet over commute time." },
];

const RENT_TABLE = [
  { scenario: "1BR in SOMA, alone", monthly: "$3,000", annual: "$36,000" },
  { scenario: "Share a 2BR in SOMA, split evenly", monthly: "$1,600–$1,800", annual: "$19,200–$21,600" },
  { scenario: "Annual savings", monthly: "—", annual: "$14,400–$16,800" },
];

const RENT_TABLE_2 = [
  { scenario: "1BR alone (SF median)", monthly: "$3,545", annual: "$42,540" },
  { scenario: "Share a 2BR, split", monthly: "$1,772", annual: "$21,264" },
  { scenario: "Annual savings", monthly: "—", annual: "$21,276" },
];

const FAQS = [
  {
    q: "Is San Francisco too expensive for a roommate?",
    a: "No — a roommate is the primary tool SF renters use to make the market work. SF's median rent hit $3,545/month in December 2025. Split a 2BR with a verified roommate and you're paying $1,600–$1,900/month instead — saving $21,000+ per year versus living alone.",
  },
  {
    q: "How much does Find MyRoomie cost?",
    a: "Find MyRoomie is completely free. No subscription, no credit card, no paywall to message anyone. Unlike Roomster, which charges $29.99/month to access messaging, Find MyRoomie is free to browse, post, and contact verified roommates.",
  },
  {
    q: "What neighborhoods are best for roommates in San Francisco?",
    a: "SOMA is best for tech workers near Caltrain. Mission District offers the best price arbitrage if you know which streets to target. Hayes Valley suits design-minded renters. Nob Hill and Castro are quieter options with strong community feel. Richmond and Sunset are the best value for space.",
  },
];

const RELATED_CITIES = [
  { name: "Oakland, CA", slug: "oakland-ca", desc: "40% lower rent than SF with direct BART access. The smart East Bay alternative." },
  { name: "Berkeley, CA", slug: "berkeley-ca", desc: "UC Berkeley campus, vibrant neighborhoods, verified roommate matching." },
  { name: "Fremont, CA", slug: "fremont-ca", desc: "The Bay Area's largest South Asian community. Warm Springs BART to Silicon Valley." },
  { name: "Palo Alto, CA", slug: "palo-alto-ca", desc: "Stanford, Sand Hill Road, Caltrain. The most expensive South Bay zip." },
];

export default function SanFranciscoContent() {
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
              <span className="text-sm font-semibold text-amber-700">SF rents up 12% YoY — the steepest surge in the US</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              San Francisco Renters Are Paying $3,545/Month Alone. Find a Verified Roommate — Free.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Split that with a verified roommate and you're paying $1,772/month. That's <strong>$21,264/year back in your pocket</strong> — enough for a vacation, a year of student loan payments, or six months of groceries.
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

        {/* SF Rental Reality */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The SF Rental Reality</h2>
            <p className="text-gray-600 mb-6">
              San Francisco is not going to get cheaper. Not this year. Rents grew 12% year-over-year in 2025 — the fastest rate of any US city. That reversed a brief cooling trend and put San Francisco back at the top of every "most expensive rental market in America" list. This is not a blip. It is a structural feature of a city where demand for housing has outrun supply for three consecutive decades.
            </p>
            <p className="text-gray-600 mb-8">
              On a $90,000 salary — solid by most of America's standards, median in SF tech — you are spending roughly 47% of your gross income on rent if you live alone. That is not sustainable. That is why two-thirds of San Francisco renters share their housing. SOMA is particularly popular with{" "}
              <Link href="/apartments/roommates-near-google/" className="text-purple-700 underline hover:text-purple-900">tech workers near Google</Link>{" "}
              who commute via Caltrain and prefer a central SF base.
            </p>

            {/* Neighborhood grid */}
            <h3 className="text-2xl font-bold mb-6">Neighborhoods We Cover</h3>
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

        {/* Why platforms are failing SF renters */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why Craigslist and Roomster Are Failing San Francisco Renters</h2>
            <p className="text-gray-600 mb-6">
              Every person reading this has heard the same advice: "Just post on Craigslist." Maybe you have tried it.
            </p>
            <p className="text-gray-600 mb-6">
              Here is what Craigslist roommate searches in SF actually deliver: listings that redirect you to third-party signup pages. Landlords requesting wire-transfer deposits before you have seen the unit. Fake listings documented by CBS San Francisco. Craigslist has no verification, no accountability mechanism, and no recourse when something goes wrong. It is a 1995 tool for a 2026 problem. Our guide on how to{" "}
              <Link href="/how-to/avoid-roommate-scams-san-francisco/" className="text-purple-700 underline hover:text-purple-900">avoid roommate scams in SF</Link>{" "}
              walks through the specific red flags SF renters encounter.
            </p>
            <p className="text-gray-600 mb-6">
              Roomster is the other name that comes up. Roomster used to be free. Now it runs a $29.99/month subscription to access messaging. You pay before you know if anyone on the platform matches your criteria. You pay before you can see if the listings in your neighborhood are real or bots. Reddit's r/roommates community has documented Roomster's fake listing problem in detail. The "Roomster scam" keyword cluster is not an accident. It is the lived experience of San Francisco renters who tried the platform and got burned.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900">We built Find MyRoomie because San Francisco renters deserve better than this.</p>
              <ul className="mt-4 space-y-2 text-sm text-purple-800">
                <li>✓ Profile verification — real identity, real photo, real contact information confirmed</li>
                <li>✓ Free messaging — contact any verified member without a subscription or credit card</li>
                <li>✓ No auto-renew traps — we do not lock you in and charge you without consent</li>
                <li>✓ Background-check ready — available at transparent, flat-rate pricing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* The $21,264 Argument */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The $21,264 Argument</h2>
            <p className="text-gray-600 mb-8">
              Let us be specific about what finding the right roommate is worth in San Francisco.
            </p>

            <h3 className="font-semibold text-lg mb-3">SOMA rent math:</h3>
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

            <h3 className="font-semibold text-lg mb-3">At the SF median:</h3>
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
                  {RENT_TABLE_2.map((row, i) => (
                    <tr key={i} className={i === RENT_TABLE_2.length - 1 ? "bg-green-50 font-bold" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200">{row.scenario}</td>
                      <td className="p-3 border border-gray-200">{row.monthly}</td>
                      <td className={`p-3 border border-gray-200 ${i === RENT_TABLE_2.length - 1 ? "text-green-700" : ""}`}>{row.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-600">
              Twenty-one thousand dollars a year. That is what the right roommate is worth. Use a{" "}
              <Link href="/tools/rent-split-calculator/" className="text-purple-700 underline hover:text-purple-900">rent split calculator</Link>{" "}
              to model the exact savings for your situation. The only question is whether you find them through a platform with verified profiles and free messaging, or through a process that exposes you to scammers, fake listings, and a $29.99/month paywall for the privilege of being disappointed.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Get Early Access — Free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. Members who join now get first access to verified listings in{" "}
              <Link href="/apartments/soma-square-san-francisco/" className="text-purple-200 underline hover:text-white">SOMA Square</Link>,{" "}
              Hayes Valley, Mission, and every SF neighborhood — before the platform opens to the public.
            </p>
            <ul className="text-purple-200 text-sm mb-8 space-y-1">
              <li>✓ Priority matching before the platform goes public</li>
              <li>✓ Free messaging — permanently, no subscription tier required</li>
              <li>✓ Set neighborhood preferences and compatibility filters now</li>
            </ul>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Join the Verified SF Waitlist — Free →
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
