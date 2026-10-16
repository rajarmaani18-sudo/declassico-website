const steps = [
  {
    num: '01',
    title: 'Choose Your Bottle',
    desc: 'Select the size, shape and style that fits your brand or occasion.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfAHW87uLfar_YAWOblUKcQ0XCeTXbNXMZ3gJYMhYCSWimdwY0WDxKduuzCvPKiQZnY8mlCQPQmvXK7oVXl7h0cswT1z5MpJOgmaaxv_G82Wf7sxeKLKXKiLMhP_Az-2rehJoaSSW5o0dMAfo5JhDgHQ6HlEGOiLU246GxLCuUF39AqWGWu9ETF4xUdZugGMQOd9fooegT6EAQwEZ-sUiE1GbfUFMvMCmXQ80d3o4',
  },
  {
    num: '02',
    title: 'Share Your Design',
    desc: 'Send us your logo, artwork, photos, message or any branding requirements.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeOb7wNd0uuoDWuSNdPcu-APaiIrY5YOtFm9nwDLkrGH9J36EQ4kDd9HprcEb5iQLE0Q4_9BQkulS6nKICN-LnAK-ug2xb9r2xxcZeHXekmHk81k7_LgiuR5-BC2igyKQZbTTuwYIPVWleGkP6f8jcm2DWaN-w2s4u6FqeENUSVLFK0wjuJS98PRJkW2_QKETCbTvflwvWNHE9dNsFAYhPqmZi9L6tvN3da0HD_a8',
  },
  {
    num: '03',
    title: 'We Create & Customize',
    desc: 'Our team professionally designs and customizes your bottle with high-quality labels.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvZ9AllXjZMewRvUWb-93f8WAM93zsfVtsyW4phATW1PbafL0fyZoS1WzUG47HHtXfpB2Zolsh-lbczQhsM2LbbqhtUZ58Icrz1K8E34AzxrFoDB6guVl6ukbH07rFld1w0NU0ciqU2ec22EXPRTAH-2rDvrtyocAhchhlF7Iv7GHOiVh6XW2sx7sNJKOqWA4onCMbPnm4YDK8S2sAEwbYzmK-4IAXXlMblrBbAV0',
  },
  {
    num: '04',
    title: 'Get It Delivered',
    desc: 'Your customized bottles are carefully packed and delivered to your location, ready to use.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrBjdYPw4CxzTAGVGJ33QUy943UmD-HX4fziD-E-nADjlzi4r6eHegig8sWq9bMr8rbwJipBQekWUGsCyyv1OQiGTS6ZX6AyXqiLfR2WKWsbseexhABg8ei33zlQx2bhFkMnGR9fo1iXUe7ERPTR3cUYcaSbHKC3uGRl6b0WN42Mcs0m5pQeVUzhFZQ67wmOWgZFkXdIjTk9T3DwP8n-N5oFAP2jHvwvKc_S7kLEA',
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works-section"
      className="w-full relative overflow-hidden bg-gradient-to-b from-[#F8FAFD] via-white to-[#F8FAFD] border-t border-blue-50 select-none py-4 sm:py-5 lg:py-6"
      style={{ scrollMarginTop: '0px' }}
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div id="custom-branding-section" className="text-center max-w-3xl mx-auto mb-3.5 sm:mb-4 lg:mb-5">
          <div className="flex items-center justify-center max-w-4xl mx-auto mb-1.5 sm:mb-2">
            <div className="flex-1 h-[2px] bg-[#0066FF] max-w-[120px] md:max-w-[180px]" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-center uppercase whitespace-nowrap px-4">
              <span className="text-[#0B1B3D]">HOW IT</span>{' '}
              <span className="text-[#0066FF]">WORKS</span>
            </h2>
            <div className="flex-1 h-[2px] bg-[#0066FF] max-w-[120px] md:max-w-[180px]" />
          </div>
          <p className="text-slate-600 font-medium text-sm md:text-base text-center">
            From your idea to your custom bottle in just a few simple steps.
          </p>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 items-stretch grid-cols-2 gap-3 sm:gap-4 lg:gap-6 xl:gap-7">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative rounded-2xl bg-white border border-[#0066FF]/60 shadow-[0_10px_25px_-5px_rgba(0,102,255,0.08),0_4px_10px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(0,102,255,0.22),0_8px_16px_rgba(0,0,0,0.06)] hover:border-[#0066FF] transition-all duration-300 ease-out flex flex-col justify-between h-full p-3 sm:p-4 lg:p-5"
            >
              <div className="absolute -top-3 z-10 bg-[#0066FF] text-white font-extrabold text-[12px] sm:text-[13px] px-3 py-1 rounded-full shadow-sm flex items-center justify-center tracking-wider left-3 sm:left-4">
                {step.num}
              </div>

              <div className="w-full flex items-center justify-center pt-1.5 pb-2.5">
                <div className="rounded-full bg-blue-50/50 border border-blue-100/60 flex items-center justify-center p-2.5 overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-300 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-contain drop-shadow-sm"
                  />
                </div>
              </div>

              <div className="text-center flex flex-col flex-grow justify-start mt-1">
                <h3 className="md:text-[16px] font-bold text-gray-900 group-hover:text-[#0066FF] transition-colors leading-snug mb-1 text-sm sm:text-base">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
