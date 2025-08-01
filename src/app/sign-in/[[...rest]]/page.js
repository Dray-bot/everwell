'use client';

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#A5D6A7] to-white px-4">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-6 sm:mb-8 max-w-xs sm:max-w-sm">
        Welcome Back 🌿
      </h1>
      <SignIn
        redirectUrl="/dashboard"
        appearance={{
          elements: {
            card: 'bg-white shadow-md rounded-xl w-full max-w-xs sm:max-w-sm p-4 sm:p-6',
            headerTitle: 'hidden',
            formButtonPrimary:
              'bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 text-white rounded-md py-2 sm:py-3 transition w-full text-sm sm:text-base',
            formFieldInput:
              'border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 rounded-md px-3 py-2 sm:py-3 text-sm sm:text-base w-full placeholder-gray-400',
            socialButtonsBlockButton:
              'border border-gray-300 rounded-md hover:bg-gray-50 transition px-3 py-2 sm:py-3 text-xs sm:text-sm w-full',
          },
        }}
      />
    </main>
  );
}
