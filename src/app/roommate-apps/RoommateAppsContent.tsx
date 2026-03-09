"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Events } from '@/lib/analytics';

const APPS = [
  {
    rank: 1,
    name: "Find MyRoomy",
    slug: null,
    href: "https://findmyroomy.com/",
    badge: "Best Free",
    badgeColor: "bg-green-100 text-green-800",
    price: "Free — always",
    priceSub: "No subscription. No credit card.",
    verdict: "✅ Recommended",
    verdictColor: "text-green-700",
    rating: "Beta — growing fast",
    pros: ["Free messaging — no paywall", "Verified listings before they go live", "Bay Area-focused with national coverage", "No auto-renewal trap", "Group apartment applications"],
    cons: ["Pre-launch beta — fewer listings than legacy platforms", "No mobile app yet (web only)"],
    ideal: "Anyone leaving Roomster, price-conscious Bay Area renters, verified-safety seekers",
  },
  {
    rank: 2,
    name: "Diggz",
    slug: "diggz-alternative",
    href: "https://diggz.co/",
    badge: "Best Paid Option",
    badgeColor: "bg-blue-100 text-blue-800",
    price: "$23.99/month",
    priceSub: "Free tier: 5 messages/day",
    verdict: "✅ Legit",
    verdictColor: "text-blue-700",
    rating: "4.0/5",
    pros: ["Transparent billing — cancel anytime, no hidden charges", "AI + human profile vetting", "Lifestyle matching algorithm", "No booking fee", "Advanced filters on premium"],
    cons: ["NYC-centric — thinner outside major metros", "Free tier is too limited for real search", "Social account verification only (no ID verification)"],
    ideal: "NYC-area renters comfortable paying, people who want lifestyle compatibility matching",
  },
  {
    rank: 3,
    name: "SpareRoom",
    slug: "spareroom-alternative",
    href: "https://spareroom.com/",
    badge: "Biggest UK Import",
    badgeColor: "bg-purple-100 text-purple-800",
    price: "$14–$28/month",
    priceSub: "Early Bird required to contact new listings",
    verdict: "⚠️ Mixed",
    verdictColor: "text-yellow-700",
    rating: "4.6/5 (Trustpilot)",
    pros: ["Largest UK database — good for US users moving internationally", "Fast, responsive customer support", "~85% of users never pay", "Active fraud prevention team"],
    cons: ["New listings (under 7 days old) gated behind Early Bird subscription", "US inventory much thinner than UK", "Not a matching platform — listings board only", "No lifestyle compatibility"],
    ideal: "Users with flexible timelines who can wait for listings to become free (7+ days old)",
  },
  {
    rank: 4,
    name: "Roomi",
    slug: "roomi-alternative",
    href: "https://roomiapp.com/",
    badge: "Avoid",
    badgeColor: "bg-red-100 text-red-800",
    price: "$29.99/month",
    priceSub: "Gold plan. Free: 5 messages/day",
    verdict: "❌ Not recommended",
    verdictColor: "text-red-700",
    rating: "2.2/5 (App Store) · 88% 1-star (Trustpilot)",
    pros: ["GlobalID identity verification", "LGBTQ+ / senior-specific filters", "Background check add-on"],
    cons: ["Geographic filters frequently broken", "Customer support described as AWOL", "Users report accidental $120+ overcharges", "Scam listings despite verification claims", "88% one-star reviews on Trustpilot"],
    ideal: "Nobody — the pricing, support failures, and fake listings make this a poor choice at any price",
  },
  {
    rank: 5,
    name: "Roomster",
    slug: "roomster-alternative",
    href: "https://roomster.com/",
    badge: "Avoid",
    badgeColor: "bg-red-100 text-red-800",
    price: "$30/month",
    priceSub: "Required to read messages",
    verdict: "❌ FTC-fined",
    verdictColor: "text-red-700",
    rating: "1.3/5 (Trustpilot)",
    pros: ["Large national database", "Long-established platform"],
    cons: ["FTC settlement 2023 — fined for fake listings and deceptive practices", "$30/month just to read messages", "Trustpilot filled with complaints about bots, billing, and no refunds", "7-day trial auto-charges $29 without clear disclosure"],
    ideal: "Nobody — see our full Roomster review",
  },
  {
    rank: 6,
    name: "Cirtru",
    slug: null,
    href: "https://cirtru.com/",
    badge: "Avoid",
    badgeColor: "bg-red-100 text-red-800",
    price: "$29.99+ (unclear)",
    priceSub: "Users report aggressive payment prompts",
    verdict: "❌ Scam risk",
    verdictColor: "text-red-700",
    rating: "1.8/5 (Trustpilot)",
    pros: ["Free listing claim"],
    cons: ["Flagged as high-risk by ScamAdviser", "1.8/5 Trustpilot — users cannot delete accounts or listings", "No human customer support", "Unauthorized charges reported", "Contact info reported as false"],
    ideal: "Nobody — multiple scam indicators, no functioning support",
  },
];

