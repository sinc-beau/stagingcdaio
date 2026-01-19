'use client';

import React from 'react';
import { Shield, Target, Award, CheckCircle, Sparkles, Zap } from 'lucide-react';

interface PartnerSectionProps {
  onOpenPartner: () => void;
}

export default function PartnerSection({ onOpenPartner }: PartnerSectionProps) {
  return (
    <section id="partners" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(2, 42, 74, 0.5) 50px, rgba(2, 42, 74, 0.5) 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(2, 42, 74, 0.5) 50px, rgba(2, 42, 74, 0.5) 51px)`
        }} />
      </div>
      <div className="absolute top-20 right-10 w-64 h-64 border-2 border-[#007BFF]/10" />
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-[#007BFF]/10" style={{ transform: 'rotate(45deg)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#007BFF] text-xs font-bold tracking-wider mb-4 bg-[#007BFF]/10 px-4 py-2 border border-[#007BFF]/30">
            <Sparkles className="w-4 h-4" />
            STRATEGIC PARTNERSHIPS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#022A4A] mb-6">
            Solution Providers, Without the <span className="text-[#007BFF]">Noise</span>
          </h2>
          <div className="h-1 w-24 bg-[#022A4A] mx-auto mb-8" />
          <p className="text-lg text-[#022A4A]/70 max-w-3xl mx-auto">
            We partner with solution providers who solve real data and AI challenges with proven results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative bg-[#022A4A] border-2 border-[#007BFF]/30 p-8 overflow-hidden group hover:border-[#007BFF]/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#007BFF]/20" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#007BFF]/20" />

            <div className="relative">
              <div className="w-14 h-14 bg-[#007BFF]/10 border-2 border-[#007BFF] flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase">
                Curated Partnerships
              </h3>
              <p className="text-white/70">
                Carefully selected partners ensure data leaders can engage authentically without vendor overload
              </p>
            </div>
          </div>

          <div className="relative bg-[#022A4A] border-2 border-[#007BFF]/30 p-8 overflow-hidden group hover:border-[#007BFF]/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#007BFF]/20" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#007BFF]/20" />

            <div className="relative">
              <div className="w-14 h-14 bg-[#007BFF]/10 border-2 border-[#007BFF] flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase">
                Value Alignment
              </h3>
              <p className="text-white/70">
                Every partner presence is strategically aligned to discussions and delivers genuine value
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-black border-2 border-[#007BFF]/30 p-10 mb-16 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0, 123, 255, 0.5) 20px, rgba(0, 123, 255, 0.5) 21px)`
            }} />
          </div>
          <div className="relative text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[#007BFF]" />
              <h3 className="text-2xl font-bold text-white uppercase">Our Philosophy</h3>
              <div className="w-1 h-8 bg-[#007BFF]" />
            </div>
            <div className="h-1 w-24 bg-[#007BFF] mx-auto mb-6" />
            <p className="text-xl text-white mb-6 font-medium">
              If you solve real data challenges and can demonstrate impact, you belong.
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-32 bg-[#007BFF]/50" />
              <Zap className="w-6 h-6 text-[#007BFF]" />
              <div className="h-px w-32 bg-[#007BFF]/50" />
            </div>
            <p className="text-lg text-white/80 italic">
              If you need a booth and a pitch deck, you don't.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-[#022A4A] mb-10 text-center uppercase flex items-center justify-center gap-3">
            <div className="w-2 h-2 bg-[#007BFF]" />
            Partner Benefits
            <div className="w-2 h-2 bg-[#007BFF]" />
          </h3>
          <div className="h-1 w-24 bg-[#022A4A] mx-auto mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center border-2 border-[#022A4A]/10 p-8 hover:bg-[#022A4A] hover:border-[#007BFF]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-[#007BFF]/10 border-2 border-[#007BFF] flex items-center justify-center mx-auto mb-5 group-hover:border-white group-hover:bg-white/10 transition-all">
                <Target className="w-7 h-7 text-[#007BFF] group-hover:text-white" />
              </div>
              <h4 className="text-xl font-semibold text-[#022A4A] group-hover:text-white mb-3 uppercase">Direct Access</h4>
              <p className="text-[#022A4A]/70 group-hover:text-white/70 text-sm">Meaningful conversations with CDOs and CAIOs actively seeking solutions</p>
            </div>

            <div className="group text-center border-2 border-[#022A4A]/10 p-8 hover:bg-[#022A4A] hover:border-[#007BFF]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-[#007BFF]/10 border-2 border-[#007BFF] flex items-center justify-center mx-auto mb-5 group-hover:border-white group-hover:bg-white/10 transition-all">
                <CheckCircle className="w-7 h-7 text-[#007BFF] group-hover:text-white" />
              </div>
              <h4 className="text-xl font-semibold text-[#022A4A] group-hover:text-white mb-3 uppercase">Targeted Engagement</h4>
              <p className="text-[#022A4A]/70 group-hover:text-white/70 text-sm">Aligned to specific data and AI challenges that drive decisions</p>
            </div>

            <div className="group text-center border-2 border-[#022A4A]/10 p-8 hover:bg-[#022A4A] hover:border-[#007BFF]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-[#007BFF]/10 border-2 border-[#007BFF] flex items-center justify-center mx-auto mb-5 group-hover:border-white group-hover:bg-white/10 transition-all">
                <Award className="w-7 h-7 text-[#007BFF] group-hover:text-white" />
              </div>
              <h4 className="text-xl font-semibold text-[#022A4A] group-hover:text-white mb-3 uppercase">Trusted Environment</h4>
              <p className="text-[#022A4A]/70 group-hover:text-white/70 text-sm">Build lasting relationships, not transactional exchanges</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onOpenPartner}
            className="px-8 py-4 bg-[#022A4A] text-white font-bold text-lg hover:bg-[#007BFF] transition-all duration-300 border-2 border-[#022A4A] hover:border-[#007BFF] uppercase tracking-wider"
          >
            PARTNERSHIP INQUIRY
          </button>
          <p className="text-[#022A4A]/60 text-sm mt-6 max-w-2xl mx-auto">
            Interested in becoming a strategic partner? Let's discuss how we can create value together.
          </p>
        </div>
      </div>
    </section>
  );
}
