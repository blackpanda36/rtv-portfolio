import React, { useState } from 'react';
import { MapPin, ArrowUpRight, Check, Building2, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO, TIMELINE_MILESTONES, BRANCHES } from '../data/companyData';

export const AboutSection: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-mono uppercase tracking-widest mb-4">
            <Building2 className="w-3.5 h-3.5 text-rtv-orange" />
            <span>04 // Corporate Profile & Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 font-heading tracking-tight leading-[1.05]">
            Disciplined physical security distribution across India's commercial corridors.
          </h2>
        </div>

        {/* Narrative & Strategic Branch Hubs Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Editorial Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-slate-600 leading-relaxed text-base sm:text-lg font-normal">
            <p className="text-slate-950 font-semibold text-xl sm:text-2xl leading-snug">
              Established in 2008 in Ritchie Street, Chennai—the commercial electronics cluster of South India—Real Tech Vision has maintained continuous wholesale distribution operations for over 15 years.
            </p>

            <p>
              We serve as an audited distribution bridge between global physical security manufacturers and more than 4,000 independent security dealers, system integrators, and infrastructure contractors across India.
            </p>

            <p className="text-sm sm:text-base text-slate-500">
              Our organization comprises 130+ personnel across technical pre-sales engineering, inventory warehousing, logistics dispatch, and in-house component RMA repair labs—safeguarding supply continuity across all 28 states.
            </p>

            {/* Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-800 font-mono">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-orange-50 text-rtv-orange flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span className="font-semibold">Pure Channel Covenant</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-orange-50 text-rtv-orange flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span className="font-semibold">Direct Factory Warranties</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-orange-50 text-rtv-orange flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span className="font-semibold">In-House RMA Facilities</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-orange-50 text-rtv-orange flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span className="font-semibold">5 Strategic Warehouses</span>
              </div>
            </div>
          </div>

          {/* Right: Branch Hubs Directory Card (6 cols) */}
          <div className="lg:col-span-6 bg-slate-50/70 rounded-3xl p-6 sm:p-9 border border-slate-200/80">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-rtv-orange font-bold">
                  Physical Hub Infrastructure
                </span>
                <h3 className="text-xl font-bold text-slate-950 mt-1 font-heading">
                  5 Strategic Warehousing Depots
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700 font-semibold">
                NATIONAL TOPOLOGY
              </span>
            </div>

            <div className="space-y-3">
              {BRANCHES.map((b) => (
                <div
                  key={b.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    b.isHeadquarter
                      ? 'bg-white border-rtv-orange shadow-2xs'
                      : 'bg-white/80 border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin
                        className={`w-4 h-4 ${
                          b.isHeadquarter ? 'text-rtv-orange' : 'text-slate-400'
                        }`}
                      />
                      <div>
                        <span className="text-sm font-bold text-slate-900 font-heading">
                          {b.city}
                        </span>
                        <span className="text-xs text-slate-400 font-mono ml-2">
                          ({b.state})
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full ${
                        b.isHeadquarter
                          ? 'bg-rtv-orange text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {b.type}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-2 pl-7 flex items-center justify-between">
                    <span>{b.address}</span>
                    <span className="font-mono font-semibold text-slate-700">{b.transitTime}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Channel Inquiries: {COMPANY_INFO.phone}</span>
              <span className="text-rtv-orange font-semibold">Deterministic Inter-State Transit</span>
            </div>
          </div>
        </div>

        {/* Milestone Evolution: 15+ Years of Distribution Excellence */}
        <div className="pt-12 border-t border-slate-100">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-rtv-orange block mb-2">
              Timeline & Milestones
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-950 font-heading tracking-tight">
              15+ Years of Channel Continuity
            </h3>
            <p className="text-sm text-slate-500 mt-2">
              Documented phases of corporate growth, depot commissioning, and technology portfolio scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {TIMELINE_MILESTONES.map((item, idx) => (
              <div
                key={item.phase}
                onClick={() => setActivePhase(idx)}
                className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  activePhase === idx
                    ? 'bg-white border-slate-900 shadow-sm'
                    : 'bg-slate-50/50 border-slate-200/80 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-bold ${
                        activePhase === idx ? 'text-rtv-orange' : 'text-slate-400'
                      }`}
                    >
                      Phase 0{idx + 1}
                    </span>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activePhase === idx ? 'bg-rtv-orange' : 'bg-slate-300'
                      }`}
                    />
                  </div>

                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-1">
                    {item.phase}
                  </div>
                  <h4 className="text-base font-bold text-slate-950 font-heading mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
