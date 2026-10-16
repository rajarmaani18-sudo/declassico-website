import { useRef } from 'react';

const row1 = [
  {
    title: 'Corporate Events',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgvMCHYltUKEthB1icXI-F-i8QkrPie3UMF66EY3XGe1VwJBKrTxDrY4tNxLvLE5MNEqXHZNkvsj9oFnvdq2FNUrizHnIvMyP4p6FpNHf4Tl4fa8In1tIWsxm2kfzU0UjbEYE473SGvHRfB6_vtHVrf9d8HF4uSM4tjR524T7Uzl0NzqWjfBUmyFuBpyeUoAI-ZyHM2mrLLzZNkzkUU_amsbGI_-zDtHNumLEKuLC0vk5sl22abxe7mQiM12BESmHRDQ',
  },
  {
    title: 'Weddings',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxsrE6UdlgR-XUBO-LCLThwPy25uCMwjWbCVUD3j-MzwbeVMZXozFcOXMbMV7MYCuXAVx5nX_pi12r1aUTqWumOzFFSptKTpIE404KSfSbEdGfqhXD3Y0svxRAMmyu-yzNiHtydVd2aUetdlcy_B0ebm_90zoJ7NwA4sBl3qdEOeL-gUSNTg-L8kK9gv_HM3-bqlmxEgWZlCT2BhAkKN-1qv_VHiwWQSLecb75DzjTF6C5hqiGLyQLYcTqxSEmvF31nw',
  },
  {
    title: 'Restaurants & Cafes',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR-5yBrrZxWcTfFkUlwTEKAbckbtJBW4W1CnSmdhhdVmFiJTutIBQfMlcbwAnurnnAxCp0GVR7dil0TEnjOOrKzHXLWAQhaSQMkBy6oSAcZl_jP_MxRcI37GQcUR_bbXkxanYqTyhngeZZzfI_aZ43b6PMCBfQOp8f1EwLlJwLV9cPXZ8I6U0S_B-zWr9b2dQGQVTDXpSwVm5x0xrOhjrwBpEBzKmaHL7qu5pczBABg4Gzg6u-6_LRQiLNe2F8HOVOjw',
  },
  {
    title: 'Parties & Clubs',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_mOC6wOydtDsC_vnhMVtoGSWR3UEwB7i6Kd9YmjIbXComIVVPv94CwezFKdWWt_fX_9VxGAR6wMTYw8WAWazsULVCqFdUYxJZBWajliM2mqD-RjFw7GUAOg4jD6IIkMcCMtqaWNxprXGtKAjLeIzoaEttdp3FEpZnX88RZGX9jXghtRACu8UeDy8qcU8d5tQ6uq-UKddyNieBIFZfF2nn-mBWa9WSiPuXAwN1mIVxjzo5vGANxFtFUQJPshuiRL-Rlw',
  },
  {
    title: 'Luxury Resorts',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiRnmAqsek_VctM3BfssrRT0xhibOltZ5VIFnYY-opi9QS3YwWBIsEipv_Wjae_JowuUktHx1iJlzpNM4e7WPw8kDDQkWuFxi-rJZ002H4xEZ390ZhZ_Z1qKp1xOW8R4ll4lBRJa6iOIcnEdnjjG_2lwLPoZY5i-IAgkwc7rMk7T2_eWb2bKdNytQ-TWqeDpf9BmpbMVGK3zedIO0dXGuqWJQCawVWCrN2OqzFN3EeZzad7b-6XA9Q',
  },
  {
    title: 'Concerts',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQw3rDT2UM8oZ-UArxNgEZEL9tEHRn3Qyv03TZdWB58Gu7jwF3SQLtbcF2ml_7ILsf0hxwVSE8UDp49uJQv63awJCGk7FQBNJeNPiNjUQb0NC-EmyIPqmgeMYKNJ4ydMfM0dmJMrUAo0wvL-03BabxIsHXQIGlOKYrzbAoX7yiDb85eWCfc9wwPXOTNLvbdsTiFDYw80wgkYragDiHX22Nc2yEfUSY7oCthaHALKdjJo_sb1t8slg4eXCzDv6inuNPgw',
  },
];

