import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, ExternalLink, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenPartnerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPartnerModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['hero', 'intro', 'about', 'solutions', 'distribution-model', 'brands', 'network', 'why-realtech', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Channel Protocol', href: '#distribution-model' },
    { label: 'Hardware Matrix', href: '#solutions' },
    { label: 'OEM Ecosystem', href: '#brands' },
    { label: 'Infrastructure', href: '#network' },
    { label: 'Disciplines', href: '#why-realtech' },
    { label: 'Channel Desk', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-4 sm:top-6 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none transition-all duration-300 ${
          isScrolled ? 'top-3 sm:top-4' : 'top-4 sm:top-6'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`pointer-events-auto flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 border ${
              isScrolled
                ? 'bg-white/95 backdrop-blur-xl border-slate-200/90 shadow-md'
                : 'bg-white/90 backdrop-blur-md border-slate-200/80 shadow-xs'
            }`}
          >
            {/* Logo & Security Channel Tag */}
            <div className="flex items-center gap-3">
              <a
                href="#hero"
                className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-rtv-orange rounded-full p-1"
                aria-label="Real Tech Vision Homepage"
              >
                <img
                  src="/realtech-logo-v2.png"
                  alt="Real Tech Vision"
                  className="h-8 sm:h-9 w-auto object-contain transition-transform hover:scale-105"
                />
              </a>

              <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-500 font-semibold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>SEC-VERIFIED // WHOLESALE</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-150 ${
                      isActive
                        ? 'text-slate-950 bg-slate-100 font-semibold shadow-2xs'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Dealer Portal Link */}
              <a
                href={COMPANY_INFO.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100/80 hover:bg-slate-200/70 rounded-full transition-colors font-mono"
                title="Access Existing Dealer Order Portal"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-rtv-orange" />
                <span>Portal Login</span>
              </a>

              {/* Pill CTA with Diagonal Arrow */}
              <button
                onClick={onOpenPartnerModal}
                className="group inline-flex items-center gap-1.5 px-4.5 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-950 hover:bg-rtv-orange rounded-full shadow-xs hover:shadow-sm transition-all duration-200"
              >
                <span>Channel Onboarding</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-full focus:outline-none"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 sm:p-10 animate-fadeIn">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <img src="/realtech-logo-v2.png" alt="Real Tech Vision" className="h-8 w-auto object-contain" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Large Typography Navigation Links */}
          <nav className="flex flex-col space-y-4 py-8 overflow-y-auto">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-2xl sm:text-3xl font-extrabold text-slate-900 hover:text-rtv-orange font-heading tracking-tight transition-colors py-1 group"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-slate-400 group-hover:text-rtv-orange">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-slate-100 space-y-3">
            <a
              href={COMPANY_INFO.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800"
            >
              <span>Existing Dealer Order Portal</span>
              <ExternalLink className="w-4 h-4 text-rtv-orange" />
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPartnerModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold text-sm text-white bg-rtv-orange shadow-md"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
              <Phone className="w-3.5 h-3.5 text-rtv-orange" />
              <span>National Support Desk: {COMPANY_INFO.phone}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
