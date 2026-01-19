'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenJoinModal: () => void;
}

export default function Header({ onOpenJoinModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Council', href: '/#council' },
    { label: 'Forum March 22-24', href: '/cdaio-forum-austin-march-2026' },
    { label: 'Ecosystem', href: '/#ecosystem' },
    { label: 'Calendar', href: '/#calendar' },
    { label: 'Partners', href: '/#partners' },
  ];

  const handleJoinClick = () => {
    setIsMobileMenuOpen(false);
    onOpenJoinModal();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-white transition-all duration-300 ${
        isScrolled
          ? 'shadow-lg border-b border-[#022A4A]/10'
          : 'border-b border-[#022A4A]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-[#022A4A]' : 'text-[#022A4A]'
            }`}>
              CDAIO
            </span>
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-[#007BFF]' : 'text-[#007BFF]'
            }`}>
              //
            </span>
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-[#022A4A]' : 'text-[#022A4A]'
            }`}>
              DIVISION
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold text-sm uppercase tracking-wider transition-colors ${
                  isScrolled
                    ? 'text-[#022A4A] hover:text-[#007BFF]'
                    : 'text-[#022A4A] hover:text-[#007BFF]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenJoinModal}
              className="px-6 py-2 bg-[#022A4A] text-white font-bold text-sm hover:bg-[#007BFF] transition-all duration-300 uppercase tracking-wider border-2 border-[#022A4A] hover:border-[#007BFF]"
            >
              Join Now
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#022A4A]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-4 border-t border-[#022A4A]/10 pt-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-[#022A4A] hover:text-[#007BFF] font-semibold text-sm uppercase tracking-wider transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={handleJoinClick}
              className="block w-full text-center px-6 py-3 bg-[#022A4A] text-white font-bold text-sm hover:bg-[#007BFF] transition-all duration-300 uppercase tracking-wider border-2 border-[#022A4A] hover:border-[#007BFF]"
            >
              Join Now
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