const row2 = [
  {
    title: 'Birthdays',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk1PuZr0gOkSsmGlF0dGLJhKtMLOScQ8Fb-u6L0S8e8XjNlwD2fUEyXA7pbTJ6RXSEcWBltbYWoMKs2QeRMEbXVd5gqKQcMouxH3iwFrtt0Wr7o_R-oXQiKOoT8bHlRieqf4m0I3FXn1Sh_wWT0x8Rfl90Xph9FF7dXkOxqU09mop6dPYfhZjFs-4oNT9QUj2iIFsV0zaf2fIi387kqAzoVPnc6l9XLwFvNM97fJLdwvmaf4x7qS0MY0C1e47dYAb2rg',
  },
  {
    title: 'Sports & Fitness',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpSsPkBsJsh6CHP_b7cYIVoTNbCHr9lXFQFsQCfkkTHtHAMVb8FIF7Y-0OX6DLTl0T4En3ctWDcHP8MhtBFq9w0AO1sN_3ouA0NvYUch8KbfYjdRo-oUCu3zKNQBw-yqLHX-RrO1fKbDv9SX4bVWofF1gjw_9R_4WwfhkBQ1VjY_veJKpkKNM3XSwF9YKBYYSTBcqKoBVPkTpmdZAe6_hhD5qNA6FeNVpoD2BeNHQIbKHZkxrUuAmTK6qRNFd1RnCVFw',
  },
  {
    title: 'Baby Showers',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg0GtBpuEy6XdMnnyHRhrvlVWChH4Ui5qZlwys3amnFcMZgjateeT2paTBZv0eUxectg0JFuUO6gjwSB6mrFSY0mbtNr58leQB2H-BANGMlSL9Z4BMfSBCJSnWwfn_EMp_kaKpeKo7YRXkBjBrhoVsG-fpxfwi6a-uYzbo9Cb0JHUBrzwk-qkzl0LWsHcYoUH3-G10iC2nTqc_6AxsC9Pb4ywFpVUwzz8LRQCNDjLBgWA4abY0Mnj6A4motUbWdFmvwQ',
  },
  {
    title: 'Brand Launches',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzO-uGkucNN1-d_mFCBBWT0Uq_m_d7_axoO8-c3uX116_SYDYbK0wRmM72m3fDBDzVSIlgvwT7Li8ywSo8K-C6kjf15ZIskGnFvmG03VHBLrWkvL9Prf77p8_13nf8I7fmPNgDOcqC2jIBFS-cKdFDI2bvEpl7xumxIL-BQnwAhfVDkEhlhYP8t_3TDCoBu-uGcwyKGQskxcJ92Pyfek44sI9-8aRgOmcoNdmRFce5zJPbp3t9qaX2HG7z2GqWfa82_w',
  },
  {
    title: 'Private Gatherings',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwNzUiH4Jate2o7TXbsky-3aRdOC2z1fMtPK6LELvKA0hmT5UDcuLWIDB14PiDwB8wTzaUepipAEZfQe-Ws294dXm8G8rSlIM84GGQ_y_eFLcwvAuTBfScqqG7SWTaVGPmnBl-pyN3HycGjmUWBGQmV4TDsg4-fu05UImxCKLfCoJClv8abY66OhtX_LfSbH41tIgE7zDMwq1AbxCnWaYmhAV_MVAOogdirY-IqEVSaSokXjHG4sEHoDHgE8-CspqD3g',
  },
  {
    title: 'Festivals',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGzmIKHhRA4ChF3y0JyVfkFNN6aOmf4-44OdEpWmbcIrQQefP18em86tueh9_5UQ84ckyEeMPNFd8q9a81GI1sn3LingxPpYEGtOoCgM-y8Lx0mfZCNgn0qYWQ3Nw6q7r61OMagsHdmoUtcdIycHngFYDMrVtNpnmZEArKE1RzgjXPHeykqh_pYkHqs9D5XgWuNG8dUrVBrBk_B-kxuCWjA8YIjls_eLEnnfroTn3Eh4Xhx1P8JeNtFhTnxXQ0z5Mqkg',
  },
];

interface ExploreDesignsSectionProps {
  onSelectCategory?: (category: string) => void;
}

