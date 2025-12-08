"use client";

import { HubSpotForm } from "@/components/molecules/HubSpotForm/HubSpotForm";
import { useEffect, useRef, useState } from "react";

interface HubSpotFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HubSpotFormDialog: React.FC<HubSpotFormDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [isFormLoaded, setIsFormLoaded] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when dialog is open and detect form load
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Reset form loaded state when dialog opens
      setIsFormLoaded(false);

      // Check for HubSpot form in DOM
      const checkFormLoaded = () => {
        const formElement = document.querySelector(
          ".hs-form-frame .hs-form, .hs-form"
        );
        if (formElement) {
          setIsFormLoaded(true);
          return true;
        }
        return false;
      };

      // Set up MutationObserver to watch for form appearing
      const observer = new MutationObserver(() => {
        if (checkFormLoaded()) {
          observer.disconnect();
        }
      });

      // Start observing
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      // Check immediately in case form is already loaded
      checkFormLoaded();

      // Fallback timeout in case observer doesn't catch it
      const fallbackTimer = setTimeout(() => {
        setIsFormLoaded(true);
        observer.disconnect();
      }, 3000);

      return () => {
        observer.disconnect();
        clearTimeout(fallbackTimer);
      };
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Custom styles for HubSpot form */}
      <style jsx global>{`
        .hs-form-frame {
          font-family: inherit !important;
        }

        .hs-form-frame .hs-form fieldset {
          max-width: 100% !important;
        }

        .hs-form-frame .hs-form .hs-form-field {
          margin-bottom: 0.5rem !important;
        }

        .hs-form-frame .hs-form label {
          font-size: 0.8125rem !important;
          font-weight: 500 !important;
          color: #18181b !important;
          margin-bottom: 0.125rem !important;
          display: block !important;
        }

        .hs-form-frame .hs-form input[type="text"],
        .hs-form-frame .hs-form input[type="email"],
        .hs-form-frame .hs-form input[type="tel"],
        .hs-form-frame .hs-form textarea,
        .hs-form-frame .hs-form select {
          width: 100% !important;
          padding: 0.4rem 0.625rem !important;
          border: 1px solid #e4e4e7 !important;
          border-radius: 0.5rem !important;
          font-size: 0.8125rem !important;
          transition: all 0.2s !important;
        }

        .hs-form-frame .hs-form textarea {
          min-height: 50px !important;
        }

        .hs-form-frame .hsfc-Step__Content,
        .hsfc-Step__Content {
          margin-bottom: 0 !important;
        }

        .hs-form-frame .hsfc-Row,
        .hsfc-Row {
          margin-bottom: 0.375rem !important;
        }

        .hs-form-frame .hs-form input:focus,
        .hs-form-frame .hs-form textarea:focus,
        .hs-form-frame .hs-form select:focus {
          outline: none !important;
          border-color: #8f03a0 !important;
          box-shadow: 0 0 0 3px rgba(143, 3, 160, 0.1) !important;
        }

        .hs-form-frame .hs-form .hs-button {
          background: linear-gradient(to right, #8f03a0, #4d28df) !important;
          color: white !important;
          padding: 0.5rem 1.5rem !important;
          border-radius: 9999px !important;
          font-weight: 600 !important;
          border: none !important;
          cursor: pointer !important;
          transition: opacity 0.2s !important;
          width: 100% !important;
          margin-top: 0.25rem !important;
          font-size: 0.875rem !important;
        }

        .hs-form-frame .hs-form .hs-button:hover {
          opacity: 0.9 !important;
        }

        .hs-form-frame .hs-form .hs-error-msgs {
          list-style: none !important;
          padding: 0 !important;
          margin-top: 0.125rem !important;
        }

        .hs-form-frame .hs-form .hs-error-msg {
          color: #ef4444 !important;
          font-size: 0.6875rem !important;
        }

        .hs-form-frame .hs-form .legal-consent-container {
          margin-top: 0.375rem !important;
          margin-bottom: 0.25rem !important;
          font-size: 0.6875rem !important;
          line-height: 1.3 !important;
        }

        .hs-form-frame .hs-form .legal-consent-container p {
          margin: 0 !important;
        }

        /* Success message styling */
        .hs-form-frame .submitted-message,
        .submitted-message {
          text-align: center !important;
          padding: 2rem 1rem !important;
        }

        .hs-form-frame .submitted-message h2,
        .submitted-message h2 {
          color: #18181b !important;
          font-size: 1.875rem !important;
          font-weight: 600 !important;
          margin-bottom: 0.5rem !important;
        }

        .hs-form-frame .submitted-message p,
        .submitted-message p {
          color: #52525b !important;
          font-size: 1rem !important;
          margin: 0 !important;
        }
      `}</style>

      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
        onClick={handleBackdropClick}
      >
        <div
          ref={dialogRef}
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl my-8 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close dialog"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Dialog content - scrollable with custom scrollbar */}
          <div className="overflow-y-auto flex-1 p-5 pr-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
            <div className="pr-8">
              <h2 className="text-2xl font-semibold text-zinc-950 mb-1">
                Get a Demo
              </h2>
              <p className="text-xs text-zinc-600 mb-3">
                Fill out the form below and we'll get back to you shortly.
              </p>

              {/* Loading State */}
              {!isFormLoaded && (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-12 h-12 border-4 border-purple/20 border-t-purple rounded-full animate-spin mb-4"></div>
                  <p className="text-sm text-zinc-600">Loading form...</p>
                </div>
              )}

              {/* HubSpot Form */}
              <div className={isFormLoaded ? "block" : "hidden"}>
                <HubSpotForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
