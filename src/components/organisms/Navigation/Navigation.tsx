"use client";

import { Button } from "@/components/atoms/Button/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full bg-white transition-all duration-300",
        className
      )}
    >
      <div className="px-24 flex items-center justify-between h-24 bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.05)]">
        {/* Logo */}
        <Link href="/" className="z-50 relative">
          <img src="/flogo.svg" alt="Mentera Logo" className="h-12" />
        </Link>

        {/* Desktop Navigation - Exact Figma styling */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="#"
            className="text-base text-zinc-950 font-medium hover:opacity-80 transition-opacity"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-base text-zinc-950 font-medium hover:opacity-80 transition-opacity"
          >
            Prompt Library
          </Link>
          <Link
            href="#"
            className="text-base text-zinc-950 font-medium hover:opacity-80 transition-opacity"
          >
            About
          </Link>
          <div className="flex items-center gap-6">
            <Button
              variant="outline"
              className="border border-purple text-purple px-6 py-3 rounded-full text-base font-bold hover:bg-purple/5 transition-colors"
            >
              Log In
            </Button>
            <Button
              variant="primary"
              className="bg-purple text-white px-6 py-3 rounded-full text-base font-bold hover:bg-purple/90 transition-colors"
            >
              Get Started
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        {/* <button
          className="lg:hidden z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex flex-col justify-center items-center w-7 h-7">
            <span
              className={cn(
                "bg-gray-900 h-0.5 w-6 rounded-full transition-all duration-300",
                isMenuOpen && "rotate-45 translate-y-1"
              )}
            />
            <span
              className={cn(
                "bg-gray-900 h-0.5 w-6 rounded-full my-1 transition-all duration-300",
                isMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "bg-gray-900 h-0.5 w-6 rounded-full transition-all duration-300",
                isMenuOpen && "-rotate-45 -translate-y-1"
              )}
            />
          </div>
        </button> */}

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
                    className="text-gray-900 font-outfit text-2xl hover:text-gray-600 transition-colors"
                    onClick={handleNavLinkClick}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  className="mt-8 bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors w-full"
                  onClick={handleNavLinkClick}
                >
                  Join Beta
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>
    </header>
  );
};
