"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const faqs = [
  {
    q: "When should I start my UC Berkeley roommate search?",
    a: "Start in March. The critical window for Fall 2026 Berkeley housing is March–April. Groups that form now lock in 12-month leases by May–June. Groups that wait until July compete for roughly 30% of the original available options at prices that are typically 15–20% higher, because the best units are already taken.",
  },
  {
    q: "What is average rent near UC Berkeley?",
    a: "In 2026, shared rooms near UC Berkeley run $1,600–$2,000/month in Northside and Southside neighborhoods closest to campus. Elmwood and North Berkeley are slightly more affordable at $1,400–$1,800/month. Solo studios near campus start at $2,400–$3,200/month. A roommate saves $600–$1,200/month — $7,200–$14,400/year.",
  },
  {
    q: "Is it safe to find a roommate online for Berkeley?",
    a: "On platforms with ID verification, yes. The risk is on platforms without verification — Craigslist and Facebook groups are the primary scam vectors for incoming Berkeley students. Find MyRoomie verifies identity before profiles go live, which eliminates the fake listing problem. Always video call before meeting in person, and never send any deposit before seeing the actual unit.",
  },
  {
    q: "How much can I save with a roommate near UC Berkeley?",
    a: "A Berkeley roommate saves $600–$1,200/month compared to renting solo — $7,200–$14,400/year. For grad students on a $22,000–$30,000 annual stipend, that savings represents 25–65% of total stipend income. Housing is the single highest-leverage expense to reduce.",
  },
];

