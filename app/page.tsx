'use client';

import React, { useState } from 'react';
import Header from '@/components/cdaio/header';
import HeroSection from '@/components/cdaio/hero-section';
import AudienceSection from '@/components/cdaio/audience-section';
import ExecutiveCouncilSection from '@/components/cdaio/executive-council-section';
import EventSection from '@/components/cdaio/event-section';
import InsightsSection from '@/components/cdaio/insights-section';
import EcosystemSection from '@/components/cdaio/ecosystem-section';
import CalendarSection from '@/components/cdaio/calendar-section';
import PartnerSection from '@/components/cdaio/partner-section';
import Footer from '@/components/cdaio/footer';
import GuildModal from '@/components/cdaio/guild-modal';
import PartnerModal from '@/components/cdaio/partner-modal';
import JoinModal from '@/components/cdaio/join-modal';
import DataForumModal from '@/components/cdaio/data-forum-modal';

export default function Home() {
  const [isGuildModalOpen, setIsGuildModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isDataForumModalOpen, setIsDataForumModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Header onOpenJoinModal={() => setIsJoinModalOpen(true)} />
      <HeroSection />
      <AudienceSection />
      <InsightsSection onOpenJoinModal={() => setIsJoinModalOpen(true)} />
      <ExecutiveCouncilSection onOpenGuildModal={() => setIsGuildModalOpen(true)} />
      <EventSection />
      <EcosystemSection />
      <CalendarSection onOpenDataForum={() => setIsDataForumModalOpen(true)} />
      <PartnerSection onOpenPartner={() => setIsPartnerModalOpen(true)} />
      <Footer />

      <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
      <GuildModal isOpen={isGuildModalOpen} onClose={() => setIsGuildModalOpen(false)} />
      <PartnerModal isOpen={isPartnerModalOpen} onClose={() => setIsPartnerModalOpen(false)} />
      <DataForumModal isOpen={isDataForumModalOpen} onClose={() => setIsDataForumModalOpen(false)} />
    </main>
  );
}
