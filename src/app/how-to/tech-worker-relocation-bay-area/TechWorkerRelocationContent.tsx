"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const companyNeighborhoods = [
  { company: "Google", location: "Mountain View", neighborhoods: "Mountain View, Sunnyvale, N. San Jose", rent: "$1,100–$1,600/mo" },
  { company: "Apple", location: "Cupertino", neighborhoods: "Sunnyvale, Cupertino, Santa Clara", rent: "$1,100–$1,500/mo" },
  { company: "Meta", location: "Menlo Park", neighborhoods: "Palo Alto, Redwood City", rent: "$1,500–$2,000/mo" },
  { company: "Salesforce", location: "SF", neighborhoods: "SOMA, Hayes Valley, Mission", rent: "$1,900–$2,600/mo" },
  { company: "Stripe", location: "SF", neighborhoods: "SOMA, Mission", rent: "$1,900–$2,400/mo" },
  { company: "Cisco", location: "San Jose", neighborhoods: "N. San Jose, Milpitas", rent: "$900–$1,400/mo" },
  { company: "LinkedIn", location: "Sunnyvale", neighborhoods: "Sunnyvale, Mountain View", rent: "$1,100–$1,500/mo" },
];

const timeline = [
  {
    time: "90 days before start",
    title: "Create your profile",
    desc: "Set up a verified Find MyRoomie profile. Start browsing Bay Area listings in your target neighborhood. Get a sense of who is looking and what rooms are available at your target price point.",
  },
  {
    time: "60 days out",
    title: "Start real conversations",
    desc: "Message 5–10 verified profiles in your target neighborhood. This is not commitment — it is screening. Video call 2–3 candidates who seem promising. Look for compatibility on schedule, cleanliness, guests, and noise.",
  },
  {
    time: "45 days out",
    title: "Narrow to finalists",
    desc: "Identify 1–2 strong candidates. Schedule your pre-start relocation trip to the Bay Area. See the actual apartment in person — never sign based on photos alone. Walk the neighborhood at different times.",
  },
  {
    time: "30 days out",
    title: "Finalize and sign",
    desc: "Commit to your roommate and apartment. Sign the lease. Arrange movers. You now start your job with housing fully sorted — no scrambling, no overpaying.",
  },
  {
    time: "Move-in day",
    title: "Start work with housing done",
    desc: "Zero distraction. All your cognitive load goes into onboarding, not apartment hunting. The $13,800 in first-6-month savings is already locked in.",
  },
];

const faqs = [
  {
    q: "How do I find a roommate in the Bay Area before I move?",
    a: "Start 90 days before your start date. Create a verified profile on Find MyRoomie — Bay Area-specific, free messaging, ID-verified. Message 5–10 profiles in your target neighborhood 60 days out. Video call 2–3 candidates, then schedule an in-person visit during your pre-start relocation trip 45 days out. Finalize 30 days before your start date.",
  },
  {
    q: "What neighborhood should I live in if I work at Google?",
    a: "Google's main campus is in Mountain View. The best neighborhoods are Mountain View itself, Sunnyvale, or North San Jose — all within easy commute on Google's shuttle routes. Shared rooms in these areas run $1,100–$1,600/month, significantly cheaper than SF proper.",
  },
  {
    q: "How much does a tech worker need to earn to live in San Francisco?",
    a: "Solo in SF requires roughly $142,000–$162,000/year depending on neighborhood, using the standard 3x rent rule. With a roommate sharing a 2BR, the income requirement drops to $79,000–$90,000/year in most SF neighborhoods. South Bay tech workers face lower rents: $1,100–$1,600/month for a shared room, requiring $40,000–$58,000/year.",
  },
  {
    q: "What is the best way to relocate to the Bay Area?",
    a: "The roommate-first strategy consistently outperforms the solo approach. Find your roommate before you move, target a neighborhood based on your office location, and use month 1 of any employer corporate housing to finalize your permanent situation. Arriving with housing already sorted eliminates the $13,800+ first-6-months premium of going solo.",
  },
];

