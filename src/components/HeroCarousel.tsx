import { useEffect, useState } from 'react';

interface HeroCarouselProps {
  onOpenQuote?: () => void;
}

const slides = [
  {
    src: '/banners/Refreshing Every Moment Bottle Launch.png',
    alt: 'Refreshing Every Moment Bottle Launch',
  },
  {
    src: '/banners/Premium Bottle_ It’s a Boy!.png',
    alt: "Premium Bottle - It's a Boy!",
  },
  {
    src: '/banners/Everyday Refreshment Splash.png',
    alt: 'Everyday Refreshment Splash',
  },
  {
    src: '/banners/Signature Bottle_ Pure Water, Bold Style.png',
    alt: 'Signature Bottle - Pure Water, Bold Style',
  },
];

export function HeroCarousel({ onOpenQuote: _onOpenQuote }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      goToSlide(currentSlide + 1);
    } else if (diff < -50) {
      goToSlide(currentSlide - 1);
    }
    setTouchStartX(null);
  };

  return (
    <div
      id="hero-carousel"
      className="relative w-full overflow-hidden bg-black select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        id="carousel-track"
        className="flex transition-transform duration-700 ease-in-out w-full will-change-transform"
        style={{ transform: `translate3d(-${currentSlide * 100}%, 0px, 0px)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative aspect-[1920/800]"
            style={{ aspectRatio: '1920 / 800' }}
          >
            {slide.src && (
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover object-center block"
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                draggable={false}
              />
            )}
          </div>
        ))}
      </div>

      <button
        id="carousel-prev"
        type="button"
        aria-label="Previous slide"
        onClick={() => goToSlide(currentSlide - 1)}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/75 hover:bg-white text-gray-800 shadow-md backdrop-blur-sm flex items-center justify-center transition-all duration-200 focus:outline-none hover:scale-105 active:scale-95 cursor-pointer"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current stroke-[2.5]"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        id="carousel-next"
        type="button"
        aria-label="Next slide"
        onClick={() => goToSlide(currentSlide + 1)}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/75 hover:bg-white text-gray-800 shadow-md backdrop-blur-sm flex items-center justify-center transition-all duration-200 focus:outline-none hover:scale-105 active:scale-95 cursor-pointer"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current stroke-[2.5]"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div
        id="carousel-dots"
        className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            className={`carousel-dot h-2.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
              index === currentSlide
                ? 'w-6 bg-[#0066FF]'
                : 'w-2.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
