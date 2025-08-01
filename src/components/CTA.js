'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative w-full bg-gradient-to-br from-white to-[#E8F5E9] px-6 py-28 overflow-hidden">
      {/* Soft Background Blobs */}
      <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[35rem] h-[35rem] bg-green-300 opacity-20 blur-3xl rounded-full z-0"></div>
      <div className="absolute -bottom-40 right-1/2 transform translate-x-1/2 w-[30rem] h-[30rem] bg-green-100 opacity-30 blur-3xl rounded-full z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold md:font-extrabold text-gray-900 leading-tight md:leading-snug tracking-tight"
        >
          Ready to <span className="bg-gradient-to-r from-green-500 to-green-700 text-transparent bg-clip-text">Take Control</span> of Your Digital Life?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
        >
          Start building mindful screen habits with <span className="font-semibold text-gray-900">Everwell</span>. Join a platform designed to reset how you experience your devices — thoughtfully and intentionally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-5"
        >
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 text-white text-base md:text-lg font-semibold bg-gradient-to-r from-green-500 to-green-700 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Get Started 
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 text-green-700 text-base md:text-lg font-semibold border border-green-600 rounded-2xl hover:bg-green-50 transition duration-300"
          >
            Learn More →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
