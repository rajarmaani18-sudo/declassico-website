export function WhyChooseSection() {
  return (
    <section
      id="about-us-section"
      className="w-full relative overflow-hidden bg-gradient-to-b from-[#F8FAFD] via-white to-[#F8FAFD] border-t border-blue-50 py-4 sm:py-5 lg:py-6"
      style={{ scrollMarginTop: '130px' }}
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100/40 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="why-choose-section"
          className="text-center max-w-5xl xl:max-w-6xl mx-auto mb-4 sm:mb-5"
          style={{ scrollMarginTop: '130px' }}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-1.5 sm:mb-2">
            <span className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-transparent to-[#0066FF] rounded-full" />
            <span className="text-[12px] sm:text-[13px] font-extrabold tracking-[0.2em] text-[#0066FF] uppercase">
              WHY CHOOSE
            </span>
            <span className="w-8 sm:w-12 h-[2px] bg-gradient-to-l from-transparent to-[#0066FF] rounded-full" />
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight mb-1.5 sm:mb-2">
            Custom Bottled Water?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-none lg:whitespace-nowrap mx-auto">
            Make a lasting impression with premium, customized bottled water for your business, event or special occasion.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-7">
          {/* Card 1 */}
          <div className="group rounded-2xl bg-white border border-[#0066FF]/20 p-3 sm:p-4 lg:p-5 shadow-[0_10px_25px_-5px_rgba(0,102,255,0.08),0_4px_10px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(0,102,255,0.22),0_8px_16px_rgba(0,0,0,0.06)] hover:border-[#0066FF] transition-all duration-300 ease-out flex flex-col justify-between cursor-default">
            <div className="flex flex-col">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] mb-2 sm:mb-3 shadow-sm group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg leading-snug mb-1 sm:mb-1.5 group-hover:text-[#0066FF] transition-colors duration-200">
                Build Your Brand
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-2.5 sm:mb-3 flex-grow">
                Your logo, design and message on every bottle. Turn a simple bottle into a powerful branding tool.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3] w-full bg-gray-50 border border-gray-100/60 mt-auto">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfAHW87uLfar_YAWOblUKcQ0XCeTXbNXMZ3gJYMhYCSWimdwY0WDxKduuzCvPKiQZnY8mlCQPQmvXK7oVXl7h0cswT1z5MpJOgmaaxv_G82Wf7sxeKLKXKiLMhP_Az-2rehJoaSSW5o0dMAfo5JhDgHQ6HlEGOiLU246GxLCuUF39AqWGWu9ETF4xUdZugGMQOd9fooegT6EAQwEZ-sUiE1GbfUFMvMCmXQ80d3o4"
                alt="Build Your Brand Custom Water Bottle"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="group rounded-2xl bg-white border border-[#0066FF]/20 p-3 sm:p-4 lg:p-5 shadow-[0_10px_25px_-5px_rgba(0,102,255,0.08),0_4px_10px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(0,102,255,0.22),0_8px_16px_rgba(0,0,0,0.06)] hover:border-[#0066FF] transition-all duration-300 ease-out flex flex-col justify-between cursor-default">
            <div className="flex flex-col">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] mb-2 sm:mb-3 shadow-sm group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg leading-snug mb-1 sm:mb-1.5 group-hover:text-[#0066FF] transition-colors duration-200">
                Made for Every Occasion
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-2.5 sm:mb-3 flex-grow">
                Perfect for restaurants, cafes, corporate events, weddings, parties and celebrations.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3] w-full bg-gray-50 border border-gray-100/60 mt-auto">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeOb7wNd0uuoDWuSNdPcu-APaiIrY5YOtFm9nwDLkrGH9J36EQ4kDd9HprcEb5iQLE0Q4_9BQkulS6nKICN-LnAK-ug2xb9r2xxcZeHXekmHk81k7_LgiuR5-BC2igyKQZbTTuwYIPVWleGkP6f8jcm2DWaN-w2s4u6FqeENUSVLFK0wjuJS98PRJkW2_QKETCbTvflwvWNHE9dNsFAYhPqmZi9L6tvN3da0HD_a8"
                alt="Custom Bottles for Every Occasion"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="group rounded-2xl bg-white border border-[#0066FF]/20 p-3 sm:p-4 lg:p-5 shadow-[0_10px_25px_-5px_rgba(0,102,255,0.08),0_4px_10px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(0,102,255,0.22),0_8px_16px_rgba(0,0,0,0.06)] hover:border-[#0066FF] transition-all duration-300 ease-out flex flex-col justify-between cursor-default">
            <div className="flex flex-col">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] mb-2 sm:mb-3 shadow-sm group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
                  <path d="M2 9h20" />
                  <path d="M10 3l-2 6 4 12 4-12-2-6" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg leading-snug mb-1 sm:mb-1.5 group-hover:text-[#0066FF] transition-colors duration-200">
                Premium Presentation
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-2.5 sm:mb-3 flex-grow">
                Clean, elegant and stylish bottles that elevate your table setup and give a premium feel to your brand or event.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3] w-full bg-gray-50 border border-gray-100/60 mt-auto">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvZ9AllXjZMewRvUWb-93f8WAM93zsfVtsyW4phATW1PbafL0fyZoS1WzUG47HHtXfpB2Zolsh-lbczQhsM2LbbqhtUZ58Icrz1K8E34AzxrFoDB6guVl6ukbH07rFld1w0NU0ciqU2ec22EXPRTAH-2rDvrtyocAhchhlF7Iv7GHOiVh6XW2sx7sNJKOqWA4onCMbPnm4YDK8S2sAEwbYzmK-4IAXXlMblrBbAV0"
                alt="Premium Presentation Custom Luxury Bottles"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="group rounded-2xl bg-white border border-[#0066FF]/20 p-3 sm:p-4 lg:p-5 shadow-[0_10px_25px_-5px_rgba(0,102,255,0.08),0_4px_10px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(0,102,255,0.22),0_8px_16px_rgba(0,0,0,0.06)] hover:border-[#0066FF] transition-all duration-300 ease-out flex flex-col justify-between cursor-default">
            <div className="flex flex-col">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] mb-2 sm:mb-3 shadow-sm group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                  <rect height="13" rx="2" width="15" x="1" y="3" />
                  <polygon points="16 8 20 8 23 11 23 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg leading-snug mb-1 sm:mb-1.5 group-hover:text-[#0066FF] transition-colors duration-200">
                Bulk Orders Made Easy
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-2.5 sm:mb-3 flex-grow">
                Consistent quality, on-time delivery and hassle-free bulk orders for your business or event.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3] w-full bg-gray-50 border border-gray-100/60 mt-auto">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrBjdYPw4CxzTAGVGJ33QUy943UmD-HX4fziD-E-nADjlzi4r6eHegig8sWq9bMr8rbwJipBQekWUGsCyyv1OQiGTS6ZX6AyXqiLfR2WKWsbseexhABg8ei33zlQx2bhFkMnGR9fo1iXUe7ERPTR3cUYcaSbHKC3uGRl6b0WN42Mcs0m5pQeVUzhFZQ67wmOWgZFkXdIjTk9T3DwP8n-N5oFAP2jHvwvKc_S7kLEA"
                alt="Bulk Orders Commercial Warehouse and Packaging"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
