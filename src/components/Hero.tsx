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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1445] via-[#1a237e] to-[#0a0f35] text-white py-16 sm:py-24 border-b border-[#E5E8ED]">
      {/* Subtle background mesh pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#4660e9_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4660E9]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Centered EasySellers-Style Banner Text */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/20 mb-6 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>India's Verified B2B Hardware Network</span>
            </div>

            {/* Bold Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-[1.18] mb-5">
              Direct OEM Hardware Supply for Security Dealers & Integrators
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-9 font-normal">
              Connecting certified CCTV optics, NVR decoders, enterprise PoE switches, and surveillance HDDs with 4,000+ verified channel partners across India.
            </p>

            {/* Centered Pill Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
              <a
                href={COMPANY_INFO.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-es-white text-sm sm:text-base py-3 px-7 shadow-lg group"
              >
                <span>Access B2B Order Portal</span>
                <ExternalLink className="w-4 h-4 text-[#4660E9] transition-transform group-hover:translate-x-0.5" />
              </a>

              <button
                onClick={onOpenPartnerModal}
                className="rounded-full border border-white/40 hover:border-white text-white hover:bg-white/10 text-sm sm:text-base font-medium py-3 px-6 transition-all"
              >
                Request Dealer Onboarding
              </button>

              <a
                href="#solutions"
                className="text-sm font-medium text-white/80 hover:text-white hover:underline px-3 py-3 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Explore Hardware Lines</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Minimal Translucent Value Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4 text-center">
            <div className="bg-white/5 hover:bg-white/10 backdrop-blur-xs border border-white/10 rounded-xl p-3.5 transition-all">
              <div className="text-2xl mb-1">🏢</div>
              <span className="text-sm font-bold text-white block">100% Distribution</span>
              <span className="text-[11px] text-white/60 block mt-0.5">Pure wholesale model</span>
            </div>

            <div className="bg-white/5 hover:bg-white/10 backdrop-blur-xs border border-white/10 rounded-xl p-3.5 transition-all">
              <div className="text-2xl mb-1">💰</div>
              <span className="text-sm font-bold text-white block">High Margins</span>
              <span className="text-[11px] text-white/60 block mt-0.5">Protected dealer tiers</span>
            </div>

            <div className="bg-white/5 hover:bg-white/10 backdrop-blur-xs border border-white/10 rounded-xl p-3.5 transition-all">
              <div className="text-2xl mb-1">🛠️</div>
              <span className="text-sm font-bold text-white block">In-House RMA</span>
              <span className="text-[11px] text-white/60 block mt-0.5">48h warranty turnaround</span>
            </div>

            <div className="bg-white/5 hover:bg-white/10 backdrop-blur-xs border border-white/10 rounded-xl p-3.5 transition-all">
              <div className="text-2xl mb-1">🚀</div>
              <span className="text-sm font-bold text-white block">24-48h Transit</span>
              <span className="text-[11px] text-white/60 block mt-0.5">5 regional super-hubs</span>
            </div>

            <div className="bg-white/5 hover:bg-white/10 backdrop-blur-xs border border-white/10 rounded-xl p-3.5 transition-all">
              <div className="text-2xl mb-1">🏆</div>
              <span className="text-sm font-bold text-white block">15+ Years</span>
              <span className="text-[11px] text-white/60 block mt-0.5">Supply chain mastery</span>
            </div>

            <div className="bg-white/5 hover:bg-white/10 backdrop-blur-xs border border-white/10 rounded-xl p-3.5 transition-all">
              <div className="text-2xl mb-1">🤝</div>
              <span className="text-sm font-bold text-white block">4,000+ Dealers</span>
              <span className="text-[11px] text-white/60 block mt-0.5">Trusted nationwide</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
