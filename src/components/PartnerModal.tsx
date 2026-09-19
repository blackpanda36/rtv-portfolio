import React, { useState } from 'react';
import { X, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { INDIAN_STATES_AND_CITIES } from '../data/companyData';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [selectedState, setSelectedState] = useState('Tamil Nadu');
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    firmName: '',
    phone: '',
    email: '',
    state: 'Tamil Nadu',
    city: 'Chennai',
    role: 'Dealer / Retailer',
    volume: '₹1L - ₹5L / Month'
  });

  if (!isOpen) return null;

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedState(val);
    const cities = INDIAN_STATES_AND_CITIES[val] || [];
    setForm({
      ...form,
      state: val,
      city: cities[0] || ''
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-9 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-orange-50 text-rtv-orange flex items-center justify-center flex-shrink-0 border border-orange-200/60">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase font-bold text-rtv-orange tracking-widest block">
              Authorized Distribution Onboarding
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-heading tracking-tight">
              Partner with Real Tech Vision
            </h3>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-950 font-heading">Application Received</h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Our regional distribution manager will contact you at <strong className="text-slate-950 font-mono">{form.phone}</strong> to activate your authorized wholesale dealer account.
            </p>
            <div className="pt-3">
              <button
                onClick={onClose}
                className="px-7 py-3 rounded-full text-xs font-bold text-white bg-slate-950 hover:bg-rtv-orange transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Fill out your details to access wholesale dealer tier pricing, credit accounts, and direct manufacturer warranty support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50/60 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Firm / Company Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Security Systems"
                  value={form.firmName}
                  onChange={(e) => setForm({ ...form, firmName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50/60 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98400 00000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50/60 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-slate-900 focus:bg-white transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="rajesh@apexsec.in"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50/60 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  State / Region *
                </label>
                <select
                  value={selectedState}
                  onChange={handleStateChange}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50/60 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                >
                  {Object.keys(INDIAN_STATES_AND_CITIES).map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  City / Town *
                </label>
                <select
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50/60 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                >
                  {(INDIAN_STATES_AND_CITIES[selectedState] || []).map((ct) => (
                    <option key={ct} value={ct}>
                      {ct}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Business Entity Type
                </label>
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50/60 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                >
                  <option value="Dealer / Retailer">CCTV / IT Dealer</option>
                  <option value="System Integrator">System Integrator</option>
                  <option value="Security Contractor">Security Contractor</option>
                  <option value="Manufacturer">Brand / OEM Manufacturer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Estimated Monthly Volume
                </label>
                <select
                  value={form.volume}
                  onChange={(e) => setForm({ ...form, volume: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-50/60 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                >
                  <option value="₹50K - ₹2L / Month">₹50K - ₹2 Lakhs / Month</option>
                  <option value="₹2L - ₹10L / Month">₹2 Lakhs - ₹10 Lakhs / Month</option>
                  <option value="₹10L+ / Month">₹10 Lakhs+ / Month (Enterprise)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full group py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-slate-950 hover:bg-rtv-orange shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 mt-4"
            >
              <span>Submit Partner Registration</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-mono text-center pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Pure Wholesale Distribution • No Retail Customers Served</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
