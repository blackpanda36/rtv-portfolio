import React from 'react';
import { Phone, Clock, ExternalLink } from 'lucide-react';
import { BRANCHES } from '../data/companyData';

export const PanIndiaNetwork: React.FC = () => {
  return (
    <section id="network" className="py-12 sm:py-16 bg-[#fafafa] border-b border-[#e6e6e6]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 pb-3 border-b border-[#e6e6e6]">
          <h2 className="text-xl sm:text-2xl font-bold text-[#13191E] font-sans tracking-tight">
            5 Strategic Regional Super-Hubs
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6573] mt-0.5">
            Centrally coordinated from Ritchie Street, Chennai, providing 24 to 48-hour order dispatch across all 28 states.
          </p>
        </div>

        {/* 5 Minimal Hub Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {BRANCHES.map((b) => {
            const phoneRaw = b.phone.replace(/[^0-9]/g, '');
            return (
              <div
                key={b.id}
                className="bg-white border border-[#e6e6e6] p-4 rounded-[2px] shadow-xs flex flex-col justify-between hover:border-[#FD5C08] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-[#FD5C08] uppercase">
                      {b.city.substring(0, 3).toUpperCase()}-HUB
                    </span>
                    {b.isHeadquarter && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 bg-[#FFF3EC] text-[#FD5C08] border border-[#FED7AA]/60 rounded-[2px]">
                        CENTRAL HQ
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-[#13191E] mb-1">
                    {b.city} Distribution Hub
                  </h3>

                  <p className="text-xs text-[#5A6573] mb-3 line-clamp-2 leading-relaxed">
                    {b.address}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#f0f0f0] space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-[#13191E]">
                    <Clock className="w-3.5 h-3.5 text-[#5A6573] flex-shrink-0" />
                    <span className="font-semibold text-[11px]">{b.transitTime}</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <a
                      href={`tel:${phoneRaw}`}
                      className="font-semibold text-[#FD5C08] hover:text-[#CA4400] hover:underline flex items-center gap-1 text-[11px]"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{b.phone}</span>
                    </a>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#616161] hover:text-[#242424]"
                      aria-label="Map location"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PanIndiaNetwork;
