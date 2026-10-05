/**
 * 3D CIRCULAR SPIRAL ORBIT ARCHITECTURE & MATHEMATICAL MODEL
 *
 * 1. Geometric Distribution (3D Circular Orbit):
 *    - Total Cards (N) = 27
 *    - Cards are distributed uniformly around a 3D circular ring:
 *        θ_i = i * (2π / 27) + globalRotation(scroll, drag, drift)
 *    - Radii (Perspective 3D Ellipse):
 *        Radius X (horizontal width) = 480px on desktop (360px tablet, 220px mobile)
 *        Radius Z (depth into screen) = 360px on desktop (270px tablet, 160px mobile)
 *        Radius Y (vertical tilt) = 110px on desktop (80px tablet, 50px mobile)
 *
 * 2. 3D Coordinates (transform-style: preserve-3d, perspective: 1200px):
 *    - Position:
 *        X_i = RadiusX * sin(θ_i)
 *        Z_i = RadiusZ * cos(θ_i)  [+RadiusZ = foreground nearest viewer, -RadiusZ = background]
 *        Y_i = RadiusY * cos(θ_i)  [Front cards sit lower (+Y), back cards sit higher (-Y)]
 *    - Card Y-Axis Rotation (Facing the Viewer):
 *        rotateY_i = -atan2(X_i, Z_i) * (180° / π) * 0.68
 *        Cards follow the circular curve while angling inward to face the viewer.
 *        Front card (Z = +RadiusZ) faces directly forward (rotateY = 0°).
 *    - Card X-Axis Tilt:
 *        rotateX_i = -(Y_i / 300) * 8°
 *
 * 3. Card Sizing & Depth Scaling:
 *    - Substantially enlarged card dimensions: width 260px × height 165px.
 *    - Normalized Z-depth: d_z = (Z_i + RadiusZ) / (2 * RadiusZ) ∈ [0, 1]
 *    - Scale: 0.78 + 0.38 * d_z (0.78x in back, 1.16x in front, 1.22x on hover)
 *    - Opacity: 0.60 + 0.40 * d_z (0.60 in back, 1.0 in front)
 *    - zIndex: Math.round(d_z * 85) + 10
 *
 * 4. Clean Central Hub:
 *    - The vertical guide axis lines behind the circle have been completely removed.
 *    - Only the clean, glassmorphic central circular badge remains with interactive controls.
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { RotateCcw, RotateCw, Pause, Play, ChevronDown } from 'lucide-react';
import { PORTAL_BRANDS } from '../data/companyData';
import { PortalBrand } from '../types';

interface BrandSpiralOrbitProps {
  onOpenPartnerModal: () => void;
}

const TOTAL_CARDS = PORTAL_BRANDS.length; // 27
const ANGLE_STEP_RAD = (2 * Math.PI) / TOTAL_CARDS; // ~13.33° per card for uniform circular distribution

export const BrandSpiralOrbit: React.FC<BrandSpiralOrbitProps> = ({ onOpenPartnerModal }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Responsive orbital dimensions
  const [dimensions, setDimensions] = useState({
    radiusX: 480,
    radiusZ: 360,
    radiusY: 110,
    viewportHeight: 800,
    cardWidth: 260,
    cardHeight: 165,
    isMobile: false
  });

  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(false);
  isPausedRef.current = isPaused;

  // Rotation and motion tracking
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const dragAngleOffsetRef = useRef(0);
  const dragVelocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const lastXRef = useRef(0);
  const dragDistRef = useRef(0);
  const suppressClickUntilRef = useRef(0);
  const isInViewRef = useRef(true);
  const rafIdRef = useRef<number | null>(null);

  // Resize listener for responsive orbital geometry
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const mobile = w < 768;
      const tablet = w < 1024;
      const large = w >= 1440;

      setDimensions({
        radiusX: mobile ? 220 : tablet ? 360 : large ? 520 : 480,
        radiusZ: mobile ? 160 : tablet ? 270 : large ? 390 : 360,
        radiusY: mobile ? 50 : tablet ? 85 : 110,
        viewportHeight: h,
        cardWidth: mobile ? 210 : tablet ? 240 : 260,
        cardHeight: mobile ? 140 : tablet ? 155 : 165,
        isMobile: mobile
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 3D Circular Orbit Render Function
  const renderCircleOrbit = useCallback((progress: number, dragAngle: number) => {
    const { radiusX, radiusZ, radiusY } = dimensions;

    // Full 360° rotation tied to scroll progress (2 full revolutions across the track)
    const scrollAngle = progress * 2 * Math.PI * 2;
    const totalAngle = scrollAngle + dragAngle;

    cardRefs.current.forEach((el, i) => {
      if (!el) return;

      // Angular position around the circle
      const theta = i * ANGLE_STEP_RAD + totalAngle;

      // True 3D Circular Orbit coordinates with vertical elevation tilt
      const x = radiusX * Math.sin(theta);
      const z = radiusZ * Math.cos(theta); // +radiusZ is nearest to camera (foreground)
      const y = radiusY * Math.cos(theta); // Front cards sit lower (+y), back cards higher (-y)

      // Normalized depth in [0, 1]
      const normDepth = Math.max(0, Math.min(1, (z + radiusZ) / (2 * radiusZ)));

      // Y-axis rotation: cards follow the circle while angling inward to face the viewer
      const angleToViewer = Math.atan2(x, z) * (180 / Math.PI);
      const rotateY = -angleToViewer * 0.68;

      // Subtle X-axis tilt
      const rotateX = -(y / 300) * 8;

      // Depth scaling: front cards are larger (1.16x), back cards are smaller (0.78x)
      const scale = 0.78 + 0.38 * normDepth;

      // Opacity: front cards are crisp (1.0), back cards slightly atmospheric (0.62)
      const opacity = (0.62 + 0.38 * normDepth).toFixed(3);
      const zIndex = Math.round(normDepth * 85) + 10;

      const isFocused = el.dataset.focused === 'true';
      const isHovered = el.dataset.hovered === 'true';

      if (isFocused || isHovered) {
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, ${(z + 50).toFixed(1)}px) rotateY(${rotateY.toFixed(1)}deg) rotateX(${rotateX.toFixed(1)}deg) scale(${Math.max(scale, 1.22)})`;
        el.style.opacity = '1';
        el.style.zIndex = '999';
      } else {
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, ${z.toFixed(1)}px) rotateY(${rotateY.toFixed(1)}deg) rotateX(${rotateX.toFixed(1)}deg) scale(${scale.toFixed(3)})`;
        el.style.opacity = `${opacity}`;
        el.style.zIndex = `${zIndex}`;
      }
    });
  }, [dimensions]);

  // Single RAF animation loop with smooth lerp
  useEffect(() => {
    const runLoop = () => {
      if (!isInViewRef.current) {
        rafIdRef.current = null;
        return;
      }

      // Smooth scroll lerp damping
      const target = targetProgressRef.current;
      const diff = target - currentProgressRef.current;
      if (Math.abs(diff) > 0.0001) {
        currentProgressRef.current += diff * 0.085;
      } else {
        currentProgressRef.current = target;
      }

      // Drag inertia glide decay
      if (!isDraggingRef.current) {
        if (Math.abs(dragVelocityRef.current) > 0.0001) {
          dragAngleOffsetRef.current += dragVelocityRef.current;
          dragVelocityRef.current *= 0.94;
        }
      }

      // Continuous gentle auto-drift
      if (!isPausedRef.current && !isDraggingRef.current && Math.abs(diff) < 0.001) {
        dragAngleOffsetRef.current += 0.001; // subtle background orbit drift
      }

      renderCircleOrbit(currentProgressRef.current, dragAngleOffsetRef.current);

      rafIdRef.current = requestAnimationFrame(runLoop);
    };

    // Scroll listener for sticky track progress
    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalScrollable = rect.height - vh;

      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      targetProgressRef.current = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver to pause loop offscreen
    const track = trackRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        isInViewRef.current = visible;
        if (visible) {
          if (!rafIdRef.current) {
            rafIdRef.current = requestAnimationFrame(runLoop);
          }
        } else {
          if (rafIdRef.current) {
            cancelAnimationFrame(rafIdRef.current);
            rafIdRef.current = null;
          }
        }
      },
      { threshold: 0.02 }
    );

    if (track) observer.observe(track);

    // Initial launch
    rafIdRef.current = requestAnimationFrame(runLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (track) observer.unobserve(track);
      observer.disconnect();
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [renderCircleOrbit]);

  // Drag-to-spin interaction handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}

    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    dragDistRef.current = 0;

    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    dragDistRef.current += Math.abs(deltaX);

    // Angular delta
    const angularDelta = deltaX * 0.0035;
    dragAngleOffsetRef.current += angularDelta;
    dragVelocityRef.current = angularDelta;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}

    isDraggingRef.current = false;

    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }

    if (dragDistRef.current > 6) {
      suppressClickUntilRef.current = Date.now() + 200;
    }
  };

  const handleStepRotate = (deltaRads: number) => {
    dragAngleOffsetRef.current += deltaRads;
    dragVelocityRef.current = deltaRads * 0.15;
  };

  const handleSafeAction = (callback: () => void) => {
    if (Date.now() < suppressClickUntilRef.current) return;
    callback();
  };

  const { cardWidth, cardHeight } = dimensions;

  return (
    // Outer scroll track: 240vh height gives smooth, comfortable pinning while scrolling
    <div
      ref={trackRef}
      className="relative w-full h-[240vh]"
      role="region"
      aria-label="3D Circular Orbit of 27 Brand Alliances"
    >
      {/* Sticky pinned container: locks in viewport during scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 select-none">
        
        {/* 3D Circular Orbit Stage Container */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative w-full flex-grow flex items-center justify-center cursor-grab touch-none"
          style={{
            perspective: 1200,
            perspectiveOrigin: 'center center',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Central Circular Hub Badge (NO vertical lines behind it) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#FED7AA] shadow-es-card flex flex-col items-center justify-center p-3 text-center relative group transition-transform hover:scale-105">
              {/* Rotating subtle accent border */}
              <div className="absolute inset-[-4px] rounded-full border border-dashed border-[#FD5C08]/35 animate-[spin_28s_linear_infinite]" />

              <span className="text-[10px] font-mono font-bold text-[#FD5C08] uppercase tracking-wider">
                Authorized
              </span>
              <span className="text-base sm:text-lg font-extrabold text-[#1D2026] tracking-tight leading-tight mt-0.5">
                27 Brands
              </span>
              <span className="text-[10px] text-[#7D8694] font-medium leading-tight mt-0.5">
                Tier-1 Network
              </span>

              {/* Step Rotate Controls */}
              <div className="flex items-center gap-1.5 mt-2">
                <button
                  type="button"
                  onClick={() => handleStepRotate(-Math.PI / 8)}
                  title="Rotate Left"
                  className="w-5 h-5 rounded-full bg-[#F7F8FA] hover:bg-[#FFF3EC] hover:text-[#FD5C08] text-[#5A6573] border border-[#E5E8ED] flex items-center justify-center text-[10px] transition-colors"
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsPaused((p) => !p)}
                  title={isPaused ? 'Resume Drift' : 'Pause Drift'}
                  className="w-5 h-5 rounded-full bg-[#FFF3EC] text-[#FD5C08] border border-[#FED7AA] flex items-center justify-center text-[10px] transition-colors hover:bg-[#FD5C08] hover:text-white"
                >
                  {isPaused ? <Play className="w-2.5 h-2.5 fill-current" /> : <Pause className="w-2.5 h-2.5 fill-current" />}
                </button>
                <button
                  type="button"
                  onClick={() => handleStepRotate(Math.PI / 8)}
                  title="Rotate Right"
                  className="w-5 h-5 rounded-full bg-[#F7F8FA] hover:bg-[#FFF3EC] hover:text-[#FD5C08] text-[#5A6573] border border-[#E5E8ED] flex items-center justify-center text-[10px] transition-colors"
                >
                  <RotateCw className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 27 3D Circular Orbit Brand Cards (Larger Size: 260px x 165px) */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ transformStyle: 'preserve-3d' }}
          >
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
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  marginLeft: `-${cardWidth / 2}px`,
                  marginTop: `-${cardHeight / 2}px`,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  willChange: 'transform, opacity'
                }}
                tabIndex={0}
                role="article"
                aria-label={`Authorized brand: ${b.name}, Category: ${b.sub}`}
                onFocus={(e) => {
                  e.currentTarget.dataset.focused = 'true';
                }}
                onBlur={(e) => {
                  e.currentTarget.dataset.focused = 'false';
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.dataset.hovered = 'true';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.dataset.hovered = 'false';
                }}
                onClick={() => handleSafeAction(onOpenPartnerModal)}
                className="pointer-events-auto cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FD5C08] rounded-2xl transition-shadow duration-200"
              >
                {/* Enlarged Card Body */}
                <div className="w-full h-full p-4 sm:p-5 bg-white border border-[#E5E8ED] hover:border-[#FD5C08]/60 rounded-2xl transition-all duration-200 flex flex-col justify-between group shadow-md hover:shadow-es-card">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl flex-shrink-0">{b.emoji}</span>
                    <span className="text-[11px] text-[#047857] font-bold uppercase tracking-wider bg-[#f4fbf0] px-2.5 py-0.5 rounded-full border border-[#047857]/15">
                      Authorized
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1D2026] group-hover:text-[#FD5C08] transition-colors tracking-tight truncate">
                      {b.name}
                    </h3>
                    <p className="text-xs text-[#7D8694] mt-1 line-clamp-1 leading-relaxed">
                      {b.sub}
                    </p>
                  </div>

                  <div className="pt-2.5 mt-1 border-t border-[#F0F2F5] text-right">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSafeAction(onOpenPartnerModal);
                      }}
                      className="text-xs font-semibold text-[#FD5C08] hover:text-[#CA4400] hover:underline inline-flex items-center gap-0.5"
                    >
                      <span>Explore Brand</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Orbit Navigation Guide */}
        <div className="relative z-30 flex items-center justify-center gap-2 text-xs font-medium text-[#7D8694] pointer-events-none pb-2">
          <ChevronDown className="w-4 h-4 text-[#FD5C08] animate-bounce" />
          <span>Scroll to rotate circular orbit • Drag to spin freely • Click any brand card</span>
        </div>

      </div>
    </div>
  );
};

export default BrandSpiralOrbit;
