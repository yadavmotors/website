import { Phone, MapPin, Clock, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_DATA } from "@/lib/constants";

export default function LogbookService() {
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
            Professional Logbook Servicing in Werribee
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Protect your new car warranty with comprehensive logbook servicing that meets all manufacturer specifications.
          </p>
        </div>
      </div>

      <div className="flex-1 bg-white py-12 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-navy mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Protect Your New Car Warranty
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Are you looking for a reliable local mechanic in Werribee for your new car's logbook service? At Yadav Motors, we provide comprehensive logbook servicing that meets all manufacturer specifications, ensuring your new car warranty remains fully intact. You don't have to go back to the dealership to get quality service – our experienced team provides dealership-level expertise with a personal, local touch.
              </p>

              <h3 className="text-2xl font-bold text-brand-navy mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Why Choose Yadav Motors for Your Logbook Service?
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  { title: "Warranty Protection", desc: "We follow manufacturer guidelines strictly to ensure your warranty is never compromised." },
                  { title: "Genuine Parts", desc: "We use high-quality, genuine, or equivalent parts and lubricants to maintain your vehicle's performance." },
                  { title: "Experienced Technicians", desc: "Our team is skilled in servicing all makes and models, from family sedans to performance vehicles." },
                  { title: "Transparent Pricing", desc: "No hidden costs. We provide clear, upfront quotes before any work begins." },
                  { title: "Convenient Location", desc: "Located right in the heart of Werribee, making it easy for you to drop off and pick up your vehicle." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="text-brand-red flex-shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-brand-navy block">{item.title}</span>
                      <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-brand-navy mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                What's Included in a Logbook Service?
              </h3>
              <p className="text-gray-700 mb-4">A typical logbook service at Yadav Motors includes:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  "Full engine oil and filter change",
                  "Comprehensive safety inspection",
                  "Check and top-up of all essential fluids",
                  "Brake system check and adjustment",
                  "Battery and electrical system testing",
                  "Tyre pressure check and rotation if needed",
                  "Official stamping of your logbook",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-gray-50 p-3 rounded border border-gray-100">
                    <CheckCircle className="text-brand-red" size={16} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-brand-navy mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {[
                    { q: "Will a logbook service at Yadav Motors void my new car warranty?", a: "No. Under Australian Consumer Law, you have the right to choose your repairer. As long as the service is performed according to manufacturer specifications and using quality parts (which we do), your warranty remains fully intact." },
                    { q: "How often should I get a logbook service?", a: "This depends on your vehicle's make and model. Generally, it's every 10,000km to 15,000km or every 6 to 12 months. Check your vehicle's logbook or ask us for a recommendation based on your driving habits." },
                    { q: "Do you stamp my logbook?", a: "Yes, absolutely. We provide an official stamp in your logbook to maintain your vehicle's service history, which is essential for resale value and warranty claims." },
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
                  Ready to book?
                </h3>
                <p className="mb-6 text-white/80">
                  Call us today at {SITE_DATA.contact.phone} or book your service online to schedule your next logbook service in Werribee.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/book" className="btn-primary">
                    Book Online Now
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
                
                <div className="bg-brand-red/5 p-6 rounded-xl border border-brand-red/10">
                  <h4 className="text-xl font-bold text-brand-red mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    Need a Quote?
                  </h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Contact us for a transparent, upfront quote for your specific vehicle's logbook service.
                  </p>
                  <Link href="/book" className="text-brand-navy font-bold hover:underline">
                    Get a Quote Online →
                  </Link>
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
