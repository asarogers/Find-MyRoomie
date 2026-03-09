"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const GROUP_TYPES = [
  {
    type: "Neighborhood-based groups",
    examples: "SF SOMA Housing, Mission District Rooms, Oakland Housing Network",
    howToFind: "Posted in neighborhood Facebook groups, Reddit (r/SanFranciscoHousing, r/bayarea), and local Nextdoor communities",
    limitation: "Require knowing someone who's already in the group, or getting a link before it expires.",
  },
  {
    type: "University-based groups",
    examples: "UC Berkeley Housing 2026, Stanford Roommate Finder, UCSF Housing",
    howToFind: "School email lists, departmental Slack channels, international student orientation materials",
    limitation: "Often university-email gated. New students may not have access until program starts.",
  },
  {
    type: "Community groups",
    examples: "Bay Area Desi Roommates, Bay Area LGBTQ+ Housing, Korean SF Housing",
    howToFind: "Community-specific Facebook groups, diaspora networks, cultural organization newsletters",
    limitation: "Group quality varies enormously. Some are well-moderated; most aren't.",
  },
  {
    type: "Employer-based groups",
    examples: "Apple Housing SF, Google Employees Housing, Meta Contractor Housing",
    howToFind: "Internal company Slack/Teams channels, employee ERGs, onboarding materials",
    limitation: "Often the highest quality — shared employer is a strong trust signal. Access requires employment.",
  },
];

const WHATSAPP_RISKS = [
  {
    risk: "Your identity is public to the entire group",
    detail: "When you join a WhatsApp group, your phone number and name are visible to every member — including people you've never vetted. Most SF housing groups have 50–200+ members.",
  },
  {
    risk: "No verification of anyone in the group",
    detail: "WhatsApp does not verify identity. Anyone with a phone number can join. Scam operators specifically target housing groups because the members are time-pressured and emotionally motivated.",
  },
  {
    risk: "No accountability for bad actors",
    detail: "If someone scams you via a WhatsApp group connection, there is no recourse. The platform has no dispute resolution, no moderation, and no records you can use to escalate.",
  },
  {
    risk: "Locked door for newcomers",
    detail: "WhatsApp groups require a join link shared by an existing member. First-time Bay Area arrivals — international students, H-1B newcomers, corporate relocatees — have no existing network to get them in.",
  },
];

export default function WhatsAppGroupsContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-3">San Francisco Bay Area · Updated March 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              WhatsApp Roommate Groups San Francisco — The Real Ones
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              SF WhatsApp housing groups exist — organized by neighborhood, university, community, and employer.
              Here's how to find them, what they're actually like, and why verified platforms give you
              what WhatsApp groups can't.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <strong>The core problem with WhatsApp groups:</strong> They require knowing someone who's
              already in them. For new arrivals without a local network, this is a locked door.
              Find MyRoomie is open to anyone — free, verified, and accessible from anywhere.
            </div>
          </div>
        </section>

        {/* ── Types of groups ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Types of SF WhatsApp Housing Groups</h2>
            <p className="text-gray-600 mb-8">
              There's no centralized directory. SF WhatsApp housing groups are self-organized and
              spread through networks. Here's what exists and where to find each type:
            </p>
            <div className="space-y-4">
              {GROUP_TYPES.map((g, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                    <h3 className="font-bold">{g.type}</h3>
                    <p className="text-xs text-gray-500 mt-1">Examples: {g.examples}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-gray-700 mb-2"><strong>How to find:</strong> {g.howToFind}</p>
                    <p className="text-xs text-amber-700 italic"><strong>Limitation:</strong> {g.limitation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Risks ── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">What WhatsApp Groups Don't Tell You</h2>
            <p className="text-gray-600 mb-8">
              WhatsApp groups are better than Craigslist in one dimension: there's usually some
              community pre-screening. But they have fundamental limitations that verified platforms don't have.
            </p>
            <div className="space-y-4">
              {WHATSAPP_RISKS.map((item, i) => (
                <div key={i} className="border-l-4 border-amber-300 bg-amber-50 pl-4 py-3 pr-4 rounded-r-lg">
                  <p className="font-semibold text-gray-800 mb-1">{item.risk}</p>
                  <p className="text-gray-700 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How Find MyRoomie compares ── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">What Find MyRoomie Gives You That WhatsApp Groups Can't</h2>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                ["Access for newcomers", "Yes — no existing network required"],
                ["Identity verification", "Yes — every profile reviewed"],
                ["Privacy control", "Yes — your data isn't broadcast to 200 strangers"],
                ["Scam accountability", "Yes — bad actors can't create profiles"],
                ["Bay Area focus", "Yes — SF, Oakland, Berkeley, Silicon Valley"],
                ["Cost to message", "$0 — free forever"],
              ].map(([label, val], i) => (
                <div key={i} className="bg-green-50 border border-green-200 rounded-xl p-3">
                  <div className="font-bold text-green-800 text-sm">{val}</div>
                  <div className="text-gray-500 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Find Verified SF Roommates Free →
            </a>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-12 px-4 bg-white border-t border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Are there WhatsApp groups for finding roommates in San Francisco?",
                  a: "Yes. There are SF WhatsApp housing groups organized by neighborhood, university affiliation, and community (Indian/South Asian, LGBTQ+, etc.). The main ones circulate through community networks — there is no single public directory. The limitation is that they require knowing someone already in the group.",
                },
                {
                  q: "Is it safe to find a roommate in a WhatsApp group?",
                  a: "WhatsApp groups have no identity verification, no moderation, and no recourse if something goes wrong. Your housing search — including your name and contact info — is visible to everyone in the group, including people you've never vetted. Use verified platforms for the actual connection; WhatsApp groups are useful only for initial discovery.",
                },
                {
                  q: "What's a safer alternative to WhatsApp roommate groups?",
                  a: "Find MyRoomie is a free Bay Area roommate platform where every profile is verified before going live. You get the same community feel as WhatsApp groups without the privacy exposure or scam risk — and messaging is free, no subscription required.",
                },
              ].map((faq, i) => (
                <div key={i}>
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related ── */}
        <section className="py-8 px-4 bg-gray-50 border-t border-gray-200">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-gray-500 mb-3">Related guides</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/how-to/avoid-roommate-scams-san-francisco/" className="text-purple-700 border border-purple-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">SF scam red flags →</Link>
              <Link href="/indian-roommate-finder-bay-area/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Indian roommate finder</Link>
              <Link href="/free-roommate-app-no-subscription/" className="text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">Free roommate app</Link>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Skip the Invite Gate. Start With Verified.</h2>
            <p className="text-purple-200 mb-8">
              You don't need to know someone to get in. Find MyRoomie is open to every Bay Area renter —
              verified profiles, free messaging, no subscription.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Get Early Access — Free →
            </a>
            <p className="text-sm text-purple-300 mt-3">No invite needed · No subscription · Bay Area verified</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
