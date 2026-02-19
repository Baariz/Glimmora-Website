import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* =========================================
   1. Icons (Technical, AI-Focused, Sharp)
   ========================================= */
const Icons = {
  Brain: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  ),
  Cpu: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="4" y="4" width="16" height="16" rx="0" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  Network: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="19" r="3" />
      <circle cx="19" cy="19" r="3" />
      <line x1="7.5" y1="17.5" x2="10" y2="7.5" />
      <line x1="16.5" y1="17.5" x2="14" y2="7.5" />
    </svg>
  ),
  ShieldCheck: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  Code: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Layers: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  Arrow: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Search: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Industry: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4 8 4v14" />
      <path d="M13 7v14" />
    </svg>
  )
};

/* =========================================
   2. Animation Variants
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
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

/* =========================================
   3. Main Component
   ========================================= */

const DigitalTransformation = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2E2A28] selection:bg-[#70564b] selection:text-white overflow-x-hidden">
      
      {/* --- 1. HERO: "The Neural Stack" --- */}
      <section className="relative pt-32 pb-24 lg:pt-40 px-6 lg:px-12 max-w-[1800px] mx-auto border-b border-gray-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Strategic Copy */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 border border-[#70564b] px-3 py-1 bg-white"
            >
              <span className="w-1.5 h-1.5 bg-[#70564b]"></span>
              <span className="text-[#70564b] font-mono text-[13px] font-bold uppercase tracking-widest">
                AI Transformation Services
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#2E2A28] leading-[1.05] tracking-tight mb-8"
            >
              Future-Proof <br/>
              Via <span className="text-[#70564b]">Intelligence.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-500 leading-relaxed max-w-lg mb-10 font-light"
            >
              We help enterprises move beyond the hype. Glimmora International builds, governs, and scales AI systems that drive measurable operational efficiency and innovation.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link 
                to="/contact" 
                className="px-10 py-4 bg-[#70564b] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#5f4940] transition-colors rounded-none text-center shadow-lg"
              >
                Schedule Strategy Call
              </Link>
              <a
                href="#readiness" 
                className="px-10 py-4 bg-white border border-gray-300 text-[#2E2A28] font-bold text-xs uppercase tracking-widest hover:border-[#70564b] hover:text-[#70564b] transition-colors rounded-none text-center"
              >
                View Assessment
              </a>
            </motion.div>
          </div>

          {/* Right: "The Neural Stack" Visual */}
          <div className="h-[500px] flex items-center justify-center relative">
            <div className="relative w-full max-w-sm">
                {/* Layer 3: Experience (Top) */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mb-4 p-6 bg-white border border-gray-200 shadow-sm relative z-30"
                >
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-[#70564b] uppercase tracking-wider">Experience Layer</span>
                        <Icons.Brain className="w-5 h-5 text-[#70564b]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2E2A28]">Intelligent Apps</h3>
                    <p className="text-xs text-gray-400 mt-1">Generative Interfaces • Predictive UX</p>
                </motion.div>

                {/* Connecting Lines */}
                <div className="h-8 w-[1px] bg-gray-200 mx-auto my-[-16px] relative z-0"></div>

                {/* Layer 2: Logic (Middle) */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mb-4 p-6 bg-[#fbf9f8] border border-gray-200 relative z-20"
                >
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-[#70564b] uppercase tracking-wider">Model Layer</span>
                        <Icons.Cpu className="w-5 h-5 text-[#70564b]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2E2A28]">Custom Models</h3>
                    <p className="text-xs text-gray-400 mt-1">Fine-Tuning • RAG • LLMs</p>
                </motion.div>

                {/* Connecting Lines */}
                <div className="h-8 w-[1px] bg-gray-200 mx-auto my-[-16px] relative z-0"></div>

                {/* Layer 1: Data (Bottom) */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="p-6 bg-white border border-gray-200 relative z-10"
                >
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Foundation Layer</span>
                        <Icons.Layers className="w-5 h-5 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2E2A28]">Data Infrastructure</h3>
                    <p className="text-xs text-gray-400 mt-1">Pipelines • Cloud • Governance</p>
                </motion.div>
            </div>
            
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>
          </div>

        </div>
      </section>

      {/* --- 2. PHILOSOPHY: "The Advisory Block" --- */}
      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-6">
                Applied AI. <br/> Not Just Theory.
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                AI transformation isn't about deploying a chatbot. It's about fundamentally rethinking how your organization operates. We focus on building "Intelligent Digital Experiences"—systems that learn, adapt, and predict.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Our approach prioritizes security, compliance, and scalability, ensuring your AI initiatives deliver long-term value, not just short-term proof of concepts.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 border border-gray-200">
              <ul className="space-y-4">
                {[
                  "Operational Efficiency",
                  "Secure & Compliant Deployment",
                  "Scalable Infrastructure",
                  "Human-Centric Innovation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-1 h-1 bg-[#70564b]"></div>
                    <span className="text-sm font-bold text-[#2E2A28] uppercase tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. READINESS: "The Timeline" --- */}
      <section id="readiness" className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-2 text-xs">
              Where to Start
            </h2>
            <h3 className="text-3xl font-bold text-[#2E2A28]">
              The AI Readiness Assessment
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Icons.Search, title: "Discovery", desc: "Mapping your data ecosystem and identifying high-value use cases." },
              { icon: Icons.ShieldCheck, title: "Risk Analysis", desc: "Evaluating compliance gaps, data privacy, and security risks." },
              { icon: Icons.Cpu, title: "Gap Analysis", desc: "Assessing infrastructure and skills required for execution." },
              { icon: Icons.Network, title: "Roadmap", desc: "A phased execution plan with clear ROI milestones." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="w-12 h-12 bg-gray-50 border border-gray-200 flex items-center justify-center text-[#70564b] mb-6 group-hover:border-[#70564b] transition-colors">
                  <step.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#2E2A28] mb-3">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                {i !== 3 && (
                  <div className="hidden md:block absolute top-6 left-16 w-[calc(100%-3rem)] h-[1px] bg-gray-100"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. CORE SERVICES: "The High-Density Grid" --- */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 border-b border-gray-100 pb-6">
            <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-2 text-xs">
              Capabilities
            </h2>
            <h3 className="text-3xl font-bold text-[#2E2A28]">
              Enterprise AI Services
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {[
              { title: "AI-Powered Engineering", desc: "Accelerate delivery with intelligent code generation, automated testing, and adaptive UI/UX." },
              { title: "Infrastructure Modernization", desc: "Prepare your cloud and edge environments for high-performance AI workloads and data pipelines." },
              { title: "Model Fine-Tuning", desc: "Adapt foundation models (LLMs) to your specific industry jargon and proprietary data." },
              { title: "Process Automation", desc: "Deploy self-learning agents that handle complex workflows involving vision, speech, and text." },
              { title: "Cross-Platform Deployment", desc: "Integrate AI seamlessly into your legacy ERPs, mobile apps, and web platforms." },
              { title: "Governance & MLOps", desc: "Ensure responsible AI with bias mitigation, drift monitoring, and lifecycle management." },
            ].map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -4 }}
                className="bg-white p-10 group transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-gray-300">0{i+1}</span>
                  <div className="h-[1px] flex-1 bg-gray-100"></div>
                </div>
                <h4 className="text-xl font-bold text-[#2E2A28] mb-3">{card.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. SOLUTIONS: "Active Tech Badges" (New) --- */}
      <section className="py-20 bg-[#fdfbf9] border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-4 text-xs">
              Custom Solutions
            </h2>
            <h3 className="text-3xl font-bold text-[#2E2A28]">
              Building Blocks of Intelligence
            </h3>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              "Generative AI", 
              "NLP & Sentiment Analysis", 
              "RAG Solutions", 
              "Computer Vision", 
              "Edge AI", 
              "Predictive Analytics", 
              "AI Chatbots & Agents", 
              "Emotion AI", 
              "Knowledge Graphs"
            ].map((tag, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="group relative px-6 py-3 bg-white border border-gray-200 hover:border-[#70564b] transition-all duration-300 cursor-default flex items-center gap-3 overflow-hidden"
              >
                {/* Active Dot Indicator */}
                <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#70564b] group-hover:shadow-[0_0_8px_rgba(112,86,75,0.6)] transition-all duration-300"></span>
                
                <span className="text-sm font-bold text-gray-600 group-hover:text-[#2E2A28] transition-colors">
                  {tag}
                </span>

                {/* Subtle sheen effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 6. INDUSTRIES: "Sector Grid" (Expanded & Modern) --- */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-2 text-xs">
                Sectors
              </h2>
              <h3 className="text-3xl font-bold text-[#2E2A28]">
                Transforming Industries
              </h3>
            </div>
            <div className="hidden md:block">
              <Link to="/contact" className="text-sm font-bold text-[#70564b] hover:text-[#70564b] transition-colors flex items-center gap-2">
                Explore Use Cases <Icons.Arrow className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
             {[
               "Healthcare", "Manufacturing", "BFSI", "Retail & E-commerce",
               "Logistics", "Energy & Utilities", "Public Sector", "Education"
             ].map((ind, i) => (
               <motion.div 
                 key={i} 
                 variants={fadeInUp}
                 className="p-8 bg-[#faf9f6] border border-transparent hover:border-[#70564b] hover:bg-white hover:shadow-lg transition-all duration-300 group flex flex-col justify-between h-40"
               >
                 <div className="flex justify-between items-start">
                   <Icons.Industry className="w-6 h-6 text-gray-300 group-hover:text-[#70564b] transition-colors" />
                   <Icons.Arrow className="w-4 h-4 text-transparent group-hover:text-[#70564b] -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                 </div>
                 
                 <div>
                   <h4 className="font-bold text-[#2E2A28] text-sm group-hover:text-[#70564b] transition-colors">
                     {ind}
                   </h4>
                   <div className="w-0 group-hover:w-8 h-[2px] bg-[#70564b] mt-2 transition-all duration-500"></div>
                 </div>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* --- 7. GOVERNANCE: "The Trust Box" --- */}
      <section className="py-20 bg-[#fdfbf9] border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <div className="inline-block p-4 border border-gray-200 bg-white mb-8">
            <Icons.ShieldCheck className="w-8 h-8 text-[#70564b]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-6">
            Innovation Without Risk.
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            We prioritize **Responsible AI**. Our frameworks ensure your models are explainable, unbiased, and compliant with global regulations (GDPR, HIPAA, EU AI Act). We build guardrails, not just algorithms.
          </p>
        </div>
      </section>

      {/* --- 8. CTA: "Sharp Strip" --- */}
      <section className="py-24 section-brand-bg px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-sm text-white/80 mb-8">
            Let's discuss how AI can solve your specific business challenges.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-white text-[#70564b] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#5f4940] hover:text-white transition-colors rounded-none"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default DigitalTransformation;