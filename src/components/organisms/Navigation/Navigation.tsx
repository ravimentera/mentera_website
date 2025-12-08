"use client";

import { Button } from "@/components/atoms/Button/Button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavigationProps {
  className?: string;
}

// Navigation links configuration
const NAV_LINKS = [
  { href: "/ai-scribe", label: "AI Scribe" },
  { href: "/integrations", label: "Integrations" },
  { href: "/blog", label: "Blogs" },
] as const;

export const Navigation = ({ className }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a navigation link
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const getLinkClassName = (href: string, isMobile = false) => {
    const baseSize = isMobile ? "text-xl" : "text-lg";
    const basePadding = isMobile ? "py-2" : "";

    return cn(
      baseSize,
      basePadding,
      "hover:opacity-80 transition-opacity",
      isActive(href)
        ? "font-bold bg-gradient-to-r from-purple-variant to-purple bg-clip-text text-transparent [-webkit-text-fill-color:transparent]"
        : "font-medium text-zinc-950"
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full bg-white transition-all duration-300",
        className
      )}
    >
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 flex items-center justify-between h-14 sm:h-16 md:h-20 lg:h-24 bg-white shadow-nav">
        {/* Logo */}
        <Link href="/" className="z-50 relative">
          <img
            src="/flogo.svg"
            alt="Mentera Logo"
            className="h-8 sm:h-10 md:h-11 lg:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={getLinkClassName(link.href)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-4 xl:gap-6">
            <Link href="https://mentera-app.vercel.app/login">
              <Button
                variant="outline"
                className="border border-purple text-purple px-4 xl:px-6 py-2 xl:py-3 rounded-full text-sm xl:text-base font-bold hover:bg-purple/5 transition-colors"
              >
                Log In
              </Button>
            </Link>
            <Link href="https://mentera-app.vercel.app/login">
              <Button
                variant="primary"
                className="bg-purple text-white px-4 xl:px-6 py-2 xl:py-3 rounded-full text-sm xl:text-base font-bold hover:bg-purple/90 transition-colors"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50 relative flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={cn(
              "bg-zinc-950 h-0.5 w-6 rounded-full transition-all duration-300",
              isMenuOpen && "rotate-45 translate-y-1.5"
            )}
          />
          <span
            className={cn(
              "bg-zinc-950 h-0.5 w-6 rounded-full my-1 transition-all duration-300",
              isMenuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "bg-zinc-950 h-0.5 w-6 rounded-full transition-all duration-300",
              isMenuOpen && "-rotate-45 -translate-y-1.5"
            )}
          />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed inset-y-0 right-0 bg-white z-50 w-80 max-w-[85vw] shadow-xl flex flex-col pt-20 px-6 lg:hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 lg:hidden z-50 flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6 text-zinc-950"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <nav className="flex flex-col space-y-6">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={getLinkClassName(link.href, true)}
                      onClick={handleNavLinkClick}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-gray-200">
                    <Link
                      href="https://mentera-app.vercel.app/login"
                      className="w-full"
                    >
                      <Button
                        variant="outline"
                        className="border border-purple text-purple rounded-full font-bold w-full"
                        onClick={handleNavLinkClick}
                      >
                        Log In
                      </Button>
                    </Link>
                    <Link
                      href="https://mentera-app.vercel.app/login"
                      className="w-full"
                    >
                      <Button
                        variant="primary"
                        className="bg-purple text-white rounded-full font-bold w-full"
                        onClick={handleNavLinkClick}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
