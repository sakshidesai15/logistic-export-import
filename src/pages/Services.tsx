import { motion } from "motion/react";
import { 
  Truck, 
  Globe, 
  Anchor, 
  Plane, 
  Warehouse, 
  ClipboardCheck, 
  Boxes, 
  ShieldAlert
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const allServices = [
    { 
      icon: <Truck size={32} />, 
      title: "Road Transportation", 
      desc: "Comprehensive domestic and cross-border trucking solutions with real-time GPS tracking and dedicated fleet management.",
      features: ["FTL / LTL Support", "Temperature Controlled", "Last Mile Delivery"]
    },
    { 
      icon: <Anchor size={32} />, 
      title: "Sea Freight forwarding", 
      desc: "Reliable ocean cargo services including FCL and LCL shipments to all major global ports with optimized transit times.",
      features: ["Consolidation Services", "Door-to-Door Delivery", "Dangerous Goods Handling"]
    },
    { 
      icon: <Plane size={32} />, 
      title: "Air Freight", 
      desc: "Urgent and time-sensitive cargo solutions via major air carriers, ensuring rapid turnaround and secure handling.",
      features: ["Next Flight Out", "Charter Solutions", "Global Airport Network"]
    },
    { 
      icon: <Warehouse size={32} />, 
      title: "Warehousing", 
      desc: "State-of-the-art storage facilities with advanced WMS integration, inventory management, and value-added services.",
      features: ["Pick & Pack", "Cross-Docking", "Long-term Storage"]
    },
    { 
      icon: <Boxes size={32} />, 
      title: "Cargo Handling", 
      desc: "Professional packaging and distribution services tailored to fragile, high-value, or oversized industrial equipment.",
      features: ["Custom Crating", "Heavy Lift Support", "Distribution Management"]
    },
    { 
      icon: <ShieldAlert size={32} />, 
      title: "Supply Chain Risk", 
      desc: "Consultancy services to mitigate logistics risks, ensure business continuity, and optimize operational costs.",
      features: ["Route Optimization", "Vendor Management", "Contingency Planning"]
    }
  ];

  return (
    <div className="bg-slate-50">
      {/* Header */}
      <section className="bg-[#0F2B46] py-24 px-4 sm:px-10 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Logistics Excellence</h1>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            From last-mile delivery to complex global supply chain management, we provide end-to-end logistics solutions.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allServices.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-slate-50 text-blue-accent rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-accent group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-navy mb-4">{service.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed text-sm">
                {service.desc}
              </p>
              <div className="space-y-3">
                {service.features.map((feature, f) => (
                   <div key={f} className="flex items-center gap-3 text-xs font-bold text-navy">
                      <div className="w-1.5 h-1.5 bg-exim-green rounded-full" />
                      {feature}
                   </div>
                ))}
              </div>
              <div className="mt-10">
                 <Link to="/contact" className="text-blue-accent font-black text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                   Get Quote <Globe size={16} />
                 </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-navy py-20 px-4 sm:px-10">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-8">Need a Custom Logistics Plan?</h2>
            <p className="text-white/50 mb-10 text-lg">Our experts can design a strategy tailored to your specific industry requirements.</p>
            <Link to="/contact" className="btn-primary inline-flex py-4 px-12 text-lg">
               Consult with Us
            </Link>
         </div>
      </section>
    </div>
  );
}
