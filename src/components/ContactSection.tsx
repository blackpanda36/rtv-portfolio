import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
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
    <section id="contact" className="py-24 bg-slate-50/60 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-rtv-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
            Connect With Realtech Vision
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Reach our central distribution operations at Ritchie Street, Chennai or connect with our regional teams in Delhi, Hyderabad, Bangalore, and Surat.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rtv-orange/60 shadow-xs transition-all flex items-center gap-3.5 group"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-rtv-orange group-hover:scale-105 transition-transform flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                    Phone Inquiries
                  </span>
                  <span className="text-sm font-bold text-slate-900 font-mono group-hover:text-rtv-orange transition-colors">
                    {COMPANY_INFO.phone}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rtv-orange/60 shadow-xs transition-all flex items-center gap-3.5 group"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                    Sales Desk
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono group-hover:text-blue-600 transition-colors">
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
              className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Instant Chat on WhatsApp (+91 98400 01515)</span>
            </a>

            {/* Operating Hours & Corporate Credential Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-xs">
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <Clock className="w-4 h-4 text-rtv-orange flex-shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900">Business Hours: </span>
                  <span>{COMPANY_INFO.hours}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Authorized Wholesale B2B Distribution Only</span>
              </div>
            </div>

            {/* Interactive Branch Switcher Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-3">
                Branch Location Directory
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {BRANCHES.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setActiveBranch(b.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeBranch === b.id
                        ? 'bg-rtv-orange text-white'
                        : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200'
                    }`}
                  >
                    {b.city}
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">
                    {currentBranch.city} {currentBranch.isHeadquarter ? '(Head Office)' : 'Hub'}
                  </span>
                  <span className="text-[10px] font-mono text-rtv-orange font-bold">
                    {currentBranch.state}
                  </span>
                </div>
                <div className="text-slate-600">
                  {currentBranch.address}
                </div>
                <div className="text-slate-500 pt-1">
                  <strong>Transit: </strong> {currentBranch.transitTime}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Onboarding Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
              <div className="mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rtv-orange">
                  Commercial Distribution Inquiry
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-heading mt-1">
                  Partner with Realtech Vision
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Submit your business details for authorized dealer registration, bulk price quotes, or brand partnership.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Inquiry Received Successfully</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out to Realtech Vision. Our channel onboarding manager will contact you within 2 business hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg text-xs font-bold text-rtv-orange bg-orange-50 hover:bg-orange-100 border border-orange-200 transition-all mt-4"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-rtv-orange focus:ring-1 focus:ring-rtv-orange"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-rtv-orange focus:ring-1 focus:ring-rtv-orange"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-rtv-orange focus:ring-1 focus:ring-rtv-orange font-mono"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-rtv-orange focus:ring-1 focus:ring-rtv-orange"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-rtv-orange focus:ring-1 focus:ring-rtv-orange"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-rtv-orange focus:ring-1 focus:ring-rtv-orange"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-rtv-orange focus:ring-1 focus:ring-rtv-orange"
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
                        Primary Product Category of Interest
                      </label>
                      <select
                        value={formData.categoryInterest}
                        onChange={(e) => setFormData({ ...formData, categoryInterest: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-rtv-orange focus:ring-1 focus:ring-rtv-orange"
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
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-rtv-orange focus:ring-1 focus:ring-rtv-orange"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white bg-rtv-orange hover:bg-rtv-orange-700 shadow-xs transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Channel Onboarding Application</span>
                  </button>

                  <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-2">
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
