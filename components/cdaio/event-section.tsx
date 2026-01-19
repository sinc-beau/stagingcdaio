'use client';

import React from 'react';
import { MapPin, Calendar, Building2, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function EventSection() {
  return (
    <section id="event" className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(2, 42, 74, 0.5) 50px, rgba(2, 42, 74, 0.5) 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(2, 42, 74, 0.5) 50px, rgba(2, 42, 74, 0.5) 51px)`
        }} />
      </div>
      <div className="absolute top-10 left-10 w-64 h-64 border-2 border-[#007BFF]/10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 border border-[#007BFF]/10" style={{ transform: 'rotate(45deg)' }} />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[#007BFF] text-xs font-bold tracking-wider mb-6 bg-[#007BFF]/10 px-6 py-3 border border-[#007BFF]/30">
              <Calendar className="w-4 h-4" />
              CDAIO DIVISION FORUM
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#022A4A] uppercase">
              CDAIO
              <br />
              <span className="text-[#007BFF]">Division Forum</span>
            </h2>

            <div className="h-1 w-24 bg-[#022A4A] mb-8" />

            <div className="space-y-4 text-[#022A4A]/80 text-lg mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#007BFF] flex-shrink-0" />
                <span className="font-semibold">Austin, TX</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-[#007BFF] flex-shrink-0" />
                <span className="font-semibold">March 22-24, 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-[#007BFF] flex-shrink-0" />
                <span className="font-semibold">Downright Hotel</span>
              </div>
            </div>

            <p className="text-[#022A4A]/70 text-base leading-relaxed mb-8">
              Join data and AI leaders for three days of strategic discussions, peer collaboration,
              and real-world insights on building intelligent enterprises. This forum brings together
              Chief Data Officers, AI executives, and emerging leaders to shape the future of data-driven business.
            </p>

            <Link
              href="/cdaio-forum-austin-march-2026"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#022A4A] text-white font-bold hover:bg-[#007BFF] transition-all duration-300 uppercase tracking-wider border-2 border-[#022A4A] hover:border-[#007BFF]"
            >
              Learn More & Register
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] border-2 border-[#007BFF]/20 overflow-hidden relative">
              <Image
                src="/forum.png"
                alt="CDAIO Division Forum"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
