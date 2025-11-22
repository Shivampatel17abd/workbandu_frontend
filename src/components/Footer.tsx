'use client';

import Link from 'next/link';
import { Hexagon, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger to animate when user scrolls to bottom
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%", // Animation starts when footer hits bottom of viewport
      }
    });

    tl.from(".footer-col", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });
    
    tl.from(".footer-bottom", {
      opacity: 0,
      duration: 1,
    }, "-=0.5");

  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="bg-[#000000] border-t border-[#27272a] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          
          {/* === Column 1: Brand === */}
          <div className="col-span-2 lg:col-span-2 footer-col">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <Hexagon className="h-6 w-6 text-white fill-white/10 group-hover:stroke-indigo-400 transition-colors" />
              <span className="font-bold text-xl tracking-wide text-white">
                JobBandhu
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              The developer-first job platform. We help software engineers find companies that value code quality and work-life balance.
            </p>
            
            {/* Newsletter Input */}
            <div className="flex items-center gap-2 max-w-sm">
              <div className="relative w-full">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-[#0f0f11] border border-[#27272a] text-gray-300 text-sm rounded-md pl-10 pr-3 py-2 focus:outline-none focus:border-gray-500 transition-colors"
                />
              </div>
              <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* === Column 2: Product === */}
          <div className="footer-col">
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Browse Jobs</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Companies</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Salaries</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Post a Job</Link></li>
            </ul>
          </div>

          {/* === Column 3: Resources === */}
          <div className="footer-col">
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">API Reference</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>

          {/* === Column 4: Company === */}
          <div className="footer-col">
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Legal</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>

        {/* === Bottom Bar === */}
        <div className="footer-bottom border-t border-[#27272a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} JobBandhu Inc. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="h-5 w-5" /></Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;