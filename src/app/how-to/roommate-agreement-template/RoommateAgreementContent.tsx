"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const TEMPLATE_TEXT = `ROOMMATE AGREEMENT
San Francisco, California — [DATE]

PARTIES:
  [FULL LEGAL NAME 1] ("Roommate A")
  [FULL LEGAL NAME 2] ("Roommate B")
  [Add additional parties as needed]

PROPERTY: [FULL ADDRESS], San Francisco, CA [ZIP CODE]

─────────────────────────────────────────────

1. RENT
   Total monthly rent: $______
   Roommate A pays: $______
   Roommate B pays: $______
   Due date: [1st / 15th] of each month
   Late fee: $______ after [3 / 5] business day grace period
   Payment method: [Venmo / Zelle / check / other]

2. UTILITIES
   Split method: [Equal / Proportional to bedroom size]
   Each party responsible for: ______________________
   Utility accounts held by: ______________________

3. MASTER LEASE
   [Name] holds the master lease with the landlord.
   Other parties are subletting under this agreement.
   Subletting is [permitted / not permitted] per the master lease.
   Sublease arrangement: [acknowledged / not yet disclosed] to landlord.

4. MOVE-OUT NOTICE
   Either party must provide [30 / 60] days written notice to vacate.
   Notice must be delivered in writing (text message or email acceptable).

5. GUESTS
   Overnight guests permitted up to ______ nights per month without notice.
   Guests staying 7+ consecutive nights require written consent of all roommates.
   No guest may stay 30+ days total in any calendar year without written agreement.

6. SHARED AREAS
   Kitchen and bathrooms are shared equally.
   Personal bedrooms are private — no entry without permission.
   Shared supplies (cleaning products, paper goods): ______________________

7. NOISE AND QUIET HOURS
   Quiet hours: [10pm – 8am weekdays / 11pm – 9am weekends]
   Amplified music or gatherings with 4+ guests: advance notice preferred.

8. PETS
   Pets: [Permitted / Not permitted]
   If permitted: [Species / Name] — responsible party: ______________________

9. LEASE VIOLATION
   If any party violates the primary lease and causes financial harm to other
   parties, the violating party is solely responsible for resulting costs.

10. DISPUTES
    Disputes between roommates to be resolved first by good-faith discussion,
    then by [mediation / SF Rent Board as applicable / small claims court].

─────────────────────────────────────────────

SIGNATURES:

Roommate A: _________________________ Date: ___________
Print name: _________________________

