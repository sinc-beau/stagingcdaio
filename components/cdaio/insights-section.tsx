'use client';

import React from 'react';
import { Database, TrendingUp, FileText } from 'lucide-react';

interface InsightsSectionProps {
  onOpenJoinModal: () => void;
}

export default function InsightsSection({ onOpenJoinModal }: InsightsSectionProps) {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(0, 123, 255, 0.3) 30px, rgba(0, 123, 255, 0.3) 31px),
                           repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(0, 123, 255, 0.3) 30px, rgba(0, 123, 255, 0.3) 31px)`
        }} />
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 border-2 border-[#007BFF]/20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 border border-[#007BFF]/10" style={{ transform: 'rotate(45deg)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <p className="text-sm font-semibold text-[#007BFF] uppercase tracking-wider mb-4">
            MEMBER BENEFITS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase leading-tight">
            INTELLIGENCE THAT <span className="text-[#007BFF]">MATTERS</span>
          </h2>
          <div className="h-1 w-24 bg-[#007BFF] mb-8" />
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Exclusive research and analysis delivered to members each quarter — transforming
            collective data leadership experience into strategic advantage.
          </p>
        </div>

        <div className="mb-16">
          <p className="text-sm font-semibold text-[#007BFF] uppercase tracking-wider mb-4">
            CONTENT DESIGNED FOR CDOs, CAIOs, AND DATA EXECUTIVES
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white uppercase">
            STRATEGIC INSIGHTS
          </h3>
        </div>

        <div className="space-y-8 mb-20">
          <div className="group border-l-4 border-[#007BFF] pl-8 py-6 hover:bg-[#007BFF]/10 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#007BFF]/10 border-2 border-[#007BFF] flex items-center justify-center group-hover:bg-[#007BFF]/20 transition-all">
                <Database className="w-6 h-6 text-[#007BFF]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3 uppercase">
                  Quarterly Data Intelligence Briefings
                </h4>
                <p className="text-white/70 max-w-3xl leading-relaxed">
                  Strategic analysis, data investment benchmarks, AI adoption patterns, and governance frameworks
                  sourced directly from peer experiences across industries.
                </p>
              </div>
            </div>
          </div>

          <div className="group border-l-4 border-[#007BFF] pl-8 py-6 hover:bg-[#007BFF]/10 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#007BFF]/10 border-2 border-[#007BFF] flex items-center justify-center group-hover:bg-[#007BFF]/20 transition-all">
                <FileText className="w-6 h-6 text-[#007BFF]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3 uppercase">
                  Annual Data Leadership Report
                </h4>
                <p className="text-white/70 max-w-3xl leading-relaxed">
                  Comprehensive analysis featuring data strategy priorities, AI investment allocations,
                  governance maturity models, and transformation roadmaps from leading data-driven organizations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#022A4A] border-2 border-[#007BFF]/30 p-12 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0, 123, 255, 0.5) 20px, rgba(0, 123, 255, 0.5) 21px)`
            }} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase text-center relative z-10">
            Your Strategic Edge
          </h3>
          <div className="h-1 w-24 bg-[#007BFF] mx-auto mb-10 relative z-10" />
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007BFF]/20 border-2 border-[#007BFF] flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <p className="text-[#007BFF] font-semibold mb-2 uppercase text-sm tracking-wider">
                Data Foresight
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Navigate emerging data and AI trends with confidence and precision
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007BFF]/20 border-2 border-[#007BFF] flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <p className="text-[#007BFF] font-semibold mb-2 uppercase text-sm tracking-wider">
                Decision Validation
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Compare your data initiatives against peer benchmarks and industry leaders
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007BFF]/20 border-2 border-[#007BFF] flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <p className="text-[#007BFF] font-semibold mb-2 uppercase text-sm tracking-wider">
                Executive Perspectives
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Learn from data leaders navigating similar transformation journeys
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onOpenJoinModal}
            className="inline-block px-10 py-5 bg-[#022A4A] text-white font-bold text-lg hover:bg-[#007BFF] transition-all duration-300 uppercase tracking-wider border-2 border-[#022A4A] hover:border-[#007BFF]"
          >
            JOIN CDAIO DIVISION
          </button>
        </div>
      </div>
    </section>
  );
}
