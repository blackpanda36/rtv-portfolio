import React from 'react';
import { ExternalLink, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onOpenPartnerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPartnerModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand & Corporate Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-block">
              <img
                src="/realtech-logo-v2.png"
                alt="Realtech Vision Logo"
                className="h-9 object-contain"
              />
            </a>

            <p className="text-slate-600 leading-relaxed max-w-sm">
              Realtech Vision is an established India-based B2B technology distribution company specializing in CCTV surveillance, networking infrastructure, IT storage, and electronic security products.
            </p>

            <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
              <span className="px-2.5 py-1 rounded bg-white border border-slate-200 text-rtv-orange font-semibold">
                15+ Years Excellence
              </span>
              <span className="px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700">
                4,000+ Dealers
              </span>
              <span className="px-2.5 py-1 rounded bg-white border border-slate-200 text-emerald-700 font-medium">
                100% Pure Channel
              </span>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-slate-500 block">
                Central Operations Hub:
              </span>
              <span className="text-slate-800 font-medium">
                {COMPANY_INFO.headOffice}
              </span>
            </div>
          </div>

          {/* Corporate Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 block">
              Company
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-rtv-orange transition-colors">
                  About Realtech
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-rtv-orange transition-colors">
                  Product Solutions
                </a>
              </li>
              <li>
                <a href="#distribution-model" className="hover:text-rtv-orange transition-colors">
                  Pure Distribution
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-rtv-orange transition-colors">
                  Brand Ecosystem
                </a>
              </li>
              <li>
                <a href="#why-realtech" className="hover:text-rtv-orange transition-colors">
                  Why Realtech
                </a>
              </li>
              <li>
                <a href="#network" className="hover:text-rtv-orange transition-colors">
                  PAN-India Network
                </a>
              </li>
            </ul>
          </div>

          {/* Channel & Dealers (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 block">
              Dealers & Channel
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenPartnerModal}
                  className="text-left text-rtv-orange hover:underline font-semibold"
                >
                  Become a Dealer Partner
                </button>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-950"
                >
                  <span>Dealer Order Platform</span>
                  <ExternalLink className="w-3.5 h-3.5 text-rtv-orange" />
                </a>
              </li>
              <li>
                <a href="#why-realtech" className="hover:text-rtv-orange transition-colors">
                  In-House RMA Support
                </a>
              </li>
              <li>
                <a href="#why-realtech" className="hover:text-rtv-orange transition-colors">
                  Technical Engineering Desk
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-rtv-orange transition-colors">
                  State-Wise Stock Inquiries
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Dealer WhatsApp Helpdesk</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Regional Hubs & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 block">
              Branch Network
            </span>
            <div className="space-y-1.5 text-slate-700 text-[11px]">
              <div><strong>Chennai:</strong> Head Office (Ritchie Street)</div>
              <div><strong>Delhi:</strong> North Regional Branch</div>
              <div><strong>Hyderabad:</strong> Central Southern Depot</div>
              <div><strong>Bangalore:</strong> Tech Corridor Center</div>
              <div><strong>Surat:</strong> Western Regional Depot</div>
            </div>

            <div className="pt-3 border-t border-slate-200 space-y-1 text-slate-600">
              <div>Phone: <strong className="text-slate-900 font-mono">{COMPANY_INFO.phone}</strong></div>
              <div>Email: <strong className="text-slate-900 font-mono">{COMPANY_INFO.email}</strong></div>
              <div>Hours: <span className="text-slate-500">{COMPANY_INFO.hours}</span></div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © 2026 Realtech Vision. All rights reserved. • India's B2B Security & Technology Distribution Network.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-600">100% Pure Distribution Channel Guarantee</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
