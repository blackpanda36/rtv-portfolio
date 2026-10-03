import React, { useState } from 'react';
import {
  Menu,
  X,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenPartnerModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-white border-b border-[#e6e6e6]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-[58px] flex items-center justify-between gap-4">
        
        {/* Left: Official Realtech Vision Logo & Brand Tag */}
        <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-[#242424] hover:bg-neutral-100 rounded focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <a
            href="#top"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Realtech Vision Homepage"
          >
            {/* Authentic Portal Logo */}
            <img
              src="/realtech-logo-v2.png"
              alt="Realtech Vision"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-150 group-hover:scale-[1.02]"
            />
            <span className="hidden sm:inline-block text-[11px] font-mono text-[#616161] uppercase tracking-wider pl-2 border-l border-[#d1d1d1]">
              Dealer Distribution
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-[13px] text-[#13191E]">
            <a
              href="#solutions"
              className="px-3 py-1.5 hover:text-[#FD5C08] hover:underline decoration-1 underline-offset-4 transition-colors font-medium"
            >
              Solutions
            </a>
            <a
              href="#brands"
              className="px-3 py-1.5 hover:text-[#FD5C08] hover:underline decoration-1 underline-offset-4 transition-colors font-medium"
            >
              Authorized Brands
            </a>
            <a
              href="#network"
              className="px-3 py-1.5 hover:text-[#FD5C08] hover:underline decoration-1 underline-offset-4 transition-colors font-medium"
            >
              5 Regional Hubs
            </a>
            <a
              href="#how-to-partner"
              className="px-3 py-1.5 hover:text-[#FD5C08] hover:underline decoration-1 underline-offset-4 transition-colors font-medium"
            >
              How to Partner
            </a>
            <a
              href={COMPANY_INFO.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 hover:text-[#E44F00] hover:underline decoration-1 underline-offset-4 transition-colors font-semibold inline-flex items-center gap-1 text-[#FD5C08]"
            >
              <span>Live B2B Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 border border-emerald-200 font-semibold rounded-[2px] hover:bg-emerald-100 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp Desk</span>
          </a>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#e6e6e6] px-4 py-4 space-y-3">
          <a
            href="#solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#13191E] hover:text-[#FD5C08]"
          >
            Hardware Solutions
          </a>
          <a
            href="#brands"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#13191E] hover:text-[#FD5C08]"
          >
            Authorized OEM Brands
          </a>
          <a
            href="#network"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#13191E] hover:text-[#FD5C08]"
          >
            5 Regional Distribution Hubs
          </a>
          <a
            href="#how-to-partner"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#13191E] hover:text-[#FD5C08]"
          >
            How to Become a Partner
          </a>
          <a
            href={COMPANY_INFO.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-sm font-semibold text-[#FD5C08] hover:underline"
          >
            Open Live Portal (realtechvision.in) →
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
