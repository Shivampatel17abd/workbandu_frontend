'use client';

import Link from 'next/link';
import { Hexagon, Search, Bell, User } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Navbar Container Animation
    tl.fromTo(navRef.current, 
      { y: -100, opacity: 0 }, // Start state
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" } // End state (Force opacity 1)
    );

    // 2. Content Stagger Animation (Logo, Search, Buttons)
    tl.fromTo(".nav-item", 
      { y: -20, opacity: 0 }, // Start hidden
      { 
        y: 0, 
        opacity: 1, // FORCE VISIBILITY
        duration: 0.6, 
        stagger: 0.1, 
        ease: "power2.out" 
      }, 
      "-=0.8"
    );

  }, { scope: navRef });

  return (
    <div ref={navRef} className="fixed top-6 w-full z-50 flex justify-center px-4 opacity-0"> {/* Added opacity-0 default to prevent flash */}
      
      <nav className="w-full max-w-5xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg shadow-purple-500/5 rounded-full px-6 py-3 flex items-center justify-between transition-all hover:bg-white/50 hover:shadow-purple-500/10">
        
        {/* Left: Logo */}
        <Link href="/" className="nav-item flex items-center gap-2 group">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1.5 rounded-lg text-white shadow-sm">
             <Hexagon className="h-5 w-5 fill-white/20" />
          </div>
          <span className="font-bold text-lg tracking-wide text-slate-800 group-hover:text-purple-700 transition-colors">
            JobBandhu
          </span>
        </Link>

        {/* Center: Search Bar */}
        <div className="nav-item hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-500 group-focus-within:text-purple-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 bg-white/50 border-none rounded-full leading-5 text-slate-700 placeholder-slate-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-200 sm:text-sm transition-all shadow-inner"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Right: Actions (Bell & Sign In) */}
        {/* Ensure text-slate-700 is set for high visibility */}
        <div className="flex items-center gap-4">
          <button className="nav-item p-2 text-slate-600 hover:text-purple-600 hover:bg-white/60 rounded-full transition-all">
            <Bell className="h-5 w-5" />
          </button>
          
          <Link
            href="/login"
            className="nav-item flex items-center gap-2 text-sm font-medium text-slate-700 bg-white/60 px-4 py-2 rounded-full hover:bg-white hover:text-purple-700 border border-white/50 shadow-sm transition-all active:scale-95"
          >
            <User className="h-4 w-4" />
            <span>Sign In</span>
          </Link>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;