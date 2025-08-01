'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for individuals starting mindful screen habits.',
      features: ['Track Screen Time', 'Basic Analytics', 'Community Access'],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$9/mo',
      description: 'For professionals seeking advanced insights and custom goals.',
      features: ['All Starter Features', 'Advanced Analytics', 'Goal Tracking', 'Priority Support'],
      cta: 'Upgrade to Pro',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Contact Us',
      description: 'Custom solutions for teams and organizations.',
      features: ['All Pro Features', 'Team Management', 'Dedicated Support', 'Custom Integrations'],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-[#E8F5E9] px-6">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent"
        >
          Pricing built for clarity & growth
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Flexible plans designed to scale with your well-being goals.
        </motion.p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="mt-16 grid gap-10 md:grid-cols-3 max-w-7xl mx-auto">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className={`flex flex-col justify-between rounded-2xl p-8 shadow-xl backdrop-blur-md border transition ${
              plan.highlight
                ? 'bg-white/80 border-green-600 scale-105 shadow-green-200'
                : 'bg-white/50 border-white/20 hover:shadow-md'
            } hover:scale-105`}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-3xl font-extrabold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
                {plan.price}
              </p>
              <p className="mt-3 text-gray-600 text-sm">{plan.description}</p>
              <ul className="mt-6 space-y-3 text-gray-700 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="#"
              className={`mt-8 inline-block text-center px-6 py-3 rounded-xl text-sm font-semibold shadow transition ${
                plan.highlight
                  ? 'bg-gradient-to-r from-green-500 to-green-700 text-white hover:brightness-110'
                  : 'border border-green-600 text-green-600 hover:bg-green-50'
              }`}
            >
              {plan.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
