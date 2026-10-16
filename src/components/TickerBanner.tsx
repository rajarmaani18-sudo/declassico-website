import { useEffect, useRef, useState } from 'react';

const tickerItems = [
  {
    title: 'Vikram & Diya',
    desc: 'Personalized pink wedding celebration water bottles.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBVNWrDCrnUEYc6EDrzT1XM1G3mcCIcpLHkcpFyd2Cb9Dau9lIub3ecYwXy_3vAsDXE3_gTjzC01gJmhFDVdg0sO5CBfnenha9N77LX8k9ZgYL1X4cxe-ZBaUdraEzSQKV39fldM6wdphYnUsERmKx_tPDZVX2aAyZoIn58WUq7wn6040JswoxyIaES6JLiVgeZV1Y4DIuyrVYwGKoMbvfJnkF506nAYU72v2emoBu1yBaf8t7_1XO',
  },
  {
    title: "It's a Boy!",
    desc: 'Crowned baby boy celebration splash bottle design.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQzO8pqbDWduMJqxew_HVk-NzhgNJ4x9xLD54wep5H5X17U9Yye2Fo1tT8JZKiYmXv96T2i2iO338yiA4LhmdNDxq7cAZ1QfSE2Y2OImMwzIb_UThqqN5OPWj2-BzxrM1k3cqgWX4YuzrbxXr6UOvBcUstk5W_wDfZY782RRDT14A9n7lNXSFsKiMwhd15IZ2woLjB-4UfuIJqBSsX4Y605cAcYoiiXMUe5WXBrpwVK3Mr14X0hCAV',
  },
  {
    title: 'Matthew weds Grace',
    desc: 'Elegant royal floral wedding bottle design.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDsl19PS-wv84o8KvuE8przrSD050oltdu9SWEEznTSIz2whrLLXptUzSnNG4BmKhZhMaqrUC8GO5BtfdEUFXO_y7mi9jeX55NwDUPrWs9I04SGQapfjq66aTbCtXXWLuQ8Dj1a2RXvxdDh5yMS3mQJrpZu8e8BoPYeIElRJreMI1riAks2rjqJBv884bSzdXDcvPn9bDx__sdu7zPNGFCnznwTf5yw2zY42zdHlZxSwAhHfMtHpgE',
  },
  {
    title: 'Happy Birthday Anaya',
    desc: 'Personalized pink birthday celebration bottle design.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFLIs_RbfzAr1AvDl2Ku3yNsbQtGHStPZ3L8wf2M58X9YmmcRHUIzOKntpPhXjiNonUdnXXYpAiQPl93VTsXShxFJqA8MycMltopVi0qpSrXeQh_Z_lFV7klzLDoDC0gfw97Fa5inVo6SIK8_y5tFJcC_gRxblJaMpneMWAVs709gVf-ad7Iq6ft3tBP3ZJQW4-zbpg78RUApSkcNHO7FCezoo_VG9YM8fT3IZ1UY-_kPNHaZG0LEr',
  },
];

export function TickerBanner() {
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const currentXRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      if (!isPaused && !isHovered && track) {
        currentXRef.current += 0.85;
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0 && currentXRef.current >= halfWidth) {
          currentXRef.current -= halfWidth;
        }
        track.style.transform = `translate3d(-${currentXRef.current}px, 0px, 0px)`;
      }
      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPaused, isHovered]);

  const allItems = [...tickerItems, ...tickerItems];

  return (
    <div
      id="ticker-banner"
      className="w-full bg-white relative overflow-hidden border-t-2 border-b-2 border-[#0066FF] shadow-sm flex-shrink-0 h-24 select-none"
    >
      <div className="absolute top-0 left-0 z-30 pointer-events-none bg-[#0066FF] text-white font-black text-[11px] tracking-[0.05em] uppercase px-3.5 py-1 h-[27px] leading-[18px] whitespace-nowrap inline-flex items-center shadow-sm">
        TRENDING BOTTLE DESIGNS
      </div>

      <button
        id="pause-button"
        type="button"
        aria-label={isPaused ? 'Resume ticker' : 'Pause ticker'}
        title={isPaused ? 'Resume ticker' : 'Pause ticker'}
        onClick={() => setIsPaused((prev) => !prev)}
        className="absolute top-0 right-0 bottom-0 w-[44px] z-40 bg-[#0066FF] text-white flex items-center justify-center cursor-pointer border-none hover:brightness-110 active:brightness-95 transition-all focus:outline-none"
      >
        {isPaused ? (
          <svg className="w-3.5 h-4 fill-current ml-0.5" viewBox="0 0 14 18">
            <polygon fill="white" points="2,1 13,9 2,17" />
          </svg>
        ) : (
          <svg className="w-3.5 h-4 fill-current" viewBox="0 0 14 18">
            <rect fill="white" height="16" rx="0.75" width="3.5" x="1.5" y="1" />
            <rect fill="white" height="16" rx="0.75" width="3.5" x="9" y="1" />
          </svg>
        )}
      </button>

      <div
        id="ticker-viewport"
        className="w-full h-full overflow-hidden relative bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={trackRef}
          id="ticker-track"
          className="flex items-center h-full will-change-transform"
        >
          {allItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center px-7 h-full flex-shrink-0 border-r border-gray-200 pt-3"
            >
              <div className="flex-shrink-0 h-[76px] w-[70px] flex items-center justify-center relative mr-3.5">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[72px] w-auto max-w-[68px] object-contain drop-shadow-sm transition-transform hover:scale-105 duration-200"
                />
              </div>
              <div className="flex flex-col justify-center min-w-[200px] max-w-[220px]">
                <h3 className="text-[13.5px] font-bold text-gray-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11.5px] text-gray-600 leading-snug mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
