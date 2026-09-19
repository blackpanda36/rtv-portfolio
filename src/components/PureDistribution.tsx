import React from 'react';
import { Shield, XCircle, CheckCircle2, Lock, Building, Users, Factory } from 'lucide-react';

export const PureDistribution: React.FC = () => {
  return (
    <section id="distribution-model" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-rtv-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>Channel Integrity Guarantee</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
            Built to Support the Dealer, Not Compete With Them
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Many distributors secretly pursue end-user tenders, retail sales, or direct commercial contracts. At Realtech Vision, we operate a 100% pure distribution model—protecting your margins, leads, and customer relationships with zero channel conflict.
          </p>
        </div>

        {/* Animated Distribution Architecture Diagram */}
        <div className="bg-slate-50/70 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-rtv-orange font-bold">
              The Realtech 100% Pure Distribution Chain
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Step 1: Global Technology Brands */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col items-center text-center shadow-xs hover:border-slate-300 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Factory className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-wider mb-1">
                Stage 01
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Global Brands</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct manufacturing partnerships with certified CCTV, networking, and IT security giants.
              </p>
            </div>

            {/* Step 2: Realtech Vision (Distribution Engine) */}
            <div className="bg-white rounded-2xl p-6 border-2 border-rtv-orange flex flex-col items-center text-center shadow-sm relative">
              <div className="absolute -top-3 bg-rtv-orange text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                Value-Add Wholesale Hub
              </div>
              <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-rtv-orange mb-4">
                <Shield className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-mono font-bold text-rtv-orange uppercase tracking-wider mb-1">
                Stage 02
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Realtech Vision</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Warehousing, inward QA, serial verification, credit support, warranty RMA & 5-hub dispatch.
              </p>
            </div>

            {/* Step 3: Authorized Dealer Network */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col items-center text-center shadow-xs hover:border-slate-300 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <Users className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-wider mb-1">
                Stage 03
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">4,000+ Dealers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                System integrators, security contractors, and IT retailers owning their customer accounts.
              </p>
            </div>

            {/* Step 4: Businesses & Enterprise End Customers */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col items-center text-center shadow-xs hover:border-slate-300 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-4">
                <Building className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-mono font-bold text-purple-600 uppercase tracking-wider mb-1">
                Stage 04
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">End Customers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enterprises, government facilities, banks, factories, and commercial installations.
              </p>
            </div>
          </div>
        </div>

        {/* Realtech Pure Distribution Pledge vs Industry Common Practices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What We NEVER Do */}
          <div className="p-6 sm:p-8 rounded-2xl bg-rose-50/50 border border-rose-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">What We NEVER Do</h4>
                <p className="text-xs text-rose-600">Practices strictly forbidden at Realtech Vision</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span><strong>No direct end-user retail:</strong> We refuse to sell directly to consumers or business end-users.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span><strong>No project hijacking:</strong> We never bid against our own registered system integrators.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span><strong>No margin undermining:</strong> We do not publish wholesale dealer pricing to the public web.</span>
              </li>
            </ul>
          </div>

          {/* What We ALWAYS Guarantee */}
          <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/50 border border-emerald-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">What We ALWAYS Guarantee</h4>
                <p className="text-xs text-emerald-600">Our binding channel commitments to every partner</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Lead pass-through:</strong> When corporate end-users contact us, we route them directly to our local dealer network.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Project price protection:</strong> Registered large projects receive dedicated price locks and supply reservation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Full warranty defense:</strong> Genuine brand replacement and RMA handling backed by in-house technicians.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
