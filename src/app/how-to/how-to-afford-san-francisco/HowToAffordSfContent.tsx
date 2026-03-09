"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const neighborhoods = [
  { name: "SOMA", solo: "$4,500", split: "$2,500", incomeSolo: "$162K", incomeRoommate: "$90K", savings: "$24,000" },
  { name: "Hayes Valley", solo: "$4,200", split: "$2,300", incomeSolo: "$151K", incomeRoommate: "$83K", savings: "$22,800" },
  { name: "Mission", solo: "$4,000", split: "$2,200", incomeSolo: "$144K", incomeRoommate: "$79K", savings: "$21,600" },
  { name: "Castro", solo: "$4,200", split: "$2,300", incomeSolo: "$151K", incomeRoommate: "$83K", savings: "$22,800" },
  { name: "Inner Richmond", solo: "$3,600", split: "$2,000", incomeSolo: "$130K", incomeRoommate: "$72K", savings: "$19,200" },
  { name: "Sunset", solo: "$3,400", split: "$1,900", incomeSolo: "$122K", incomeRoommate: "$68K", savings: "$18,000" },
];

const faqs = [
  {
    q: "What income do you need to live in San Francisco?",
    a: "Using the standard 3x rent rule, the SF median 1BR rent of $3,545/month (Dec 2025) requires $127,620/year gross income to qualify solo. In high-cost neighborhoods like SOMA or Hayes Valley, solo 1BRs at $4,200–$4,500/month push the requirement to $151,000–$162,000/year.",
  },
  {
    q: "How much can you save with a roommate in SF?",
    a: "Sharing a 2BR in SF saves $18,000–$24,000/year depending on neighborhood, compared to renting a 1BR solo. In SOMA, the annual savings are approximately $24,000 ($2,000/month). In the Sunset, approximately $18,000 ($1,500/month). Over two years that is $36,000–$48,000 in housing savings.",
  },
  {
    q: "What is the cheapest way to live in San Francisco?",
    a: "The most cost-effective strategy in SF is sharing a 2BR or 3BR with roommates in the Sunset or Inner Richmond neighborhoods. A shared room in the Sunset runs $1,900/month, requiring roughly $68,400/year gross income — compared to $122,400/year needed to rent a solo 1BR in the same neighborhood.",
  },
  {
    q: "Can you live in San Francisco on $70,000/year?",
    a: "Yes — with a roommate. A $70,000/year salary translates to roughly $5,833/month gross. Under the 3x rule, you qualify for roughly $1,944/month in rent. A shared room in the Sunset ($1,900/month) or Inner Richmond ($2,000/month) fits within this budget. Solo living in SF is not viable at $70,000/year.",
  },
];

