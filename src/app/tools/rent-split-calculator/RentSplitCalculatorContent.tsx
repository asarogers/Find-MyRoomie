"use client";
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const BAY_AREA_PRESETS = [
  { label: "SF — SOMA 2BR", rent: 5200 },
  { label: "SF — Mission 2BR", rent: 4800 },
  { label: "Oakland — Rockridge 2BR", rent: 2900 },
  { label: "Berkeley 2BR", rent: 3200 },
  { label: "San Jose 2BR", rent: 3100 },
  { label: "Fremont 2BR", rent: 2700 },
  { label: "Sunnyvale 2BR", rent: 3400 },
  { label: "Cupertino 2BR", rent: 3600 },
  { label: "Mountain View 2BR", rent: 4200 },
];

const FAQS = [
  {
    q: "How do you split rent fairly between roommates?",
    a: "There are three fair methods: (1) Equal split — everyone pays the same. Simple, but ignores room size differences. (2) Income-based split — each person pays a proportion of their income. Fairer when incomes differ significantly. (3) Room-size split — proportional to square footage. Best when rooms are noticeably different sizes.",
  },
  {
    q: "What is the fairest way to split rent with unequal rooms?",
    a: "The room-size method is most defensible: divide each room's square footage by the total square footage of all rooms, then multiply by total rent. For a 2BR where one room is 200 sqft and the other is 150 sqft: the larger room pays 57% of rent, the smaller pays 43%.",
  },
  {
    q: "Should rent be split by income?",
    a: "Income-based splitting is fairest when roommates have significantly different salaries. It means each person pays the same percentage of their income on housing — which many people consider the most equitable approach.",
  },
  {
    q: "How much does a roommate save you in the Bay Area?",
    a: "San Francisco median rent is $3,545/month (Dec 2025). Splitting a 2BR saves approximately $1,772/month — $21,264/year. In Oakland, splitting a 2BR saves $1,200–$1,400/month vs living alone.",
  },
  {
    q: "What should a roommate agreement cover beyond rent?",
    a: "A complete roommate agreement covers: rent amount per person, utility split, guest policy, cleaning responsibilities, quiet hours, kitchen use, and what happens if someone needs to leave early.",
  },
];

type Mode = 'equal' | 'income' | 'room';

interface Roommate {
  name: string;
  income: string;
  sqft: string;
}

const fmt = (n: number) =>
  '$' + Math.round(n).toLocaleString('en-US');

const pct = (n: number) =>
  (n * 100).toFixed(1) + '%';

