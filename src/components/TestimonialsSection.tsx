import { useEffect, useState } from 'react';

const testimonialPhotos = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC_BbHA4YTgLuKCHZkUKs7nNhFPKk8aGBid5pS1N0ESPDH6eK_nggm_F1eG0L3sqwZXGOREceI-i-peGhU3ohPSZuuupH5BFUZoNPpy9FEAmWXRf1UDBNR7aZqReZwqtVEdAbvxin8JdN1o8C2FYdVXovDapH8InrTv87te7SIL-G9IpB9of9FiQmUFT9-n8WKl9L27dI9YNJ1FKhmXhqpkEJmeVQra_PaQ-V33Hi5uc1UbtU5BoZ2asI9StAsZpE_60g', // Rahul Mehta
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAiN8YHNYx3TgO3eMjcekGuyJ2pXSK9dDSQVIP0y41XdG51A2ZOPCFq-f_ucAbYXcA7osOdjiMdNuzo-JZQPz3Iv8AWFoMziLj6aDzvx0MFzijyheyHId95wF2Q8xSaJe0DycY1HTr0Dx4H1Uc57SjHCxuCWQ2taduwyGWHlwyiep7mZqxx8EAooTK48zbrXF98TwnRDTeWL-rxLCBIH-kDFt3SJG7Cg-3eAt_hjPJuZwbfJ37Ojlj37Mk7dAUdzrKBAw', // Amit Sharma
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ8YaHLmhYEZgEu9S7x9GR84rt_cJBV0To-8HzCZPuv3zoXw7N_RMelf9jX-7h63hZHJtVQvpit14XM1WQHax7mclIBcWV8abyCQDXjg0zWiFtgnroFYyyI-WkYGC6PVCwZtZa9qLCHZaqWendmgYyvGLKM7jZ_WVAoalgwkxb0guo6ljxLWg2RXY5WSuFYcbCHOXzQHapMfRZ7e8Y6Xd_KRlSeugRGyNth7sTu6yoNNwRyBENiJK7FcEr-jMhYAC9pg', // Priya Sharma
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAl4u2Fv9sUIdfruypVAPQxcAc4MuRzMPgo47bCPJ5Z7PNPnBIob_EmjsiXABamBNNYCVk6J1JU_w79Khhp1JYC_HHw-MaX2l2OdnfZLKPQFY-_f9HkTk5dqr0ZQrpF8BRIKuFtzh_gr4IltytPH5VxBymEFe7BSgSHcMxB9krj-gjTg4iMZos7Oq1c3iykZeJrflZnszZkpaGhlFVGIS9Ektab0eHiT2tHK2WMetDfBSgRi7RvG2bXq5MfHjz3Vt8aSA', // Rohit Mehta
];

