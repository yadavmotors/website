/*
 * YADAV MOTORS — Book Online Page
 * Embeds the MechanicDesk online booking iframe
 * Design: Navy header, clean white booking area
 */

import { Phone, MapPin, Clock, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BookOnline() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page header */}
      <div
        className="pt-20 pb-10 lg:pt-24 lg:pb-12"
        style={{ backgroundColor: "#1A3A8F" }}
      >
        <div className="container">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1
            className="text-white text-3xl lg:text-4xl xl:text-5xl font-bold mb-3"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            BOOK YOUR SERVICE ONLINE
          </h1>
          <p className="text-white/75 text-lg max-w-xl">
            Select your service, choose a time that suits you, and we'll take care of the rest. No guesswork, no hidden costs.
          </p>

          {/* Quick contact strip */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-white/70">
            <a href="tel:0430869699" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={15} className="text-yellow-400" />
              Prefer to call? 0430 869 699
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={15} className="text-yellow-400" />
              11/67-71 Russell St, Werribee VIC 3030
            </span>
            <span className="flex items-center gap-2">
              <Clock size={15} className="text-yellow-400" />
              Mon–Fri 8am–5:30pm · Sat 8am–1pm
            </span>
          </div>
        </div>
      </div>

      {/* Booking iframe */}
      <div className="flex-1 bg-gray-50 py-8">
        <div className="container">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <iframe
              src="https://www.mechanicdesk.com.au/online-booking/e744721aa726d9bc46dd5dcdd5c38cfdd5830a49"
              width="100%"
              style={{ height: "800px", minHeight: "600px", border: "none", display: "block" }}
              title="Book a Service — Yadav Motors"
              loading="lazy"
            />
          </div>

          {/* Fallback note */}
          <p className="text-center text-gray-500 text-sm mt-4">
            Having trouble with the booking form?{" "}
            <a href="tel:0430869699" className="text-brand-navy font-semibold hover:text-brand-red transition-colors">
              Call us on 0430 869 699
            </a>{" "}
            and we'll book you in directly.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
