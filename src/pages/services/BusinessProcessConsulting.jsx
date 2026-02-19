import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* =========================================
   1. Icons (Abstract, Strategic, Sharp)
   ========================================= */
const Icons = {
  Strategy: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Process: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="2" y="2" width="20" height="8" />
      <rect x="2" y="14" width="20" height="8" />
      <path d="M6 10v4" />
      <path d="M18 10v4" />
    </svg>
  ),
  Search: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <path d="M11 8v6" />
      <path d="M8 11h6" />
    </svg>
  ),
  Chart: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  Brain: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
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

const BusinessProcessConsulting = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2E2A28] selection:bg-[#70564b] selection:text-white overflow-x-hidden">
      
      {/* --- 1. HERO: "The Metric Columns" (Updated: Tighter Gap, No Dark Black BG) --- */}
      <section className="relative pt-10 pb-24 mt-20 lg:mt-30 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left: Strategic Typography */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 border-b border-[#70564b] pb-2"
            >
              <span className="text-[#70564b] font-bold uppercase tracking-[0.2em] text-xs">
                Process Excellence
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#2E2A28] leading-[1.05] tracking-tight mb-8"
            >
              Efficiency is <br/>
              <span className="text-[#70564b]">Engineered.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-500 leading-relaxed max-w-lg mb-10 font-light"
            >
              We restructure enterprise operations for the AI age. Glimmora International combines strategic consulting with data science to build processes that scale effortlessly.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link 
                to="/contact" 
                className="px-10 py-4 bg-[#70564b] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#5f4940] transition-colors rounded-none shadow-lg text-center"
              >
                Start Transformation
              </Link>
              <a
                href="#solutions" 
                className="px-10 py-4 bg-white border border-gray-300 text-[#2E2A28] font-bold text-xs uppercase tracking-widest hover:border-[#70564b] hover:text-[#70564b] transition-colors rounded-none text-center"
              >
                Our Framework
              </a>
            </motion.div>
          </div>

          {/* Right: The "Metric Columns" (Architectural Visuals) */}
          {/* Added padding left (pl-8) on large screens to create space after reducing the main gap */}
          <div className="h-[500px] flex gap-4 lg:pl-8">
            
            {/* Column 1: The Goal (Efficiency) */}
            <motion.div 
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
              className="flex-1 bg-[#fdfbf9] border border-gray-200 relative overflow-hidden flex flex-col justify-end p-6"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#70564b]"></div>
              <Icons.Chart className="w-8 h-8 text-[#70564b] mb-4" />
              <div className="text-3xl font-bold text-[#2E2A28] mb-1">+40%</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Speed</div>
            </motion.div>

            {/* Column 2: The Action (Image Slice) */}
            <motion.div 
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, ease: "circOut", delay: 0.4 }}
              className="flex-1 relative overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
                alt="Process Planning" 
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-[#70564b]/10 mix-blend-multiply"></div>
            </motion.div>

            {/* Column 3: The Result (Cost) - CHANGED BG FROM DARK BLACK TO MAROON */}
            <motion.div 
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, ease: "circOut", delay: 0.6 }}
              className="flex-1 bg-[#70564b] relative overflow-hidden flex flex-col justify-end p-6 text-white"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-white"></div>
              <Icons.Strategy className="w-8 h-8 text-white mb-4" />
              <div className="text-3xl font-bold mb-1">-25%</div>
              <div className="text-xs font-bold text-white/70 uppercase tracking-wider">Cost</div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* --- 2. CONTEXT: "The Modern Imperative" --- */}
      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-6">
                Why Modernize Now?
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Enterprises today are drowning in complexity. Rigid legacy processes, siloed data, and manual workarounds are not just operational annoyances—they are active barriers to growth and compliance.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                To scale effectively, organizations must shift from static workflows to dynamic, intelligence-driven operations.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              {[
                { title: "Legacy Rigidity", desc: "Old workflows cannot adapt to new market demands or regulatory changes." },
                { title: "Data Silos", desc: "Decision-makers lack a unified view of operational health." },
                { title: "Scaling Friction", desc: "Adding more people to broken processes only increases costs, not output." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 border-l-2 border-gray-200 pl-4 hover:border-[#70564b] transition-colors">
                  <div>
                    <h4 className="font-bold text-[#2E2A28] text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. FRAMEWORK: "The Integrated Model" --- */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-2 text-xs">
              The Glimmora Framework
            </h2>
            <h3 className="text-3xl font-bold text-[#2E2A28]">
              Holistic Process Transformation
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
            {[
              { title: "AI & Data Science", desc: "Predictive analytics to foresee bottlenecks before they happen." },
              { title: "ERP & CRM Alignment", desc: "Ensuring your core systems support, not hinder, your workflows." },
              { title: "Cloud Architecture", desc: "Scalable infrastructure that allows processes to run anywhere." },
              { title: "Intelligent Automation", desc: "Replacing low-value manual tasks with RPA and bots." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -4 }}
                className="bg-white p-8 group transition-all duration-300"
              >
                <div className="h-1 w-8 bg-gray-200 group-hover:bg-[#70564b] mb-6 transition-colors"></div>
                <h4 className="text-xl font-bold text-[#2E2A28] mb-3">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. SOLUTIONS: "The Service Matrix" --- */}
      <section id="solutions" className="py-20 bg-[#fdfbf9] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <div>
              <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-2 text-xs">
                Consulting Solutions
              </h2>
              <h3 className="text-3xl font-bold text-[#2E2A28]">
                How We Engage
              </h3>
            </div>
            <div className="hidden md:block text-right">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tailored for Enterprise</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Service 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-white border border-gray-200 p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold text-[#2E2A28]">Project Management as a Service (PMaaS)</h4>
                <Icons.Strategy className="w-6 h-6 text-[#70564b]" />
              </div>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                We provide on-demand project leadership and delivery assurance. Using AI-enabled monitoring, we ensure your strategic initiatives are delivered on time, within budget, and with measurable ROI.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-gray-500"><Icons.Check className="w-3 h-3 text-[#70564b]" /> Delivery Assurance</li>
                <li className="flex items-center gap-2 text-xs text-gray-500"><Icons.Check className="w-3 h-3 text-[#70564b]" /> Risk Mitigation</li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-white border border-gray-200 p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold text-[#2E2A28]">Business Process Re-engineering (BPR)</h4>
                <Icons.Process className="w-6 h-6 text-[#70564b]" />
              </div>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                We radically redesign legacy workflows for the digital age. Our BPR approach eliminates redundancy, optimizes resource allocation, and prepares your processes for automation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-gray-500"><Icons.Check className="w-3 h-3 text-[#70564b]" /> Workflow Optimization</li>
                <li className="flex items-center gap-2 text-xs text-gray-500"><Icons.Check className="w-3 h-3 text-[#70564b]" /> Cost Reduction</li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-white border border-gray-200 p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold text-[#2E2A28]">Process Assessments</h4>
                <Icons.Search className="w-6 h-6 text-[#70564b]" />
              </div>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                A deep-dive evaluation of your current operational maturity. We deliver a detailed roadmap identifying gaps, inefficiencies, and specific opportunities for technological intervention.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-gray-500"><Icons.Check className="w-3 h-3 text-[#70564b]" /> Maturity Scoring</li>
                <li className="flex items-center gap-2 text-xs text-gray-500"><Icons.Check className="w-3 h-3 text-[#70564b]" /> Roadmap Creation</li>
              </ul>
            </motion.div>

            {/* Service 4 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-white border border-gray-200 p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold text-[#2E2A28]">Solution Architecture</h4>
                <Icons.Brain className="w-6 h-6 text-[#70564b]" />
              </div>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                We design the technical foundation for your future operations. From cloud migration strategies to API integration patterns, we ensure your tech stack enables your business goals.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-gray-500"><Icons.Check className="w-3 h-3 text-[#70564b]" /> Tech Stack Modernization</li>
                <li className="flex items-center gap-2 text-xs text-gray-500"><Icons.Check className="w-3 h-3 text-[#70564b]" /> Integration Strategy</li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- 5. OUTCOMES: "The Value Delta" --- */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-6">
              Consulting That <br/> Delivers Numbers.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              We don't just deliver slide decks. We deliver measurable operational improvements. Our clients see tangible shifts in speed, cost, and agility.
            </p>
            
            <div className="space-y-6">
              {[
                { label: "Execution Speed", val: "40%", text: "Faster process cycle times." },
                { label: "Operational Cost", val: "25%", text: "Reduction in manual overhead." },
                { label: "Compliance", val: "100%", text: "Traceability for regulatory audits." }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="w-16 text-3xl font-bold text-[#70564b]">{stat.val}</div>
                  <div className="flex-1 border-b border-gray-100 pb-2">
                    <h5 className="font-bold text-[#2E2A28] text-sm">{stat.label}</h5>
                    <p className="text-xs text-gray-500">{stat.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[400px]">
            <div className="absolute top-0 right-0 w-full h-full border border-[#70564b] translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
              alt="Data Analysis"
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

        </div>
      </section>

      {/* --- 6. WHY BAAREZ: "The Trust Signal" --- */}
      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-6 text-xs">
            The Glimmora Difference
          </h2>
          <h3 className="text-3xl font-bold text-[#2E2A28] mb-8">
            Why Leaders Choose Us.
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-10">
            We bridge the gap between business strategy and technology implementation. We don't just recommend solutions; we architect the transformation and stay to ensure it delivers value.
          </p>
          <div className="flex justify-center gap-4">
             <div className="px-6 py-2 bg-white border border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wide">Business-First</div>
             <div className="px-6 py-2 bg-white border border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wide">AI-Driven</div>
             <div className="px-6 py-2 bg-white border border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wide">End-to-End</div>
          </div>
        </div>
      </section>

      {/* --- 7. CTA: "Sharp Strip" --- */}
      <section className="py-24 section-brand-bg px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-sm text-white/80 mb-8">
            Let's assess your current processes and build a roadmap for the future.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-white text-[#70564b] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#5f4940] hover:text-white transition-colors rounded-none"
          >
            Schedule Assessment
          </Link>
        </div>
      </section>

    </div>
  );
};

export default BusinessProcessConsulting;