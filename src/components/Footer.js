'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Twitter, Mail, Apple, Play } from 'lucide-react';

export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full relative z-10 bg-gradient-to-b from-white to-[#E8F5E9] border-t border-white/20 shadow-[0_1px_10px_rgba(0,0,0,0.05)] backdrop-blur-md">
      <div className="h-1 w-full bg-gradient-to-r from-green-500 to-green-700 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* Branding and App Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left space-y-4">
            <p className="text-3xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
              Everwell
            </p>
            <p className="text-gray-600 text-sm md:max-w-xs">
              Empowering a mindful digital experience for a more focused you.
            </p>
            <div className="flex justify-center md:justify-start gap-5 pt-3">
              {[Github, Twitter, Mail].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href={
                    idx === 0
                      ? 'https://github.com'
                      : idx === 1
                      ? 'https://twitter.com'
                      : 'mailto:hello@everwell.com'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-600 hover:text-green-700 transition"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* App Store Buttons */}
          <div className="flex gap-4">
            <Link
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl text-sm shadow hover:scale-105 transition"
            >
              <Apple className="w-4 h-4" /> App Store
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl text-sm shadow hover:scale-105 transition"
            >
              <Play className="w-4 h-4" /> Play Store
            </Link>
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center md:text-left">
          <FooterLinkGroup title="Product" links={['Features', 'Pricing', 'Community', 'Integrations']} />
          <FooterLinkGroup title="Company" links={['About Us', 'Blog', 'Careers', 'Contact']} />
          <FooterLinkGroup title="Resources" links={['Help Center', 'FAQs', 'Guides', 'API Docs']} />

          {/* Subscription Box */}
          <div>
            <p className="font-semibold text-gray-800 mb-3">Subscribe</p>
            <form className="flex items-center bg-white/70 rounded-xl overflow-hidden shadow-inner">
              <input
                type="email"
                placeholder="Your Email"
                className="px-3 py-2 w-full text-sm text-gray-700 outline-none bg-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Line & Quote */}
      {year && (
        <div className="border-t border-white/20 py-6 text-center text-sm text-gray-600">
          &copy; {year} Everwell. All rights reserved. Made by Dray
        </div>
      )}
      <div className="w-full text-center py-4 text-sm text-green-700 font-medium animate-pulse-slow">
        &quot;Pause. Breathe. Reconnect with your focus.&quot;
      </div>

      {/* Pulse Animation */}
      <style jsx>{`
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}

// Footer Link Group Component
function FooterLinkGroup({ title, links }) {
  return (
    <div>
      <p className="font-semibold text-gray-800 mb-3">{title}</p>
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
          className="block text-gray-600 hover:text-green-700 text-sm py-1 transition"
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
