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
    <section className="py-24 sm:py-32 bg-white relative border-t border-slate-100">
      {/* Precision corner crosshairs */}
      <div className="absolute top-6 left-6 font-mono text-xs text-slate-300 select-none pointer-events-none">+</div>
      <div className="absolute top-6 right-6 font-mono text-xs text-slate-300 select-none pointer-events-none">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono uppercase tracking-widest mb-4">
            <HeartHandshake className="w-3.5 h-3.5 text-rtv-orange" />
            <span>PRINCIPLES // ETHICAL-FOUNDATION-13</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 font-heading tracking-tight leading-[1.1] mb-5">
            Principles of Channel Stewardship
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Physical security distribution requires unwavering reliability. For 15+ years, Real Tech Vision has maintained foundational disciplines that insulate our partner ecosystem.
          </p>
        </div>

        {/* 5 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {COMPANY_VALUES.map((val, idx) => {
            const Icon = getIcon(val.iconName);

            return (
              <div
                key={val.title}
                className="bg-white border border-slate-200/80 rounded-3xl p-7 hover:border-slate-400/80 shadow-2xs hover:shadow-sm transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-rtv-orange mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase text-rtv-orange block mb-1.5">
                    {val.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 mb-3 font-heading group-hover:text-rtv-orange transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="mt-8 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400">
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
