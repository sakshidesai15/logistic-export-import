import {
  CheckCircle2,
  Target,
  Award,
  TrendingUp,
  Users2,
  Leaf
} from "lucide-react";

import spiceHero from "../assets/spieces/3WgvVVgOuKX6G3zP2z0V_XAoyYHBfBXr6trmfYKm10-qhmUxQ_sgcvbdm5-bn42nj0BVUOmeaC8BbP_QcFRtW4Np5x06qUoWMCKcwsJ9HypGIFxFCg28OSCnADjCm_nk2VI1jZZ7s91uxJPNef-Hx8fnkscO2X8Sy_iU-CvjDS4NN3.jpg";
import spiceImage from "../assets/spieces/G0ZYH814Pv6GkccL5v0vQrpkEzgkThUyu8Js1wOYxU0KJxvtfnVQ6OBrcp5ncHIXo3I_rERgV8x5R9wP7iUxIJwD1RMErhj1asAtdrnoc6VZO8DLkCfJYEP40DtsaGnlJN036bjZcX06IugtQsvHJygah0QieG91DZtoJU.jpg";

export default function About() {
  return (
    <div className="bg-white">
      <section className="bg-navy py-24 px-4 sm:px-10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-15">
          <img src={spiceHero} alt="Spices and agro products" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">About SATYANAND EXIM</h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            We are an export-focused company delivering premium spices and agro products, with reliable logistics support for import, export, and domestic movement.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="badge-styled">Our Story</div>
            <h2 className="text-4xl font-black text-navy mb-8">Healthy Spice Composition, Trusted Global Delivery</h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              SATYANAND EXIM is built around one clear purpose: supply quality spices and agro products that support healthy lifestyles and long-term buyer trust. Alongside product exports, we provide dependable logistics support so consignments move smoothly across borders and within India.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Target size={32} className="text-exim-green mb-4" />
                <h4 className="font-bold text-navy mb-2">Our Mission</h4>
                <p className="text-sm text-slate-500">Deliver healthy, export-grade spice and agro products with consistent quality.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <TrendingUp size={32} className="text-exim-green mb-4" />
                <h4 className="font-bold text-navy mb-2">Our Vision</h4>
                <p className="text-sm text-slate-500">Become a preferred global partner for Indian agro exports and support logistics.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={spiceImage} alt="Premium spice products" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-exim-green p-10 rounded-3xl text-white shadow-2xl hidden md:block">
              <div className="text-5xl font-black mb-2">10+</div>
              <div className="font-bold tracking-widest text-xs uppercase opacity-80">Years in Trade</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { val: "100+", label: "Global Buyers", icon: <Users2 /> },
            { val: "40+", label: "Export Markets", icon: <Award /> },
            { val: "500+", label: "Shipments", icon: <CheckCircle2 /> },
            { val: "100%", label: "Quality Focus", icon: <Leaf /> }
          ].map((stat, i) => (
            <div key={i} className="text-white">
              <div className="text-exim-green flex justify-center mb-4 opacity-70">{stat.icon}</div>
              <div className="text-4xl font-black mb-1">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}