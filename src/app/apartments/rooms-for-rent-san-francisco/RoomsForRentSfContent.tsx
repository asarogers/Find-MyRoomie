"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NEIGHBORHOODS = [
  { name: "SOMA", range: "$1,600–$2,200/room", detail: "Startup district, Caltrain access, tech shuttle hub. High turnover keeps room availability fresh." },
  { name: "Mission District", range: "$1,500–$2,000/room", detail: "Culturally dense, price-variable. Best per-dollar neighborhood in SF if you know which streets." },
  { name: "Castro", range: "$1,600–$2,100/room", detail: "Strong community identity. Excellent transit. Quieter residential streets off the main corridor." },
  { name: "Hayes Valley", range: "$1,700–$2,300/room", detail: "Design-minded neighborhood, walkable to Civic Center and NoPa. High demand, limited supply." },
  { name: "Nob Hill", range: "$1,400–$1,900/room", detail: "Quieter than SOMA, genuine hill views, older building stock. Good value for the location." },
  { name: "Richmond", range: "$1,300–$1,700/room", detail: "Golden Gate Park access, diverse food scene, quieter pace. Strong value for space." },
  { name: "Sunset", range: "$1,200–$1,600/room", detail: "SF's most affordable rooms in a livable, quiet neighborhood. Ocean access. Car helpful." },
  { name: "Tenderloin / Civic Center", range: "$1,100–$1,500/room", detail: "The SF budget option. Lower rent. Higher safety variance. Honest information for cost-first renters." },
];

const CHECKLIST = [
  { item: "Is this a sublease from a master tenant or direct from landlord?", detail: "Master tenant sublets involve different legal protections. Know who holds the original lease." },
  { item: "Is the unit under SF rent control?", detail: "Buildings built before 1979 are typically rent-controlled. This matters for long-term stability." },
  { item: "What is the kitchen access policy?", detail: "Shared kitchen = potential for friction. Establish expectations before move-in." },
  { item: "Is the financial arrangement in writing?", detail: "Verbal agreements are not enforceable in California tenant disputes. Get it in writing." },
  { item: "Has the person been verified?", detail: "An unverified profile is an anonymous one. Verification closes the trust gap before the first meeting." },
];

const FAQS = [
  {
    q: "How much is a room for rent in San Francisco?",
    a: "In 2026, rooms for rent in SF typically range from $1,200–$1,600/month in outer neighborhoods (Richmond, Sunset, Excelsior) to $1,600–$2,400/month in central neighborhoods (SOMA, Mission, Castro, Hayes Valley). Shared rooms can be found for $800–$1,200/month.",
  },
  {
    q: "Where can I find rooms for rent in San Francisco without paying a subscription?",
    a: "Find MyRoomie lists verified rooms for rent in all SF neighborhoods — free to message, no subscription, no paywall. Craigslist rooms for rent listings have a documented fake listing and deposit scam problem in SF. Roomster charges $29.99/month before you can contact any listing.",
  },
  {
    q: "What's included in a room for rent in San Francisco?",
    a: "Most SF rooms include utilities in the rent price (PG&E, water/trash, internet). Some rooms are furnished. Key questions to ask: Is it a master lease sublease or a co-signed lease? What is the kitchen access policy? How are cleaning responsibilities divided?",
  },
  {
    q: "Is it legal to rent a room in San Francisco?",
    a: "Yes. Renting a room in San Francisco is legal under standard California tenant law. Key notes: if the unit is under rent control, subletting rules apply. The master tenant retains liability for the lease. All financial arrangements should be in writing.",
  },
];

const RELATED_CITIES = [
  { name: "San Francisco Roommates", slug: "san-francisco-ca", desc: "Find a roommate to split a full SF apartment instead of renting a single room." },
  { name: "Oakland, CA", slug: "oakland-ca", desc: "40% lower rent than SF. Rooms for rent from $900/month. Direct BART access." },
  { name: "Berkeley, CA", slug: "berkeley-ca", desc: "UC Berkeley campus rooms and shared housing. Vibrant neighborhood options." },
  { name: "Fremont, CA", slug: "fremont-ca", desc: "Bay Area's lowest per-person costs. Large South Asian community. BART access." },
];

