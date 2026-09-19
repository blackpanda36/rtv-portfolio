import React from 'react';
import { Users, Lock, Wrench, Smartphone, Gift, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { DEALER_PILLARS, COMPANY_INFO } from '../data/companyData';

interface DealerEcosystemProps {
  onOpenPartnerModal: () => void;
}

export const DealerEcosystem: React.FC<DealerEcosystemProps> = ({ onOpenPartnerModal }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Lock':
        return Lock;
      case 'Wrench':
        return Wrench;
      case 'Smartphone':
        return Smartphone;
      case 'Gift':
        return Gift;
      default:
        return Users;
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
            <Users className="w-3.5 h-3.5 text-rtv-orange" />
            <span>FRAMEWORK // CHANNEL-SCALE-08</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 font-heading tracking-tight leading-[1.1] mb-5">
            Authorized Channel Enablement & Margin Framework
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Structured operational support, technical pre-sales BOM sizing, deterministic RMA fulfillment, and margin insulation for India's commercial system integrators and installers.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {DEALER_PILLARS.map((pillar) => {
            const Icon = getIcon(pillar.iconName);

            return (
              <div
                key={pillar.title}
                className="bg-white border border-slate-200/80 rounded-3xl p-7 flex flex-col justify-between hover:border-slate-400/80 shadow-2xs hover:shadow-sm transition-all duration-200 group relative"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-rtv-orange mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 mb-2 font-heading group-hover:text-rtv-orange transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                    {pillar.summary}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {pillar.perks.map((perk, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Card with Technical Channel Focus */}
        <div className="rounded-3xl bg-slate-50/60 border border-slate-200/80 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left relative">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              NATIONAL INTEGRATOR ONBOARDING
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-950 font-heading tracking-tight leading-tight">
              Access Verifiable Sourcing, Margin Insulation & Technical RMA Desk
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Enroll your integration or contracting firm with Real Tech Vision. Benefit from protected wholesale price schedules, regional stock reserves, and verified warranty execution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <button
              onClick={onOpenPartnerModal}
              className="group px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-rtv-orange shadow-xs hover:shadow-md transition-all duration-200 flex items-center gap-2"
            >
              <span>Apply for Integrator Status</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href={COMPANY_INFO.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-950 bg-white border border-slate-200 hover:border-slate-400 transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <span>Realconnect Terminal Login</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