export default function RoommateAppsContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-gray-400 mb-3">Last updated: March 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Best Roommate Finder Apps in 2026
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl">
              We ranked the 6 most-used roommate apps by price, trust, and fake-profile risk.
              <strong className="text-gray-900"> The short answer:</strong> one is completely free with no messaging paywall.
              The others charge $14–$30/month just to contact a listing.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800">
              <strong>TL;DR —</strong> Find MyRoomy is the only app where messaging is free, forever.
              Diggz is the best paid option. Avoid Roomster (FTC fines), Roomi (88% 1-star reviews), and Cirtru (scam flags).
            </div>
          </div>
        </section>

        {/* ── Quick comparison table ── */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">At a Glance: 2026 Pricing</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">App</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Free Messaging</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Paid Plan</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Verified Profiles</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Trust Score</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Find MyRoomy", "✅ Yes — always free", "None needed", "✅ Pre-verified", "⭐ Recommended"],
                    ["Diggz", "⚠️ 5/day only", "$23.99/mo", "Social account only", "✅ Legit"],
                    ["SpareRoom", "⚠️ Old listings only", "$14–$28/mo", "Email/phone", "✅ Mostly"],
                    ["Roomi", "⚠️ 5/day only", "$29.99/mo", "GlobalID (when working)", "❌ 88% 1-star"],
                    ["Roomster", "❌ No", "$30/mo", "Minimal", "❌ FTC fined"],
                    ["Cirtru", "❌ Claims free, prompts payment", "$29.99+", "Non-functional (reported)", "❌ Scam flags"],
                  ].map(([app, free, paid, verified, trust], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-semibold">{app}</td>
                      <td className="p-3 border border-gray-200">{free}</td>
                      <td className="p-3 border border-gray-200">{paid}</td>
                      <td className="p-3 border border-gray-200">{verified}</td>
                      <td className="p-3 border border-gray-200">{trust}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Ranked list ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold">Roommate Apps Ranked (2026)</h2>

            {APPS.map((app) => (
              <article key={app.rank} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-white p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-bold text-gray-400">#{app.rank}</span>
                        <h3 className="text-2xl font-extrabold">{app.name}</h3>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${app.badgeColor}`}>{app.badge}</span>
                      </div>
                      <div className="text-gray-500 text-sm">{app.rating}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-bold text-lg">{app.price}</div>
                      <div className="text-xs text-gray-400">{app.priceSub}</div>
                    </div>
                  </div>

                  <div className={`font-semibold mb-4 ${app.verdictColor}`}>{app.verdict}</div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase mb-2">Pros</div>
                      <ul className="space-y-1">
                        {app.pros.map((p, i) => <li key={i} className="text-sm text-gray-700">+ {p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase mb-2">Cons</div>
                      <ul className="space-y-1">
                        {app.cons.map((c, i) => <li key={i} className="text-sm text-gray-700">− {c}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                    <strong>Best for:</strong> {app.ideal}
                  </div>

                  {app.slug && (
                    <div className="mt-4">
                      <Link href={`/${app.slug}/`} className="text-purple-700 text-sm font-semibold hover:underline">
                        See full {app.name} review + comparison →
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "What is the best free roommate finder app?", a: "Find MyRoomy (findmyroomy.com) is the only major roommate app where messaging is completely free — no subscription, no credit card, no paywall. Diggz offers limited free messaging (5/day). Roomster and Roomi require paid subscriptions ($14.99–$30/month) to contact anyone." },
                { q: "Is Roomster free?", a: "No. Roomster requires a $30/month subscription to read or send messages. Browsing is free, but you cannot contact any listing without paying. Their 7-day trial auto-charges $29/month if not manually cancelled." },
                { q: "Is Roomi a good app?", a: "Roomi has a 2.2/5 rating on the App Store and 88% one-star reviews on Trustpilot as of 2026. Common complaints: broken geographic filters, unresponsive support, accidental overcharges, scam listings. Roomi Gold costs $29.99/month." },
                { q: "What is the best Roomster alternative?", a: "Find MyRoomy is the top free alternative — free messaging, no subscription, verified listings, Bay Area-focused. No credit card required, no auto-renewal risk." },
                { q: "Which roommate app has the most verified profiles?", a: "Find MyRoomy verifies listings before they go live. Roomi uses GlobalID-powered identity verification. SpareRoom verifies email and phone. Cirtru's verification is reported as non-functional. Craigslist and Facebook Marketplace have no verification." },
              ].map((faq, i) => (
                <div key={i}>
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Try the Only Truly Free Option</h2>
            <p className="text-purple-200 mb-8">
              No $30/month paywall. No auto-renewal trap. No fake listings.
              Find MyRoomy is free to message, free to list, free to search.
            </p>
            <a
              href="https://forms.gle/qJQXtqEgHb45Y2Y8A"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => Events.formStart('roommate_apps')}
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Get Free Beta Access →
            </a>
            <p className="text-sm text-purple-300 mt-3">No credit card · No subscription · Beta spots open now</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
