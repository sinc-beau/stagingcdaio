'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Calendar, MapPin, Users, Brain, Network, Award, ChevronRight, Clock, CheckCircle2, Eye, Activity, Zap, Target, ChevronDown, Building2 } from 'lucide-react';
import Header from '@/components/cdaio/header';
import Footer from '@/components/cdaio/footer';
import JoinModal from '@/components/cdaio/join-modal';
import Image from 'next/image';

export default function ForumPage() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#022A4A]">
      <Header onOpenJoinModal={() => setIsJoinModalOpen(true)} />
      <main>
        <HeroSection />
        <FeaturedSpeakersSection />
        <WhyAttendSection />
        <AgendaHighlightsSection />
        <VenueSection />
        <ExperienceTypesSection />
        <NetworkingSection />
        <RegistrationSection />
      </main>
      <Footer />
      <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </div>
  );
}

function HeroSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 px-4 sm:px-8 bg-gradient-to-br from-[#022A4A] via-[#022A4A] to-[#007BFF]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255, 255, 255, 0.5) 50px, rgba(255, 255, 255, 0.5) 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255, 255, 255, 0.5) 50px, rgba(255, 255, 255, 0.5) 51px)`
        }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-[1600px] mx-auto lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#19E3FF]" />
                <span className="text-xs font-mono text-[#19E3FF] tracking-wider uppercase">
                  CDAIO National Forum 2026
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white">
                  CDAIO
                  <br />
                  National Forum
                  <br />
                  <span className="text-[#19E3FF]">in Austin</span>
                </h1>

                <div className="flex flex-col gap-3 text-white/90">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#19E3FF]" />
                    <span className="text-base font-semibold">March 22-24, 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#19E3FF]" />
                    <span className="text-base font-semibold">Downright Hotel, Austin, TX</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-1.5 h-1.5 bg-[#19E3FF] rounded-full" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Why Attend</h3>
                      <p className="text-base text-white/90 leading-relaxed">
                        <strong className="text-white">Solve Enterprise Challenges Together.</strong> CDAIOs and senior data leaders compare real approaches to scaling AI, navigating risk, and delivering business value. Leave with proven ideas, new relationships, and clarity on what will actually move the business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToRegistration}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#19E3FF] text-[#022A4A] font-bold hover:bg-white transition-all duration-300 uppercase tracking-wider text-sm"
                >
                  REGISTER NOW
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative mt-8 lg:mt-0">
              <div className="relative aspect-[4/3] border-2 border-[#19E3FF]/30 overflow-hidden">
                <Image
                  src="/panelforum.png"
                  alt="CDAIO Forum Panel Discussion"
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#022A4A]/80 backdrop-blur-sm border border-[#19E3FF]/30 px-3 py-2 sm:px-4 sm:py-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-[#19E3FF] rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-mono text-[#19E3FF]">REGISTRATION OPEN</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 grid grid-cols-2 gap-3">
                  <div className="bg-[#022A4A]/80 backdrop-blur-sm border border-[#19E3FF]/30 p-3">
                    <div className="text-center">
                      <div className="text-2xl font-black text-[#19E3FF] mb-1">50+</div>
                      <div className="text-[10px] sm:text-xs text-white/80">Data Leaders</div>
                    </div>
                  </div>
                  <div className="bg-[#022A4A]/80 backdrop-blur-sm border border-[#19E3FF]/30 p-3">
                    <div className="text-center">
                      <div className="text-2xl font-black text-[#007BFF] mb-1">72</div>
                      <div className="text-[10px] sm:text-xs text-white/80">Hours of Content</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedSpeakersSection() {
  const speakers = [
    {
      name: 'Mruna Asoori',
      title: 'CDO',
      organization: 'NewRez',
      image: '/abhishekmittalcdo.png'
    },
    {
      name: 'Patrick Chew',
      title: 'VP AI & Data Science',
      organization: 'AIT World Logistics',
      image: '/abhishekmittalcdo.png'
    },
    {
      name: 'Saba Dossani',
      title: 'Chief Data & Analytics Officer',
      organization: 'Comerica',
      image: '/abhishekmittalcdo.png'
    },
    {
      name: 'Ash Dhupar',
      title: 'Chief Data & Analytics Officer',
      organization: 'Analog Devices',
      image: '/abhishekmittalcdo.png'
    },
    {
      name: 'Vijay Gandra',
      title: 'Global Chief Data Officer',
      organization: 'Acrisure',
      image: '/abhishekmittalcdo.png'
    },
    {
      name: 'Michelle Gelman',
      title: 'Chief Data Officer',
      organization: 'Yougov',
      image: '/abhishekmittalcdo.png'
    },
    {
      name: 'Justin Heller',
      title: 'Chief Data Officer',
      organization: 'Synchrony Financial',
      image: '/abhishekmittalcdo.png'
    },
    {
      name: 'Shiva Jaganathan',
      title: 'Chief Data Officer',
      organization: 'UT Austin',
      image: '/abhishekmittalcdo.png'
    },
    {
      name: 'Karthik Josyula',
      title: 'Head of Data & AI Platforms',
      organization: 'Kohler',
      image: '/abhishekmittalcdo.png'
    },
    {
      name: 'Sahil Kapoor',
      title: 'Global VP - Head of Data Analytics & AI',
      organization: 'TaskUs',
      image: '/abhishekmittalcdo.png'
    },
    {
      name: 'Washington Mashingaidze',
      title: 'Head of Data Science and Analytics',
      organization: 'Crown Castle',
      image: '/abhishekmittalcdo.png'
    },
    {
      name: 'Milan McGraw',
      title: 'Partner',
      organization: 'AWS',
      image: '/abhishekmittalcdo.png'
    },
    {
      name: 'Abhishek Mittal',
      title: 'EVP, Chief Product & AI Officer',
      organization: 'AML Rightsource',
      image: '/abhishekmittalcdo.png'
    },
    {
      name: 'Karthik Ramasamy',
      title: 'Chief Analytics Officer',
      organization: 'Guardian Industries',
      image: '/abhishekmittalcdo.png'
    },
    {
      name: 'Mitesh Shah',
      title: 'Chief Data Officer',
      organization: 'Cardworks',
      image: '/abhishekmittalcdo.png'
    },
    {
      name: 'Shivani Sharma',
      title: 'Head of IT Transformation and AI Enablement',
      organization: 'Walgreens',
      image: '/abhishekmittalcdo.png'
    },
    {
      name: 'Piyush Singal',
      title: 'Head - Enterprise Data & AI',
      organization: 'Surgery Partners',
      image: '/abhishekmittalcdo.png'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-[#007BFF] tracking-wider mb-4 uppercase">Industry Leaders</div>
          <h2 className="text-5xl lg:text-6xl font-black text-[#022A4A] mb-6 uppercase">
            Featured Speakers
          </h2>
          <p className="text-xl text-[#022A4A]/70 max-w-3xl mx-auto">
            Learn from proven data and AI leaders driving transformation at enterprise scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#022A4A]/10 hover:border-[#007BFF]/50 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative aspect-square bg-[#022A4A]/5">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#022A4A] mb-1 uppercase">
                  {speaker.name}
                </h3>
                <p className="text-sm text-[#007BFF] font-semibold mb-1">
                  {speaker.title}
                </p>
                <p className="text-sm text-[#022A4A]/70">
                  {speaker.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyAttendSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  const reasons = [
    {
      title: 'Strategic Intelligence',
      description: 'Access cutting-edge insights on data strategy and AI implementation from industry leaders who have successfully navigated digital transformation.',
      icon: Brain,
    },
    {
      title: 'Executive Networking',
      description: 'Build relationships with vetted peers who understand your challenges. Share strategies and solutions in a confidential, trust-based environment.',
      icon: Network,
    },
    {
      title: 'Actionable Insights',
      description: 'Walk away with practical frameworks, tools, and strategies you can implement immediately to strengthen your data and AI capabilities.',
      icon: Award,
    },
    {
      title: 'Peer Learning',
      description: 'Participate in roundtable discussions and problem-solving sessions focused on real-world challenges facing data and AI leaders today.',
      icon: Users,
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-mono text-[#007BFF] tracking-wider mb-4 uppercase">Why Attend</div>
            <h2 className="text-5xl lg:text-6xl font-black text-[#022A4A] mb-8 uppercase">
              Elevate Your Data Strategy
            </h2>
            <p className="text-xl text-[#022A4A]/70 mb-8 leading-relaxed">
              The CDAIO Forum isn't just another conference. It's where data leaders
              come to think critically, share openly, and leave with solutions that matter.
            </p>
            <button
              onClick={scrollToRegistration}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#022A4A] text-white font-bold hover:bg-[#007BFF] transition-all duration-300 uppercase tracking-wider border-2 border-[#022A4A] hover:border-[#007BFF]"
            >
              REQUEST INVITATION
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#022A4A]/10 hover:border-[#007BFF]/50 p-6 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#007BFF]/10 flex items-center justify-center">
                      <reason.icon className="w-6 h-6 text-[#007BFF]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#022A4A] mb-2 uppercase">{reason.title}</h3>
                    <p className="text-[#022A4A]/70">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AgendaHighlightsSection() {
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  const agendaData = [
    {
      day: 'Sunday',
      date: 'March 22, 2026',
      sessions: [
        {
          time: '9:00 - 11:00 AM',
          title: 'EXECUTIVE COUNCIL BRUNCH & ROUNDTABLE',
          synopsis: 'Exclusive session for Executive Council members to connect over brunch and engage in strategic roundtable discussions on data and AI leadership.'
        },
        {
          time: '12:00 - 5:00 PM',
          title: 'EXECUTIVE COUNCIL OFF-SITE',
          synopsis: 'Private off-site experience for Executive Council members featuring immersive activities and strategic networking opportunities.'
        },
        {
          time: '2:00 - 5:00 PM',
          title: 'FORUM REGISTRATION',
          synopsis: 'Check in and receive your welcome package. Connect with CDAIO staff and fellow attendees as you prepare for three days of transformation.'
        },
        {
          time: '5:30 - 7:00 PM',
          title: 'WELCOME RECEPTION',
          synopsis: 'Begin building relationships with fellow data and AI leaders over refreshments in a relaxed atmosphere. Network before the forum officially begins.'
        },
        {
          time: '7:00 - 9:00 PM',
          title: 'OPENING DINNER & KEYNOTE - The Evolving Role of the CDAIO',
          synopsis: 'How the role is expanding from analytics leadership to enterprise transformation and strategic value creation. Where CDAIOs are taking on P&L, product, or COO-adjacent responsibilities and leading AI-driven change across the business.'
        }
      ]
    },
    {
      day: 'Monday',
      date: 'March 23, 2026',
      sessions: [
        {
          time: '7:00 - 7:55 AM',
          title: 'BREAKFAST',
          synopsis: 'Start your day with breakfast and morning conversations with peers.'
        },
        {
          time: '8:00 - 8:55 AM',
          title: 'OPENING KEYNOTE - Orchestrating the Enterprise to Be AI-Ready',
          synopsis: 'A blueprint for aligning people, processes, and structure to fully leverage AI across the business. Operating models that drive adoption and accountability, upskilling non-technical teams, and cross-functional governance structures that remove friction.'
        },
        {
          time: '9:05 - 9:35 AM',
          title: 'BREAKOUT - Deploying Enterprise AI Agents',
          synopsis: 'How leaders are moving from experiments to autonomous and semi-autonomous workflows that deliver measurable outcomes. Where AI agents are already creating value in operations, customer experience, and knowledge work.'
        },
        {
          time: '9:05 - 9:35 AM',
          title: 'WORKSHOP - Building a Scalable Data Foundation for GenAI',
          synopsis: 'What enterprises get right and wrong when building the minimum viable foundation required for GenAI success. Essential components that reduce cost and accelerate time-to-value.'
        },
        {
          time: '9:45 - 10:15 AM',
          title: 'BREAKOUT - Enterprise RAG That Actually Works',
          synopsis: 'A candid look at why most RAG implementations fail and how leading enterprises are making them reliable, trusted, and cost-efficient. Retrieval and evaluation practices that improve accuracy.'
        },
        {
          time: '9:45 - 10:15 AM',
          title: 'WORKSHOP - Privacy, Risk, Security & Trust for AI at Scale',
          synopsis: 'Practical approaches to managing enterprise risk while enabling rapid AI adoption. How CDAIOs balance regulatory pressure with innovation and trust-by-design frameworks for model governance.'
        },
        {
          time: '10:35 - 11:35 AM',
          title: 'BOARDROOM SESSIONS - Multiple Tracks',
          synopsis: 'Intimate, peer-led discussions limited to 12 C-level and VP-level participants. Self-select your session on topics including AI strategy, data governance, organizational change, and technology architecture.'
        },
        {
          time: '11:50 AM - 1:00 PM',
          title: 'LUNCH & KEYNOTE PANEL - Proving ROI on AI & Data Investments',
          synopsis: 'How CDAIOs are translating AI performance into CFO-ready business value. Financial frameworks that tie AI projects to revenue, productivity, and cost reduction.'
        },
        {
          time: '1:15 - 1:45 PM',
          title: 'BREAKOUT - Modernizing Legacy Systems for AI & Agent Workflows',
          synopsis: 'How leaders are simplifying complex legacy environments to support next-generation AI capabilities. When to wrap, abstract, or rebuild legacy systems and the ROI impact of each approach.'
        },
        {
          time: '1:15 - 1:45 PM',
          title: 'WORKSHOP - Turning AI into Customer, Product, and Revenue Growth',
          synopsis: 'How organizations transform AI from internal productivity gains into market-facing differentiation. What works in productizing AI across financial services, insurance, retail, and SaaS.'
        },
        {
          time: '2:15 - 5:00 PM',
          title: 'OFF-SITE ACTIVITIES',
          synopsis: 'Choose from curated off-site experiences designed for networking and relationship building. Activities include guided tours, team challenges, and unique Austin experiences.'
        },
        {
          time: '5:00 - 6:30 PM',
          title: 'EVENING RECEPTION',
          synopsis: 'Unwind and connect with peers over cocktails and appetizers. Continue conversations from the day in a relaxed setting.'
        },
        {
          time: '6:30 - 8:00 PM',
          title: 'DINNER',
          synopsis: 'Evening meal for off-site activity participants.'
        }
      ]
    },
    {
      day: 'Tuesday',
      date: 'March 24, 2026',
      sessions: [
        {
          time: '8:00 - 8:55 AM',
          title: 'BREAKFAST',
          synopsis: 'Final morning to connect with peers over breakfast before the closing sessions.'
        },
        {
          time: '9:00 - 9:55 AM',
          title: 'OPENING KEYNOTE PANEL - Executing Responsible AI Without Slowing Innovation',
          synopsis: 'How the most successful enterprises embed trust and responsibility into fast-moving AI programs. Policy, model documentation, and human oversight practices that scale.'
        },
        {
          time: '10:20 - 11:15 AM',
          title: 'BOARDROOM SESSION - Orchestrating the Enterprise to Be AI-Ready',
          synopsis: 'Deep dive on aligning people, processes, and structure. How to upskill non-technical teams to work effectively with AI and agents. Operating models from COE to federated to hybrid.'
        },
        {
          time: '10:20 - 11:15 AM',
          title: 'BOARDROOM SESSION - Building a Scalable Data Foundation for GenAI',
          synopsis: 'Working session on closing data quality, lineage, and interoperability gaps. Lessons from sectors that compressed multi-year foundation work into months.'
        },
        {
          time: '11:30 AM - 12:20 PM',
          title: 'BOARDROOM SESSION - Enterprise RAG Implementation',
          synopsis: 'Practical discussion on making RAG reliable and cost-efficient. How to govern and scale knowledge bases across business units and RAG use cases showing consistent ROI.'
        },
        {
          time: '11:30 AM - 12:20 PM',
          title: 'BOARDROOM SESSION - The Evolving Role of the CDAIO',
          synopsis: 'How CDAIOs measure impact and communicate strategic progress. Leading AI-driven change across the business and influencing the board. Career development and role expansion.'
        },
        {
          time: '12:30 - 1:00 PM',
          title: 'LUNCH & DEPARTURE',
          synopsis: 'Final networking opportunity and forum wrap-up. Reflect on key learnings and next steps as you prepare to depart.'
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="mb-16">
          <div className="text-xs font-mono text-[#007BFF] tracking-wider mb-4 uppercase">Three Days of Impact</div>
          <h2 className="text-5xl lg:text-6xl font-black text-[#022A4A] mb-6 uppercase">
            Forum Agenda
          </h2>
          <p className="text-xl text-[#022A4A]/70 max-w-3xl">
            A carefully curated program designed to maximize learning, networking, and actionable outcomes.
          </p>
        </div>

        <div className="space-y-4">
          {agendaData.map((day, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#022A4A]/10 overflow-hidden hover:border-[#007BFF]/50 transition-all duration-300"
            >
              <button
                onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-[#022A4A]/5 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-6 h-6 text-[#007BFF]" />
                    <span className="text-2xl font-black text-[#022A4A] uppercase">{day.day}</span>
                  </div>
                  <p className="text-[#022A4A]/70">{day.date}</p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-[#007BFF] transition-transform duration-300 ${
                    expandedDay === day.day ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedDay === day.day && (
                <div className="px-8 pb-8 space-y-6 border-t-2 border-[#022A4A]/10">
                  {day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="pt-6">
                      <div className="flex items-start gap-4">
                        <Clock className="w-5 h-5 text-[#007BFF] flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <div className="text-sm text-[#007BFF] font-mono mb-2">{session.time}</div>
                          <h4 className="text-lg font-bold text-[#022A4A] mb-2 uppercase">{session.title}</h4>
                          <p className="text-[#022A4A]/70 leading-relaxed">{session.synopsis}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VenueSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-[#007BFF] tracking-wider mb-4 uppercase">Venue & Location</div>
          <h2 className="text-5xl lg:text-6xl font-black text-[#022A4A] mb-4 uppercase">
            Downright Hotel
          </h2>
          <p className="text-3xl text-[#007BFF] font-bold">
            Austin, Texas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] border-2 border-[#007BFF]/20 overflow-hidden">
              <Image
                src="/downrighthotel.png"
                alt="Downright Hotel Austin"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xl text-[#022A4A]/70 mb-6 leading-relaxed">
              Experience world-class hospitality in the heart of Austin's vibrant tech scene.
              The Downright Hotel provides the perfect setting for focused collaboration and networking.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#007BFF] flex-shrink-0 mt-1" />
                <div className="text-[#022A4A]/70">
                  <strong className="text-[#022A4A]">Prime Location:</strong> Easy access to Austin-Bergstrom International Airport
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#007BFF] flex-shrink-0 mt-1" />
                <div className="text-[#022A4A]/70">
                  <strong className="text-[#022A4A]">Modern Facilities:</strong> State-of-the-art meeting spaces and technology
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#007BFF] flex-shrink-0 mt-1" />
                <div className="text-[#022A4A]/70">
                  <strong className="text-[#022A4A]">All-Inclusive:</strong> Accommodations, meals, and activities included
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceTypesSection() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="mb-16">
          <div className="text-xs font-mono text-[#007BFF] tracking-wider mb-4 uppercase">Immersive Experiences</div>
          <h2 className="text-5xl lg:text-6xl font-black text-[#022A4A] mb-6 uppercase">
            Five Ways to Learn
          </h2>
          <p className="text-xl text-[#022A4A]/70 max-w-3xl">
            Each forum combines multiple formats to deliver maximum value and actionable intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 lg:row-span-2">
            <div className="group h-full bg-white border-2 border-[#007BFF]/30 p-10 hover:border-[#007BFF] transition-all duration-300">
              <Eye className="w-14 h-14 text-[#007BFF] mb-6" />
              <h3 className="text-4xl font-black text-[#022A4A] mb-4 uppercase">Executive Briefings</h3>
              <p className="text-xl text-[#022A4A]/70 mb-6">
                Receive strategic insights directly from industry leaders and data pioneers who have successfully led transformation initiatives.
              </p>
              <div className="mt-auto space-y-3">
                <div className="flex items-center gap-3 text-[#022A4A]/70">
                  <Shield className="w-5 h-5 text-[#007BFF]" />
                  <span>Enterprise data strategy</span>
                </div>
                <div className="flex items-center gap-3 text-[#022A4A]/70">
                  <Activity className="w-5 h-5 text-[#007BFF]" />
                  <span>AI implementation patterns</span>
                </div>
                <div className="flex items-center gap-3 text-[#022A4A]/70">
                  <Shield className="w-5 h-5 text-[#007BFF]" />
                  <span>Governance frameworks</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="group bg-white border-2 border-[#022A4A]/10 hover:border-[#007BFF]/50 p-6 transition-all duration-300 h-full">
              <Users className="w-10 h-10 text-[#007BFF] mb-4" />
              <h3 className="text-2xl font-bold text-[#022A4A] mb-3 uppercase">Roundtables</h3>
              <p className="text-[#022A4A]/70 mb-4">
                Closed-door peer discussions with fellow CDOs and data leaders.
              </p>
              <div className="text-sm text-[#007BFF] font-mono">
                → Confidential Environment
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="group bg-white border-2 border-[#022A4A]/10 hover:border-[#007BFF]/50 p-6 transition-all duration-300 h-full">
              <Zap className="w-10 h-10 text-[#007BFF] mb-4" />
              <h3 className="text-2xl font-bold text-[#022A4A] mb-3 uppercase">Workshops</h3>
              <p className="text-[#022A4A]/70 mb-4">
                Hands-on sessions with take-home frameworks and tools.
              </p>
              <div className="text-sm text-[#007BFF] font-mono">
                → Immediate Implementation
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="group bg-white border-2 border-[#022A4A]/10 hover:border-[#007BFF]/50 p-8 transition-all duration-300">
              <div className="flex items-start gap-6">
                <Target className="w-12 h-12 text-[#007BFF] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-[#022A4A] mb-3 uppercase">Strategic Planning</h3>
                  <p className="text-[#022A4A]/70 mb-4">
                    Executive sessions on future trends and strategic investments in data and AI.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <span className="text-xs bg-[#007BFF]/10 text-[#007BFF] px-3 py-1 uppercase font-bold">Board Communication</span>
                    <span className="text-xs bg-[#007BFF]/10 text-[#007BFF] px-3 py-1 uppercase font-bold">Value Measurement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="group bg-white border-2 border-[#022A4A]/10 hover:border-[#007BFF]/50 p-8 transition-all duration-300">
              <div className="flex items-start gap-6">
                <Activity className="w-12 h-12 text-[#007BFF] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-[#022A4A] mb-3 uppercase">Case Studies</h3>
                  <p className="text-[#022A4A]/70 mb-4">
                    Real-world examples of successful data and AI transformations from peer organizations.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <span className="text-xs bg-[#007BFF]/10 text-[#007BFF] px-3 py-1 uppercase font-bold">Lessons Learned</span>
                    <span className="text-xs bg-[#007BFF]/10 text-[#007BFF] px-3 py-1 uppercase font-bold">Best Practices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NetworkingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-[#007BFF]/5 border-2 border-[#007BFF]/20 p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#007BFF]/10 flex items-center justify-center">
                    <Users className="w-8 h-8 text-[#007BFF]" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#022A4A] uppercase">Curated</div>
                    <div className="text-[#022A4A]/70">Attendee Selection</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#007BFF]/10 flex items-center justify-center">
                    <Network className="w-8 h-8 text-[#007BFF]" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#022A4A] uppercase">Structured</div>
                    <div className="text-[#022A4A]/70">Networking Sessions</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#007BFF]/10 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-[#007BFF]" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#022A4A] uppercase">Confidential</div>
                    <div className="text-[#022A4A]/70">Discussion Environment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-mono text-[#007BFF] tracking-wider mb-4 uppercase">Networking Opportunities</div>
            <h2 className="text-5xl lg:text-6xl font-black text-[#022A4A] mb-8 uppercase">
              Connect with Peers
            </h2>
            <p className="text-xl text-[#022A4A]/70 mb-6 leading-relaxed">
              Build lasting relationships with fellow data leaders who understand your challenges.
              Every attendee is vetted to ensure productive, high-level conversations.
            </p>
            <p className="text-lg text-[#022A4A]/70 mb-8 leading-relaxed">
              From structured roundtables to informal networking sessions, you'll have multiple
              opportunities to connect, share insights, and develop partnerships that extend beyond the forum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RegistrationSection() {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = '//js.hsforms.net/forms/embed/v2.js';
    script1.async = true;
    script1.charset = 'utf-8';
    document.body.appendChild(script1);

    script1.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '45377644',
          formId: '35efb7c7-33ba-4b9e-9d77-4a88a2070de6',
          target: '#hubspot-forum-registration',
          region: 'na1',
          onFormReady: function() {
            const formContainer = document.querySelector('#hubspot-forum-registration');
            if (formContainer) {
              const style = document.createElement('style');
              style.textContent = `
                #hubspot-forum-registration .hs-form {
                  font-family: 'Inter', sans-serif;
                }
                #hubspot-forum-registration .hs-form-field label {
                  color: #022A4A;
                  font-weight: 600;
                  font-size: 0.875rem;
                  text-transform: uppercase;
                  letter-spacing: 0.05em;
                  margin-bottom: 0.5rem;
                }
                #hubspot-forum-registration .hs-input {
                  border: 2px solid #022A4A20;
                  border-radius: 0;
                  padding: 0.75rem 1rem;
                  font-size: 1rem;
                  transition: all 0.2s;
                  width: 100%;
                  background: #FFFFFF;
                  color: #022A4A;
                }
                #hubspot-forum-registration .hs-input:focus {
                  outline: none;
                  border-color: #007BFF;
                  box-shadow: 0 0 0 3px #007BFF20;
                }
                #hubspot-forum-registration .hs-button {
                  background-color: #022A4A;
                  color: white;
                  font-weight: 700;
                  padding: 1rem 2rem;
                  border-radius: 0;
                  border: 2px solid #022A4A;
                  font-size: 1.125rem;
                  cursor: pointer;
                  transition: all 0.3s;
                  text-transform: uppercase;
                  letter-spacing: 0.05em;
                  width: 100%;
                  margin-top: 1rem;
                }
                #hubspot-forum-registration .hs-button:hover {
                  background-color: #007BFF;
                  border-color: #007BFF;
                }
                #hubspot-forum-registration .hs-error-msgs {
                  color: #dc2626;
                  font-size: 0.875rem;
                  margin-top: 0.25rem;
                }
                #hubspot-forum-registration .hs-form-field {
                  margin-bottom: 1.5rem;
                }
                #hubspot-forum-registration .hs-input::placeholder {
                  color: #022A4A60;
                }
                #hubspot-forum-registration .hs-form-booleancheckbox {
                  display: flex;
                  align-items: flex-start;
                  gap: 0.75rem;
                }
                #hubspot-forum-registration .hs-form-booleancheckbox input[type="checkbox"] {
                  width: 1.25rem;
                  height: 1.25rem;
                  min-width: 1.25rem;
                  border: 2px solid #022A4A;
                  border-radius: 0;
                  cursor: pointer;
                  margin-top: 0.125rem;
                }
                #hubspot-forum-registration .hs-form-booleancheckbox input[type="checkbox"]:checked {
                  background-color: #007BFF;
                  border-color: #007BFF;
                }
                #hubspot-forum-registration .hs-form-booleancheckbox label {
                  text-transform: none;
                  font-weight: 400;
                  font-size: 0.875rem;
                  line-height: 1.5;
                  color: #022A4A;
                }
                #hubspot-forum-registration .inputs-list {
                  list-style: none;
                  padding: 0;
                }
              `;
              document.head.appendChild(style);
            }
          }
        });
      }
    };

    return () => {
      if (document.body.contains(script1)) {
        document.body.removeChild(script1);
      }
    };
  }, []);

  return (
    <section id="registration" className="py-24 bg-gradient-to-br from-[#022A4A] via-[#022A4A] to-[#007BFF] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255, 255, 255, 0.5) 50px, rgba(255, 255, 255, 0.5) 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255, 255, 255, 0.5) 50px, rgba(255, 255, 255, 0.5) 51px)`
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="text-xs font-mono text-[#19E3FF] tracking-wider mb-4 uppercase">Secure Your Seat</div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 uppercase">
            Register for the Forum
          </h2>
          <p className="text-xl text-white/90">
            Limited seats available for qualified data and AI leaders. Complete the form below to register.
          </p>
        </div>

        <div className="bg-white border-2 border-[#19E3FF]/30 p-8 lg:p-12 shadow-2xl">
          <div className="mb-8 pb-8 border-b-2 border-[#022A4A]/10">
            <h3 className="text-2xl font-bold text-[#022A4A] mb-4 uppercase">Apply to Participate</h3>
            <p className="text-[#022A4A]/80 leading-relaxed mb-4">
              This forum is designed exclusively for senior data and AI leaders operating at enterprise scale. Complimentary participation is reserved for executives who meet the following criteria:
            </p>
            <ul className="space-y-2 text-[#022A4A]/80">
              <li className="flex items-start gap-2">
                <span className="text-[#007BFF] font-bold mt-1">•</span>
                <span>Chief Data, Analytics, or AI Officer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#007BFF] font-bold mt-1">•</span>
                <span>C-level, Head of Function, or equivalent enterprise leader</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#007BFF] font-bold mt-1">•</span>
                <span>Senior Director through VP overseeing data, analytics, or AI strategy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#007BFF] font-bold mt-1">•</span>
                <span>Organization size of $500M+ in revenue or 1,000+ employees</span>
              </li>
            </ul>
          </div>
          <div id="hubspot-forum-registration" />
        </div>

        <p className="text-center text-white/70 text-sm mt-8">
          Registration is subject to approval based on leadership role and organizational fit
        </p>
      </div>
    </section>
  );
}

declare global {
  interface Window {
    hbspt: any;
  }
}
