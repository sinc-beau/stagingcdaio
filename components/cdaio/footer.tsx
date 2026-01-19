'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#022A4A] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-white">CDAIO</span>
              <span className="text-[#007BFF] mx-2">//</span>
              <span className="text-white">DIVISION</span>
            </h3>
            <div className="h-1 w-20 bg-[#007BFF] mb-6" />
            <p className="text-white/70 mb-6 leading-relaxed max-w-md">
              Data. Intelligence. Motion.
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              A peer-to-peer ecosystem for executives and solution providers building the intelligent future.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#council" className="text-white/70 hover:text-[#007BFF] transition-colors">
                  Executive Council
                </a>
              </li>
              <li>
                <a href="#event" className="text-white/70 hover:text-[#007BFF] transition-colors">
                  Inaugural Event
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="text-white/70 hover:text-[#007BFF] transition-colors">
                  The Ecosystem
                </a>
              </li>
              <li>
                <a href="#partners" className="text-white/70 hover:text-[#007BFF] transition-colors">
                  Partnerships
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Connect</h4>
            <div className="space-y-4">
              <p className="text-white/60 text-sm">Join the community</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} CDAIO Division. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-white/60 hover:text-[#007BFF] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/60 hover:text-[#007BFF] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
