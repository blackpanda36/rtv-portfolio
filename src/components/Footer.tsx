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
    <footer className="bg-[#212B38] text-[#8D9BAE] text-xs border-t border-[#2E3C4E]">
      {/* 4-Column Minimal Footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Realtech Vision Brand & Official Contacts */}
          <div className="space-y-4">
            <a href="#top" className="inline-block">
              <div className="bg-white px-3.5 py-2 rounded-xl shadow-sm inline-flex items-center">
                <img
                  src="/realtech-logo-v2.png"
                  alt="Realtech Vision"
                  className="h-7 w-auto object-contain"
                />
              </div>
            </a>
            <p className="text-xs text-[#8D9BAE] leading-relaxed">
              India's leading B2B physical security & IT hardware distributor. Pure wholesale covenant protecting 4,000+ verified channel dealers.
            </p>
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#4660E9] flex-shrink-0 mt-0.5" />
                <span className="text-[#A0ABB9]">{COMPANY_INFO.headOffice}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#4660E9] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-semibold text-white hover:text-[#4660E9] transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#4660E9] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#A0ABB9] hover:text-[#4660E9] transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Hardware Categories */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 tracking-wide">
              Hardware Lines
            </h4>
            <ul className="space-y-2.5 text-xs">
              {PORTAL_CATEGORIES.map((c) => (
                <li key={c.name}>
                  <a href="#solutions" className="text-[#8D9BAE] hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-sm">{c.emoji}</span>
                    <span>{c.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Regional Hubs */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 tracking-wide">
              Regional Super-Hubs
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#network" className="text-[#8D9BAE] hover:text-white transition-colors block">Chennai Central Super-HQ (Ritchie St)</a></li>
              <li><a href="#network" className="text-[#8D9BAE] hover:text-white transition-colors block">Delhi NCR Regional Hub</a></li>
              <li><a href="#network" className="text-[#8D9BAE] hover:text-white transition-colors block">Hyderabad Central Branch</a></li>
              <li><a href="#network" className="text-[#8D9BAE] hover:text-white transition-colors block">Bangalore Tech Hub</a></li>
              <li><a href="#network" className="text-[#8D9BAE] hover:text-white transition-colors block">Surat Western Hub</a></li>
            </ul>
          </div>

          {/* Col 4: Channel & B2B Portal */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 tracking-wide">
              Dealer Support & Portal
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={COMPANY_INFO.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#6880FF] hover:text-white transition-colors"
                >
                  <span>Live Dealer Portal (realtechvision.in)</span>
                  <span>→</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold hover:bg-emerald-500/20 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Channel Desk</span>
                </a>
              </li>
              <li>
                <a
                  href="#how-to-partner"
                  className="text-[#8D9BAE] hover:text-white transition-colors block"
                >
                  How to Partner & Purchase Guide
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPartnerModal}
                  className="text-[#8D9BAE] hover:text-white transition-colors text-left"
                >
                  Authorized Dealer Onboarding
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPartnerModal}
                  className="text-[#8D9BAE] hover:text-white transition-colors text-left"
                >
                  100% Pure Distribution Policy
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Utility Strip */}
      <div className="bg-[#1B222D] border-t border-[#283444] py-4 text-[11px] text-[#718096]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#4660E9]" />
            <span className="font-medium text-[#A0ABB9]">English (India)</span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <button
              onClick={scrollToTop}
              className="text-[#A0ABB9] hover:text-white font-medium flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#212B38] border border-[#2E3C4E] hover:border-[#4660E9] transition-all focus:outline-none"
            >
              <ArrowUp className="w-3 h-3 text-[#4660E9]" />
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
