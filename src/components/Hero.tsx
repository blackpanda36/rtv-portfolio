import React from 'react';
import { ArrowUpRight, ShieldCheck, Cpu, CheckCircle2 } from 'lucide-react';
import { BRANDS } from '../data/companyData';

interface HeroProps {
  onOpenPartnerModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPartnerModal }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between pt-36 sm:pt-42 pb-12 bg-white overflow-hidden">
      {/* Subtle Technical Engineering Grid */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-60" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="max-w-5xl">
          {/* Security Telemetry Status Bar */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-medium text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>SYS-NODE // RTV-SEC-2026</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-[11px] font-mono font-bold text-rtv-orange uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Pure Channel Security Distribution</span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-500">
              <span>EST. 2008 • CHENNAI HO</span>
            </div>
          </div>

          {/* Advanced & Modest Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-950 font-heading leading-[1.0] mb-8">
            National Infrastructure for Physical Security & Network Systems.
          </h1>

          {/* Supporting Statement & Engineering Telemetry */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <p className="md:col-span-8 text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed">
              Facilitating authorized factory distribution of enterprise video surveillance, high-definition optical sensors, mission-critical storage, and edge networking hardware to over 4,000 verified channel partners across India.
            </p>

            {/* Quick Channel Integrity Covenants */}
            <div className="md:col-span-4 flex flex-col space-y-2 text-xs font-mono text-slate-600 border-l border-slate-200 pl-4 py-1">
              <div className="flex items-center gap-2">
                <span className="text-rtv-orange">01 //</span>
                <span className="font-semibold text-slate-900">Zero Direct End-User Retail</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-rtv-orange">02 //</span>
                <span>Serialized Factory Traceability</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-rtv-orange">03 //</span>
                <span>Direct In-House RMA Protocol</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-rtv-orange">04 //</span>
                <span>5 Strategic Regional Buffer Depots</span>
              </div>
            </div>
          </div>

          {/* Action Triggers */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenPartnerModal}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-xs sm:text-sm text-white bg-slate-950 hover:bg-rtv-orange shadow-xs hover:shadow-md transition-all duration-200"
            >
              <span>Register as Channel Partner</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href="#solutions"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-xs sm:text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-400 transition-all duration-200 shadow-2xs"
            >
              <Cpu className="w-4 h-4 text-rtv-orange" />
              <span>Review Hardware Matrix</span>
            </a>
          </div>
        </div>
      </div>

      {/* Continuous Brand Marquee Ticker */}
      <div className="relative z-10 w-full pt-14 border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            Authorized Security & Technology Manufacturers
          </span>
          <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold">
            Certified Serial Traceability
          </span>
        </div>

        <div className="w-full overflow-hidden flex whitespace-nowrap py-3 bg-slate-50/60 border-y border-slate-100">
          <div className="animate-marquee flex items-center gap-12 sm:gap-16">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="inline-flex items-center gap-3 text-slate-800 font-heading font-black text-base sm:text-lg tracking-tight opacity-75 hover:opacity-100 transition-opacity cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rtv-orange" />
                <span>{brand.name}</span>
                <span className="text-[10px] font-mono font-medium text-slate-400 uppercase tracking-wider">
                  [{brand.category}]
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
