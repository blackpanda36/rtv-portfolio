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
    <section className="py-24 bg-slate-50/50 relative border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-rtv-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Distribution Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
            How Realtech Works: Channel Operations & Delivery
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A structured, 5-stage distribution protocol designed to deliver authentic hardware, guaranteed warranty records, and reliable delivery to dealers nationwide.
          </p>
        </div>

        {/* 5-Step Process Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {OPERATIONS_PIPELINE.map((item) => {
            const Icon = getIcon(item.iconName);

            return (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-rtv-orange bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                      Stage {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-rtv-orange group-hover:bg-orange-50 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 font-heading group-hover:text-rtv-orange transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-700 mb-2">
                    {item.summary}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Standard Quality</span>
                  <span className="text-emerald-600 font-medium">Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
