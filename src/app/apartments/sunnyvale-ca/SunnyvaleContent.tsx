"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

const BETA_URL = "https://forms.gle/qJQXtqEgHb45Y2Y8A";

export default function SunnyvaleContent() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && <ContactUs onClose={() => setIsOpen(false)} />}
      <Navbar setIsOpen={setIsOpen} />
      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">
        <section className="pt-28 pb-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold mb-5">Page Coming Soon</h1>
            <p className="text-xl text-gray-600 mb-8">This page is under construction.</p>
            <a href={BETA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors">Get Early Access &rarr;</a>
          </div>
        </section>
      </main>
      <Footer setIsOpen={setIsOpen} />
    </>
  );
}
