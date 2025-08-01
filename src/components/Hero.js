'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#D0EEDB] to-white pt-28 pb-16 text-center overflow-hidden font-sans">
      
      {/* Soft Glow Effects */}
      <div className="absolute top-[-10rem] left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] bg-green-200 opacity-25 rounded-full blur-[200px] z-0"></div>
      <div className="absolute bottom-[-12rem] right-[-12rem] w-[35rem] h-[35rem] bg-green-100 opacity-30 rounded-full blur-[160px] z-0"></div>

      {/* SVG Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-32">
          <path
            fill="#E8F5E9"
            d="M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,117.3C672,117,768,107,864,117.3C960,128,1056,160,1152,186.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14 md:gap-24">
        
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
          >
            Reclaim Your Digital Life with{' '}
            <span className="bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
              Everwell
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed"
          >
            A wellness-first approach to screen time, crafted for mindful living. It's not just another tracker—it's your digital reset button.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-start gap-4"
          >
            <a
              href="/sign-up"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl text-base font-semibold shadow-md transition"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl text-base font-semibold shadow-sm hover:shadow-md transition"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Animated Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/illustrations/mindful.svg"
            alt="Mindful Thinking Illustration"
            width={500}
            height={500}
            className="w-full max-w-md h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
