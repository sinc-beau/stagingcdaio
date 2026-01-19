'use client';

import React from 'react';
import { Users, Award } from 'lucide-react';

interface ExecutiveCouncilSectionProps {
  onOpenGuildModal: () => void;
}

export default function ExecutiveCouncilSection({ onOpenGuildModal }: ExecutiveCouncilSectionProps) {
  return (
    <section id="council" className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(2, 42, 74, 0.5) 50px, rgba(2, 42, 74, 0.5) 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(2, 42, 74, 0.5) 50px, rgba(2, 42, 74, 0.5) 51px)`
        }} />
      </div>
      <div className="absolute top-1/4 right-0 w-72 h-72 border-2 border-[#007BFF]/10" style={{ transform: 'rotate(45deg)' }} />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 border-2 border-[#007BFF]/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#007BFF] text-xs font-bold tracking-wider mb-6 bg-[#007BFF]/10 px-6 py-3 border border-[#007BFF]/30">
            <Award className="w-4 h-4" />
            EXECUTIVE LEADERSHIP
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[#022A4A]">Guided by Our</span>
            <br />
            <span className="text-[#007BFF]">Executive Council</span>
          </h2>

          <div className="h-1 w-24 bg-[#022A4A] mx-auto mb-8" />

          <p className="text-lg md:text-xl text-[#022A4A]/70 max-w-3xl mx-auto">
            Leading data and AI executives shaping the future of intelligent organizations
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="inline-block px-6 py-3 bg-[#007BFF]/10 border-2 border-[#007BFF]/30 mb-8">
            <p className="text-[#022A4A] font-bold uppercase tracking-wider text-sm">
              Actively Growing Our Council
            </p>
          </div>

          <div className="space-y-8">
            <div className="group relative bg-white border-2 border-[#022A4A]/10 p-8 hover:border-[#007BFF]/50 transition-all duration-300 overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#007BFF]/20" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#007BFF]/20" />

              <div className="relative flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 border-2 border-[#007BFF] overflow-hidden">
                    <img
                      src="/Chidroop Madhavarapu CDO Headshot (1).png"
                      alt="Chidroop Madhavarapu"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#022A4A] mb-1">Chidroop Madhavarapu</h3>
                  <p className="text-[#007BFF] font-semibold mb-4">Sr. Director, Data Science | Atlassian</p>

                  <p className="text-[#022A4A]/80 leading-relaxed text-sm mb-4">
                    Chidroop Madhavarapu leads Data Science at Atlassian, playing a key role in leveraging data and insights in major business initiatives. With almost two decades of experience in software engineering, data science, predictive modelling, and analytics, he has a strong track record of translating data into transformative business strategies.
                  </p>

                  <p className="text-[#022A4A]/70 leading-relaxed text-sm">
                    Chid has extensive experience helping enterprise companies and multinational businesses reimagine workflows, leveraging data-driven insights to enhance efficiency and drive innovation. He holds a Bachelors and Masters in Computer Science.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-white border-2 border-[#022A4A]/10 p-8 hover:border-[#007BFF]/50 transition-all duration-300 overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#007BFF]/20" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#007BFF]/20" />

              <div className="relative flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 border-2 border-[#007BFF] overflow-hidden">
                    <img
                      src="/piyushsinghalcdo.png"
                      alt="Piyush Singhal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#022A4A] mb-1">Piyush Singhal</h3>
                  <p className="text-[#007BFF] font-semibold mb-4">Head of Enterprise Data and AI | Surgery Partners, Inc.</p>

                  <p className="text-[#022A4A]/80 leading-relaxed text-sm mb-4">
                    Piyush has extensive strategic, architectural and delivery experience leading Enterprise level Data & AI teams. Fortunate to serve as a leader in NYC for large corporates such as JNJ, American Express, NBC Universal, Pernod Ricard, and most recently as Head of Enterprise Data Engineering, Platform and Architecture at Petco where he led e2e healthcare data initiatives.
                  </p>

                  <p className="text-[#022A4A]/70 leading-relaxed text-sm">
                    Known in the industry to consistently deliver excellent results leading cross-functional projects partnering closely with leaders from IT, Analytics, Operations, Sales, Marketing, FP&A, Research, Legal etc.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-white border-2 border-[#022A4A]/10 p-8 hover:border-[#007BFF]/50 transition-all duration-300 overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#007BFF]/20" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#007BFF]/20" />

              <div className="relative flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 border-2 border-[#007BFF] overflow-hidden">
                    <img
                      src="/abhishekmittalcdo.png"
                      alt="Abhishek Mittal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#022A4A] mb-1">Abhishek Mittal</h3>
                  <p className="text-[#007BFF] font-semibold mb-4">Chief Product & AI Officer | AML RightSource</p>

                  <p className="text-[#022A4A]/80 leading-relaxed text-sm mb-4">
                    Abhishek Mittal is the Chief Product & AI Officer at AML RightSource, where he spearheads product innovation and AI-enabled transformation for global compliance services. With over 20 years of experience in financial services and legal technology, he specializes in commercializing scalable AI solutions that drive recurring revenue, EBITDA expansion, and operational efficiency.
                  </p>

                  <p className="text-[#022A4A]/70 leading-relaxed text-sm">
                    Previously, as a VP at Wolters Kluwer, Abhishek managed a $1B+ portfolio and launched award-winning AI products—securing multiple patents along the way. A recognized thought leader, he combines deep domain expertise with cutting-edge machine learning strategies to transform legacy operations into data-driven centers of excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-white border-2 border-[#022A4A]/10 p-8 hover:border-[#007BFF]/50 transition-all duration-300 overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#007BFF]/20" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#007BFF]/20" />

              <div className="relative flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 border-2 border-[#007BFF] overflow-hidden">
                    <img
                      src="/dartanion_williams.png"
                      alt="Dartanion Williams"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#022A4A] mb-1">Dartanion Williams</h3>
                  <p className="text-[#007BFF] font-semibold mb-4">Chief Data Officer and Chief Performance Officer | Baltimore City</p>

                  <p className="text-[#022A4A]/80 leading-relaxed text-sm mb-4">
                    Dartanion Williams is a passionate public servant, currently serving in a dual capacity as Chief Data Officer and Chief Performance Officer for Baltimore City. He brings experience across local government, nonprofits, big tech, and startups, leading data, technology, and operations initiatives that increase efficiency, modernize services, and deliver better experiences. His work has included reforms in areas such as student information management, special education transportation, emergency medical services, and city services like 311 and permitting.
                  </p>

                  <p className="text-[#022A4A]/70 leading-relaxed text-sm">
                    Dartanion has taught in data analytics programs across the nation, most notably at The George Washington University. He is deeply committed to building strong teams and using data, design, and technology to make government simpler, more transparent, and more responsive for residents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onOpenGuildModal}
            className="group px-10 py-5 bg-[#022A4A] text-white font-bold text-lg hover:bg-[#007BFF] transition-all duration-300 flex items-center gap-3 mx-auto border-2 border-[#022A4A] hover:border-[#007BFF] uppercase tracking-wider"
          >
            <Award className="w-5 h-5" />
            Apply to Join the Council
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <p className="text-[#022A4A]/60 text-sm mt-6 max-w-2xl mx-auto">
            Council members guide strategic initiatives, shape community direction, and define the future of data and AI leadership.
          </p>
        </div>
      </div>
    </section>
  );
}
