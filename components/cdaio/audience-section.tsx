'use client';

import React from 'react';
import { Users, TrendingUp, Target, Briefcase } from 'lucide-react';

export default function AudienceSection() {
  return (
    <section className="relative py-24 px-6 bg-white">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(2, 42, 74, 0.5) 60px, rgba(2, 42, 74, 0.5) 61px),
                           repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(2, 42, 74, 0.5) 60px, rgba(2, 42, 74, 0.5) 61px)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="h-1 w-20 bg-[#007BFF] mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#022A4A]">
              WHO WE SERVE
            </h2>
          </div>
          <p className="text-xl text-[#022A4A]/60 max-w-3xl mx-auto">
            Built for leaders who transform business through data and intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#007BFF] opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                 style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />

            <div className="border-2 border-[#022A4A] p-10 bg-white relative">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-4 bg-[#022A4A] flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#022A4A] leading-tight">
                    For Chief Data & AI Officers and Senior Executives
                  </h3>
                </div>
              </div>

              <div className="h-1 w-16 bg-[#007BFF] mb-8" />

              <div className="space-y-6 text-[#022A4A]/80 leading-relaxed">
                <p>
                  The CDAIO Division exists to unite enterprise leaders who are shaping the future of business
                  through data and intelligence. Our mission is to <span className="font-semibold text-[#022A4A]">elevate
                  the role of the Chief Data & AI Officer</span> as a strategic leader who drives measurable outcomes
                  across people, process, and technology.
                </p>

                <p>
                  We bring together executives who lead with impact—those transforming how organizations think
                  about data culture, decision-making, and responsible AI adoption. Through <span className="font-semibold text-[#007BFF]">peer-to-peer
                  collaboration</span>, the community defines what successful execution looks like in the real world,
                  far beyond theory or consulting slides.
                </p>

                <p className="font-semibold text-[#022A4A] text-lg">
                  The CDAIO Division is a trusted space for senior data and AI leaders to exchange insights,
                  sharpen strategy, and strengthen influence at the enterprise table.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t-2 border-[#022A4A]/10">
                <div className="text-center">
                  <Target className="w-8 h-8 text-[#007BFF] mx-auto mb-3" />
                  <div className="text-sm font-bold text-[#022A4A] uppercase tracking-wider">
                    Strategic Impact
                  </div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-[#007BFF] mx-auto mb-3" />
                  <div className="text-sm font-bold text-[#022A4A] uppercase tracking-wider">
                    Executive Network
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#19E3FF] opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                 style={{ transform: 'rotate(45deg)' }} />

            <div className="border-2 border-[#022A4A] p-10 bg-white relative">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-4 bg-[#007BFF] flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#022A4A] leading-tight">
                    For Emerging Directors and VPs of Data, Analytics, and AI
                  </h3>
                </div>
              </div>

              <div className="h-1 w-16 bg-[#007BFF] mb-8" />

              <div className="space-y-6 text-[#022A4A]/80 leading-relaxed">
                <p>
                  The CDAIO Division empowers the next generation of data and AI leaders to <span className="font-semibold text-[#022A4A]">think
                  and operate at the enterprise level</span>. Members learn directly from those who have built high-performing
                  data cultures and implemented AI strategies that create measurable business value.
                </p>

                <p>
                  This community helps emerging leaders <span className="font-semibold text-[#007BFF]">accelerate their path
                  to the executive table</span> by developing the leadership, communication, and strategic influence
                  required to translate analytics and AI into business growth.
                </p>

                <p className="font-semibold text-[#022A4A] text-lg">
                  Here, rising data and AI professionals gain the peer network, practical knowledge, and confidence
                  to lead transformation within their organizations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t-2 border-[#022A4A]/10">
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-[#007BFF] mx-auto mb-3" />
                  <div className="text-sm font-bold text-[#022A4A] uppercase tracking-wider">
                    Career Growth
                  </div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-[#007BFF] mx-auto mb-3" />
                  <div className="text-sm font-bold text-[#022A4A] uppercase tracking-wider">
                    Peer Learning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block px-8 py-4 border-2 border-[#007BFF] bg-[#007BFF]/5">
            <p className="text-lg font-bold text-[#022A4A] uppercase tracking-wider">
              Enterprise Leadership. Real-World Execution. Measurable Impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
