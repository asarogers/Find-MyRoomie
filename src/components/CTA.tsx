'use client';
import React from 'react'
import { MapPin, Shield, MessageCircle, Users, Clock } from 'lucide-react'
import "aos/dist/aos.css"
import { Events } from '@/lib/analytics'

interface CTAProps { city?: string }

export default function CTA({ city }: CTAProps) {
  const locationText = city ? ` in ${city}` : ''
  return (
    <section className="px-6 py-20 text-center bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Find your people{locationText}.
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Free to message. Always.
          </span>
        </h2>

        <p className="text-xl md:text-2xl mb-4 text-gray-600 leading-relaxed">
          Beta testers get founding member status, 6 months free premium, and first access when we launch{locationText}.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-green-700">Beta open now · Free forever · No credit card</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a
            href="https://forms.gle/qJQXtqEgHb45Y2Y8A"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => Events.formStart('cta_section')}
            className="group bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
          >
            Claim Beta Access{locationText}
            <Users className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
          <a
            href="#map"
            className="group border-2 bg-white border-black hover:bg-black hover:text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            Explore the Map{locationText}
            <MapPin className="ml-2 w-5 h-5 group-hover:bounce transition-transform" />
          </a>
        </div>

        <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>100% Verified</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>60 second signup</span>
          </div>
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-4 h-4" />
            <span>Free to message, always</span>
          </div>
        </div>
      </div>
    </section>
  )
}
