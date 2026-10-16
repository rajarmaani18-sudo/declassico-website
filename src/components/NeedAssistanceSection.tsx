interface NeedAssistanceSectionProps {
  onOpenFaq: () => void;
  onOpenContact: () => void;
}

export function NeedAssistanceSection({ onOpenFaq, onOpenContact }: NeedAssistanceSectionProps) {
  return (
    <section
      id="help-faq-contact"
      className="w-full bg-gradient-to-b from-[#F8FAFD] via-white to-[#F8FAFD] px-4 sm:px-6 lg:px-8 border-t border-slate-100/80 select-none py-4 sm:py-5 lg:py-6"
    >
      <div className="max-w-6xl xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto">
        <div className="text-center mb-3.5 sm:mb-4 lg:mb-5">
          <div className="inline-flex items-center justify-center gap-3 mb-1.5">
            <span className="w-8 sm:w-12 h-[2px] bg-[#0066FF] rounded-full" />
            <span className="text-[11.5px] sm:text-[13px] font-extrabold tracking-[0.2em] text-[#0066FF] uppercase">
              NEED ASSISTANCE?
            </span>
            <span className="w-8 sm:w-12 h-[2px] bg-[#0066FF] rounded-full" />
          </div>
          <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0B1528] tracking-tight leading-tight whitespace-nowrap">
            Still have questions? <span className="text-[#0066FF]">We're here to help.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-normal mt-1 max-w-xl mx-auto">
            Explore our answers or speak directly with our design and production team.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {/* FAQ Card */}
          <div className="group bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-7 shadow-sm hover:shadow-md hover:border-[#0066FF]/60 transition-all duration-300 flex flex-col justify-between items-center text-center">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] mb-2 sm:mb-2.5 group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300 flex-shrink-0">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current stroke-2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" x2="12.01" y1="17" y2="17" />
              </svg>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <h3 className="text-base sm:text-xl font-bold text-gray-900 group-hover:text-[#0066FF] transition-colors leading-tight mb-1 sm:mb-1.5">
                FAQs
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-snug sm:leading-relaxed max-w-[320px] mb-3 sm:mb-4">
                Have questions? Find your answers here.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenFaq}
              className="inline-flex items-center justify-center rounded-full border border-gray-200 hover:border-[#0066FF] hover:text-[#0066FF] text-gray-700 bg-white px-3.5 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
            >
              <span>View FAQs</span>
            </button>
          </div>

          {/* Contact Card */}
          <div className="group bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-7 shadow-sm hover:shadow-md hover:border-[#0066FF]/60 transition-all duration-300 flex flex-col justify-between items-center text-center">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] mb-2 sm:mb-2.5 group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300 flex-shrink-0">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current stroke-2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <h3 className="text-base sm:text-xl font-bold text-gray-900 group-hover:text-[#0066FF] transition-colors leading-tight mb-1 sm:mb-1.5">
                Contact Us
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-snug sm:leading-relaxed max-w-[320px] mb-3 sm:mb-4">
                Have a question or need help? Get in touch with us.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center justify-center rounded-full border border-gray-200 hover:border-[#0066FF] hover:text-[#0066FF] text-gray-700 bg-white px-3.5 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
            >
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
