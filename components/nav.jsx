"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-slate-700/50 backdrop-blur-sm bg-slate-900/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img
              src="/promptomy1.png"
              alt="PROMPTOMY"
              className="h-12 w-auto object-contain"
            />
            <span className="hidden md:block text-white font-bold text-xl tracking-wide">
              PROMPTOMY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/marketplace"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Marketplace
            </Link>
            <Link
              href="/generator"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Generator
            </Link>
            <Link
              href="/pricing"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Docs
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/auth/signin"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition-all hover:scale-105 font-medium shadow-lg hover:shadow-indigo-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-700/50 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/marketplace"
                className="text-slate-300 hover:text-white transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link
                href="/generator"
                className="text-slate-300 hover:text-white transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Generator
              </Link>
              <Link
                href="/pricing"
                className="text-slate-300 hover:text-white transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/docs"
                className="text-slate-300 hover:text-white transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </Link>
              <div className="border-t border-slate-700/50 pt-4 mt-4">
                <Link
                  href="/auth/signin"
                  className="block text-slate-300 hover:text-white transition-colors font-medium px-2 py-1 mb-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition-colors font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}