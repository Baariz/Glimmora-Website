import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* =========================================
   1. Icons (Sharp, Enterprise Style)
   ========================================= */
const Icons = {
  Finance: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M12 2v20M2 12h20" />
      <rect x="2" y="2" width="20" height="20" />
      <path d="M16 16l-4-4-4 4" />
    </svg>
  ),
  Sales: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M3 3v18h18" />
      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    </svg>
  ),
  Inventory: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  Project: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
      <path d="M9 9h1" />
    </svg>
  ),
  Microsoft: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="1" y="1" width="10" height="10" />
      <rect x="13" y="1" width="10" height="10" />
      <rect x="1" y="13" width="10" height="10" />
      <rect x="13" y="13" width="10" height="10" />
    </svg>
  ),
  Arrow: ({ className }) => (
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
  Factory: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M2 22h20V2l-5 5-5-5-5 5-5-5v20z" />
      <path d="M6 18h2" />
      <path d="M16 18h2" />
      <path d="M6 14h2" />
      <path d="M16 14h2" />
      <path d="M6 10h2" />
      <path d="M16 10h2" />
    </svg>
  )
};

/* =========================================
   2. Animation Variants
   ========================================= */
const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
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

const Dynamics365 = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2E2A28] selection:bg-[#70564b] selection:text-white overflow-x-hidden">
      
      {/* --- 1. HERO: Executive Split --- */}
      <section className="pt-28 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid lg:grid-cols-12 gap-0 border-t border-l border-r border-gray-200"
        >
          
          {/* Text Area */}
          <div className="lg:col-span-7 p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 bg-white flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#70564b] mb-6 w-fit">
              <span className="w-1.5 h-1.5 bg-[#70564b]"></span>
              <span className="text-[#70564b] text-xs font-bold uppercase tracking-widest">
                Microsoft Solutions Partner
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] mb-6 text-[#2E2A28]">
              Connect Operations. <br/>
              Accelerate <span className="text-[#70564b]">Growth.</span>
            </h1>
            
            <p className="text-sm text-gray-500 max-w-lg leading-relaxed mb-8">
              Microsoft Dynamics 365 Business Central is the all-in-one business management solution designed to break down silos and streamline your finance, sales, service, and operations.
            </p>

            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-[#70564b] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#5f4940] transition-colors shadow-sm rounded-none"
              >
                Schedule Consultation
              </Link>
              <a 
                href="#capabilities" 
                className="px-8 py-4 bg-white border border-gray-300 text-[#2E2A28] font-bold text-xs uppercase tracking-widest hover:border-[#70564b] hover:text-[#70564b] transition-colors rounded-none"
              >
                Explore Modules
              </a>
            </div>
          </div>

          {/* Image Area */}
          <div className="lg:col-span-5 relative h-[400px] lg:h-auto border-b border-gray-200 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
              alt="Dashboard Analytics" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
            />
            {/* Color Overlay (Maroon Tint) */}
            <div className="absolute inset-0 bg-[#70564b]/5 mix-blend-multiply"></div>
            
            {/* Overlay Card */}
            <div className="absolute bottom-0 left-0 bg-white p-6 border-t border-r border-gray-200">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Deployment</p>
              <p className="text-sm font-bold text-[#2E2A28]">Cloud or On-Premise</p>
            </div>
          </div>

        </motion.div>
      </section>

      {/* --- 2. DEFINITION: "The Unified View" --- */}
      <section className="py-20 bg-[#fdfbf9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-4">
                What is <span className="text-[#70564b]">Business Central?</span>
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Formerly known as Microsoft Dynamics NAV, Business Central is a comprehensive ERP solution that connects your teams and processes. It provides a single source of truth for your business data, enabling faster decisions and smarter workflows.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Whether you are outgrowing basic accounting software or replacing legacy ERPs, Business Central scales with you.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 border border-gray-200 shadow-sm">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-[#70564b] mb-2">160+</h3>
                  <p className="text-xs uppercase tracking-wide text-gray-500">Countries Served</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#70564b] mb-2">30k+</h3>
                  <p className="text-xs uppercase tracking-wide text-gray-500">Customers Globally</p>
                </div>
                <div className="col-span-2 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Icons.Microsoft className="w-5 h-5 text-[#2E2A28]" />
                    <span className="font-bold text-sm">Seamless Microsoft Integration</span>
                  </div>
                  <p className="text-xs text-gray-400">Works natively with Outlook, Excel, and Teams.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. CHALLENGES: "The Silo Problem" --- */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-2 text-xs">
              Why Migrate?
            </h2>
            <h3 className="text-3xl font-bold text-[#2E2A28]">
              The Cost of Disconnected Systems
            </h3>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { title: "Fragmented Data", desc: "Sales, inventory, and accounting sit in different apps, leading to reconciliation errors." },
              { title: "Manual Reporting", desc: "Teams waste hours merging spreadsheets to get a simple view of cash flow." },
              { title: "Inventory Blindspots", desc: "Overstocking or stockouts due to lack of real-time supply chain visibility." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="p-8 bg-[#fdfbf9] border border-gray-100 hover:border-[#70564b] transition-colors group"
              >
                <div className="w-8 h-8 bg-white border border-gray-200 group-hover:border-[#70564b] transition-colors mb-4 flex items-center justify-center text-[#70564b] font-bold text-xs rounded-none">
                  0{i+1}
                </div>
                <h4 className="text-xl font-bold text-[#2E2A28] mb-3">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 4. CORE CAPABILITIES: "The Functional Grid" --- */}
      <section id="capabilities" className="py-20 bg-white px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-6">
            <div>
              <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-2 text-xs">
                Functional Modules
              </h2>
              <h3 className="text-3xl font-bold text-[#2E2A28]">
                End-to-End Management
              </h3>
            </div>
            <div className="hidden md:block text-right">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">One Platform. Every Department.</span>
            </div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200"
          >
            {[
              { icon: Icons.Finance, title: "Financial Management", desc: "Accelerate financial close, manage cash flow, and ensure compliance with real-time general ledger data." },
              { icon: Icons.Sales, title: "Sales & Service", desc: "Manage the entire sales cycle from quote to cash. Improve service with contract and warranty management." },
              { icon: Icons.Inventory, title: "Supply Chain", desc: "Optimize inventory levels, predict replenishment, and maximize open bin space." },
              { icon: Icons.Project, title: "Project Management", desc: "Create, manage, and track customer projects using timesheets and advanced job costing." },
              { icon: Icons.Factory, title: "Manufacturing", desc: "Streamline manufacturing with production orders, bill of materials, and supply planning." },
              { icon: Icons.Arrow, title: "Operations", desc: "Automate purchasing, manage vendors, and streamline warehouse operations." },
            ].map((card, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-white p-8 hover:bg-[#faf9f6] transition-colors group relative"
              >
                <div className="w-10 h-10 mb-4 text-gray-400 group-hover:text-[#70564b] transition-colors">
                  <card.icon className="w-full h-full" />
                </div>
                <h4 className="text-xl font-bold text-[#2E2A28] mb-2">{card.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 5. ECOSYSTEM: "Productivity Unlocked" --- */}
      <section className="py-20 bg-[#fdfbf9]">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-6">
              Work Where You <br/> Already Work.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Business Central is embedded within the Microsoft 365 tools your team uses every day. There is no need to switch apps to approve an invoice or check inventory.
            </p>
            <ul className="space-y-4">
              {[
                { title: "Outlook Integration", text: "Create quotes and invoices directly from your email inbox." },
                { title: "Excel Connectivity", text: "Edit bulk data in Excel and publish changes back to the ERP instantly." },
                { title: "Teams Collaboration", text: "Share business records in Teams chats without leaving the conversation." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 border-l-2 border-gray-200 pl-4 hover:border-[#70564b] transition-colors">
                  <div>
                    <h4 className="font-bold text-[#2E2A28] text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="border border-gray-200 bg-white p-2 shadow-sm">
                <img 
                src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop" 
                alt="Outlook and ERP Integration"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
            {/* Decor */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#70564b]/10 -z-10"></div>
          </motion.div>

        </div>
      </section>

      {/* --- 6. WHY BAAREZ: "The Partner Advantage" --- */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-4 text-xs">
            Why Glimmora?
          </h2>
          <h3 className="text-3xl font-bold text-[#2E2A28] mb-12">
            Local Expertise. Global Standards.
          </h3>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 text-left"
          >
            {[
              { title: "Regional Compliance", desc: "We ensure your setup meets UAE VAT regulations and local reporting standards." },
              { title: "Process-First Approach", desc: "We don't just install software; we optimize your business processes before configuration." },
              { title: "End-to-End Support", desc: "From data migration and training to post-go-live support and upgrades." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="p-6 bg-gray-50 border border-gray-100 hover:border-[#70564b] transition-colors"
              >
                <div className="w-8 h-8 mb-4 bg-white border border-gray-200 flex items-center justify-center text-[#70564b] rounded-none">
                  <Icons.Check className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-[#2E2A28] mb-2">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 7. CTA: "Brand Color Background" (No Black) --- */}
      <section className="py-24 section-brand-bg px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Modernize Your Operations?
          </h2>
          <p className="text-sm text-white/80 mb-8">
            Speak with our ERP consultants to map out your migration to Business Central.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-white text-[#70564b] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#5f4940] hover:text-white transition-colors rounded-none"
          >
            Book Discovery Call
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Dynamics365;