import { motion } from "motion/react";
import { 
  Search, 
  MapPin, 
  Truck, 
  Package, 
  CheckCircle2, 
  History
} from "lucide-react";
import React, { useState } from "react";

export default function Tracking() {
  const [trackingId, setTrackingId] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-navy py-24 px-4 sm:px-10 text-center text-white">
         <h1 className="text-4xl md:text-6xl font-black mb-6">Real-Time Cargo Tracking</h1>
         <p className="text-white/60 text-lg max-w-2xl mx-auto">
           Enter your reference number below to see the current location and status of your shipment.
         </p>
      </section>

      {/* Search Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-10 -mt-12">
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-slate-100 mb-12">
           <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow relative">
                 <input 
                   type="text" 
                   value={trackingId}
                   onChange={(e) => setTrackingId(e.target.value)}
                   placeholder="Enter Container / AWB / Reference No." 
                   className="w-full pl-12 pr-4 py-5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-accent outline-none text-lg"
                 />
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
              <button 
                type="submit" 
                className={`btn-primary px-12 py-5 text-lg rounded-2xl flex items-center justify-center gap-2 ${isSearching ? "opacity-70 cursor-not-allowed" : ""}`}
                disabled={isSearching}
              >
                {isSearching ? "Searching..." : "Track Now"}
              </button>
           </form>
           <p className="mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-center">
             Sample ID: GL-98745-EXP
           </p>
        </div>

        {/* Results */}
        {showResult && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="bg-slate-50 p-8 border-b border-slate-200 flex flex-wrap justify-between items-center gap-4">
               <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Shipment Status</div>
                  <div className="text-2xl font-black text-navy flex items-center gap-2">
                    <div className="w-3 h-3 bg-exim-green rounded-full animate-pulse" />
                    In Transit
                  </div>
               </div>
               <div className="text-right">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Estimated Delivery</div>
                  <div className="text-lg font-black text-navy">Apr 24, 2026</div>
               </div>
            </div>

            <div className="p-8">
               <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                  {[
                    { status: "Arrival at Destination Port", location: "London Gateway, UK", time: "Pending", done: false },
                    { status: "Ocean Freight in Transit", location: "Atlantic Ocean", time: "Apr 18, 10:20 AM", done: false, active: true },
                    { status: "Departed from Origin", location: "Nhava Sheva, India", time: "Apr 16, 04:30 PM", done: true },
                    { status: "Customs Cleared", location: "Mumbai Hub", time: "Apr 15, 11:00 AM", done: true },
                    { status: "Shipment Picked Up", location: "Warehouse A1", time: "Apr 14, 09:00 AM", done: true }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6 relative">
                       <div className={`w-6 h-6 rounded-full border-4 border-white shadow-md flex-shrink-0 z-10 ${step.done ? "bg-exim-green" : step.active ? "bg-blue-accent ring-4 ring-blue-accent/20" : "bg-slate-200"}`} />
                       <div className={step.active ? "opacity-100" : step.done ? "opacity-100" : "opacity-40"}>
                          <h4 className="font-bold text-navy text-lg leading-none mb-2">{step.status}</h4>
                          <p className="text-slate-500 text-sm flex items-center gap-2">
                             <MapPin size={14} /> {step.location}
                          </p>
                          <p className="text-slate-400 text-xs mt-2 font-bold uppercase tracking-widest flex items-center gap-2">
                             <History size={12} /> {step.time}
                          </p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="p-8 bg-navy text-white flex justify-between items-center text-sm">
               <div className="flex items-center gap-3">
                  <Package size={20} className="text-blue-accent" />
                  <span>Gross Weight: <span className="font-bold">2,450 KG</span></span>
               </div>
               <div className="flex items-center gap-3">
                  <Truck size={20} className="text-blue-accent" />
                  <span>Mode: <span className="font-bold uppercase tracking-widest">Ocean Freight</span></span>
               </div>
            </div>
          </motion.div>
        )}

        {!showResult && !isSearching && (
           <div className="grid md:grid-cols-2 gap-12 mt-20">
              <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                 <div className="w-12 h-12 bg-blue-accent/5 text-blue-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-navy mb-1">Door-to-door Visibility</h4>
                    <p className="text-sm text-slate-500">Track your cargo from the warehouse floor directly to the final customer destination.</p>
                 </div>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                 <div className="w-12 h-12 bg-exim-green/5 text-exim-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-navy mb-1">Accurate ETA</h4>
                    <p className="text-sm text-slate-500">Our machine learning models predict arrival times based on current port congestion.</p>
                 </div>
              </div>
           </div>
        )}
      </div>
    </div>
  );
}
