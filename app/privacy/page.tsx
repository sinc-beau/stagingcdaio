'use client';

import React, { useState } from 'react';
import Header from '@/components/cdaio/header';
import Footer from '@/components/cdaio/footer';
import JoinModal from '@/components/cdaio/join-modal';

export default function PrivacyPolicy() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <>
      <Header onOpenJoinModal={() => setIsJoinModalOpen(true)} />
      <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#022A4A] mb-4">Privacy Policy</h1>
          <div className="h-1 w-24 bg-[#007BFF] mb-8" />
          <p className="text-[#022A4A]/60 mb-12">Last Updated: November 6, 2025</p>

          <div className="space-y-8 text-[#022A4A]/80">
            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information you provide directly to us when you register for events, join our community,
                or contact us. This may include your name, email address, company information, and professional details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Send you updates about events and community activities</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Communicate with you about services that may interest you</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your
                information with service providers who assist us in operating our platform and conducting our
                business, subject to confidentiality obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">4. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">5. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">6. Cookies and Tracking</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to collect information about your browsing
                activities and to improve your experience on our website. You can control cookie preferences
                through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">7. Third-Party Services</h2>
              <p className="mb-4">
                Our website may contain links to third-party websites or services. We are not responsible for
                the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">8. Children's Privacy</h2>
              <p className="mb-4">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect
                personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">9. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by
                posting the new policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#022A4A] mb-4">10. Contact Us</h2>
              <p className="mb-4">
                If you have questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p className="font-semibold">
                Email: <a href="mailto:privacy@cdaio.com" className="text-[#007BFF] hover:underline">privacy@cdaio.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
