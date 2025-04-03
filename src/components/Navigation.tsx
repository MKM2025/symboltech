'use client';

import React, { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Symbol Technologies
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-primary">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-primary">
              Services
            </Link>
            <Link href="/industries" className="text-gray-600 hover:text-primary">
              Industries
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">
              Contact
            </Link>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="/industries"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
              >
                Industries
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 