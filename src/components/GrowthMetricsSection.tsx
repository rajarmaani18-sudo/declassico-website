import { useEffect, useRef, useState } from 'react';

export function GrowthMetricsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState({
    bottles: 0,
    brands: 0,
    events: 0,
    cities: 0,
  });
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const targets = {
      bottles: 100,
      brands: 100,
      events: 500,
      cities: 25,
    };

    let animationFrameId: number | null = null;
    let isCurrentlyVisible = false;

    // Smooth easeOutCubic easing
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (!isCurrentlyVisible) {
            isCurrentlyVisible = true;
            if (animationFrameId !== null) {
              cancelAnimationFrame(animationFrameId);
            }

            const duration = 1800; // 1.8 seconds
            let startTime: number | null = null;

            const animate = (currentTime: number) => {
              if (startTime === null) startTime = currentTime;
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easedProgress = easeOutCubic(progress);

              if (progress < 1) {
                setCounts({
                  bottles: Math.round(targets.bottles * easedProgress),
                  brands: Math.round(targets.brands * easedProgress),
                  events: Math.round(targets.events * easedProgress),
                  cities: Math.round(targets.cities * easedProgress),
                });
                animationFrameId = requestAnimationFrame(animate);
              } else {
                setCounts({
                  bottles: targets.bottles,
                  brands: targets.brands,
                  events: targets.events,
                  cities: targets.cities,
                });
                animationFrameId = null;
              }
            };

            setCounts({
              bottles: 0,
              brands: 0,
              events: 0,
              cities: 0,
            });
            animationFrameId = requestAnimationFrame(animate);
          }
        } else {
          if (isCurrentlyVisible) {
            isCurrentlyVisible = false;
            if (animationFrameId !== null) {
              cancelAnimationFrame(animationFrameId);
              animationFrameId = null;
            }
            setCounts({
              bottles: 0,
              brands: 0,
              events: 0,
              cities: 0,
            });
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="growth-metrics"
      className="w-full bg-gradient-to-b from-[#F8FAFD] via-white to-[#F8FAFD] border-t border-slate-100/80 select-none relative overflow-hidden py-4 sm:py-5 lg:py-6"
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto max-w-4xl mb-3.5 sm:mb-4 lg:mb-5">
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-1.5 w-full max-w-4xl mx-auto flex-nowrap">
            <span className="w-8 sm:w-16 h-0.5 bg-[#0066FF] flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-[#0B1B3D] whitespace-nowrap text-center">
              The numbers that define our <span className="text-[#0066FF] font-extrabold">growth</span>
            </h2>
            <span className="w-8 sm:w-16 h-0.5 bg-[#0066FF] flex-shrink-0" />
          </div>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed mt-1.5">
            From trusted brands to unforgettable occasions, every number reflects the trust we've earned.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-7 items-stretch">
          {/* Stat 1 */}
          <div className="rounded-2xl bg-white border border-[#0066FF]/20 p-3 sm:p-4 lg:p-5 shadow-[0_10px_25px_-5px_rgba(0,102,255,0.08),0_4px_10px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(0,102,255,0.22),0_8px_16px_rgba(0,0,0,0.06)] hover:border-[#0066FF] transition-all duration-300 ease-out flex flex-col justify-between items-center text-center group cursor-default min-h-[160px]">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] mb-2 sm:mb-2.5 shadow-sm group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current stroke-2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center w-full my-0.5 sm:my-1">
              <div className="text-3xl sm:text-[38px] lg:text-[42px] font-black text-[#0066FF] tracking-tight leading-none mb-1">
                {counts.bottles}K+
              </div>
              <div className="text-xs sm:text-[14px] font-bold text-[#0B1B3D] tracking-wider uppercase mt-1">
                BOTTLES DELIVERED
              </div>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed max-w-[220px]">
                Custom-branded bottles created for memorable experiences.
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="rounded-2xl bg-white border border-[#0066FF]/20 p-3 sm:p-4 lg:p-5 shadow-[0_10px_25px_-5px_rgba(0,102,255,0.08),0_4px_10px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(0,102,255,0.22),0_8px_16px_rgba(0,0,0,0.06)] hover:border-[#0066FF] transition-all duration-300 ease-out flex flex-col justify-between items-center text-center group cursor-default min-h-[160px]">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] mb-2 sm:mb-2.5 shadow-sm group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current stroke-2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <rect height="18" rx="2" ry="2" width="16" x="4" y="2" />
                <line x1="9" x2="9.01" y1="6" y2="6" />
                <line x1="15" x2="15.01" y1="6" y2="6" />
                <line x1="9" x2="9.01" y1="10" y2="10" />
                <line x1="15" x2="15.01" y1="10" y2="10" />
                <line x1="9" x2="9.01" y1="14" y2="14" />
                <line x1="15" x2="15.01" y1="14" y2="14" />
                <line x1="9" x2="15" y1="18" y2="18" />
              </svg>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center w-full my-0.5 sm:my-1">
              <div className="text-3xl sm:text-[38px] lg:text-[42px] font-black text-[#0066FF] tracking-tight leading-none mb-1">
                {counts.brands}+
              </div>
              <div className="text-xs sm:text-[14px] font-bold text-[#0B1B3D] tracking-wider uppercase mt-1">
                BRANDS SERVED
              </div>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed max-w-[220px]">
                Trusted by restaurants, hotels, cafés and businesses across India.
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="rounded-2xl bg-white border border-[#0066FF]/20 p-3 sm:p-4 lg:p-5 shadow-[0_10px_25px_-5px_rgba(0,102,255,0.08),0_4px_10px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(0,102,255,0.22),0_8px_16px_rgba(0,0,0,0.06)] hover:border-[#0066FF] transition-all duration-300 ease-out flex flex-col justify-between items-center text-center group cursor-default min-h-[160px]">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] mb-2 sm:mb-2.5 shadow-sm group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current stroke-2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center w-full my-0.5 sm:my-1">
              <div className="text-3xl sm:text-[38px] lg:text-[42px] font-black text-[#0066FF] tracking-tight leading-none mb-1">
                {counts.events}+
              </div>
              <div className="text-xs sm:text-[14px] font-bold text-[#0B1B3D] tracking-wider uppercase mt-1">
                EVENTS & OCCASIONS
              </div>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed max-w-[220px]">
                From weddings and celebrations to corporate events and launches.
              </p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="rounded-2xl bg-white border border-[#0066FF]/20 p-3 sm:p-4 lg:p-5 shadow-[0_10px_25px_-5px_rgba(0,102,255,0.08),0_4px_10px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(0,102,255,0.22),0_8px_16px_rgba(0,0,0,0.06)] hover:border-[#0066FF] transition-all duration-300 ease-out flex flex-col justify-between items-center text-center group cursor-default min-h-[160px]">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] mb-2 sm:mb-2.5 shadow-sm group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current stroke-2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center w-full my-0.5 sm:my-1">
              <div className="text-3xl sm:text-[38px] lg:text-[42px] font-black text-[#0066FF] tracking-tight leading-none mb-1">
                {counts.cities}+
              </div>
              <div className="text-xs sm:text-[14px] font-bold text-[#0B1B3D] tracking-wider uppercase mt-1">
                CITIES REACHED
              </div>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed max-w-[220px]">
                Delivering premium custom bottled water across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

