import React, { useState } from 'react';
import { Layers, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BRANDS } from '../data/companyData';

interface BrandShowcaseProps {
  onOpenPartnerModal: () => void;
}

export const BrandShowcase: React.FC<BrandShowcaseProps> = ({ onOpenPartnerModal }) => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'CCTV & Surveillance', 'Surveillance Storage', 'Networking & Cabling', 'Access Control', 'Power Solutions'];

  const filteredBrands =
    filter === 'All'
      ? BRANDS
      : BRANDS.filter((b) => b.category.toLowerCase().includes(filter.toLowerCase()) || filter.toLowerCase().includes(b.category.toLowerCase()));

  return (
    <section id="brands" className="py-24 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-rtv-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Brand Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
            Trusted Technology Brands Distributed Nationwide
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Realtech Vision connects India's dealer community with verified products from industry-leading manufacturers in surveillance, storage, networking, and access technology.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 flex-shrink-0 ${
                filter === cat
                  ? 'bg-rtv-orange text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-14">
          {filteredBrands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-rtv-orange/60 hover:shadow-xs transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase font-bold text-rtv-orange bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                    {brand.badge || 'Authorized'}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-heading tracking-tight group-hover:text-rtv-orange transition-colors">
                  {brand.name}
                </h3>
                <div className="text-xs font-semibold text-slate-700 mb-2">
                  {brand.specialty}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {brand.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Direct Channel</span>
                <span className="text-emerald-600 font-medium">Warranty Backed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Partnership Banner */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono font-bold text-rtv-orange uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Manufacturer Partnership Opportunities</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-950 font-heading">
              Are you a security or technology manufacturer seeking nationwide Indian distribution?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Leverage our network of 4,000+ verified dealers, 5 regional warehousing hubs, and experienced in-house technical RMA team.
            </p>
          </div>

          <button
            onClick={onOpenPartnerModal}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-rtv-orange hover:bg-rtv-orange-700 shadow-xs transition-all"
          >
            <span>Partner as a Manufacturer</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