export default function UcBerkeleyStudentsContent() {
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
              UC Berkeley — Fall 2026
            </div>
            <h1 className="text-4xl font-extrabold mb-5 leading-tight">
              UC Berkeley Roommate Finder — Fall 2026 Guide
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              March and April are the critical window for Berkeley Fall 2026 housing. Groups that form now lock in 12-month leases by June. Groups that wait until July compete for 30% of the original options at 20% higher prices.
            </p>
            <div className="bg-amber-50 border border-amber-300 rounded-xl px-5 py-4 text-amber-800 font-semibold text-sm">
              The window is now. Every week you wait reduces available options.
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-12 space-y-14">

          {/* Who this is for */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Who This Page Is For</h2>
            <p className="text-gray-700 mb-5 leading-relaxed">
              This guide is for anyone starting at UC Berkeley or nearby institutions in Fall 2026 who needs to secure a roommate and housing before arriving:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "UC Berkeley undergrads",
                "UC Berkeley grad students",
                "International admits (especially)",
                "UCSF students",
                "Berkeley Lab researchers",
                "Transfer students new to the area",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* Rent Reality */}
          <section>
            <h2 className="text-2xl font-bold mb-5">Berkeley Rent Reality — 2026 Numbers</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Location</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Shared Room</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Solo Studio</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { area: "Northside / Southside (near campus)", shared: "$1,600–$2,000", solo: "$2,800–$3,200" },
                    { area: "Elmwood / South Berkeley", shared: "$1,400–$1,700", solo: "$2,400–$2,800" },
                    { area: "North Berkeley / Gourmet Ghetto", shared: "$1,500–$1,800", solo: "$2,600–$3,000" },
                    { area: "Downtown Berkeley / Telegraph", shared: "$1,500–$1,900", solo: "$2,400–$2,900" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-gray-700">{row.area}</td>
                      <td className="px-4 py-3 text-right font-bold text-green-700">{row.shared}</td>
                      <td className="px-4 py-3 text-right text-red-600">{row.solo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="font-semibold text-green-800 mb-2">The Roommate Savings Calculation</div>
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <div className="text-gray-500">Monthly savings</div>
                  <div className="font-bold text-green-700 text-xl">$600–$1,200</div>
                </div>
                <div>
                  <div className="text-gray-500">Annual savings</div>
                  <div className="font-bold text-green-700 text-xl">$7,200–$14,400</div>
                </div>
                <div>
                  <div className="text-gray-500">4-year savings</div>
                  <div className="font-bold text-green-700 text-xl">$28K–$57K</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">For grad students on $22K–$30K stipends, this is 25–65% of total annual income.</p>
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="text-2xl font-bold mb-5">The Berkeley Housing Timeline</h2>
            <div className="space-y-3">
              {[
                { month: "March–April", status: "NOW", statusColor: "bg-green-500", desc: "Best inventory available. Groups forming. 12-month leases signed for Fall start. This is the window." },
                { month: "May–June", status: "GOOD", statusColor: "bg-yellow-500", desc: "Still reasonable options. Some top units already gone. Prices starting to firm up. Act quickly." },
                { month: "July", status: "LATE", statusColor: "bg-orange-500", desc: "30% of original inventory remains. Prices 15–20% higher. Competition is fierce. You will make compromises." },
                { month: "August", status: "CRITICAL", statusColor: "bg-red-500", desc: "Emergency mode. Whatever is left. Often overpriced, far from campus, or both." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 border border-gray-200 rounded-xl p-4">
                  <div className={`${item.statusColor} text-white text-xs font-bold px-2 py-1 rounded shrink-0 mt-0.5`}>{item.status}</div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{item.month}</div>
                    <p className="text-gray-600 text-sm leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Scam Warning */}
          <section>
            <div className="border-l-4 border-red-500 bg-red-50 rounded-r-xl p-6">
              <h2 className="text-xl font-bold text-red-800 mb-3">The Berkeley Incoming Student Scam</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Incoming Berkeley students are specifically targeted in February–April because: you are new to the area, you cannot easily verify listings in person, and you are under time pressure to secure housing before arrival.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                The pattern: "First month + last month + security deposit" required upfront before showing the room. Common in Facebook groups ("UC Berkeley Housing 2026") and Craigslist. The listing disappears after you send money.
              </p>
              <div className="bg-red-100 rounded-lg p-3 text-sm text-red-700 font-semibold">
                Find MyRoomie's ID verification eliminates this risk. Every profile is verified before going live. Never send any deposit without an in-person visit at the actual unit.
              </div>
            </div>
          </section>

          {/* Platform Comparison */}
          <section>
            <h2 className="text-2xl font-bold mb-5">Platform Comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Platform</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Cost</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">ID Verified</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Bay Area Focus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-purple-50 border-b border-purple-100">
                    <td className="px-4 py-3 font-bold text-purple-700">Find MyRoomie</td>
                    <td className="px-4 py-3 text-center font-bold text-green-600">Free</td>
                    <td className="px-4 py-3 text-center text-green-600">Yes</td>
                    <td className="px-4 py-3 text-center text-green-600">Yes</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-gray-700">Roomster</td>
                    <td className="px-4 py-3 text-center text-red-600 font-medium">$30/mo</td>
                    <td className="px-4 py-3 text-center text-gray-400">Partial</td>
                    <td className="px-4 py-3 text-center text-gray-400">No</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-gray-700">Craigslist</td>
                    <td className="px-4 py-3 text-center text-green-600">Free</td>
                    <td className="px-4 py-3 text-center text-red-600">No</td>
                    <td className="px-4 py-3 text-center text-gray-400">No</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Facebook Groups</td>
                    <td className="px-4 py-3 text-center text-green-600">Free</td>
                    <td className="px-4 py-3 text-center text-red-600">No</td>
                    <td className="px-4 py-3 text-center text-gray-400">Partial</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">Roomster: FTC settlement 2023. Trustpilot 1.6/5.</p>
          </section>

          {/* CTA */}
          <section className="bg-purple-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Join Find MyRoomie — Find Your Berkeley Roommate Free</h2>
            <p className="text-purple-200 mb-2 text-lg">
              The window is now. March–April groups lock in Fall 2026 housing.
            </p>
            <p className="text-purple-300 mb-6 text-sm">Free messaging. ID verified. No Roomster paywall.</p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Get Early Access &rarr;
            </a>
            <p className="text-purple-300 text-sm mt-3">Free. No credit card. No subscription. Ever.</p>
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
