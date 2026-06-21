/*
 * YADAV MOTORS — Home Page
 * Design: Trusted Local Expert — Navy/Red/White brand palette
 * StoryBrand sections: Hero → Problem → Guide → Plan → Services → Reviews → Location → CTA
 * Typography: Oswald headlines, Source Sans 3 body
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Phone, MapPin, Star, CheckCircle, AlertTriangle, ChevronDown, Wrench, Car, Shield, Clock, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";
import type { Review } from "@shared/types";


// Asset URLs
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486097900/CbJHvBjvzNsnEFBJN8X7yM/yadav-hero-YWBsshsFWNgTCVje28g9o5.webp";
const MECHANIC_IMG = "/manus-storage/ChatGPTImageMay12,2026,03_41_39PM_a7855646.png";
const DIAGNOSTICS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486097900/CbJHvBjvzNsnEFBJN8X7yM/yadav-diagnostics-GWZWBGuPpfpVpHmet5Fb5o.webp";
const SUBURB_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486097900/CbJHvBjvzNsnEFBJN8X7yM/yadav-werribee-suburb-Br4Adqdyum6gssNdDFED8j.webp";

// Fade-in on scroll hook
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const services = [
  { icon: <Car size={28} />, title: "Log Book Servicing", desc: "Keep your new car warranty intact with manufacturer-compliant log book services.", href: "/services/logbook" },
  { icon: <Wrench size={28} />, title: "Brakes & Clutch", desc: "Full brake inspections, pad replacements, and clutch repair for a safe, smooth ride.", href: "/services/brakes-clutch" },
  { icon: <CheckCircle size={28} />, title: "ARC Technician", desc: "Licenced (ARC) Technician - licenced to service air conditioners on vehicles. ARC RTA:AU54941", href: "/services/air-conditioning" },
  { icon: <Car size={28} />, title: "Tyres & Wheel Alignment", desc: "New tyres, EV tyres, wheel alignment, and balancing for all makes and models.", href: "/services/battery-tyres" },
  { icon: <Wrench size={28} />, title: "Transmission Service", desc: "Automatic and manual transmission servicing, repairs, fluid changes, and clutch replacement." },
  { icon: <Wrench size={28} />, title: "Auto Electrical", desc: "Fault diagnosis, battery testing, and electrical repairs." },
  { icon: <Shield size={28} />, title: "Engine & Diagnostics", desc: "Advanced scan-tool diagnostics, engine repairs, and timing belt replacement carried out to manufacturer standards." },
  { icon: <Clock size={28} />, title: "Free Pick-Up & Drop-Off", desc: "We come to you. Minimise your downtime with our convenient pick-up and drop-off service. **Within 10km of workshop." },
];

export default function Home() {
  const { data: apiReviews = [] } = trpc.reviews.list.useQuery();
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const reviews = apiReviews.length > 0 ? apiReviews : [];

  // Rotate reviews every 6 seconds
  useEffect(() => {
    if (reviews.length === 0) return;
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(15,34,96,0.88) 0%, rgba(26,58,143,0.75) 60%, rgba(15,34,96,0.85) 100%)" }}
        />

        <div className="relative container z-10 py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-white text-sm font-medium">4.9 Stars · 148 Google Reviews · Werribee's Most Trusted Mechanic</span>
            </div>

            <h1
              className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.02em" }}
            >
              WERRIBEE'S TRUSTED
              <br />
              <span style={{ color: "#CC2229" }}>LOCAL MECHANIC</span>
              <br />
              YOU CAN RELY ON.
            </h1>

            <p
              className="text-white/85 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Yadav Motors is Werribee's trusted local workshop. Clear pricing, honest advice, and quality workmanship — so you can drive away with confidence, every time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="btn-primary text-center text-lg py-4 px-8">
                Book Your Service Online
              </Link>
              {/* SEO Background Keywords */}
              <div className="sr-only">
                Werribee mechanic providing engine light on diagnostics, car diagnostic Werribee, and same day car service. Expert vehicle diagnostics and troubleshooting.
              </div>
              <a
                href="tel:0430869699"
                className="btn-secondary text-center text-lg py-4 px-8 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call 0430 869 699
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
              {[
                { value: "4.9★", label: "Google Rating" },
                { value: "148+", label: "5-Star Reviews" },
                { value: "5 Yrs", label: "Serving Werribee" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-white text-2xl lg:text-3xl font-bold"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* ─── PROBLEM SECTION ─── */}
      <section id="problem" className="section-light py-16 lg:py-24">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <p
                className="text-brand-red font-semibold uppercase tracking-widest text-sm mb-3"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Sound Familiar?
              </p>
              <h2
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-navy"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                FINDING A MECHANIC YOU CAN TRUST
                <br />
                SHOULDN'T BE THIS HARD.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <AlertTriangle size={32} className="text-brand-red" />,
                title: "Hidden Costs & Unclear Quotes",
                desc: "You've been handed a bill that's nothing like what you were told. Vague explanations, unexpected extras, and a feeling that you've been taken advantage of.",
              },
              {
                icon: <Clock size={32} className="text-brand-red" />,
                title: "Long Waits & Poor Communication",
                desc: "Your car sat in the workshop for days with no update. You had to chase them for information. Your time and schedule were treated as an afterthought.",
              },
              {
                icon: <Car size={32} className="text-brand-red" />,
                title: "No Mechanic You Can Call Your Own",
                desc: "You've just moved to Werribee and don't know who to trust. You need someone reliable for the long term — not just a one-off fix.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 120}>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 h-full">
                  <div className="mb-4">{item.icon}</div>
                  <h3
                    className="text-brand-navy text-xl font-semibold mb-3"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <p
              className="text-center text-brand-navy text-xl lg:text-2xl font-semibold mt-12 max-w-2xl mx-auto"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              You deserve a mechanic who treats your car — and your time — with respect. That's exactly what Yadav Motors is built on.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── GUIDE / ABOUT ─── */}
      <section id="about" className="section-white py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <FadeIn className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={MECHANIC_IMG}
                  alt="Rama Krishna — Yadav Motors"
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto lg:mx-0 object-cover"
                  style={{ maxHeight: "520px" }}
                />
                {/* Credential badge */}
                <div
                  className="absolute -bottom-4 -right-4 lg:-right-8 bg-white rounded-lg shadow-xl p-4 max-w-xs"
                  style={{ border: "3px solid #1A3A8F" }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Award size={18} style={{ color: "#CC2229" }} />
                    <span
                      className="text-brand-navy font-bold text-sm"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      Qualified Automotive Technician
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs leading-snug">
                    Diploma of Automotive Technology · Cert IV Automotive Mechanical · EV Servicing Certified
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Content */}
            <FadeIn delay={150} className="order-1 lg:order-2">
              <p
                className="text-brand-red font-semibold uppercase tracking-widest text-sm mb-3"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Meet the Owner
              </p>
              <h2
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-navy mb-6"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                RAMA KRISHNA
                <br />
                <span className="text-2xl lg:text-3xl text-gray-500 font-medium">Founder, Yadav Motors</span>
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Rama Krishna understands that most customers don't walk into a workshop excited to spend money on their car. They arrive stressed, short on time, or worried about a bill they don't fully understand. He's built Yadav Motors around one simple belief: you should leave knowing exactly what was done, why it was done, and what it cost — with no surprises.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                With over a decade of hands-on experience across Honda, Toyota, Ford, Hyundai, Mazda, European vehicles, and modern EVs, Rama brings genuine expertise to every job. His workshop philosophy is built around long-term reliability, safety, and preventative maintenance — not upselling.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Diploma of Automotive Technology",
                  "Cert IV Automotive Mechanical",
                  "Cert III Automotive Mechanical",
                  "Certificate II in Automotive Air Conditioning Technology",
                  "EV & Hybrid Servicing Certified",
                  "Advanced Scan-Tool Diagnostics",
                  "All Makes & Models Serviced",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-brand-red mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/book" className="btn-primary text-center">
                  Book With Rama Today
                </Link>
                <a
                  href="tel:0430869699"
                  className="flex items-center justify-center gap-2 text-brand-navy font-semibold border-2 border-brand-navy rounded py-3 px-6 hover:bg-brand-navy hover:text-white transition-colors"
                  style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
                >
                  <Phone size={18} />
                  0430 869 699
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── TRUST STATS BAR ─── */}
      <section className="section-navy py-10">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Star size={24} className="text-yellow-400" />, value: "4.9 Stars", label: "Google Rating" },
              { icon: <Users size={24} className="text-yellow-400" />, value: "3,100+", label: "Customers Served" },
              { icon: <Award size={24} className="text-yellow-400" />, value: "148+", label: "5-Star Reviews" },
              { icon: <Clock size={24} className="text-yellow-400" />, value: "5 Years", label: "Serving Werribee" },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 80}>
                <div className="flex flex-col items-center gap-2">
                  {stat.icon}
                  <div
                    className="text-white text-2xl lg:text-3xl font-bold"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE PLAN ─── */}
      <section className="section-light py-16 lg:py-24">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <p
                className="text-brand-red font-semibold uppercase tracking-widest text-sm mb-3"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                How It Works
              </p>
              <h2
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-navy"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                OUR THREE-STEP PROCESS
                <br />
                KEEPS YOUR CAR RUNNING SMOOTHLY.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gray-200 z-0" />

            {[
              {
                step: "01",
                title: "Book & Inspect",
                desc: "Book online or call us directly. We'll schedule your vehicle, carry out a thorough inspection, and identify exactly what needs attention.",
                icon: <Phone size={32} />,
              },
              {
                step: "02",
                title: "Diagnose & Repair",
                desc: "We explain everything in plain English before we start. No jargon, no surprises. Quality repairs carried out to manufacturer standards.",
                icon: <Wrench size={32} />,
              },
              {
                step: "03",
                title: "Retest & Drive Away",
                desc: "Your vehicle is retested before handover. You leave with a fully serviced car and the confidence that the job was done right.",
                icon: <Car size={32} />,
              },
            ].map((step, i) => (
              <FadeIn key={step.step} delay={i * 150}>
                <div className="relative bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center z-10">
                  <div
                    className="text-5xl font-bold mb-4"
                    style={{ fontFamily: "'Oswald', sans-serif", color: "#E8ECF5" }}
                  >
                    {step.step}
                  </div>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                    style={{ backgroundColor: "#1A3A8F" }}
                  >
                    {step.icon}
                  </div>
                  <h3
                    className="text-brand-navy text-xl font-semibold mb-3"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={500}>
            <div className="text-center mt-10">
              <Link href="/book" className="btn-primary text-lg py-4 px-10">
                Book Your Service Now
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="section-white py-16 lg:py-24">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <p
                className="text-brand-red font-semibold uppercase tracking-widest text-sm mb-3"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                What We Do
              </p>
              <h2
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-navy"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                COMPREHENSIVE CARE FOR
                <br />
                ALL MAKES & MODELS.
              </h2>
              <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                From a Yaris to a Renault Master, from a 1970s classic to new release hybrid and electric — if it has wheels, we can service it.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 60}>
                {service.href ? (
                  <Link href={service.href}>
                    <div
                      className="group p-6 rounded-lg border border-gray-100 hover:border-brand-navy hover:shadow-md transition-all duration-200 cursor-pointer h-full"
                      style={{ backgroundColor: "#F7F8FA" }}
                    >
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-105 transition-transform"
                        style={{ backgroundColor: "#1A3A8F" }}
                      >
                        {service.icon}
                      </div>
                      <h3
                        className="text-brand-navy font-semibold text-base mb-2 group-hover:text-brand-red transition-colors"
                        style={{ fontFamily: "'Oswald', sans-serif" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                      <span className="text-brand-navy text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-block">
                        Learn More →
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div
                    className="group p-6 rounded-lg border border-gray-100 hover:border-brand-navy hover:shadow-md transition-all duration-200 cursor-default h-full"
                    style={{ backgroundColor: "#F7F8FA" }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: "#1A3A8F" }}
                    >
                      {service.icon}
                    </div>
                    <h3
                      className="text-brand-navy font-semibold text-base mb-2"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>

          {/* Diagnostics image strip */}
          <FadeIn delay={300}>
            <div className="mt-12 rounded-xl overflow-hidden relative h-48 lg:h-64">
              <img
                src={DIAGNOSTICS_IMG}
                alt="Advanced diagnostic equipment at Yadav Motors"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: "rgba(15,34,96,0.7)" }}
              >
                <div className="text-center text-white px-4">
                  <h3
                    className="text-2xl lg:text-3xl font-bold mb-2"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    MODERN DIAGNOSTIC EQUIPMENT
                  </h3>
                  <p className="text-white/80 max-w-lg mx-auto text-sm">
                    Advanced scan-tool diagnostics combined with real workshop experience. We find the root cause — not just the symptom.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FAILURE / SUCCESS SPLIT ─── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#1A3A8F" }}>
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <h2
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                THE DIFFERENCE REGULAR SERVICING MAKES.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Without */}
            <FadeIn>
              <div className="bg-white/10 border border-white/20 rounded-xl p-8">
                <h3
                  className="text-white/60 text-xl font-semibold mb-6 uppercase tracking-wider"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  Without Proper Servicing
                </h3>
                <ul className="space-y-3">
                  {[
                    "Reduced safety and reliability on the road",
                    "Increased fuel and repair costs over time",
                    "Preventable engine or component damage",
                    "Ongoing faults that become harder to diagnose",
                    "Stress and uncertainty every time you drive",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* With */}
            <FadeIn delay={150}>
              <div className="bg-white rounded-xl p-8">
                <h3
                  className="text-brand-navy text-xl font-semibold mb-6 uppercase tracking-wider"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  With Yadav Motors
                </h3>
                <ul className="space-y-3">
                  {[
                    "A safe, reliable vehicle for you and your family",
                    "Better long-term performance and fuel efficiency",
                    "Preventative maintenance that saves money over time",
                    "Clear communication so you always know what's happening",
                    "A trusted mechanic for the next 5, 10, 20 years",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                      <CheckCircle size={16} className="text-brand-red mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section id="reviews" className="section-light py-16 lg:py-24">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <p
                className="text-brand-red font-semibold uppercase tracking-widest text-sm mb-3"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                What Customers Say
              </p>
              <h2
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-navy"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                148+ GOOGLE REVIEWS.
                <br />
                <span style={{ color: "#CC2229" }}>4.9 STARS OVERALL.</span>
              </h2>
            </div>
          </FadeIn>

          {reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Show 2 reviews at a time, rotating */}
              {[currentReviewIndex, (currentReviewIndex + 1) % reviews.length].map((idx) => {
                const review = reviews[idx];
                return (
                  <FadeIn key={`${review.id}-${idx}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <div className="flex items-center gap-1 mb-3">
                        {Array.from({ length: review.rating }).map((_, j) => (
                          <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">"{review.text}"</p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-brand-navy text-sm">{review.name}</span>
                        <span className="text-gray-400 text-xs flex items-center gap-1">
                          <MapPin size={12} />
                          {review.suburb}
                        </span>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">Loading reviews...</div>
          )}

          <FadeIn delay={400}>
            <div className="text-center mt-8">
              <a
                href="https://www.google.com/search?q=yadav+motors+werribee+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-red transition-colors"
              >
                <Star size={18} className="text-yellow-400 fill-yellow-400" />
                Read all 148 reviews on Google
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FLEET SECTION ─── */}
      <section className="section-white py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p
                className="text-brand-red font-semibold uppercase tracking-widest text-sm mb-3"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Fleet & Business Vehicles
              </p>
              <h2
                className="text-3xl lg:text-4xl font-bold text-brand-navy mb-5"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                WE KEEP YOUR BUSINESS
                <br />
                ON THE ROAD.
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Yadav Motors services local trades, delivery vehicles, rideshare operators, and small business fleets across Werribee and the Western suburbs. We understand that downtime costs money — which is why we prioritise fast turnaround and reliable communication for every fleet customer.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[
                  "Local trades & contractors",
                  "Delivery & courier vehicles",
                  "Rideshare & transport operators",
                  "Company utes & vans",
                  "Small business fleets",
                  "Real estate & service businesses",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-brand-red flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/book" className="btn-primary">
                Enquire About Fleet Servicing
              </Link>
            </FadeIn>

            <FadeIn delay={150}>
              <img
                src={SUBURB_IMG}
                alt="Werribee Western Suburbs — Yadav Motors service area"
                className="rounded-xl shadow-lg w-full object-cover"
                style={{ maxHeight: "380px" }}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SERVICING AREAS ─── */}
      <section className="section-white py-16 lg:py-24">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <p
                className="text-brand-red font-semibold uppercase tracking-widest text-sm mb-3"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Service Areas
              </p>
              <h2
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-navy"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                WE SERVE WERRIBEE & THE
                <br />
                WESTERN SUBURBS.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                suburb: "Werribee",
                postcode: "3030",
                desc: "Central Werribee, Werribee South, Watton Street & freeway area",
              },
              {
                suburb: "Hoppers Crossing",
                postcode: "3029",
                desc: "North/north-east of Werribee, across the freeway",
              },
              {
                suburb: "Wyndham Vale",
                postcode: "3024",
                desc: "North-west of Werribee",
              },
              {
                suburb: "Mambourin",
                postcode: "3024",
                desc: "West of Werribee",
              },
              {
                suburb: "Manor Lakes",
                postcode: "3024",
                desc: "North-west, associated with Wyndham Vale area",
              },
            ].map((area, i) => (
              <FadeIn key={area.suburb} delay={i * 80}>
                <div className="bg-gradient-to-br from-brand-navy to-blue-900 rounded-lg p-6 text-white shadow-md hover:shadow-lg transition-shadow">
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {area.suburb}
                  </h3>
                  <p className="text-brand-red font-semibold text-sm mb-3">({area.postcode})</p>
                  <p className="text-white/80 text-sm leading-relaxed">{area.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={500}>
            <p className="text-center text-gray-600 text-sm mt-10">
              <strong>Free pick-up & drop-off available within 10km of our workshop.</strong> Call us to discuss your location.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── LOCATION / MAP ─── */}
      <section id="location" className="section-light py-16 lg:py-24">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-10">
              <p
                className="text-brand-red font-semibold uppercase tracking-widest text-sm mb-3"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Find Us
              </p>
              <h2
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-navy"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                CONVENIENTLY LOCATED
                <br />
                IN WERRIBEE.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Contact details sidebar */}
            <FadeIn className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
                <div>
                  <h3
                    className="text-brand-navy font-bold text-xl mb-4"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    YADAV MOTORS
                  </h3>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Address</p>
                  <a
                    href="https://maps.google.com/?q=11/67-71+Russell+St,+Werribee+VIC+3030"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-gray-700 hover:text-brand-navy text-sm"
                  >
                    <MapPin size={16} className="text-brand-red mt-0.5 flex-shrink-0" />
                    11/67-71 Russell St, Werribee VIC 3030
                  </a>
                </div>

                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <a
                    href="tel:0430869699"
                    className="flex items-center gap-2 text-brand-navy font-bold text-xl hover:text-brand-red transition-colors"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    <Phone size={18} className="text-brand-red" />
                    0430 869 699
                  </a>
                </div>

                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Opening Hours</p>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mon – Fri</span>
                      <span className="font-medium text-brand-navy">8:00am – 5:30pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium text-brand-navy">8:00am – 1:00pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-gray-400">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-3 text-xs text-brand-navy">
                  <strong>After-hours key drop available.</strong> Call ahead to arrange a convenient drop-off time.
                </div>

                <div className="space-y-2">
                  <Link href="/book" className="btn-primary w-full text-center block">
                    Book Online
                  </Link>
                  <a
                    href="https://maps.google.com/?q=11/67-71+Russell+St,+Werribee+VIC+3030"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-brand-navy font-semibold border-2 border-brand-navy rounded py-2.5 px-4 hover:bg-brand-navy hover:text-white transition-colors text-sm w-full"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    <MapPin size={16} />
                    Get Directions
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Map */}
            <FadeIn delay={150} className="lg:col-span-3">
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.1818135694625!2d144.65992743717925!3d-37.912727932023145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad68587e51866e9%3A0x79d40193dd91b0eb!2sYADAV%20MOTORS%20T%2FA%20RUSSELL%20STREET%20AUTOMOTIVE!5e0!3m2!1sen!2sau!4v1778301301727!5m2!1sen!2sau"
                  width="100%"
                  height="420"
                  style={{ border: "none", display: "block" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yadav Motors Location"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="section-dark py-16 lg:py-24">
        <div className="container text-center">
          <FadeIn>
            <h2
              className="text-white text-3xl lg:text-4xl xl:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              READY TO FIND A MECHANIC
              <br />
              YOU CAN TRUST FOR LIFE?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Book your service online in minutes, or call Rama directly. No guesswork. No jargon. Just honest advice and quality workmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="btn-primary text-lg py-4 px-10">
                Book Your Service Online
              </Link>
              <a
                href="tel:0430869699"
                className="btn-secondary text-lg py-4 px-10 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call 0430 869 699
              </a>
            </div>
            <p className="text-white/40 text-sm mt-6">
              11/67-71 Russell St, Werribee VIC 3030 · info@yadavmotors.com.au
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
