"use client";

interface EmailCaptureInputProps {
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (email: string) => void;
  className?: string;
  inputHeight?: string;
  buttonHeight?: string;
}

export const EmailCaptureInput = ({
  placeholder = "Enter your email",
  buttonText = "Join the beta waitlist",
  onSubmit,
  className = "",
  inputHeight = "h-12",
  buttonHeight = "h-12",
}: EmailCaptureInputProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    if (onSubmit && email) {
      onSubmit(email);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative max-w-xl w-full ${className}`}
    >
      <input
        type="email"
        name="email"
        placeholder={placeholder}
        className={`w-full ${inputHeight} px-6 rounded-full bg-transparent placeholder-[#717172] text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-primary/20 border border-[#111A53]`}
        required
      />
      <button
        type="submit"
        className={`absolute right-0 top-0 ${buttonHeight} px-8 bg-[#111A53] hover:bg-[#1c2b85] text-white rounded-full flex items-center gap-2 transition-colors`}
      >
        {buttonText}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 8H15M15 8L8 1M15 8L8 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
};
