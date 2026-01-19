'use client';

import React, { useEffect } from 'react';
import { X, Calendar, MapPin } from 'lucide-react';

interface DataForumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DataForumModal({ isOpen, onClose }: DataForumModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

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
            target: '#hubspot-data-forum-form',
            region: 'na1',
            onFormReady: function() {
              const formContainer = document.querySelector('#hubspot-data-forum-form');
              if (formContainer) {
                const style = document.createElement('style');
                style.textContent = `
                  #hubspot-data-forum-form .hs-form {
                    font-family: 'Inter', sans-serif;
                  }
                  #hubspot-data-forum-form .hs-form-field label {
                    color: #022A4A;
                    font-weight: 600;
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 0.5rem;
                  }
                  #hubspot-data-forum-form .hs-input {
                    border: 2px solid #022A4A20;
                    border-radius: 0;
                    padding: 0.75rem 1rem;
                    font-size: 1rem;
                    transition: all 0.2s;
                    width: 100%;
                    background: #FFFFFF;
                    color: #022A4A;
                  }
                  #hubspot-data-forum-form .hs-input:focus {
                    outline: none;
                    border-color: #007BFF;
                    box-shadow: 0 0 0 3px #007BFF20;
                  }
                  #hubspot-data-forum-form .hs-button {
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
                  #hubspot-data-forum-form .hs-button:hover {
                    background-color: #007BFF;
                    border-color: #007BFF;
                  }
                  #hubspot-data-forum-form .hs-error-msgs {
                    color: #dc2626;
                    font-size: 0.875rem;
                    margin-top: 0.25rem;
                  }
                  #hubspot-data-forum-form .hs-form-field {
                    margin-bottom: 1.5rem;
                  }
                  #hubspot-data-forum-form .hs-input::placeholder {
                    color: #022A4A60;
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
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#022A4A]/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#022A4A] text-white p-6 md:p-8 z-10">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-[#19E3FF] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="pr-12">
            <div className="inline-flex items-center gap-2 text-[#19E3FF] text-xs font-bold tracking-wider mb-4 bg-white/10 px-4 py-2 border border-[#19E3FF]/30">
              <Calendar className="w-4 h-4" />
              CDAIO FORUM
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Register for Data Forum
            </h2>

            <div className="h-1 w-20 bg-[#007BFF] mb-6" />

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#19E3FF]" />
                <span className="font-semibold">March 22-24, 2026</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#19E3FF]" />
                <span>Down Right Hotel, Austin, TX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b-4 border-[#007BFF]" />

        <div className="p-6 md:p-8">
          <div className="mb-8">
            <p className="text-[#022A4A]/80 leading-relaxed">
              Join data and AI leaders for three days of strategic discussions, peer collaboration,
              and real-world insights on building intelligent enterprises. This forum brings together
              Chief Data Officers, AI executives, and emerging leaders to shape the future of data-driven business.
            </p>
          </div>

          <div id="hubspot-data-forum-form" className="hubspot-form-container" />
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
