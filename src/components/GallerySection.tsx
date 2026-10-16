import { useEffect, useRef, useState } from 'react';

const BASE_URL = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const CANDIDATE_IMAGE_SOURCES = [
  `${BASE_URL}Premium Bottled Water Lifestyle Collage-1.png`,
  `${BASE_URL}Premium Bottled Water Lifestyle Collage.png`,
  `${BASE_URL}banners/Premium Bottled Water Lifestyle Collage.png`,
  `${BASE_URL}gallery/Premium Bottled Water Lifestyle Collage.png`,
];

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [srcIndex, setSrcIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleImageError = () => {
    if (srcIndex < CANDIDATE_IMAGE_SOURCES.length - 1) {
      setSrcIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  return (
    <section
      id="our-gallery"
      ref={sectionRef}
      className="w-full bg-[#F8FAFD] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6"
    >
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto">
        <div className="text-center mb-3.5 sm:mb-4 lg:mb-5">
          <div className="inline-flex items-center justify-center gap-4 flex-nowrap">
            <span className="sm:w-24 h-0.5 bg-[#0066FF] w-8 flex-shrink-0" />
            <h2 className="sm:text-4xl md:text-5xl font-black tracking-tight text-[#0B1B3D] text-xl whitespace-nowrap">
              OUR <span className="text-[#0066FF]">GALLERY</span>
            </h2>
            <span className="sm:w-24 h-0.5 bg-[#0066FF] w-8 flex-shrink-0" />
          </div>
          <p className="mt-1.5 sm:mt-2 text-base sm:text-lg text-slate-600 font-medium">
            A glimpse of custom bottles crafted for brands, businesses and special occasions.
          </p>
        </div>

        <div
          className={`w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
            isVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-6 scale-[0.98]'
          }`}
          style={{ willChange: 'transform, opacity' }}
        >
          {!hasError && (
            <img
              src={CANDIDATE_IMAGE_SOURCES[srcIndex]}
              alt="DeClassico Custom Bottled Water Gallery"
              onLoad={() => {
                setIsLoaded(true);
                setHasError(false);
              }}
              onError={handleImageError}
              style={{ aspectRatio: '1875 / 839' }}
              className={`w-full h-auto block rounded-2xl shadow-xl transition-transform duration-700 ease-out md:hover:scale-[1.02] ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
        </div>
      </div>
    </section>
  );
}
