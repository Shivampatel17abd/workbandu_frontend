'use client';

import Link from 'next/link';
import { Hexagon, Search } from 'lucide-react';
import { Button } from "../lib/moving-border"; 
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* === LEFT: LOGO WITH GLOW === */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            {/* Logo Glow Effect on Hover */}
            <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <Hexagon className="relative h-7 w-7 text-white fill-white/10 group-hover:stroke-indigo-400 transition-colors duration-300" />
          </div>
          <span className="font-bold text-xl tracking-wide text-white group-hover:text-indigo-300 transition-colors duration-300">
            JobBandhu
          </span>
        </Link>

        {/* === CENTER: SEARCH BAR === */}
        <div className="hidden md:flex items-center w-full max-w-md mx-8 group">
          <div className="relative w-full">
            {/* Search Bar Glow Ring */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 group-focus-within:opacity-100 transition duration-500 blur"></div>
            
            <div className="relative flex items-center bg-[#0f0f11] border border-white/10 rounded-lg group-focus-within:border-transparent transition-all">
                <div className="pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-3 pr-3 py-2 bg-transparent border-none text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                  placeholder="Search docs, jobs..."
                />
                <div className="pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-600 text-xs font-mono border border-[#27272a] rounded px-1.5 py-0.5 group-focus-within:border-indigo-500/30 group-focus-within:text-indigo-400 transition-colors">Ctrl K</span>
                </div>
            </div>
          </div>
        </div>

        {/* === RIGHT: ACTIONS === */}
        <div className="flex items-center gap-6">
          
          {/* Animated Text Link */}
          <Link href="/login" className="relative px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group">
            <span className="relative z-10">Log in</span>
            {/* Subtle Glass Background Slide-up */}
            <motion.span 
              className="absolute inset-0 bg-white/10 rounded-md origin-bottom"
              initial={{ scaleY: 0 }}
              whileHover={{ scaleY: 1 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;