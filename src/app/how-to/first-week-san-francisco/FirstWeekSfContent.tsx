"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const faqs = [
  {
    q: "Where do I stay in SF while apartment hunting?",
    a: "Extended stay hotels in SOMA (Residence Inn, Home2 Suites) are the most practical option at $160–$220/night. Budget 7–14 days maximum. Airbnb in a neighborhood you are considering renting doubles as a trial run — walk the streets at different times before committing to a year-long lease.",
  },
  {
    q: "How long does it take to find an apartment in San Francisco?",
    a: "For a solo apartment, the SF market typically takes 4–8 weeks from active searching to move-in. For a shared room via a verified platform like Find MyRoomie, the timeline is faster — typically 2–4 weeks if you are flexible on exact neighborhood. Starting your search before you arrive reduces this to near-zero post-arrival time.",
  },
  {
    q: "What is a good price for a shared room in SF?",
    a: "In 2026, expect to pay $1,900–$2,500/month for a private room in a shared SF apartment in good neighborhoods (SOMA, Mission, Castro, Hayes Valley). The Sunset and Inner Richmond run $1,700–$2,000/month. Anything under $1,500/month for a private room in SF proper is a red flag — verify the listing carefully before sending any money.",
  },
  {
    q: "How do I avoid scams when looking for housing in San Francisco?",
    a: "The main rule: never send a deposit to anyone you have not met in person at the actual property. Common SF-specific scams include gorgeous photos of Tenderloin apartments at below-market prices, 'overseas landlord' stories requiring upfront deposits, and micro-units listed as studios. Use verified platforms with ID checks, and always see the unit before paying anything.",
  },
];

