import React, { useState } from 'react';
import { Camera, Network, HardDrive, ShieldCheck, Zap, ArrowUpRight, CheckCircle2, Cpu } from 'lucide-react';
import { SOLUTION_CATEGORIES } from '../data/companyData';

interface SolutionsSectionProps {
  onOpenPartnerModal: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenPartnerModal }) => {
  const [activeTab, setActiveTab] = useState(SOLUTION_CATEGORIES[0].id);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return Camera;
      case 'Network':
        return Network;
      case 'HardDrive':
        return HardDrive;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Zap':
        return Zap;
      default:
        return Cpu;
    }
  };

  const selectedCategory =
    SOLUTION_CATEGORIES.find((c) => c.id === activeTab) || SOLUTION_CATEGORIES[0];
  const ActiveIcon = getCategoryIcon(selectedCategory.iconName);

  return (
    <section id="solutions" className="py-24 sm:py-32 bg-white relative border-t border-slate-100">
      {/* Precision corner crosshairs */}
      <div className="absolute top-6 left-6 font-mono text-xs text-slate-300 select-none pointer-events-none">+</div>
      <div className="absolute top-6 right-6 font-mono text-xs text-slate-300 select-none pointer-events-none">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Security Telemetry */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5 text-rtv-orange" />
            <span>SPEC-MATRIX // SEC-HW-04</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 font-heading tracking-tight leading-[1.1] mb-5">
            Physical Security & Network Hardware Matrix
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Deterministic optical surveillance, sequential write-intensive storage, carrier-grade PoE switching, and premises telemetry—distributed strictly through verified wholesale channels.
          </p>
        </div>

        {/* Minimalist Floating Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          <div className="inline-flex p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/80 max-w-full">
            {SOLUTION_CATEGORIES.map((cat) => {
              const Icon = getCategoryIcon(cat.iconName);
              const isActive = activeTab === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-sm border border-slate-200/60 font-bold'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-rtv-orange' : 'text-slate-400'}`} />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Category Showcase Grid with Engineering Precision */}
        <div className="bg-slate-50/40 border border-slate-200/80 rounded-3xl p-6 sm:p-10 lg:p-12 transition-all duration-300 relative">
          {/* Engineering corner tick marks */}
          <div className="absolute top-3 left-4 font-mono text-[10px] text-slate-300 select-none">⌜ CAT-NODE ⌝</div>
          <div className="absolute top-3 right-4 font-mono text-[10px] text-slate-300 select-none">⌜ SERIAL-AUDITED ⌝</div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Category Overview Left (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-rtv-orange text-xs font-mono font-bold uppercase mb-5 shadow-2xs">
                  <ActiveIcon className="w-3.5 h-3.5" />
                  <span>{selectedCategory.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-slate-950 font-heading tracking-tight mb-3">
                  {selectedCategory.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold font-mono text-slate-700 mb-4">
                  {selectedCategory.tagline}
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                  {selectedCategory.description}
                </p>

                {/* Technical Distribution Guarantees */}
                <div className="space-y-3 pt-6 border-t border-slate-200">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                    Distribution Specifications & Guarantees
                  </span>
                  {selectedCategory.keyCapabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Action Button */}
              <div className="pt-6 border-t border-slate-200">
                <button
                  onClick={onOpenPartnerModal}
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-rtv-orange shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <span>Request Technical BOM & Pricing</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            {/* Featured Hardware Items Right (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                  Sourced Assemblies & Operational Scope
                </span>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-medium">
                  OEM Channel // Verified
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedCategory.featuredItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-400/80 hover:shadow-sm transition-all duration-200 group relative"
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-xs font-mono font-bold text-slate-500">
                        NODE 0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded font-medium">
                        OEM Sealed
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-950 mb-1.5 group-hover:text-rtv-orange transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-600 font-mono mb-3 bg-slate-50 p-2 rounded-lg border border-slate-100">
                      {item.specs}
                    </p>
                    <div className="text-[11px] text-slate-600">
                      <span className="font-semibold text-slate-800">Deployment Target: </span>
                      {item.application}
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Sourcing Covenant Disclaimer */}
              <div className="mt-6 p-4 rounded-2xl bg-white border border-slate-200/80 flex items-start gap-3.5 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-rtv-orange flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real Tech Vision operates strictly as a tier-one wholesale distributor. Hardware units are factory-sealed, un-rebadged, and delivered with intact manufacturer barcoded serials and factory warranty covenants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
