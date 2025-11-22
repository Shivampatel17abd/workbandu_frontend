'use client';

import { useRef } from 'react';
import { Terminal, ChevronRight, Building2, Clock, DollarSign, ArrowUpRight, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Home() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Hero Text
    tl.fromTo(".hero-element", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 0.2 }
    )

    // 2. Code Block
    .fromTo(".code-window", 
      { scale: 0.98, y: 20, opacity: 0 },
      { scale: 1, y: 0, opacity: 1, duration: 1, ease: "expo.out" }, 
      "-=0.6"
    )

    // 3. TAHOE CARDS (High Visibility Animation)
    .fromTo(".tahoe-card", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)" },
      "-=0.4"
    );

  }, { scope: containerRef });

  const jobs = [
    { title: "Senior UX Designer", company: "Nike", type: "On-site", salary: "$120k", posted: "2d ago", tags: ["Mobile UI", "Figma"] },
    { title: "Product Manager", company: "Spotify", type: "Remote", salary: "$150k", posted: "1d ago", tags: ["Strategy", "Agile"] },
    { title: "Frontend Dev", company: "Airbnb", type: "Hybrid", salary: "$110k", posted: "3d ago", tags: ["React", "Next.js"] },
    { title: "3D Artist", company: "Apple", type: "On-site", salary: "$130k", posted: "5d ago", tags: ["Blender", "Unity"] },
    { title: "Backend Engineer", company: "Google", type: "Hybrid", salary: "$160k", posted: "1d ago", tags: ["Go", "Kubernetes"] },
    { title: "AI Researcher", company: "OpenAI", type: "On-site", salary: "$200k+", posted: "Just now", tags: ["Python", "PyTorch"] }
  ];

  return (
    <div ref={containerRef} className="w-full max-w-7xl mx-auto px-6 pt-10 pb-32">

      {/* Hero Section */}
      <div className="text-center mb-20 pt-10">
        <h1 className="hero-element text-5xl md:text-7xl font-extrabold text-slate-800 mb-6 tracking-tight drop-shadow-sm">
          Find your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Flow.</span>
        </h1>
        <p className="hero-element text-lg text-slate-500 max-w-2xl mx-auto font-medium">
          The most beautiful job board for creative professionals.
        </p>
      </div>

      {/* Code Block */}
      <div className="code-window rounded-xl border border-white/50 bg-white/40 backdrop-blur-2xl p-1 overflow-hidden mb-20 shadow-2xl shadow-purple-900/10 max-w-3xl mx-auto opacity-0">
        <div className="bg-white/60 border-b border-white/30 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
          <span className="text-xs text-slate-600 font-mono ml-2">career.tsx</span>
        </div>
        <div className="p-6 md:p-8 font-mono text-sm overflow-x-auto bg-slate-900/90 rounded-b-lg">
          <div className="code-line text-gray-500">// Initialize career path</div>
          <div className="code-line mt-2"><span className="text-purple-400">const</span> <span className="text-blue-400">newRole</span> = <span className="text-yellow-300">await</span> <span className="text-green-400">JobBandhu</span>.<span className="text-blue-300">match</span>({'{'}</div>
          <div className="code-line pl-4 text-gray-300">skill: <span className="text-orange-300">'Next.js'</span>,</div>
          <div className="code-line pl-4 text-gray-300">ambition: <span className="text-blue-400">true</span></div>
          <div className="code-line">{'}'});</div>
        </div>
      </div>

      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 hero-element px-2">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-purple-600" /> Featured Opportunities
        </h2>
        <button className="text-sm text-slate-500 hover:text-purple-600 flex items-center gap-1 transition-colors">
          View all <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* === APPLE TAHOE CARDS (High Visibility) === */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="
            tahoe-card group relative p-6 rounded-3xl opacity-0
            bg-white/80 backdrop-blur-xl /* Stronger White Glass */
            border border-white/60 /* Visible Border */
            shadow-xl shadow-slate-200/50 /* Stronger Shadow */
            transition-all duration-300 ease-out
            hover:scale-[1.02] 
            hover:bg-white/95 
            hover:shadow-2xl hover:shadow-purple-500/10
            cursor-pointer overflow-hidden
            "
          >
            {/* Top Shine */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-60 pointer-events-none"></div>

            {/* Header */}
            <div className="flex justify-between items-start mb-5 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white border border-white/50 flex items-center justify-center text-slate-700 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-6 h-6" />
              </div>

              <span className="text-xs font-medium text-slate-500 flex items-center gap-1 bg-white/60 px-2.5 py-1 rounded-full border border-white/40">
                <Clock className="w-3 h-3" /> {job.posted}
              </span>
            </div>

            {/* Content */}
            <div className="mb-6 relative z-10">
              <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-purple-600 transition-colors">
                {job.role}
              </h3>
              <p className="text-sm font-medium text-slate-500">{job.company}</p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
              <span className="inline-flex items-center px-3 py-1.5 rounded-xl bg-slate-100/50 border border-white/50 text-xs font-semibold text-slate-600">
                <MapPin className="w-3 h-3 mr-1.5 text-blue-500" /> {job.type}
              </span>

              <span className="inline-flex items-center px-3 py-1.5 rounded-xl bg-slate-100/50 border border-white/50 text-xs font-semibold text-slate-600">
                <DollarSign className="w-3 h-3 mr-1.5 text-green-600" /> {job.salary}
              </span>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 relative z-10">
              <div className="flex gap-2">
                {job.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Arrow */}
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 shadow-lg transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}