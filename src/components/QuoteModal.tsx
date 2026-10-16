import { useState, type FormEvent } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRequirementFor?: string;
}

export function QuoteModal({ isOpen, onClose, initialRequirementFor }: QuoteModalProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bottleSize, setBottleSize] = useState('');
  const [quantity, setQuantity] = useState('');
  const [bottleRequirement, setBottleRequirement] = useState('');
  const [requirementFor, setRequirementFor] = useState(initialRequirementFor || '');
  const [location, setLocation] = useState('');
  const [additional, setAdditional] = useState('');

  const [openDropdown, setOpenDropdown] = useState<'size' | 'quantity' | 'req' | 'for' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleDropdown = (name: 'size' | 'quantity' | 'req' | 'for') => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleClose = () => {
    onClose();
    if (isSubmitted || errorMessage) {
      setTimeout(() => {
        setIsSubmitted(false);
        setErrorMessage(null);
        setName('');
        setCompany('');
        setEmail('');
        setPhone('');
        setBottleSize('');
        setQuantity('');
        setBottleRequirement('');
        setRequirementFor(initialRequirementFor || '');
        setLocation('');
        setAdditional('');
      }, 300);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          bottleSize,
          quantity,
          bottleRequirement,
          requirementFor,
          location,
          additional,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          (data && data.error) ||
            'Unable to submit your quote request at this time. Please try again or reach out to officialdeclassico@gmail.com directly.'
        );
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : 'Unable to submit quote request. Please check your connection and try again.';
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const bottleSizes = ['250 mL', '500 mL', '750 mL', '1 L', 'Not sure yet'];
  const quantities = ['100–500', '500–1,000', '1,000–5,000', '5,000–10,000', '10,000+', 'Not sure yet'];
  const bottleRequirements = [
    'Custom branded bottle',
    'Custom bottle shape + branding',
    'Just custom labeling',
    'Not sure yet',
  ];
  const requirementCategories = [
    'Restaurant / Cafe',
    'Hotel',
    'Wedding / Event',
    'Corporate',
    'Retail',
    'Other',
  ];

  return (
    <div
      id="quote-modal"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 transition-all duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative bg-white w-full max-w-md max-h-[72vh] md:max-h-[500px] rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden mx-auto">
        {/* Header */}
        <div className="px-4 sm:px-6 py-2.5 sm:py-3 border-b border-gray-100 flex items-start justify-between relative bg-white flex-shrink-0">
          <div className="pr-4">
            <div className="inline-flex items-center gap-1.5 mb-0.5">
              <span className="w-4 h-[2px] bg-[#0066FF] rounded-full" />
              <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#0066FF] uppercase">
                CUSTOM ORDER
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black tracking-tight leading-tight text-gray-900">
              Get Your Custom <span className="text-[#0066FF]">Bottle</span>
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-600 mt-0.5">
              Tell us about your requirements for a custom quotation.
            </p>
          </div>

          <button
            type="button"
            aria-label="Close dialog"
            onClick={handleClose}
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

        {/* Body */}
        <div className="overflow-y-auto flex-1 min-h-0 px-4 sm:px-6 py-2.5 sm:py-3 no-scrollbar">
          {isSubmitted ? (
            <div className="py-12 px-2 text-center flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-blue-50 text-[#0066FF] border border-blue-100 flex items-center justify-center mb-4 shadow-sm">
                <svg
                  className="w-7 h-7 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 mb-3">
                Quote Request Submitted Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">
                Thank you for sharing your requirements with DeClassico. Our team has received your request and will get back to you shortly with your quotation.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-2 sm:gap-2.5" onSubmit={handleSubmit}>
              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2" strokeLinecap="round" />
                    <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>{errorMessage}</span>
                </div>
              )}
              <div className="flex flex-col">
                <label className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-0.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-white border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-0.5">
                  Company / Restaurant Name
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. The Urban Table, Horizon Events"
                  className="w-full px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-white border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                <div className="flex flex-col">
                  <label className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-0.5">
                    Email ID
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-white border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-0.5">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-white border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                  />
                </div>
              </div>

              {/* Bottle Size dropdown */}
              <div className="flex flex-col">
                <label className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-0.5">
                  Bottle Size
                </label>
                <div className="w-full flex flex-col relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown('size')}
                    className="w-full bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm text-gray-800 focus:outline-none focus:border-[#0066FF] cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <span className={bottleSize ? 'text-gray-900 font-medium' : 'text-gray-500'}>
                      {bottleSize || 'Select bottle size'}
                    </span>
                    <svg
                      className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
                        openDropdown === 'size' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {openDropdown === 'size' && (
                    <div className="w-full mt-1 border border-slate-200 rounded-lg bg-white overflow-hidden shadow-sm flex flex-col z-20">
                      {bottleSizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => {
                            setBottleSize(size);
                            setOpenDropdown(null);
                          }}
                          className="px-3 py-1.5 text-left text-xs text-gray-800 hover:bg-blue-50/60 hover:text-[#0066FF] transition-colors border-b border-gray-100 last:border-b-0 cursor-pointer"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Quantity dropdown */}
              <div className="flex flex-col">
                <label className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-0.5">
                  Quantity Required
                </label>
                <div className="w-full flex flex-col relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown('quantity')}
                    className="w-full bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm text-gray-800 focus:outline-none focus:border-[#0066FF] cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <span className={quantity ? 'text-gray-900 font-medium' : 'text-gray-500'}>
                      {quantity || 'Select quantity'}
                    </span>
                    <svg
                      className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
                        openDropdown === 'quantity' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {openDropdown === 'quantity' && (
                    <div className="w-full mt-1 border border-slate-200 rounded-lg bg-white overflow-hidden shadow-sm flex flex-col z-20">
                      {quantities.map((qty) => (
                        <button
                          key={qty}
                          type="button"
                          onClick={() => {
                            setQuantity(qty);
                            setOpenDropdown(null);
                          }}
                          className="px-3 py-1.5 text-left text-xs text-gray-800 hover:bg-blue-50/60 hover:text-[#0066FF] transition-colors border-b border-gray-100 last:border-b-0 cursor-pointer"
                        >
                          {qty}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottle Requirement dropdown */}
              <div className="flex flex-col">
                <label className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-0.5">
                  Bottle Requirement
                </label>
                <div className="w-full flex flex-col relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown('req')}
                    className="w-full bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm text-gray-800 focus:outline-none focus:border-[#0066FF] cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <span className={bottleRequirement ? 'text-gray-900 font-medium' : 'text-gray-500'}>
                      {bottleRequirement || 'Select bottle requirement'}
                    </span>
                    <svg
                      className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
                        openDropdown === 'req' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {openDropdown === 'req' && (
                    <div className="w-full mt-1 border border-slate-200 rounded-lg bg-white overflow-hidden shadow-sm flex flex-col z-20">
                      {bottleRequirements.map((req) => (
                        <button
                          key={req}
                          type="button"
                          onClick={() => {
                            setBottleRequirement(req);
                            setOpenDropdown(null);
                          }}
                          className="px-3 py-1.5 text-left text-xs text-gray-800 hover:bg-blue-50/60 hover:text-[#0066FF] transition-colors border-b border-gray-100 last:border-b-0 cursor-pointer"
                        >
                          {req}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Requirement For category dropdown */}
              <div className="flex flex-col">
                <label className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-0.5">
                  Requirement For
                </label>
                <div className="w-full flex flex-col relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown('for')}
                    className="w-full bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm text-gray-800 focus:outline-none focus:border-[#0066FF] cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <span className={requirementFor ? 'text-gray-900 font-medium' : 'text-gray-500'}>
                      {requirementFor || 'Select requirement category'}
                    </span>
                    <svg
                      className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
                        openDropdown === 'for' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {openDropdown === 'for' && (
                    <div className="w-full mt-1 border border-slate-200 rounded-lg bg-white overflow-hidden shadow-sm flex flex-col z-20">
                      {requirementCategories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => {
                            setRequirementFor(cat);
                            setOpenDropdown(null);
                          }}
                          className="px-3 py-1.5 text-left text-xs text-gray-800 hover:bg-blue-50/60 hover:text-[#0066FF] transition-colors border-b border-gray-100 last:border-b-0 cursor-pointer"
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-0.5">
                  Delivery Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City, State, or Pincode"
                  className="w-full px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-white border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-0.5">
                  Additional Requirements
                </label>
                <textarea
                  rows={2}
                  value={additional}
                  onChange={(e) => setAdditional(e.target.value)}
                  placeholder="Any specific label finish, cap color, delivery deadlines, or special requests..."
                  className="w-full px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-white border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0066FF] hover:bg-blue-600 disabled:bg-[#0066FF]/70 text-white font-semibold py-2 sm:py-2.5 px-5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-1 sm:mt-1.5 uppercase tracking-wide text-xs sm:text-sm"
              >
                {isSubmitting ? 'SUBMITTING...' : 'GET MY QUOTE'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
