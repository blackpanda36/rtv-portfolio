import React from 'react';
import { Building2, MapPin, Check, Clock } from 'lucide-react';
import { COMPANY_INFO, TIMELINE_MILESTONES, BRANCHES } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-rtv-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
            India's Trusted B2B Technology & Security Distribution Partner
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Headquartered in Chennai's renowned electronics hub with strategic branches in Delhi, Hyderabad, Bangalore, and Surat, Realtech Vision serves as the vital link between world-class technology manufacturers and 4,000+ professional dealers across India.
          </p>
        </div>

        {/* Two-Column About Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Narrative Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Dedicated Exclusively to Dealer Success & Technology Distribution
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Founded on the foundational principle of channel protection, Realtech Vision is a pure B2B distribution powerhouse. We specialize in end-to-end supply of high-performance CCTV surveillance cameras, enterprise network switches, surveillance storage drives, biometric access control hardware, and stabilized power systems.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              With a dedicated team of 130+ professionals encompassing certified pre-sales technical engineers, logistics coordinators, and in-house RMA specialists, we deliver more than just hardware—we deliver certainty, warranty assurance, and business growth to our channel partners.
            </p>

            {/* Core commitments list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-orange-50 text-rtv-orange flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span className="font-medium">100% Channel Integrity</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-orange-50 text-rtv-orange flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span className="font-medium">Direct Brand Warranties</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-orange-50 text-rtv-orange flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span className="font-medium">In-House Technical Helpdesk</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-orange-50 text-rtv-orange flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span className="font-medium">Express Regional Dispatches</span>
              </div>
            </div>
          </div>

          {/* Right Visual: Branch Infrastructure (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-rtv-orange font-bold">
                    Strategic Branch Network
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                    Physical Presence Across Key Tech Corridors
                  </h4>
                </div>
                <div className="px-3 py-1 rounded bg-white border border-slate-200 text-xs font-mono text-slate-700 font-medium">
                  5 Operations Hubs
                </div>
              </div>

              {/* Branch Locations Cards */}
              <div className="space-y-3">
                {BRANCHES.map((b) => (
                  <div
                    key={b.id}
                    className={`p-3.5 rounded-xl border transition-all ${
                      b.isHeadquarter
                        ? 'bg-orange-50/50 border-orange-300'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <MapPin
                          className={`w-4 h-4 ${
                            b.isHeadquarter ? 'text-rtv-orange' : 'text-slate-500'
                          }`}
                        />
                        <div>
                          <span className="text-sm font-bold text-slate-900">
                            {b.city}
                          </span>
                          <span className="text-xs text-slate-500 ml-2">
                            ({b.state})
                          </span>
                        </div>
                      </div>
                      <span
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                          b.isHeadquarter
                            ? 'bg-rtv-orange text-white'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {b.type}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1 pl-6">
                      {b.address} • <span className="text-slate-700 font-medium">{b.transitTime}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Central Operations: Ritchie Street, Chennai 600002</span>
                <span className="text-rtv-orange font-semibold">Serving All States</span>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Evolution Timeline: 15+ Years of Distribution Excellence */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-rtv-orange text-xs font-bold uppercase tracking-wider font-mono mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Journey of Excellence</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
              15+ Years of Distribution Excellence
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              The progressive milestones that shaped India's premier B2B technology distribution ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {TIMELINE_MILESTONES.map((item, idx) => (
              <div
                key={item.phase}
                className="relative bg-white border border-slate-200 rounded-xl p-5 hover:border-rtv-orange/50 hover:shadow-xs transition-all duration-200 group"
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-rtv-orange">
                    Phase 0{idx + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-rtv-orange transition-colors" />
                </div>

                <div className="text-xs font-bold uppercase text-slate-500 tracking-wider font-mono mb-1">
                  {item.phase}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
