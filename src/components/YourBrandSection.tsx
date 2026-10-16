interface YourBrandSectionProps {
  onOpenQuote: () => void;
}

export function YourBrandSection({ onOpenQuote }: YourBrandSectionProps) {
  return (
    <section
      id="your-brand-your-bottle"
      className="w-full bg-white px-4 sm:px-6 lg:px-8 border-t border-slate-100 py-4 sm:py-5 lg:py-6"
      style={{ scrollMarginTop: '130px' }}
    >
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto flex flex-row items-center justify-between gap-4 sm:gap-8 lg:gap-14 xl:gap-20 py-1 sm:py-2">
        <div className="w-1/2 lg:w-[48%] flex flex-col items-start text-left">
          <h2
            id="custom-branding-headline"
            className="text-lg sm:text-3xl md:text-5xl font-black text-[#0B1528] tracking-tight leading-tight mb-1.5 sm:mb-3"
            style={{ scrollMarginTop: '140px' }}
          >
            Your Brand. <span className="text-[#0066FF]">Your Bottle.</span>
          </h2>
          <p className="text-[10px] sm:text-base md:text-xl text-[#3A4759] font-normal leading-tight sm:leading-relaxed mb-1 sm:mb-2">
            Create premium custom bottled water that reflects your brand. Designed to make every table and occasion memorable.
          </p>
          <p className="text-[10px] sm:text-base md:text-xl text-[#3A4759] font-normal leading-tight sm:leading-relaxed mb-2 sm:mb-3">
            Personalized with your logo, design, and unique identity. Crafted to leave a lasting impression with every sip.
          </p>
          <button
            type="button"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-1.5 sm:gap-3 px-3 py-1.5 sm:px-6 sm:py-3 bg-[#0066FF] hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/25 transition-all text-[10px] sm:text-base cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Get Your Custom Bottle</span>
            <span className="text-xs sm:text-lg leading-none">→</span>
          </button>
        </div>

        <div className="w-1/2 lg:w-[52%] flex items-center justify-center relative">
          <div className="relative w-full max-w-xl lg:max-w-none">
            <div className="w-full h-44 sm:h-[300px] md:h-[380px] lg:h-[420px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-100/80 bg-slate-50">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwYf6Rm0H8dUXgIZZBcil-OgJt2OLPjLNURJWNrDvcQi-5wlm6YhwmHrqv1g8W25NZUGcAYXmWsveGdP97jk-ei6bh6utTj_ajoGBY9Gtkm3Vh52po_x0ZUqUU6rTz3OuCVJd0vIudoulwOzzkMP7JSAZUrWPaFQ-gclN6zWlVKZvDOeQtewf6Y1UPXDsL81w6QeIqBqEPXqXqf-FTllF1nWQYNv5My_pot9A0iZwZH6zx19dvggus"
                alt="Premium custom branded bottled water collection on luxury restaurant marble table"
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-20 sm:w-40 md:w-52 rounded-lg sm:rounded-xl md:rounded-2xl p-1 sm:p-1.5 md:p-2 bg-white/95 backdrop-blur-sm shadow-2xl border sm:border-2 border-white/80 overflow-hidden transform hover:scale-105 transition-transform duration-300 z-10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtXWcN70cOGGINl9HShOvFJndYlo7qF0Mqp170Rb_sA7UwRSKreOSTPN_cJUq7xeFi86FjIW3FOe1uwhGsAxR7rDsRQiKrkqwLPfucPjZU_V9ZqkbKeWgyGJOizWCQT26MduMRd53e1veIWLLg0lR5rlgGIZ7gH2chqqIMcM7JT4TU0D-ix8c4dM1aonGnHI3sYAU-CFiAzLmIo5uOS1h4H9dYTtlMxvwaVjpKif6s3IbEMYiXLsSO"
                alt="Close-up luxury macro shot of custom DeClassico bottle on black marble counter"
                className="w-full h-12 sm:h-24 md:h-30 object-cover rounded md:rounded-xl block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
