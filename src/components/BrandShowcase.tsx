import React, { useState, useEffect } from 'react';
import { ArrowRight, LayoutGrid, Orbit } from 'lucide-react';
import { PORTAL_BRANDS } from '../data/companyData';
import { BrandSpiralOrbit } from './BrandSpiralOrbit';

interface BrandShowcaseProps {
  onOpenPartnerModal: () => void;
}

export const BrandShowcase: React.FC<BrandShowcaseProps> = ({ onOpenPartnerModal }) => {
  const [viewMode, setViewMode] = useState<'spiral' | 'grid'>('spiral');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Detect system reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  const showSpiral = viewMode === 'spiral' && !prefersReducedMotion;

  return (
    <section id="brands" className="py-16 sm:py-20 bg-[#F7F8FA] border-b border-[#E5E8ED]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered EasySellers Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D2026] font-sans tracking-tight">
            Premier Technology <span className="text-[#FD5C08]">Brand Alliances</span>
          </h2>
          <p className="text-sm sm:text-base text-[#7D8694] mt-2.5 leading-relaxed max-w-2xl mx-auto">
            Direct factory-authorized distribution of <span className="text-[#FD5C08] font-semibold">{PORTAL_BRANDS.length} leading brands</span> in video surveillance, networking, storage, and access hardware.
          </p>

          {/* Desktop Layout Switcher (Spiral Orbit vs Responsive Grid) */}
          {!prefersReducedMotion && (
            <div className="hidden lg:inline-flex items-center gap-1 mt-6 p-1 bg-white border border-[#E5E8ED] rounded-full shadow-2xs">
              <button
                type="button"
                onClick={() => setViewMode('spiral')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  viewMode === 'spiral'
                    ? 'bg-[#FFF3EC] text-[#FD5C08] border border-[#FED7AA] shadow-xs'
                    : 'text-[#7D8694] hover:text-[#1D2026]'
                }`}
                aria-pressed={viewMode === 'spiral'}
              >
                <Orbit className="w-3.5 h-3.5" />
                <span>Spiral Orbit</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[#FFF3EC] text-[#FD5C08] border border-[#FED7AA] shadow-xs'
                    : 'text-[#7D8694] hover:text-[#1D2026]'
                }`}
                aria-pressed={viewMode === 'grid'}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Standard Grid</span>
              </button>
            </div>
          )}
        </div>

        {/* 1. Spiral/Orbital View (Desktop Large Screens when selected & reduced motion is off) */}
        {showSpiral ? (
          <div className="hidden lg:block">
            <BrandSpiralOrbit onOpenPartnerModal={onOpenPartnerModal} />
          </div>
        ) : null}

        {/* 2. Responsive Grid View (Always on Mobile/Tablet <1024px, or when Grid mode selected, or when prefers-reduced-motion) */}
        <div className={showSpiral ? 'lg:hidden' : 'block'}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5">
            {PORTAL_BRANDS.map((b) => (
              <div
                key={b.name}
                className="p-4 bg-white hover:bg-white border border-[#E5E8ED] hover:border-[#FD5C08]/50 rounded-xl transition-all duration-200 flex flex-col justify-between group shadow-2xs hover:shadow-es-card"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xl">{b.emoji}</span>
                  <span className="text-[10px] text-[#047857] font-bold uppercase tracking-wider bg-[#f4fbf0] px-2 py-0.5 rounded-full border border-[#047857]/15">
                    Authorized
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#1D2026] group-hover:text-[#FD5C08] transition-colors tracking-tight">
                    {b.name}
                  </h3>
                  <p className="text-[11px] text-[#7D8694] mt-0.5 line-clamp-1">
                    {b.sub}
                  </p>
                </div>

                <div className="pt-2.5 mt-2.5 border-t border-[#F0F2F5] text-right">
                  <button
                    onClick={onOpenPartnerModal}
                    className="text-[11px] font-semibold text-[#FD5C08] hover:text-[#CA4400] hover:underline"
                  >
                    Explore Brand →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Bottom Pill Action */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenPartnerModal}
            className="btn-es-outline text-xs sm:text-sm py-2 px-6 shadow-2xs"
          >
            <span>Request Brand Authorization Onboarding</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default BrandShowcase;
