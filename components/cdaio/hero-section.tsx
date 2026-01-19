'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(2, 42, 74, 0.5) 50px, rgba(2, 42, 74, 0.5) 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(2, 42, 74, 0.5) 50px, rgba(2, 42, 74, 0.5) 51px)`
        }} />
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.08]">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border-2 border-[#007BFF]" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 border-2 border-[#19E3FF]" />
        <div className="absolute bottom-1/4 right-1/2 w-48 h-48 border border-[#007BFF]" style={{ transform: 'rotate(45deg)' }} />
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10 py-20">
        <div className="mb-8 inline-flex items-center gap-3 px-6 py-3 border border-[#007BFF]/30 rounded-full bg-white/80 backdrop-blur-sm">
          <span className="text-[#007BFF] text-xs font-bold tracking-wider uppercase">
            Data. Intelligence. Motion.
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="text-[#022A4A]">CDAIO</span>
          <span className="text-[#007BFF] mx-4">//</span>
          <span className="text-[#022A4A]">DIVISION</span>
        </h1>

        <div className="h-1 w-32 bg-[#022A4A] mx-auto mb-12" />

        <p className="text-xl md:text-2xl text-[#022A4A]/80 max-w-4xl mx-auto mb-8 leading-relaxed font-medium">
          Decoding the future of Data and AI.
        </p>

        <p className="text-lg md:text-xl text-[#022A4A]/60 max-w-3xl mx-auto mb-12 leading-relaxed">
          A <span className="text-[#007BFF] font-semibold">peer-to-peer ecosystem</span> where executives, their teams, and solution providers converge to build the intelligent future.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="/cdaio-forum-austin-march-2026"
            className="group px-8 py-4 bg-[#022A4A] text-white font-bold text-lg rounded hover:bg-[#007BFF] transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
          >
            Register for March 22-24, 2026 Forum
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#council"
            className="px-8 py-4 border-2 border-[#022A4A] text-[#022A4A] font-bold text-lg rounded hover:bg-[#022A4A] hover:text-white transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-[#007BFF] mb-2">Executive</div>
            <div className="text-sm text-[#022A4A]/60 uppercase tracking-wider">Leadership</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-[#007BFF] mb-2">Strategic</div>
            <div className="text-sm text-[#022A4A]/60 uppercase tracking-wider">Innovation</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-[#007BFF] mb-2">Data-Driven</div>
            <div className="text-sm text-[#022A4A]/60 uppercase tracking-wider">Intelligence</div>
          </div>
        </div>
      </div>
    </section>
  );
}
