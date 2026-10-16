import { useState, type FormEvent } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    // Reset state after dialog closes if it was submitted or has error
    if (isSubmitted || errorMessage) {
      setTimeout(() => {
        setIsSubmitted(false);
        setErrorMessage(null);
        setFormData({ name: '', email: '', phone: '', query: '' });
      }, 300);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          (data && data.error) ||
            'Unable to send your request at this time. Please try again or email officialdeclassico@gmail.com directly.'
        );
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : 'Unable to send enquiry. Please check your connection and try again.';
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 sm:p-7 text-gray-900">
        {/* Preserved X close button */}
        <button
          type="button"
          aria-label="Close dialog"
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors focus:outline-none cursor-pointer"
        >
          <svg
            className="w-4 h-4 fill-none stroke-current stroke-2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <line x1="18" x2="6" y1="6" />
            <line x1="6" x2="18" y1="6" />
          </svg>
        </button>

        {isSubmitted ? (
          /* Replaced form content inside existing popup with required success message */
          <div className="py-6 px-1 text-center flex flex-col items-center justify-center">
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
              Request Submitted Successfully!
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">
              Thank you for contacting DeClassico. Your request has been received, and our team will reach out to you shortly.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-5">
              <h3 className="text-2xl font-bold tracking-tight">
                <span className="text-gray-900">Contact</span>{' '}
                <span className="text-[#0066FF]">Us</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                We'd love to hear from you. Send us a message and our team will get back to you shortly.
              </p>
            </div>

            <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
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

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-800">Name</label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Full Name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors disabled:opacity-60"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-800">Email ID</label>
                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors disabled:opacity-60"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-800">Contact Number</label>
                <input
                  type="tel"
                  required
                  disabled={isSubmitting}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors disabled:opacity-60"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-800">Your Query</label>
                <textarea
                  required
                  rows={3}
                  disabled={isSubmitting}
                  value={formData.query}
                  onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                  placeholder="Tell us about your requirements or question..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0066FF] transition-colors disabled:opacity-60"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full py-3 bg-[#0066FF] hover:bg-blue-600 disabled:bg-[#0066FF]/70 text-white font-bold text-sm rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all focus:outline-none uppercase tracking-wider cursor-pointer"
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
