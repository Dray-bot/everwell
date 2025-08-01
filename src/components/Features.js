'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    icon: '/icons/screentime.svg',
    title: 'Screen Time Insights',
    description: 'Understand how much time you’re spending on apps and devices with detailed breakdowns.',
  },
  {
    icon: '/icons/progress.svg',
    title: 'Progress Tracking',
    description: 'Set digital well-being goals and visually track your improvement over time.',
  },
  {
    icon: '/icons/notification.svg',
    title: 'Mindful Reminders',
    description: 'Custom nudges to help you take meaningful breaks and refocus your attention.',
  },
  {
    icon: '/icons/bluetooth.svg',
    title: 'Focus Mode',
    description: 'Block distractions and stay locked in with our advanced focus timer.',
  },
  {
    icon: '/icons/stocks.svg',
    title: 'Deep Analytics',
    description: 'Get actionable insights with intuitive visual reports and trends.',
  },
  {
    icon: '/icons/community.svg',
    title: 'Community Challenges',
    description: 'Join challenges with friends to improve digital habits together.',
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full py-28 bg-gradient-to-b from-white to-[#E8F5E9] px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center space-y-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold md:font-extrabold text-gray-900 leading-tight md:leading-snug tracking-tight"
        >
          Features Crafted for <span className="bg-gradient-to-r from-green-500 to-green-700 text-transparent bg-clip-text">Modern Wellness</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            >
              {/* Icon with subtle hover pulse */}
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center transition duration-300"
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">{feature.description}</p>

              {/* Subtle Animated Glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.15 }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-green-400 via-green-300 to-green-100 blur-3xl z-0 transition duration-500"
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
