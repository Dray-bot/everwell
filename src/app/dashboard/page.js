'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BarChart3, Timer, CheckCircle, Bell, Coffee, Smile, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <main className="pt-24 min-h-screen bg-gradient-to-br from-[#E8F5E9] to-white px-4 sm:px-6 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-4 sm:p-8 space-y-10"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Welcome, {user?.firstName || 'Friend'} 👋
          </h1>
          <UserButton afterSignOutUrl="/" />
        </div>

        {/* Reminder Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-green-100 border border-green-300 rounded-xl p-3 sm:p-4 flex items-start sm:items-center gap-3"
        >
          <Bell className="text-green-600 w-5 h-5 sm:w-6 sm:h-6 mt-1 sm:mt-0" />
          <div className="text-sm sm:text-base text-green-800">
            Time for a 5-minute mindful break. You’ve earned it. ✨
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {[{ icon: Timer, label: 'Screen Time Today', value: '3h 45m' },
            { icon: BarChart3, label: 'Focus Sessions', value: '2 Sessions' },
            { icon: CheckCircle, label: 'Current Streak', value: '7 Days' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-2xl shadow p-4 flex flex-col items-center hover:scale-[1.03] transition"
            >
              <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mb-3" />
              <p className="text-xl sm:text-2xl font-bold text-gray-900">{item.value}</p>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Progress Tracker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow p-4 sm:p-6 space-y-3"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Weekly Goal Progress</h2>
          <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden">
            <div className="bg-green-500 h-full rounded-full" style={{ width: '65%' }}></div>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">You’ve achieved 65% of your weekly mindfulness goals.</p>
        </motion.div>

        {/* Activity Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-white rounded-2xl shadow p-4 sm:p-6 space-y-5"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Recent Activities</h2>
          <div className="space-y-4">
            {[{ icon: Coffee, activity: 'Took a mindful break', time: '10 mins ago' },
              { icon: Smile, activity: 'Completed Focus Session #2', time: '1 hour ago' },
              { icon: TrendingUp, activity: 'Achieved a new 7-day streak', time: 'Yesterday' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                <div className="flex justify-between w-full">
                  <p className="text-gray-700 text-sm sm:text-base">{item.activity}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mindful Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="bg-white rounded-2xl shadow p-4 sm:p-6 space-y-6"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Mindful Activities for You</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {[{ title: 'Meditation Session', image: '/illustrations/meditation.svg' },
              { title: 'Stretch Break', image: '/illustrations/stability.svg' },
              { title: 'Nature Walk', image: '/illustrations/walking.svg' },
              { title: 'Journaling Time', image: '/illustrations/journaling.svg' },
              { title: 'Hydration Reminder', image: '/illustrations/cool-break.svg' },
              { title: 'Digital Detox', image: '/illustrations/log-out.svg' },
            ].map((activity, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-2 hover:scale-105 transition">
                <div className="w-20 h-20 sm:w-28 sm:h-28 relative">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-700 text-xs sm:text-sm font-medium">{activity.title}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Article Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="bg-white rounded-2xl shadow p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">The Power of Touching Grass 🌿</h2>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              Spending time outdoors and reconnecting with nature is one of the simplest yet most powerful ways to reset your mental clarity.
              A short walk outside, feeling the grass beneath your feet, or breathing in fresh air can significantly improve your mood,
              reduce stress levels, and enhance focus for the rest of your day.
            </p>
            <Link
              href="/dashboard"
              className="inline-block mt-4 text-green-600 font-medium hover:underline"
            >
              Read Full Article →
            </Link>
          </div>
          <div className="w-40 h-40 sm:w-48 sm:h-48 relative">
            <Image
              src="/illustrations/touching-grass.svg"
              alt="Touching Grass Illustration"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
          <Link
            href="/dashboard/analytics"
            className="px-5 py-2.5 bg-green-600 text-white rounded-lg shadow hover:scale-105 transition text-sm sm:text-base"
          >
            View Detailed Analytics
          </Link>
          <Link
            href="/dashboard/settings"
            className="text-green-700 hover:underline font-medium text-sm sm:text-base"
          >
            Go to Settings
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
