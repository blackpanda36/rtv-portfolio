import React from 'react';
import {
  ShieldAlert,
  Award,
  Users,
  CheckCircle2,
  RefreshCw,
  Headphones,
  MapPin,
  TrendingUp,
  PackageCheck,
  Cpu,
  Star
} from 'lucide-react';
import { DIFFERENTIATORS } from '../data/companyData';

export const WhyRealtech: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert':
        return ShieldAlert;
      case 'Award':
        return Award;
      case 'Users':
        return Users;
      case 'CheckCircle2':
        return CheckCircle2;
      case 'RefreshCw':
        return RefreshCw;
      case 'Headphones':
        return Headphones;
      case 'MapPin':
        return MapPin;
      case 'TrendingUp':
        return TrendingUp;
      case 'PackageCheck':
        return PackageCheck;
      case 'Cpu':
        return Cpu;
      default:
        return Star;
    }
  };

  return (
    <section id="why-realtech" className="py-24 bg-slate-50/50 relative border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-rtv-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Competitive Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
            Why Businesses & Dealers Choose Realtech Vision
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Ten documented differentiators that make Realtech Vision India's most dependable security and technology distribution partner.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((item, idx) => {
            const Icon = getIcon(item.iconName);
            const isFeatured = idx === 0;

            return (
              <div
                key={item.id}
                className={`rounded-2xl p-6 sm:p-7 border transition-all duration-200 relative group flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-white border-2 border-rtv-orange shadow-sm md:col-span-2 lg:col-span-2'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        isFeatured
                          ? 'bg-rtv-orange text-white shadow-xs'
                          : 'bg-orange-50 text-rtv-orange border border-orange-100'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {item.highlightTag && (
                      <span
                        className={`text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full ${
                          isFeatured
                            ? 'bg-rtv-orange text-white'
                            : 'bg-orange-50 text-rtv-orange border border-orange-200'
                        }`}
                      >
                        {item.highlightTag}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <h3
                    className={`font-bold font-heading mb-3 ${
                      isFeatured
                        ? 'text-xl sm:text-2xl text-slate-950'
                        : 'text-lg text-slate-900 group-hover:text-rtv-orange transition-colors'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`leading-relaxed ${
                      isFeatured
                        ? 'text-sm sm:text-base text-slate-600'
                        : 'text-xs sm:text-sm text-slate-600'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Differentiator 0{idx + 1}</span>
                  <span className="group-hover:text-rtv-orange transition-colors font-medium">Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
