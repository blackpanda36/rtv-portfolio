import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { COMPANY_INFO, BRANCHES, INDIAN_STATES_AND_CITIES } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState('chennai');
  const [selectedState, setSelectedState] = useState('Tamil Nadu');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    firmName: '',
    phone: '',
    email: '',
    state: 'Tamil Nadu',
    city: 'Chennai',
    categoryInterest: 'CCTV & Surveillance',
    businessType: 'Dealer / Retailer',
    message: ''
  });

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newState = e.target.value;
    setSelectedState(newState);
    const cities = INDIAN_STATES_AND_CITIES[newState] || [];
    setFormData({
      ...formData,
      state: newState,
      city: cities[0] || ''
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const currentBranch = BRANCHES.find((b) => b.id === activeBranch) || BRANCHES[0];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative border-t border-slate-100">
      {/* Precision corner crosshairs */}
      <div className="absolute top-6 left-6 font-mono text-xs text-slate-300 select-none pointer-events-none">+</div>
      <div className="absolute top-6 right-6 font-mono text-xs text-slate-300 select-none pointer-events-none">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono uppercase tracking-widest mb-4">
            <Building2 className="w-3.5 h-3.5 text-rtv-orange" />
            <span>COMMUNICATIONS // CHANNEL-DESK-11</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 font-heading tracking-tight leading-[1.1] mb-5">
            Authorized Channel Operations & Regional Inquiries
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Direct coordination with our Ritchie Street Chennai central distribution operations, regional warehousing depots, and engineering RMA desks.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-5 rounded-3xl bg-white border border-slate-200/80 hover:border-slate-400/80 shadow-2xs hover:shadow-sm transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-rtv-orange group-hover:scale-105 transition-transform flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                    Phone Inquiries
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-950 font-mono group-hover:text-rtv-orange transition-colors">
                    {COMPANY_INFO.phone}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-5 rounded-3xl bg-white border border-slate-200/80 hover:border-slate-400/80 shadow-2xs hover:shadow-sm transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 group-hover:scale-105 transition-transform flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                    Sales Desk
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-950 font-mono group-hover:text-rtv-orange transition-colors">
                    {COMPANY_INFO.email}
                  </span>
                </div>
              </a>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-center gap-3 p-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs hover:shadow-md transition-all duration-200"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Instant Chat on WhatsApp (+91 98400 01515)</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Operating Hours & Corporate Credential Card */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 space-y-3.5 shadow-2xs">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                <Clock className="w-4 h-4 text-rtv-orange flex-shrink-0" />
                <div>
                  <span className="font-semibold text-slate-950">Business Hours: </span>
                  <span className="text-slate-600">{COMPANY_INFO.hours}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 pt-3 border-t border-slate-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-medium">Authorized Wholesale B2B Distribution Only</span>
              </div>
            </div>

            {/* Interactive Branch Switcher Card */}
            <div className="bg-slate-50/60 border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-2xs">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-4">
                Branch Location Directory
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {BRANCHES.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setActiveBranch(b.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                      activeBranch === b.id
                        ? 'bg-slate-950 text-white shadow-xs'
                        : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200/80'
                    }`}
                  >
                    {b.city} {b.isHeadquarter && '★'}
                  </button>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-950 text-sm font-heading">
                    {currentBranch.city} {currentBranch.isHeadquarter ? '(Central Head Office)' : 'Regional Hub'}
                  </span>
                  <span className="text-[10px] font-mono text-rtv-orange font-bold uppercase">
                    {currentBranch.state}
                  </span>
                </div>
                <div className="text-slate-600 leading-relaxed">
                  {currentBranch.address}
                </div>
                <div className="text-slate-500 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span><strong>Transit:</strong> {currentBranch.transitTime}</span>
                  <span className="font-mono text-slate-900 font-bold">{currentBranch.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Onboarding Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200/80 rounded-3xl p-7 sm:p-10 shadow-sm">
              <div className="mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rtv-orange block mb-1">
                  Commercial Distribution Inquiry
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading tracking-tight">
                  Partner with Real Tech Vision
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                  Submit your business details for authorized dealer registration, bulk price quotes, or brand partnership.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-14 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-950 font-heading">Inquiry Received Successfully</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Real Tech Vision. Our channel onboarding manager will contact you within 2 business hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-3 rounded-full text-xs font-bold text-slate-950 bg-slate-100 hover:bg-slate-200 transition-all mt-4"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50/60 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Company / Firm Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Security Systems"
                        value={formData.firmName}
                        onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50/60 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98400 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50/60 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rajesh@apexsec.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50/60 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* State & City selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        State / Region *
                      </label>
                      <select
                        value={selectedState}
                        onChange={handleStateChange}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50/60 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                      >
                        {Object.keys(INDIAN_STATES_AND_CITIES).map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        City / Town *
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50/60 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                      >
                        {(INDIAN_STATES_AND_CITIES[selectedState] || []).map((ct) => (
                          <option key={ct} value={ct}>
                            {ct}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Business Classification
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50/60 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                      >
                        <option value="Dealer / Retailer">CCTV / IT Dealer & Retailer</option>
                        <option value="System Integrator">System Integrator (SI)</option>
                        <option value="Security Contractor">Security Project Contractor</option>
                        <option value="Hardware Manufacturer">Hardware Brand / Manufacturer</option>
                        <option value="Wholesale Distributor">Regional Sub-Distributor</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Primary Product Category
                      </label>
                      <select
                        value={formData.categoryInterest}
                        onChange={(e) => setFormData({ ...formData, categoryInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50/60 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                      >
                        <option value="CCTV & Surveillance">CCTV Cameras & NVR Systems</option>
                        <option value="Networking & PoE">Networking Switches & Routers</option>
                        <option value="Surveillance Storage">24/7 Surveillance HDDs (Toshiba)</option>
                        <option value="Access Control">Biometrics & Access Control</option>
                        <option value="Power Supplies">SMPS Power Supplies & Enclosures</option>
                        <option value="Complete Portfolio">Complete Brand Portfolio</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Business Requirements / Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please mention your monthly requirement or specific project brands required..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50/60 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-2 py-4 rounded-full font-bold text-sm text-white bg-slate-950 hover:bg-rtv-orange shadow-xs hover:shadow-md transition-all duration-200"
                  >
                    <span>Submit Channel Onboarding Application</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-2 pt-1 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your data is strictly confidential. Pure wholesale channel distribution only.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
