'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 bg-gray-50">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 text-lg">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 