import React, { useState } from 'react';
import { Layers, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
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
    <section id="brands" className="py-24 sm:py-32 bg-white relative border-t border-slate-100">
      {/* Precision corner crosshairs */}
      <div className="absolute top-6 left-6 font-mono text-xs text-slate-300 select-none pointer-events-none">+</div>
      <div className="absolute top-6 right-6 font-mono text-xs text-slate-300 select-none pointer-events-none">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5 text-rtv-orange" />
            <span>ECOSYSTEM // OEM-ALLIANCE-05</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 font-heading tracking-tight leading-[1.1] mb-5">
            Authorized OEM & Technology Brand Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Direct-tier wholesale distribution alliances with certified manufacturers across physical surveillance, sequential storage, enterprise switching, and premises access control.
          </p>
        </div>

        {/* Minimalist Floating Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          <div className="inline-flex p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/80 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  filter === cat
                    ? 'bg-white text-slate-950 shadow-sm border border-slate-200/60 font-bold'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-16">
          {filteredBrands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white border border-slate-200/80 hover:border-slate-400/80 rounded-2xl p-6 transition-all duration-200 group flex flex-col justify-between hover:shadow-sm relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    {brand.badge || 'Authorized'}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-xl font-bold text-slate-950 font-heading tracking-tight group-hover:text-rtv-orange transition-colors mb-1">
                  {brand.name}
                </h3>
                <div className="text-xs font-semibold text-slate-700 mb-2">
                  {brand.specialty}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {brand.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>OEM Verified</span>
                <span className="text-emerald-700 font-medium">Warranty Intact</span>
              </div>
            </div>
          ))}
        </div>

        {/* Manufacturer Partnership Banner with Technical Framing */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono font-bold text-rtv-orange uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>OEM Distribution Engagement</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-heading tracking-tight">
              Are you a security or technology manufacturer seeking nationwide channel reach?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Real Tech Vision provides direct access to 4,000+ verified channel integrators, 5 strategic multi-state warehousing depots, and a dedicated in-house technical RMA infrastructure.
            </p>
          </div>

          <button
            onClick={onOpenPartnerModal}
            className="flex-shrink-0 group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-rtv-orange shadow-xs hover:shadow-md transition-all duration-200"
          >
            <span>Initiate OEM Partnership Dialogue</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
