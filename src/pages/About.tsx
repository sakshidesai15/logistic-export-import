import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Target, 
  Award, 
  TrendingUp, 
  Users2
} from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy py-24 px-4 sm:px-10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <img src="/images/hero1.jpg" alt="Global logistics hero background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Pioneering Global Logistics</h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Established with a vision to streamline international trade, GlobalLink has become a leader in cargo management and trade compliance.
          </p>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="badge-styled">Our Story</div>
            <h2 className="text-4xl font-black text-navy mb-8">Decades of Expertise in Global Forwarding</h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Founded over 20 years ago, we began as a small regional transport provider. Today, we manage thousands of shipments across every continent, leveraging advanced technology and a deep-rooted understanding of complex customs laws.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Target size={32} className="text-blue-accent mb-4" />
                <h4 className="font-bold text-navy mb-2">Our Mission</h4>
                <p className="text-sm text-slate-500">To simplify global supply chains through innovation and integrity.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <TrendingUp size={32} className="text-exim-green mb-4" />
                <h4 className="font-bold text-navy mb-2">Our Vision</h4>
                <p className="text-sm text-slate-500">To be the most reliable link in world commerce by 2030.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/exim1.jpg" alt="Import export operations team" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-blue-accent p-10 rounded-3xl text-white shadow-2xl hidden md:block">
               <div className="text-5xl font-black mb-2">25+</div>
               <div className="font-bold tracking-widest text-xs uppercase opacity-70">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
             { val: "15k+", label: "Active Clients", icon: <Users2 /> },
             { val: "220+", label: "Port Networks", icon: <Award /> },
             { val: "500k", label: "Tons Handled", icon: <CheckCircle2 /> },
             { val: "100%", label: "Compliance Rate", icon: <CheckCircle2 /> }
          ].map((stat, i) => (
            <div key={i} className="text-white">
              <div className="text-blue-accent flex justify-center mb-4 opacity-50">{stat.icon}</div>
              <div className="text-4xl font-black mb-1">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-10">
        <div className="text-center mb-16">
          <div className="badge-styled mx-auto">Our Experts</div>
          <h2 className="text-3xl font-black text-navy mt-4">The Minds Behind GlobalLink</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: "Robert Chen", role: "CEO & Founder", img: "/images/logistics1.jpg" },
            { name: "Sarah Miller", role: "Head of EXIM Compliance", img: "/images/exim1.jpg" },
            { name: "Marcus Vane", role: "Logistics Director", img: "/images/hero2.jpg" }
          ].map((person, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl overflow-hidden group border border-slate-100">
               <div className="h-72 overflow-hidden">
                 <img src={person.img} alt={`${person.name} profile`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
               </div>
               <div className="p-6 text-center">
                 <h4 className="font-bold text-navy h-6">{person.name}</h4>
                 <p className="text-slate-400 text-sm mt-1">{person.role}</p>
               </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
