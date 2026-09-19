import React, { useState } from 'react';
import { Camera, Network, HardDrive, ShieldCheck, Zap, ArrowRight, CheckCircle, Cpu } from 'lucide-react';
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
    <section id="solutions" className="py-24 bg-slate-50/50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-rtv-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Distribution Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
            Technology That Keeps Businesses Connected & Secure
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From high-definition optics and enterprise surveillance storage to gigabit networking and biometric access control—delivering genuine, warranty-backed technology across India.
          </p>
        </div>

        {/* Category Selection Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {SOLUTION_CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.iconName);
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  isActive
                    ? 'bg-rtv-orange text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Showcase Grid */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Category Overview Left (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-rtv-orange text-xs font-bold font-mono uppercase mb-4 border border-orange-200">
                  <ActiveIcon className="w-3.5 h-3.5" />
                  <span>{selectedCategory.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading mb-3">
                  {selectedCategory.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-rtv-orange mb-4">
                  {selectedCategory.tagline}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {selectedCategory.description}
                </p>

                {/* Key Capabilities List */}
                <div className="space-y-2.5 pt-4 border-t border-slate-200">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                    Distribution Guarantees
                  </span>
                  {selectedCategory.keyCapabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="pt-6 border-t border-slate-200">
                <button
                  onClick={onOpenPartnerModal}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-300 transition-all"
                >
                  <span>Request Authorized Dealer Catalog</span>
                  <ArrowRight className="w-4 h-4 text-rtv-orange" />
                </button>
              </div>
            </div>

            {/* Featured Hardware Items Right (7 cols) */}
            <div className="lg:col-span-7">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-4">
                Core Sourced Lines & Application Matrix
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedCategory.featuredItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-rtv-orange">
                        Line 0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded">
                        Genuine Stock
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-rtv-orange transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-600 font-mono mb-2">
                      {item.specs}
                    </p>
                    <div className="text-[11px] text-slate-600 bg-white p-2 rounded border border-slate-200">
                      <span className="font-semibold text-slate-800">Deployment: </span>
                      {item.application}
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Sourcing Disclaimer Note */}
              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-rtv-orange flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  Realtech Vision acts strictly as an authorized B2B wholesale distributor. We do not manufacture or rebadge hardware. All products carry original serial identifiers and manufacturer warranty commitments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
