'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle2, Calendar, MapPin, Plane, Building2 } from 'lucide-react';
import Header from '@/components/cdaio/header';
import Footer from '@/components/cdaio/footer';
import JoinModal from '@/components/cdaio/join-modal';

export default function FullRegistrationPage() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

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
          formId: '43144cb3-9056-4dc0-86c1-949d1e5ee1c1',
          target: '#hubspot-full-registration',
          region: 'na1',
          onFormReady: function() {
            const formContainer = document.querySelector('#hubspot-full-registration');
            if (formContainer) {
              const style = document.createElement('style');
              style.textContent = `
                #hubspot-full-registration .hs-form {
                  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                }
                #hubspot-full-registration .hs-form-field {
                  margin-bottom: 1.5rem;
                }
                #hubspot-full-registration .hs-form-field > label {
                  display: block;
                  color: #022A4A;
                  font-weight: 500;
                  font-size: 0.875rem;
                  margin-bottom: 0.5rem;
                }
                #hubspot-full-registration .hs-input {
                  display: block;
                  width: 100%;
                  border: 1px solid #cbd5e1;
                  border-radius: 6px;
                  padding: 0.625rem 0.875rem;
                  font-size: 0.9375rem;
                  line-height: 1.5;
                  color: #022A4A;
                  background-color: #FFFFFF;
                  transition: all 0.2s ease;
                }
                #hubspot-full-registration .hs-input:focus {
                  outline: none;
                  border-color: #007BFF;
                  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.08);
                }
                #hubspot-full-registration .hs-input::placeholder {
                  color: #022A4A60;
                }
                #hubspot-full-registration select.hs-input {
                  appearance: none;
                  -webkit-appearance: none;
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%23475569' d='M5 6L0 0h10z'/%3E%3C/svg%3E");
                  background-repeat: no-repeat;
                  background-position: right 0.875rem center;
                  padding-right: 2.5rem;
                }
                #hubspot-full-registration textarea.hs-input {
                  min-height: 100px;
                  resize: vertical;
                  font-family: inherit;
                }
                #hubspot-full-registration .hs-error-msgs {
                  list-style: none;
                  padding: 0;
                  margin: 0.5rem 0 0 0;
                }
                #hubspot-full-registration .hs-error-msgs li {
                  color: #dc2626;
                  font-size: 0.875rem;
                }
                #hubspot-full-registration .hs-button {
                  display: block;
                  width: 100%;
                  background-color: #007BFF;
                  color: white;
                  font-weight: 600;
                  font-size: 1rem;
                  padding: 0.75rem 1.5rem;
                  border: none;
                  border-radius: 6px;
                  cursor: pointer;
                  transition: all 0.2s ease;
                  margin-top: 1.5rem;
                }
                #hubspot-full-registration .hs-button:hover {
                  background-color: #0056b3;
                  transform: translateY(-1px);
                  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.25);
                }
                #hubspot-full-registration .hs-button:active {
                  transform: translateY(0);
                  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.2);
                }
                #hubspot-full-registration .inputs-list {
                  list-style: none;
                  padding: 0;
                  margin: 0;
                }
                #hubspot-full-registration .inputs-list li {
                  margin-bottom: 0.75rem;
                }
                #hubspot-full-registration .hs-form-booleancheckbox,
                #hubspot-full-registration .hs-form-radio {
                  margin: 0;
                }
                #hubspot-full-registration .hs-form-booleancheckbox-display,
                #hubspot-full-registration .hs-form-radio-display {
                  display: flex;
                  align-items: flex-start;
                  gap: 0.625rem;
                }
                #hubspot-full-registration .hs-form-booleancheckbox-display input[type="checkbox"],
                #hubspot-full-registration .hs-form-radio-display input[type="radio"],
                #hubspot-full-registration .inputs-list input[type="checkbox"],
                #hubspot-full-registration .inputs-list input[type="radio"] {
                  margin: 0.2rem 0 0 0;
                  flex-shrink: 0;
                }
                #hubspot-full-registration input[type="checkbox"] {
                  appearance: none;
                  -webkit-appearance: none;
                  width: 1rem;
                  height: 1rem;
                  min-width: 1rem;
                  border: 1.5px solid #94a3b8;
                  border-radius: 3px;
                  background: #FFFFFF;
                  cursor: pointer;
                  position: relative;
                  transition: all 0.2s ease;
                }
                #hubspot-full-registration input[type="checkbox"]:hover {
                  border-color: #007BFF;
                  background: #f8fafc;
                }
                #hubspot-full-registration input[type="checkbox"]:checked {
                  background-color: #007BFF;
                  border-color: #007BFF;
                }
                #hubspot-full-registration input[type="checkbox"]:checked::before {
                  content: "";
                  position: absolute;
                  left: 0.3rem;
                  top: 0.05rem;
                  width: 0.3rem;
                  height: 0.5rem;
                  border: solid white;
                  border-width: 0 2px 2px 0;
                  transform: rotate(45deg);
                }
                #hubspot-full-registration input[type="radio"] {
                  appearance: none;
                  -webkit-appearance: none;
                  width: 1rem;
                  height: 1rem;
                  min-width: 1rem;
                  border: 1.5px solid #94a3b8;
                  border-radius: 50%;
                  background: #FFFFFF;
                  cursor: pointer;
                  position: relative;
                  transition: all 0.2s ease;
                }
                #hubspot-full-registration input[type="radio"]:hover {
                  border-color: #007BFF;
                  background: #f8fafc;
                }
                #hubspot-full-registration input[type="radio"]:checked {
                  border-color: #007BFF;
                  background: #FFFFFF;
                }
                #hubspot-full-registration input[type="radio"]:checked::before {
                  content: "";
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                  width: 0.5rem;
                  height: 0.5rem;
                  border-radius: 50%;
                  background-color: #007BFF;
                }
                #hubspot-full-registration .hs-form-booleancheckbox-display > span,
                #hubspot-full-registration .hs-form-radio-display > span,
                #hubspot-full-registration .inputs-list label {
                  flex: 1;
                  font-size: 0.9375rem;
                  line-height: 1.6;
                  color: #022A4A;
                  text-transform: none;
                  font-weight: normal;
                  letter-spacing: normal;
                }
                #hubspot-full-registration .hs-form-booleancheckbox-display > span a,
                #hubspot-full-registration .hs-form-radio-display > span a,
                #hubspot-full-registration .inputs-list label a {
                  color: #007BFF;
                  text-decoration: underline;
                }
                #hubspot-full-registration .hs-recaptcha {
                  margin: 1.5rem 0;
                }
                #hubspot-full-registration .hs-richtext {
                  font-size: 0.9375rem;
                  line-height: 1.6;
                  color: #022A4A;
                  margin-bottom: 1rem;
                }
                #hubspot-full-registration .hs-richtext p {
                  margin-bottom: 0.75rem;
                }
                #hubspot-full-registration .hs-richtext a {
                  color: #007BFF;
                  text-decoration: underline;
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
    <div className="min-h-screen bg-white text-[#022A4A]">
      <Header onOpenJoinModal={() => setIsJoinModalOpen(true)} />

      <main>
        <section className="relative py-24 px-6 bg-gradient-to-br from-[#022A4A] via-[#022A4A] to-[#007BFF] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255, 255, 255, 0.5) 50px, rgba(255, 255, 255, 0.5) 51px),
                               repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255, 255, 255, 0.5) 50px, rgba(255, 255, 255, 0.5) 51px)`
            }} />
          </div>

          <div className="absolute top-20 right-10 w-64 h-64 border-2 border-white/10" style={{ transform: 'rotate(45deg)' }} />
          <div className="absolute bottom-20 left-10 w-48 h-48 border-2 border-white/10" />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-[#19E3FF] text-xs font-bold tracking-wider mb-6 bg-white/10 px-6 py-3 border border-[#19E3FF]/30">
                <CheckCircle2 className="w-4 h-4" />
                COMPLETE YOUR REGISTRATION
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Complete Your Forum
                <br />
                <span className="text-[#19E3FF]">Travel & Logistics</span>
              </h1>

              <div className="h-1 w-24 bg-[#19E3FF] mx-auto mb-8" />

              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Thank you for registering for the CDAIO National Forum in Austin. To help us coordinate your experience and ensure a seamless event, please complete the following form with your flight and logistics details.
              </p>

              <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-white/90 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#19E3FF]" />
                  <span className="font-semibold">March 22-24, 2026</span>
                </div>
                <div className="hidden md:block w-1 h-1 bg-white/40 rounded-full" />
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#19E3FF]" />
                  <span className="font-semibold">Downright Hotel, Austin, TX</span>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-[#19E3FF]/30 p-8 lg:p-12 shadow-2xl">
              <div className="mb-8 pb-8 border-b-2 border-[#022A4A]/10">
                <h2 className="text-2xl font-bold text-[#022A4A] mb-4 uppercase flex items-center gap-3">
                  <Plane className="w-6 h-6 text-[#007BFF]" />
                  CDAIO Forum Complete Registration and Travel Details
                </h2>
                <p className="text-[#022A4A]/80 leading-relaxed">
                  Please provide your travel arrangements and any special requirements. This information helps us coordinate airport transfers, room assignments, and dietary accommodations.
                </p>
              </div>

              <div id="hubspot-full-registration" />

              <div className="mt-8 pt-8 border-t-2 border-[#022A4A]/10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3 p-4 bg-[#007BFF]/5 border-l-4 border-[#007BFF]">
                    <Building2 className="w-5 h-5 text-[#007BFF] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#022A4A] mb-1">Hotel Information</h3>
                      <p className="text-sm text-[#022A4A]/70">Your room will be reserved at the Downright Hotel with all accommodations included.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[#007BFF]/5 border-l-4 border-[#007BFF]">
                    <Plane className="w-5 h-5 text-[#007BFF] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#022A4A] mb-1">Airport Transfers</h3>
                      <p className="text-sm text-[#022A4A]/70">Transportation to and from Austin-Bergstrom Airport will be coordinated based on your flight details.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </div>
  );
}

declare global {
  interface Window {
    hbspt: any;
  }
}
