import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* =========================================
   1. Internal Icon System 
   ========================================= */
const Icons = {
  // Consulting Icons
  Briefcase: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Refresh: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M23 4v6h-6" />
      <path d="M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  ),
  // AI Icons
  Brain: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  ),
  // Cloud/Security Icons
  ServerCog: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
      <path d="M14.5 9.5L18.5 13.5" />
    </svg>
  ),
  ShieldCheck: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  CloudLightning: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" />
      <path d="M13 11l-4 6h6l-4 6" />
    </svg>
  ),
  ArrowUpRight: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
};

/* =========================================
   2. Data Configuration
   ========================================= */
const services = [
  {
    category: "Consulting & Transformation",
    description: "Strategic roadmapping to align technology with regulatory requirements and business goals in BFSI, public sector, healthcare, and energy.",
    items: [
      {
        id: 'bpc',
        title: "Business Process Consulting",
        desc: "Optimize operational workflows to reduce waste and improve efficiency while maintaining compliance with industry regulations. Works with GRC Platform for process governance.",
        path: "/services/business-process-consulting",
        icon: Icons.Briefcase,
        platform: "GRC Platform"
      },
      {
        id: 'dt',
        title: "Digital Transformation",
        desc: "Modernize legacy systems and adopt digital-first business models tailored for regulated environments. Accelerates GRC, TPRM, and Audit platform rollouts.",
        path: "/services/digital-transformation",
        icon: Icons.Refresh,
        platform: "All Platforms"
      }
    ]
  },
  {
    category: "Technology & AI",
    description: "Harnessing the power of data and AI to drive intelligent decision-making in compliance, risk assessment, and operational excellence.",
    items: [
      {
        id: 'data-ai',
        title: "Data Analytics & AI",
        desc: "Turn raw data into actionable insights with predictive modeling and BI. Powers AI-driven risk assessment and compliance monitoring across GRC and TPRM platforms.",
        path: "/services/data-analytics-ai",
        icon: Icons.Brain,
        platform: "AI GRC & TPRM"
      }
    ]
  },
  {
    category: "Cloud, Security & ERP",
    description: "Building the resilient, secure infrastructure that powers modern regulated enterprises across MENA and beyond.",
    items: [
      {
        id: 'erp',
        title: "ERP Consulting",
        desc: "Expert advisory for ERP selection, implementation, and optimization. Integrates with GRC for financial controls and compliance tracking.",
        path: "/services/erp-consulting",
        icon: Icons.ServerCog,
        platform: "GRC Integration"
      },
      {
        id: 'cyber',
        title: "Cybersecurity & SOC",
        desc: "24/7 threat monitoring, vulnerability management, and incident response. Feeds security incidents and risks directly into GRC platform for unified oversight.",
        path: "/services/cybersecurity-soc",
        icon: Icons.ShieldCheck,
        platform: "GRC Platform"
      },
      {
        id: 'cloud',
        title: "Cloud & Automation",
        desc: "Seamless cloud migration strategies and DevOps automation pipelines. Sovereign cloud deployment options for data residency compliance.",
        path: "/services/cloud-automation",
        icon: Icons.CloudLightning,
        platform: "Cloud Deployment"
      }
    ]
  }
];

/* =========================================
   3. Service Card Component
   ========================================= */
