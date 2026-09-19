import React from 'react';
import { ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface CallToActionProps {
  onOpenPartnerModal: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenPartnerModal }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-rtv-orange text-xs font-bold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4" />
          <span>India-Wide Channel Expansion</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 font-heading tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
          Let's Build the Future of Security & Technology Distribution
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Partner with Realtech Vision and connect with a growing technology distribution network across India.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenPartnerModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-bold text-white bg-rtv-orange hover:bg-rtv-orange-700 shadow-sm hover:shadow-md transition-all"
          >
            <span>Become a Partner</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-all"
          >
            <Phone className="w-4 h-4 text-rtv-orange" />
            <span>Talk to Our Team</span>
          </a>
        </div>

        {/* Quick Contact Line */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600">
          <span>National Channel Hotline: <strong className="text-slate-900 font-mono font-bold">{COMPANY_INFO.phone}</strong></span>
          <span>•</span>
          <span>Central Desk: <strong className="text-slate-900 font-mono font-bold">{COMPANY_INFO.email}</strong></span>
        </div>
      </div>
    </section>
  );
};