Roommate B: _________________________ Date: ___________
Print name: _________________________`;

const clauses = [
  {
    num: "1",
    title: "Rent-Controlled Unit Clause",
    desc: "Who holds the master lease? What happens if the master leaseholder moves out? In SF rent-controlled buildings, this is critical — a subtenant may gain rights to the unit if the master tenant vacates and they have lived there long enough. Establish this in writing from day one.",
  },
  {
    num: "2",
    title: "Utilities Split",
    desc: "Equal split is simplest. Proportional by bedroom size is fairer if rooms are significantly different. Specify who holds each utility account — that person is liable to the utility company regardless of the roommate agreement.",
  },
  {
    num: "3",
    title: "Guest Policy",
    desc: "Overnight guests are a major source of roommate conflict in SF's small units. Set limits explicitly: nights per month, consecutive nights, advance notice requirements. A guest who stays 30+ days may have legal occupancy rights in California.",
  },
  {
    num: "4",
    title: "Shared Supplies",
    desc: "Who buys dish soap, toilet paper, and cleaning products? Rotate responsibility monthly or split costs via a shared expense app (Splitwise, etc.). Small recurring expenses cause disproportionate conflict if left undefined.",
  },
  {
    num: "5",
    title: "Noise and Quiet Hours",
    desc: "Essential in SF's thin-walled Victorian flats. Set specific quiet hours for weekdays and weekends. Guests and gatherings should require advance notice as a courtesy, even if not strictly enforced.",
  },
  {
    num: "6",
    title: "Move-Out Notice",
    desc: "30 days minimum to allow replacement search. 60 days is more considerate in SF's competitive market where finding a qualified replacement roommate can take 3–4 weeks alone. Put this in writing — verbal notice creates disputes.",
  },
];

const faqs = [
  {
    q: "Do I need a written roommate agreement in San Francisco?",
    a: "You are not legally required to have a written roommate agreement in SF, but it is strongly advisable. San Francisco has some of the most tenant-favorable laws in the US, including rent control rules that create significant consequences when a master tenant moves out. A written agreement protects both parties from disputes about rent splits, utilities, guests, and move-out procedures.",
  },
  {
    q: "What should a roommate agreement include?",
    a: "A complete roommate agreement should cover: (1) Rent amount and each person's share, (2) Due date and late fee terms, (3) Utilities split method, (4) Which party holds the master lease, (5) Move-out notice period, (6) Guest policy and overnight guest limits, (7) Shared supplies and cost splitting, (8) Quiet hours, and (9) Dispute resolution process. SF-specific agreements should also address what happens if the master leaseholder moves out.",
  },
  {
    q: "Is a roommate agreement legally binding in California?",
    a: "A written roommate agreement signed by all parties can be legally binding in California as a contract between roommates. However, it does not override the primary lease with the landlord. For disputes involving rent-controlled units, the SF Rent Board may have jurisdiction. Consult an SF tenant attorney for complex situations involving rent control, eviction, or subletting disputes.",
  },
  {
    q: "What are my rights as a subtenant in San Francisco?",
    a: "Under SF rent control rules, if you are a subtenant and the master tenant moves out, you may have rights to the unit under certain conditions — particularly if you have lived there for 12+ months and the landlord knew about your tenancy. The SF Rent Board (sfrb.org) and SF Tenants Union (sftu.org) offer free guidance.",
  },
];

export default function RoommateAgreementContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(TEMPLATE_TEXT).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />
      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* Hero */}
        <section className="pt-28 pb-14 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Free Template — SF & Bay Area
            </div>
            <h1 className="text-4xl font-extrabold mb-5 leading-tight">
              Free Roommate Agreement Template — SF & Bay Area Legal Guide (2026)
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              San Francisco has some of the most tenant-favorable laws in the US — which means a roommate agreement protects everyone, not just the landlord. Copy the free template below, fill in your details, and both parties sign before move-in.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-green-700 font-medium">California-compliant</div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-blue-700 font-medium">SF rent control aware</div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg px-4 py-2 text-purple-700 font-medium">Free to use</div>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-12 space-y-14">

          {/* Why you need one in SF */}
          <section>
            <h2 className="text-2xl font-bold mb-5">Why You Need a Roommate Agreement in SF Specifically</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Most cities, a handshake roommate arrangement works fine. San Francisco is different. SF has one of the most complex tenant protection frameworks in the US, which creates scenarios where a poorly-structured roommate arrangement has real legal and financial consequences.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="text-amber-600 font-bold text-sm shrink-0 mt-0.5">SF Rent Control</div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  If you live in a rent-controlled unit and the master tenant moves out without proper documentation, a long-term subtenant may be able to claim the unit. A written agreement establishing the nature of each party's occupancy is essential.
                </p>
              </div>
              <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="text-amber-600 font-bold text-sm shrink-0 mt-0.5">Guest Rights</div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  In California, a guest who stays 30+ days may acquire legal occupancy rights. Without a written agreement specifying guest limits, you have limited ability to enforce those limits.
                </p>
              </div>
              <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="text-amber-600 font-bold text-sm shrink-0 mt-0.5">Rent Disputes</div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  If a roommate stops paying their share, a written agreement with specific amounts gives you a basis for small claims court recovery. Without it, you have only a verbal agreement.
                </p>
              </div>
            </div>
          </section>

          {/* Key Clauses */}
          <section>
            <h2 className="text-2xl font-bold mb-5">Key Clauses for SF / Bay Area Roommate Agreements</h2>
            <div className="space-y-4">
              {clauses.map((clause) => (
                <div key={clause.num} className="flex gap-4 border border-gray-200 rounded-xl p-5">
                  <div className="w-7 h-7 rounded-full bg-gray-100 text-gray-600 font-bold flex items-center justify-center shrink-0 text-sm">
                    {clause.num}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 mb-1">{clause.title}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{clause.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Template */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">The Template</h2>
              <button
                onClick={handleCopy}
                className="bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                {copied ? "Copied!" : "Copy Template"}
              </button>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Copy the template below, fill in the bracketed fields, and both parties sign before move-in. Save as a PDF or print two copies — each party keeps one.
            </p>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
                <span className="text-gray-400 text-xs font-mono">roommate-agreement-sf.txt</span>
                <button
                  onClick={handleCopy}
                  className="text-gray-400 hover:text-white text-xs transition-colors"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <pre className="p-5 text-green-300 text-xs leading-relaxed overflow-x-auto font-mono whitespace-pre-wrap">
                {TEMPLATE_TEXT}
              </pre>
            </div>
          </section>

          {/* SF Legal Notes */}
          <section>
            <h2 className="text-2xl font-bold mb-5">SF-Specific Legal Notes</h2>
            <div className="space-y-4">
              <div className="border border-blue-200 bg-blue-50 rounded-xl p-5">
                <div className="font-semibold text-blue-800 mb-2">SF Rent Control and Subtenants</div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Under SF's rent ordinance, if a master tenant moves out of a rent-controlled unit, a subtenant who has lived there long enough may gain rights to the unit under certain conditions. The landlord cannot simply evict them. This is why the "master lease" clause in a roommate agreement matters — it establishes who holds what interest in the tenancy from day one.
                </p>
              </div>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-5">
                <div className="font-semibold text-gray-700 mb-2">This Template Is Informational</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This template is provided for informational purposes. It is not legal advice. For complex situations — including rent-controlled units, subletting disputes, or co-tenancy questions — consult a California tenant attorney.
                </p>
              </div>
              <div className="border border-green-200 bg-green-50 rounded-xl p-5">
                <div className="font-semibold text-green-700 mb-2">Free SF Resources</div>
                <ul className="text-gray-700 text-sm space-y-1.5">
                  <li><strong>SF Tenants Union:</strong> sftu.org — free tenant counseling, drop-in clinics</li>
                  <li><strong>SF Rent Board:</strong> sfrb.org — official rent control guidance, free mediation</li>
                  <li><strong>SF Bar Association Lawyer Referral:</strong> sfbar.org — low-cost initial consultation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-purple-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Find Your Roommate First — Then Sign the Agreement</h2>
            <p className="text-purple-200 mb-6 text-lg">
              Verified profiles. Free messaging. No subscription. Bay Area-specific search.
            </p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Get Early Access &rarr;
            </a>
            <p className="text-purple-300 text-sm mt-3">Free. No credit card. No subscription.</p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left px-5 py-4 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="text-gray-400 text-lg ml-4 shrink-0">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
