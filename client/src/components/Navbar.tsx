/*
 * YADAV MOTORS — Navbar Component
 * Design: Sticky navy nav, logo left, phone number right, mobile hamburger
 * Brand: Navy #1A3A8F, Red #CC2229, White text
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Find Us", href: "#location" },
  ];

  const scrollTo = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "#1A3A8F" }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/manus-storage/Screenshot2026-05-09145530_3b4930b7.png"
              alt="Yadav Motors"
              className="h-14 lg:h-16 w-auto"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-white/80 hover:text-white font-medium transition-colors duration-200"
                style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0430869699"
              className="flex items-center gap-2 text-white font-semibold hover:text-yellow-300 transition-colors"
              style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.1rem", letterSpacing: "0.05em" }}
            >
              <Phone size={18} />
              0430 869 699
            </a>
            <Link href="/book" className="btn-primary text-sm py-2 px-5">
              Book Now
            </Link>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:0430869699"
              className="flex items-center gap-1 text-white font-semibold text-sm"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">0430 869 699</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden border-t border-white/20"
          style={{ backgroundColor: "#0F2260" }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left text-white/80 hover:text-white py-3 px-2 text-lg font-medium border-b border-white/10 last:border-0"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3">
              <a
                href="tel:0430869699"
                className="flex items-center gap-2 text-white font-semibold py-2"
              >
                <Phone size={18} />
                0430 869 699
              </a>
              <Link
                href="/book"
                className="btn-primary w-full text-center mt-3 block"
                onClick={() => setIsOpen(false)}
              >
                Book Online Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
