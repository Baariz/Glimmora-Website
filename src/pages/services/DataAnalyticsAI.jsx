import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

/* =========================================
   1. Icons
   ========================================= */
const Icons = {
  Database: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <ellipse cx="12" cy="5" rx="9" ry="3" />
    </svg>
  ),
  Brain: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 16v-4M12 8V4" />
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 1 9 9" />
    </svg>
  ),
  TrendingUp: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  Shield: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Cpu: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="4" y="4" width="16" height="16" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  ),
  Arrow: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Check: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Plus: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  Minus: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
};

/* =========================================
   2. Animations
   ========================================= */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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

const DataAnalyticsAI = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    // NOTE: Removed 'overflow-x-hidden' from main div to ensure sticky works correctly
    <div className="min-h-screen bg-white font-sans text-[#2E2A28] selection:bg-[#70564b] selection:text-white">
      
      {/* --- 1. HERO: "The Intelligent Lens" --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-[1800px] mx-auto border-b border-gray-100">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Manifesto */}
          <div className="lg:col-span-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-gray-200 bg-[#faf9f6]"
            >
              <div className="w-2 h-2 bg-[#70564b] rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-[#2E2A28] uppercase tracking-widest">
                Data Ecosystem
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#2E2A28] leading-[1.05] tracking-tight mb-8"
            >
              Data is <br/>
              <span className="text-[#70564b]">Potential Energy.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-500 leading-relaxed max-w-lg mb-10 font-light"
            >
              Raw data is just storage cost. We build the intelligence layer that transforms your fragmented data into predictive power and automated revenue.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                to="/contact" 
                className="px-10 py-4 bg-[#70564b] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#5f4940] transition-colors rounded-none shadow-xl"
              >
                Start Transformation
              </Link>
              <a
                href="#services" 
                className="px-10 py-4 bg-white border border-gray-200 text-[#2E2A28] font-bold text-xs uppercase tracking-widest hover:border-[#70564b] hover:text-[#70564b] transition-colors rounded-none"
              >
                View Services
              </a>
            </motion.div>
          </div>

          {/* Right: "The Insight Grid" */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Raw Data", value: "Revenue +30%", sub: "Predictive Sales", color: "bg-[#70564b]", icon: Icons.TrendingUp },
                { label: "Silos", value: "Unified View", sub: "Data Lakehouse", color: "bg-[#70564b]", icon: Icons.Database },
                { label: "Latency", value: "Real-Time", sub: "Decision Engine", color: "bg-[#2E2A28]", icon: Icons.Cpu },
                { label: "Risk", value: "Secure", sub: "Gov & Compliance", color: "bg-gray-500", icon: Icons.Shield }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="relative h-48 group cursor-default overflow-hidden border border-gray-100 bg-[#faf9f6]"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-300 group-hover:opacity-0">
                    <div className="text-4xl text-gray-200 font-mono mb-2">0{i+1}</div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{card.label}</div>
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>

                  <div className={`absolute inset-0 ${card.color} flex flex-col items-center justify-center p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out`}>
                    <card.icon className="w-8 h-8 mb-4 opacity-90" />
                    <div className="text-2xl font-bold mb-1">{card.value}</div>
                    <div className="text-xs font-medium opacity-75 uppercase tracking-wide">{card.sub}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="absolute -z-10 top-[-20px] right-[-20px] w-full h-full border border-gray-100"></div>
          </div>

        </div>
      </section>

      {/* --- 2. THE LANDSCAPE: "Clean Metrics" --- */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-4 text-xs">
                The New Standard
              </h2>
              <h3 className="text-3xl font-bold text-[#2E2A28] mb-6 leading-tight">
                Post-Pandemic Reality: <br/> Speed is Survival.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Cloud, Big Data, and AI are not separate tools; they are the nervous system of modern enterprise. Organizations relying on reactive reporting are operating in the past.
              </p>
              <div className="flex gap-4">
                <div className="h-full w-1 bg-[#70564b]"></div>
                <p className="text-sm text-gray-500 italic">
                  "Glimmora moves you from fragmented silos to a unified intelligence ecosystem."
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-px bg-gray-100 border border-gray-100">
              {[
                { val: "55%", label: "Data Dark", text: "Enterprise data unused" },
                { val: "3x", label: "ROI", text: "On AI-driven workflows" },
                { val: "24/7", label: "Operations", text: "Automated monitoring" },
                { val: "100%", label: "Security", text: "Governance & Compliance" }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 hover:bg-[#faf9f6] transition-colors">
                  <div className="text-3xl font-bold text-[#2E2A28] mb-2">{stat.val}</div>
                  <div className="text-xs font-bold text-[#70564b] uppercase mb-2">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. CHALLENGES: "The Accordion List" --- */}
      <section className="py-24 bg-[#faf9f6]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-2 text-xs">
              Adoption Barriers
            </h2>
            <h3 className="text-3xl font-bold text-[#2E2A28]">
              Why AI Initiatives Stall
            </h3>
          </div>

          <div className="space-y-4">
            {[
              { title: "Data Silos & Quality", desc: "AI is only as good as the data it learns from. We unify fragmented ERPs and CRMs into a single source of truth." },
              { title: "Security & Governance", desc: "Fears of leakage prevent cloud adoption. We build compliant, encrypted environments (GDPR, HIPAA, SOC 2)." },
              { title: "Legacy Infrastructure", desc: "Traditional servers can't handle AI compute. We modernize your stack with cloud-native, GPU-enabled architectures." },
              { title: "Talent Gap", desc: "Lack of internal data scientists. We provide the experts and the framework to bridge the skills gap." },
              { title: "Continuous Operations", desc: "Models drift over time. Our MLOps ensure your AI stays accurate and effective post-deployment." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group bg-white border border-gray-200 p-6 hover:border-[#70564b] transition-colors flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#faf9f6] text-[#70564b] font-bold font-mono text-lg shrink-0 group-hover:bg-[#70564b] group-hover:text-white transition-colors">
                  0{i+1}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2E2A28] mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. SERVICES: "Sticky Scroll" (FIXED) --- */}
      <section id="services" className="py-32 bg-white px-6">
        {/* Changed from Flex to Grid to ensure sticky rail height works */}
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-20">
          
          {/* Sticky Left Sidebar (Spans 4 cols) */}
          <div className="lg:col-span-4 h-full">
            <div className="sticky top-32">
              <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-4 text-xs">
                Our Capabilities
              </h2>
              <h3 className="text-4xl font-bold text-[#2E2A28] mb-8">
                End-to-End <br/> Transformation.
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                From laying the data foundation to deploying autonomous agents, we handle every stage of the intelligence lifecycle.
              </p>
              <Link to="/contact" className="text-[#70564b] font-bold text-sm border-b border-[#70564b] pb-1 hover:text-[#70564b] hover:border-[#70564b] transition-colors">
                Get a Roadmap &rarr;
              </Link>
            </div>
          </div>

          {/* Right Content (Spans 8 cols) */}
          <div className="lg:col-span-8 space-y-24">
            {[
              { 
                icon: Icons.Database, 
                title: "Modern Data Platform", 
                subtitle: "Ingest & Unify", 
                desc: "We build robust data lakes and warehouses (Snowflake, Databricks, Azure Synapse) that ingest structured and unstructured data from any source.",
                features: ["Multi-cloud Pipelines", "Automated ETL/ELT", "Data Cataloging"]
              },
              { 
                icon: Icons.Brain, 
                title: "Advanced AI & Analytics", 
                subtitle: "Predict & Optimize", 
                desc: "Move beyond dashboards. We deploy machine learning models that predict customer churn, optimize supply chains, and forecast demand with high precision.",
                features: ["Predictive Modeling", "Computer Vision", "NLP & Sentiment Analysis"]
              },
              { 
                icon: Icons.Cpu, 
                title: "Intelligent Automation", 
                subtitle: "Act & Scale", 
                desc: "Combine AI with RPA to automate complex, judgment-based workflows. Reduce manual effort in finance, HR, and operations by up to 80%.",
                features: ["Cognitive RPA", "Chatbots & Agents", "Workflow Orchestration"]
              },
              { 
                icon: Icons.Shield, 
                title: "Enterprise Security (SOC)", 
                subtitle: "Protect & Govern", 
                desc: "Your data is your most valuable asset. We secure it with 24/7 threat monitoring, SIEM/SOAR implementation, and strict access controls.",
                features: ["Threat Detection", "Identity Management", "Compliance Audits"]
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-[#fdfbf9] border border-gray-100 p-10 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 rounded-bl-[100px] -mr-12 -mt-12 transition-all group-hover:bg-[#70564b] group-hover:scale-110"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center text-[#70564b] mb-6 shadow-sm">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">{service.subtitle}</span>
                  <h4 className="text-xl font-bold text-[#2E2A28] mb-4">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-8">{service.desc}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feat, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-[#2E2A28]">
                        <div className="w-1.5 h-1.5 bg-[#70564b] rounded-full"></div>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --- 5. READINESS: "The Blueprint" --- */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-2 text-xs">
              Infrastructure
            </h2>
            <h3 className="text-3xl font-bold text-[#2E2A28]">
              Preparing Your Foundation
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 relative">
            {/* Center Line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-200 -translate-x-1/2"></div>

            <div className="text-right md:pr-12 space-y-12">
              <div>
                <h4 className="font-bold text-[#2E2A28] text-lg mb-2">Storage & Compute</h4>
                <p className="text-sm text-gray-500">High IOPS storage and GPU clusters to handle massive datasets and model training.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#2E2A28] text-lg mb-2">Networking</h4>
                <p className="text-sm text-gray-500">Low-latency SDN networks ensuring real-time data flow between edge and cloud.</p>
              </div>
            </div>

            <div className="md:pl-12 space-y-12">
              <div>
                <h4 className="font-bold text-[#2E2A28] text-lg mb-2">Data Quality</h4>
                <p className="text-sm text-gray-500">Automated cleansing pipelines to remove noise and ensure AI accuracy.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#2E2A28] text-lg mb-2">Security Layer</h4>
                <p className="text-sm text-gray-500">IAM policies, encryption at rest/transit, and role-based access control.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. FAQ: "Clean Lines" --- */}
      <section className="py-24 bg-[#faf9f6]">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-xl font-bold text-[#2E2A28] mb-12 text-center">Common Questions</h2>
          <div className="space-y-px bg-gray-200 border border-gray-200">
            {[
              { q: "Do you handle on-premise legacy data?", a: "Yes. We specialize in hybrid cloud architectures. We build secure gateways to ingest data from legacy mainframe or on-prem systems into modern analytics platforms." },
              { q: "How long until we see ROI?", a: "A typical pilot project delivers actionable insights in 4-6 weeks. Full enterprise transformation is a journey, but we structure it to deliver incremental value at every sprint." },
              { q: "Is my data used to train public models?", a: "Never. We deploy private instances of AI models. Your data remains isolated within your secure environment and is never used to train external or public LLMs." },
              { q: "Can you integrate with SAP/Oracle?", a: "Yes. We have pre-built connectors and API frameworks for all major ERPs, CRMs, and HRIS systems to ensure seamless data flow." }
            ].map((faq, i) => (
              <div key={i} className="bg-white">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-[#2E2A28] text-sm">{faq.q}</span>
                  {openFaq === i ? <Icons.Minus className="w-4 h-4 text-[#70564b]" /> : <Icons.Plus className="w-4 h-4 text-gray-400" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-sm text-gray-500 leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. CTA: "The Brand Block" --- */}
      <section className="py-24 section-brand-bg px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Stop Guessing. Start Knowing.
          </h2>
          <p className="text-sm text-white/80 mb-10">
            Schedule a discovery workshop with our Data & AI architects. We'll assess your maturity and build a roadmap for growth.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-12 py-5 bg-white text-[#70564b] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#5f4940] hover:text-white transition-colors rounded-none"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default DataAnalyticsAI;