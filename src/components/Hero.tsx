import React from 'react';
import { ArrowRight, Layers, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenPartnerModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPartnerModal }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Minimalist Trust Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 mb-8">
          <span className="w-2 h-2 rounded-full bg-rtv-orange" />
          <span className="text-xs font-semibold uppercase tracking-wider text-rtv-orange">
            15+ Years Distribution Excellence • PAN-India Network
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 font-heading leading-[1.1] mb-6">
          Powering India's{' '}
          <span className="text-rtv-orange">Security & Technology</span>{' '}
          Distribution Network
        </h1>

        {/* Supporting Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          Realtech Vision connects trusted security, surveillance, networking and IT hardware brands with dealers and businesses across India.
        </p>

        {/* Minimalist Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenPartnerModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-rtv-orange hover:bg-rtv-orange-700 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <span>Partner With Realtech</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-all duration-200"
          >
            <Layers className="w-4 h-4 text-rtv-orange" />
            <span>Explore Our Solutions</span>
          </a>
        </div>

        {/* Minimalist Trust Features Row */}
        <div className="pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="flex items-center gap-2.5 p-3 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-rtv-orange flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-700">100% Pure Distribution</span>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-lg">
            <ShieldCheck className="w-4 h-4 text-rtv-orange flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-700">Brand-Warranty Backed</span>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-rtv-orange flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-700">In-House Technical & RMA</span>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-lg">
            <MapPin className="w-4 h-4 text-rtv-orange flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-700">5 Regional Branch Hubs</span>
          </div>
        </div>
      </div>
    </section>
  );
};
