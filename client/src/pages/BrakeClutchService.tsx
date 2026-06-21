import { Phone, MapPin, Clock, ArrowLeft, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BrakeClutchService() {
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
            className="text-white text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 uppercase"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Expert Brake & Clutch Repairs in Werribee
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Your safety is our priority. Professional brake inspections and clutch replacements to keep you in control.
          </p>
        </div>
      </div>

      <div className="flex-1 bg-white py-12 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-navy mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Reliable Safety Solutions
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Your vehicle's braking and clutch systems are critical for your safety and driving experience. If you've noticed squealing brakes, a soft pedal, or difficulty shifting gears, it's time to visit Yadav Motors. We are Werribee's specialists in brake and clutch repairs, providing fast, reliable, and affordable solutions to get you back on the road safely.
              </p>

              <h3 className="text-2xl font-bold text-brand-navy mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Our Brake & Clutch Services Include:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: "Brake Pad & Rotor Replacement", desc: "High-quality components for optimal stopping power." },
                  { title: "Brake Fluid Flush", desc: "Essential for maintaining hydraulic system performance." },
                  { title: "Brake Line Repairs", desc: "Fixing leaks and ensuring system integrity." },
                  { title: "Clutch Kit Replacement", desc: "Restoring smooth gear changes and power delivery." },
                  { title: "Flywheel Machining", desc: "Ensuring a perfect surface for your new clutch." },
                  { title: "Clutch Hydraulics", desc: "Repairing master and slave cylinders." },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <CheckCircle className="text-brand-red mb-2" size={24} />
                    <h4 className="font-bold text-brand-navy mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 border border-red-100 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-brand-red mb-4 flex items-center gap-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  <AlertTriangle size={28} />
                  Signs You Need a Brake or Clutch Check:
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Squealing, grinding, or clicking noises when braking",
                    "The vehicle pulling to one side during braking",
                    "A 'spongy' or vibrating brake pedal",
                    "Difficulty engaging gears or a slipping clutch",
                    "A burning smell while driving",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-brand-red font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-navy text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Don't compromise on safety
                </h3>
                <p className="mb-6 text-white/80">
                  Visit Yadav Motors in Werribee for a professional brake and clutch inspection. Call 0430 869 699 to book.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/book" className="btn-primary">
                    Book Inspection Now
                  </Link>
                  <a href="tel:0430869699" className="bg-white text-brand-navy font-bold py-3 px-6 rounded hover:bg-gray-100 transition-colors flex items-center gap-2">
                    <Phone size={18} />
                    0430 869 699
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="text-xl font-bold text-brand-navy mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    Workshop Info
                  </h4>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <MapPin className="text-brand-red flex-shrink-0" size={20} />
                      <span className="text-gray-700 text-sm">11/67-71 Russell St, Werribee VIC 3030</span>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="text-brand-red flex-shrink-0" size={20} />
                      <span className="text-gray-700 text-sm">Mon–Fri: 8am–5:30pm<br />Sat: 8am–1pm</span>
                    </div>
                    <div className="flex gap-3">
                      <Phone className="text-brand-red flex-shrink-0" size={20} />
                      <span className="text-gray-700 text-sm">0430 869 699</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
