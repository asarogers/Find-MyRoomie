"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const faqs = [
  {
    q: "Can I rent an apartment in the Bay Area on an H1B visa?",
    a: "Yes. H1B visa status does not prevent you from renting. The challenge is that many landlords require 700+ credit score or 12 months of US credit history. The most effective workarounds are: higher deposit (2x–3x) in lieu of credit score, offer letter + bank statements from your home country as income proof, or joining an established roommate household where existing tenants are already credit-cleared and you sublease informally.",
  },
  {
    q: "How do I rent without US credit history?",
    a: "Three approaches work in the Bay Area: (1) Offer 2x–3x deposit to offset landlord risk — many will accept this. (2) Provide your employment offer letter plus 3–6 months of home-country bank statements showing savings. (3) Join a verified roommate household where the existing tenants hold the master lease — you are added as a subletter, avoiding the credit check entirely.",
  },
  {
    q: "What is the best neighborhood for H1B workers in the Bay Area?",
    a: "The strongest H1B community in the Bay Area is in North San Jose and Milpitas. This area has the highest concentration of tech workers on H1B status, extensive month-to-month furnished room options, and community-aware matching. It is also close to major tech employers: Cisco, Intel, and Samsung. If your office is in SF, SOMA and the Mission have active H1B communities as well.",
  },
  {
    q: "How much should I budget for housing on a new H1B?",
    a: "For months 1–3 on H1B, budget $1,200–$1,800/month all-in for a furnished room with utilities and wifi included. This premium covers the flexibility of month-to-month arrangements. After month 3, with 3 pay stubs establishing US income documentation, you can transition to a standard lease at $1,100–$1,600/month (South Bay) or $1,900–$2,400/month (SF). Set aside 2–3 months rent as deposit buffer for the first lease application.",
  },
];

