'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Pause, Play, RotateCcw } from 'lucide-react';
import Link from 'next/link';

export default function FocusTimerPage() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const resetTimer = () => {
    setTimeLeft(25 * 60);
    setIsRunning(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E8F5E9] to-white px-4 sm:px-6 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-10 space-y-10 text-center"
      >
        <div className="flex justify-between items-center">
          <Link href="/dashboard" className="flex items-center gap-2 text-green-600 hover:underline">
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>
          <button onClick={resetTimer} className="text-red-500 hover:underline flex items-center gap-2">
            <RotateCcw className="w-5 h-5" /> Reset
          </button>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900">Focus Timer</h1>
        <p className="text-gray-600">Stay in the zone. One session at a time. ⏳</p>

        <div className="text-6xl sm:text-7xl font-mono text-green-700">{formatTime(timeLeft)}</div>

        <div className="flex justify-center items-center gap-6">
          {isRunning ? (
            <button
              onClick={() => setIsRunning(false)}
              className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:scale-105 transition flex items-center gap-2"
            >
              <Pause className="w-5 h-5" /> Pause
            </button>
          ) : (
            <button
              onClick={() => setIsRunning(true)}
              className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:scale-105 transition flex items-center gap-2"
            >
              <Play className="w-5 h-5" /> Start
            </button>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6"
        >
          <p className="text-gray-600 text-sm">
            Tip: Use this timer for deep work sessions. After completing, reward yourself with a short mindful break.
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
