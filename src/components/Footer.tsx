"use client";

import React from 'react';
import Link from 'next/link';
import {
  Home,
  MapPin,
  Shield,
  Users,
  Mail,
  Twitter,
  Instagram,
} from 'lucide-react';

interface FooterProps {
  setIsOpen: (open: boolean) => void;
}

export default function Footer({ setIsOpen }: FooterProps) {
  const internalLinks = [
    { label: 'Features', href: '/#features' },
    { label: 'How It Works', href: '/#howitworks' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'FAQs', href: '/#faqs' },
  ];

  const trustLinks = [
    { label: 'Verification Tiers', href: '/#verificationtiers' },
    { label: 'Community Guidelines', href: '/#communityguidelines' },
    { label: 'Report a Profile', href: '/#reportaprofile' },
    { label: 'Safety Tips', href: '/#safetytips' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '/#aboutus' },
    { label: 'Careers', href: '/careers' },
    { label: 'Terms & Privacy', href: '/terms' },
  ];

  const policyLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
  ];

  return (
    <footer className="bg-[#BFBFBF] text-gray-800">
      {/* Top Section */}
      <div className="px-6 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center mb-4">
            <Home className="w-6 h-6 mr-2 text-gray-900" />
            <span className="text-2xl font-bold text-gray-900">MyRoomy</span>
          </Link>
          <p className="text-gray-600 mb-4 leading-relaxed">
            The roommate finder that actually works. Safe, real, and free.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              f
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              t
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              in
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h5 className="font-bold mb-4 text-lg">Product</h5>
          <ul className="space-y-3">
            {internalLinks.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="text-gray-600 hover:text-gray-900 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Trust & Safety */}
        <div>
          <h5 className="font-bold mb-4 text-lg">Trust &amp; Safety</h5>
          <ul className="space-y-3">
            {trustLinks.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="text-gray-600 hover:text-gray-900 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h5 className="font-bold mb-4 text-lg">Company</h5>
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Contact Us
              </button>
            </li>
            {companyLinks.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="text-gray-600 hover:text-gray-900 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-400 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="text-gray-600 mb-4 md:mb-0">
            © 2025 MyRoomy. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            {policyLinks.map(({ label, href }) => (
              <Link key={label} href={href} className="text-gray-600 hover:text-gray-900 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
