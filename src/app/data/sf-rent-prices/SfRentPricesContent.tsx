'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

const RENT_DATA = [
  { neighborhood: "Pacific Heights", city: "SF", rent1br: 3900, rent2br: 5400, splitPer: 2700, yoy: 3.2, notes: "Highest-demand SF neighborhood. Limited supply." },
  { neighborhood: "Marina District", city: "SF", rent1br: 3700, rent2br: 5100, splitPer: 2550, yoy: 4.1, notes: "Young professionals. High walkability." },
  { neighborhood: "SOMA", city: "SF", rent1br: 3400, rent2br: 4800, splitPer: 2400, yoy: -1.8, notes: "Tech hub. Some vacancy as WFH persists." },
  { neighborhood: "Mission District", city: "SF", rent1br: 3200, rent2br: 4500, splitPer: 2250, yoy: 5.3, notes: "Cultural heart of SF. High demand, limited inventory." },
  { neighborhood: "Inner Sunset", city: "SF", rent1br: 2900, rent2br: 4200, splitPer: 2100, yoy: 6.1, notes: "UCSF proximity. Quiet, high retention." },
  { neighborhood: "Palo Alto", city: "South Bay", rent1br: 3100, rent2br: 4600, splitPer: 2300, yoy: 7.9, notes: "Stanford + VC Row. Highest YoY growth in South Bay." },
  { neighborhood: "Menlo Park", city: "Peninsula", rent1br: 3000, rent2br: 4400, splitPer: 2200, yoy: 5.0, notes: "Meta HQ corridor. Limited new supply." },
  { neighborhood: "Mountain View", city: "South Bay", rent1br: 2850, rent2br: 4100, splitPer: 2050, yoy: 7.9, notes: "Google HQ. Highest YoY growth alongside Palo Alto." },
  { neighborhood: "Cupertino", city: "South Bay", rent1br: 2800, rent2br: 4000, splitPer: 2000, yoy: 2.1, notes: "Apple Park. Expensive relative to amenities." },
  { neighborhood: "Sunnyvale", city: "South Bay", rent1br: 2650, rent2br: 3800, splitPer: 1900, yoy: 3.4, notes: "LinkedIn/Google corridor. Best South Bay value." },
  { neighborhood: "Santa Clara", city: "South Bay", rent1br: 2500, rent2br: 3600, splitPer: 1800, yoy: 3.8, notes: "Nvidia/Intel. Dense tech employer presence." },
  { neighborhood: "North San Jose", city: "South Bay", rent1br: 2300, rent2br: 3300, splitPer: 1650, yoy: 2.4, notes: "Cisco corridor. Best South Bay budget option." },
  { neighborhood: "Downtown San Jose", city: "South Bay", rent1br: 2100, rent2br: 3100, splitPer: 1550, yoy: -7.8, notes: "Foreclosure effect. The Fay + Neo on First vacancies pulling market down." },
  { neighborhood: "Oakland", city: "East Bay", rent1br: 2100, rent2br: 3000, splitPer: 1500, yoy: 3.1, notes: "BART to SF. 40% less than comparable SF neighborhoods." },
  { neighborhood: "Fremont", city: "East Bay", rent1br: 1950, rent2br: 2800, splitPer: 1400, yoy: 4.2, notes: "Lowest Bay Area major market. Tesla/Cisco commuter base." },
];

const INTERNAL_LINKS = [
  { href: '/neighborhoods/soma-san-francisco', label: 'SOMA Neighborhood Guide', desc: 'Current rent: $3,400/mo 1BR. -1.8% YoY.' },
  { href: '/neighborhoods/mission-district-san-francisco', label: 'Mission District Guide', desc: 'Current rent: $3,200/mo 1BR. +5.3% YoY.' },
  { href: '/neighborhoods/hayes-valley-san-francisco', label: 'Hayes Valley Guide', desc: 'Adjacent to Mission. High walk scores.' },
  { href: '/apartments/sunnyvale-ca', label: 'Sunnyvale City Guide', desc: 'Current rent: $2,650/mo 1BR. LinkedIn corridor.' },
  { href: '/apartments/mountain-view-ca', label: 'Mountain View Guide', desc: 'Current rent: $2,850/mo 1BR. +7.9% YoY.' },
  { href: '/apartments/palo-alto-ca', label: 'Palo Alto Guide', desc: 'Current rent: $3,100/mo 1BR. +7.9% YoY.' },
  { href: '/apartments/oakland-ca', label: 'Oakland City Guide', desc: 'Current rent: $2,100/mo 1BR. 38% below SF.' },
  { href: '/apartments/san-jose-foreclosure-tracker', label: 'SJ Foreclosure Tracker', desc: 'Downtown SJ -7.8% YoY — the full story.' },
];

