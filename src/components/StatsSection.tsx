import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, UserCheck, MapPin } from 'lucide-react';
import { STATS } from '../data/companyData';

export const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const statIcons = [Award, Users, UserCheck, MapPin];

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
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      aria-label="Realtech Vision Key Statistics"
    >
      <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {STATS.map((stat, idx) => {
            const Icon = statIcons[idx];
            const isPanIndia = idx === 3;

            return (
              <div
                key={stat.label}
                className={`flex items-start gap-4 ${
                  idx !== 0 ? 'sm:pl-6 pt-4 sm:pt-0' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-rtv-orange flex-shrink-0 mt-0.5">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-slate-950 font-heading tracking-tight">
                      {isPanIndia ? 'PAN-India' : counts[idx].toLocaleString()}
                    </span>
                    {!isPanIndia && (
                      <span className="text-2xl sm:text-3xl font-bold text-rtv-orange">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1 uppercase tracking-wider">
                    {stat.subLabel}
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
