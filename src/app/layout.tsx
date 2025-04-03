'use client';

import React from "react";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Symbol Technologies",
  description: "Empowering businesses through innovative technology solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
                  <li><a href="/careers" className="hover:text-gray-300">Careers</a></li>
                  <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="/services" className="hover:text-gray-300">Our Services</a></li>
                  <li><a href="/solutions" className="hover:text-gray-300">Solutions</a></li>
                  <li><a href="/case-studies" className="hover:text-gray-300">Case Studies</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Industries</h3>
                <ul className="space-y-2">
                  <li><a href="/industries" className="hover:text-gray-300">Industries</a></li>
                  <li><a href="/partners" className="hover:text-gray-300">Partners</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
                  <li><a href="/news" className="hover:text-gray-300">News</a></li>
                  <li><a href="/events" className="hover:text-gray-300">Events</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p>&copy; {new Date().getFullYear()} Symbol Technologies. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 