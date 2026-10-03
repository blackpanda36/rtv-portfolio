import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border border-[#E5E8ED] p-6 sm:p-8 shadow-[0_16px_40px_rgba(105,115,140,0.18)] rounded-2xl my-8 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#7D8694] hover:text-[#1D2026] hover:bg-slate-100 rounded-full transition-colors focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6 pb-5 border-b border-[#E5E8ED]">
          <img
            src="/realtech-logo-v2.png"
            alt="Realtech Vision"
            className="h-8 w-auto object-contain flex-shrink-0"
          />
          <div>
            <h2 className="text-lg font-bold text-[#1D2026] font-sans">
              Authorized Dealer Onboarding & Channel Verification
            </h2>
            <p className="text-xs text-[#7D8694]">
              Strictly for verified security dealers, system integrators & IT channel partners.
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#4660E9]/10 text-[#4660E9] border border-[#4660E9]/20 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#1D2026]">Verification Request Received</h3>
            <p className="text-sm text-[#7D8694] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-[#1D2026]">{form.name}</span>. A dedicated regional branch manager from our <span className="font-semibold text-[#1D2026]">{form.state}</span> logistics desk will review your credentials and dispatch your wholesale dealer portal access credentials within 2 business hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-es-primary px-8 py-2.5 text-xs font-semibold rounded-full"
              >
                <span>Return to Homepage</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#1D2026] font-semibold mb-1.5">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Rajesh Kumar"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E5E8ED] text-[#1D2026] rounded-xl focus:outline-none focus:border-[#4660E9] focus:ring-1 focus:ring-[#4660E9] transition-all"
                />
              </div>

              <div>
                <label className="block text-[#1D2026] font-semibold mb-1.5">
                  Business / Firm Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Apex Security Solutions"
                  value={form.firmName}
                  onChange={(e) => setForm({ ...form, firmName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E5E8ED] text-[#1D2026] rounded-xl focus:outline-none focus:border-[#4660E9] focus:ring-1 focus:ring-[#4660E9] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#1D2026] font-semibold mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98400 00000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E5E8ED] text-[#1D2026] rounded-xl focus:outline-none focus:border-[#4660E9] focus:ring-1 focus:ring-[#4660E9] transition-all"
                />
              </div>

              <div>
                <label className="block text-[#1D2026] font-semibold mb-1.5">
                  Business Email *
                </label>
                <input
                  required
                  type="email"
                  placeholder="rajesh@firm.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E5E8ED] text-[#1D2026] rounded-xl focus:outline-none focus:border-[#4660E9] focus:ring-1 focus:ring-[#4660E9] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#1D2026] font-semibold mb-1.5">
                  State / Jurisdiction
                </label>
                <select
                  value={selectedState}
                  onChange={handleStateChange}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E5E8ED] text-[#1D2026] rounded-xl focus:outline-none focus:border-[#4660E9] focus:ring-1 focus:ring-[#4660E9] transition-all"
                >
                  {Object.keys(INDIAN_STATES_AND_CITIES).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#1D2026] font-semibold mb-1.5">
                  City / Commercial Hub
                </label>
                <select
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E5E8ED] text-[#1D2026] rounded-xl focus:outline-none focus:border-[#4660E9] focus:ring-1 focus:ring-[#4660E9] transition-all"
                >
                  {(INDIAN_STATES_AND_CITIES[selectedState] || []).map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#1D2026] font-semibold mb-1.5">
                  Channel Role
                </label>
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E5E8ED] text-[#1D2026] rounded-xl focus:outline-none focus:border-[#4660E9] focus:ring-1 focus:ring-[#4660E9] transition-all"
                >
                  <option>System Integrator (CCTV / IT)</option>
                  <option>Regional Sub-Distributor</option>
                  <option>Security Hardware Retailer</option>
                  <option>Govt / Enterprise Contractor</option>
                </select>
              </div>

              <div>
                <label className="block text-[#1D2026] font-semibold mb-1.5">
                  Monthly Procurement Budget
                </label>
                <select
                  value={form.volume}
                  onChange={(e) => setForm({ ...form, volume: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E5E8ED] text-[#1D2026] rounded-xl focus:outline-none focus:border-[#4660E9] focus:ring-1 focus:ring-[#4660E9] transition-all"
                >
                  <option>₹1 Lakh – ₹5 Lakhs</option>
                  <option>₹5 Lakhs – ₹15 Lakhs</option>
                  <option>₹15 Lakhs – ₹50 Lakhs</option>
                  <option>₹50 Lakhs+ (Super-Dealer)</option>
                </select>
              </div>
            </div>

            {/* Pure distribution covenant acknowledgement */}
            <div className="p-3.5 bg-[#F7F8FA] border border-[#E5E8ED] rounded-xl text-[11px] text-[#7D8694]">
              <span className="font-semibold text-[#1D2026] block mb-0.5">
                Wholesale Dealer Covenant:
              </span>
              Realtech Vision operates on an exclusive B2B model. All partner pricing and credit lines are kept strictly confidential.
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="btn-es-primary w-full py-3 text-xs justify-center rounded-full font-semibold group flex items-center gap-2"
              >
                <span>Submit Verification & Request Access</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

export default PartnerModal;