export default function RentSplitCalculatorContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ── Calculator state ──────────────────────────────────────────────────────
  const [mode, setMode] = useState<Mode>('equal');
  const [totalRent, setTotalRent] = useState('');
  const [numRoommates, setNumRoommates] = useState('2');
  const [roommates, setRoommates] = useState<Roommate[]>([
    { name: 'Person 1', income: '', sqft: '' },
    { name: 'Person 2', income: '', sqft: '' },
  ]);

  // Keep roommates array synced with numRoommates
  const handleNumChange = (val: string) => {
    const n = Math.min(6, Math.max(2, parseInt(val) || 2));
    setNumRoommates(String(n));
    setRoommates(prev => {
      const next = [...prev];
      while (next.length < n) next.push({ name: `Person ${next.length + 1}`, income: '', sqft: '' });
      return next.slice(0, n);
    });
  };

  const updateRoommate = (i: number, field: keyof Roommate, val: string) => {
    setRoommates(prev => prev.map((r, idx) => idx === i ? { ...r, [field]: val } : r));
  };

  // ── Results computation ───────────────────────────────────────────────────
  const results = useMemo(() => {
    const rent = parseFloat(totalRent);
    if (!rent || rent <= 0) return null;

    if (mode === 'equal') {
      const share = rent / roommates.length;
      return roommates.map(r => ({
        name: r.name || 'Person',
        amount: share,
        fraction: 1 / roommates.length,
        pctIncome: null,
      }));
    }

    if (mode === 'income') {
      const incomes = roommates.map(r => parseFloat(r.income) || 0);
      const total = incomes.reduce((a, b) => a + b, 0);
      if (total === 0) return null;
      return roommates.map((r, i) => {
        const frac = incomes[i] / total;
        const monthly = (parseFloat(r.income) || 0) / 12;
        return {
          name: r.name || 'Person',
          amount: rent * frac,
          fraction: frac,
          pctIncome: monthly > 0 ? (rent * frac) / monthly : null,
        };
      });
    }

    if (mode === 'room') {
      const sqfts = roommates.map(r => parseFloat(r.sqft) || 0);
      const total = sqfts.reduce((a, b) => a + b, 0);
      if (total === 0) return null;
      return roommates.map((r, i) => ({
        name: r.name || 'Person',
        amount: rent * (sqfts[i] / total),
        fraction: sqfts[i] / total,
        pctIncome: null,
      }));
    }

    return null;
  }, [mode, totalRent, roommates]);

  // ── Bay Area savings ──────────────────────────────────────────────────────
  const [soloRent, setSoloRent] = useState('');
  const [sharedRent, setSharedRent] = useState('');
  const savings = useMemo(() => {
    const solo = parseFloat(soloRent);
    const shared = parseFloat(sharedRent);
    if (!solo || !shared || shared >= solo) return null;
    const monthly = solo - shared;
    return { monthly, annual: monthly * 12, threeYear: monthly * 36 };
  }, [soloRent, sharedRent]);

  const MODES: { id: Mode; label: string; desc: string }[] = [
    { id: 'equal', label: 'Equal Split', desc: 'Everyone pays the same amount' },
    { id: 'income', label: 'By Income', desc: 'Proportional to each person\'s salary' },
    { id: 'room', label: 'By Room Size', desc: 'Proportional to square footage' },
  ];

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="pt-28 pb-12 px-4 bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Free Tool — No Sign-In Required
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Rent Split Calculator
            </h1>
            <p className="text-xl text-gray-500">
              Calculate a fair split three ways: equal, by income, or by room size.
            </p>
          </div>
        </section>

        {/* ── Calculator ───────────────────────────────────────────────────── */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">

            {/* Mode selector */}
            <div className="grid grid-cols-3 gap-2 mb-8">
              {MODES.map(m => (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id)}
                  className={`p-3 rounded-xl border text-sm font-semibold text-left transition-all ${
                    mode === m.id
                      ? 'border-purple-600 bg-purple-50 text-purple-700'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <div className="font-bold mb-0.5">{m.label}</div>
                  <div className="text-xs font-normal opacity-70">{m.desc}</div>
                </button>
              ))}
            </div>

            {/* Inputs card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">

              {/* Total rent + presets */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Total Monthly Rent
                </label>
                <div className="flex gap-2 mb-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                    <input
                      type="number"
                      min="0"
                      placeholder="e.g. 3200"
                      value={totalRent}
                      onChange={e => setTotalRent(e.target.value)}
                      className="w-full pl-7 pr-4 py-3 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                  <select
                    onChange={e => { if (e.target.value) setTotalRent(e.target.value); }}
                    className="px-3 py-3 border border-gray-200 rounded-lg text-sm text-gray-600 bg-white focus:outline-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Bay Area presets</option>
                    {BAY_AREA_PRESETS.map(p => (
                      <option key={p.label} value={p.rent}>{p.label} — ${p.rent.toLocaleString()}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Number of roommates */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Number of Roommates
                </label>
                <div className="flex gap-2">
                  {[2, 3, 4, 5, 6].map(n => (
                    <button
                      key={n}
                      onClick={() => handleNumChange(String(n))}
                      className={`w-10 h-10 rounded-lg border text-sm font-bold transition-all ${
                        numRoommates === String(n)
                          ? 'border-purple-600 bg-purple-600 text-white'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-400'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Per-person inputs */}
              <div className="space-y-3">
                {roommates.map((r, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder={`Person ${i + 1} name`}
                      value={r.name}
                      onChange={e => updateRoommate(i, 'name', e.target.value)}
                      className="flex-1 px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                    />
                    {mode === 'income' && (
                      <div className="relative w-36">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                        <input
                          type="number"
                          min="0"
                          placeholder="Annual income"
                          value={r.income}
                          onChange={e => updateRoommate(i, 'income', e.target.value)}
                          className="w-full pl-6 pr-2 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                        />
                      </div>
                    )}
                    {mode === 'room' && (
                      <div className="relative w-32">
                        <input
                          type="number"
                          min="0"
                          placeholder="Room sqft"
                          value={r.sqft}
                          onChange={e => updateRoommate(i, 'sqft', e.target.value)}
                          className="w-full pl-3 pr-8 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">sqft</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            {results ? (
              <div className="bg-white border border-purple-200 rounded-2xl p-6 shadow-sm mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Results</h2>
                <div className="space-y-3">
                  {results.map((r, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                      <div>
                        <div className="font-semibold text-gray-900">{r.name}</div>
                        <div className="text-sm text-gray-500">
                          {pct(r.fraction)} of rent
                          {r.pctIncome !== null && (
                            <span className="ml-2 text-purple-600">
                              · {pct(r.pctIncome)} of monthly income
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-2xl font-extrabold text-purple-700">
                        {fmt(r.amount)}<span className="text-sm font-normal text-gray-400">/mo</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-sm text-gray-500">
                  <span>Total rent</span>
                  <span className="font-semibold text-gray-800">
                    {fmt(results.reduce((a, r) => a + r.amount, 0))}/mo
                  </span>
                </div>
              </div>
            ) : totalRent && parseFloat(totalRent) > 0 ? (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-amber-800 text-sm mb-6">
                {mode === 'income' && 'Enter each person\'s annual income to calculate.'}
                {mode === 'room' && 'Enter each room\'s square footage to calculate.'}
              </div>
            ) : null}

            {/* Method explainer */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6 text-sm text-gray-600">
              {mode === 'equal' && (
                <>
                  <strong className="text-gray-800">Equal split</strong> — everyone pays the same regardless of income or room size. Simple and non-controversial. Works best when rooms are similar sizes and incomes are roughly comparable.
                </>
              )}
              {mode === 'income' && (
                <>
                  <strong className="text-gray-800">Income-based split</strong> — each person pays the same percentage of their income on rent. If Person A earns $120K and Person B earns $80K, Person A pays 60% and Person B pays 40%. This method is considered the most equitable when incomes differ significantly.
                </>
              )}
              {mode === 'room' && (
                <>
                  <strong className="text-gray-800">Room-size split</strong> — rent is proportional to each room&apos;s square footage. If one room is 200 sqft and the other is 150 sqft, the larger room pays 57% and the smaller pays 43%. Most defensible when rooms are noticeably different in size.
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── Bay Area Savings Calculator ───────────────────────────────── */}
        <section className="py-12 px-4 bg-white border-y border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Bay Area Savings Calculator</h2>
            <p className="text-gray-500 mb-6 text-sm">See exactly what a roommate saves you per year — and over 3 years.</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Your current (or solo) rent</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="e.g. 3545"
                    value={soloRent}
                    onChange={e => setSoloRent(e.target.value)}
                    className="w-full pl-7 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">SF median: $3,545 · Oakland: $2,100 · SJ: $2,400</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Your share with a roommate</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="e.g. 1772"
                    value={sharedRent}
                    onChange={e => setSharedRent(e.target.value)}
                    className="w-full pl-7 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">Use the calculator above to find this number</p>
              </div>
            </div>

            {savings ? (
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: 'Monthly savings', value: fmt(savings.monthly), sub: 'per month' },
                  { label: 'Annual savings', value: fmt(savings.annual), sub: 'per year', highlight: true },
                  { label: '3-year savings', value: fmt(savings.threeYear), sub: 'over 3 years' },
                ].map((s, i) => (
                  <div
                    key={i}
                    className={`rounded-xl p-4 text-center border ${
                      s.highlight ? 'border-purple-300 bg-purple-50' : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className={`text-2xl font-extrabold ${s.highlight ? 'text-purple-700' : 'text-gray-800'}`}>
                      {s.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{s.sub}</div>
                  </div>
                ))}
              </div>
            ) : null}

            {savings && (
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 text-sm text-purple-800">
                <strong>{fmt(savings.annual)}/year</strong> is enough for{' '}
                {savings.annual >= 25000 ? 'a year of grad school tuition' :
                 savings.annual >= 15000 ? 'two international round trips and a month of savings' :
                 savings.annual >= 10000 ? 'maxing a Roth IRA and still having money left' :
                 'several months of groceries'}.
                The math on finding the right roommate is clear.
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-purple-700 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-extrabold mb-3">Now Find Someone to Split With</h2>
              <p className="text-purple-200 mb-2">
                The math works. The next step is finding a verified Bay Area roommate — for free.
              </p>
              <p className="text-purple-300 text-sm mb-6">
                No $30/month Roomster paywall. No Craigslist scams. Free messaging, verified profiles.
              </p>
              <a
                href={BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
              >
                Find Verified Bay Area Roommates — Free →
              </a>
            </div>
          </div>
        </section>

        {/* ── Related tools ─────────────────────────────────────────────── */}
        <section className="py-8 px-4 border-t border-gray-100">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-500 mb-3">Related guides:</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                { label: "Roommate Agreement Template", href: "/how-to/roommate-agreement-template/" },
                { label: "Roommate Red Flags", href: "/how-to/roommate-red-flags/" },
                { label: "Compatibility Quiz", href: "/roommate-compatibility-quiz/" },
                { label: "SF Roommate Finder", href: "/apartments/san-francisco-ca/" },
                { label: "Oakland Roommates", href: "/apartments/oakland-ca/" },
              ].map((l, i) => (
                <Link key={i} href={l.href} className="text-purple-600 hover:text-purple-800 font-medium underline underline-offset-2">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-white border-t border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left p-5 font-semibold text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{f.q}</span>
                    <span className="text-gray-400 ml-4 flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
