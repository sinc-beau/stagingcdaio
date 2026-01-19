'use client';

import React from 'react';
import { Users, Brain, Layers } from 'lucide-react';

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative py-24 px-6 bg-black">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(0, 123, 255, 0.3) 30px, rgba(0, 123, 255, 0.3) 31px),
                           repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(0, 123, 255, 0.3) 30px, rgba(0, 123, 255, 0.3) 31px)`
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">
            THE <span className="text-[#007BFF]">ECOSYSTEM</span>
          </h2>
          <div className="h-1 w-24 bg-[#007BFF] mx-auto" />
        </div>

        <div className="space-y-8 md:space-y-10">
          <div className="group">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 p-8 md:p-10 bg-white/5 border-2 border-white/10 hover:border-[#007BFF]/50 transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="text-5xl md:text-6xl font-extrabold text-[#007BFF]">01</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                  <Users className="w-8 h-8 text-[#007BFF]" />
                  <span className="uppercase">DATA</span> <span className="text-[#007BFF] uppercase">LABS</span>
                </h3>
                <p className="text-lg text-white/80 mb-4">
                  Intimate roundtables where CDOs and CAIOs share strategies, challenges, and breakthrough approaches to data and AI governance.
                </p>
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-xl font-bold text-[#007BFF]">12-15</span>
                  <span className="text-sm text-white/60">Data Leaders Per Session</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 p-8 md:p-10 bg-white/5 border-2 border-white/10 hover:border-[#007BFF]/50 transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="text-5xl md:text-6xl font-extrabold text-[#007BFF]">02</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                  <Brain className="w-8 h-8 text-[#007BFF]" />
                  <span className="uppercase">INTELLIGENCE</span> <span className="text-[#007BFF] uppercase">CIRCLES</span>
                </h3>
                <p className="text-lg text-white/80 mb-4">
                  Regional gatherings focused on specific data challenges—from AI ethics to data monetization. Shape future forum agendas and connect with ecosystem members.
                </p>
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-xl font-bold text-[#007BFF]">35-40</span>
                  <span className="text-sm text-white/60">Regional Participants</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 p-8 md:p-10 bg-white/5 border-2 border-white/10 hover:border-[#007BFF]/50 transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="text-5xl md:text-6xl font-extrabold text-[#007BFF]">03</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                  <Layers className="w-8 h-8 text-[#007BFF]" />
                  <span className="uppercase">DATA</span> <span className="text-[#007BFF] uppercase">FORUMS</span>
                </h3>
                <p className="text-lg text-white/80 mb-4">
                  The premier gathering format. Two days of transformative content, strategic insights, and peer collaboration that will redefine your data leadership approach.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="inline-flex items-baseline gap-2">
                    <span className="text-xl font-bold text-[#007BFF]">75+</span>
                    <span className="text-sm text-white/60">CDO/CAIO Attendees</span>
                  </div>
                  <div className="inline-flex items-baseline gap-2">
                    <span className="text-xl font-bold text-[#007BFF]">48</span>
                    <span className="text-sm text-white/60">Hours of Intelligence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <a
            href="#event"
            className="inline-block px-10 py-5 bg-[#022A4A] text-white font-bold text-lg hover:bg-[#007BFF] transition-all duration-300 uppercase tracking-wider border-2 border-[#022A4A] hover:border-[#007BFF]"
          >
            ENGAGE WITH THE ECOSYSTEM
          </a>
        </div>
      </div>
    </section>
  );
}
