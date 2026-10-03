import React from 'react';
import {
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenPartnerModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPartnerModal }) => {
  return (
    <section className="bg-white border-b border-[#e6e6e6] py-14 sm:py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-6xl mx-auto">
          {/* Centered Hero Header */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Minimalist Bold Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#13191E] font-sans leading-[1.15] mb-4">
              Direct OEM Hardware Supply for India's Security Dealers & Integrators.
            </h1>

            {/* Concise Subtitle */}
            <p className="text-base sm:text-lg text-[#5A6573] leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
              Realtech Vision connects certified CCTV optics, NVR decoders, enterprise PoE switches, and surveillance HDDs with 4,000+ verified channel partners nationwide.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              <a
                href={COMPANY_INFO.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-btn-primary group"
              >
                <span>Access B2B Order Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenPartnerModal}
                className="bg-transparent hover:bg-[#FFF3EC] text-[#13191E] hover:text-[#FD5C08] border border-[#d1d5db] hover:border-[#FD5C08] font-semibold text-[13px] px-4 py-2 rounded-[2px] transition-colors"
              >
                Request Dealer Onboarding
              </button>

              <a
                href="#solutions"
                className="text-[13px] font-semibold text-[#FD5C08] hover:text-[#CA4400] hover:underline px-2 py-2 inline-flex items-center gap-1"
              >
                <span>Explore Hardware Lines</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Value Propositions Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 pt-8 border-t border-[#e6e6e6] text-center">
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-1.5 leading-none">🏢</div>
              <span className="text-sm sm:text-base font-bold text-[#13191E] block font-sans">
                100% Distribution
              </span>
              <span className="text-xs text-[#5A6573] block mt-0.5">
                Pure distribution business
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-2xl mb-1.5 leading-none">💰</div>
              <span className="text-sm sm:text-base font-bold text-[#13191E] block font-sans">
                High Margins
              </span>
              <span className="text-xs text-[#5A6573] block mt-0.5">
                Exclusive brand portfolio
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-2xl mb-1.5 leading-none">🛠️</div>
              <span className="text-sm sm:text-base font-bold text-[#13191E] block font-sans">
                Technical Support
              </span>
              <span className="text-xs text-[#5A6573] block mt-0.5">
                Dedicated in-house team
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-2xl mb-1.5 leading-none">🚀</div>
              <span className="text-sm sm:text-base font-bold text-[#13191E] block font-sans">
                Dealer Growth
              </span>
              <span className="text-xs text-[#5A6573] block mt-0.5">
                Committed to your success
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-2xl mb-1.5 leading-none">🏆</div>
              <span className="text-sm sm:text-base font-bold text-[#13191E] block font-sans">
                15+ Years
              </span>
              <span className="text-xs text-[#5A6573] block mt-0.5">
                Distribution excellence
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-2xl mb-1.5 leading-none">🤝</div>
              <span className="text-sm sm:text-base font-bold text-[#13191E] block font-sans">
                4,000+ Dealers
              </span>
              <span className="text-xs text-[#5A6573] block mt-0.5">
                Trusted nationwide
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
