"use client";
import React, { useEffect, useState, Suspense } from "react";
import Head from 'next/head';
import AOS from "aos";
import "aos/dist/aos.css";
import ContactUs from "../components/ContactUs";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PainPoints from "../components/PainPoints";
import ComparisonTable from "../components/ComparisonTable";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Safety from "../components/Safety";
import Testimonials from "../components/Testimonials";
import Guarantees from "../components/Guarantees";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import dynamic from 'next/dynamic';

const CityIndex = dynamic(() => import('../components/CityIndex'), { ssr: false });

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-[#FDFBF7] text-gray-900 overflow-x-hidden">
      <Head>
        <title>MyRoomie - Find Verified Roommates in 30+ U.S. Cities</title>
        <meta name="description" content="Discover and connect with verified roommates across New York, Los Angeles, Chicago, and 27 more U.S. metros on MyRoomie." />
      </Head>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
        
      <Navbar setIsOpen={setIsOpen} />
      <HeroSection />
      <PainPoints />
      <ComparisonTable />
      <Features />
      <HowItWorks />
      <Safety />
      <Testimonials />
      <Guarantees />
      <section className="px-6 py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-4">Why this exists</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Built by someone who lived this problem
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            I moved to a new city with two dogs and almost no lead time. I tried Roomster — paid $30 just to find out the listing was dead. I tried Craigslist — met a scammer on day two. Facebook groups were ghost towns.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            So I built what I needed: a roommate finder where you can message anyone for free, every profile is verified, and the location filter actually works. Find MyRoomie is what Roomster should have been.
          </p>
          <p className="text-lg font-semibold text-gray-800">
            — Asa, Founder
          </p>
          <p className="text-sm text-gray-400 mt-1">Beta tester #1 · Chicago, IL</p>
        </div>
      </section>
      <CTA />
      <section className="py-20 bg-gradient-to-br from-[#E4DDD2] to-[#D6CFC4]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
            Explore Roommates by City
          </h2>
          <Suspense fallback={<div className="text-center py-12">Loading cities…</div>}>
            <CityIndex />
          </Suspense>
        </div>
      </section>
      <Footer setIsOpen={setIsOpen} />
    </div>
  );
}