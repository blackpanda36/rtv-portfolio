import React from 'react';
import { Users, Lock, Wrench, Smartphone, Gift, ArrowRight, Check } from 'lucide-react';
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
    <section className="py-24 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-rtv-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Channel Enablement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
            More Than Distribution. A Dealer Growth Partner.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            We measure our success by the growth and profitability of our 4,000+ channel partners. Here is how we empower your business from quoting to post-installation warranty.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {DEALER_PILLARS.map((pillar) => {
            const Icon = getIcon(pillar.iconName);

            return (
              <div
                key={pillar.title}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 shadow-xs hover:shadow-sm transition-all duration-200 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-rtv-orange mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading group-hover:text-rtv-orange transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                    {pillar.summary}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    {pillar.perks.map((perk, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-rtv-orange flex-shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Card */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rtv-orange">
              Join India's Fastest Growing Security Network
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
              Ready to Access Verified Sourcing, Margin Protection & Direct RMA?
            </h3>
            <p className="text-sm text-slate-600">
              Onboard your dealership or system integration firm with Realtech Vision today. Enjoy transparent wholesale pricing, credit facilities, and dedicated relationship managers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <button
              onClick={onOpenPartnerModal}
              className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-rtv-orange hover:bg-rtv-orange-700 shadow-xs transition-all flex items-center gap-2"
            >
              <span>Become a Realtech Partner</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={COMPANY_INFO.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-950 bg-white border border-slate-300 hover:bg-slate-50 transition-all"
            >
              <span>Existing Dealer Portal Login</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
