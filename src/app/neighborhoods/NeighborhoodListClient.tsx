'use client'
// src/app/neighborhoods/NeighborhoodListClient.tsx

import React, { useState } from 'react'
import Link from 'next/link'
import { MapPin, Train, ArrowRight, Building2, DollarSign } from 'lucide-react'
import Navbar from '../../components/Navbar'
import ContactUs from '../../components/ContactUs'
import { Neighborhood } from '@/components/_data/neighborhoods'

const CITY_LABELS: Record<string, string> = {
  'san-francisco-ca': 'San Francisco',
  'oakland-ca': 'Oakland',
  'san-jose-ca': 'San Jose',
  'berkeley-ca': 'Berkeley',
  'sunnyvale-ca': 'Sunnyvale',
}

function NeighborhoodCard({ n }: { n: Neighborhood }) {
  return (
    <article className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 overflow-hidden">
      <Link href={`/neighborhoods/${n.slug}`} className="block h-full">
        {/* Color bar — encodes city */}
        <div className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-400" />

        <div className="p-5">
          {/* City badge */}
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
              <MapPin className="w-3 h-3" />
              {n.city}, {n.state}
            </span>
            <span className="text-xs text-slate-400">{n.readTime}</span>
          </div>

          {/* Name */}
          <h2 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors leading-snug">
            {n.neighborhood}
          </h2>

          {/* Vibe */}
          <p className="text-sm text-slate-500 mb-4 line-clamp-2">{n.vibe}</p>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-green-50 rounded-lg p-2.5">
              <div className="flex items-center gap-1.5 mb-0.5">
                <DollarSign className="w-3 h-3 text-green-600" />
                <span className="text-xs font-semibold text-green-700">Shared room</span>
              </div>
              <p className="text-sm font-bold text-slate-800">{n.roomRent}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-2.5">
              <div className="flex items-center gap-1.5 mb-0.5">
                <Train className="w-3 h-3 text-blue-600" />
                <span className="text-xs font-semibold text-blue-700">Transit</span>
              </div>
              <p className="text-xs text-slate-600 leading-snug line-clamp-2">{n.transit.split('—')[0].trim()}</p>
            </div>
          </div>

          {/* Savings callout */}
          <div className="bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 mb-4">
            <p className="text-xs font-semibold text-amber-700">{n.savings}</p>
          </div>

          {/* Read more */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <span className="text-xs text-slate-400">{n.bestFor.split(',')[0]}</span>
            <span className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
              Read guide <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default function NeighborhoodListClient({ neighborhoods }: { neighborhoods: Neighborhood[] }) {
  const [isOpen, setIsOpen] = useState(false)

  const sfNeighborhoods = neighborhoods.filter(n => n.citySlug === 'san-francisco-ca')
  const eastBayNeighborhoods = neighborhoods.filter(n => ['oakland-ca', 'berkeley-ca'].includes(n.citySlug))
  const southBayNeighborhoods = neighborhoods.filter(n =>
    ['san-jose-ca', 'sunnyvale-ca', 'santa-clara-ca', 'mountain-view-ca'].includes(n.citySlug)
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar setIsOpen={setIsOpen} />
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-5">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-800">
              {neighborhoods.length} Bay Area neighborhood guides
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900">
            Bay Area Neighborhood Guides
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Real rent ranges, transit reality, employer proximity, and how to find a verified
            roommate in every major Bay Area neighborhood.
          </p>
          <div className="mt-6">
            <Link
              href="/downloadApp"
              className="inline-block bg-blue-600 text-white font-semibold px-7 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Find a Verified Roommate — Free
            </Link>
          </div>
        </div>

        {/* SF neighborhoods */}
        {sfNeighborhoods.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-500" />
              San Francisco
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {sfNeighborhoods.map(n => <NeighborhoodCard key={n.slug} n={n} />)}
            </div>
          </section>
        )}

        {/* East Bay */}
        {eastBayNeighborhoods.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-500" />
              East Bay — Oakland &amp; Berkeley
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {eastBayNeighborhoods.map(n => <NeighborhoodCard key={n.slug} n={n} />)}
            </div>
          </section>
        )}

        {/* South Bay */}
        {southBayNeighborhoods.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-500" />
              South Bay — San Jose, Sunnyvale &amp; Silicon Valley
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {southBayNeighborhoods.map(n => <NeighborhoodCard key={n.slug} n={n} />)}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <div className="mt-8 bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Know your neighborhood. Now find your roommate.</h2>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">
            Every guide on this page points to the same conclusion: you need a verified platform with
            free messaging. That&apos;s exactly what we&apos;re building.
          </p>
          <Link
            href="/downloadApp"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Join the Beta — It&apos;s Free
          </Link>
          <p className="text-blue-200 text-sm mt-3">No paywall. No spam. Founding members get free messaging forever.</p>
        </div>
      </main>
    </div>
  )
}