export default function FirstWeekSfContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />
      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* Hero */}
        <section className="pt-28 pb-14 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              SF Housing Survival — 2026
            </div>
            <h1 className="text-4xl font-extrabold mb-5 leading-tight">
              First Week in San Francisco — Housing Survival Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              You are in SF with no permanent housing. Here is the exact playbook, in order, starting day one. Do not sign a lease on day one. See at least three neighborhoods first. Here is how to do it right.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-2 text-yellow-700 font-medium">Day 1–3: Temporary housing</div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-blue-700 font-medium">Day 3–7: Neighborhood scouting</div>
              <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-green-700 font-medium">Day 7–14: Find your roommate</div>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-12 space-y-14">

          {/* Day 1-3 */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-yellow-500 text-white font-bold text-sm px-3 py-1 rounded-full">Day 1–3</div>
              <h2 className="text-2xl font-bold">Emergency / Temporary Housing</h2>
            </div>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Your only goal in the first three days is a stable base. Do not make any permanent decisions. Do not sign anything. Just get settled.
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <div className="font-semibold text-green-800 mb-2">Extended Stay Hotels (Best Option)</div>
                <ul className="text-gray-700 text-sm space-y-1.5 leading-relaxed">
                  <li><strong>Residence Inn SOMA:</strong> $180–$220/night. In-unit kitchen. Good for 7–14 days.</li>
                  <li><strong>Home2 Suites:</strong> $160–$200/night. Extended stay rates available for 7+ nights.</li>
                  <li>Book 7–14 days max. These are expensive by the day but give you full flexibility.</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <div className="font-semibold text-blue-800 mb-2">Airbnb (Use Strategically)</div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Book in a neighborhood you are seriously considering. Use your stay as a trial run — walk the streets at 8am, 3pm, and 11pm. This turns accommodation cost into market research.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <div className="font-semibold text-gray-700 mb-2">Friend's Couch</div>
                <p className="text-gray-600 text-sm">Take it if available. Sets your burn rate to near-zero and buys you time to search without pressure.</p>
              </div>
            </div>
            <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="font-semibold text-red-700 mb-1">Do NOT:</div>
              <p className="text-red-600 text-sm">Sign a lease on day one in SF. See at least 3 neighborhoods before committing to any location. A neighborhood looks completely different at 8am vs. 11pm — see both.</p>
            </div>
          </section>

          {/* Day 3-7 */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-blue-500 text-white font-bold text-sm px-3 py-1 rounded-full">Day 3–7</div>
              <h2 className="text-2xl font-bold">Neighborhood Scouting</h2>
            </div>
            <p className="text-gray-700 mb-5 leading-relaxed">
              SF neighborhoods have distinct identities — and distinct vibes at different times of day. The only way to know if you can live somewhere is to experience it at multiple times. Here is your scouting protocol:
            </p>
            <div className="space-y-3">
              {[
                {
                  neighborhood: "SOMA",
                  instructions: "Walk at 8am (dense work crowd, coffee shops full) AND 11pm (very different — quieter residential streets but some blocks feel isolated). Decision-relevant: do you work in SOMA? If yes, the walk-to-work value is real.",
                },
                {
                  neighborhood: "Mission",
                  instructions: "Sunday afternoon (peak energy, Valencia Street packed) vs. Monday morning (back to a working neighborhood). The Mission is SF's most vibrant and diverse neighborhood — but 24th St and 16th St blocks vary significantly.",
                },
                {
                  neighborhood: "Sunset",
                  instructions: "Take the N Judah Muni line to the Sunset at 7pm on a weekday. Walk Irving Street. It feels like a different city — quieter, more residential, more fog. If you want calm, this is it. Ocean Beach is 10 minutes on foot.",
                },
                {
                  neighborhood: "Inner Richmond",
                  instructions: "Walk Clement Street on a Saturday. The Richmond has the best food per dollar in SF. Less nightlife, more community. Strong for families and people who want a real neighborhood feel.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <div className="font-bold text-gray-800 mb-2">{item.neighborhood}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.instructions}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <strong>The rule:</strong> Only sign in a neighborhood you have spent at least 4 hours in, at different times of day. No exceptions.
            </div>
          </section>

          {/* Day 7-14 */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-green-500 text-white font-bold text-sm px-3 py-1 rounded-full">Day 7–14</div>
              <h2 className="text-2xl font-bold">Finding a Roommate</h2>
            </div>
            <p className="text-gray-700 mb-5 leading-relaxed">
              By day 7 you know which neighborhoods work for you. Now you find your roommate. The platform matters.
            </p>
            <div className="space-y-3 mb-5">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <div className="font-semibold text-green-800 mb-2">Find MyRoomie — Recommended</div>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>Free messaging — no subscription, no paywall</li>
                  <li>ID verification on all profiles</li>
                  <li>Bay Area-specific — not a generic national platform</li>
                  <li>Video call option before in-person meeting</li>
                </ul>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4">
              <div className="font-semibold text-gray-800 mb-3">The Price Reality in 2026</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">SOMA / Hayes Valley / Castro</span>
                  <span className="font-bold text-gray-800">$2,100–$2,500/mo</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Mission / Noe Valley</span>
                  <span className="font-bold text-gray-800">$1,900–$2,300/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunset / Inner Richmond</span>
                  <span className="font-bold text-gray-800">$1,700–$2,000/mo</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">Anything under $1,500/month for a private room in SF proper = red flag. Investigate carefully before paying anything.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="font-semibold text-green-700 text-sm mb-2">Green Flags</div>
                <ul className="text-green-600 text-xs space-y-1">
                  <li>Verified ID on profile</li>
                  <li>Existing residents in the unit</li>
                  <li>Video call available</li>
                  <li>Happy to show in person first</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="font-semibold text-red-700 text-sm mb-2">Red Flags</div>
                <ul className="text-red-600 text-xs space-y-1">
                  <li>Deposit required before showing</li>
                  <li>No ID verification</li>
                  <li>Price significantly below market</li>
                  <li>Can not do in-person showing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Scam Alerts */}
          <section>
            <h2 className="text-2xl font-bold mb-5">SF-Specific Scam Alerts</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-xl p-5">
                <div className="font-bold text-red-800 mb-1">The Tenderloin Luxury Listing</div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Beautiful photos, price too good ($1,200 for a "private room"), neighborhood not mentioned or vaguely described as "Central SF." The Tenderloin has specific challenges for new arrivals who do not know the city. Verify the exact address on Google Street View before any meeting.
                </p>
              </div>
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-xl p-5">
                <div className="font-bold text-red-800 mb-1">The Castro Advance Deposit Scam</div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Verified reports in 2025: listings targeting LGBTQ-identifying renters in the Castro, with requests for advance deposits to "hold the room for a community-compatible roommate." No deposit before in-person visit at the actual unit.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 bg-orange-50 rounded-r-xl p-5">
                <div className="font-bold text-orange-800 mb-1">SoMa Micro-Unit Shell Games</div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  250 sqft units listed as "studios" at $3,200/month. Technically not a scam — but know what you are signing. Always confirm total square footage and see the unit in person. 250 sqft is smaller than many people imagine.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-purple-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Find Your Verified SF Roommate</h2>
            <p className="text-purple-200 mb-6 text-lg">
              ID-verified profiles. Free messaging. No subscription. Bay Area-specific search.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Get Early Access &rarr;
            </a>
            <p className="text-purple-300 text-sm mt-3">Free. No credit card. No subscription.</p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left px-5 py-4 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="text-gray-400 text-lg ml-4 shrink-0">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
