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
      accentBorder: 'border-t-4 border-t-[#FD5C08]',
      bridgeGradient: 'bg-gradient-to-r from-[#FD5C08] to-[#FD5C08]',
      nodeColor: 'border-[#FD5C08] text-[#FD5C08]',
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
      accentBorder: 'border-t-4 border-t-[#0067b8]',
      bridgeGradient: 'bg-gradient-to-r from-[#0067b8] to-[#047857]',
      nodeColor: 'border-[#0067b8] text-[#0067b8]',
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
      accentBorder: 'border-t-4 border-t-[#047857]',
      bridgeGradient: 'bg-gradient-to-r from-[#047857] to-[#b45309]',
      nodeColor: 'border-[#047857] text-[#047857]',
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
      accentBorder: 'border-t-4 border-t-[#b45309]',
      bridgeGradient: 'bg-[#b45309]',
      nodeColor: 'border-[#b45309] text-[#b45309]',
      actionType: 'purchase',
      badge: 'Step 4'
    }
  ];

  return (
    <section id="how-to-partner" className="py-16 sm:py-20 bg-white border-b border-[#E5E8ED]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered EasySellers Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4660E9] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Channel Onboarding Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D2026] font-sans tracking-tight leading-tight">
            How to Become an Authorized Partner & Start Purchasing
          </h2>
          <p className="text-sm sm:text-base text-[#7D8694] mt-2.5 leading-relaxed max-w-2xl mx-auto">
            Follow these 4 simple steps to establish your wholesale account, access tier-1 manufacturer pricing, and order genuine security & IT hardware with protected dealer margins.
          </p>
        </div>

        {/* 4 Steps Grid with Connected Lines */}
        <div className="relative">
          {/* Continuous dashed connecting guide line across all 4 boxes */}
          <div className="hidden lg:block absolute top-1/2 left-6 right-6 h-[2px] border-t-2 border-dashed border-[#4660E9]/25 -translate-y-1/2 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <React.Fragment key={item.step}>
                  <div
                    className="bg-white hover:bg-white border border-[#E5E8ED] hover:border-[#4660E9]/50 p-6 rounded-2xl shadow-es-card hover:shadow-es-card-hover transition-all duration-300 flex flex-col justify-between group relative z-10"
                  >
                    {/* Circuit Connection Node: Incoming (Left Edge) */}
                    {index > 0 && (
                      <div className="hidden lg:block absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#4660E9] border border-white z-20" />
                    )}

                    {/* Circuit Connection Node: Outgoing (Right Edge) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#4660E9] border border-white z-20" />
                    )}

                    {/* Prominent Connected Line Bridge (Desktop lg) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:flex items-center justify-center absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-8 z-30 pointer-events-none">
                        {/* Solid 3px connected bridge line with EasySellers blue gradient */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-gradient-to-r from-[#4660E9] to-[#6880FF] shadow-[0_0_8px_rgba(70,96,233,0.35)]" />
                        {/* Circular connector node with arrow */}
                        <div className="relative w-6 h-6 rounded-full bg-white border-2 border-[#4660E9] text-[#4660E9] flex items-center justify-center shadow-md">
                          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      </div>
                    )}

                    {/* Tablet Connected Line Bridge (md:grid-cols-2) */}
                    {(index === 0 || index === 2) && (
                      <div className="hidden md:flex lg:hidden items-center justify-center absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-8 z-30 pointer-events-none">
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-[#4660E9] shadow-sm" />
                        <div className="relative w-6 h-6 rounded-full bg-white border-2 border-[#4660E9] text-[#4660E9] flex items-center justify-center shadow-md">
                          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      </div>
                    )}

                    <div>
                      {/* Step Top Meta */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#F7F8FA] border border-[#E5E8ED] text-[#2E3E51]">
                          {item.badge}
                        </span>
                        <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shadow-xs transition-transform group-hover:scale-105 ${item.iconBg}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-[#1D2026] group-hover:text-[#4660E9] transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs text-[#7D8694] leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    {/* Step Specific Context Button / Link */}
                    <div className="pt-4 border-t border-[#F0F2F5]">
                      {item.actionType === 'portal' && (
                        <a
                          href={COMPANY_INFO.portalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-[#4660E9] hover:underline inline-flex items-center gap-1.5"
                        >
                          <span>Open realtechvision.in</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {item.actionType === 'form' && (
                        <button
                          onClick={onOpenPartnerModal}
                          className="text-xs font-semibold text-[#4660E9] hover:underline inline-flex items-center gap-1.5"
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
                          className="text-xs font-semibold text-[#4660E9] hover:underline inline-flex items-center gap-1.5"
                        >
                          <Truck className="w-3.5 h-3.5" />
                          <span>Order Wholesale Lines</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Mobile Vertical Connected Line between cards */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex flex-col items-center justify-center -my-2 py-1 z-20 relative">
                      <div className="w-[3px] h-3 bg-[#4660E9]" />
                      <div className="w-6 h-6 rounded-full bg-white border-2 border-[#4660E9] text-[#4660E9] flex items-center justify-center text-xs font-bold shadow-xs">
                        ↓
                      </div>
                      <div className="w-[3px] h-3 bg-[#4660E9]" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* EasySellers-Style Footer Banner CTA Bar */}
        <div className="mt-12 p-8 sm:p-10 bg-gradient-to-r from-[#0c1445] via-[#1a237e] to-[#0a0f35] text-white rounded-2xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-white/10 px-3 py-0.5 rounded-full text-emerald-400 border border-emerald-400/20">
                100% Pure B2B Distribution
              </span>
              <span className="text-xs text-white/60">• Zero Retail Bypass Guarantee</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Ready to start? Open our portal or submit your dealer request today.
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
              Access the live wholesale portal directly or request priority onboarding with our regional logistics desks across Chennai, Delhi, Hyderabad, Bangalore, and Surat.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            {/* Direct Portal Link (Pill White Button) */}
            <a
              href={COMPANY_INFO.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-es-white text-xs sm:text-sm py-2.5 px-5 shadow-md inline-flex items-center gap-2 group"
            >
              <span>Open Dealer Portal</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Quick Registration Form Trigger (Pill Outline) */}
            <button
              onClick={onOpenPartnerModal}
              className="rounded-full border border-white/40 hover:border-white text-white hover:bg-white/10 text-xs sm:text-sm font-semibold py-2.5 px-5 transition-all inline-flex items-center gap-1.5"
            >
              <span>Fill Partner Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* WhatsApp Direct */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold py-2.5 px-5 rounded-full transition-all inline-flex items-center gap-1.5 shadow-xs"
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
