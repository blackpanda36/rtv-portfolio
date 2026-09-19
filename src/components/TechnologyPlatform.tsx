import React from 'react';
import { Cpu, ExternalLink, CheckCircle2, Eye, ShoppingCart, FileText, Award, Truck, Search } from 'lucide-react';
import { DIGITAL_CAPABILITIES, COMPANY_INFO } from '../data/companyData';

export const TechnologyPlatform: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Eye':
        return Eye;
      case 'ShoppingCart':
        return ShoppingCart;
      case 'FileText':
        return FileText;
      case 'Award':
        return Award;
      case 'Truck':
        return Truck;
      case 'Search':
        return Search;
      default:
        return Cpu;
    }
  };

  return (
    <section className="py-24 bg-slate-50/50 relative border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-rtv-orange text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Digital Infrastructure</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight leading-tight">
              Technology-Driven B2B Distribution
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We leverage modern digital systems to eradicate traditional distribution friction. Through our proprietary <strong>Realconnect</strong> platform, dealers experience transparent catalog discovery, instant inventory visibility, streamlined digital order booking, and live shipment dispatch tracking.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero phone delays — check inventory 24/7</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Automated invoice ledgers & tax reconciliation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Quarterly volume targets & reward points tracking</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={COMPANY_INFO.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-rtv-orange hover:bg-rtv-orange-700 shadow-xs transition-all"
              >
                <span>Explore the Dealer Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Digital Feature Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DIGITAL_CAPABILITIES.map((item) => {
              const Icon = getIcon(item.iconName);

              return (
                <div
                  key={item.title}
                  className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-rtv-orange mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 font-heading group-hover:text-rtv-orange transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-emerald-700 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>{item.benefit}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
