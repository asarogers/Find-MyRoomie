"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const RENTER_GROUPS = [
  { title: "Stanford graduate and professional students", desc: "The largest cohort. Programs span 2–6 years. GSB and law school students have larger budgets than PhD students, but all are looking for someone compatible — someone who won't make a long program harder than it needs to be." },
  { title: "Postdoctoral researchers", desc: "Highly educated, often internationally trained, frequently arriving from abroad with no Bay Area network. Postdocs at Stanford earn $60,000–$75,000 — comfortable but not San Francisco money. Verified roommate matching is exactly what this group needs." },
  { title: "Sand Hill Road junior workers", desc: "Analysts and associates at VC firms on 2-year tracks. Professional, reliable, income-stable. Often prefer shared housing in Palo Alto over solo housing in Menlo Park or Redwood City." },
  { title: "Early-stage startup founders", desc: "Pre-Series A, often in the 25–32 range. Cash-conscious by necessity. Frequently the most thoughtful and considerate roommates because they understand what's at stake." },
];

const NEIGHBORHOODS = [
  { name: "Downtown Palo Alto", rent: "Premium — near Caltrain", desc: "University Ave corridor. Most walkable, best restaurants and coffee shops, Caltrain stop. Highest rents in the city. Best for Stanford GSB students and VC workers who want to be in the center of everything." },
  { name: "College Terrace", rent: "Slightly below Downtown", desc: "Immediately adjacent to Stanford's western edge. Popular with PhD students and postdocs. Quiet, walkable to campus, reasonable transit. One of the best value neighborhoods for proximity-to-campus." },
  { name: "Midtown", rent: "Mid-range for Palo Alto", desc: "Central location, less expensive than Downtown or Professorville. Bike-able to Stanford and Caltrain. The pragmatic choice for people who want the Palo Alto address without paying the full premium." },
  { name: "Professorville", rent: "Highest in Palo Alto", desc: "Historic neighborhood near downtown with preserved architecture. Premium for character and quiet. Best for: established researchers and academics with larger housing budgets." },
  { name: "East Palo Alto (border)", rent: "Most affordable nearby", desc: "Technically a separate city on the boundary. Significantly more affordable than Palo Alto proper. Transit access varies. Best for: cost-first renters who want proximity to Palo Alto without the premium." },
];

const RENT_TABLE = [
  { scenario: "Solo 2BR (Palo Alto median)", monthly: "$4,300", annual: "$51,600" },
  { scenario: "2BR split with roommate", monthly: "$2,150/person", annual: "$25,800/person" },
  { scenario: "Annual savings", monthly: "—", annual: "$25,800" },
];

const CALTRAIN = [
  { dest: "San Francisco (4th & King)", time: "55–65 minutes, Baby Bullet service available" },
  { dest: "Mountain View", time: "8 minutes" },
  { dest: "Sunnyvale", time: "13 minutes" },
  { dest: "San Jose Diridon", time: "30 minutes" },
  { dest: "Stanford campus", time: "Marguerite shuttle from the station directly to campus" },
];

const FAQS = [
  {
    q: "Is Palo Alto affordable for Stanford students?",
    a: "Not solo. Stanford PhD students on $38,000–$45,000 stipends cannot survive Palo Alto alone — the cheapest livable 1BR rents for $2,800/month. Most Stanford graduate students share. A 2BR split runs $1,900–$2,400/person versus $2,800–$3,500 solo. Even GSB students with larger budgets typically share to preserve optionality.",
  },
  {
    q: "What neighborhoods are most affordable in Palo Alto?",
    a: "East Palo Alto (technically a separate city on the border) is significantly more affordable. Within Palo Alto proper, Midtown and College Terrace are more affordable than Downtown or Professorville. The Caltrain station is walkable from downtown and College Terrace — making those neighborhoods the best value for non-car commuters.",
  },
  {
    q: "How much can I save with a roommate in Palo Alto?",
    a: "Solo 2BR in Palo Alto: $4,300/month = $51,600/year. Split with one roommate: $2,150/month = $25,800/year. Annual savings: $25,800. Over a two-year Stanford program or early-stage startup stint, that's $51,600 — enough to meaningfully impact runway or investment capacity.",
  },
];

const RELATED_CITIES = [
  { name: "Sunnyvale, CA", slug: "sunnyvale-ca", desc: "LinkedIn HQ, Apple/Google access. Lower rents than Palo Alto." },
  { name: "Santa Clara, CA", slug: "santa-clara-ca", desc: "Intel, Nvidia, AMD HQs. The heart of Silicon Valley's tech corridor." },
  { name: "San Francisco, CA", slug: "san-francisco-ca", desc: "SF median rent $3,545/mo — split it with a verified roommate and save $21K/year." },
  { name: "Oakland, CA", slug: "oakland-ca", desc: "40% lower rent than SF. Direct BART access. The smart East Bay alternative." },
];

