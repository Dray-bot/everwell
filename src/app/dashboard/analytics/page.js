'use client';

import { useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LineChart, PieChart, TrendingUp, Timer } from 'lucide-react';

export default function AnalyticsPage() {
  const { user } = useUser();

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-br from-[#E8F5E9] to-white px-4 sm:px-6 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-4 sm:p-8 space-y-10"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Analytics Overview 
          </h1>
          <Link
            href="/dashboard"
            className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow hover:scale-105 transition text-sm sm:text-base"
          >
            Back to Dashboard
          </Link>
        </div>

        <p className="text-gray-600 text-sm sm:text-lg">
          Deep dive into your digital well-being stats, {user?.firstName || 'Friend'}.
        </p>

        {/* Analytics Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {[{ icon: Timer, label: 'Average Daily Screen Time', value: '5h 10m' },
            { icon: TrendingUp, label: 'Focus Streak', value: '7 Days' },
            { icon: PieChart, label: 'Most Used App', value: 'Instagram - 2h' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:scale-[1.03] transition"
            >
              <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              <div>
                <p className="text-lg sm:text-xl font-bold text-gray-900">{item.value}</p>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom "Line Chart" Representation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-md p-5 sm:p-6 mt-10 space-y-6"
        >
          <div className="flex items-center gap-3">
            <LineChart className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            <p className="font-semibold text-gray-800 text-sm sm:text-base">Screen Time (Last 7 Days)</p>
          </div>
          <div className="space-y-3">
            {[{ day: 'Mon', value: 60 },
              { day: 'Tue', value: 70 },
              { day: 'Wed', value: 50 },
              { day: 'Thu', value: 80 },
              { day: 'Fri', value: 65 },
              { day: 'Sat', value: 90 },
              { day: 'Sun', value: 75 },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 group">
                <span className="w-10 text-sm text-gray-600">{item.day}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden relative">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-600 group-hover:scale-x-105 transition-transform origin-left"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
                <span className="w-10 text-sm text-gray-600 text-right">{item.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Custom "Pie Chart" Representation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-md p-5 sm:p-6 mt-10 space-y-6"
        >
          <div className="flex items-center gap-3">
            <PieChart className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            <p className="font-semibold text-gray-800 text-sm sm:text-base">App Usage Distribution</p>
          </div>
          <div className="relative w-40 h-40 mx-auto">
            <div className="relative w-full h-full rounded-full overflow-hidden group hover:scale-105 transition">
              <div className="absolute w-full h-full bg-purple-600 hover:opacity-90 transition-all" style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 10%, 50% 0)' }}></div> {/* 40% */}
              <div className="absolute w-full h-full bg-red-500 hover:opacity-90 transition-all" style={{ clipPath: 'polygon(50% 50%, 100% 10%, 75% 0, 0 0, 0 40%)' }}></div> {/* 30% */}
              <div className="absolute w-full h-full bg-green-700 hover:opacity-90 transition-all" style={{ clipPath: 'polygon(50% 50%, 0 40%, 0 75%, 25% 100%, 50% 100%)' }}></div> {/* 20% */}
              <div className="absolute w-full h-full bg-yellow-500 hover:opacity-90 transition-all" style={{ clipPath: 'polygon(50% 50%, 50% 100%, 100% 100%, 100% 50%)' }}></div> {/* 10% */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2"><span className="inline-block w-3 h-3 bg-purple-600 rounded-sm"></span>Instagram - 40%</div>
            <div className="flex items-center gap-2"><span className="inline-block w-3 h-3 bg-red-500 rounded-sm"></span>YouTube - 30%</div>
            <div className="flex items-center gap-2"><span className="inline-block w-3 h-3 bg-green-700 rounded-sm"></span>WhatsApp - 20%</div>
            <div className="flex items-center gap-2"><span className="inline-block w-3 h-3 bg-yellow-500 rounded-sm"></span>Others - 10%</div>
          </div>
        </motion.div>

        {/* Actions */}
        <div className="flex justify-center mt-12">
          <Link
            href="/dashboard/settings"
            className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:scale-105 transition"
          >
            Adjust Tracking Settings
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
