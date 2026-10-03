import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PORTAL_BRANDS } from '../data/companyData';

interface BrandShowcaseProps {
  onOpenPartnerModal: () => void;
}

export const BrandShowcase: React.FC<BrandShowcaseProps> = ({ onOpenPartnerModal }) => {
  return (
    <section id="brands" className="py-12 sm:py-16 bg-white border-b border-[#e6e6e6]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-[#e6e6e6] gap-3">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="text-xl sm:text-2xl font-bold text-[#13191E] font-sans tracking-tight">
                Premier Technology Brand Alliances
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 bg-[#FFF3EC] text-[#FD5C08] rounded-[2px] border border-[#FD5C08]/20">
                {PORTAL_BRANDS.length} Authorized Brands
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#5A6573] mt-1 font-normal">
              Direct factory-authorized distribution of leading video surveillance, networking, storage, and access hardware.
            </p>
          </div>

          <button
            onClick={onOpenPartnerModal}
            className="text-xs font-semibold text-[#FD5C08] hover:text-[#CA4400] hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>Become an Authorized Dealer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Authorized Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {PORTAL_BRANDS.map((b) => (
            <div
              key={b.name}
              className="p-3.5 bg-[#fafafa] hover:bg-white border border-[#e6e6e6] hover:border-[#FD5C08] rounded-[2px] transition-all flex flex-col justify-between group shadow-2xs hover:shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl">{b.emoji}</span>
                <span className="text-[10px] text-[#047857] font-bold uppercase tracking-wider bg-[#f4fbf0] px-1.5 py-0.5 rounded-[2px] border border-[#047857]/15">
                  Authorized
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#13191E] group-hover:text-[#FD5C08] transition-colors tracking-tight">
                  {b.name}
                </h3>
                <p className="text-[11px] text-[#5A6573] mt-0.5 line-clamp-1">
                  {b.sub}
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-[#ededed] text-right">
                <button
                  onClick={onOpenPartnerModal}
                  className="text-[11px] font-semibold text-[#FD5C08] hover:text-[#CA4400] hover:underline"
                >
                  Explore Brand →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandShowcase;
