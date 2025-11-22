'use client';

import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Home() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Main Content Title & Text float up
    tl.from(".hero-element", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.2 // Added slight delay to start smoothly
    })

    // 2. Code Block expands gently
    .from(".code-window", {
      scale: 0.98,
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "expo.out"
    }, "-=0.6")

    // 3. Code Text inside types in (simulated by opacity)
    .from(".code-line", {
      x: 10,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05
    }, "-=0.8")

    // 4. Grid cards pop up at the end
    .from(".grid-card", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.2)" // Slight bounce
    }, "-=0.4");

  }, { scope: containerRef });

  return (
    // Removed 'flex' so it acts as a normal block, centering the main content
    <div ref={containerRef} className="min-h-screen bg-[#000000] pt-20 pb-20">

      {/* === MAIN CONTENT AREA === */}
      {/* Removed lg:ml-64 and added w-full + flex/justify-center to ensure true centering */}
      <main className="w-full flex justify-center">
        <div className="w-full max-w-4xl px-6">

          {/* Main Headline */}
          <h1 className="hero-element text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight text-center">
            Welcome to JobBandhu
          </h1>
          
          <p className="hero-element text-xl text-gray-400 mb-12 font-light leading-relaxed text-center max-w-2xl mx-auto">
            The best platform for builders to find their next role. Transform your career into reality.
          </p>

          {/* Feature Image / Code Block Area */}
          <div className="code-window rounded-xl border border-[#27272a] bg-[#0a0a0a] p-1 overflow-hidden mb-16 shadow-2xl shadow-black/50 max-w-3xl mx-auto">
            
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
            <div className="p-6 md:p-8 font-mono text-sm overflow-x-auto">
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
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center justify-between">
                  {item.title} <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
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