import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, ShieldCheck, BarChart3, Zap, Layers, Database } from 'lucide-react';

/* =========================================
   1. Icons (Enterprise, ERP-Specific)
   ========================================= */
const Icons = {
  Server: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="2" y="2" width="20" height="8" />
      <rect x="2" y="14" width="20" height="8" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  Box: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  Money: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="2" y="6" width="20" height="12" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  ),
  Globe: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  ArrowRight: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Check: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Layers: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  Briefcase: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
};

/* =========================================
   2. Animations
   ========================================= */
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

/* =========================================
   3. Main Component
   ========================================= */

const ERPConsulting = () => {
  
  return (
    <div className="min-h-screen bg-white font-sans text-[#2E2A28] selection:bg-[#70564b] selection:text-white overflow-x-hidden">
      
      {/* --- 1. HERO: "The System Synapse" --- */}
<section className="relative pt-20 pb-24 mt-20 lg:mt-0 lg:pb-32 px-6 lg:px-12 max-w-[1800px] mx-auto border-b border-gray-100 bg-[#fcfcfc] overflow-hidden">
  <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
    
    {/* Left: Strategic Content */}
    <div className="lg:col-span-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-gray-200 bg-white shadow-sm"
      >
        <span className="text-[#70564b] font-mono text-[13px] font-bold uppercase tracking-widest">
          ERP Consulting Services
        </span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-[#2E2A28] leading-[1.05] tracking-tight mb-8"
      >
        Unify Operations. <br/>
        <span className="text-[#70564b]">Accelerate Scale.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-xl text-gray-500 leading-relaxed max-w-lg mb-10 font-light"
      >
        From Procurement to Supply Chain, we integrate your core business functions into a single source of truth. Expert ERP implementation across Qatar, UAE, and India.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-wrap gap-4"
      >
        <Link 
          to="/contact" 
          className="px-10 py-4 bg-[#70564b] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#5f4940] transition-all duration-500 shadow-xl"
        >
          Get a Quick Consultation
        </Link>
      </motion.div>
    </div>

    {/* Right Side: Architectural System Stack (Fixed Visibility) */}
    <div className="lg:col-span-6 relative h-[600px] flex items-center justify-center">
      
      <div className="relative w-full max-w-md h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
        
        {/* Top Layer: Business Intelligence (Lifted higher) */}
        <motion.div 
          initial={{ opacity: 0, y: 0, rotateX: 25, rotateY: -10 }}
          animate={{ opacity: 1, y: -160, rotateX: 25, rotateY: -10 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute w-72 h-36 bg-white/40 backdrop-blur-md border border-white/60 shadow-xl z-30 p-6 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <BarChart3 className="w-5 h-5 text-[#70564b]" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Intelligence Layer</span>
          </div>
          <div>
            <div className="h-1 w-10 bg-[#70564b] mb-2" />
            <p className="text-xs font-bold text-[#2E2A28] uppercase">Real-Time Analytics</p>
          </div>
        </motion.div>

        {/* Middle Layer: Operations (Shifted to clear the bottom text) */}
        <motion.div 
          initial={{ opacity: 0, y: 0, rotateX: 25, rotateY: -10 }}
          animate={{ opacity: 1, y: -45, rotateX: 25, rotateY: -10 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute w-80 h-40 bg-white/60 backdrop-blur-md border border-white shadow-2xl z-20 p-6 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <Zap className="w-5 h-5 text-[#70564b]" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Operational Layer</span>
          </div>
          <div className="flex gap-1.5">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ x: [-50, 100] }} 
                  transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.3 }} 
                  className="w-1/2 h-full bg-[#70564b]/20" 
                />
              </div>
            ))}
          </div>
          <p className="text-xs font-bold text-[#2E2A28] uppercase tracking-wider">Process Automation</p>
        </motion.div>

        {/* Base Layer: Core ERP Foundation (Now Fully Visible) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateX: 25, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 25, rotateY: -10 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-96 h-56 bg-[#70564b] shadow-[0_50px_100px_-20px_rgba(112,86,75,0.4)] z-10 p-8 flex flex-col justify-between overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:15px_15px]" />
          
          <div className="relative z-10 flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm tracking-widest uppercase">Central ERP Foundation</h4>
              <p className="text-white/40 text-xs uppercase tracking-tighter">Unified Enterprise Hub</p>
            </div>
          </div>

          <div className="relative z-10 flex gap-8 border-t border-white/10 pt-6">
            <div className="flex flex-col">
              <span className="text-xs text-white/40 uppercase tracking-widest mb-1">System Status</span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#70564b] animate-pulse" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Live Sync</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-white/40 uppercase tracking-widest mb-1">Security</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#70564b]" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Encrypted</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:30px_30px] -z-10 opacity-30" />
    </div>

  </div>
</section>
      {/* --- 2. CONTEXT: "Regional Authority" --- */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-4 text-xs">
              Why Glimmora?
            </h2>
            <h3 className="text-3xl font-bold text-[#2E2A28] mb-6">
              Global Standards. <br/> Regional Expertise.
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Modern organizations cannot afford data silos. ERP provides real-time visibility and control across your entire enterprise.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              We provide tailor-made ERP consulting for SMEs and Enterprises across **Qatar, UAE, and India**, ensuring your system aligns with local compliance and global best practices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-gray-100 border border-gray-100">
            {[
              { label: "Qatar", sub: "Doha HQ" },
              { label: "UAE", sub: "Dubai Hub" },
              { label: "India", sub: "Dev Center" },
              { label: "Global", sub: "Best Practices" }
            ].map((loc, i) => (
              <div key={i} className="bg-[#fdfbf9] p-8 text-center hover:bg-white transition-colors">
                <div className="text-xl font-bold text-[#70564b] mb-1">{loc.label}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">{loc.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- 3. PLATFORMS: "The Neutral Stack" --- */}
      <section className="py-24 bg-[#faf9f6]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-12 text-xs">
            Platforms We Support
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "SAP", color: "text-[#008FD3]" },
              { name: "Oracle", color: "text-[#C74634]" },
              { name: "Microsoft Dynamics", color: "text-[#70564b]" }, // Using brand color for MS
              
            ].map((brand, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 p-10 flex items-center justify-center shadow-sm"
              >
                <span className={`text-xl font-bold ${brand.color}`}>{brand.name}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-500">
            We are platform-neutral. We recommend the solution that fits <em>your</em> business.
          </p>
        </div>
      </section>

      {/* --- 4. FUNCTIONAL DOMAINS: "Quadrant Blueprint" --- */}
  <section className="py-24 bg-[#fcfcfc] border-y border-gray-100">
  <div className="max-w-[1400px] mx-auto px-6">
    
    {/* Section Header: Tighter vertical spacing */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
      <div className="max-w-xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-[1px] bg-[#70564b]" />
          <h2 className="text-[#70564b] font-bold uppercase tracking-[0.3em] text-xs">
            Functional Coverage
          </h2>
        </div>
        <h3 className="text-3xl font-bold text-[#2E2A28] tracking-tight">
          End-to-End Enterprise Management
        </h3>
      </div>
    </div>

    {/* Stylish & Clean Grid: Reduced padding and tighter icon placement */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {/* Domain 1: Procurement */}
      <div className="bg-white p-8 border border-gray-100 hover:border-[#70564b]/30 transition-all duration-300 group shadow-sm hover:shadow-md">
        <div className="flex items-center gap-3 mb-5">
          <Icons.Briefcase className="w-5 h-5 text-[#70564b]" />
          <h4 className="text-xl font-bold text-[#2E2A28]">Procurement</h4>
        </div>
        <ul className="space-y-3">
          {["Strategic Sourcing", "Contract Management", "Procure-to-Pay", "Supplier Management"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-xs text-gray-500">
              <div className="w-1 h-[1px] bg-gray-300 group-hover:bg-[#70564b] group-hover:w-2 transition-all"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Domain 2: Finance */}
      <div className="bg-white p-8 border border-gray-100 hover:border-[#70564b]/30 transition-all duration-300 group shadow-sm hover:shadow-md">
        <div className="flex items-center gap-3 mb-5">
          <Icons.Money className="w-5 h-5 text-[#70564b]" />
          <h4 className="text-xl font-bold text-[#2E2A28]">Finance</h4>
        </div>
        <ul className="space-y-3">
          {["AP / AR / Revenue", "Treasury & Tax", "Costing & FP&A", "Credit Control"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-xs text-gray-500">
              <div className="w-1 h-[1px] bg-gray-300 group-hover:bg-[#70564b] group-hover:w-2 transition-all"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Domain 3: Planning */}
      <div className="bg-white p-8 border border-gray-100 hover:border-[#70564b]/30 transition-all duration-300 group shadow-sm hover:shadow-md">
        <div className="flex items-center gap-3 mb-5">
          <Icons.Layers className="w-5 h-5 text-[#70564b]" />
          <h4 className="text-xl font-bold text-[#2E2A28]">Planning</h4>
        </div>
        <ul className="space-y-3">
          {["Supply & Demand", "Integrated Planning", "Profitability Analysis", "Business Modeling"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-xs text-gray-500">
              <div className="w-1 h-[1px] bg-gray-300 group-hover:bg-[#70564b] group-hover:w-2 transition-all"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Domain 4: Supply Chain */}
      <div className="bg-white p-8 border border-gray-100 hover:border-[#70564b]/30 transition-all duration-300 group shadow-sm hover:shadow-md">
        <div className="flex items-center gap-3 mb-5">
          <Icons.Box className="w-5 h-5 text-[#70564b]" />
          <h4 className="text-xl font-bold text-[#2E2A28]">Supply Chain</h4>
        </div>
        <ul className="space-y-3">
          {["Logistics Management", "Manufacturing Execution", "Lifecycle Management", "Risk & Compliance"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-xs text-gray-500">
              <div className="w-1 h-[1px] bg-gray-300 group-hover:bg-[#70564b] group-hover:w-2 transition-all"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</section>

      {/* --- 5. BENEFITS: "Editorial Strips" --- */}
      <section className="py-24 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28]">
              Business Value Delivered
            </h2>
          </div>

          <div className="border-t border-gray-300">
            {[
              "Higher Productivity",
              "Lower Risk & Compliance Readiness",
              "Deeper Business Insights",
              "Simpler IT Landscape",
              "Accelerated Reporting",
              "Improved Business Agility"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center justify-between py-6 border-b border-gray-200 group hover:bg-white px-4 transition-colors">
                <span className="text-sm font-bold text-[#2E2A28] group-hover:text-[#70564b] transition-colors">
                  {benefit}
                </span>
                <Icons.ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#70564b] transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. APPROACH: "Execution Timeline" --- */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-2 text-xs">
              Our Methodology
            </h2>
            <h3 className="text-3xl font-bold text-[#2E2A28]">
              From Concept to Go-Live
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Enquiry", "Consultation", "Design", 
              "Agreement", "Execution", "Handover"
            ].map((step, i) => (
              <div key={i} className="relative p-6 border border-gray-100 bg-[#fdfbf9] text-center group hover:border-[#70564b] transition-all">
                <div className="text-xs font-mono text-gray-400 mb-2 group-hover:text-[#70564b]">0{i+1}</div>
                <div className="font-bold text-[#2E2A28] text-sm">{step}</div>
                
                {/* Connector Line (except last) */}
                {i !== 5 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-gray-300 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. CTA: "Sharp Strip" --- */}
      <section className="py-24 section-brand-bg px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Optimize Your ERP?
          </h2>
          <p className="text-sm text-white/80 mb-8">
            Speak with our ERP consultants to plan your roadmap.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-white text-[#70564b] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#5f4940] hover:text-white transition-colors rounded-none"
          >
            Get a Quick Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ERPConsulting;