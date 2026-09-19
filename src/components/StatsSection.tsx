import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../data/companyData';
import { Activity } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1600; // ms
          const steps = 35;
          const intervalTime = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            setCounts([
              Math.floor(STATS[0].value * easeOutQuart),
              Math.floor(STATS[1].value * easeOutQuart),
              Math.floor(STATS[2].value * easeOutQuart),
              Math.floor(STATS[3].value * easeOutQuart),
            ]);

            if (step >= steps) {
              setCounts([STATS[0].value, STATS[1].value, STATS[2].value, STATS[3].value]);
              clearInterval(timer);
            }
          }, intervalTime);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 bg-slate-50/60 border-t border-b border-slate-200/80"
      aria-label="Real Tech Vision Verified Statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-mono uppercase tracking-widest mb-4">
            <Activity className="w-3.5 h-3.5 text-rtv-orange" />
            <span>03 // Operational Telemetry</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 font-heading tracking-tight leading-tight">
            Verified distribution scale and documented channel milestones.
          </h2>
        </div>

        {/* Oversized Typography Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
          {STATS.map((stat, idx) => {
            const isPanIndia = idx === 3;

            return (
              <div
                key={stat.label}
                className={`pt-6 sm:pt-0 ${idx !== 0 ? 'sm:pl-8' : ''}`}
              >
                {/* Metric Index */}
                <span className="text-[10px] font-mono text-slate-400 block mb-2 uppercase tracking-wider">
                  METRIC // 0{idx + 1}
                </span>

                {/* Massive Typography Number */}
                <div className="flex items-baseline gap-0.5 mb-2">
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-950 font-heading tracking-tight">
                    {isPanIndia ? 'PAN-India' : counts[idx].toLocaleString()}
                  </span>
                  {!isPanIndia && (
                    <span className="text-4xl sm:text-5xl font-black text-rtv-orange">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                <div className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                  {stat.subLabel}
                </div>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
