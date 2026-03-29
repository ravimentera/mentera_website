import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute -top-[18.75rem] -right-[18.75rem] w-[37.5rem] h-[37.5rem] bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute -bottom-[18.75rem] -left-[18.75rem] w-[37.5rem] h-[37.5rem] bg-gradient-to-tr from-teal-500/20 to-transparent rounded-full blur-3xl" />

      <div className="max-w-md text-center px-4 z-10 relative space-y-8 animate-[fadeIn_0.6s_ease-out]">
        <h1 className="text-8xl font-bold mb-2">
          <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        <h2 className="text-3xl font-medium text-gray-900 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-purple text-white py-3 px-10 text-lg font-medium rounded-lg transition-all duration-300 hover:bg-purple/90"
        >
          Return Home
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.75 6.75L19.25 12L13.75 17.25"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 12H4.75"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <div className="pt-12">
          <Image
            src="/flogo.svg"
            alt="Mentera Logo"
            width={100}
            height={32}
            className="h-8 mx-auto opacity-70"
            style={{ width: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
