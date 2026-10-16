import { useState } from 'react';

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
  onOpenContact: () => void;
}

const faqs = [
  {
    id: 1,
    q: '1. What is DeClassico?',
    a: 'DeClassico provides premium custom-branded bottled water for restaurants, cafés, hotels, events, and businesses.',
  },
  {
    id: 2,
    q: '2. Can I add my own logo and branding?',
    a: 'Yes. Your logo, brand identity, and required artwork can be customized on the bottle.',
  },
  {
    id: 3,
    q: '3. What bottle sizes are available?',
    a: 'We offer 250 mL, 500 mL, 750 mL, and 1 L options, depending on your requirement.',
  },
  {
    id: 4,
    q: '4. Can I get a completely custom bottle shape?',
    a: 'Yes. Custom bottle shapes can be developed with a dedicated mould, subject to quantity and production requirements.',
  },
  {
    id: 5,
    q: '5. What is the minimum order quantity?',
    a: 'The minimum quantity depends on the bottle size, branding method, and customization required. Contact us for a quotation.',
  },
  {
    id: 6,
    q: '6. How long does production take?',
    a: 'Production time depends on the quantity, bottle type, branding, and customization. We will confirm the timeline with your quotation.',
  },
  {
    id: 7,
    q: '7. Can I order bottles for weddings or events?',
    a: 'Yes. DeClassico can provide custom-branded bottles for weddings, events, corporate functions, and special occasions.',
  },
  {
    id: 8,
    q: '8. Do you deliver to my city?',
    a: 'Delivery availability depends on your location and order quantity. Contact us with your delivery location and we will confirm.',
  },
  {
    id: 9,
    q: '9. Can I see the design before production?',
    a: 'Yes. The branding design can be reviewed and approved before production begins.',
  },
  {
    id: 10,
    q: '10. How do I get a quote?',
    a: 'Click "Get Your Custom Bottle" and submit your requirements. Our team will review them and provide a quotation.',
    hasCta: true,
  },
];

export function FaqModal({ isOpen, onClose, onOpenQuote, onOpenContact }: FaqModalProps) {
  const [openId, setOpenId] = useState<number | null>(1);

  if (!isOpen) return null;

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      id="faq-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm select-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-white w-full max-w-md max-h-[72vh] md:max-h-[500px] rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden mx-auto text-gray-900">
        {/* Header */}
        <div className="px-4 sm:px-6 py-2.5 sm:py-3 border-b border-gray-100 flex items-start justify-between relative bg-white flex-shrink-0">
          <div className="pr-4">
            <div className="inline-flex items-center gap-1.5 mb-0.5">
              <span className="w-4 h-[2px] bg-[#0066FF] rounded-full" />
              <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#0066FF] uppercase">
                KNOWLEDGE BASE
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black tracking-tight leading-tight">
              <span className="text-gray-900">Frequently Asked</span>{' '}
              <span className="text-[#0066FF]">Questions</span>
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-600 mt-0.5">
              Everything you need to know about ordering custom bottles.
            </p>
          </div>

          <button
            type="button"
            aria-label="Close dialog"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors focus:outline-none cursor-pointer flex-shrink-0 mt-0.5"
          >
            <svg
              className="w-3.5 h-3.5 fill-none stroke-current stroke-2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="18" x2="6" y1="6" y2="18" />
              <line x1="6" x2="18" y1="6" y2="18" />
            </svg>
          </button>
        </div>

        {/* Accordions */}
        <div className="overflow-y-auto flex-1 min-h-0 px-4 sm:px-6 py-2.5 sm:py-3 no-scrollbar flex flex-col gap-2.5">
          {faqs.map((faq) => {
            const isOpenItem = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-xl bg-white transition-colors hover:border-[#0066FF]/40 h-auto"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="faq-toggle-btn w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gray-50/60 hover:bg-blue-50/40 text-left font-bold text-gray-900 text-xs sm:text-sm flex items-center justify-between gap-3 focus:outline-none transition-colors rounded-xl cursor-pointer"
                >
                  <span className="text-left">{faq.q}</span>
                  <svg
                    className={`w-4 h-4 text-[#0066FF] flex-shrink-0 transition-transform duration-200 transform ${
                      isOpenItem ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {isOpenItem && (
                  <div className="px-3.5 sm:px-4 pt-1.5 pb-3 text-slate-600 text-xs leading-relaxed border-t border-slate-100">
                    <p className={faq.hasCta ? 'mb-2' : ''}>{faq.a}</p>
                    {faq.hasCta && (
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onOpenQuote();
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0066FF] hover:bg-blue-600 text-white font-semibold text-xs rounded-lg shadow-sm transition-colors cursor-pointer"
                      >
                        <span>Get Your Custom Bottle</span>
                        <span>→</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {/* Still have questions bottom callout */}
          <div className="mt-1 p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
            <div className="flex flex-col">
              <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                Still have questions? We're here to help.
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-600">
                Speak directly with our team regarding custom requirements.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-4 py-1.5 bg-[#0066FF] hover:bg-blue-600 text-white font-bold text-xs rounded-lg shadow-sm hover:shadow-md transition-all uppercase tracking-wider flex-shrink-0 cursor-pointer"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
