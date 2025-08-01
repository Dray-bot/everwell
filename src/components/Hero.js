'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <section ref={heroRef} className="relative w-full bg-[#D0EEDB] pt-28 pb-16 text-center overflow-hidden font-sans">

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2 w-[60rem] h-[60rem] bg-green-200 opacity-20 rounded-full blur-[200px] animate-blob-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-green-100 opacity-20 rounded-full blur-[160px] animate-blob-slow-reverse" />
      </div>

      {/* Parallax Floating Shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full backdrop-blur-md animate-float-slow"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full backdrop-blur-md animate-float-slower"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14 md:gap-24">
        
        {/* Text Content */}
        <motion.div style={{ y: textY, opacity: textOpacity }} className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Reclaim Your Digital Life with{' '}
            <span className="bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
              Everwell
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
            A wellness-first approach to screen time, crafted for mindful living. It&apos;s not just another tracker—it&apos;s your digital reset button.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="/sign-up"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 hover:bg-green-700 text-white rounded-xl text-base font-semibold shadow-md transition hover:shadow-lg hover:scale-105"
            >
              Get Started
            </Link>
            <a
              href="#features"
              className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl text-base font-semibold shadow-sm hover:shadow-md hover:scale-105 transition"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* 3D Tilt Hero Illustration */}
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={false} scale={1.05} className="flex-1">
          <Image
            src="/illustrations/mindful.svg"
            alt="Mindful Thinking Illustration"
            width={500}
            height={500}
            className="w-full max-w-md h-auto"
            priority
          />
        </Tilt>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blobSlow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.05); }
        }
        @keyframes blobSlowReverse {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          50% { transform: translate(0%, 0%) scale(1.07); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatSlower {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        .animate-blob-slow {
          animation: blobSlow 10s ease-in-out infinite;
        }
        .animate-blob-slow-reverse {
          animation: blobSlowReverse 12s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: floatSlower 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
