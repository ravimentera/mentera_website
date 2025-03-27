"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavigationProps {
  className?: string;
}

// Navigation items - currently commented out as they will be implemented in future updates
// Each link represents a section of the website
const navLinks = [
  // Features section - shows the key features of the Mentera.ai platform
  { label: "Features", href: "#features" },

  // AI Assistant section - highlights the AI capabilities of the platform
  { label: "AI Assistant", href: "#ai-assistant" },

  // Benefits section - demonstrates the value proposition for med spas
  { label: "Benefits", href: "#benefits" },

  // Pricing section - will show different pricing tiers when available
  { label: "Pricing", href: "#pricing" },
];

export const Navigation = ({ className }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "py-4 bg-white/40 backdrop-blur-sm shadow-sm border-b border-white/20"
          : "py-8 bg-transparent",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="z-50 relative">
          <img
            src="/flogo.svg"
            alt="Mentera Logo"
            className={cn(
              "transition-all duration-300",
              scrolled ? "w-[140px]" : "w-[180px]"
            )}
          />
        </Link>

        {/* Desktop Navigation */}
        {/* <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#374151] font-outfit text-base hover:text-[#111827] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button className="ml-4 bg-[#111827] text-white px-6 py-2 rounded-md hover:bg-[#1F2937] transition-colors">
            Join Beta
          </Button>
        </nav> */}

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex flex-col justify-center items-center w-7 h-7">
            <span
              className={cn(
                "bg-[#111827] h-0.5 w-6 rounded-full transition-all duration-300",
                isMenuOpen && "rotate-45 translate-y-1"
              )}
            />
            <span
              className={cn(
                "bg-[#111827] h-0.5 w-6 rounded-full my-1 transition-all duration-300",
                isMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "bg-[#111827] h-0.5 w-6 rounded-full transition-all duration-300",
                isMenuOpen && "-rotate-45 -translate-y-1"
              )}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        {/* <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6"
            >
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#111827] font-outfit text-2xl hover:text-[#4B5563] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  className="mt-8 bg-[#111827] text-white px-6 py-3 rounded-md hover:bg-[#1F2937] transition-colors w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Beta
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>
    </header>
  );
};
