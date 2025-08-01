'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures animations and Clerk load after hydration
  }, []);

  if (!isMounted) {
    // Prevents SSR mismatch on first render
    return (
      <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-[0_1px_10px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
            Everwell
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full fixed top-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-[0_1px_10px_rgba(0,0,0,0.05)]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
          Everwell
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
            Features
          </Link>
          <Link href="#pricing" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
            Pricing
          </Link>
          <Link href="#blog" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
            Blog
          </Link>

          <SignedOut>
            <Link
              href="/sign-in"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium transition"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="ml-3 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm font-semibold shadow transition"
            >
              Get Started
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu" className="text-gray-700">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg rounded-b-xl overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              <Link href="#features" onClick={() => setIsOpen(false)} className="text-gray-700 text-base font-medium hover:underline">
                Features
              </Link>
              <Link href="#pricing" onClick={() => setIsOpen(false)} className="text-gray-700 text-base font-medium hover:underline">
                Pricing
              </Link>
              <Link href="#blog" onClick={() => setIsOpen(false)} className="text-gray-700 text-base font-medium hover:underline">
                Blog
              </Link>

              <SignedOut>
                <Link
                  href="/sign-in"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 text-base font-medium hover:underline"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg text-center shadow hover:brightness-110 transition"
                >
                  Get Started
                </Link>
              </SignedOut>

              <SignedIn>
                <div className="flex justify-start">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
