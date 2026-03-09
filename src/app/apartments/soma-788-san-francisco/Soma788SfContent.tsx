"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "How much is rent at SOMA 788?",
    a: "788 Harrison St, San Francisco: Studios $3,400-$4,100/month. 1BR $4,200-$5,500/month. 2BR $5,800-$7,200/month. Completed 2017, 350 units. Among SoMa's most expensive and highest-rated buildings.",
  },
  {
    q: "Is SOMA 788 on Harrison Street worth the price?",
    a: "SOMA 788 is consistently cited for genuinely responsive management — rare in SF. The building features a rooftop pool, fitness center, dog run, concierge, EV charging, and bike storage. Location is 3 blocks from BART Civic Center and 1 block from Caltrain. The premium is earned.",
  },
  {
    q: "What do residents say about 788 Harrison Street SF?",
    a: "Residents consistently note management responsiveness as above-average for SF. Common positives: well-maintained common areas, gym, rooftop pool. Common negatives: street noise from Harrison Street is real, and 2BR pricing is high even by SoMa standards.",
  },
  {
    q: "How much does a roommate reduce cost at SOMA 788?",
    a: "A 2BR at SOMA 788 runs $5,800-$7,200/month. Split two ways: $2,900-$3,600/person. Compare to a 1BR at $4,200-$5,500 solo. Sharing saves $600-$1,900/month per person — up to $22,800/year.",
  },
];

export default function Soma788SfContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-sm font-semibold text-blue-700">Premium SoMa · Rooftop Pool · Responsive Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              SOMA 788 San Francisco — Premium Positioning, Real Resident Data (2026)
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              788 Harrison Street is one of SoMa&apos;s most consistently well-reviewed luxury buildings. 1BR from $4,200/month. Here is what residents actually say — and the roommate math.
            </p>
          </div>
        </section>

        {/* Fact box */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-900 font-semibold text-lg leading-relaxed">
                788 Harrison St, SoMa SF — 350-unit luxury tower, completed 2017. Studios: $3,400-$4,100/month. 1BR: $4,200-$5,500/month. 2BR: $5,800-$7,200/month. Rooftop pool, concierge, EV charging, dog run. 1 block from Caltrain, 3 blocks from BART.
              </p>
            </div>
          </div>
        </section>

        {/* What Sets It Apart */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Sets SOMA 788 Apart in a Competitive Market</h2>
            <p className="text-gray-600 mb-4">
              SoMa has more luxury apartment buildings per square mile than almost anywhere in the Bay Area. Most of them charge similar rents. What separates SOMA 788 is not amenities — it is management.
            </p>
            <p className="text-gray-600 mb-4">
              Responsive management is the single most-cited differentiator in SF rental reviews, because it is so rare. Buildings that charge $4,000-$7,000/month routinely deliver slow maintenance responses, impersonal leasing offices, and annual rent hikes without corresponding service improvements. SOMA 788 breaks from this pattern according to a consistent body of resident feedback.
            </p>
            <div className="space-y-3 mt-6">
              {[
                { label: "Address", value: "788 Harrison Street, SoMa SF" },
                { label: "Year completed", value: "2017" },
                { label: "Total units", value: "350" },
                { label: "Distance to Caltrain (4th/King)", value: "1 block" },
                { label: "Distance to BART (Civic Center)", value: "3 blocks" },
                { label: "Nearby employers", value: "Salesforce, Dropbox, Twitter/X, GitHub" },
                { label: "Amenities", value: "Rooftop pool, fitness center, dog run, concierge, EV charging, bike repair" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">{row.label}</span>
                  <span className="font-semibold text-gray-900 text-right ml-4">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Residents Say */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Residents Actually Say</h2>
            <div className="space-y-4">
              {[
                { icon: "✓", color: "text-green-600", heading: "Management responsiveness — consistently above average.", detail: "The most repeated positive across review platforms. Maintenance requests are handled promptly. Leasing office is described as professional and accessible." },
                { icon: "✓", color: "text-green-600", heading: "Well-maintained common areas.", detail: "Rooftop pool, gym, and lobby are described as clean and regularly maintained. This holds across reviews spanning multiple years." },
                { icon: "✓", color: "text-green-600", heading: "Location is the building's strongest card.", detail: "One block from Caltrain, 3 from BART Civic Center. SoMa's major tech employers within walking distance. Bike storage and repair station support car-free living." },
                { icon: "!", color: "text-amber-500", heading: "Harrison Street noise is real.", detail: "Harrison Street is a major thoroughfare. Units on the street-facing side will experience vehicle noise. Ask about building orientation before committing." },
                { icon: "!", color: "text-amber-500", heading: "Price even for shared living.", detail: "A 2BR roommate split at $2,900-$3,600/person is among SoMa's most expensive shared options. The quality justifies it — but it remains premium by any Bay Area standard." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className={`${item.color} font-bold mt-0.5 flex-shrink-0`}>{item.icon}</span>
                  <div>
                    <span className="font-semibold">{item.heading}</span>{" "}
                    <span className="text-gray-600">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roommate Math */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Roommate Math at SOMA 788</h2>
            <p className="text-gray-600 mb-6">
              SF median rent hit $3,545/month in December 2025 — up 12% year-over-year. SOMA 788 is above median. Here is how the numbers change with a roommate:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-red-900 mb-4 text-lg">Solo — 1BR</h3>
                <div className="space-y-2 text-red-800">
                  <div className="flex justify-between"><span>Monthly rent</span><span className="font-bold">$4,200–$5,500</span></div>
                  <div className="flex justify-between"><span>Annual</span><span className="font-bold">$50,400–$66,000</span></div>
                  <div className="flex justify-between"><span>Income required (3x)</span><span className="font-bold">$168K–$220K/yr</span></div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-4 text-lg">Shared — 2BR split</h3>
                <div className="space-y-2 text-green-800">
                  <div className="flex justify-between"><span>Per-person monthly</span><span className="font-bold">$2,900–$3,600</span></div>
                  <div className="flex justify-between"><span>Per-person annual</span><span className="font-bold">$34,800–$43,200</span></div>
                  <div className="flex justify-between"><span>Income required (3x)</span><span className="font-bold">$116K–$144K/yr</span></div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <p className="text-green-900 font-bold text-xl">Save up to $22,800/year with a verified roommate</p>
              <p className="text-green-700 mt-1">At one of SoMa&apos;s best-managed buildings.</p>
            </div>
          </div>
        </section>

        {/* CTA mid-page */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-purple-900 font-semibold mb-2 text-lg">
                Find a verified roommate at SOMA 788 — free, no subscription
              </p>
              <p className="text-purple-700 mb-5">
                SF median rent is $3,545/month and rising. A roommate at SOMA 788 puts you at $2,900-$3,600/person in one of SoMa&apos;s best buildings.
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-700 transition-colors"
              >
                Find Roommates at SOMA 788 →
              </a>
              <p className="text-sm text-purple-400 mt-3">Free · No subscription · Verified profiles</p>
            </div>
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
                    className="w-full text-left p-5 font-semibold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="text-gray-400 ml-4">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-600">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find Verified Roommates at SOMA 788 SF</h2>
            <p className="text-purple-200 mb-8">
              One of SoMa&apos;s best-managed buildings. 1 block from Caltrain. Rooftop pool. A roommate brings per-person cost to $2,900-$3,600/month. Find MyRoomie is free — no Roomster paywall, no subscription.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Find Roommates in SoMa SF →
            </a>
            <p className="text-purple-300 mt-4 text-sm">Free messaging. No subscription. Ever.</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
