import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Truck,
  Globe,
  ShieldCheck,
  Package,
  Container,
  FileCheck,
  Phone,
  Mail,
  Network,
  Clock3,
  Handshake,
  Route,
  Users2,
  Factory,
  ShoppingCart,
  Pill,
  Car,
  Cog
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const heroSlides = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const whySectionRef = useRef<HTMLElement | null>(null);
  const [hasStartedCounters, setHasStartedCounters] = useState(false);
  const [stats, setStats] = useState({
    shipments: 0,
    clients: 0,
    team: 0,
    years: 0
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    const target = whySectionRef.current;
    if (!target || hasStartedCounters) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStartedCounters(true);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [hasStartedCounters]);

  useEffect(() => {
    const target = aboutSectionRef.current;
    if (!target || aboutVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAboutVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [aboutVisible]);

  useEffect(() => {
    if (!hasStartedCounters) {
      return;
    }

    const duration = 1800;
    const targets = {
      shipments: 500,
      clients: 100,
      team: 50,
      years: 10
    };

    let frame = 0;
    const start = performance.now();

    const animateCounters = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setStats({
        shipments: Math.round(targets.shipments * eased),
        clients: Math.round(targets.clients * eased),
        team: Math.round(targets.team * eased),
        years: Math.round(targets.years * eased)
      });

      if (progress < 1) {
        frame = window.requestAnimationFrame(animateCounters);
      }
    };

    frame = window.requestAnimationFrame(animateCounters);

    return () => window.cancelAnimationFrame(frame);
  }, [hasStartedCounters]);

  return (
    <>
      <section className="hero-container">
        <div className="hero-slider" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <div
              key={slide}
              className={`hero-slide ${index === currentSlide ? "is-active" : ""}`}
              style={{ backgroundImage: `url("${slide}")` }}
            />
          ))}
        </div>
        <div className="hero-overlay" />

        <div className="hero-content" key={currentSlide}>
          <h1 className="hero-title">Global Logistics Solutions</h1>
          <div className="hero-subtext-box">
            <p className="hero-subtext">Seamlessly managing freight, transportation, and global trade</p>
          </div>
          <div className="hero-buttons">
            <Link to="/contact" className="hero-btn hero-btn-primary">
              Get Quote
            </Link>
            <Link to="/services" className="hero-btn hero-btn-secondary">
              Our Services
            </Link>
          </div>
        </div>

        <a href="#about" className="scroll-indicator" aria-label="Scroll to About section">
          <span className="scroll-indicator-dot" />
        </a>
      </section>

      <section className="split-card-section">
        <div className="split-card-grid">
          <Link to="/services" className="split-card-link">
            <motion.article
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="card split-card"
            >
              <img
                src="/images/logistics1.jpg"
                alt="Logistics transportation services"
                className="split-card-media"
              />
              <div className="card-overlay" />
              <div className="card-content">
                <h3 className="card-title">Logistics Services</h3>
                <p className="card-subtitle">Transportation, Freight, Warehousing</p>
              </div>
            </motion.article>
          </Link>

          <Link to="/exim" className="split-card-link">
            <motion.article
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
              className="card split-card"
            >
              <img
                src="/images/exim1.jpg"
                alt="Import export operations at international port"
                className="split-card-media"
              />
              <div className="card-overlay" />
              <div className="card-content">
                <h3 className="card-title">Import & Export</h3>
                <p className="card-subtitle">Documentation, Customs, Global Trade</p>
              </div>
            </motion.article>
          </Link>
        </div>
      </section>

      <section id="about" ref={aboutSectionRef} className="about-section">
        <div className="about-wrap">
          <div className={`about-media ${aboutVisible ? "is-visible" : ""}`}>
            <div className="about-media-frame">
              <img
                src="/images/logistics1.jpg"
                alt="Global logistics operations and transportation"
                className="about-media-img"
              />
            </div>
          </div>

          <div className={`about-content ${aboutVisible ? "is-visible" : ""}`}>
            <div className="about-label">Our Story</div>
            <h3 className="about-heading">Decades of Expertise in Global Logistics</h3>
            <p className="about-copy">
              We provide reliable logistics and import-export solutions with a focus on efficiency, quality, and customer satisfaction. Our experience helps businesses grow in global markets.
            </p>
            <Link to="/about" className="about-btn">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="services-grid-section">
        <div className="services-grid-wrap">
          <div className="services-header">
            <h2 className="services-title">Our Services</h2>
            <p className="services-subtitle">
              Comprehensive logistics and global trade solutions tailored to your business needs
            </p>
          </div>
          <div className="services-grid">
            {[
              { icon: <Truck size={24} />, title: "Road Transportation", desc: "Reliable cargo movement across domestic routes." },
              { icon: <Globe size={24} />, title: "Freight Forwarding", desc: "Seamless air and sea freight coordination globally." },
              { icon: <Package size={24} />, title: "Warehousing", desc: "Secure storage with efficient inventory handling." },
              { icon: <ShieldCheck size={24} />, title: "Customs Clearance", desc: "Fast, compliant clearance for smooth border transit." },
              { icon: <FileCheck size={24} />, title: "Import & Export Documentation", desc: "Accurate paperwork management for global shipments." },
              { icon: <Network size={24} />, title: "Supply Chain Management", desc: "End-to-end planning for optimized trade operations." }
            ].map((service, idx) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
                className="service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-desc">{service.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        ref={whySectionRef}
        className="why-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="why-wrap">
          <motion.div
            className="why-left"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="why-title">Why Choose Us</h2>
            <p className="why-subtitle">
              We deliver reliable and efficient logistics and global trade solutions tailored to your business.
            </p>

            <div className="why-points">
              {[
                { icon: <Clock3 size={18} />, title: "Reliable & Timely Delivery", desc: "Consistent schedules with dependable transit performance." },
                { icon: <Globe size={18} />, title: "Global Network Coverage", desc: "Strong international partner network across key trade routes." },
                { icon: <Users2 size={18} />, title: "Experienced Professionals", desc: "Skilled specialists managing every stage of shipment flow." },
                { icon: <Route size={18} />, title: "End-to-End Logistics Support", desc: "Integrated handling from origin pickup to final destination." },
                { icon: <Handshake size={18} />, title: "Customer-Centric Approach", desc: "Personalized solutions aligned with your business priorities." }
              ].map((point) => (
                <div key={point.title} className="why-point-item">
                  <div className="why-point-icon">{point.icon}</div>
                  <div>
                    <h4 className="why-point-title">{point.title}</h4>
                    <p className="why-point-desc">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="why-right"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div className="why-counters-grid">
              {[
                { value: stats.shipments, label: "Shipments Delivered" },
                { value: stats.clients, label: "Global Clients" },
                { value: stats.team, label: "Team Members" },
                { value: stats.years, label: "Years Experience" }
              ].map((counter) => (
                <div key={counter.label} className="counter-card">
                  <div className="counter-value">{counter.value}+</div>
                  <div className="counter-label">{counter.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="industries-section">
        <div className="industries-wrap">
          <div className="industries-header">
            <h2 className="industries-title">Industries We Serve</h2>
            <p className="industries-subtitle">
              Delivering tailored logistics and global trade solutions across multiple industries
            </p>
          </div>
          <div className="industries-grid">
            {[
              { icon: <Factory size={22} />, label: "Manufacturing" },
              { icon: <ShoppingCart size={22} />, label: "Retail & E-commerce" },
              { icon: <Pill size={22} />, label: "Pharmaceuticals" },
              { icon: <Car size={22} />, label: "Automotive" },
              { icon: <Package size={22} />, label: "FMCG" },
              { icon: <Cog size={22} />, label: "Industrial Goods" }
            ].map((industry, idx) => (
              <motion.article
                key={industry.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.08 }}
                className="industry-card"
              >
                <div className="industry-icon">{industry.icon}</div>
                <h4 className="industry-label">{industry.label}</h4>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-bg" style={{ backgroundImage: "url('/images/hero2.jpg')" }} />
        <div className="cta-overlay" />
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="cta-title">Looking for Reliable Logistics & Export Solutions?</h2>
          <p className="cta-subtitle">
            Contact us today for efficient and trusted global services
          </p>
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          >
            <Link to="/contact" className="cta-btn cta-btn-primary">
              Get a Quote
            </Link>
            <Link to="/contact" className="cta-btn cta-btn-secondary">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section id="contact" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="badge-styled">Contact Us</div>
              <h3 className="text-4xl font-extrabold text-navy mb-8">Ready to move your business forward?</h3>
              <p className="text-lg text-slate-500 mb-12">
                Have questions or need a personalized quote? Our expert team is ready to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-blue-accent">
                    <Phone size={20} />
                  </div>
                  <div className="text-lg font-bold text-navy">+91 22 4567 8900</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-blue-accent">
                    <Mail size={20} />
                  </div>
                  <div className="text-lg font-bold text-navy">contact@globallink.com</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[12px] p-8 shadow-sm border border-slate-200">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-[6px] border border-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-accent" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-[6px] border border-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-accent" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-[6px] border border-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-accent" />
                <textarea rows={4} placeholder="Requirement Details..." className="w-full px-4 py-3 rounded-[6px] border border-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-accent resize-none"></textarea>
                <button type="submit" className="w-full btn-primary py-4 text-lg">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
