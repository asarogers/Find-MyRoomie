"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

type FaqItem = { q: string; a: string };

const SECTIONS: { heading: string; items: FaqItem[] }[] = [
  {
    heading: 'Pricing & Free Plan',
    items: [
      {
        q: 'Is FindMyRoomy really free?',
        a: 'Yes. Browsing, messaging, and connecting are all free. That is the founding promise. Beta members lock in free messaging permanently — even after full launch.',
      },
      {
        q: 'Will FindMyRoomy always be free?',
        a: 'Free messaging is guaranteed for life for beta testers who sign up now. The platform will stay free to use. Premium features may exist in the future, but core functionality — browsing verified profiles and messaging — will always be free for founding members.',
      },
      {
        q: 'Is there a credit card required to sign up?',
        a: 'No. No credit card, no subscription, no trial period. Sign up in 60 seconds.',
      },
    ],
  },
  {
    heading: 'vs. Competitors',
    items: [
      {
        q: 'How is FindMyRoomy different from Roomster?',
        a: 'Roomster requires $29.99/month to read or send messages. The FTC has filed a complaint against Roomster for fake reviews and fake profiles. FindMyRoomy is free to message, verifies all users, and has no paywall.',
      },
      {
        q: 'How is FindMyRoomy different from Roomi?',
        a: 'Roomi charges up to $29.99/month for Gold tier and has an 88% 1-star rating on Trustpilot and a 2.2/5 App Store rating. FindMyRoomy is free and built around verification and safety.',
      },
      {
        q: 'How is FindMyRoomy different from SpareRoom?',
        a: "SpareRoom's Early Bird paywall hides new listings behind a subscription. FindMyRoomy shows all listings to all users — no paywall, no subscription.",
      },
      {
        q: 'How is FindMyRoomy different from Craigslist?',
        a: "Craigslist has no identity verification. Scammers post fake listings, demand deposits upfront, and disappear. FindMyRoomy verifies every user's identity before they can contact anyone.",
      },
    ],
  },
  {
    heading: 'Safety & Verification',
    items: [
      {
        q: 'How does FindMyRoomy verify users?',
        a: 'All users complete government ID verification. Many also complete optional background checks. Profiles include verification badges so you can see at a glance what has been confirmed.',
      },
      {
        q: 'How do I avoid roommate scams?',
        a: "Never pay a deposit before meeting in person. Reverse image search all profile photos. Be skeptical of anyone who claims to be overseas or can't meet in person. Use a platform with identity verification. FindMyRoomy verifies government ID on every account.",
      },
      {
        q: 'What questions should I ask a potential roommate?',
        a: 'Work schedule and sleep hours. Cleanliness standards. Guest frequency. How they handle splitting utilities and groceries. Whether they have pets or smoke. Red flags: vague answers, pressure to decide fast, or reluctance to video call or meet in a public place first.',
      },
    ],
  },
  {
    heading: 'How It Works',
    items: [
      {
        q: 'How do I find a roommate on FindMyRoomy?',
        a: 'Create a free profile, browse verified roommates in your city, and message anyone for free. No paywall, no subscription, no credit card.',
      },
      {
        q: 'What cities does FindMyRoomy cover?',
        a: 'FindMyRoomy covers 30+ U.S. cities including San Francisco, Oakland, San Jose, Los Angeles, Chicago, New York, Austin, Seattle, Boston, and more. Bay Area coverage is the deepest.',
      },
      {
        q: 'How long does it take to find a roommate?',
        a: 'Most renters on verified platforms find compatible options within 1–3 weeks. The Bay Area moves faster. Completing your profile fully and messaging proactively shortens the timeline significantly.',
      },
      {
        q: 'Can I find pet-friendly roommates?',
        a: 'Yes. Filter by pet-friendly to find dog owners, cat lovers, and pet-welcoming roommates. All filters are free to use.',
      },
    ],
  },
];

export default function FaqContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              <span className="text-sm font-semibold text-purple-700">Free · Verified · No Paywall</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              FindMyRoomy — Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Free roommate finder. Verified profiles. No paywall. Here are the answers to the most common questions.
            </p>
          </div>
        </section>

        {/* ── FAQ Sections ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto space-y-14">
            {SECTIONS.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">{section.heading}</h2>
                <div className="space-y-3">
                  {section.items.map((faq) => (
                    <details
                      key={faq.q}
                      className="group border border-gray-200 rounded-lg bg-white overflow-hidden"
                    >
                      <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none select-none">
                        <span>{faq.q}</span>
                        <span className="flex-shrink-0 w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-200">
                          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-5 pb-5 pt-1 text-gray-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Compare link ── */}
        <section className="py-12 px-4 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Compare all roommate apps</h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/roommate-apps"
                className="text-purple-700 border border-purple-200 px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors"
              >
                See how all roommate apps compare →
              </Link>
              <Link
                href="/roomi-alternative"
                className="text-gray-700 border border-gray-200 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors"
              >
                Roomi alternative
              </Link>
              <Link
                href="/roomster-alternative"
                className="text-gray-700 border border-gray-200 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors"
              >
                Roomster alternative
              </Link>
              <Link
                href="/spareroom-alternative"
                className="text-gray-700 border border-gray-200 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors"
              >
                SpareRoom alternative
              </Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to find your roommate — for free?</h2>
            <p className="text-purple-200 mb-8">
              No credit card. No subscription. No paywall. Beta members lock in free messaging permanently.
            </p>
            <Link
              href="/downloadApp"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Get Started Free →
            </Link>
            <p className="text-sm text-purple-300 mt-3">Join now to lock in free messaging for life</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
