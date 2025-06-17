import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";


interface HeroSectionProps {
  city?: string;
}

export default function HeroSection({ city }: HeroSectionProps) {
  const cityText = city ? ` in ${city}` : "";

  const headline = (
    <>
      Find your <span className="gradient-text">vibe</span>{cityText}.<br />
      Find your <span className="gradient-text">space</span>{cityText}.<br />
      Find <span className="gradient-text">MyRoomie</span>.
    </>
  );

  const subtext = city
    ? `Looking for roommates${cityText}? The first roommate finder that's safe, real, and tailored for your area.`
    : "The first roommate finder that's safe, real, and actually works. Join thousands who've ditched fake profiles and broken filters for genuine connections.";

  return (
    <section id="home" className="hero-section">
      <div className="hero-container" data-aos="fade-up">
        <h1 className="hero-heading">{headline}</h1>
        <p className="hero-subtext">{subtext}</p>

        <div className="hero-buttons">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://forms.gle/qJQXtqEgHb45Y2Y8A"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-primary"
          >
            Become a beta tester
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#howitworks"
            className="hero-btn-secondary"
          >
            See How It Works
            <MapPin className="ml-2 w-5 h-5" />
          </motion.a>
        </div>

        <div id="map" className="map-container">
          <div className="map-frame">
            <div className="map-inner">
              <div className="map-window-controls">
                <div className="map-dots">
                  <div className="map-dot dot-red" />
                  <div className="map-dot dot-yellow" />
                  <div className="map-dot dot-green" />
                </div>
                <span className="text-sm text-gray-500">MyRoomie Map Demo</span>
              </div>
              <div className="map-text">
                <div className="text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                  <p className="map-description">Interactive map demo coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
