import React from 'react';
import { Shield, XCircle, CheckCircle2, Lock, Building, Users, Factory } from 'lucide-react';

export const PureDistribution: React.FC = () => {
  return (
    <section id="distribution-model" className="py-24 sm:py-32 bg-white relative border-t border-slate-100">
      {/* Precision corner crosshairs */}
      <div className="absolute top-6 left-6 font-mono text-xs text-slate-300 select-none pointer-events-none">+</div>
      <div className="absolute top-6 right-6 font-mono text-xs text-slate-300 select-none pointer-events-none">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono uppercase tracking-widest mb-4">
            <Lock className="w-3.5 h-3.5 text-rtv-orange" />
            <span>COVENANT // PROTOCOL-100</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 font-heading tracking-tight leading-[1.1] mb-5">
            The Channel Protection Covenant & Custody Architecture
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A verified wholesale distribution model designed to eliminate channel friction, insulate partner margins, and deliver deterministic hardware custody from factory gate to commercial deployment.
          </p>
        </div>

        {/* 4-Stage Custody Chain Diagram */}
        <div className="bg-slate-50/50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 mb-16 relative">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/80">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
              VERIFIED 4-STAGE CUSTODY PROTOCOL
            </span>
            <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-medium">
              Zero Direct-Bidding Clause
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Step 1: OEM Manufacturing Origin */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 flex flex-col items-center text-center shadow-2xs hover:border-slate-400/80 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800 mb-4">
                <Factory className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                Stage 01 // Origin
              </span>
              <h3 className="text-base font-bold text-slate-950 mb-2 font-heading">OEM Manufacturing</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct factory procurement with verified master serial registers, undamaged factory seals, and warranty pass-through certificates.
              </p>
            </div>

            {/* Step 2: Real Tech Vision (Custody & QA Hub) */}
            <div className="bg-white rounded-2xl p-6 border-2 border-rtv-orange flex flex-col items-center text-center shadow-xs relative">
              <div className="absolute -top-3 bg-rtv-orange text-white text-[10px] font-extrabold font-mono uppercase tracking-wider px-3 py-0.5 rounded-full shadow-2xs">
                Inward QA & Serialization
              </div>
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-rtv-orange mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-bold text-rtv-orange uppercase tracking-wider mb-1">
                Stage 02 // Stewardship
              </span>
              <h3 className="text-base font-bold text-slate-950 mb-2 font-heading">Real Tech Vision</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Optical and electrical QA audit, regional depot buffer staging, dealer margin protection, and warranty RMA resolution.
              </p>
            </div>

            {/* Step 3: Authorized Integrator Network */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 flex flex-col items-center text-center shadow-2xs hover:border-slate-400/80 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-wider mb-1">
                Stage 03 // Deployment
              </span>
              <h3 className="text-base font-bold text-slate-950 mb-2 font-heading">4,000+ Channel Partners</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Certified system integrators and installation contractors holding exclusive commercial quote and margin authority.
              </p>
            </div>

            {/* Step 4: Regulated Commercial Deployment */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 flex flex-col items-center text-center shadow-2xs hover:border-slate-400/80 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700 mb-4">
                <Building className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                Stage 04 // Commissioning
              </span>
              <h3 className="text-base font-bold text-slate-950 mb-2 font-heading">Enterprise Facilities</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Operational deployments across banking, industrial manufacturing plants, commercial towers, and smart infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Covenant Audit: Prohibited Practices vs Enforced Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Prohibited Channel Practices */}
          <div className="p-7 sm:p-8 rounded-3xl bg-rose-50/40 border border-rose-200/70">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950 font-heading">Prohibited Channel Practices</h3>
                <p className="text-xs text-rose-600 font-mono">Explicitly forbidden under Real Tech Vision distribution charter</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span><strong>No direct end-user retail:</strong> Zero retail storefronts, consumer eCommerce listings, or direct tender bidding.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span><strong>No account bypassing:</strong> End-user enterprise inquiries are systematically routed to qualified local dealers.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span><strong>No price publication:</strong> Wholesale schedules remain authenticated behind verified dealer logins to defend margins.</span>
              </li>
            </ul>
          </div>

          {/* Enforced Covenant Guarantees */}
          <div className="p-7 sm:p-8 rounded-3xl bg-emerald-50/40 border border-emerald-200/70">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950 font-heading">Enforced Covenant Guarantees</h3>
                <p className="text-xs text-emerald-600 font-mono">Contractual distribution commitments to all enrolled integrators</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Project price protection:</strong> Registered tenders receive price preservation and dedicated inventory allocation locks.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Verifiable chain of custody:</strong> Every batch is logged with inward serial scans, mitigating gray market liabilities.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>In-house warranty defense:</strong> Direct RMA resolution with manufacturer replacements, minimizing project downtime.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
