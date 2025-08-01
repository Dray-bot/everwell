'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const blogPosts = [
  {
    title: '5 Steps to Reduce Digital Distractions',
    excerpt: 'Learn practical strategies to minimize screen time distractions and improve focus in your daily routine.',
    image: '/illustrations/going-offline.svg',
    link: '/blog/reduce-digital-distractions',
    date: 'July 25, 2025',
  },
  {
    title: 'How Mindful Tech Usage Boosts Productivity',
    excerpt: 'Discover how being intentional with your device usage can lead to significant gains in personal productivity.',
    image: '/illustrations/visionary-technology.svg',
    link: '/blog/mindful-tech-productivity',
    date: 'August 1, 2025',
  },
  {
    title: 'The Science Behind Digital Well-being',
    excerpt: 'Dive into the latest research on how digital habits affect mental health and overall well-being.',
    image: '/illustrations/zone.svg',
    link: '/blog/science-digital-wellbeing',
    date: 'August 10, 2025',
  },
];

export default function BlogSection() {
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
          Insights & Resources
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Explore articles to help you master digital well-being.
        </motion.p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-3 max-w-7xl mx-auto">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="group relative rounded-2xl overflow-hidden shadow-xl bg-white/80 border border-white/30 hover:scale-105 transition backdrop-blur-lg cursor-pointer"
          >
            <Link href={post.link} className="absolute inset-0 z-10" />

            <div className="relative w-full h-56 md:h-64">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover w-full h-full"
                priority
              />
            </div>

            <div className="p-6 flex flex-col h-[250px] justify-between space-y-4 relative z-20">
              <div>
                <p className="text-xs text-gray-500">{post.date}</p>
                <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
              </div>
              <span className="inline-block text-green-600 text-sm font-medium group-hover:underline">
                Read More →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
