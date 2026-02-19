import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Glimmora = () => {
  return (
    <div className="bg-white font-sans text-[#2E2A28] selection:bg-[#70564b] selection:text-white">
      
      {/* 1. HERO SECTION: The Intelligent OS Layer */}
      <section className="relative pt-32 lg:pt-12 pb-24 px-6 lg:px-12 border-b border-gray-100 overflow-hidden bg-[#fafafa]">
        
        {/* Background Subtle Gradient (Light & Warm) */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#F5F3F1] to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4 opacity-60"></div>

        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Strategic Messaging */}
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[2px] bg-[#70564b]"></div>
              <span className="text-[#70564b] font-bold uppercase tracking-widest text-xs">
                Hospitality Intelligence
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-[#70564b] leading-[0.9] tracking-tighter mb-8"
            >
              Glimmora Hospitality.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-500 font-light leading-relaxed max-w-lg mb-10 border-l-4 border-[#70564b] pl-6"
            >
              The AI-driven operating system designed to optimize revenue, operations, and guest experiences using predictive modeling and real-time data fusion.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-[#70564b] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#5f4940] transition-all shadow-lg rounded-sm">
                 <Link to="/contact" >Request a Demo</Link>
              </button>
              <a href="#capabilities" className="px-8 py-4 bg-white border border-gray-200 text-[#2E2A28] font-bold text-xs uppercase tracking-widest hover:border-[#70564b] hover:text-[#70564b] transition-all rounded-sm">
                Explore Capabilities
              </a>
            </motion.div>
          </div>

          {/* Right: "Floating Command Center" Visual */}
          <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center">
              
             {/* 1. Main Dashboard Card (Back Layer) */}
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="absolute w-[500px] h-[320px] bg-white rounded-xl shadow-[0_40px_80px_-20px_rgba(112,86,75,0.15)] border border-gray-100 p-6 z-10"
             >
                {/* Mock UI Header */}
                <div className="flex items-center justify-between mb-6 border-b border-gray-50 pb-4">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                   </div>
                   <div className="text-xs uppercase font-bold text-[#70564b] tracking-widest">Portfolio Overview</div>
                </div>
                {/* Mock Data Lines */}
                <div className="space-y-4">
                   <div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
                   <div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
                   <div className="h-32 w-full bg-gradient-to-t from-[#F5F3F1] to-transparent rounded-lg border border-[#70564b]/10 relative mt-4">
                      {/* Abstract Chart Line */}
                      <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none">
                         <path d="M0,100 C100,80 200,120 300,60 S400,20 500,10" fill="none" stroke="#70564b" strokeWidth="2" />
                      </svg>
                   </div>
                </div>
             </motion.div>

             {/* 2. Floating "Prediction" Card (Top Right) */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-20 right-10 w-48 bg-white p-5 rounded-lg shadow-2xl border-l-4 border-[#70564b] z-20"
             >
                <div className="text-xs text-gray-400 font-bold uppercase mb-2">Occupancy Forecast</div>
                <div className="text-3xl font-bold text-[#70564b]">98.4%</div>
                <div className="text-xs text-green-600 mt-1 font-bold">▲ ML Confidence: High</div>
             </motion.div>

             {/* 3. Floating "Revenue" Card (Bottom Left) */}
             <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-32 left-0 w-56 bg-white p-5 rounded-lg shadow-2xl border-l-4 border-[#70564b] z-20"
             >
                <div className="text-xs text-gray-400 font-bold uppercase mb-2">Dynamic Pricing</div>
                <div className="flex items-end gap-2">
                   <div className="text-xl font-bold text-[#2E2A28]">$420</div>
                   <div className="text-xs text-[#70564b] font-bold mb-1">Optimized</div>
                </div>
                <div className="w-full h-1 bg-gray-100 mt-3 rounded-full overflow-hidden">
                   <div className="w-[85%] h-full bg-[#70564b]"></div>
                </div>
             </motion.div>

             {/* 4. Abstract Connection Lines */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
                <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#70564b" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="50%" y1="50%" x2="20%" y2="70%" stroke="#70564b" strokeWidth="1" strokeDasharray="5,5" />
             </svg>

          </div>
        </div>
      </section>

      {/* 2. WHAT GLIMMORA IS */}
      <section className="py-24 px-6 lg:px-12 max-w-[1000px] mx-auto text-center">
        <h2 className="text-[#70564b] font-bold text-xs uppercase tracking-[0.3em] mb-6">The Platform</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-[#2E2A28] mb-8 leading-tight">
          Moving from Reactive Management to <br/> Predictive Intelligence.
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed font-light">
          Modern hospitality is burdened by fragmented data and retroactive reporting. 
          Glimmora unifies these disparate streams into a single decision-making engine, 
          enabling operators to anticipate market shifts using Machine Learning algorithms.
        </p>
      </section>

      {/* 3. CORE CAPABILITIES */}
      <section id="capabilities" className="py-24 section-brand-bg text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-[#70564b] font-bold text-xs uppercase tracking-[0.3em] mb-4">Capabilities</h2>
            <h3 className="text-4xl font-bold">Engineered for the Enterprise.</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Predictive Operations",
                desc: "Uses ML-based forecasting to align staffing and inventory with real-time demand. Reduce operational waste while ensuring property readiness."
              },
              {
                title: "Revenue Intelligence",
                desc: "Move beyond static yield. Optimize pricing strategies dynamically using algorithmic modeling based on total guest value and velocity."
              },
              {
                title: "Guest Optimization",
                desc: "Anticipate guest needs before arrival. Utilizes predictive analytics to personalize interactions at scale across the entire property portfolio."
              },
              {
                title: "Digital Twins",
                desc: "Simulate decisions before execution. Run 'what-if' scenarios for renovations or operational changes using data-driven simulation models."
              }
            ].map((cap, i) => (
              <div key={i} className="group border-t border-[#70564b]/30 pt-8 hover:border-[#70564b] transition-colors duration-500">
                <span className="block text-[#70564b] font-mono text-xs mb-4">0{i+1}</span>
                <h4 className="text-xl font-bold mb-4">{cap.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed font-light border-l border-white/10 pl-4 group-hover:border-[#70564b] transition-colors">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY IT MATTERS */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto bg-[#fafafa]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[#70564b] font-bold text-3xl md:text-4xl mb-6">Unified Consistency at Scale.</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              For multi-property groups, the challenge is not just excellence, but consistent excellence. 
              Glimmora provides a centralized nervous system, ensuring strategic alignment from headquarters 
              down to individual property operations.
            </p>
            <ul className="space-y-4">
              {["Standardized decision frameworks", "Real-time portfolio visibility", "Automated compliance monitoring"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-[#2E2A28] uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 bg-[#70564b] rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-10 border border-gray-100 shadow-xl rounded-xl">
            <h4 className="text-sm font-bold text-[#70564b] uppercase tracking-widest mb-6">Ideal for</h4>
            <div className="grid grid-cols-1 gap-6">
              {[
                { label: "Global Hotel Chains", sub: "Standardize operations across borders." },
                { label: "Asset Management Firms", sub: "Maximize ROI on property portfolios." },
                { label: "Regional Hospitality Groups", sub: "Scale efficiently without overhead." }
              ].map((target, i) => (
                <div key={i} className="flex items-start gap-4 pb-4 border-b border-gray-50 last:border-0">
                  <div className="text-[#70564b] font-mono text-lg font-bold">/</div>
                  <div>
                    <p className="font-bold text-[#2E2A28]">{target.label}</p>
                    <p className="text-xs text-gray-400 mt-1">{target.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. BAAREZ ADVANTAGE */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 border border-[#70564b] text-[#70564b] text-xs font-bold uppercase tracking-widest mb-8">
            The Glimmora Advantage
          </div>
          <h2 className="text-4xl font-bold text-[#70564b] mb-8">Intelligent Architecture. Built for Complexity.</h2>
          <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed mb-12">
            Unlike legacy hospitality systems retrofitted with AI features, Glimmora is built on a modern data infrastructure. 
            It is engineered to handle the complexity, security, and scale required by modern enterprise 
            hospitality groups.
          </p>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-20 bg-[#fdfdfd] border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-[#2E2A28] font-bold mb-6">Ready to transform your operations?</h2>
          <p className="text-gray-500 mb-10 font-light text-sm">
            Discover how Glimmora can function as the central operating system for your portfolio.
          </p>
          <button className="px-12 py-5 bg-[#70564b] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#5f4940] transition-all shadow-xl rounded-sm">
            <Link to="/contact" >Request Glimmora Demo</Link>
          </button>
        </div>
      </section>

    </div>
  );
};

export default Glimmora;