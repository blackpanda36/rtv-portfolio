import React from 'react';
import {
  Globe,
  ClipboardCheck,
  PhoneCall,
  ShoppingBag,
  ExternalLink,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Truck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface BecomePartnerSectionProps {
  onOpenPartnerModal: () => void;
}

export const BecomePartnerSection: React.FC<BecomePartnerSectionProps> = ({ onOpenPartnerModal }) => {
  const steps = [
    {
      step: '01',
      title: 'Open Dealer Portal or Form',
      description:
        'Access the official Realtech Vision Dealer Portal at realtechvision.in or launch our instant onboarding form right here.',
      icon: Globe,
      iconBg: 'bg-[#FFF3EC] text-[#FD5C08] border-[#FED7AA]',
      actionType: 'portal',
      badge: 'Step 1'
    },
    {
      step: '02',
      title: 'Fill Company Credentials',
      description:
        'Submit your business name, GST number, regional territory, and channel type (CCTV Dealer, System Integrator, or IT Retailer).',
      icon: ClipboardCheck,
      iconBg: 'bg-[#ebf3fc] text-[#0067b8] border-[#b4d6fa]',
      actionType: 'form',
      badge: 'Step 2'
    },
    {
      step: '03',
      title: 'Support Team Verification',
      description:
        'Our dedicated branch manager from your regional logistics desk contacts you within 2 business hours to verify credentials and assign dealer tiers.',
      icon: PhoneCall,
      iconBg: 'bg-[#f4fbf0] text-[#047857] border-[#a7f3d0]',
      actionType: 'support',
      badge: 'Step 3'
    },
    {
      step: '04',
      title: 'Purchase Directly & Save',
      description:
        'Unlock wholesale dealer prices, place bulk orders, reserve stock across 5 regional hubs, and receive 24–48 hour rapid dispatch.',
      icon: ShoppingBag,
      iconBg: 'bg-[#fff8ed] text-[#b45309] border-[#fde68a]',
      actionType: 'purchase',
      badge: 'Step 4'
    }
  ];

  return (
    <section id="how-to-partner" className="py-14 sm:py-20 bg-white border-b border-[#e6e6e6]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFF3EC] border border-[#FED7AA] rounded-[2px] text-xs font-bold text-[#FD5C08] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Channel Onboarding Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#13191E] font-sans tracking-tight leading-tight">
            How to Become an Authorized Partner & Start Purchasing
          </h2>
          <p className="text-sm sm:text-base text-[#5A6573] mt-2 leading-relaxed">
            Follow these 4 simple steps to establish your wholesale account, access tier-1 manufacturer pricing, and order genuine security & IT hardware with protected dealer margins.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#fafafa] hover:bg-white border border-[#e6e6e6] hover:border-[#FD5C08] p-6 rounded-[2px] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group relative"
              >
                {/* Step Connector Indicator for Large Screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-9 -right-3 z-10 w-6 h-6 rounded-full bg-white border border-[#d1d5db] text-[#5A6573] text-[10px] font-bold flex items-center justify-center shadow-2xs">
                    →
                  </div>
                )}

                <div>
                  {/* Step Top Meta */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[2px] bg-white border border-[#d1d5db] text-[#13191E]">
                      {item.badge}
                    </span>
                    <div className={`w-11 h-11 rounded-[3px] border flex items-center justify-center shadow-xs transition-transform group-hover:scale-105 ${item.iconBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#13191E] group-hover:text-[#FD5C08] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#5A6573] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Step Specific Context Button / Link */}
                <div className="pt-4 border-t border-[#ebebeb]">
                  {item.actionType === 'portal' && (
                    <a
                      href={COMPANY_INFO.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#FD5C08] hover:text-[#CA4400] hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>Open realtechvision.in</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {item.actionType === 'form' && (
                    <button
                      onClick={onOpenPartnerModal}
                      className="text-xs font-semibold text-[#0067b8] hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>Fill Onboarding Form</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {item.actionType === 'support' && (
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-700 hover:underline inline-flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Contact Support Desk</span>
                    </a>
                  )}

                  {item.actionType === 'purchase' && (
                    <a
                      href={COMPANY_INFO.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#b45309] hover:underline inline-flex items-center gap-1.5"
                    >
                      <Truck className="w-3.5 h-3.5" />
                      <span>Order Wholesale Lines</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Impact Interactive CTA Bar */}
        <div className="mt-10 p-6 sm:p-8 bg-[#0b192c] text-white rounded-[2px] border border-[#16273e] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-[2px] text-emerald-400 border border-emerald-400/20">
                100% Pure B2B Distribution
              </span>
              <span className="text-xs text-white/60">• Zero Retail Bypass Guarantee</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight">
              Ready to start? Open our portal or submit your dealer request today.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Access the live wholesale portal directly or request priority onboarding with our regional logistics desks across Chennai, Delhi, Hyderabad, Bangalore, and Surat.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            {/* Direct Portal Link */}
            <a
              href={COMPANY_INFO.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-btn-primary text-xs sm:text-sm py-2 px-4 shadow-sm inline-flex items-center gap-2 group"
            >
              <span>Open Dealer Portal (realtechvision.in)</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Quick Registration Form Trigger */}
            <button
              onClick={onOpenPartnerModal}
              className="bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 text-xs sm:text-sm font-semibold py-2 px-4 rounded-[2px] transition-colors inline-flex items-center gap-1.5"
            >
              <span>Fill Partner Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* WhatsApp Direct */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold py-2 px-4 rounded-[2px] transition-colors inline-flex items-center gap-1.5 shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>

        {/* Benefits Checklist Footer Bar */}
        <div className="mt-6 pt-6 border-t border-[#e6e6e6] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#5A6573]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span><strong>Zero registration fees:</strong> Verification is 100% free for bona fide channel partners.</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span><strong>2-Hour response:</strong> Immediate dispatch of portal credentials by regional teams.</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span><strong>Margin protection:</strong> Direct manufacturer stock without retail end-user bidding.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BecomePartnerSection;
