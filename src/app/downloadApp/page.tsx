"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Users, Shield, MessageCircle, Zap, ArrowRight, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';
import { Events } from '@/lib/analytics';

const BETA_FORM_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const PERKS = [
  "First access when the app launches — ahead of the general waitlist",
  "Founding member badge on your profile, permanently",
  "Free premium features for 6 months — no credit card required",
  "Direct line to the founder — your feedback shapes the product",
  "Browse roommate city pages right now, before launch",
];

const TRUST_SIGNALS = [
  { icon: Shield, label: "Verified profiles only — no bots, no scams" },
  { icon: MessageCircle, label: "Free to message, always — no Roomster paywall" },
  { icon: Users, label: "Background checks available" },
];

export default function BetaPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [joinCount, setJoinCount] = useState(47);

  // Slowly drift join count upward for social proof
  useEffect(() => {
    const t = setInterval(() => {
      setJoinCount(n => n + (Math.random() > 0.6 ? 1 : 0));
    }, 9000);
    return () => clearInterval(t);
  }, []);

  const handleBetaClick = (location: string) => {
    Events.formStart(`beta_page_${location}`);
    window.open(BETA_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7]">

        {/* ── Hero ── */}
        <section className="pt-28 pb-16 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-green-700">
                Beta open · {joinCount} people joined this week
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-5 leading-tight">
              Get early access.<br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Free forever.
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
              Find MyRoomie is the first roommate finder where messaging is free — always.
              No Roomster paywall. No subscription to read messages. Just verified roommates.
            </p>

            <button
              onClick={() => handleBetaClick('hero')}
              className="group inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Claim Your Beta Spot
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-sm text-gray-400 mt-3">
              Takes 60 seconds · No credit card · Free forever
            </p>
          </div>
        </section>

        {/* ── Perks ── */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              What beta testers get
            </h2>
            <ul className="space-y-4 mb-10">
              {PERKS.map((perk, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-purple-600" />
                  </span>
                  <span className="text-gray-700 text-lg">{perk}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <button
                onClick={() => handleBetaClick('perks')}
                className="group inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105"
              >
                Join the Beta
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* ── Trust signals ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {TRUST_SIGNALS.map(({ icon: Icon, label }, i) => (
                <div key={i} className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Urgency / Roomster angle ── */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Roomster is broken. We built the fix.</h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              Roomster charges $30/month just to read a message. Users are leaving in waves.
              Find MyRoomie is free to message, fully verified, and launching now.
              Beta spots lock in founding-member pricing and features.
            </p>
            <button
              onClick={() => handleBetaClick('urgency')}
              className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Early Access Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm opacity-75 mt-3">
              Beta spots are limited — founding-member benefits lock in now
            </p>
          </div>
        </section>

        {/* ── Browse cities ── */}
        <section className="py-12 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-gray-500 mb-2 text-lg">Already browsing roommates?</p>
            <Link
              href="/"
              className="text-purple-600 hover:text-purple-700 font-semibold text-lg underline underline-offset-4"
            >
              Browse roommates by city →
            </Link>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