function RentBarChart() {
  const sorted = [...RENT_DATA].sort((a, b) => b.rent1br - a.rent1br);
  const maxRent = 4000;
  const barMaxWidth = 360;
  const labelWidth = 120;
  const rowHeight = 28;
  const topPadding = 40;
  const chartHeight = sorted.length * rowHeight + topPadding + 50;

  return (
    <div className="w-full overflow-x-auto my-6">
      <svg
        viewBox={`0 0 600 ${chartHeight}`}
        width="100%"
        aria-label="Horizontal bar chart showing median 1-bedroom rent by Bay Area neighborhood, March 2026"
        role="img"
      >
        {/* Title */}
        <text x="10" y="22" fontSize="13" fontWeight="bold" fill="#111827">
          Median 1BR Rent by Neighborhood — March 2026
        </text>
        {/* Rows */}
        {sorted.map((d, i) => {
          const barWidth = (d.rent1br / maxRent) * barMaxWidth;
          const y = topPadding + i * rowHeight;
          const color = d.yoy < 0 ? '#f87171' : d.yoy > 5 ? '#22c55e' : '#7c3aed';
          return (
            <g key={d.neighborhood}>
              {/* Label */}
              <text x="0" y={y + 16} fontSize="11" fill="#374151" textAnchor="start">
                {d.neighborhood}
              </text>
              {/* Bar */}
              <rect x={labelWidth} y={y + 2} width={barWidth} height={rowHeight - 6} fill={color} rx="3" />
              {/* Value */}
              <text x={labelWidth + barWidth + 6} y={y + 16} fontSize="11" fill="#111827" fontWeight="bold">
                ${d.rent1br.toLocaleString()}
              </text>
              {/* YoY badge */}
              <text x={labelWidth + barWidth + 70} y={y + 16} fontSize="10" fill={d.yoy < 0 ? '#dc2626' : '#16a34a'}>
                {d.yoy > 0 ? '+' : ''}{d.yoy}%
              </text>
            </g>
          );
        })}
        {/* Legend */}
        <g transform={`translate(10, ${chartHeight - 30})`}>
          <rect x="0" y="0" width="12" height="12" fill="#22c55e" rx="2" />
          <text x="16" y="10" fontSize="10" fill="#374151">Rising fast (&gt;5% YoY)</text>
          <rect x="130" y="0" width="12" height="12" fill="#7c3aed" rx="2" />
          <text x="146" y="10" fontSize="10" fill="#374151">Stable</text>
          <rect x="200" y="0" width="12" height="12" fill="#f87171" rx="2" />
          <text x="216" y="10" fontSize="10" fill="#374151">Declining YoY</text>
        </g>
      </svg>
    </div>
  );
}