export default function H1bVisaBayAreaContent() {
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
            <div className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              H1B Housing Guide — Bay Area 2026
            </div>
            <h1 className="text-4xl font-extrabold mb-5 leading-tight">
              H1B Visa Bay Area Housing Guide 2026 — Roommates, Verification & What to Know
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              H1B holders face a specific set of housing challenges that generic guides do not address: no US credit history, first-paycheck delays, 3-year visa uncertainty, and landlords who do not know how to evaluate international income documentation. Here is the complete 2026 playbook.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-red-700 font-medium">No US credit history</div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-2 text-yellow-700 font-medium">Income verification gaps</div>
              <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-green-700 font-medium">Roommate path works</div>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-12 space-y-14">

          {/* The 5 Challenges */}
          <section>
            <h2 className="text-2xl font-bold mb-6">The 5 Specific H1B Housing Challenges</h2>
            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "No US Credit History",
                  desc: "Most Bay Area landlords require a 700+ credit score or 12 months of US credit history. New H1B arrivals have neither. This disqualifies you from most standard apartment applications outright.",
                },
                {
                  num: "2",
                  title: "First Paycheck Delay",
                  desc: "Many H1B workers arrive before their first US paycheck. Landlords want 3 recent pay stubs. You may have zero. An offer letter helps but is not universally accepted.",
                },
                {
                  num: "3",
                  title: "Short Initial Stay Uncertainty",
                  desc: "A 3-year H1B creates nervousness about signing 12-month leases. Some landlords are reluctant. Some landlords specifically ask about visa expiry dates.",
                },
                {
                  num: "4",
                  title: "Income Documentation Format",
                  desc: "Your income exists — it is just in a form US landlords may not recognize. Home-country bank statements, international wire history, and foreign employer letters are harder for landlords to evaluate.",
                },
                {
                  num: "5",
                  title: "Cultural Household Compatibility",
                  desc: "Many H1B workers have specific preferences around food preparation, household culture, and shared space use. Generic roommate platforms do not support nuanced compatibility matching.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 border border-gray-200 rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0 text-sm">
                    {item.num}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 mb-1">{item.title}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Credit History Workarounds */}
          <section>
            <h2 className="text-2xl font-bold mb-5">Credit History Workarounds That Actually Work</h2>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <div className="font-semibold text-green-800 mb-2">Higher Deposit</div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Offering 2x or 3x deposit in lieu of credit history is accepted by many Bay Area landlords, especially in the South Bay. Frame it explicitly in your application: "I am a new H1B holder without US credit history. I am offering 3 months deposit to offset credit risk." This works more often than people expect.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <div className="font-semibold text-blue-800 mb-2">Offer Letter + Bank Statements</div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Your employment offer letter establishes income. Pair it with 3–6 months of home-country bank statements showing savings. Bay Area landlords — especially in Indian-American, Chinese-American, and Korean-American communities common in the South Bay — are familiar with this combination.
                </p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                <div className="font-semibold text-yellow-800 mb-2">Co-Signer</div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  If you have a US-based professional contact (colleague, former professor, sponsor) willing to co-sign, this fully resolves the credit issue for most landlords. A co-signer accepts responsibility for rent if you default — a significant ask, but possible in some professional networks.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <div className="font-semibold text-purple-800 mb-2">Join a Verified Roommate Household (Best Path)</div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  When you join an established roommate household, existing tenants already passed the credit check. You are added as a subletter or informal addition. No direct landlord credit check required. Find MyRoomie's ID verification reduces the risk perception for households accepting a new roommate — your verified identity substitutes for traditional landlord screening.
                </p>
              </div>
            </div>
          </section>

          {/* The 3-Phase Path */}
          <section>
            <h2 className="text-2xl font-bold mb-5">The 3-Phase H1B Housing Path</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phase 1</div>
                  <div className="font-bold text-gray-800">Months 1–3: Flexible furnished room</div>
                </div>
                <div className="px-5 py-4">
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Accept the premium for flexibility. Week-to-week or month-to-month furnished rooms, utilities and wifi included. You have no pay stubs yet and you need to learn the city.
                  </p>
                  <div className="bg-gray-50 rounded-lg px-4 py-3 text-sm">
                    <span className="font-semibold">Budget:</span> <span className="text-gray-700">$1,200–$1,800/month all-in</span>
                    <span className="text-gray-400 ml-2">(higher than standard, but flexible)</span>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phase 2</div>
                  <div className="font-bold text-gray-800">Months 3–6: Standard lease eligible</div>
                </div>
                <div className="px-5 py-4">
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    After your first 3 pay stubs, you have US income documentation. Now you can negotiate a standard 12-month lease or join a verified roommate household on normal terms. Your credit score is still building, but income documentation solves most landlord concerns.
                  </p>
                  <div className="bg-gray-50 rounded-lg px-4 py-3 text-sm">
                    <span className="font-semibold">Unlock:</span> <span className="text-gray-700">Standard lease applications, roommate households, lower deposits</span>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phase 3</div>
                  <div className="font-bold text-gray-800">Month 6+: Full market access</div>
                </div>
                <div className="px-5 py-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Credit score exists (typically 650–700 after 6 months of responsible use). Standard applications become viable. You now have full market access — same as any US-based renter.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* North San Jose Community */}
          <section>
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-indigo-800 mb-3">North San Jose / Milpitas — The H1B Hub</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The strongest H1B roommate community in the Bay Area is concentrated in North San Jose and Milpitas. This is not accidental — it reflects decades of tech worker immigration patterns centered on Cisco, Intel, Samsung, and surrounding companies.
              </p>
              <ul className="text-gray-700 text-sm space-y-2">
                <li><strong>Month-to-month furnished rooms:</strong> Common and readily available. $1,100–$1,500/month.</li>
                <li><strong>Community-aware matching:</strong> Households often prefer cultural compatibility — easier to find aligned households here than anywhere else in the Bay Area.</li>
                <li><strong>Proximity to employers:</strong> Cisco (San Jose), Intel (Santa Clara), Samsung (San Jose) all within 20 minutes.</li>
                <li><strong>Landlord familiarity:</strong> Many local landlords specifically understand H1B documentation and have processed hundreds of applications from visa holders.</li>
              </ul>
            </div>
          </section>

          {/* Scam Warning */}
          <section>
            <h2 className="text-2xl font-bold mb-4">H1B-Specific Scam Warning</h2>
            <div className="border-l-4 border-red-500 bg-red-50 rounded-r-xl p-5">
              <p className="text-gray-700 leading-relaxed mb-3">
                New H1B workers are specifically targeted by advance-deposit housing scams. The pattern is consistent: "I am relocating overseas for work and cannot show the room in person. I need 2 months deposit to hold it for you. I will mail you the keys."
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                New arrivals are targeted because they have: (1) demonstrated financial resources (accepted a US job offer), (2) limited local social network to verify listings, (3) urgency to secure housing quickly.
              </p>
              <div className="bg-red-100 rounded-lg p-3 text-sm text-red-700 font-semibold">
                The rule: Never send any deposit to anyone you have not met in person at the actual property address. No exceptions. Legitimate landlords and roommates will always agree to an in-person showing before accepting money.
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-purple-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Find Your Bay Area Roommate — Free</h2>
            <p className="text-purple-200 mb-6 text-lg">
              ID-verified profiles. Free messaging. No subscription. Bay Area-specific. Works for H1B holders.
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
