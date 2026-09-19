import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Phone, ExternalLink } from 'lucide-react';
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
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ['hero', 'about', 'solutions', 'distribution-model', 'brands', 'why-realtech', 'network', 'contact'];
      const scrollPosition = window.scrollY + 200;

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Pure Distribution', href: '#distribution-model' },
    { label: 'Brands', href: '#brands' },
    { label: 'Why Realtech', href: '#why-realtech' },
    { label: 'Network', href: '#network' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-xs border-b border-slate-200'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Light Logo */}
          <a
            href="#hero"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-rtv-orange rounded-md"
            aria-label="Realtech Vision Home"
          >
            <img
              src="/realtech-logo-v2.png"
              alt="Realtech Vision - Vision For World"
              className={`transition-all duration-300 object-contain ${
                isScrolled ? 'h-8 sm:h-9' : 'h-9 sm:h-10'
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs lg:text-sm rounded-lg transition-colors ${
                    isActive
                      ? 'text-rtv-orange bg-orange-50 font-semibold'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70 font-medium'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dealer Portal Link */}
            <a
              href={COMPANY_INFO.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
              title="Access Existing Dealer Order Portal"
            >
              <span>Dealer Portal</span>
              <ExternalLink className="w-3.5 h-3.5 text-rtv-orange" />
            </a>

            {/* Primary CTA */}
            <button
              onClick={onOpenPartnerModal}
              className="inline-flex items-center gap-2 px-4.5 py-2 text-xs sm:text-sm font-semibold text-white bg-rtv-orange hover:bg-rtv-orange-700 rounded-lg shadow-sm transition-all"
            >
              <Shield className="w-4 h-4" />
              <span>Partner With Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenPartnerModal}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-rtv-orange hover:bg-rtv-orange-700 rounded-md"
            >
              Partner
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-rtv-orange"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-orange-50 text-rtv-orange font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 font-medium'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href={COMPANY_INFO.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3.5 py-2.5 text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-lg font-medium"
              >
                <span>Existing Dealer Order Portal</span>
                <ExternalLink className="w-4 h-4 text-rtv-orange" />
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPartnerModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-rtv-orange rounded-lg shadow-sm"
              >
                <Shield className="w-4 h-4" />
                <span>Partner With Us</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                <Phone className="w-3.5 h-3.5 text-rtv-orange" />
                <span>National Desk: {COMPANY_INFO.phone}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
