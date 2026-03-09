"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NEIGHBORHOODS = [
  { name: "South De Anza / Wolfe Road", desc: "Closest to Apple Park", detail: "5–15 minute bike ride to Apple Park. Most Apple employees who live in Cupertino cluster here. Premium for proximity — expect top-of-range rents, but eliminating a commute has real value." },
  { name: "Homestead", desc: "Slightly lower rents", detail: "North Cupertino, bordering Santa Clara. Marginally lower rent than De Anza corridor. Good access to Apple shuttle network. Popular with De Anza College students and early-career engineers." },
  { name: "Monta Vista", desc: "Highest prices, best schools", detail: "Commands the highest rents in Cupertino due to school district premium. If you don't have school-age children, the extra cost rarely pays off — nearby Homestead offers similar access at lower rent." },
  { name: "De Anza College Area", desc: "Student-friendly pricing", detail: "Around De Anza Blvd and Stelling Road. Most active roommate market in Cupertino. International students on transfer track to UC schools. Cost-conscious, serious renters who make reliable roommates." },
];

const RENT_TABLE = [
  { scenario: "1BR near Apple Park, alone", monthly: "$3,800–$4,500", annual: "$45,600–$54,000" },
  { scenario: "Share a 2BR, split evenly", monthly: "$2,100–$2,500", annual: "$25,200–$30,000" },
  { scenario: "Annual savings", monthly: "—", annual: "$15,600–$24,000" },
];

const FAQS = [
  {
    q: "Is Cupertino expensive for roommates?",
    a: "Yes — but 2BR splits run $2,100–2,500/person vs $3,800+ solo. Apple engineers often prefer to keep large portions of their income invested. A roommate is standard practice.",
  },
  {
    q: "What neighborhoods are near Apple Park in Cupertino?",
    a: "The South De Anza corridor and areas near Wolfe Road are closest to Apple Park with a 5–15 minute bike ride. Homestead has slightly lower rents. Monta Vista commands the highest prices due to the school district premium. Most Apple employees use the internal shuttle network, so exact proximity matters less than being on a shuttle route.",
  },
  {
    q: "Who are the typical roommates in Cupertino?",
    a: "Three groups: Apple employees — especially new transfers and incoming engineers from abroad who have no local network. De Anza College students — serious, often international, cost-conscious, using De Anza as a transfer pipeline to UC schools. And Monta Vista homeowners subletting rooms to working professionals, which is one of the best-value pockets in the city.",
  },
  {
    q: "How much does Find MyRoomie cost?",
    a: "Find MyRoomie is completely free. No subscription, no credit card, no paywall to message anyone. Unlike Roomster, which charges $29.99/month to access messaging, Find MyRoomie is free to browse, post, and contact verified roommates.",
  },
];

const RELATED_CITIES = [
  { name: "Sunnyvale, CA", slug: "sunnyvale-ca", desc: "LinkedIn HQ corridor. Caltrain access. Lower rents than Cupertino." },
  { name: "Santa Clara, CA", slug: "santa-clara-ca", desc: "Intel, Nvidia, AMD all within 2 miles. Strong tech roommate market." },
  { name: "Palo Alto, CA", slug: "palo-alto-ca", desc: "Stanford, Sand Hill Road. The most expensive peninsula zip." },
  { name: "San Francisco, CA", slug: "san-francisco-ca", desc: "Tech hub with Caltrain access. Verified roommates across every neighborhood." },
];

export default function CupertinoContent() {
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
              <span className="text-sm font-semibold text-amber-700">Apple Park drives one of the Bay Area's most active roommate markets</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Find a Roommate in Cupertino — Apple Campus, Verified, Free
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A 1BR near Apple Park runs $3,800–$4,500/month. Split a 2BR with a verified roommate and you're paying <strong>$2,100–$2,500/month</strong> — saving up to $24,000/year while staying two miles from campus.
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

        {/* Cupertino Rental Reality */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Cupertino Rental Reality</h2>
            <p className="text-gray-600 mb-6">
              Cupertino is the most expensive city in Silicon Valley that isn't Palo Alto. Apple Park's 12,000+ on-site employees have pushed rents in a two-mile radius to levels that rival San Francisco's most sought-after neighborhoods. A standard 1BR near De Anza Blvd runs $3,800–$4,500/month. A 2BR with parking runs $4,200–$5,000.
            </p>
            <p className="text-gray-600 mb-8">
              Even on a $200,000+ total compensation package, the math is straightforward: split a 2BR with a verified roommate and you pay $2,100–$2,500/month instead of $3,800+ alone. Most Apple engineers running that calculation choose to share. The savings compound — $15,000–$24,000 per year goes into ESPP, 401(k), or simply stays liquid.
            </p>
            <p className="text-gray-600 mb-8">
              DeAnza College adds a second distinct renter population: serious international students using De Anza as a transfer pipeline to UC schools. They are cost-conscious, reliable, and looking for roommates who are quiet and studious. Find MyRoomie's compatibility filtering matters more here than in most Bay Area cities.
            </p>

            <h3 className="text-2xl font-bold mb-6">Cupertino Neighborhoods</h3>
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

        {/* Why platforms are failing Cupertino renters */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why Roomster and Craigslist Fail Cupertino Renters</h2>
            <p className="text-gray-600 mb-6">
              Cupertino's tech-heavy renter population is exactly the demographic Roomster targets with its $29.99/month subscription paywall. You land on the platform, see listings near Apple Park, try to message someone — and hit the paywall. You have no idea if the listing is real, current, or bot-generated before paying.
            </p>
            <p className="text-gray-600 mb-6">
              The FTC and New York AG reached a $1.6M settlement with Roomster in 2023 over fake listings and fabricated reviews. Craigslist South Bay is worse — wire-transfer scams targeting engineers on H-1B status are documented in multiple Silicon Valley Reddit communities.
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
            <h2 className="text-3xl font-bold mb-4">Cupertino Rent Math</h2>
            <p className="text-gray-600 mb-8">
              Here is exactly what a verified roommate is worth near Apple Park.
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
              Up to $24,000/year back. For an Apple engineer with ESPP and RSUs vesting on a four-year schedule, that is additional capital that can compound rather than disappear into rent.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Get Early Access — Free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. Members who join now get first access to verified roommate listings in Cupertino, De Anza, Homestead, and Monta Vista — before the platform opens to the public.
            </p>
            <ul className="text-purple-200 text-sm mb-8 space-y-1">
              <li>✓ Priority matching before the platform goes public</li>
              <li>✓ Free messaging — permanently, no subscription tier required</li>
              <li>✓ Set proximity-to-Apple-Park and compatibility filters now</li>
            </ul>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Join the Verified Cupertino Waitlist — Free →
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