export default function RoomsForRentSfContent() {
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
              <span className="text-sm font-semibold text-amber-700">No Subscription · No Paywall · Free to Message</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Rooms for Rent in San Francisco — Verified Listings, Free to Contact
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              SF median rent: $3,545 for a whole apartment. A verified room in a shared flat: <strong>$1,400–$2,000/month</strong>. That is the math that makes San Francisco actually livable.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Get Early Access — Free →
            </a>
            <p className="text-sm text-gray-400 mt-3">No credit card · No subscription · Verified listings only</p>
          </div>
        </section>

        {/* SF Rooms by Neighborhood */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">SF Rooms for Rent by Neighborhood</h2>
            <p className="text-gray-600 mb-8">
              Every San Francisco neighborhood has a different room rental market. Price, availability, and renter profile vary significantly block by block. Below is an honest overview of what verified rooms actually cost in each neighborhood.
            </p>
            <div className="space-y-4">
              {NEIGHBORHOODS.map((n, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-lg">{n.name}</h4>
                    <span className="text-sm font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full">{n.range}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{n.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Check Before Moving In */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">What to Check Before Moving Into a San Francisco Room</h2>
            <p className="text-gray-600 mb-8">
              Renting a room in SF is not the same as signing a standard apartment lease. There are SF-specific legal and practical questions every room renter should ask before committing.
            </p>
            <div className="space-y-4">
              {CHECKLIST.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex gap-3">
                    <span className="text-purple-600 font-bold mt-0.5">✓</span>
                    <div>
                      <p className="font-semibold mb-1">{item.item}</p>
                      <p className="text-gray-500 text-sm">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Craigslist Rooms Are Dangerous */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why Craigslist Rooms Are Dangerous in San Francisco</h2>
            <p className="text-gray-600 mb-6">
              The SF rooms-for-rent scam is well-documented and consistent: room listed below market → &quot;available now, first come first served&quot; → request deposit via Venmo or Zelle before showing → listing disappears. This is the most common rental scam in San Francisco and it specifically targets people looking at rooms-for-rent listings who are budget-conscious and time-pressured.
            </p>
            <p className="text-gray-600 mb-6">
              Craigslist has no verification, no accountability mechanism, and no recourse after a scam. CBS San Francisco has documented this pattern repeatedly. The SF District Attorney&apos;s office lists it as an active consumer warning.
            </p>
            <p className="text-gray-600 mb-6">
              Roomster charges $29.99/month before you can contact any listing. You pay to discover whether the SF rooms on Roomster are real or not. Reddit&apos;s r/sanfrancisco community has documented that many are not.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="font-semibold text-purple-900">Find MyRoomie was built specifically for this problem.</p>
              <ul className="mt-4 space-y-2 text-sm text-purple-800">
                <li>✓ Every room listing is tied to a verified profile</li>
                <li>✓ Free to message — no paywall before you know if a room is real</li>
                <li>✓ No deposit requests before showing — every listing is accountable</li>
                <li>✓ Background-check option for extra layer of security</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find a verified room for rent in San Francisco — free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. Members who join now get first access to verified room listings across all SF neighborhoods — before the platform opens to the public.
            </p>
            <ul className="text-purple-200 text-sm mb-8 space-y-1">
              <li>✓ Priority access before the platform goes public</li>
              <li>✓ Free messaging — permanently, no subscription tier required</li>
              <li>✓ Filter by neighborhood, price, and move-in date</li>
            </ul>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Join the Verified SF Waitlist — Free →
            </a>
            <p className="text-purple-300 text-sm mt-3">Free messaging · Verified listings · No subscription · No scams</p>
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
            <h2 className="text-2xl font-bold mb-6">More Bay Area Rental Options</h2>
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
