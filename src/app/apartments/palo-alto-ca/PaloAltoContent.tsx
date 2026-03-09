"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const NEIGHBORHOODS = [
  { name: "Downtown Palo Alto", desc: "1BR $4,500–$5,200/mo", detail: "University Ave corridor. Walking distance to Caltrain, Cal Ave restaurants, and Stanford Research Park. The highest-rent pocket in the city and the most competitive roommate market." },
  { name: "Midtown", desc: "1BR $3,900–$4,500/mo", detail: "More residential, slightly lower rents than downtown. Popular with Stanford staff and mid-career professionals. Good walkability, quieter streets." },
  { name: "Crescent Park", desc: "1BR $4,200–$5,000/mo", detail: "North Palo Alto, adjacent to Menlo Park. High-end residential. Typically single-family home sublets and larger shared houses. Rare apartment inventory." },
  { name: "College Terrace / Stanford Adjacent", desc: "Highest demand, fastest turnover", detail: "Closest residential neighborhood to Stanford's main campus. Graduate students, post-docs, visiting scholars. Units go fast — roommate searches start months in advance here." },
  { name: "California Avenue", desc: "1BR $3,800–$4,400/mo", detail: "Cal Ave district has become a secondary hub with a strong restaurant scene. Slightly less expensive than University Ave downtown. Caltrain stop at Cal Ave station." },
];

const RENT_TABLE = [
  { scenario: "1BR in Palo Alto, alone", monthly: "$4,200+", annual: "$50,400+" },
  { scenario: "Share a 2BR, split evenly", monthly: "$2,300–$2,600", annual: "$27,600–$31,200" },
  { scenario: "Annual savings", monthly: "—", annual: "$19,200–$22,800" },
];

const FAQS = [
  {
    q: "How expensive is Palo Alto rent?",
    a: "$4,200+/month for a 1BR. A 2BR split brings your cost to $2,300–2,600/person — saving $1,600–1,900/month vs living alone.",
  },
  {
    q: "Is Palo Alto good for Stanford students looking for roommates?",
    a: "Yes. Stanford graduate students — especially PhD students and post-docs on stipends that don't match Palo Alto rents — are the most active roommate seekers in the city. A 2BR split at $2,400/person is the standard way to afford Palo Alto on an academic salary or first-job tech compensation.",
  },
  {
    q: "How is the Caltrain commute from Palo Alto to San Francisco?",
    a: "The Palo Alto Caltrain station runs Baby Bullet express trains to San Francisco in approximately 55 minutes. It's one of the fastest Caltrain commutes on the Peninsula. Most tech workers in SF who value the Palo Alto lifestyle use this route daily.",
  },
  {
    q: "How much does Find MyRoomie cost?",
    a: "Find MyRoomie is completely free. No subscription, no credit card, no paywall to message anyone. Unlike Roomster, which charges $29.99/month to access messaging, Find MyRoomie is free to browse, post, and contact verified roommates.",
  },
];

const RELATED_CITIES = [
  { name: "Cupertino, CA", slug: "cupertino-ca", desc: "Apple Park. 1BR $3,800–4,500/mo. Strong tech roommate market." },
  { name: "Sunnyvale, CA", slug: "sunnyvale-ca", desc: "LinkedIn HQ corridor. Caltrain access. Moderately lower rents." },
  { name: "Santa Clara, CA", slug: "santa-clara-ca", desc: "Intel, Nvidia, AMD HQs. Diridon Station access." },
  { name: "San Francisco, CA", slug: "san-francisco-ca", desc: "55 min Baby Bullet from Palo Alto Caltrain. Verified SF roommates." },
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-sm font-semibold text-amber-700">Palo Alto 1BR averages $4,200+/month — highest on the Peninsula</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Find a Roommate in Palo Alto — Stanford, High Rents, Verified & Free
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Palo Alto is the most expensive city on the Peninsula. A 1BR runs $4,200+/month. Split a 2BR with a verified roommate and you're paying <strong>$2,300–$2,600/month</strong> — saving $19,000–$23,000/year while staying minutes from Stanford and Sand Hill Road.
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

        {/* Palo Alto Rental Reality */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Palo Alto Rental Reality</h2>
            <p className="text-gray-600 mb-6">
              Palo Alto is where Stanford's gravity meets Silicon Valley's capital concentration. Sand Hill Road — the VC corridor that runs west of downtown — houses more venture capital per block than anywhere else on earth. The companies those VCs fund employ engineers who need housing within commute range of Menlo Park, Mountain View, and Cupertino. Supply is structurally constrained: Palo Alto's zoning and slow-growth politics have kept new construction minimal for decades.
            </p>
            <p className="text-gray-600 mb-6">
              The result: a 1BR in downtown Palo Alto runs $4,200–$5,200/month. A 2BR runs $4,600–$6,000. Even a full-stack engineer at a Series B startup earning $180,000 base is spending 28% of gross income on housing if they live alone in a 1BR. That is why roommate-sharing is normal practice here — not just among students, but among well-compensated professionals who understand that $1,800/month in rent savings compounds meaningfully over time.
            </p>
            <p className="text-gray-600 mb-8">
              Stanford adds a consistent demand layer: graduate students, post-docs, visiting scholars, and MBA candidates arrive every September needing housing. Many have stipends that do not cover even split-2BR costs alone. The roommate market near Stanford is permanently active.
            </p>

            <h3 className="text-2xl font-bold mb-6">Palo Alto Neighborhoods</h3>
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

        {/* Why platforms are failing PA renters */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why Roomster and Craigslist Fail Palo Alto Renters</h2>
            <p className="text-gray-600 mb-6">
              Palo Alto renters are among the most financially sophisticated in the country. They are also targets. Roomster charges $29.99/month before you can message a single verified person — and the FTC's 2023 $1.6M settlement with Roomster documented that a significant portion of the listings renters paid to access were fake. That settlement involved both the FTC and the New York AG. The platform's practices have not fundamentally changed.
            </p>
            <p className="text-gray-600 mb-6">
              Craigslist in the South Bay regularly surfaces rental scams targeting H-1B workers and international students — two demographics heavily represented in Palo Alto's grad student and tech worker population. Fake listings with wire-transfer deposit requirements are documented in r/paloalto, r/stanford, and r/SFBayHousing.
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
            <h2 className="text-3xl font-bold mb-4">Palo Alto Rent Math</h2>
            <p className="text-gray-600 mb-8">
              What a verified roommate is worth in Palo Alto.
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
              Nearly $20,000/year. In Palo Alto's investment-focused culture, that difference in annual savings matters. Engineers with RSUs and ESPP participation understand that keeping more capital in-hand compounds differently than paying it to a landlord.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Get Early Access — Free</h2>
            <p className="text-purple-200 mb-4">
              Find MyRoomie is pre-launch. Members who join now get first access to verified roommate listings in Palo Alto — near Stanford, downtown, Cal Ave, and College Terrace — before the platform opens to the public.
            </p>
            <ul className="text-purple-200 text-sm mb-8 space-y-1">
              <li>✓ Priority matching before the platform goes public</li>
              <li>✓ Free messaging — permanently, no subscription tier required</li>
              <li>✓ Set Stanford proximity and lifestyle compatibility filters now</li>
            </ul>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Join the Verified Palo Alto Waitlist — Free →
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
