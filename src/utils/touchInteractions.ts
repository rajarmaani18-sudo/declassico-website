/**
 * Touch Interaction Manager for touchscreen devices.
 * Bridges desktop hover visual states to mobile touch/tap interactions naturally.
 * Provides immediate feedback on tap without sticky hover or scroll interference.
 */

export function initTouchInteractions(): () => void {
  if (typeof window === 'undefined') return () => {};

  let activeElements: HTMLElement[] = [];
  let startX = 0;
  let startY = 0;
  let startTime = 0;
  let isScrolled = false;
  let clearTimer: ReturnType<typeof setTimeout> | null = null;

  const clearActive = () => {
    if (clearTimer) {
      clearTimeout(clearTimer);
      clearTimer = null;
    }
    if (activeElements.length > 0) {
      activeElements.forEach((el) => {
        el.classList.remove('touch-active');
      });
      activeElements = [];
    }
  };

  const onTouchStart = (e: TouchEvent) => {
    // Clear any previous active elements immediately
    clearActive();
    isScrolled = false;

    if (!e.touches || e.touches.length === 0) return;
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    startTime = Date.now();

    const target = e.target as HTMLElement | null;
    if (!target) return;

    // Identify interactive elements and parent groups
    const targetsToActivate = new Set<HTMLElement>();

    // 1. Closest .group (cards like Why Choose, How It Works, Explore Designs, Growth Metrics, Need Assistance)
    const group = target.closest('.group') as HTMLElement | null;
    if (group) {
      targetsToActivate.add(group);
    }

    // 2. Interactive elements (buttons, links, clickable badges, carousel arrows, dots, nav items)
    const interactive = target.closest(
      'button, a, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer, .t-dot, .carousel-dot, .faq-toggle-btn'
    ) as HTMLElement | null;
    if (interactive) {
      targetsToActivate.add(interactive);
    }

    // 3. Any element with hover styling
    const hoverEl = target.closest('[class*="hover:"]') as HTMLElement | null;
    if (hoverEl) {
      targetsToActivate.add(hoverEl);
    }

    if (targetsToActivate.size > 0) {
      activeElements = Array.from(targetsToActivate);
      activeElements.forEach((el) => {
        el.classList.add('touch-active');
      });
    }
  };

  const onTouchMove = (e: TouchEvent) => {
    if (isScrolled || activeElements.length === 0) return;
    if (!e.touches || e.touches.length === 0) return;

    const touch = e.touches[0];
    const dx = Math.abs(touch.clientX - startX);
    const dy = Math.abs(touch.clientY - startY);

    // If movement exceeds small threshold (8px), this is a scroll gesture:
    // cancel touch feedback immediately so it never interferes with scrolling
    if (dx > 8 || dy > 8) {
      isScrolled = true;
      clearActive();
    }
  };

  const onTouchEnd = () => {
    if (isScrolled || activeElements.length === 0) {
      clearActive();
      return;
    }

    // Natural tap completion: ensure feedback is visible for at least 160ms total
    // so fast finger taps are perceptible and feel responsive
    const elapsed = Date.now() - startTime;
    const remainingDelay = Math.max(80, 160 - elapsed);

    clearTimer = setTimeout(() => {
      clearActive();
    }, remainingDelay);
  };

  const onTouchCancel = () => {
    clearActive();
  };

  // Register passive event listeners for high performance without scroll blocking
  window.addEventListener('touchstart', onTouchStart, { passive: true });
  window.addEventListener('touchmove', onTouchMove, { passive: true });
  window.addEventListener('touchend', onTouchEnd, { passive: true });
  window.addEventListener('touchcancel', onTouchCancel, { passive: true });

  return () => {
    clearActive();
    window.removeEventListener('touchstart', onTouchStart);
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('touchend', onTouchEnd);
    window.removeEventListener('touchcancel', onTouchCancel);
  };
}
