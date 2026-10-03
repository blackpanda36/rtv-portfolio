import React, { useState } from 'react';
import { Building2, CheckCircle2 } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/companyData';

export const AboutSection: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState(0);

  return (
    <section id="about" className="py-14 sm:py-20 bg-[#fafafa] border-b border-[#e6e6e6]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#616161] uppercase tracking-wider mb-2">
            <Building2 className="w-3.5 h-3.5 text-[#0067b8]" />
            <span>Corporate Heritage • Est. 2008</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#242424] font-sans tracking-tight">
            15+ Years of Dedicated B2B Security & Tech Distribution
          </h2>
          <p className="text-sm sm:text-base text-[#616161] max-w-2xl mt-1">
            Born in Ritchie Street, Chennai—the premier electronics commercial district of South India—Realtech Vision has maintained unwavering wholesale channel integrity.
          </p>
        </div>

        {/* Narrative & Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left: Editorial Narrative Card (6 cols) */}
          <div className="lg:col-span-6 bg-white border border-[#e6e6e6] p-6 sm:p-8 shadow-fluent rounded-[2px] space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold text-[#242424] leading-snug">
              An Audited Bridge Connecting Global Manufacturers with 4,000+ Verified Channel Partners.
            </h3>

            <p className="text-sm text-[#444444] leading-relaxed">
              Established in 2008, Realtech Vision operates as a pure B2B distributor. We never sell directly to retail end-consumers or bid against our partners. Every system integrator, government contractor, and dealer benefits from price protection and priority stock reserves.
            </p>

            <p className="text-sm text-[#444444] leading-relaxed">
              Our 130+ personnel operate across technical BOM estimation, multi-warehouse logistics, live inventory sync, and in-house component repair labs to guarantee 24 to 48-hour fulfillment across all 28 states of India.
            </p>

            {/* Core Commitments Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#e6e6e6] text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7fba00] flex-shrink-0" />
                <span className="font-semibold text-[#242424]">100% Pure Distribution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7fba00] flex-shrink-0" />
                <span className="font-semibold text-[#242424]">Factory Direct Warranties</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7fba00] flex-shrink-0" />
                <span className="font-semibold text-[#242424]">In-House Certified RMA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7fba00] flex-shrink-0" />
                <span className="font-semibold text-[#242424]">5 Regional Warehouses</span>
              </div>
            </div>
          </div>

          {/* Right: Milestone Timeline Cards (6 cols) */}
          <div className="lg:col-span-6 bg-white border border-[#e6e6e6] p-6 sm:p-8 shadow-fluent rounded-[2px]">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#e6e6e6]">
              <span className="text-xs uppercase font-mono font-bold text-[#0067b8]">
                CHRONOLOGY & EXPANSION MILESTONES
              </span>
              <span className="text-xs text-[#616161]">2008 – 2026</span>
            </div>

            <div className="space-y-4">
              {TIMELINE_MILESTONES.map((item, idx) => (
                <div
                  key={item.phase}
                  className={`p-4 border rounded-[2px] transition-all cursor-pointer ${
                    activeMilestone === idx
                      ? 'border-[#0067b8] bg-[#ebf3fc]/30'
                      : 'border-[#e6e6e6] hover:border-[#8a8a8a] bg-white'
                  }`}
                  onClick={() => setActiveMilestone(idx)}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-bold text-[#0067b8]">
                      {item.phase} — {item.title}
                    </span>
                    <span className="text-[11px] font-mono text-[#616161] px-2 py-0.5 bg-[#f0f0f0] rounded-[2px]">
                      {item.phase}
                    </span>
                  </div>
                  <p className="text-xs text-[#444444] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
