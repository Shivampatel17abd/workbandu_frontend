'use client';

import Link from 'next/link';
import { Hexagon, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#000000] border-b border-[#27272a]">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Hexagon className="h-6 w-6 text-white fill-white" />
          <span className="font-semibold text-lg tracking-wide text-white">
            JobBandhu
          </span>
        </div>

        {/* Center: Search Bar (Like the screenshot) */}
        <div className="hidden md:flex items-center w-full max-w-md mx-8">
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-1.5 bg-[#0f0f11] border border-[#27272a] rounded-md leading-5 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm transition-colors"
              placeholder="Search docs, jobs..."
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-600 text-xs font-mono border border-[#27272a] rounded px-1.5 py-0.5">Ctrl K</span>
            </div>
          </div>
        </div>

        {/* Right: Links & Buttons */}
        <div className="flex items-center gap-6">
          
          <div className="h-4 w-px bg-[#27272a]"></div> {/* Divider */}

          <Link
            href="/login"
            className="text-sm font-medium text-white bg-[#18181b] border border-[#27272a] px-4 py-1.5 rounded-md hover:bg-[#27272a] transition-all"
          >
            Log in
          </Link>
          <Link
            href="/post-job"
            className="text-sm font-medium text-black bg-white border border-white px-4 py-1.5 rounded-md hover:bg-gray-200 transition-all"
          >
            Get Started ›
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;