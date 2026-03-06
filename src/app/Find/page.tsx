'use client';
// app/Find/page.tsx
import Link from 'next/link';
import { ArrowRight, MapPin, Shield, MessageCircle } from 'lucide-react';
import { Events } from '@/lib/analytics';

export default function FindPage() {
  return (
    <main className="bg-[#FDFBF7] text-gray-900 pt-24 pb-16 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-green-700">Beta open now · Free forever</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Roommate search is coming.
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Beta testers go first.
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          We&apos;re building the roommate finder that Roomster should have been — verified profiles, free messaging, and a map that actually works. Join the beta now and get first access when search goes live.
        </p>

        <a
          href="https://forms.gle/qJQXtqEgHb45Y2Y8A"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => Events.formStart('find_page')}
          className="group inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg mb-4"
        >
          Claim Beta Access — It&apos;s Free
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="text-sm text-gray-400 mb-12">No credit card · 60 seconds · Founding member badge</p>

        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
            <Shield className="w-6 h-6 text-blue-600" />
            <span>Gov ID verified profiles</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
            <MessageCircle className="w-6 h-6 text-purple-600" />
            <span>Free to message, always</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
            <MapPin className="w-6 h-6 text-green-600" />
            <span>Draw your zone on the map</span>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-gray-500 mb-3">Already browsing by city?</p>
          <Link href="/" className="text-purple-600 hover:text-purple-700 font-semibold underline underline-offset-4">
            View all roommate city pages →
          </Link>
        </div>
      </div>
    </main>
  );
}
