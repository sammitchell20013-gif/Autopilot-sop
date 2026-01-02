"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Construction Icon */}
        <div className="mb-8">
          <div className="inline-block p-6 bg-yellow-400 rounded-full">
            <svg className="w-16 h-16 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>

        {/* Logo */}
        <div className="mb-6">
          <img 
            src="/Logo.png" 
            alt="Autopilot SOP" 
            className="h-16 w-auto mx-auto"
          />
        </div>

        {/* Main Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Under Construction
        </h1>
        
        <p className="text-xl text-gray-300 mb-8">
          We're building something amazing. The site is currently under active development and will be available soon.
        </p>

        {/* Status Box */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-gray-300 font-semibold">Development in Progress</span>
          </div>
          <p className="text-gray-400 text-sm">
            We're working hard to bring you an exceptional SOP management platform. Check back soon!
          </p>
        </div>

        {/* Contact */}
        <div className="text-gray-400 text-sm">
          <p>Questions? Contact us at:</p>
          <a href="mailto:autopilotsop@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
            autopilotsop@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
