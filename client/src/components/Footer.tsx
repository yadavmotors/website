/*
 * YADAV MOTORS — Footer Component
 * Design: Full navy footer with all contact details, links, and copyright
 */

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer style={{ backgroundColor: "#0F2260" }} className="text-white">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <img
              src="/manus-storage/Screenshot2026-05-09145530_3b4930b7.png"
              alt="Yadav Motors"
              className="h-28 w-auto mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Werribee's trusted mechanic. Honest advice, transparent pricing, and quality workmanship you can rely on.
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center gap-1 text-yellow-400 text-sm font-semibold">
                ★★★★★ 4.9 Stars · 145 Reviews
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-semibold text-lg mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Our Services", href: "#services" },
                { label: "About Yadav Motors", href: "#about" },
                { label: "Customer Reviews", href: "#reviews" },
                { label: "Find Us", href: "#location" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Link href="/book" className="text-white/70 hover:text-white text-sm transition-colors">
                  Book Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-semibold text-lg mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0430869699"
                  className="flex items-start gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0 text-yellow-400" />
                  0430 869 699
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@yadavmotors.com.au"
                  className="flex items-start gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0 text-yellow-400" />
                  info@yadavmotors.com.au
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=11/67-71+Russell+St,+Werribee+VIC+3030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <MapPin size={15} className="mt-0.5 flex-shrink-0 text-yellow-400" />
                  11/67-71 Russell St, Werribee VIC 3030
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4
              className="text-white font-semibold text-lg mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Opening Hours
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex justify-between gap-4">
                <span>Monday – Friday</span>
                <span className="text-white font-medium">8:00am – 5:30pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="text-white font-medium">8:00am – 1:00pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-white/50">Closed</span>
              </li>
            </ul>
            <div className="mt-4 flex items-start gap-2 text-white/60 text-xs">
              <Clock size={13} className="mt-0.5 flex-shrink-0" />
              <span>After-hours key drop available. Call ahead to arrange.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Yadav Motors. All rights reserved.</span>
          <span>11/67-71 Russell St, Werribee VIC 3030</span>
        </div>
      </div>
    </footer>
  );
}
