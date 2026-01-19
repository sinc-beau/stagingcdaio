'use client';

import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';

interface EventItem {
  name: string;
  type: string;
  date: string;
  location: string;
  highlight?: boolean;
  hasRegistration?: boolean;
}

const events: EventItem[] = [
  {
    name: 'Community Activation',
    type: 'Data Labs',
    date: 'Feb 25, 2026',
    location: 'San Francisco, CA',
    highlight: true
  },
  {
    name: 'Data Forum',
    type: 'CDAIO Forum',
    date: 'Mar 22-24, 2026',
    location: 'Down Right Hotel, Austin',
    hasRegistration: true
  },
  {
    name: 'Data Labs',
    type: 'Intelligence Circle',
    date: 'May 13, 2026',
    location: 'New York, NY',
  },
  {
    name: 'Data Labs',
    type: 'Intelligence Circle',
    date: 'Nov 10, 2026',
    location: 'Austin, TX',
  }
];

interface CalendarSectionProps {
  onOpenDataForum?: () => void;
}

export default function CalendarSection({ onOpenDataForum }: CalendarSectionProps) {
  const handleCommunityActivationClick = () => {
    if (onOpenDataForum) {
      onOpenDataForum();
    }
  };
  return (
    <section id="calendar" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#007BFF] text-xs font-bold tracking-wider mb-6 bg-[#007BFF]/10 px-6 py-3 rounded-full border border-[#007BFF]/30">
            <Calendar className="w-4 h-4" />
            2026 CALENDAR
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#022A4A] mb-6 uppercase">
            YOUR <span className="text-[#007BFF]">ENGAGEMENT</span> ROADMAP
          </h2>

          <div className="h-1 w-24 bg-[#022A4A] mx-auto mb-8" />

          <p className="text-lg text-[#022A4A]/70 max-w-3xl mx-auto">
            Strategic touchpoints throughout the year to build connections, share insights, and drive data innovation forward.
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group relative border-2 rounded-lg p-6 md:p-8 transition-all duration-300 ${
                event.highlight
                  ? 'bg-gradient-to-br from-[#022A4A] to-[#007BFF] border-[#007BFF] shadow-xl'
                  : 'bg-white border-[#022A4A]/10 hover:border-[#007BFF]/50 hover:shadow-lg'
              }`}
            >
              {event.highlight && (
                <div className="absolute -top-3 -right-3 bg-[#19E3FF] text-[#022A4A] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Next Event
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded uppercase tracking-wider ${
                      event.highlight
                        ? 'bg-white/20 text-white'
                        : 'bg-[#007BFF]/10 text-[#007BFF]'
                    }`}>
                      {event.type}
                    </span>
                  </div>

                  <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${
                    event.highlight ? 'text-white' : 'text-[#022A4A]'
                  }`}>
                    {event.name}
                  </h3>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className={`w-5 h-5 ${
                        event.highlight ? 'text-[#19E3FF]' : 'text-[#007BFF]'
                      }`} />
                      <span className={`font-semibold ${
                        event.highlight ? 'text-white' : 'text-[#022A4A]'
                      }`}>
                        {event.date}
                      </span>
                    </div>

                    <div className="hidden sm:block w-1 h-1 rounded-full bg-current opacity-30" />

                    <div className="flex items-center gap-2">
                      <MapPin className={`w-5 h-5 ${
                        event.highlight ? 'text-[#19E3FF]' : 'text-[#007BFF]'
                      }`} />
                      <span className={`${
                        event.highlight ? 'text-white/90' : 'text-[#022A4A]/70'
                      }`}>
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>

                {event.highlight && (
                  <div className="flex-shrink-0">
                    <button
                      onClick={handleCommunityActivationClick}
                      className="px-6 py-3 bg-white text-[#022A4A] font-bold rounded hover:bg-[#19E3FF] transition-all duration-300 uppercase text-sm tracking-wider"
                    >
                      Register Now
                    </button>
                  </div>
                )}

                {event.hasRegistration && !event.highlight && (
                  <div className="flex-shrink-0">
                    <Link
                      href="/cdaio-forum-austin-march-2026"
                      className="inline-block px-6 py-3 bg-[#022A4A] text-white font-bold hover:bg-[#007BFF] transition-all duration-300 uppercase text-sm tracking-wider border-2 border-[#022A4A] hover:border-[#007BFF]"
                    >
                      Register Now
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#022A4A]/60 text-sm max-w-2xl mx-auto leading-relaxed">
            More events and locations will be announced throughout the year. Members receive priority access and early registration.
          </p>
        </div>
      </div>
    </section>
  );
}
