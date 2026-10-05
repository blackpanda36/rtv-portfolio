import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { RotateCcw, RotateCw, Pause, Play } from 'lucide-react';
import { PORTAL_BRANDS } from '../data/companyData';
import { PortalBrand } from '../types';

interface BrandSpiralOrbitProps {
  onOpenPartnerModal: () => void;
}

export const BrandSpiralOrbit: React.FC<BrandSpiralOrbitProps> = ({ onOpenPartnerModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(false);
  isPausedRef.current = isPaused;

  const angleRef = useRef(0);
  const velocityRef = useRef(0.0012); // smooth baseline drift (~0.07° per frame)
  const isHoveredRef = useRef(false);
  const isCardFocusedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const isInViewRef = useRef(true);
  const rafIdRef = useRef<number | null>(null);

  // Drag interaction tracking
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const lastXRef = useRef(0);
  const dragDistRef = useRef(0);
  const suppressClickUntilRef = useRef(0);

  // Spiral geometry parameters
  const totalCards = PORTAL_BRANDS.length; // 27
  const R_MIN = 175;
  const R_MAX = 475;
  const TILT_ASPECT = 0.44; // 3D perspective tilt
  const MAX_SPAN_Y = R_MAX * TILT_ASPECT; // ~209px

  // Generate SVG orbital spiral guide path
  const svgSpiralPath = useMemo(() => {
    const points: string[] = [];
    const steps = 120;
    for (let step = 0; step <= steps; step++) {
      const t = step / steps;
      const r = R_MIN + (R_MAX - R_MIN) * t;
      const theta = t * 4.8 * Math.PI;
      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta) * TILT_ASPECT;
      points.push(`${step === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    return points.join(' ');
  }, []);

  // Direct DOM render function for 60-120fps GPU performance
  const renderFrame = useCallback((currentAngle: number) => {
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const t = i / (totalCards - 1);
      const r = R_MIN + (R_MAX - R_MIN) * t;
      const theta = t * 4.8 * Math.PI + currentAngle;

      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta) * TILT_ASPECT;

      // Normalized depth metric: 0 (furthest back) to 1 (front nearest viewer)
      const normDepth = Math.max(0, Math.min(1, (y + MAX_SPAN_Y) / (2 * MAX_SPAN_Y)));

      // Depth-based scaling: background cards are ~0.72 scale, foreground cards are ~1.05 scale
      const scale = 0.72 + 0.33 * normDepth;
      // Depth-based opacity: background cards are ~0.55 opacity, foreground cards are 1.0 opacity
      const opacity = 0.55 + 0.45 * normDepth;
      // Depth-based z-index: front cards overlay back cards naturally
      const zIndex = Math.round(normDepth * 80) + 10;

      const isFocused = el.dataset.focused === 'true';
      const isCardHovered = el.dataset.hovered === 'true';

      if (isFocused || isCardHovered) {
        el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${Math.max(scale, 1.10)})`;
        el.style.opacity = '1';
        el.style.zIndex = '999';
      } else {
        el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`;
        el.style.opacity = `${opacity.toFixed(3)}`;
        el.style.zIndex = `${zIndex}`;
      }
    });
  }, [totalCards, MAX_SPAN_Y]);

  // Main single RAF animation loop
  useEffect(() => {
    const loop = () => {
      if (!isInViewRef.current) {
        rafIdRef.current = null;
        return;
      }

      if (isDraggingRef.current) {
        // Controlled directly by pointer move
      } else if (isHoveredRef.current || isCardFocusedRef.current || isPausedRef.current) {
        // Smooth deceleration to stop
        velocityRef.current *= 0.86;
        if (Math.abs(velocityRef.current) < 0.00001) {
          velocityRef.current = 0;
        }
      } else {
        // Smooth ramp back to baseline drift
        const baseSpeed = 0.0012;
        velocityRef.current += (baseSpeed - velocityRef.current) * 0.04;
      }

      angleRef.current = (angleRef.current + velocityRef.current) % (2 * Math.PI);
      renderFrame(angleRef.current);

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [renderFrame]);

  // IntersectionObserver to pause when section leaves viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        isInViewRef.current = visible;
        if (visible && !rafIdRef.current) {
          // Restart loop
          const loop = () => {
            if (!isInViewRef.current) {
              rafIdRef.current = null;
              return;
            }

            if (!isDraggingRef.current) {
              if (isHoveredRef.current || isCardFocusedRef.current || isPausedRef.current) {
                velocityRef.current *= 0.86;
                if (Math.abs(velocityRef.current) < 0.00001) velocityRef.current = 0;
              } else {
                const baseSpeed = 0.0012;
                velocityRef.current += (baseSpeed - velocityRef.current) * 0.04;
              }
            }

            angleRef.current = (angleRef.current + velocityRef.current) % (2 * Math.PI);
            renderFrame(angleRef.current);
            rafIdRef.current = requestAnimationFrame(loop);
          };
          rafIdRef.current = requestAnimationFrame(loop);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [renderFrame]);

  // Drag interaction handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return; // Only primary mouse button or touch
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}

    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartYRef.current = e.clientY;
    lastXRef.current = e.clientX;
    dragDistRef.current = 0;

    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
      containerRef.current.style.willChange = 'transform';
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const currentX = e.clientX;
    const deltaX = currentX - lastXRef.current;
    lastXRef.current = currentX;

    const totalDist = Math.hypot(currentX - dragStartXRef.current, e.clientY - dragStartYRef.current);
    dragDistRef.current = Math.max(dragDistRef.current, totalDist);

    // Angular sensitivity: 0.004 radians per px
    const angularDelta = deltaX * 0.004;
    angleRef.current += angularDelta;
    velocityRef.current = angularDelta; // carry momentum upon release

    renderFrame(angleRef.current);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}

    isDraggingRef.current = false;

    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
      containerRef.current.style.willChange = 'auto';
    }

    // If dragged more than 6px, suppress immediate click triggers
    if (dragDistRef.current > 6) {
      suppressClickUntilRef.current = Date.now() + 200;
    }
  };

  // Keyboard navigation & step rotation
  const handleStepRotate = (deltaRads: number) => {
    angleRef.current += deltaRads;
    velocityRef.current = deltaRads * 0.2;
    renderFrame(angleRef.current);
  };

  // Safe click handler for card exploration
  const handleSafeAction = (callback: () => void) => {
    if (Date.now() < suppressClickUntilRef.current) return;
    callback();
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
      className="relative w-full h-[680px] sm:h-[720px] select-none touch-none cursor-grab overflow-hidden flex items-center justify-center"
      style={{ perspective: 1200 }}
      role="region"
      aria-label="Interactive 27 Brand Alliances Orbital Spiral"
    >
      {/* Subtle Orbital Background Visuals */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* SVG Spiral Orbit Guide Track */}
        <svg
          viewBox="-550 -260 1100 520"
          className="w-full h-full max-w-[1200px] max-h-[580px] overflow-visible"
        >
          <path
            d={svgSpiralPath}
            fill="none"
            stroke="#FD5C08"
            strokeOpacity="0.16"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          {/* Outer ring accent */}
          <ellipse
            cx="0"
            cy="0"
            rx="475"
            ry={475 * TILT_ASPECT}
            fill="none"
            stroke="#4660E9"
            strokeOpacity="0.08"
            strokeWidth="1"
            strokeDasharray="8 8"
          />
          {/* Inner core ring */}
          <ellipse
            cx="0"
            cy="0"
            rx="160"
            ry={160 * TILT_ASPECT}
            fill="none"
            stroke="#FD5C08"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
        </svg>

        {/* Ambient radial center glow */}
        <div className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-[#FD5C08]/10 via-[#FFF3EC]/60 to-transparent blur-2xl pointer-events-none" />
      </div>

      {/* Center Gravitational Hub */}
      <div className="absolute z-20 pointer-events-auto flex flex-col items-center justify-center text-center">
        <div className="w-36 h-36 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#FED7AA] shadow-es-card flex flex-col items-center justify-center p-3 relative group transition-transform hover:scale-105">
          {/* Orbit rotating ring accent */}
          <div className="absolute inset-[-4px] rounded-full border border-dashed border-[#FD5C08]/40 animate-[spin_24s_linear_infinite]" />

          <span className="text-xs font-mono font-bold text-[#FD5C08] tracking-widest uppercase mb-0.5">
            Network
          </span>
          <span className="text-xl font-extrabold text-[#1D2026] tracking-tight">
            27 Brands
          </span>
          <span className="text-[10px] text-[#7D8694] font-medium leading-tight mt-0.5">
            Authorized Tier-1
          </span>

          <div className="mt-2 flex items-center gap-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleStepRotate(-Math.PI / 8);
              }}
              title="Rotate counter-clockwise"
              className="w-6 h-6 rounded-full bg-[#F7F8FA] hover:bg-[#FFF3EC] hover:text-[#FD5C08] text-[#5A6573] border border-[#E5E8ED] flex items-center justify-center text-xs transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsPaused((prev) => !prev);
              }}
              title={isPaused ? 'Resume auto-drift' : 'Pause auto-drift'}
              className="w-6 h-6 rounded-full bg-[#FFF3EC] text-[#FD5C08] border border-[#FED7AA] flex items-center justify-center text-xs transition-colors hover:bg-[#FD5C08] hover:text-white"
            >
              {isPaused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3 fill-current" />}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleStepRotate(Math.PI / 8);
              }}
              title="Rotate clockwise"
              className="w-6 h-6 rounded-full bg-[#F7F8FA] hover:bg-[#FFF3EC] hover:text-[#FD5C08] text-[#5A6573] border border-[#E5E8ED] flex items-center justify-center text-xs transition-colors"
            >
              <RotateCw className="w-3 h-3" />
            </button>
          </div>
        </div>

        <span className="text-[11px] font-medium text-[#7D8694] mt-2.5 bg-white/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#E5E8ED]/80 shadow-2xs">
          Drag to spin • Click to explore
        </span>
      </div>

      {/* 27 Orbital Brand Cards */}
      {PORTAL_BRANDS.map((b: PortalBrand, index: number) => (
        <div
          key={b.name}
          ref={(el) => {
            cardRefs.current[index] = el;
          }}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '210px',
            height: '135px',
            marginLeft: '-105px',
            marginTop: '-67.5px',
            transformOrigin: 'center center',
          }}
          tabIndex={0}
          role="article"
          aria-label={`Authorized brand: ${b.name}, Category: ${b.sub}`}
          onFocus={(e) => {
            e.currentTarget.dataset.focused = 'true';
            isCardFocusedRef.current = true;
          }}
          onBlur={(e) => {
            e.currentTarget.dataset.focused = 'false';
            isCardFocusedRef.current = false;
          }}
          onMouseEnter={(e) => {
            e.currentTarget.dataset.hovered = 'true';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.dataset.hovered = 'false';
          }}
          onClick={() => handleSafeAction(onOpenPartnerModal)}
          className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FD5C08] rounded-xl transition-shadow duration-200"
        >
          {/* Card Body - Content Preserved Identically */}
          <div className="w-full h-full p-3.5 bg-white border border-[#E5E8ED] hover:border-[#FD5C08]/60 rounded-xl transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-es-card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xl flex-shrink-0">{b.emoji}</span>
              <span className="text-[10px] text-[#047857] font-bold uppercase tracking-wider bg-[#f4fbf0] px-2 py-0.5 rounded-full border border-[#047857]/15">
                Authorized
              </span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#1D2026] group-hover:text-[#FD5C08] transition-colors tracking-tight truncate">
                {b.name}
              </h3>
              <p className="text-[11px] text-[#7D8694] mt-0.5 line-clamp-1 leading-snug">
                {b.sub}
              </p>
            </div>

            <div className="pt-2 mt-1 border-t border-[#F0F2F5] text-right">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSafeAction(onOpenPartnerModal);
                }}
                className="text-[11px] font-semibold text-[#FD5C08] hover:text-[#CA4400] hover:underline inline-flex items-center gap-0.5"
              >
                <span>Explore Brand</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandSpiralOrbit;
