import { Phone, MapPin, Clock, ArrowLeft, CheckCircle, Snowflake, Car, Wrench } from "lucide-react";
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
              {/* Other Services Navigation (Top) */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-gray-500 text-sm font-medium mr-2">Our Other Services:</span>
                <Link href="/services/logbook" className="text-brand-navy hover:text-brand-red text-sm font-semibold underline decoration-brand-red/30 underline-offset-4">Logbook Servicing</Link>
                <Link href="/services/brakes-clutch" className="text-brand-navy hover:text-brand-red text-sm font-semibold underline decoration-brand-red/30 underline-offset-4">Brake & Clutch</Link>
                <Link href="/services/battery-tyres" className="text-brand-navy hover:text-brand-red text-sm font-semibold underline decoration-brand-red/30 underline-offset-4">Battery & Tyres</Link>
              </div>
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
                    { q: "Why isn't my car air conditioner cold?", a: "The most common reason is low refrigerant due to a leak in the system. Other causes include a faulty compressor, a blocked condenser, or a broken blend door actuator. As ARC Licensed technicians (RTA: AU54941), we use specialised equipment to pinpoint the exact issue and get your AC blowing cold again." },
                    { q: "How often should I service my car's air conditioning?", a: "We recommend an AC service every 2 years to maintain optimal cooling performance and prevent expensive compressor failures. Regular servicing also helps identify small leaks before they become major repairs." },
                    { q: "How much does a car AC regas cost?", a: "The cost of a regas depends on your vehicle type and the refrigerant required. We provide transparent quotes before any work begins. If there's a leak, we'll identify and repair it first to ensure the regas lasts." },
                    { q: "Does a car AC service include a cabin filter change?", a: "Yes, we always check the cabin filter during an AC service. A clogged filter reduces airflow and can cause unpleasant odors. Replacing it ensures you're breathing clean, fresh air inside your vehicle." },
                    { q: "Can you service the AC on all car brands?", a: "Yes. We service air conditioning systems on all makes and models, including Toyota, Mazda, Hyundai, BMW, Mercedes-Benz, and more. Our ARC licence covers all vehicle types." },
                  ].map((faq, i) => (
                    <div key={i} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                      <h4 className="font-bold text-brand-navy mb-2">Q: {faq.q}</h4>
                      <p className="text-gray-600 text-sm">A: {faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand-navy text-white p-8 rounded-xl mb-12">
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

              {/* Cross-linking Section */}
              <div className="border-t border-gray-100 pt-10">
                <h3 className="text-2xl font-bold text-brand-navy mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Explore Our Other Expert Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link href="/services/logbook" className="group bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-brand-red transition-all">
                    <Car className="text-brand-red mb-3 group-hover:scale-110 transition-transform" size={24} />
                    <h4 className="font-bold text-brand-navy mb-2">Logbook Servicing</h4>
                    <p className="text-gray-600 text-xs">Maintain your warranty with dealership-level service.</p>
                  </Link>
                  <Link href="/services/brakes-clutch" className="group bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-brand-red transition-all">
                    <Wrench className="text-brand-red mb-3 group-hover:scale-110 transition-transform" size={24} />
                    <h4 className="font-bold text-brand-navy mb-2">Brake & Clutch</h4>
                    <p className="text-gray-600 text-xs">Full inspections and pad replacements for a safe ride.</p>
                  </Link>
                  <Link href="/services/battery-tyres" className="group bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-brand-red transition-all">
                    <CheckCircle className="text-brand-red mb-3 group-hover:scale-110 transition-transform" size={24} />
                    <h4 className="font-bold text-brand-navy mb-2">Battery & Tyres</h4>
                    <p className="text-gray-600 text-xs">Quality tyres and reliable battery replacements.</p>
                  </Link>
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