export function ExploreDesignsSection({ onSelectCategory }: ExploreDesignsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const getCardStepDistance = () => {
    if (!containerRef.current) return 200;
    const cards = containerRef.current.querySelectorAll<HTMLElement>('.product-card-item');
    if (cards.length >= 2) {
      const diff = cards[1].offsetLeft - cards[0].offsetLeft;
      if (diff > 0) return diff;
    }
    return window.innerWidth >= 768 ? 224 : 176;
  };

  const moveCarousel = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;

    const step = getCardStepDistance();
    const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth);

    if (maxScroll <= 0) return;

    const currentScroll = container.scrollLeft;
    let targetScroll: number;

    if (direction === 'right') {
      if (currentScroll >= maxScroll - 1) return;
      const nextIndex = Math.floor((currentScroll + 5) / step) + 1;
      targetScroll = Math.min(maxScroll, nextIndex * step);
    } else {
      if (currentScroll <= 1) return;
      const currentIndex = Math.round(currentScroll / step);
      const prevIndex = Math.max(0, currentIndex - 1);
      targetScroll = prevIndex * step;
      if (targetScroll >= currentScroll && currentScroll > 0) {
        targetScroll = Math.max(0, (currentIndex - 2) * step);
      }
    }

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  const scrollLeft = () => moveCarousel('left');
  const scrollRight = () => moveCarousel('right');

  return (
    <section
      id="explore-designs"
      className="w-full bg-white px-4 sm:px-6 md:px-12 select-none py-4 sm:py-5 lg:py-6"
      style={{ scrollMarginTop: '0px' }}
    >
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto">
        <div
          id="explore-designs-headline"
          className="flex items-center justify-center max-w-4xl mx-auto px-2 sm:px-4"
        >
          <div className="flex-1 h-[2px] bg-[#0066FF] max-w-[120px] md:max-w-[180px]" />
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-center uppercase whitespace-nowrap px-2 sm:px-4">
            <span className="text-[#0B1B3D]">EXPLORE OUR</span>{' '}
            <span className="text-[#0066FF]">BOTTLE DESIGNS</span>
          </h2>
          <div className="flex-1 h-[2px] bg-[#0066FF] max-w-[120px] md:max-w-[180px]" />
        </div>

        <p className="text-gray-600 font-medium text-sm md:text-base text-center mt-1.5 sm:mt-2 mb-3.5 sm:mb-4">
          Discover premium custom bottle designs made for every brand, event, and occasion.
        </p>

        <div className="relative w-full">
          <button
            id="designs-prev"
            type="button"
            aria-label="Scroll left"
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none -ml-2 md:-ml-4 xl:hidden"
          >
            <svg
              className="w-5 h-5 fill-none stroke-current stroke-2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div
            ref={containerRef}
            id="designs-scroll-container"
            className="w-full overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-4 sm:px-6 md:px-8 py-1"
          >
            <div className="flex flex-col gap-4 sm:gap-5 min-w-max xl:min-w-0 xl:w-full mx-auto">
              {/* Row 1 */}
              <div className="flex items-start gap-4 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-5 2xl:gap-6 justify-center xl:justify-between w-full">
                {row1.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => onSelectCategory?.(item.title)}
                    className="product-card-item snap-start flex flex-col items-center w-36 md:w-44 lg:w-48 xl:w-auto xl:flex-1 xl:max-w-[210px] text-center cursor-pointer group"
                  >
                    <div className="w-32 h-24 md:w-36 md:h-28 lg:w-40 lg:h-30 xl:w-full xl:max-w-[190px] xl:h-32 mx-auto rounded-xl bg-blue-50/50 border border-blue-100 flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#0066FF]/60 drop-shadow-sm">
                      <img
                        src={item.img}
                        alt={`${item.title} Bottle`}
                        className="w-full h-full object-contain drop-shadow-sm"
                      />
                    </div>
                    <h4 className="mt-2 text-sm md:text-[15px] font-bold text-gray-900 group-hover:text-[#0066FF] transition-colors leading-tight">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex items-start gap-4 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-5 2xl:gap-6 justify-center xl:justify-between w-full">
                {row2.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => onSelectCategory?.(item.title)}
                    className="product-card-item snap-start flex flex-col items-center w-36 md:w-44 lg:w-48 xl:w-auto xl:flex-1 xl:max-w-[210px] text-center cursor-pointer group"
                  >
                    <div className="w-32 h-24 md:w-36 md:h-28 lg:w-40 lg:h-30 xl:w-full xl:max-w-[190px] xl:h-32 mx-auto rounded-xl bg-blue-50/50 border border-blue-100 flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#0066FF]/60 drop-shadow-sm">
                      <img
                        src={item.img}
                        alt={`${item.title} Bottle`}
                        className="w-full h-full object-contain drop-shadow-sm"
                      />
                    </div>
                    <h4 className="mt-2 text-sm md:text-[15px] font-bold text-gray-900 group-hover:text-[#0066FF] transition-colors leading-tight">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            id="designs-next"
            type="button"
            aria-label="Scroll right"
            onClick={scrollRight}
            className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none -mr-2 md:-mr-4 xl:hidden"
          >
            <svg
              className="w-5 h-5 fill-none stroke-current stroke-2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

