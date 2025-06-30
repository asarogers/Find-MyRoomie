"use client";
import React, { useEffect, useState, Suspense } from "react";
import Head from 'next/head';
import AOS from "aos";
import "aos/dist/aos.css";
import ContactUs from "../components/ContactUs";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PainPoints from "../components/PainPoints";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Safety from "../components/Safety";
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
        <title>MyRoomie • Find Verified Roommates in 30+ U.S. Cities</title>
        <meta name="description" content="Discover and connect with verified roommates across New York, Los Angeles, Chicago, and 27 more U.S. metros on MyRoomie." />
      </Head>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
        
      <Navbar setIsOpen={setIsOpen} />
      <HeroSection />
      <PainPoints />
      <Features />
      <HowItWorks />
      <Safety />
      <Guarantees />
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