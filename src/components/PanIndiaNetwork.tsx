import React from 'react';
import { Phone, Clock, ExternalLink } from 'lucide-react';
import { BRANCHES } from '../data/companyData';

export const PanIndiaNetwork: React.FC = () => {
  return (
    <section id="network" className="py-16 sm:py-24 bg-[#F7F8FA] border-b border-[#E5E8ED]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF3EC] text-[#FD5C08] border border-[#FED7AA]/60 text-xs font-semibold mb-3">
            <span>PAN-INDIA LOGISTICS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D2026] font-sans tracking-tight">
            5 Strategic <span className="text-[#FD5C08]">Regional Super-Hubs</span>
          </h2>
          <p className="text-sm sm:text-base text-[#7D8694] mt-3 leading-relaxed">
            Centrally coordinated from <span className="text-[#FD5C08] font-semibold">Ritchie Street, Chennai</span>, providing 24 to 48-hour order dispatch across all 28 states.
          </p>
        </div>

        {/* 5 Minimal Hub Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {BRANCHES.map((b) => {
            const phoneRaw = b.phone.replace(/[^0-9]/g, '');
            return (
              <div
                key={b.id}
                className="bg-white border border-[#E5E8ED] p-5 rounded-2xl shadow-[0_4px_16px_rgba(105,115,140,0.06)] hover:shadow-[0_8px_24px_rgba(105,115,140,0.12)] hover:border-[#FD5C08]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-[#4660E9] uppercase bg-[#4660E9]/10 px-2 py-0.5 rounded-full">
                      {b.city.substring(0, 3).toUpperCase()}-HUB
                    </span>
                    {b.isHeadquarter && (
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-[#FFF3EC] text-[#FD5C08] border border-[#FED7AA] rounded-full">
                        CENTRAL HQ
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-[#1D2026] mb-1.5 group-hover:text-[#FD5C08] transition-colors">
                    {b.city} Distribution Hub
                  </h3>

                  <p className="text-xs text-[#7D8694] mb-4 line-clamp-3 leading-relaxed">
                    {b.address}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0F2F5] space-y-2.5 text-xs">
                  <div className="inline-flex items-center gap-1.5 text-[#2E3E51] bg-[#F7F8FA] px-2.5 py-1 rounded-full border border-[#E5E8ED] text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-[#4660E9] flex-shrink-0" />
                    <span className="font-medium">{b.transitTime}</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <a
                      href={`tel:${phoneRaw}`}
                      className="font-medium text-[#FD5C08] hover:text-[#CA4400] hover:underline flex items-center gap-1 text-[11px]"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{b.phone}</span>
                    </a>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-[#F7F8FA] hover:bg-[#4660E9] text-[#7D8694] hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Map location"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
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
