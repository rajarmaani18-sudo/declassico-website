import { useState } from 'react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenFaq: () => void;
}

export function Navbar({ onOpenContact, onOpenFaq }: NavbarProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'products' | 'branding' | 'gallery' | 'faq' | 'contact'>('home');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const ticker = document.getElementById('ticker-banner');
    const header = document.getElementById('main-navbar');
    let offset = 0;
    if (ticker && window.getComputedStyle(ticker).position === 'fixed') {
      offset += ticker.offsetHeight;
    }
    if (header && window.getComputedStyle(header).position === 'fixed') {
      offset += header.offsetHeight;
    }
    const rect = el.getBoundingClientRect();
    const targetY = rect.top + window.pageYOffset - offset - 10;
    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
  };

  const handleNavClick = (tab: typeof activeTab, targetId?: string) => {
    setActiveTab(tab);
    if (targetId) {
      scrollToSection(targetId);
    } else if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleMobileNav = (tab: typeof activeTab, targetId?: string) => {
    setMobileDrawerOpen(false);
    setActiveTab(tab);
    if (targetId) {
      setTimeout(() => scrollToSection(targetId), 250);
    } else if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header id="main-navbar" className="w-full bg-[#000000] text-white flex flex-col items-center px-6 py-1 select-none">
      {/* Desktop & Tablet Brand Logo */}
      <div className="hidden md:block text-center mb-1">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="inline-block text-[44px] sm:text-[48px] font-black tracking-tight leading-none focus:outline-none transition-transform hover:scale-[1.02] duration-200"
        >
          <span className="text-white">De</span>
          <span className="text-[#0066FF]">Classico</span>
        </a>
      </div>

      {/* Desktop & Tablet Full Nav Links */}
      <nav className="hidden md:flex items-center justify-center flex-wrap gap-7 sm:gap-9 md:gap-10">
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className={`group relative py-1 text-[15px] sm:text-[16px] cursor-pointer focus:outline-none transition-colors ${
            activeTab === 'home'
              ? 'font-semibold text-[#0066FF]'
              : 'font-medium text-white hover:text-gray-200'
          }`}
        >
          <span>Home</span>
          <span
            className={`nav-indicator absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0066FF] rounded-full transition-all ${
              activeTab === 'home' ? 'block' : 'hidden'
            }`}
          />
        </button>

        <button
          type="button"
          onClick={() => handleNavClick('about', 'why-choose-section')}
          className={`group relative py-1 text-[15px] sm:text-[16px] cursor-pointer focus:outline-none transition-colors ${
            activeTab === 'about'
              ? 'font-semibold text-[#0066FF]'
              : 'font-medium text-white hover:text-gray-200'
          }`}
        >
          <span>About Us</span>
          <span
            className={`nav-indicator absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0066FF] rounded-full transition-all ${
              activeTab === 'about' ? 'block' : 'hidden'
            }`}
          />
        </button>

        <button
          type="button"
          onClick={() => handleNavClick('products', 'explore-designs')}
          className={`group relative py-1 text-[15px] sm:text-[16px] cursor-pointer focus:outline-none transition-colors ${
            activeTab === 'products'
              ? 'font-semibold text-[#0066FF]'
              : 'font-medium text-white hover:text-gray-200'
          }`}
        >
          <span>Products</span>
          <span
            className={`nav-indicator absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0066FF] rounded-full transition-all ${
              activeTab === 'products' ? 'block' : 'hidden'
            }`}
          />
        </button>

        <button
          type="button"
          onClick={() => handleNavClick('branding', 'how-it-works-section')}
          className={`group relative py-1 text-[15px] sm:text-[16px] cursor-pointer focus:outline-none transition-colors ${
            activeTab === 'branding'
              ? 'font-semibold text-[#0066FF]'
              : 'font-medium text-white hover:text-gray-200'
          }`}
        >
          <span>Custom Branding</span>
          <span
            className={`nav-indicator absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0066FF] rounded-full transition-all ${
              activeTab === 'branding' ? 'block' : 'hidden'
            }`}
          />
        </button>

        <button
          type="button"
          onClick={() => handleNavClick('gallery', 'our-gallery')}
          className={`group relative py-1 text-[15px] sm:text-[16px] cursor-pointer focus:outline-none transition-colors ${
            activeTab === 'gallery'
              ? 'font-semibold text-[#0066FF]'
              : 'font-medium text-white hover:text-gray-200'
          }`}
        >
          <span>Gallery</span>
          <span
            className={`nav-indicator absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0066FF] rounded-full transition-all ${
              activeTab === 'gallery' ? 'block' : 'hidden'
            }`}
          />
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveTab('faq');
            onOpenFaq();
          }}
          className={`group relative py-1 text-[15px] sm:text-[16px] cursor-pointer focus:outline-none transition-colors ${
            activeTab === 'faq'
              ? 'font-semibold text-[#0066FF]'
              : 'font-medium text-white hover:text-gray-200'
          }`}
        >
          <span>FAQ</span>
          <span
            className={`nav-indicator absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0066FF] rounded-full transition-all ${
              activeTab === 'faq' ? 'block' : 'hidden'
            }`}
          />
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveTab('contact');
            onOpenContact();
          }}
          className={`group relative py-1 text-[15px] sm:text-[16px] cursor-pointer focus:outline-none transition-colors ${
            activeTab === 'contact'
              ? 'font-semibold text-[#0066FF]'
              : 'font-medium text-white hover:text-gray-200'
          }`}
        >
          <span>Contact Us</span>
          <span
            className={`nav-indicator absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0066FF] rounded-full transition-all ${
              activeTab === 'contact' ? 'block' : 'hidden'
            }`}
          />
        </button>
      </nav>

      {/* Mobile Header Bar */}
      <div className="flex md:hidden w-full items-center justify-between py-2">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="text-2xl sm:text-3xl font-black tracking-tight leading-none focus:outline-none"
        >
          <span className="text-white">De</span>
          <span className="text-[#0066FF]">Classico</span>
        </a>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setMobileDrawerOpen(true)}
            className="w-10 h-10 flex items-center justify-center text-white focus:outline-none rounded-lg hover:bg-white/10 active:scale-95 transition-all"
          >
            <svg
              className="w-6 h-6 fill-none stroke-current stroke-2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay & Menu */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />
          <div className="relative z-10 w-4/5 max-w-xs h-full bg-black border-l border-[#0066FF]/30 p-6 flex flex-col right-0 ml-auto transition-transform duration-300 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-end pb-6 border-b border-gray-800">
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setMobileDrawerOpen(false)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              >
                <svg
                  className="w-5 h-5 fill-none stroke-current stroke-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line x1="18" x2="6" y1="6" y2="18" />
                  <line x1="6" x2="18" y1="6" y2="18" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-4 mt-6 flex-grow">
              <button
                type="button"
                onClick={() => handleMobileNav('home')}
                className="text-left py-2 text-base font-semibold text-[#0066FF] hover:text-[#0066FF] transition-colors border-b border-gray-900"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => handleMobileNav('about', 'why-choose-section')}
                className="text-left py-2 text-base font-medium text-white hover:text-[#0066FF] transition-colors border-b border-gray-900"
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => handleMobileNav('products', 'explore-designs')}
                className="text-left py-2 text-base font-medium text-white hover:text-[#0066FF] transition-colors border-b border-gray-900"
              >
                Products
              </button>
              <button
                type="button"
                onClick={() => handleMobileNav('branding', 'how-it-works-section')}
                className="text-left py-2 text-base font-medium text-white hover:text-[#0066FF] transition-colors border-b border-gray-900"
              >
                Custom Branding
              </button>
              <button
                type="button"
                onClick={() => handleMobileNav('gallery', 'our-gallery')}
                className="text-left py-2 text-base font-medium text-white hover:text-[#0066FF] transition-colors border-b border-gray-900"
              >
                Gallery
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileDrawerOpen(false);
                  onOpenFaq();
                }}
                className="text-left py-2 text-base font-medium text-white hover:text-[#0066FF] transition-colors border-b border-gray-900"
              >
                FAQ
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileDrawerOpen(false);
                  onOpenContact();
                }}
                className="text-left py-2 text-base font-medium text-white hover:text-[#0066FF] transition-colors border-b border-gray-900"
              >
                Contact Us
              </button>
            </nav>

            <div className="pt-6 pb-2 flex flex-col gap-4">
              <div className="flex flex-col items-center justify-center gap-2 pt-1">
                <span className="text-xs font-semibold text-gray-400 tracking-wider">
                  Follow us on
                </span>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="https://facebook.com/realdeclassico"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/40 text-[#0066FF] hover:bg-[#0066FF] hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/realdeclassico"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/40 text-[#0066FF] hover:bg-[#0066FF] hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@realdeclassico"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-8 h-8 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/40 text-[#0066FF] hover:bg-[#0066FF] hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/919876543210?text=Hi%20DeClassico%2C%20I%20would%20like%20to%20enquire%20about%20custom%20bottled%20water."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-8 h-8 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/40 text-[#0066FF] hover:bg-[#0066FF] hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
