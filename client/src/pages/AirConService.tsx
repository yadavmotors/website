import { Phone, MapPin, Clock, ArrowLeft, CheckCircle, Snowflake } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_DATA } from "@/lib/constants";

export default function AirConService() {
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
            ARC Licensed Car Air Conditioning Service in Werribee
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Stay cool all year round with professional AC servicing and repairs from Werribee's licensed specialists.
          </p>
        </div>
      </div>

      <div className="flex-1 bg-white py-12 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-navy mb-6 flex items-center gap-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
                <Snowflake className="text-blue-400" size={32} />
                Keep Your Cool
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Is your car's air conditioning not as cold as it used to be? Don't sweat it! Yadav Motors is your local ARC Licensed (RTA: AU54941) specialist for car air conditioning service and repairs in Werribee. We have the expertise and equipment to keep your AC running efficiently, ensuring you stay comfortable no matter the weather.
              </p>

              <div className="bg-blue-50 border border-blue-100 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-brand-navy mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Why Use an ARC Licensed Technician?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Working on car air conditioning requires specialized knowledge and handling of refrigerants. Being ARC Licensed means we follow strict environmental guidelines and possess the technical skills to handle your AC system safely and professionally.
                </p>
                <div className="mt-4 inline-block bg-white px-4 py-2 rounded border border-blue-200 font-bold text-brand-navy">
                  ARC RTA: AU54941
                </div>
              </div>

              <h3 className="text-2xl font-bold text-brand-navy mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Our Air Conditioning Services:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "AC System Regas", desc: "Recharging your system with the correct refrigerant." },
                  { title: "Leak Detection", desc: "Using advanced tools to find and fix refrigerant leaks." },
                  { title: "Compressor Repairs", desc: "Fixing the heart of your AC system." },
                  { title: "Cabin Filter Replacement", desc: "Ensuring clean, fresh air inside your vehicle." },
                  { title: "De-sanitizing Treatment", desc: "Removing bacteria and odors from the AC vents." },
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

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-brand-navy mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {[
                    { q: "How often should I service my car's air conditioning?", a: "We recommend an AC service every 2 years to ensure the system is free of leaks and the refrigerant levels are optimal. Regular servicing prevents expensive compressor failures." },
                    { q: "Why is my car air conditioning blowing warm air?", a: "This is usually due to low refrigerant levels caused by a small leak, or a faulty compressor. As ARC Licensed technicians, we can accurately diagnose the leak and regas your system." },
                    { q: "Does a car AC service include a cabin filter change?", a: "Yes, we always check the cabin filter. A clogged filter reduces airflow and can cause unpleasant odors. Replacing it ensures you're breathing clean air." },
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
                  Ready to stay cool?
                </h3>
                <p className="mb-6 text-white/80">
                  Keep your cool this summer. Book your car AC service with Yadav Motors in Werribee today. Call {SITE_DATA.contact.phone}.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/book" className="btn-primary">
                    Book AC Service Now
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
