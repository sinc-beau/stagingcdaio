'use client';

import React, { useState } from 'react';
import Header from '@/components/cdaio/header';
import Footer from '@/components/cdaio/footer';
import JoinModal from '@/components/cdaio/join-modal';

export default function TermsOfUse() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <>
      <Header onOpenJoinModal={() => setIsJoinModalOpen(true)} />
      <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#022A4A] mb-4">Terms of Use</h1>
          <div className="h-1 w-24 bg-[#007BFF] mb-8" />
          <p className="text-[#022A4A]/60 mb-12">Last Updated: November 6, 2025</p>

          <div className="space-y-8 text-[#022A4A]/80">
            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using the CDAIO platform, you accept and agree to be bound by these Terms of Use.
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">2. Description of Service</h2>
              <p className="mb-4">
                CDAIO provides a peer-to-peer ecosystem for data and AI professionals, including executives,
                their teams, and solution providers. Our services include events, networking opportunities,
                educational resources, and community features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">3. User Eligibility</h2>
              <p className="mb-4">
                You must be at least 18 years old and capable of forming a binding contract to use our services.
                By using CDAIO, you represent and warrant that you meet these requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">4. User Conduct</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the service for any unlawful purpose</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Impersonate any person or entity</li>
                <li>Transmit spam or unsolicited communications</li>
                <li>Interfere with or disrupt the service</li>
                <li>Attempt to gain unauthorized access to any systems</li>
                <li>Use automated systems to access the service without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">5. Intellectual Property</h2>
              <p className="mb-4">
                All content, features, and functionality of CDAIO, including but not limited to text, graphics,
                logos, and software, are owned by CDAIO and protected by copyright, trademark, and other
                intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">6. User Content</h2>
              <p className="mb-4">
                You retain ownership of content you submit to CDAIO. By submitting content, you grant us a
                non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute your content
                in connection with our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">7. Events and Registrations</h2>
              <p className="mb-4">
                Event registrations are subject to availability. We reserve the right to cancel or modify
                events at any time. Refund policies, if applicable, will be communicated at the time of registration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">8. Disclaimer of Warranties</h2>
              <p className="mb-4">
                CDAIO is provided "as is" and "as available" without warranties of any kind, either express or
                implied. We do not warrant that the service will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">9. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law, CDAIO shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">10. Indemnification</h2>
              <p className="mb-4">
                You agree to indemnify and hold harmless CDAIO and its affiliates from any claims, damages,
                losses, or expenses arising from your use of the service or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">11. Termination</h2>
              <p className="mb-4">
                We reserve the right to suspend or terminate your access to CDAIO at any time, with or without
                notice, for any reason, including violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">12. Modifications to Terms</h2>
              <p className="mb-4">
                We may modify these terms at any time. Continued use of the service after changes constitutes
                acceptance of the modified terms. We will provide notice of material changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">13. Governing Law</h2>
              <p className="mb-4">
                These terms shall be governed by and construed in accordance with applicable laws, without
                regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">14. Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms of Use, please contact us at:
              </p>
              <p className="font-semibold">
                Email: <a href="mailto:legal@cdaio.com" className="text-[#007BFF] hover:underline">legal@cdaio.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