export default function PaloAltoContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-300 rounded-full mb-6">
              <span className="w-2 h-2 bg-slate-600 rounded-full" />
              <span className="text-sm font-semibold text-slate-700">Stanford · Sand Hill Road · Caltrain — the most expensive South Bay zip</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Palo Alto Roommate Finder — Find Verified Roommates Near Stanford, Free
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The cheapest livable 1BR in Palo Alto rents for $2,800/month. A 2BR runs $3,800–$4,800. Solo 2BR = $51,600/year. <strong>Split it: $25,800/year — saving $25,800 annually.</strong>
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

        {/* Why rents don't follow logic */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why Palo Alto Rents Don't Follow Logic</h2>
            <p className="text-gray-600 mb-6">
              Palo Alto is a relatively small city — about 66,000 residents — with a rental market that punches far above its size. Three forces keep prices elevated year-round:
            </p>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-purple-400 pl-5 py-2">
                <h4 className="font-bold mb-1">Stanford University</h4>
                <p className="text-gray-600 text-sm">The main campus spans a massive footprint at the western edge of the city. Graduate students, postdoctoral researchers, MBA students from the GSB, and visiting fellows — all competing for the same limited housing stock. Many have institutional stipends that make $2,800/month manageable. That lifts the floor for everyone else.</p>
              </div>
              <div className="border-l-4 border-purple-400 pl-5 py-2">
                <h4 className="font-bold mb-1">Sand Hill Road</h4>
                <p className="text-gray-600 text-sm">The venture capital corridor that runs along Palo Alto's western edge employs thousands of analysts, associates, and founders who are too new or too careful to rent solo at Sand Hill prices. Young VC workers and startup founders in their seed stage are among the most active roommate searchers in the city.</p>
              </div>
              <div className="border-l-4 border-purple-400 pl-5 py-2">
                <h4 className="font-bold mb-1">Startup density</h4>
                <p className="text-gray-600 text-sm">Palo Alto has more active startups per square mile than almost any city in the country. Early-stage founders and employees often choose to share to preserve runway — not because they need to, but because burning $3,500/month on a solo 1BR is hard to justify at a pre-revenue company.</p>
              </div>
            </div>

            {/* Rent table */}
            <h3 className="text-2xl font-bold mb-4">Rent Reality: The Numbers That Make Sharing Obvious</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Scenario</th>
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
            <p className="text-gray-600 text-sm">Even Stanford PhD students on $38,000–$45,000 stipends cannot survive Palo Alto solo. Most share. The roommate market in this city is not a fringe behavior — it's the majority experience.</p>
          </div>
        </section>

        {/* Who's looking */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Who's Looking for Roommates in Palo Alto</h2>
            <div className="space-y-4 mb-10">
              {RENTER_GROUPS.map((g, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-gray-50">
                  <h4 className="font-bold mb-2">{g.title}</h4>
                  <p className="text-gray-600 text-sm">{g.desc}</p>
                </div>
              ))}
            </div>

            {/* Neighborhoods */}
            <h3 className="text-2xl font-bold mb-6">Palo Alto Neighborhoods</h3>
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

        {/* Caltrain */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Commute: The Caltrain Advantage</h2>
            <p className="text-gray-600 mb-6">
              Palo Alto's Caltrain station is one of the best-positioned stops on the entire Peninsula corridor. For anyone working at multiple offices — a common pattern for startup workers and consultants — Caltrain access from Palo Alto is one of the best setups in the Bay Area.
            </p>
            <div className="space-y-3 mb-8">
              {CALTRAIN.map((c, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center gap-4">
                  <div className="font-semibold text-sm">{c.dest}</div>
                  <div className="text-gray-600 text-sm text-right">{c.time}</div>
                </div>
              ))}
            </div>

            {/* Competitive market */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h3 className="font-bold text-purple-900 mb-2">Extremely Competitive — Verified Profiles Move Faster</h3>
              <p className="text-purple-800 text-sm">
                Palo Alto's rental market is competitive in a specific way: supply is genuinely constrained, demand is sustained year-round, and landlords select on creditworthiness and stability. Getting a good roommate match isn't just about finding the right person — it's about finding them quickly and moving before someone else does. Verified profiles accelerate this. When a potential roommate can see that you're who you say you are, the trust conversation is already half-done.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Most Expensive ZIP in the Bay Doesn't Have to Mean the Highest Housing Cost</h2>
            <p className="text-purple-200 mb-8">
              Join the Palo Alto waitlist before launch. Find your verified roommate now — free, no subscription, ever.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Join the Palo Alto Waitlist — Free →
            </a>
            <p className="text-purple-300 text-sm mt-3">No subscription · No paywall · Ever</p>
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
