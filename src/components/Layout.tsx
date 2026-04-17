import { 
  Phone, 
  Mail, 
  Menu, 
  X 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);

    const sections = Array.from(document.querySelectorAll("main section")).filter(
      (section) => !section.classList.contains("hero-container")
    );

    sections.forEach((section) => section.classList.add("scroll-reveal-target"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "EXIM", path: "/exim" },
    { name: "Tracking", path: "/tracking" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      iconClass: "fa-brands fa-facebook-f",
      href: "https://www.facebook.com/",
      className: "social-link-facebook"
    },
    {
      name: "Instagram",
      iconClass: "fa-brands fa-instagram",
      href: "https://www.instagram.com/",
      className: "social-link-instagram"
    },
    {
      name: "WhatsApp",
      iconClass: "fa-brands fa-whatsapp",
      href: "https://wa.me/919999999999",
      className: "social-link-whatsapp"
    },
    {
      name: "YouTube",
      iconClass: "fa-brands fa-youtube",
      href: "https://www.youtube.com/",
      className: "social-link-youtube"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-accent/30 selection:text-blue-accent">
      {/* Top Bar */}
      <div className="bg-[#0F2B46] text-white py-2 px-4 sm:px-10 flex justify-between text-[12px] font-medium hidden sm:flex border-b border-white/10">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-blue-accent" /> +91 22 4567 8900
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} className="text-blue-accent" /> contact@globallink.com
          </span>
        </div>
        <div className="flex gap-4 opacity-70">
          <span>Mumbai</span>
          <span>•</span>
          <span>London</span>
          <span>•</span>
          <span>Dubai</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "top-0 bg-white/92 backdrop-blur-md shadow-lg py-2" : "top-0 sm:top-[36px] bg-white py-4"} border-b border-slate-100 px-4 sm:px-10`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-[#0F2B46] tracking-tight flex items-center">
              SATYANAND <span className="text-blue-accent ml-1">EXIM</span>
              <div className="ml-1 w-1.5 h-1.5 bg-exim-green rounded-full self-end mb-1" />
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[14px] font-medium text-slate-600 hover:text-blue-accent transition-all hover:underline underline-offset-8"
              >
                {link.name}
              </Link>
            ))}
            
            <Link to="/contact" className="bg-blue-accent hover:bg-[#2b6cb0] text-white px-6 py-2.5 rounded-[8px] font-bold text-[14px] transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-20 left-0 right-0 bg-white border-b border-slate-200 p-4 flex flex-col space-y-4 md:hidden z-50 shadow-xl"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[14px] font-medium text-slate-600 px-4 py-2 hover:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-blue-accent text-white px-5 py-3 rounded-[8px] text-center font-bold mx-4">
                Get Quote
              </Link>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Spacing for fixed nav */}
      <div className="h-[80px] sm:h-[116px]"></div>

      <aside className="social-sidebar" aria-label="Social media links">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className={`social-link ${social.className}`}
          >
            <i className={social.iconClass} aria-hidden="true" />
          </a>
        ))}
      </aside>

      <main key={location.pathname} className="flex-grow page-shell">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="text-xl font-bold text-navy tracking-tight flex items-center">
            SATYANAND <span className="text-blue-accent ml-1">EXIM</span>
            <div className="ml-1 w-1 h-1 bg-exim-green rounded-full self-end mb-1" />
          </Link>
          <div className="flex gap-8 text-[12px] font-bold text-slate-500 uppercase tracking-widest">
            <Link to="/services" className="hover:text-blue-accent">Solutions</Link>
            <Link to="/about" className="hover:text-blue-accent">About</Link>
            <Link to="/contact" className="hover:text-blue-accent">Privacy</Link>
          </div>
          <div className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">
            (C) 2026 Satyanand Exim Logistics.
          </div>
        </div>
      </footer>
    </div>
  );
}