export default function TechWorkerRelocationContent() {
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
            <div className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Bay Area Relocation — Tech Workers
            </div>
            <h1 className="text-4xl font-extrabold mb-5 leading-tight">
              Tech Worker Bay Area Relocation Guide — Find a Roommate Before You Move
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Most tech workers relocating to the Bay Area make the same expensive mistake: they move without a roommate, pay $4,500/month solo for 3–6 months, then scramble when the numbers stop working. The fix is simple — and it saves over $13,000 in your first six months.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-red-700 font-medium">
                Solo 6 months: $27,000
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-green-700 font-medium">
                Roommate-first 6 months: $13,200
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg px-4 py-2 text-purple-700 font-medium">
                Difference: $13,800 saved
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-12 space-y-14">

          {/* The Mistake */}
          <section>
            <h2 className="text-2xl font-bold mb-4">The Relocation Mistake Most Tech Workers Make</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Arriving in the Bay Area without a roommate means renting a solo 1BR in SF at $4,500/month (SOMA is the common landing spot for SF-based roles). After 6 months of figuring things out — job, commute, social life — the housing cost has already extracted $27,000 from your finances.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Compare that to a 2BR split: $2,200/month in the same SOMA neighborhood. Six months = $13,200. The difference is <strong>$13,800</strong> — in the first six months alone.
            </p>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-gray-500 text-sm mb-1">Solo route — 6 months</div>
                  <div className="text-3xl font-extrabold text-red-600">$27,000</div>
                  <div className="text-xs text-gray-400 mt-1">$4,500/mo × 6</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm mb-1">Roommate-first — 6 months</div>
                  <div className="text-3xl font-extrabold text-green-600">$13,200</div>
                  <div className="text-xs text-gray-400 mt-1">$2,200/mo × 6</div>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="text-2xl font-bold mb-6">The Roommate-First Relocation Timeline</h2>
            <div className="space-y-4">
              {timeline.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    {i < timeline.length - 1 && <div className="w-0.5 bg-purple-200 flex-1 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <div className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-0.5">{step.time}</div>
                    <div className="font-bold text-gray-800 mb-1">{step.title}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* By Company */}
          <section>
            <h2 className="text-2xl font-bold mb-4">By Company Location — Where to Target Your Search</h2>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Your office location should drive your neighborhood choice. Commuting from SF to Mountain View is doable via Caltrain + shuttle — but adds 90+ minutes daily. Living near your office is worth it.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Company</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Office</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Target Neighborhoods</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700">Shared Room</th>
                  </tr>
                </thead>
                <tbody>
                  {companyNeighborhoods.map((row, i) => (
                    <tr key={row.company} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-semibold">{row.company}</td>
                      <td className="px-4 py-3 text-gray-500">{row.location}</td>
                      <td className="px-4 py-3 text-gray-700">{row.neighborhoods}</td>
                      <td className="px-4 py-3 text-right font-medium text-green-700">{row.rent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Corporate Housing Trap */}
          <section>
            <h2 className="text-2xl font-bold mb-4">The Corporate Housing Trap</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many employers offer 30–60 days of corporate housing — typically extended-stay hotels at $180–$250/night. That is $5,400–$15,000 for a month or two of temporary accommodation. It buys time, but it is expensive.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The trap: new employees use corporate housing as a reason to delay their roommate search. "I have housing for now, I'll figure it out later." Then the corporate housing ends, they are under pressure, and they sign the first thing available — usually solo, usually overpriced.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div className="font-semibold text-blue-800 mb-2">Best use of corporate housing:</div>
              <div className="text-gray-700 text-sm leading-relaxed">
                Use month 1 in corporate housing <em>while actively searching</em> for your permanent roommate situation. You have a stable base, no urgency, and full negotiating leverage. This is the optimal combination. By day 30, you should have a signed lease ready for when corporate housing ends.
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-purple-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Start Your Bay Area Roommate Search</h2>
            <p className="text-purple-200 mb-6 text-lg">
              Verified profiles. Free messaging. Bay Area-specific. Start 90 days before your move date.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Get Early Access &rarr;
            </a>
            <p className="text-purple-300 text-sm mt-3">Free. No subscription. No credit card.</p>
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
