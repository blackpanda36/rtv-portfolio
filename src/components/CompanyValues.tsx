import React from 'react';
import { Shield, Handshake, Zap, Cpu, TrendingUp, HeartHandshake } from 'lucide-react';
import { COMPANY_VALUES } from '../data/companyData';

export const CompanyValues: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Shield':
        return Shield;
      case 'Handshake':
        return Handshake;
      case 'Zap':
        return Zap;
      case 'Cpu':
        return Cpu;
      case 'TrendingUp':
        return TrendingUp;
      default:
        return HeartHandshake;
    }
  };

  return (
    <section className="py-24 bg-slate-50/50 relative border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-rtv-orange text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
            Built Around Trust
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Technology distribution is an industry where promises matter. For 15+ years, Realtech Vision has stood by foundational principles that keep our channel partners secure.
          </p>
        </div>

        {/* 5 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {COMPANY_VALUES.map((val, idx) => {
            const Icon = getIcon(val.iconName);

            return (
              <div
                key={val.title}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-rtv-orange mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-1">
                    {val.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 font-heading group-hover:text-rtv-orange transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                  Principle 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
