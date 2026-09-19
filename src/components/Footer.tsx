import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onOpenPartnerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPartnerModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200/80 text-slate-600 text-xs pt-20 pb-12 relative">
      {/* Precision corner crosshairs */}
      <div className="absolute top-6 left-6 font-mono text-xs text-slate-300 select-none pointer-events-none">+</div>
      <div className="absolute top-6 right-6 font-mono text-xs text-slate-300 select-none pointer-events-none">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Closing Corporate Typography Statement */}
        <div className="pb-16 mb-16 border-b border-slate-100 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 block mb-3">
              NATIONAL PHYSICAL SECURITY DISTRIBUTION // RITCHIE STREET CHENNAI HO
            </span>
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 font-heading tracking-tight leading-[1.08] max-w-3xl">
              Connecting Technology. Securing Commercial Corridors.
            </h3>
          </div>

          <button
            onClick={onOpenPartnerModal}
            className="group flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-slate-950 hover:bg-rtv-orange shadow-xs hover:shadow-md transition-all duration-200"
          >
            <span>Initiate Partner Verification</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Corporate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-100">
          {/* Brand & Corporate Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-block">
              <img
                src="/realtech-logo-v2.png"
                alt="Real Tech Vision"
                className="h-9 object-contain"
              />
            </a>

            <p className="text-slate-600 leading-relaxed max-w-sm text-xs sm:text-sm font-normal">
              Real Tech Vision is an established India-based B2B technology distribution company specializing in CCTV surveillance, networking infrastructure, IT storage, and electronic security products.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 font-mono text-[11px]">
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-rtv-orange font-semibold">
                15+ Years Excellence
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
                4,000+ Dealers
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-emerald-700 font-medium">
                100% Pure Channel
              </span>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-slate-400 font-mono block">
                Central Operations Hub:
              </span>
              <span className="text-slate-800 font-medium">
                {COMPANY_INFO.headOffice}
              </span>
            </div>
          </div>

          {/* Corporate Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 block">
              Company
            </span>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="hover:text-rtv-orange transition-colors">
                  About Real Tech
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
                  Why Real Tech
                </a>
              </li>
              <li>
                <a href="#network" className="hover:text-rtv-orange transition-colors">
                  Pan-India Network
                </a>
              </li>
            </ul>
          </div>

          {/* Channel & Dealers (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 block">
              Dealers & Channel
            </span>
            <ul className="space-y-2.5">
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
                  <ArrowUpRight className="w-3.5 h-3.5 text-rtv-orange" />
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
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 block">
              Branch Network
            </span>
            <div className="space-y-1.5 text-slate-700 text-[11px]">
              <div><strong>Chennai:</strong> Head Office (Ritchie Street)</div>
              <div><strong>Delhi:</strong> North Regional Branch</div>
              <div><strong>Hyderabad:</strong> Central Southern Depot</div>
              <div><strong>Bangalore:</strong> Tech Corridor Center</div>
              <div><strong>Surat:</strong> Western Regional Depot</div>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-1 text-slate-600">
              <div>Phone: <strong className="text-slate-950 font-mono">{COMPANY_INFO.phone}</strong></div>
              <div>Email: <strong className="text-slate-950 font-mono">{COMPANY_INFO.email}</strong></div>
              <div>Hours: <span className="text-slate-500">{COMPANY_INFO.hours}</span></div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 font-mono text-[11px]">
          <div>
            © 2026 Real Tech Vision. All rights reserved. • India's B2B Security & Technology Distribution Network.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-500">100% Pure Channel Guarantee</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-950 transition-colors"
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
