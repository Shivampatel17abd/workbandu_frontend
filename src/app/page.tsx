'use client';

import { useRef } from 'react';
import { ChevronRight, Terminal, Code2, Database } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Home() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Sidebar items fade in from left
    tl.from(".sidebar-item", {
      x: -20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.2
    })

    // 2. Main Content Title & Text float up
    .from(".hero-element", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15
    }, "-=0.6") // Start this overlapping with the sidebar animation

    // 3. Code Block expands gently
    .from(".code-window", {
      scale: 0.98,
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "expo.out"
    }, "-=0.6")

    // 4. Code Text inside types in (simulated by opacity)
    .from(".code-line", {
      x: 10,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05
    }, "-=0.8")

    // 5. Grid cards pop up at the end
    .from(".grid-card", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.2)" // Slight bounce
    }, "-=0.4");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex min-h-screen bg-[#000000] pt-16">
      
      {/* === LEFT SIDEBAR === */}
      <aside className="w-64 fixed h-full border-r border-[#27272a] hidden lg:block overflow-y-auto bg-[#000000] z-10">
        <div className="p-6 space-y-8">
          <div className="sidebar-item">
            <h3 className="text-sm font-semibold text-white mb-3">Getting started</h3>
            <ul className="space-y-2 border-l border-[#27272a] ml-2 pl-4">
              <li><a href="#" className="block text-sm text-white font-medium border-l-2 border-white -ml-[18px] pl-4">Welcome to JobBandhu</a></li>
            </ul>
          </div>

          <div className="sidebar-item">
            <h3 className="text-sm font-semibold text-white mb-3">Categories</h3>
            <ul className="space-y-2 ml-2 pl-4">
              <li><a href="#" className="block text-sm text-gray-500 hover:text-gray-300 flex items-center gap-2"><Terminal className="w-3 h-3"/> Backend Jobs</a></li>
              <li><a href="#" className="block text-sm text-gray-500 hover:text-gray-300 flex items-center gap-2 mt-2"><Code2 className="w-3 h-3"/> Frontend Jobs</a></li>
              <li><a href="#" className="block text-sm text-gray-500 hover:text-gray-300 flex items-center gap-2 mt-2"><Database className="w-3 h-3"/> Data Science</a></li>
            </ul>
          </div>
        </div>
      </aside>

      {/* === MAIN CONTENT AREA === */}
      <main className="flex-1 lg:ml-64">
        <div className="max-w-4xl mx-auto px-8 py-12">
          
          {/* Breadcrumb */}
          <div className="hero-element text-sm text-gray-500 mb-8">
            Getting started <span className="mx-2">/</span> <span className="text-white">Welcome</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-element text-4xl font-bold text-white mb-4 tracking-tight">
            Welcome to JobBandhu
          </h1>
          
          <p className="hero-element text-xl text-gray-400 mb-10 font-light leading-relaxed">
            The best platform for builders to find their next role. Transform your career into reality.
          </p>

          {/* Feature Image / Code Block Area */}
          <div className="code-window rounded-xl border border-[#27272a] bg-[#0a0a0a] p-1 overflow-hidden mb-12 shadow-2xl shadow-black/50">
            
            {/* Code Window Header */}
            <div className="bg-[#0f0f11] border-b border-[#27272a] px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#27272a]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27272a]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27272a]"></div>
              </div>
              <span className="text-xs text-gray-500 font-mono ml-2">find-job.tsx</span>
            </div>
            
            {/* Code Content */}
            <div className="p-8 font-mono text-sm">
              <div className="code-line text-gray-500">// Start your search here</div>
              <div className="code-line mt-2">
                <span className="text-purple-400">const</span> <span className="text-blue-400">dreamJob</span> = <span className="text-yellow-300">await</span> <span className="text-green-400">JobBandhu</span>.<span className="text-blue-300">find</span>({'{'}
              </div>
              <div className="code-line pl-4 text-gray-300">
                role: <span className="text-orange-300">'Full Stack Developer'</span>,
              </div>
              <div className="code-line pl-4 text-gray-300">
                salary: <span className="text-orange-300">'$120k+'</span>,
              </div>
              <div className="code-line pl-4 text-gray-300">
                remote: <span className="text-blue-400">true</span>
              </div>
              <div className="code-line">{'}'});</div>
              <div className="code-line mt-4 animate-pulse">
                <span className="text-gray-500">|</span>
              </div>
            </div>
          </div>

          {/* Grid Links */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Browse Jobs', desc: 'Explore thousands of openings.' },
              { title: 'Post a Job', desc: 'Reach the best developers.' },
              { title: 'Company API', desc: 'Integrate with our hiring tools.' },
              { title: 'Salary Guide', desc: 'Real-time market data.' }
            ].map((item) => (
              <div key={item.title} className="grid-card group border border-[#27272a] bg-[#0a0a0a] p-6 rounded-lg hover:border-gray-600 hover:bg-[#0f0f11] cursor-pointer transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                  {item.title} <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </main>

    </div>
  );
}