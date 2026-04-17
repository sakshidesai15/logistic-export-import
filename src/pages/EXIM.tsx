import { motion } from "motion/react";
import { 
  FileCheck, 
  ShieldCheck, 
  Globe, 
  ClipboardList, 
  Scale, 
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";

export default function EXIM() {
  const eximFeatures = [
    { 
      icon: <FileCheck />, 
      title: "Customs Documentation", 
      desc: "Complete handling of Bill of Lading, Invoice, Packing List, and Certificates of Origin for error-free clearance."
    },
    { 
      icon: <ClipboardList />, 
      title: "Licensing & Permits", 
      desc: "Expert guidance in obtaining necessary import/export licenses and adhering to regulatory permits globally."
    },
    { 
      icon: <Scale />, 
      title: "Duty & Tax Optimization", 
      desc: "Strategic analysis to minimize customs duties and optimize tax structures for international trade."
    },
    { 
      icon: <ShieldCheck />, 
      title: "Trade Compliance", 
      desc: "Strict adherence to international trade laws and sanctions screening to ensure risk-free global operations."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-exim-green py-24 px-4 sm:px-10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <img src="/images/hero3.jpg" alt="Import export hero background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">EXIM & Compliance</h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Navigating the complexities of international trade with precision documentation and regulatory expertise.
          </p>
        </div>
      </section>

      {/* Intro section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl">
             <img src="/images/exim1.jpg" alt="Import export consulting support" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="badge-styled bg-exim-green/10 text-exim-green border-exim-green/20">International Trade</div>
            <h2 className="text-4xl font-black text-navy mb-8">Seamless Import & Export Management</h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              GlobalLink provides comprehensive EXIM services to ensure your goods move across borders without delays. Our team handles every regulatory hurdle, from local customs clearance to international trade compliance.
            </p>
            <ul className="space-y-4">
              {["Customs House Agent (CHA) Services", "Export Benefit Schemes Consultancy", "HS Code Classification Assistance", "Trade Fair & Exhibition Logistics"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-navy">
                  <div className="w-2 h-2 bg-exim-green rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-navy">Our Specialized EXIM Portfolio</h2>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {eximFeatures.map((feat, i) => (
               <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="text-exim-green mb-6">{feat.icon}</div>
                  <h4 className="font-bold text-navy mb-4">{feat.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-10">
          <Briefcase size={64} className="mx-auto text-exim-green mb-8 opacity-50" />
          <h2 className="text-4xl font-black mb-8">Committed to Trade Compliance</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-12">
            In an era of shifting global policies, we stay ahead of the curve. Our compliance team monitor daily changes in trade regulations ensuring your business is always protected.
          </p>
          <Link to="/contact" className="btn-primary inline-flex py-4 px-12 text-lg bg-exim-green hover:bg-green-600 border-none">
             Partner With Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