export default function HowToAffordSfContent() {
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
            <div className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              SF Housing Math — 2026
            </div>
            <h1 className="text-4xl font-extrabold mb-5 leading-tight">
              How to Afford San Francisco in 2026 — The Roommate Math
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              SF median rent hit $3,545/month in December 2025 — a 12% year-over-year increase. Solo, you need $142,000+/year to qualify. With one roommate, that drops to $68,000–$90,000/year depending on your neighborhood. Here is the exact math.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-red-700 font-medium">
                Solo 1BR median: $3,545/mo
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-green-700 font-medium">
                Roommate split: from $1,900/mo
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg px-4 py-2 text-purple-700 font-medium">
                Annual savings: up to $24,000
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-12 space-y-14">

          {/* The Income Math */}
          <section>
            <h2 className="text-2xl font-bold mb-6">The Income Math: Solo vs. Roommate</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Landlords in San Francisco typically use the 3x rent rule — your gross monthly income must be at least 3x the monthly rent. Sometimes written as needing 36x monthly rent in annual income.
            </p>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <div className="font-bold text-red-800 text-lg mb-2">Solo — SF Median 1BR</div>
                <div className="text-gray-700 space-y-1 text-sm">
                  <div>Median rent (Dec 2025): <span className="font-bold">$3,545/month</span></div>
                  <div>3x rule: $3,545 × 36 = <span className="font-bold text-red-700">$127,620/year gross required</span></div>
                  <div className="text-xs text-gray-500 mt-1">Top SF neighborhoods (SOMA, Hayes Valley) push this to $151K–$162K/year</div>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                <div className="font-bold text-yellow-800 text-lg mb-2">With Roommate — 2BR Split at $5,000/month</div>
                <div className="text-gray-700 space-y-1 text-sm">
                  <div>Your share: $2,500/month</div>
                  <div>3x rule: $2,500 × 36 = <span className="font-bold text-yellow-700">$90,000/year gross required</span></div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <div className="font-bold text-green-800 text-lg mb-2">With Roommate — 2BR Split at $3,800/month (Sunset/Richmond)</div>
                <div className="text-gray-700 space-y-1 text-sm">
                  <div>Your share: $1,900/month</div>
                  <div>3x rule: $1,900 × 36 = <span className="font-bold text-green-700">$68,400/year gross required</span></div>
                  <div className="text-xs text-gray-500 mt-1">Income requirement drops 46% vs. solo median scenario</div>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              A roommate reduces the income requirement by <strong>32–52%</strong> depending on which neighborhood you target. That is the single highest-leverage financial decision a renter can make in San Francisco.
            </p>
          </section>

          {/* Neighborhood Table */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Neighborhood Breakdown: The Full Numbers</h2>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Rent varies significantly by SF neighborhood. The table below shows solo 1BR rent, 2BR split per person, the income required for each, and annual savings from having a roommate.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Neighborhood</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Solo 1BR</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">2BR Split</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Income Solo</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Income w/ Roommate</th>
                    <th className="text-right px-4 py-3 font-semibold text-green-700">Annual Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {neighborhoods.map((n, i) => (
                    <tr key={n.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium">{n.name}</td>
                      <td className="px-4 py-3 text-right text-red-600">{n.solo}</td>
                      <td className="px-4 py-3 text-right text-green-600">{n.split}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{n.incomeSolo}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{n.incomeRoommate}</td>
                      <td className="px-4 py-3 text-right font-bold text-green-700">{n.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">Rent figures based on Dec 2025 market data. 2BR split assumes equal share. Income = 36x monthly rent.</p>
          </section>

          {/* 3-Person Solution */}
          <section>
            <h2 className="text-2xl font-bold mb-4">The 3-Person Solution</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              For friend groups or people willing to share, a 3BR in SOMA runs $6,500–$7,500/month. Split three ways, that is $2,167–$2,500/person — income requirement drops to $78,000–$90,000/year. This is viable for recent grads or early-career tech workers who know each other and can commit to a 12-month lease together.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div className="font-semibold text-blue-800 mb-2">3BR SOMA — Three-Way Split</div>
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <div className="text-gray-500">Total Rent</div>
                  <div className="font-bold text-gray-800 text-lg">$6,500–$7,500</div>
                </div>
                <div>
                  <div className="text-gray-500">Per Person</div>
                  <div className="font-bold text-blue-700 text-lg">$2,167–$2,500</div>
                </div>
                <div>
                  <div className="text-gray-500">Income Needed</div>
                  <div className="font-bold text-green-700 text-lg">$78K–$90K</div>
                </div>
              </div>
            </div>
          </section>

          {/* The Roomster Tax */}
          <section>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-orange-800 mb-3">The Roomster Tax</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Roomster charges $30/month — $360/year — just to message people about finding a roommate. That is on top of an FTC settlement in 2023 and a current Trustpilot rating of 1.6/5. You are paying to search through listings that may not even be real.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Find MyRoomie: <strong>$0</strong>. No subscription. No messaging fee. Free messaging is not a feature — it is the baseline. Paying $360/year to find a roommate who saves you $18,000–$24,000/year is a bad deal.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-purple-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Start Saving — Find Your Roommate Free</h2>
            <p className="text-purple-200 mb-6 text-lg">
              SF roommate search. Free messaging. No subscription. Verified profiles. Bay Area-specific.
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
