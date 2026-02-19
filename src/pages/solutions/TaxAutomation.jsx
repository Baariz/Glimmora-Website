import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

/* =========================================
   1. Icons (Sharp, Editorial Style)
   ========================================= */
const Icons = {
  BrainCircuit: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
      <path d="M16 8a5 5 0 0 1 5 5c0 2.21-1.34 4.1-3.26 4.8" />
      <path d="M8 8a5 5 0 0 0-5 5c0 2.21 1.34 4.1 3.26 4.8" />
    </svg>
  ),
  FileSpreadsheet: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M8 13h2" />
      <path d="M14 13h2" />
      <path d="M8 17h2" />
      <path d="M14 17h2" />
    </svg>
  ),
  Cog: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Arrow: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M5 12h14m-6-6l6 6-6 6" />
    </svg>
  ),
  Shield: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  CheckCircle: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
};

/* =========================================
   2. Main Component
   ========================================= */

const TaxAutomation = () => {
  // Scroll Hooks
  const containerRef = useRef(null);

  // Feature Data
  const features = [
    {
      id: 1,
      title: "Consolidation Engine",
      subtitle: "Unified Financial Truth",
      desc: "EmaraTax connects directly to your ERPs (SAP, Oracle, Microsoft) to pull every transaction into a single, immutable tax ledger. We eliminate the 'spreadsheet gap' between finance and filing.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Automated Computation",
      subtitle: "The 9% Logic",
      desc: "Our engine applies the latest FTA rules instantly. It identifies exempt income, calculates relief thresholds (AED 375k), and determines your exact liability without a single manual formula.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "One-Click Filing",
      subtitle: "Ready for the FTA",
      desc: "Generate the final tax return form automatically. The system validates every field against the FTA's schema requirements, ensuring your submission is accepted the first time.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#2E2A28] selection:bg-[#70564b] selection:text-white overflow-x-hidden">
      
      {/* --- 1. HERO: "The Compliance Mechanism" (New Motion Graphic) --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-16 overflow-hidden bg-white border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          
          {/* Left: Typography */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-[#70564b]"></div>
              <span className="text-[#70564b] font-bold uppercase tracking-[0.2em] text-xs">
                EmaraTax Automation
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold text-[#2E2A28] leading-[1.1] tracking-tight mb-8"
            >
              Confidence in <br/>
              Every <span className="text-[#70564b]">Calculation.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-gray-500 leading-relaxed max-w-lg mb-10 font-light"
            >
              The intelligent platform for UAE Corporate Tax. Consolidate financial data, automate 9% computations, and file audit-ready returns.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="px-8 py-4 bg-[#70564b] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#5f4940] transition-colors rounded-none text-center">
                Start Filing
              </Link>
              <button className="px-8 py-4 bg-transparent border border-gray-300 text-[#2E2A28] font-bold text-sm uppercase tracking-widest hover:border-[#70564b] hover:text-[#70564b] transition-colors rounded-none flex items-center justify-center gap-3">
                <a href="#logic">See The Logic</a> <Icons.Arrow className="w-4 h-4"/>
              </button>
            </motion.div>
          </div>

          {/* Right: The "Compliance Mechanism" Motion Graphic */}
          <div className="relative h-[500px] bg-[#fbf9f8] border border-gray-100 flex items-center justify-center overflow-hidden">
            
            {/* The Abstract Machine Container */}
            <div   className="relative w-full max-w-lg h-full flex flex-col justify-center gap-6 p-8">
               
               {/* Three "Tumblers" or "Gateways" */}
               {['Data Ingestion', '9% Computation', 'FTA Filing'].map((stage, i) => {
                 const isLast = i === 2;
                 const accentColor = isLast ? '#22c55e' : '#70564b'; // Green for last, Orange otherwise

                 return (
                  <div key={i} className="relative h-20 bg-white border border-gray-200 flex items-center px-2 overflow-hidden shadow-sm">
                      
                      {/* Background Track */}
                      <div className="absolute inset-0 flex items-center px-4">
                        <div className="w-full h-[1px] bg-gray-100"></div>
                      </div>

                      {/* The Sliding Bolt */}
                      <motion.div
                        initial={{ x: "-105%" }}
                        animate={{ x: ["-105%", "0%", "105%"] }} // Slide across
                        transition={{
                            duration: 4.5,
                            ease: "easeInOut",
                            times: [0, 0.4, 1], // Pause in the middle
                            repeat: Infinity,
                            delay: i * 0.8 // Stagger the animations
                        }}
                        className="relative z-10 w-2/3 h-14 bg-white border-y border-r border-gray-200 flex items-center justify-between px-6 shadow-md"
                        style={{
                            borderLeft: `4px solid ${accentColor}`
                        }}
                      >
                        <div className="flex flex-col">
                           <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Step 0{i+1}</span>
                           <span className="text-sm font-bold text-[#2E2A28]">{stage}</span>
                        </div>
                        
                        {/* Icon changes on the last one */}
                        {isLast ? (
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                              <Icons.Shield className="w-4 h-4" />
                            </div>
                        ) : (
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-[#70564b]">
                              <Icons.Cog className="w-4 h-4 animate-[spin_3s_linear_infinite]" />
                            </div>
                        )}
                      </motion.div>
                  </div>
                 )
               })}

               {/* Bottom Progress Bar */}
               <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-100">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-[#70564b] via-[#70564b] to-green-500"
                  ></motion.div>
               </div>
            </div>

            {/* Subtle Grid Overlay on the Graphic */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
          </div>

        </div>
      </section>

      {/* --- 2. CONTEXT: "The Horizontal Tape" (Preserved) --- */}
      <section id='logic' className="section-brand-bg text-white py-16 overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-8 relative">
          <div className="grid md:grid-cols-4 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="md:px-8">
              <h3 className="text-[#70564b] text-sm font-bold uppercase tracking-widest mb-2">Mandate</h3>
              <p className="text-2xl font-light">Federal Decree-Law No. 47</p>
            </div>
            <div className="md:px-8">
              <h3 className="text-[#70564b] text-sm font-bold uppercase tracking-widest mb-2">Rate</h3>
              <p className="text-2xl font-light">9% on Income &gt; AED 375k</p>
            </div>
            <div className="md:px-8">
              <h3 className="text-[#70564b] text-sm font-bold uppercase tracking-widest mb-2">Deadline</h3>
              <p className="text-2xl font-light">9 Months from FY End</p>
            </div>
            <div className="md:px-8">
              <h3 className="text-[#70564b] text-sm font-bold uppercase tracking-widest mb-2">Action</h3>
              <p className="text-2xl font-light">Mandatory Registration</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. FEATURES: "The Sticky Lens" (Preserved) --- */}
      <section ref={containerRef} className="bg-white relative">
        {features.map((feature, i) => (
          <div key={feature.id} className="min-h-screen flex flex-col lg:flex-row sticky top-0 bg-white border-b border-gray-100">
            
            {/* Left: Text Content */}
            <div className="lg:w-1/2 flex flex-col justify-center px-12 lg:px-24 py-20 order-2 lg:order-1">
              <div className="mb-6">
                <span className="text-[#70564b] font-mono text-xl font-bold">0{feature.id}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-6">
                {feature.title}
              </h2>
              <h3 className="text-xl font-bold text-[#70564b] mb-8 uppercase tracking-widest text-sm">
                {feature.subtitle}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-lg mb-12">
                {feature.desc}
              </p>
              
              <div className="h-[2px] w-full bg-gray-100">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  transition={{ duration: 1 }}
                  className="h-full bg-[#70564b]"
                />
              </div>
            </div>

            {/* Right: Visual Canvas */}
            <div className="lg:w-1/2 h-[50vh] lg:h-screen bg-gray-50 relative overflow-hidden order-1 lg:order-2">
              <div className="absolute inset-0 p-12 lg:p-24 flex items-center justify-center">
                <div className="relative w-full h-full max-h-[600px] overflow-hidden shadow-2xl">
                  <motion.img 
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Decorative Overlay */}
                  <div className="absolute inset-0 bg-[#70564b]/10 mix-blend-multiply"></div>
                  
                  {/* UI Element Overlay */}
                  <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur px-8 py-6 border-t border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-100 text-[#70564b] rounded-none">
                        {i === 0 && <Icons.FileSpreadsheet className="w-6 h-6" />}
                        {i === 1 && <Icons.BrainCircuit className="w-6 h-6" />}
                        {i === 2 && <Icons.Shield className="w-6 h-6" />}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase">System Status</p>
                        <p className="text-sm font-bold text-[#2E2A28]">{feature.subtitle} Active</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* --- 4. WHY US: "The Grid System" (Preserved) --- */}
      <section className="py-32 px-8 lg:px-24 bg-[#fdfbf9]">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-4 text-xs">
              Why Glimmora?
            </h2>
            <h3 className="text-4xl font-bold text-[#2E2A28]">
              The Certainty of Automation.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {[
              { title: "Risk Mitigation", desc: "Reduce the risk of audit penalties with traceable, log-backed calculations." },
              { title: "Time Efficiency", desc: "Cut tax preparation time by 70% compared to manual spreadsheet methods." },
              { title: "Strategic Insight", desc: "Don't just file taxes. Understand your liability trends and optimize cash flow." }
            ].map((card, i) => (
              <div key={i} className="bg-white p-12 hover:bg-[#5f4940] hover:text-white transition-all duration-500 group border border-gray-100">
                <div className="w-12 h-12 border border-gray-200 group-hover:border-white/20 flex items-center justify-center mb-8 text-[#70564b] group-hover:text-white transition-colors">
                  <span className="font-mono text-lg">0{i+1}</span>
                </div>
                <h4 className="text-xl font-bold mb-4">{card.title}</h4>
                <p className="text-gray-500 group-hover:text-white/80 leading-relaxed transition-colors">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. CTA: "The Editorial Finish" (Preserved) --- */}
      <section className="py-32 bg-white px-8 lg:px-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] tracking-tighter mb-12">
            Be <span className="text-[#70564b]">Audit</span> Ready.
          </h2>
          <div className="flex flex-col items-center gap-8">
            <p className="text-sm text-gray-500">
              The filing window is open. Ensure your compliance today.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-12 py-5 bg-[#2E2A28] text-white font-bold text-sm uppercase tracking-[0.2em] hover:bg-[#5f4940] transition-colors rounded-none"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TaxAutomation;