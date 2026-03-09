"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const FAQS = [
  {
    q: "Where do most Indian and South Asian renters live in the Bay Area?",
    a: "Fremont has the highest concentration of Indian-Americans in the US (47% South Asian in some zip codes). Other key cities: Cupertino, Santa Clara, San Jose's Berryessa district, Milpitas, and Newark.",
  },
  {
    q: "Is Find MyRoomie free to use?",
    a: "Yes — messaging, browsing, and listing are all completely free. No subscription, no credit card required.",
  },
  {
    q: "What cultural filters does Find MyRoomie support?",
    a: "Dietary preferences (vegetarian/non-vegetarian households), household norms, prayer schedules, and family visit expectations — filters designed specifically for the Bay Area's South Asian renter community.",
  },
  {
    q: "Are Sulekha listings verified?",
    a: "Sulekha has real listings but zero verification. You cannot confirm the identity of the person you're messaging or whether the listing is current. Find MyRoomie verifies every profile before it goes live.",
  },
];

export default function IndianRoommateContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-300 rounded-full mb-6">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-sm font-semibold text-amber-700">Verified Desi Roommates</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Find Verified Indian Roommates in the Bay Area — Free, No Hidden Fees
            </h1>
            <div className="inline-block bg-orange-50 border border-orange-200 rounded-lg px-6 py-3 mb-6">
              <span className="text-2xl font-bold text-orange-700">540,000+</span>
              <span className="text-gray-600 ml-2">South Asian adults live in the Bay Area</span>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Sulekha has stale listings. Facebook groups have zero verification. Find MyRoomie has verified profiles, cultural filters, and free messaging — built for the Bay Area&apos;s Desi community.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find Verified Desi Roommates →
            </a>
            <p className="text-sm text-gray-400 mt-3">No credit card · No subscription · Always free</p>
          </div>
        </section>

        {/* ── Bay Area Desi Housing Reality ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Bay Area Desi Housing Reality</h2>
            <p className="text-gray-600 mb-8">
              The South Asian community in the Bay Area is not a niche demographic — it is the demographic in multiple cities.
              Understanding the geography matters when you&apos;re searching for cultural compatibility.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { city: "Fremont", detail: "47% South Asian in some zip codes — highest concentration of Indian-Americans in the US" },
                { city: "Cupertino", detail: "Majority Asian-American population; major tech company hub" },
                { city: "Santa Clara", detail: "Intel, Nvidia, AMD headquarters — dense Indian tech workforce" },
                { city: "San Jose (Berryessa)", detail: "Established South Asian neighborhood; Milpitas border proximity" },
                { city: "Milpitas", detail: "Significant Desi community; BART-accessible from Silicon Valley jobs" },
                { city: "Newark", detail: "Growing South Asian residential presence; more affordable than Fremont" },
              ].map((item, i) => (
                <div key={i} className="p-4 border border-gray-200 rounded-xl bg-white">
                  <div className="font-bold text-gray-900 mb-1">{item.city}</div>
                  <div className="text-gray-500 text-sm">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What Current Platforms Get Wrong ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What Current Platforms Get Wrong</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-red-300 bg-red-50 pl-5 py-4 pr-4 rounded-r-xl">
                <h3 className="font-bold text-lg mb-2">Sulekha</h3>
                <p className="text-gray-700">
                  Zero verification. Listings go stale — the post stays live long after the room is gone.
                  Scam operators know the platform and know it has no accountability layer. You have no way to confirm
                  the identity of the person you are messaging or whether the listing is current.
                </p>
              </div>
              <div className="border-l-4 border-red-300 bg-red-50 pl-5 py-4 pr-4 rounded-r-xl">
                <h3 className="font-bold text-lg mb-2">Bay Area Desi Facebook Groups</h3>
                <p className="text-gray-700">
                  Your post is public. Your full name is attached. There is no moderation and no verification.
                  Anyone in any country can see your housing search and target you accordingly.
                  Works only if you already have the right network — useless for first-time arrivals.
                </p>
              </div>
              <div className="border-l-4 border-red-300 bg-red-50 pl-5 py-4 pr-4 rounded-r-xl">
                <h3 className="font-bold text-lg mb-2">Craigslist</h3>
                <p className="text-gray-700">
                  Documented scam rings specifically targeting South Asian newcomers: culturally resonant fake listings,
                  deposit requests before viewing, then ghost. The same patterns repeat because there are no consequences.
                </p>
              </div>
              <div className="border-l-4 border-orange-300 bg-orange-50 pl-5 py-4 pr-4 rounded-r-xl">
                <h3 className="font-bold text-lg mb-2">WhatsApp Groups</h3>
                <p className="text-gray-700">
                  Only works if someone who is already in the right group lets you in.
                  For H-1B arrivals with no local network, this is not a platform — it is a locked door.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Cultural Compatibility ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">What Cultural Compatibility Actually Means</h2>
            <p className="text-gray-600 mb-8">
              Generic platforms give you a text box. Cultural compatibility is not a text box problem — it is a filter problem.
              Find MyRoomie supports the specific filters that matter for South Asian households in the Bay Area.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Dietary norms", desc: "Vegetarian households, no-beef households, specific cooking smells — these are real factors that text boxes don't solve." },
                { label: "Prayer schedules", desc: "5:30am prayer, incense, devotional music — knowing this upfront prevents conflict, not creates it." },
                { label: "Festival weeks", desc: "Diwali, Holi, Navratri, Eid, Onam — weeks when household norms shift significantly. Shared culture makes this a non-issue." },
                { label: "Family visits", desc: "Extended family from India for weeks or months. A roommate who shares this cultural expectation understands it without explanation." },
                { label: "Kitchen sharing", desc: "Cooking schedules, pots and pans, oil types — vegetarian households often have specific norms around shared kitchen use." },
                { label: "Household language", desc: "Telugu, Hindi, Kannada, Tamil, Punjabi — language preference is a legitimate roommate filter." },
              ].map((item, i) => (
                <div key={i} className="p-4 border border-gray-200 rounded-xl">
                  <div className="font-bold mb-1">{item.label}</div>
                  <div className="text-gray-500 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── H-1B and L-1 ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">H-1B and L-1 Newcomers: The Trust Problem</h2>
            <p className="text-gray-600 mb-6">
              Arriving on H-1B: you have a start date, you need an address, you have no US credit history,
              no local network, and no familiarity with Fremont zip codes or Cupertino commute times.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
              <p className="text-purple-800 font-medium">
                Verified profiles solve the trust problem. Bay Area-specific context solves the navigation problem.
                Both are required — one without the other leaves you exposed.
              </p>
            </div>
            <p className="text-gray-600">
              When you can&apos;t visit a room before your arrival date, verification is not optional — it is the entire product.
              Find MyRoomie verifies every profile before it goes live. You are messaging a real person at a real address.
            </p>
          </div>
        </section>

        {/* ── The Promise ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What Find MyRoomie Gives the Bay Area Desi Community</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Free messaging, always", desc: "No subscription. No Sulekha upgrade prompt. No $30/month Roomster paywall." },
                { title: "Verified profiles (no bots)", desc: "Every profile reviewed before you can contact it. The problem Sulekha refuses to solve." },
                { title: "Cultural filter support", desc: "Dietary preferences, household norms, prayer schedules, family visit expectations." },
                { title: "Bay Area specificity", desc: "We know Warm Springs BART from Irvington. We know Cupertino school districts. We know the 680 commute." },
              ].map((item, i) => (
                <div key={i} className="p-5 border border-gray-200 rounded-xl">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-amber-600 font-bold text-sm">✓</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── City Links ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Browse by City</h2>
            <div className="flex flex-wrap gap-4">
              {[
                { city: "Fremont", slug: "fremont-ca" },
                { city: "Cupertino", slug: "cupertino-ca" },
                { city: "Santa Clara", slug: "santa-clara-ca" },
              ].map((c, i) => (
                <Link
                  key={i}
                  href={`/apartments/${c.slug}/`}
                  className="px-5 py-3 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-colors font-medium text-sm"
                >
                  {c.city}, CA →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4">
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
                    <span className="text-gray-400 text-xl ml-4">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-600 border-t border-gray-100">
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Bay Area&apos;s Desi Community Deserves Better Than Sulekha</h2>
            <p className="text-purple-200 mb-8">
              Verified profiles. Cultural filters. Free messaging. Bay Area specificity.
              Find MyRoomie is built for how the South Asian community in this region actually lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
              >
                Find Verified Desi Roommates →
              </a>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-500 transition-colors border border-purple-400"
              >
                Post Your Listing Free →
              </a>
            </div>
            <p className="text-purple-300 text-sm mt-4">No credit card · No subscription · Free messaging always</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