const ServiceCard = ({ item }) => (
  <Link
    to={item.path}
    className="group relative bg-white p-8 border border-gray-100 rounded-xl hover:border-[#70564b]/30 hover:shadow-[0_10px_40px_-10px_rgba(112,86,75,0.1)] transition-all duration-300 flex flex-col h-full"
  >
    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <Icons.ArrowUpRight className="w-5 h-5 text-[#70564b]" />
    </div>

    <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center text-[#70564b] mb-6 group-hover:bg-[#70564b] group-hover:text-white transition-colors duration-300">
      <item.icon className="w-7 h-7" />
    </div>

    <h3 className="text-xl font-bold text-[#2E2A28] mb-3 group-hover:text-[#70564b] transition-colors">
      {item.title}
    </h3>

    <p className="text-gray-500 text-sm leading-relaxed mb-4 font-light flex-grow">
      {item.desc}
    </p>

    {item.platform && (
      <div className="mb-4 mt-2">
        <span className="inline-block px-3 py-1 bg-[#70564b]/10 text-[#70564b] text-xs font-bold uppercase tracking-wider rounded-full">
          Works with {item.platform}
        </span>
      </div>
    )}

    <div className="mt-auto">
      <span className="text-xs font-bold text-[#70564b] uppercase tracking-widest border-b border-transparent group-hover:border-[#70564b] transition-all">
        View Service
      </span>
    </div>
  </Link>
);

/* =========================================
   4. Main Component
   ========================================= */
const Services = () => {
  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans text-[#2E2A28] pt-20">
      
      {/* --- 1. HERO: "The Expertise Layer" (Updated Right Side) --- */}
      <section className="relative pt-24 pb-20 px-6 lg:px-12 border-b border-gray-200 bg-white overflow-hidden">
        
        {/* Subtle Background Angle */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#faf9f6] -skew-x-12 translate-x-32 z-0 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT: Text Content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-[#70564b]"></span>
                <span className="text-[#70564b] font-bold uppercase tracking-widest text-xs">Our Expertise</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-[#70564b] mb-8 leading-tight tracking-tight">
                Strategic Consulting. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E2A28] to-[#70564b]">
                  Intelligent Execution.
                </span>
              </h1>
              
              <p className="text-sm text-gray-500 font-light leading-relaxed border-l-4 border-gray-100 pl-6">
                We move beyond implementation to provide true transformation for regulated industries. From strategic roadmapping for BFSI and public sector to 24/7 security operations for healthcare and energy, we are the architects of your digital future in highly regulated environments.
              </p>
            </div>

            {/* RIGHT: The "Strategic Radar" Visualization */}
            <div className="relative h-[400px] w-full hidden lg:flex items-center justify-center">
                
                {/* Center Hub */}
                <div className="relative z-20 w-32 h-32 bg-white rounded-full shadow-[0_0_40px_rgba(112,86,75,0.1)] border border-gray-100 flex flex-col items-center justify-center">
                    <span className="text-[#70564b] font-bold tracking-tight text-xl">baarez</span>
                    <span className="text-xs text-gray-400 uppercase tracking-widest mt-1">Core</span>
                </div>

                {/* Orbit Rings */}
                <div className="absolute w-[400px] h-[400px] border border-gray-200/60 rounded-full animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute w-[280px] h-[280px] border border-dashed border-[#70564b]/30 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

                {/* Satellite Nodes (Floating Icons) */}
                
                {/* Node 1: Strategy */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 left-10 bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#70564b] z-20"
                >
                    <Icons.Briefcase className="w-6 h-6 text-[#70564b] mb-2" />
                    <p className="text-xs font-bold text-[#2E2A28] uppercase">Strategy</p>
                </motion.div>

                {/* Node 2: AI Intelligence */}
                <motion.div 
                    animate={{ y: [0, 10, 0] }} 
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-20 right-0 bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#70564b] z-20"
                >
                    <Icons.Brain className="w-6 h-6 text-[#70564b] mb-2" />
                    <p className="text-xs font-bold text-[#2E2A28] uppercase">Intelligence</p>
                </motion.div>

                {/* Node 3: Security */}
                <motion.div 
                    animate={{ y: [0, -15, 0] }} 
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-10 left-20 bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#2E2A28] z-20"
                >
                    <Icons.ShieldCheck className="w-6 h-6 text-[#2E2A28] mb-2" />
                    <p className="text-xs font-bold text-[#2E2A28] uppercase">Resilience</p>
                </motion.div>

                {/* Decorative Lines connecting center to nodes (SVG Overlay) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="85%" y2="30%" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="35%" y2="80%" stroke="#e5e7eb" strokeWidth="1" />
                </svg>

            </div>

          </div>
        </div>
      </section>

      {/* --- 2. THE SERVICES ECOSYSTEM --- */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {services.map((section, idx) => (
            <div key={idx} className="relative">
              {/* Category Sidebar/Header */}
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                
                <div className="lg:w-1/3">
                  <div className="sticky top-32">
                    <span className="text-6xl font-bold text-gray-100 absolute -top-10 -left-6 -z-10">
                      0{idx + 1}
                    </span>
                    <h2 className="text-xl font-bold text-[#2E2A28] mb-4">
                      {section.category}
                    </h2>
                    <p className="text-gray-500 text-sm font-light leading-relaxed mb-8">
                      {section.description}
                    </p>
                    <div className="w-12 h-[2px] bg-[#70564b]"></div>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <div className="grid md:grid-cols-2 gap-6">
                    {section.items.map((service) => (
                      <ServiceCard key={service.id} item={service} />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* --- 3. THE ENGAGEMENT MODEL (Process Visual) --- */}
      <section className="py-24 section-brand-bg text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-xs text-[#70564b] font-bold uppercase tracking-widest mb-4">How We Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-16">The Glimmora Engagement Model</h3>

          <div className="grid md:grid-cols-4 gap-8 text-left relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-white/10 -z-0"></div>

            {[
              { step: "01", title: "Assess", desc: "We analyze your current infrastructure and identify gaps." },
              { step: "02", title: "Architect", desc: "We design a scalable, future-ready solution roadmap." },
              { step: "03", title: "Implement", desc: "Agile deployment with minimal disruption to operations." },
              { step: "04", title: "Optimize", desc: "Continuous improvement and 24/7 support management." }
            ].map((phase, i) => (
              <div key={i} className="relative z-10 group">
                <div className="w-24 h-24 bg-[#70564b] border border-white/20 rounded-full flex items-center justify-center text-3xl font-bold mb-6 group-hover:bg-[#70564b] group-hover:border-[#70564b] transition-colors duration-300 shadow-xl mx-auto md:mx-0">
                  {phase.step}
                </div>
                <h4 className="text-xl font-bold mb-2 text-[#70564b] text-center md:text-left">{phase.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed text-center md:text-left">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. CTA --- */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-6">
            Need a custom roadmap?
          </h2>
          <p className="text-gray-500 text-sm mb-10 font-light max-w-2xl mx-auto">
            Our consultants are ready to audit your current stack and propose a digital transformation strategy tailored to your industry.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-10 py-4 bg-[#2E2A28] text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-[#5f4940] transition-colors shadow-lg">
              Book a Consultation
            </Link>
            <Link to="/solutions" className="px-10 py-4 bg-white text-[#2E2A28] border border-gray-200 font-bold uppercase tracking-widest text-xs rounded hover:border-[#70564b] hover:text-[#70564b] transition-colors">
              Explore Platforms
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;