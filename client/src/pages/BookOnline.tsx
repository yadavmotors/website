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

          {/* Quick info about booking process */}
          <div className="mt-4 bg-white/10 border border-white/20 rounded-lg p-4 max-w-xl">
            <p className="text-white text-sm font-semibold mb-2">ℹ️ How Our Booking Works:</p>
            <p className="text-white/80 text-sm leading-relaxed">
              This online form is a <strong>booking request</strong>, not a confirmed appointment. Once you submit, we'll review your request and send you a <strong>text message confirmation</strong> from Yadav Motors with your confirmed time. That text is your official confirmation.
            </p>
          </div>

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

          {/* Important note about booking process */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8 max-w-2xl mx-auto">
            <h3 className="text-brand-navy font-bold text-lg mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
              📱 Booking Confirmation Process
            </h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex gap-3">
                <span className="font-bold text-brand-red min-w-6">1.</span>
                <p><strong>Submit your booking request</strong> using the form above with your preferred date and time.</p>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-brand-red min-w-6">2.</span>
                <p><strong>We review your request</strong> and check availability at our workshop.</p>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-brand-red min-w-6">3.</span>
                <p><strong>You'll receive a text message</strong> from Yadav Motors confirming your appointment time. This is your official confirmation.</p>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-brand-red min-w-6">4.</span>
                <p><strong>Bring your car</strong> at the confirmed time. If you need to reschedule, just call us on <a href="tel:0430869699" className="text-brand-navy font-semibold hover:text-brand-red">0430 869 699</a>.</p>
              </div>
            </div>
          </div>

          {/* Fallback note */}
          <p className="text-center text-gray-500 text-sm mt-6">
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
