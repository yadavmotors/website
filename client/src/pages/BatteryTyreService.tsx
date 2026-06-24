import { Phone, MapPin, Clock, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_DATA } from "@/lib/constants";

export default function BatteryTyreService() {
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
            Expert Battery, Tyre & Wheel Alignment Services in Werribee
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Don't let a flat battery or worn-out tyres slow you down. Quality products and expert fitting for all makes and models.
          </p>
        </div>
      </div>

      <div className="flex-1 bg-white py-12 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-navy mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Keep Your Car Safe on the Road
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Don't let a flat battery or worn-out tyres slow you down. At Yadav Motors, we provide fast and reliable battery replacement, tyre fitting, and precision wheel alignment services in Werribee. Whether you need a jump-start or a new set of tyres to keep your car safe on the road, our team is here to help with quality products and expert service.
              </p>

              <h3 className="text-2xl font-bold text-brand-navy mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Our Battery & Tyre Services Include:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Car Battery Testing & Replacement", desc: "We stock high-quality, long-lasting batteries for all makes and models." },
                  { title: "New Tyre Fitting", desc: "A wide range of tyres to suit your budget and driving needs, from economy to premium brands." },
                  { title: "Precision Wheel Alignment", desc: "Ensure your tyres wear evenly and your car handles safely with our professional alignment service." },
                  { title: "Tyre Balancing & Rotation", desc: "Extend the life of your tyres and enjoy a smoother ride." },
                  { title: "Puncture Repairs", desc: "Fast and safe repairs to get you back on the road quickly." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 bg-gray-50 p-4 rounded border border-gray-100">
                    <CheckCircle className="text-brand-red flex-shrink-0" size={20} />
                    <div>
                      <span className="font-bold text-brand-navy block text-sm">{item.title}</span>
                      <span className="text-gray-600 text-xs">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-8 rounded-xl mb-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-navy mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Why Proper Wheel Alignment Matters:
                </h3>
                <ul className="space-y-3">
                  {[
                    { title: "Extends Tyre Life", desc: "Prevents uneven wear, saving you money on replacements." },
                    { title: "Improves Fuel Efficiency", desc: "Reduces rolling resistance, making your car more efficient." },
                    { title: "Enhanced Safety", desc: "Improves handling and stability, especially in wet conditions." },
                    { title: "Smoother Ride", desc: "Eliminates steering wheel vibration and pulling to one side." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand-red font-bold mt-1">•</span>
                      <div className="text-sm text-gray-700">
                        <strong className="text-brand-navy">{item.title}:</strong> {item.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-brand-navy mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {[
                    { q: "How long should a car battery last?", a: "Most car batteries last between 3 to 5 years. Factors like extreme weather and driving habits can affect this. We offer free battery testing to let you know exactly how much life is left in yours." },
                    { q: "How do I know if I need a wheel alignment?", a: "If your car is pulling to one side, your steering wheel is off-center, or you notice uneven tyre wear, it's time for an alignment. Regular alignments (every 10,000km) can significantly extend your tyre life." },
                    { q: "What tyres do you recommend for my car?", a: "The best tyre depends on your vehicle and driving needs. We stock everything from budget-friendly options to premium brands. We'll provide a recommendation based on your safety needs and budget." },
                  ].map((faq, i) => (
                    <div key={i} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                      <h4 className="font-bold text-brand-navy mb-2">Q: {faq.q}</h4>
                      <p className="text-gray-600 text-sm">A: {faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand-navy text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Need a check?
                </h3>
                <p className="mb-6 text-white/80">
                  Is your car due for new tyres or a battery check? Visit Yadav Motors in Werribee for a free battery test or a competitive quote on tyres. Call {SITE_DATA.contact.phone} today.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/book" className="btn-primary">
                    Book Service Now
                  </Link>
                                    <a href={SITE_DATA.contact.phoneLink} className="bg-white text-brand-navy font-bold py-3 px-6 rounded hover:bg-gray-100 transition-colors flex items-center gap-2">
                    <Phone size={18} />
                    {SITE_DATA.contact.phone}
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
                      <span className="text-gray-700 text-sm">{SITE_DATA.contact.address}</span>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="text-brand-red flex-shrink-0" size={20} />
                      <span className="text-gray-700 text-sm">Mon–Fri: 8am–5:30pm<br />Sat: 8am–1pm</span>
                    </div>
                    <div className="flex gap-3">
                      <Phone className="text-brand-red flex-shrink-0" size={20} />
                      <span className="text-gray-700 text-sm">{SITE_DATA.contact.phone}</span>
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
