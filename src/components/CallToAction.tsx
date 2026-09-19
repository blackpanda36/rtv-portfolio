import React from 'react';
import { ShieldCheck, ArrowUpRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface CallToActionProps {
  onOpenPartnerModal: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenPartnerModal }) => {
  return (
    <section className="py-24 sm:py-36 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Precision corner crosshairs */}
      <div className="absolute top-6 left-6 font-mono text-xs text-slate-300 select-none pointer-events-none">+</div>
      <div className="absolute top-6 right-6 font-mono text-xs text-slate-300 select-none pointer-events-none">+</div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono uppercase tracking-widest mb-6">
          <ShieldCheck className="w-4 h-4 text-rtv-orange" />
          <span>ONBOARDING // EXPANSION-2026</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 font-heading tracking-tight leading-[1.05] mb-6 max-w-4xl mx-auto">
          Structured for channel integrity. Dependable across every commercial deployment.
        </h2>

        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          Establish your authorized channel partnership with Real Tech Vision. Benefit from deterministic logistics, price protection covenants, and certified OEM warranties across India.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenPartnerModal}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-slate-950 hover:bg-rtv-orange shadow-sm hover:shadow-md transition-all duration-200"
          >
            <span>Initiate Partner Verification</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-400 transition-all duration-200 shadow-2xs"
          >
            <Phone className="w-4 h-4 text-rtv-orange" />
            <span>Consult Regional Channel Desk</span>
          </a>
        </div>

        {/* Quick Contact Line with Monospace Telemetry */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500 font-mono">
          <span>National Channel Hotline: <strong className="text-slate-950 font-bold">{COMPANY_INFO.phone}</strong></span>
          <span>•</span>
          <span>Central Operations Desk: <strong className="text-slate-950 font-bold">{COMPANY_INFO.email}</strong></span>
        </div>
      </div>
    </section>
  );
};
