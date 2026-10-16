export function PromiseSection() {
  return (
    <section id="our-promise" className="w-full bg-white px-4 sm:px-6 lg:px-8 border-t border-slate-100 py-4 sm:py-5 lg:py-6">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto">
        <div className="text-center mb-3.5 sm:mb-4 lg:mb-5">
          <div className="inline-flex items-center justify-center gap-4 flex-nowrap">
            <span className="sm:w-24 h-0.5 bg-[#0066FF] w-8 flex-shrink-0" />
            <h2 className="sm:text-4xl md:text-5xl font-black tracking-tight text-[#0B1B3D] text-xl whitespace-nowrap">
              OUR <span className="text-[#0066FF]">PROMISE</span>
            </h2>
            <span className="sm:w-24 h-0.5 bg-[#0066FF] w-8 flex-shrink-0" />
          </div>
          <p className="mt-1.5 sm:mt-2 text-base sm:text-lg text-slate-600 font-medium">
            Crafted with precision, delivered with pride — our commitment to your brand.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-6 lg:gap-8">
          <div className="flex flex-col">
            <div className="w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-slate-100/80 mb-1.5 sm:mb-2.5 group bg-slate-50">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR3nDJoANnA4nAvH0zVP7vHaMmw9v7gMQ-pcXs9So0xpln08AACHakFCmAfVdojUfseeIMHlPNYgsDa4WIftPVAbqsI1JjzrfIo_p77pwMDPRNk8EaUsdGPjZ78fjhKkAPIRdehrJknemHmsN4wqUPkXbclxMDgwkr9acKWH8RED33EYGCp4KXjSaYs-7-PuPxcm_Cc--0vKg4CJYXd0f9GlLJWFG6d_q_jtFm3XKDpHq7hpv4v1zZ"
                alt="Premium Quality Bottling"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mb-1 text-left">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#0B1B3D] tracking-tight leading-tight sm:leading-normal">
                Premium Quality
              </h3>
            </div>
            <p className="hidden md:block text-slate-600 text-sm leading-relaxed">
              Every bottle is crafted to deliver a premium look, feel and presentation for your brand.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-slate-100/80 mb-1.5 sm:mb-2.5 group bg-slate-50">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPDCUa_kqowWWPo2a4QZMWkgctPnxCCClBUdz-i678WumBjfjp4Vj3CWzMRvCoBPpGBeR40s8zLkDqHY637mdfJyPlcVVJPiTcfcgobKAYpixbB0du8P6-cGJEbCjLadxX7YpX3IcV8jrcjnlTGzbzJQ1uMx8wAJddodyVycBrG8-kqEqu_p3kwMXMkfq4dxLNM6BXyxaHRJneE1zH4WLz3EYwBc0fFvC_c1mPMvaJl-3N-IBOLmxy"
                alt="Your Brand, Your Bottle"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mb-1 text-left">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#0B1B3D] tracking-tight leading-tight sm:leading-normal">
                Your Brand, Your Bottle
              </h3>
            </div>
            <p className="hidden md:block text-slate-600 text-sm leading-relaxed">
              From restaurants to weddings, we turn your brand, message or occasion into a bottle people remember.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-slate-100/80 mb-1.5 sm:mb-2.5 group bg-slate-50">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkNA8YgMIInOS5JT_W7FfE17B6KCm8zOqopeA1y63hH40JCTQQMIYkR4zR2trim5wcgbto8x69hGk3Y_zkym2RLEQ9A1m59nurP0pDVMsyrUK0xta1tlTpHKJN21hT58pKz5JVtw41J2ljCsaBWoUffshYe2hlh7tAK8RpeOHdr5Aclx2vGZHlIXmmx956hBw5xkj-qWf4zYADf4AeX1mUyT-_YlMS96Wtuf029qWjaxF8-seTuVC_"
                alt="Made for Every Occasion"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mb-1 text-left">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#0B1B3D] tracking-tight leading-tight sm:leading-normal">
                Made for Every Occasion
              </h3>
            </div>
            <p className="hidden md:block text-slate-600 text-sm leading-relaxed">
              Whether it's a restaurant, corporate event, wedding or private celebration, DeClassico creates custom bottles built around your occasion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
