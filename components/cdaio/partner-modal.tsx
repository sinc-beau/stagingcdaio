'use client';

import React, { useEffect, useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PartnerModal({ isOpen, onClose }: PartnerModalProps) {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isOpen && !showSuccess) {
      const script1 = document.createElement('script');
      script1.src = '//js.hsforms.net/forms/embed/v2.js';
      script1.async = true;
      script1.charset = 'utf-8';
      document.body.appendChild(script1);

      script1.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: '45377644',
            formId: '6cb7d2e0-b47c-4ab6-bae2-df44b86b065a',
            target: '#hubspot-partner-form',
            region: 'na1',
            onFormSubmitted: function() {
              setShowSuccess(true);
              setTimeout(() => {
                setShowSuccess(false);
                onClose();
              }, 3000);
            },
            onFormReady: function() {
              const formContainer = document.querySelector('#hubspot-partner-form');
              if (formContainer) {
                const style = document.createElement('style');
                style.textContent = `
                  #hubspot-partner-form .hs-form {
                    font-family: 'Inter', sans-serif;
                  }
                  #hubspot-partner-form .hs-form-field label {
                    color: #022A4A;
                    font-weight: 600;
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 0.5rem;
                  }
                  #hubspot-partner-form .hs-input {
                    border: 2px solid #022A4A20;
                    border-radius: 0;
                    padding: 0.75rem 1rem;
                    font-size: 1rem;
                    transition: all 0.2s;
                    width: 100%;
                  }
                  #hubspot-partner-form .hs-input:focus {
                    outline: none;
                    border-color: #007BFF;
                    box-shadow: 0 0 0 3px #007BFF20;
                  }
                  #hubspot-partner-form .hs-button {
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
                  }
                  #hubspot-partner-form .hs-button:hover {
                    background-color: #007BFF;
                    border-color: #007BFF;
                  }
                  #hubspot-partner-form .hs-error-msgs {
                    color: #dc2626;
                    font-size: 0.875rem;
                    margin-top: 0.25rem;
                  }
                  #hubspot-partner-form .hs-form-field {
                    margin-bottom: 1.5rem;
                  }
                  #hubspot-partner-form .hs-form-booleancheckbox {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                  }
                  #hubspot-partner-form .hs-form-booleancheckbox input[type="checkbox"] {
                    width: 1.25rem;
                    height: 1.25rem;
                    min-width: 1.25rem;
                    border: 2px solid #022A4A;
                    border-radius: 0;
                    cursor: pointer;
                    margin-top: 0.125rem;
                  }
                  #hubspot-partner-form .hs-form-booleancheckbox input[type="checkbox"]:checked {
                    background-color: #007BFF;
                    border-color: #007BFF;
                  }
                  #hubspot-partner-form .hs-form-booleancheckbox label {
                    text-transform: none;
                    font-weight: 400;
                    font-size: 0.875rem;
                    line-height: 1.5;
                    color: #022A4A;
                  }
                  #hubspot-partner-form .inputs-list {
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
    }
  }, [isOpen, showSuccess, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#022A4A] text-white p-6 border-b-4 border-[#007BFF] z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="text-3xl font-bold mb-2">Partnership Inquiry</h2>
          <div className="h-1 w-24 bg-[#007BFF] mb-3" />
          <p className="text-white/90">
            Let's explore how we can create value together
          </p>
        </div>

        <div className="p-8">
          {showSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-[#007BFF]/10 border-2 border-[#007BFF] flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#007BFF]" />
              </div>
              <h3 className="text-2xl font-bold text-[#022A4A] mb-4">
                Inquiry Submitted!
              </h3>
              <p className="text-[#022A4A]/70">
                Thank you for your interest. We'll review your inquiry and be in touch soon.
              </p>
            </div>
          ) : (
            <div id="hubspot-partner-form" />
          )}
        </div>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    hbspt: any;
  }
}