const testimonials = [
  {
    quote: (
      <>
        “DeClassico has{' '}
        <strong className="font-bold not-italic text-[#0B1B3D]">
          elevated our brand image.
        </strong>{' '}
        The custom bottles look premium and our customers love the attention to
        detail. Great quality and super reliable service!”
      </>
    ),
    name: 'Rahul Mehta',
    title: 'Owner',
    brand: 'The Spice Room',
    category: 'RESTAURANT',
    iconType: 'star-flower',
  },
  {
    quote: (
      <>
        “DeClassico has been a{' '}
        <strong className="font-bold not-italic text-[#0B1B3D]">
          game changer for our restaurant.
        </strong>{' '}
        The custom bottles add a premium touch, the quality is excellent and
        their service is always on time. Highly recommended!”
      </>
    ),
    name: 'Amit Sharma',
    title: 'Founder',
    brand: 'Urban Tadka',
    category: 'RESTAURANT',
    iconType: 'utensils',
  },
  {
    quote: (
      <>
        “Our guests consistently compliment the{' '}
        <strong className="font-bold not-italic text-[#0B1B3D]">
          bespoke bottle presentation.
        </strong>{' '}
        DeClassico delivers impeccable labeling standards with effortless
        re-ordering and prompt logistical execution.”
      </>
    ),
    name: 'Priya Sharma',
    title: 'Owner',
    brand: 'The Urban Table',
    category: 'HOSPITALITY',
    iconType: 'star',
  },
  {
    quote: (
      <>
        “From weddings to VIP corporate banquets,{' '}
        <strong className="font-bold not-italic text-[#0B1B3D]">
          the attention to detail is unmatched.
        </strong>{' '}
        Clean, refreshing water packaged in labels that look like luxury art.”
      </>
    ),
    name: 'Rohit Mehta',
    title: 'Chef & Owner',
    brand: 'Spice Route',
    category: 'FINE DINING',
    iconType: 'chef',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section id="testimonials" className="w-full bg-white select-none pt-3 sm:pt-4 pb-4 sm:pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-2 sm:mb-3">
        <div className="inline-flex items-center justify-center gap-4 mb-1.5">
          <span className="w-12 sm:w-16 h-0.5 bg-[#0066FF]" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            <span className="text-[#0B1B3D]">Testi</span>
            <span className="text-[#0066FF]">monials</span>
          </h2>
          <span className="w-12 sm:w-16 h-0.5 bg-[#0066FF]" />
        </div>
        <p className="text-slate-600 text-sm sm:text-base font-medium mt-1">
          Trusted by restaurants, businesses and event creators across India.
        </p>
      </div>

      <div className="w-full relative overflow-hidden flex items-center justify-center">
        {/* Atmosphere background */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-white/90 via-white/70 to-transparent sm:from-white/80 sm:via-white/50 sm:to-white/20" />
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-white/80 via-transparent to-white/60" />
        <div className="absolute inset-0 z-10 pointer-events-none bg-[#0066FF]/10 mix-blend-multiply" />

        <div className="relative z-20 w-full max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center pb-3 pt-4 sm:pt-6">
          <div
            id="testimonial-carousel-container"
            className="w-full max-w-3xl lg:max-w-4xl xl:max-w-[1100px] 2xl:max-w-[1240px] relative flex flex-col items-center justify-center mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Card */}
            <div className="relative w-full bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,102,255,0.12),0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100/80 px-6 sm:px-12 lg:px-16 flex flex-col items-center justify-center overflow-visible pt-7 pb-5 mt-4 sm:mt-5">
              {/* Corner quote badges */}
              <div className="absolute -top-4 left-6 sm:left-10 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0066FF] text-white flex items-center justify-center shadow-lg pointer-events-none">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="absolute -bottom-4 right-6 sm:right-10 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0066FF] text-white flex items-center justify-center shadow-lg pointer-events-none">
                <svg className="w-5 h-5 fill-current rotate-180" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Slider Viewport */}
              <div id="testimonial-slider-viewport" className="w-full relative overflow-hidden">
                <div
                  id="testimonial-track"
                  className="flex w-full will-change-transform"
                  style={{
                    transform: `translate3d(-${currentIndex * 100}%, 0px, 0px)`,
                    transition: 'transform 100ms cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                >
                  {testimonials.map((item, idx) => (
                    <div
                      key={idx}
                      className="w-full flex-shrink-0 flex flex-col items-center justify-center relative pb-2 pt-6"
                    >
                      <p className="text-center italic text-[#1e3a8a] text-base sm:text-lg md:text-xl font-normal max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-2 sm:px-4 mt-2 sm:mt-3 mb-3 sm:mb-4">
                        {item.quote}
                      </p>

                      <div className="flex items-center justify-center gap-6 sm:gap-8 mb-2">
                        <div className="text-right">
                          <div className="text-[#0066FF] font-bold text-lg sm:text-xl leading-tight">
                            {item.name}
                          </div>
                          <div className="text-[#0066FF] text-sm font-medium mt-0.5">
                            {item.title}
                          </div>
                        </div>

                        <div className="w-[1.5px] h-10 bg-slate-300" />

                        <div className="text-left flex flex-col justify-center">
                          <div className="flex items-center gap-1.5">
                            {item.iconType === 'utensils' ? (
                              <svg
                                className="w-5 h-5 text-neutral-800 fill-none stroke-current stroke-2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                                <line x1="6" x2="18" y1="17" y2="17" />
                              </svg>
                            ) : item.iconType === 'star' ? (
                              <svg className="w-4 h-4 text-neutral-800 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4 text-neutral-800 fill-current" viewBox="0 0 24 24">
                                <path d="M12 3c-1.5 3-4 4.5-6.5 5 3.5 1 5 3.5 5.5 6.5.5-3 2-5.5 5.5-6.5-2.5-.5-5-2-6.5-5z" />
                                <path d="M12 14.5c-.7 1.5-2 2.5-3.5 3 2 .5 3 2 3.5 3.5.5-1.5 1.5-3 3.5-3.5-1.5-.5-2.8-1.5-3.5-3z" />
                              </svg>
                            )}
                            <span className="font-serif-heading text-neutral-900 font-bold text-lg sm:text-xl tracking-tight leading-tight">
                              {item.brand}
                            </span>
                          </div>
                          <div className="text-neutral-700 text-[10px] tracking-[0.2em] font-bold uppercase pl-5 sm:pl-6">
                            {item.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Circular Avatar Frame */}
              <div
                id="testimonial-avatar-wrapper"
                className="absolute -top-11 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
              >
                <div
                  id="testimonial-avatar-container"
                  className="w-22 h-22 sm:w-24 sm:h-24 rounded-full bg-white border-4 border-[#0066FF] shadow-lg flex items-center justify-center overflow-hidden transition-all duration-300"
                >
                  <img
                    id="testimonial-avatar-img"
                    src={testimonialPhotos[currentIndex]}
                    alt="Customer Portrait"
                    className="w-full h-full object-cover rounded-full transition-opacity duration-300"
                  />
                </div>
              </div>

              {/* Pagination Dots */}
              <div
                id="testimonial-dots"
                className="absolute left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-2 bottom-2.5"
              >
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Testimonial ${idx + 1}`}
                    onClick={() => setCurrentIndex(idx)}
                    className={`t-dot cursor-pointer focus:outline-none transition-all duration-300 ${
                      idx === currentIndex
                        ? 'w-6 h-2.5 rounded-full bg-[#0066FF]'
                        : 'w-2.5 h-2.5 rounded-full bg-[#0066FF]/30 hover:bg-[#0066FF]/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
