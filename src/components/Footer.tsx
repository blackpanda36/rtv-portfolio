import React from 'react';
import {
  Globe,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO, PORTAL_CATEGORIES } from '../data/companyData';

interface FooterProps {
  onOpenPartnerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPartnerModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b192c] text-slate-300 text-xs border-t border-[#16273e]">
      {/* 4-Column Minimal Footer */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Realtech Vision Brand & Official Contacts */}
          <div className="space-y-3">
            <a href="#top" className="inline-block">
              <div className="bg-white px-3 py-1.5 rounded-[3px] shadow-xs inline-flex items-center">
                <img
                  src="/realtech-logo-v2.png"
                  alt="Realtech Vision"
                  className="h-7 w-auto object-contain"
                />
              </div>
            </a>
            <p className="text-xs text-slate-300/85 leading-relaxed">
              India's leading B2B physical security & IT hardware distributor. Pure wholesale covenant protecting 4,000+ verified channel dealers.
            </p>
            <div className="space-y-1.5 pt-1 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FD5C08] flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">{COMPANY_INFO.headOffice}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FD5C08] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-semibold text-[#FD5C08] hover:text-[#ff782e] hover:underline">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FD5C08] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#FD5C08] hover:text-[#ff782e] hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Hardware Categories */}
          <div>
            <h4 className="font-semibold text-white text-[13px] mb-3 tracking-wide">
              Hardware Lines
            </h4>
            <ul className="space-y-2 text-xs">
              {PORTAL_CATEGORIES.map((c) => (
                <li key={c.name}>
                  <a href="#solutions" className="text-slate-300 hover:text-white hover:underline transition-colors">
                    {c.emoji} {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Regional Hubs */}
          <div>
            <h4 className="font-semibold text-white text-[13px] mb-3 tracking-wide">
              Regional Super-Hubs
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#network" className="text-slate-300 hover:text-white hover:underline transition-colors">Chennai Central Super-HQ (Ritchie St)</a></li>
              <li><a href="#network" className="text-slate-300 hover:text-white hover:underline transition-colors">Delhi NCR Regional Hub</a></li>
              <li><a href="#network" className="text-slate-300 hover:text-white hover:underline transition-colors">Hyderabad Central Branch</a></li>
              <li><a href="#network" className="text-slate-300 hover:text-white hover:underline transition-colors">Bangalore Tech Hub</a></li>
              <li><a href="#network" className="text-slate-300 hover:text-white hover:underline transition-colors">Surat Western Hub</a></li>
            </ul>
          </div>

          {/* Col 4: Channel & B2B Portal */}
          <div>
            <h4 className="font-semibold text-white text-[13px] mb-3 tracking-wide">
              Dealer Support & Portal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={COMPANY_INFO.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#FD5C08] hover:text-[#ff782e] hover:underline"
                >
                  Live Dealer Portal (realtechvision.in) →
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-semibold hover:underline flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Channel Desk</span>
                </a>
              </li>
              <li>
                <a
                  href="#how-to-partner"
                  className="text-slate-300 hover:text-white hover:underline text-left transition-colors block"
                >
                  How to Partner & Purchase Guide
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPartnerModal}
                  className="text-slate-300 hover:text-white hover:underline text-left transition-colors"
                >
                  Authorized Dealer Onboarding
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPartnerModal}
                  className="text-slate-300 hover:text-white hover:underline text-left transition-colors"
                >
                  100% Pure Distribution Policy
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Utility Strip */}
      <div className="bg-[#07111e] border-t border-[#16273e] py-3.5 text-[11px] text-slate-400">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#FD5C08]" />
            <span className="font-medium text-slate-200">English (India)</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToTop}
              className="text-slate-300 hover:text-white font-semibold flex items-center gap-1 focus:outline-none transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to top</span>
            </button>
            <span>© Realtech Vision 2026. All rights reserved.</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
