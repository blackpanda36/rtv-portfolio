import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PORTAL_BRANDS } from '../data/companyData';

interface BrandShowcaseProps {
  onOpenPartnerModal: () => void;
}

export const BrandShowcase: React.FC<BrandShowcaseProps> = ({ onOpenPartnerModal }) => {
  return (
    <section id="brands" className="py-16 sm:py-20 bg-[#F7F8FA] border-b border-[#E5E8ED]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered EasySellers Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4660E9] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Authorized Network</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4660E9]" />
            <span>{PORTAL_BRANDS.length} Brands</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D2026] font-sans tracking-tight">
            Premier Technology Brand Alliances
          </h2>
          <p className="text-sm sm:text-base text-[#7D8694] mt-2.5 leading-relaxed max-w-2xl mx-auto">
            Direct factory-authorized distribution of leading video surveillance, networking, storage, and access hardware.
          </p>
        </div>

        {/* Authorized Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5">
          {PORTAL_BRANDS.map((b) => (
            <div
              key={b.name}
              className="p-4 bg-white hover:bg-white border border-[#E5E8ED] hover:border-[#4660E9]/40 rounded-xl transition-all duration-200 flex flex-col justify-between group shadow-2xs hover:shadow-es-card"
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xl">{b.emoji}</span>
                <span className="text-[10px] text-[#047857] font-bold uppercase tracking-wider bg-[#f4fbf0] px-2 py-0.5 rounded-full border border-[#047857]/15">
                  Authorized
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#1D2026] group-hover:text-[#4660E9] transition-colors tracking-tight">
                  {b.name}
                </h3>
                <p className="text-[11px] text-[#7D8694] mt-0.5 line-clamp-1">
                  {b.sub}
                </p>
              </div>

              <div className="pt-2.5 mt-2.5 border-t border-[#F0F2F5] text-right">
                <button
                  onClick={onOpenPartnerModal}
                  className="text-[11px] font-semibold text-[#4660E9] hover:underline"
                >
                  Explore Brand →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Center Bottom Pill Action */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenPartnerModal}
            className="btn-es-outline text-xs sm:text-sm py-2 px-6 shadow-2xs"
          >
            <span>Request Brand Authorization Onboarding</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default BrandShowcase;
