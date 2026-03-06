'use client';
import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { Events } from '@/lib/analytics';

const rows = [
  { feature: 'Message roommates', roomster: '$30/month subscription', us: 'Free, always' },
  { feature: 'Profile verification', roomster: 'None', us: 'Gov ID + background check' },
  { feature: 'Fake profiles', roomster: 'Common complaint', us: 'Banned within 24h of report' },
  { feature: 'Location filtering', roomster: 'Broken / city-level only', us: 'Draw your exact zone on the map' },
  { feature: 'Founding member perks', roomster: 'N/A', us: '6 months free premium + badge' },
  { feature: 'Customer support', roomster: 'Ticket queue, days to respond', us: 'Direct line to the founder' },
];

export default function ComparisonTable() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-3">
            Why switch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Roomster is broken.{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              We built the fix.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Roomster charges $30/month just to read a message. Users are leaving in waves. Here&apos;s what they&apos;re switching to.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-500 w-1/3">Feature</th>
                <th className="py-4 px-6 text-center text-sm font-semibold text-gray-400 w-1/3">Roomster</th>
                <th className="py-4 px-6 text-center text-sm font-bold text-purple-700 w-1/3 bg-purple-50">
                  Find MyRoomie ✓
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                >
                  <td className="py-4 px-6 text-sm font-medium text-gray-800">{row.feature}</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center gap-1.5 text-sm text-red-600">
                      <X className="w-4 h-4 flex-shrink-0" />
                      {row.roomster}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center bg-purple-50/30">
                    <span className="inline-flex items-center gap-1.5 text-sm text-green-700 font-medium">
                      <Check className="w-4 h-4 flex-shrink-0" />
                      {row.us}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://forms.gle/qJQXtqEgHb45Y2Y8A"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => Events.formStart('comparison_table')}
            className="group inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Switch for free — takes 60 seconds
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-gray-400 mt-3">No credit card · Free forever · Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
