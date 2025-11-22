'use client';

import Link from 'next/link';
import { Hexagon, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%", 
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
          
          {/* === Column 1: Brand & Newsletter === */}
          <div className="col-span-2 lg:col-span-2 footer-col">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <Hexagon className="h-6 w-6 text-white fill-white/10 group-hover:stroke-indigo-400 transition-colors" />
              <span className="font-bold text-xl tracking-wide text-white">
                JobBandhu
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              The operating system for your career. We connect the world's best developers with high-growth startups and unicorn companies.
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
            <p className="text-xs text-gray-600 mt-3">Join 25,000+ devs receiving weekly job drops.</p>
          </div>

          {/* === Column 2: For Developers (Candidates) === */}
          <div className="footer-col">
            <h4 className="font-semibold text-white mb-4">Find Work</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Browse Jobs</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Remote Opportunities</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Startup Jobs</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Salary Calculator</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Resume Review</Link></li>
            </ul>
          </div>

          {/* === Column 3: For Companies (Recruiters) === */}
          <div className="footer-col">
            <h4 className="font-semibold text-white mb-4">Hire Talent</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Post a Job</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Pricing & Plans</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Talent Search</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">API Access</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* === Column 4: Company & Legal === */}
          <div className="footer-col">
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

        </div>

        {/* === Bottom Bar === */}
        <div className="footer-bottom border-t border-[#27272a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} JobBandhu Inc.
            </p>
            <span className="hidden md:inline text-gray-700">|</span>
            <p className="text-gray-600 text-sm flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in India
            </p>
          </div>
          
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