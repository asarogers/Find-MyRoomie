"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = 'https://forms.gle/qJQXtqEgHb45Y2Y8A';

const CITIES = [
  'San Francisco', 'Oakland', 'San Jose', 'Los Angeles', 'New York',
  'Chicago', 'Austin', 'Seattle', 'Denver', 'Boston',
  'Portland', 'Atlanta', 'Miami', 'Dallas', 'Phoenix',
  'Minneapolis', 'Nashville', 'Charlotte', 'San Diego', 'Houston',
];

const VALUES = [
  {
    label: 'Verified',
    icon: '✓',
    description:
      'Every listing is reviewed before it goes live. No fake profiles, no ghost listings, no one asking you to wire money.',
  },
  {
    label: 'Free',
    icon: '$0',
    description:
      'No subscription. No credit card. No paywall before you can say hello. Messaging is free — permanently for beta members.',
  },
  {
    label: 'Simple',
    icon: '→',
    description:
      'No dark patterns, no fake urgency, no upsell modals. Search, message, connect. That\'s it.',
  },
];

const FAQS = [
  {
    q: 'Who built FindMyRoomy?',
    a: "Asa, the founder. I moved to a new city with two dogs and almost no lead time. I tried Roomster — paid $30 just to find out the listing was dead. I tried Craigslist — met a scammer on day two. FindMyRoomy is what I needed and couldn't find.",
  },
  {
    q: 'Is FindMyRoomy really free?',
    a: 'Yes. Free to browse, free to message, free to connect — forever. Beta members lock in free messaging permanently, even after full launch.',
  },
  {
    q: 'Where does FindMyRoomy operate?',
    a: 'Currently focused on the Bay Area and 30+ U.S. cities including San Francisco, Chicago, Los Angeles, New York, Austin, Seattle, and more.',
  },
  {
    q: 'How is FindMyRoomy different from Roomster?',
    a: 'Roomster charges $29.99/month to read or send messages and has an FTC-filed complaint for fake reviews. FindMyRoomy is free, verified, and built by someone who was burned by Roomster firsthand.',
  },
];

export default function AboutContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              <span className="text-sm font-semibold text-purple-700">The story behind FindMyRoomy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Built by someone who lived this problem
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              "I moved to a new city with two dogs and almost no lead time. I paid Roomster $30 just
              to find out the listing was dead. FindMyRoomy is what I needed and couldn't find."
            </p>
          </div>
        </section>

        {/* ── Founder story ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-start">

              {/* Photo placeholder */}
              <div className="flex-shrink-0 w-40 h-40 rounded-2xl bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-gray-400 text-sm font-medium mx-auto md:mx-0">
                Asa — founder
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Hi, I'm Asa</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  When I relocated to a new city with two dogs in tow, I had maybe three weeks to
                  find housing. I did what everyone does: I opened every roommate app I could find.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Roomster asked me to pay $29.99/month before I could even read a message. I paid.
                  The listing was dead. No refund, no response from support. Craigslist was faster —
                  until I spent an afternoon with someone who wanted me to wire a deposit to
                  "confirm" the room.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I eventually found a place, but I couldn't stop thinking: this is a solved problem
                  everywhere except roommate search. So I built the thing I needed. That's
                  FindMyRoomy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Mission ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              The founding promise: free messaging, forever.
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
              A paywall on messaging doesn't protect users — it just filters out people who can't
              afford $30. Scammers pay subscriptions too. The only thing a paywall stops is honest
              people from finding each other.
            </p>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              FindMyRoomy will never charge you to say hello. Beta members lock in free messaging
              permanently — even after we launch paid features (like background checks or boosted
              listings) for people who want them.
            </p>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">What we're built on</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {VALUES.map((v) => (
                <div
                  key={v.label}
                  className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 font-bold text-sm mb-4">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{v.label}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── City coverage ── */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-center">
              Available in 30+ U.S. cities — focused on the Bay Area
            </h2>
            <p className="text-gray-500 text-center mb-8">
              We're expanding fast. If your city isn't listed yet, join the beta and we'll notify
              you when we arrive.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {CITIES.map((city) => (
                <span
                  key={city}
                  className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700"
                >
                  {city}
                </span>
              ))}
              <span className="px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-full text-sm text-purple-700 font-medium">
                + more
              </span>
            </div>
          </div>
        </section>

        {/* ── FAQ accordion ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
                >
                  <button
                    className="w-full text-left px-6 py-5 flex justify-between items-center font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{faq.q}</span>
                    <span className="ml-4 text-purple-600 text-xl leading-none flex-shrink-0">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to find your roomy?</h2>
            <p className="text-purple-200 mb-8">
              Free to browse, free to message, free to connect. No credit card, no subscription,
              no paywall.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
              >
                Join the beta — it's free →
              </a>
              <Link
                href="/downloadApp"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
              >
                Get the app
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
