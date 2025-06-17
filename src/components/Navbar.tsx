"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Home, TrendingUp, Star, Users, Clock, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  setIsOpen: (open: boolean) => void;
}

export default function Navbar({ setIsOpen }: NavbarProps) {
  const [trustBarVisible, setTrustBarVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sections = ["Home", "Features", "How It Works"];

  const getHashLink = (item: string) => `/#${item.replace(/\s+/g, "").toLowerCase()}`;

  return (
    <>
      <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Home className="w-6 h-6 text-black mr-2" />
            <span className="text-xl font-bold text-gray-900">MyRoomy</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8 text-gray-700 items-center">
              {sections.map((item) => (
                <li key={item}>
                  <Link href={getHashLink(item)} className="text-gray-700 hover:text-black font-medium">
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-gray-700 hover:text-black font-medium">
                  Blogs
                </Link>
              </li>
              <li>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsOpen(true)}
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:brightness-110 transition-all"
                >
                  Contact Us
                </motion.button>
              </li>
            </ul>
          </nav>

          {/* Mobile nav - Contact Us button and hamburger */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(true)}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:brightness-110 transition-all text-sm"
            >
              Contact
            </motion.button>

            <button
              className="focus:outline-none"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav drawer - only navigation items */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-md"
          >
            <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-700">
              {sections.map((item) => (
                <li key={item} onClick={() => setMobileMenuOpen(false)}>
                  <Link href={getHashLink(item)} className="block font-medium hover:text-black py-2">
                    {item}
                  </Link>
                </li>
              ))}
              <li onClick={() => setMobileMenuOpen(false)}>
                <Link href="/blog" className="block font-medium hover:text-black py-2">
                  Blogs
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </header>

      {/* Trust bar */}
      {trustBarVisible && (
        <div className="fixed top-[72px] left-0 w-full bg-gradient-to-r from-blue-800 via-cyan-700 to-gray-800 text-white px-6 py-3 text-center z-40">
          <div className="relative max-w-6xl mx-auto">
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>Our Goal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>10,000+ verified users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>7-day avg. match time</span>
              </div>
            </div>
            <button
              onClick={() => setTrustBarVisible(false)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-white/20 rounded-full p-1 transition-colors"
              aria-label="Close trust bar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Spacer for fixed header + trust bar */}
      <div className={trustBarVisible ? "mt-[120px]" : "mt-[72px]"} />
    </>
  );
}
