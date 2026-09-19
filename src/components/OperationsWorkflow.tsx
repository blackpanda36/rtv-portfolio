import React from 'react';
import { Factory, Scan, Warehouse, Truck, ShieldCheck, Layers } from 'lucide-react';
import { OPERATIONS_PIPELINE } from '../data/companyData';

export const OperationsWorkflow: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Factory':
        return Factory;
      case 'Scan':
        return Scan;
      case 'Warehouse':
        return Warehouse;
      case 'Truck':
        return Truck;
      case 'ShieldCheck':
        return ShieldCheck;
      default:
        return Factory;
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-white relative border-t border-slate-100">
      {/* Precision corner crosshairs */}
      <div className="absolute top-6 left-6 font-mono text-xs text-slate-300 select-none pointer-events-none">+</div>
      <div className="absolute top-6 right-6 font-mono text-xs text-slate-300 select-none pointer-events-none">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5 text-rtv-orange" />
            <span>PIPELINE // CUSTODY-FLOW-10</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 font-heading tracking-tight leading-[1.1] mb-5">
            5-Stage Hardware Custody & Dispatch Protocol
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A documented quality and custody protocol ensuring physical seal verification, serial barcode scanning, and deterministic regional dispatch.
          </p>
        </div>

        {/* 5-Step Process Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {OPERATIONS_PIPELINE.map((item) => {
            const Icon = getIcon(item.iconName);

            return (
              <div
                key={item.step}
                className="bg-white border border-slate-200/80 rounded-3xl p-6 hover:border-slate-400/80 shadow-2xs hover:shadow-sm transition-all duration-200 group flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                      Stage {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:text-rtv-orange group-hover:bg-orange-50 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-950 mb-1.5 font-heading group-hover:text-rtv-orange transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-700 mb-2">
                    {item.summary}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Audit Point</span>
                  <span className="text-emerald-700 font-medium">Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