export default function SfRentPricesContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [_contactOpen, setContactOpen] = useState(false);

  function getYoyColor(yoy: number): string {
    if (yoy < 0) return 'text-red-600';
    if (yoy > 5) return 'text-green-600';
    return 'text-gray-600';
  }

  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-green-800 font-medium">
              Last Updated: March 9, 2026 &middot; Next update: April 2026
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            SF Bay Area Rent Price Tracker — March 2026
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Median 1BR and 2BR rents for 15 Bay Area neighborhoods, updated monthly. Data is sourced from active listings,
            aggregated rental databases, and year-over-year comparisons from March 2025. Free to cite with attribution.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            <strong>Methodology:</strong> Median asking rents from aggregated Bay Area MLS, Zillow, and Apartments.com data.
            March 2026 data reflects 30-day rolling median. Some neighborhoods have limited sample sizes — treat outliers
            with appropriate confidence intervals.
          </p>
        </div>
      </section>

      {/* SVG Chart */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1BR Median Rent by Neighborhood</h2>
          <RentBarChart />
          <p className="text-sm text-gray-500 mt-2">
            Red = declining YoY (foreclosure effect visible in Downtown SJ). Green = fastest-rising. Purple = stable growth.
          </p>
        </div>
      </section>

      {/* Full Data Table */}
      <section className="py-12 px-4 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Rent Data — All 15 Neighborhoods</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-3 py-3 font-semibold text-gray-700 border border-gray-200">Neighborhood</th>
                  <th className="px-3 py-3 font-semibold text-gray-700 border border-gray-200">City/Area</th>
                  <th className="px-3 py-3 font-semibold text-gray-700 border border-gray-200">1BR Median</th>
                  <th className="px-3 py-3 font-semibold text-gray-700 border border-gray-200">2BR Median</th>
                  <th className="px-3 py-3 font-semibold text-gray-700 border border-gray-200">2BR/Person Split</th>
                  <th className="px-3 py-3 font-semibold text-gray-700 border border-gray-200">YoY Change</th>
                  <th className="px-3 py-3 font-semibold text-gray-700 border border-gray-200">Notes</th>
                </tr>
              </thead>
              <tbody>
                {RENT_DATA.map((row, i) => (
                  <tr key={row.neighborhood} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-3 font-medium text-gray-900 border border-gray-200">{row.neighborhood}</td>
                    <td className="px-3 py-3 text-gray-600 border border-gray-200">{row.city}</td>
                    <td className="px-3 py-3 text-gray-900 font-semibold border border-gray-200">
                      ${row.rent1br.toLocaleString()}
                    </td>
                    <td className="px-3 py-3 text-gray-900 border border-gray-200">
                      ${row.rent2br.toLocaleString()}
                    </td>
                    <td className="px-3 py-3 text-gray-900 border border-gray-200">
                      ${row.splitPer.toLocaleString()}/person
                    </td>
                    <td className={`px-3 py-3 font-semibold border border-gray-200 ${getYoyColor(row.yoy)}`}>
                      {row.yoy > 0 ? '+' : ''}{row.yoy}%
                    </td>
                    <td className="px-3 py-3 text-gray-500 border border-gray-200 text-xs">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Data as of March 9, 2026. Updated monthly.</p>
        </div>
      </section>

      {/* Trend Analysis */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What the March 2026 Data Shows</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Downtown San Jose: The Foreclosure Effect
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The Fay and Neo on First vacancies are pulling Downtown San Jose 1BR rents down 7.8% year-over-year —
                the only Bay Area market showing meaningful rent decline. Aggressive concessions are available at
                distressed buildings, with some landlords offering 1–2 months of free rent on 12-month leases. For
                renters with flexibility on location, Downtown SJ represents a significant short-term opportunity,
                though building quality and management stability warrant due diligence.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Palo Alto and Mountain View: The 7.9% Problem
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Both cities are showing the highest year-over-year rent growth in the Bay Area at +7.9%. Reserve at
                Mountain View, a newly leased complex, is showing the fastest individual-property growth. No new supply
                is being added to either market — Palo Alto's strict zoning limits pipeline development, and Mountain
                View's recent projects have been absorbed faster than anticipated by Google and startup employees
                returning to office. Renters in these markets should expect continued pressure through 2026.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                East Bay Value Gap Persists
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Oakland 1BR at $2,100/month is 38% below comparable SF neighborhoods like the Mission District.
                The BART premium — direct SF access — is not reflected in Oakland rents at current levels. This gap
                is unlikely to persist as remote-work mandates tighten at major Bay Area employers. Oakland's
                +3.1% YoY growth is modest relative to the spread, suggesting the market has not yet priced in
                the full return-to-office effect. East Bay remains the clearest value play in the Bay Area for
                renters with BART access requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Inner Sunset Quietly Outperforming
              </h3>
              <p className="text-gray-600 leading-relaxed">
                UCSF's Mission Bay expansion and the Parnassus campus proximity are driving Inner Sunset demand.
                At +6.1% YoY with limited new supply, this is one of SF's highest-trajectory neighborhoods for
                2026. The combination of N-Judah Muni access, low crime relative to comparable SF neighborhoods,
                and consistent institutional demand from UCSF staff and students creates a structural floor on
                vacancy that other SF submarkets lack. Renters looking at Inner Sunset should expect rents to
                continue outpacing the SF average.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roommate Savings Calculator */}
      <section className="py-12 px-4 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">The Roommate Math: What These Rents Mean</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="text-red-700 font-bold text-sm uppercase tracking-wide mb-2">Worst Case</div>
              <div className="text-xl font-bold text-gray-900 mb-1">Solo in San Francisco</div>
              <div className="text-3xl font-bold text-red-600 mb-3">$3,400–$3,900<span className="text-base font-normal text-gray-500">/mo</span></div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>$42,000–$47,000/year in rent</li>
                <li>Requires $110K–$130K income</li>
                <li className="text-red-600 font-medium">No flexibility on cost</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="text-green-700 font-bold text-sm uppercase tracking-wide mb-2">Best Case</div>
              <div className="text-xl font-bold text-gray-900 mb-1">Roommate Split in Sunnyvale</div>
              <div className="text-3xl font-bold text-green-600 mb-3">$1,900<span className="text-base font-normal text-gray-500">/person/mo</span></div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>$22,800/year in rent</li>
                <li>Requires $76K income</li>
                <li className="text-green-600 font-medium">$20,000/year less than SF solo</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <div className="text-purple-700 font-bold text-sm uppercase tracking-wide mb-2">Biggest Gap</div>
              <div className="text-xl font-bold text-gray-900 mb-1">SF Solo vs. Fremont Roommate</div>
              <div className="text-3xl font-bold text-purple-600 mb-3">$2,500<span className="text-base font-normal text-gray-500">/mo difference</span></div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>$30,000/year in savings</li>
                <li>Same BART access to SF</li>
                <li className="text-purple-600 font-medium">Maximum rent optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-purple-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Find a verified roommate and use this data — free</h2>
          <p className="text-purple-200 text-lg mb-8 leading-relaxed">
            Find MyRoomie is the only Bay Area roommate platform with verified government ID matching. No subscription.
            Use this rent data to negotiate — and find a verified roommate who knows the same numbers you do.
          </p>
          <a
            href={BETA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
          >
            Find Verified Bay Area Roommates — Free &rarr;
          </a>
          <p className="text-purple-300 text-sm mt-4">
            Free messaging &middot; Verified profiles &middot; No subscription &middot; No fake listings
          </p>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Explore by Neighborhood</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INTERNAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block p-4 border border-gray-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors group"
              >
                <div className="font-semibold text-gray-900 group-hover:text-purple-700 mb-1">{link.label}</div>
                <div className="text-sm text-gray-500">{link.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
