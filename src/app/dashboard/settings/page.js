'use client';

import { useUser, useClerk } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Sun, Moon, Bell, User, ShieldOff, CreditCard, Trash2 } from 'lucide-react';

export default function SettingsPage() {
  const { user } = useUser();
  const { openUserProfile, signOut, redirectToSignIn } = useClerk();

  const [theme, setTheme] = useState('light');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedNotifications = localStorage.getItem('notifications') === 'true';
    if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme);
    setNotificationsEnabled(savedNotifications);
  }, []);

  const toggleTheme = (newTheme) => {
    if (newTheme !== 'light' && newTheme !== 'dark') return; // validate input

   setTheme(newTheme);
   localStorage.setItem('theme', newTheme);
   document.documentElement.classList.toggle('dark', newTheme === 'dark');
 };

  const handleNotificationsToggle = () => {
    const newState = !notificationsEnabled;
    setNotificationsEnabled(newState);
    localStorage.setItem('notifications', newState.toString());
  };

  const handleDeleteAccount = async () => {
    const confirmDelete = confirm('⚠️ Are you sure you want to delete your account? This cannot be undone.');
    if (confirmDelete) {
      try {
        await user?.delete();
        alert('Account deleted successfully.');
        redirectToSignIn();
      } catch (err) {
        console.error(err);
        alert('Failed to delete account. Try again.');
      }
    }
  };

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-br from-[#E8F5E9] to-white px-4 sm:px-6 py-8 sm:py-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-10 space-y-12"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Settings</h1>
          <Link
            href="/dashboard"
            className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow hover:scale-105 transition text-sm"
          >
            Back to Dashboard
          </Link>
        </div>

        {/* Profile Section */}
        <Section title="Profile" icon={User}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-lg font-medium text-gray-800">{user?.fullName}</p>
              <p className="text-sm text-gray-500">{user?.primaryEmailAddress?.emailAddress}</p>
            </div>
            <button
              onClick={openUserProfile}
              className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:scale-105 transition text-sm"
            >
              Edit Profile
            </button>
          </div>
        </Section>

        {/* Preferences */}
        <Section title="Preferences" icon={Bell}>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <p className="text-gray-700 font-medium">Theme</p>
              <div className="flex items-center gap-3">
                <ThemeToggleButton active={theme === 'light'} icon={Sun} onClick={() => toggleTheme('light')} />
                <ThemeToggleButton active={theme === 'dark'} icon={Moon} onClick={() => toggleTheme('dark')} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-700 font-medium">Notifications</p>
              <ToggleSwitch checked={notificationsEnabled} onToggle={handleNotificationsToggle} />
            </div>
          </div>
        </Section>

        {/* Account Section */}
        <Section title="Account Settings" icon={ShieldOff}>
          <div className="space-y-5">
            {[
              { label: 'Change Password', action: openUserProfile },
              { label: 'Change Email', action: openUserProfile },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <p className="text-gray-700">{item.label}</p>
                <button
                  onClick={item.action}
                  className="text-green-600 hover:underline text-sm"
                >
                  Update
                </button>
              </div>
            ))}
          </div>
        </Section>

        {/* Subscription */}
        <Section title="Subscription Plan" icon={CreditCard}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-gray-700">Current Plan: <span className="font-semibold text-green-600">Pro</span></p>
              <p className="text-sm text-gray-500">Renews on September 1, 2025</p>
            </div>
            <button className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:scale-105 transition text-sm">
              Manage Billing
            </button>
          </div>
        </Section>

        {/* Danger Zone */}
        <Section title="Danger Zone" icon={Trash2} danger>
          <div className="flex justify-between items-center">
            <p className="text-gray-700">Delete Account</p>
            <button
              onClick={handleDeleteAccount}
              className="px-4 py-2 bg-red-600 text-white rounded-md shadow hover:scale-105 transition text-sm"
            >
              Delete
            </button>
          </div>
        </Section>
      </motion.div>
    </main>
  );
}

// Reusable Section Component
const Section = ({ title, icon: Icon, children, danger = false }) => (
  <section className={`space-y-4 ${danger ? 'border-t pt-6' : ''}`}>
    <div className="flex items-center gap-3">
      <Icon className={`w-5 h-5 ${danger ? 'text-red-600' : 'text-green-600'}`} />
      <h2 className={`text-xl font-semibold ${danger ? 'text-red-600' : 'text-gray-800'}`}>{title}</h2>
    </div>
    <div className="bg-white rounded-xl shadow p-5 space-y-5">{children}</div>
  </section>
);

// Toggle Switch Component
const ToggleSwitch = ({ checked, onToggle }) => (
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={onToggle}
      className="sr-only peer"
    />
    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-green-600 transition"></div>
    <span className="ml-3 text-sm text-gray-600">{checked ? 'Enabled' : 'Disabled'}</span>
  </label>
);

// Theme Toggle Button
const ThemeToggleButton = ({ active, icon: Icon, onClick }) => (
  <button
    onClick={onClick}
    className={`p-2 rounded-full transition flex items-center justify-center ${
      active ? 'bg-green-100 scale-110 shadow-inner' : 'hover:bg-green-100'
    }`}
  >
    <Icon className={`w-5 h-5 ${active ? 'text-green-700' : 'text-gray-500'}`} />
  </button>
);
