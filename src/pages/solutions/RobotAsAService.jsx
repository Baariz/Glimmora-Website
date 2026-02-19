import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* =========================================
   1. Icons (Sharp, Technical, Minimal)
   ========================================= */
const Icons = {
  Cloud: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  Server: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="2" y="2" width="20" height="8" />
      <rect x="2" y="14" width="20" height="8" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  Zap: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Check: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Arrow: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Microsoft: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="1" y="1" width="10" height="10" />
      <rect x="13" y="1" width="10" height="10" />
      <rect x="1" y="13" width="10" height="10" />
      <rect x="13" y="13" width="10" height="10" />
    </svg>
  )
};

/* =========================================
   2. Animation Variants (Subtle & Professional)
   ========================================= */
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

/* =========================================
   3. Main Component
   ========================================= */

const RobotAsAService = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2E2A28] selection:bg-[#70564b] selection:text-white overflow-x-hidden">
      
      {/* --- 1. HERO: Compact & Sharp --- */}
      <section className="pt-28 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid lg:grid-cols-12 gap-0 border-t border-l border-r border-gray-200"
        >
          
          {/* A. Text Area (Col 7) */}
          <div className="lg:col-span-7 p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 bg-white relative flex flex-col justify-center">
            <div className="inline-block px-3 py-1 border border-[#70564b] text-[#70564b] text-xs font-bold uppercase tracking-widest mb-6 w-fit">
              RaaS Model
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] mb-6 text-[#2E2A28]">
              Automation <br/>
              Without the <span className="text-[#70564b]">Overhead.</span>
            </h1>
            
            <p className="text-sm text-gray-500 max-w-md leading-relaxed mb-8">
              Hire digital workers on demand. We provide the infrastructure, licenses, and maintenance. You simply get the results.
            </p>

            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-[#70564b] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#5f4940] transition-colors shadow-sm rounded-none"
              >
                Get a Quote
              </Link>
              < a
                href="#how-it-works" 
                className="px-8 py-4 bg-white border border-gray-300 text-[#2E2A28] font-bold text-xs uppercase tracking-widest hover:border-[#70564b] hover:text-[#70564b] transition-colors rounded-none"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* B. Image Area (Col 5) */}
          <div className="lg:col-span-5 relative h-[400px] lg:h-auto border-b border-gray-200 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
              alt="Team collaborating on automation" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-[#70564b]/10 mix-blend-multiply"></div>
            
            {/* Floating Stat */}
            <div className="absolute bottom-0 left-0 bg-white p-6 border-t border-r border-gray-200">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">ROI Speed</p>
              <p className="text-2xl font-bold text-[#70564b]">3 Months</p>
            </div>
          </div>

        </motion.div>
      </section>

      {/* --- 2. DEFINITION: "The Clean Equation" --- */}
      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-4">
                What is <span className="text-[#70564b]">RaaS?</span>
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Robot-as-a-Service (RaaS) is a cloud-based delivery model for automation. Instead of buying software licenses and setting up servers, you lease the capabilities of a digital workforce.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Think of it like hiring a contractor. You don't buy their tools or pay for their training. You pay for the job to be done.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between text-center divide-x divide-gray-100">
                <div className="px-4 flex-1">
                  <Icons.Cloud className="w-8 h-8 mx-auto text-[#70564b] mb-3" />
                  <h3 className="font-bold text-sm uppercase tracking-wide">Cloud Hosted</h3>
                </div>
                <div className="px-4 flex-1">
                  <Icons.Zap className="w-8 h-8 mx-auto text-[#70564b] mb-3" />
                  <h3 className="font-bold text-sm uppercase tracking-wide">Pay-as-you-Go</h3>
                </div>
                <div className="px-4 flex-1">
                  <Icons.Server className="w-8 h-8 mx-auto text-[#2E2A28] mb-3" />
                  <h3 className="font-bold text-sm uppercase tracking-wide">Fully Managed</h3>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* --- 3. COMPARISON: "Compact Truth Table" --- */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-2 text-xs">
              The Old Way vs. The New Way
            </h2>
            <h3 className="text-3xl font-bold text-[#2E2A28]">
              Why Buy When You Can Subscribe?
            </h3>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="overflow-x-auto"
          >
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr>
                  <th className="p-4 border-b-2 border-gray-100 text-gray-400 font-medium w-1/3">Feature</th>
                  <th className="p-4 border-b-2 border-gray-200 text-gray-500 font-bold w-1/3 bg-gray-50">Traditional RPA</th>
                  <th className="p-4 border-b-2 border-[#70564b] text-[#70564b] font-bold w-1/3 bg-[#fff5f0]">Glimmora RaaS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feat: "Upfront Investment", old: "High (Licenses + Hardware)", new: "Zero" },
                  { feat: "Implementation Time", old: "3-6 Months", new: "2-4 Weeks" },
                  { feat: "Scalability", old: "Requires New Servers", new: "Instant / On-Demand" },
                  { feat: "Maintenance", old: "Internal IT Team", new: "Included 24/7" },
                  { feat: "ROI Timeline", old: "12-18 Months", new: "Immediate" }
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 border-b border-gray-100 font-medium text-[#2E2A28]">{row.feat}</td>
                    <td className="p-4 border-b border-gray-100 text-gray-500">{row.old}</td>
                    <td className="p-4 border-b border-gray-100 text-[#70564b] font-bold">{row.new}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

        </div>
      </section>

      {/* --- 4. TECHNOLOGY: "Compact Spotlight" --- */}
      <section className="py-20 bg-[#fdfbf9]">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <Icons.Microsoft className="w-5 h-5 text-[#2E2A28]" />
              <span className="font-bold text-[#2E2A28] text-sm uppercase tracking-wide">Power Automate</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-4">
              Enterprise Power. <br/>
              Zero Friction.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We build our RaaS solutions on Microsoft Power Automate. This ensures your bots are secure, compliant, and integrate natively with the tools you already use—Office 365, Teams, SharePoint, and Dynamics.
            </p>
            <ul className="space-y-3">
              {[
                "Bank-Grade Security",
                "Native Office 365 Integration",
                "Low-Code Scalability"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-[#70564b] text-white flex items-center justify-center rounded-none">
                    <Icons.Check className="w-3 h-3" />
                  </div>
                  <span className="font-bold text-[#2E2A28] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 relative h-[350px]"
          >
            <div className="absolute top-0 right-0 w-full h-full border border-[#70564b] translate-x-3 translate-y-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop" 
              alt="Microsoft Power Automate Integration"
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

        </div>
      </section>

      {/* --- 5. BENEFITS: "Compact Cards" --- */}
      <section id="how-it-works" className="py-20 bg-white px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12">
            <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-2 text-xs">
              Business Value
            </h2>
            <h3 className="text-3xl font-bold text-[#2E2A28]">
              Why Shift to RaaS?
            </h3>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "OpEx Efficiency", desc: "Shift costs from CapEx to OpEx. Predictable monthly billing." },
              { title: "Rapid Scale", desc: "Add 50 bots during peak season, scale down when demand drops." },
              { title: "No IT Burden", desc: "We manage infrastructure and bot health. IT stays focused on strategy." },
              { title: "Faster ROI", desc: "Start seeing returns in weeks, not years. No payback period." },
              { title: "24/7 Productivity", desc: "Digital workers don't sleep or make manual errors." },
              { title: "Process Agility", desc: "Adapt quickly to market changes. Modifying bots is faster than retraining." }
            ].map((card, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="p-8 border border-gray-100 bg-[#fdfbf9] hover:bg-white hover:shadow-lg hover:border-[#70564b]/30 transition-all duration-300"
              >
                <div className="text-[#70564b] font-bold text-sm mb-3">0{i+1}</div>
                <h4 className="text-xl font-bold text-[#2E2A28] mb-2">{card.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 6. WHO IS THIS FOR: "Clean Grid" --- */}
      <section className="py-20 section-brand-bg text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-10">Who Needs RaaS?</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { role: "Scaling SMEs", desc: "Growing fast but can't afford enterprise software licenses." },
              { role: "CFOs", desc: "Looking to reduce overheads and improve financial accuracy." },
              { role: "Operations", desc: "Drowning in repetitive manual data entry tasks." },
              { role: "IT Leaders", desc: "Need automation but lack developer resources." }
            ].map((item, i) => (
              <div key={i} className="p-6 border border-white/10 hover:border-[#70564b] transition-colors bg-white/5 backdrop-blur-sm">
                <h3 className="text-[#70564b] font-bold mb-2 text-sm uppercase tracking-wide">{item.role}</h3>
                <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. CTA: "Sharp Strip" --- */}
      <section className="py-24 bg-white px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2E2A28] mb-6">
            Stop Paying for Infrastructure. <br/>
            Start Paying for <span className="text-[#70564b]">Results.</span>
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Schedule a 30-minute discovery call to identify your first RaaS candidate process.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-[#2E2A28] text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#5f4940] transition-colors rounded-none"
          >
            Book Discovery Call
          </Link>
        </div>
      </section>

    </div>
  );
};

export default RobotAsAService;