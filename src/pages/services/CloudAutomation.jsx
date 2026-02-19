import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* =========================================
   1. Icons (Infrastructure, Cloud, Auto)
   ========================================= */
const Icons = {
  Cloud: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M17.5 19c0-1.7-1.3-3-3-3h-1.1c-.2-3.2-2.7-5.8-5.9-5.8-3 0-5.5 2.2-5.9 5.1C2.3 16 3.9 19 6.5 19h11z" />
    </svg>
  ),
  Zap: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Server: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  Shield: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Refresh: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M23 4v6h-6" />
      <path d="M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  ),
  Code: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
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

const CloudAutomation = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2E2A28] selection:bg-[#70564b] selection:text-white overflow-x-hidden">
      
      {/* --- 1. HERO: "The Cloud Circuit" --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-[1800px] mx-auto border-b border-gray-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Strategic Content */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-gray-200 bg-[#faf9f6]"
            >
              <Icons.Cloud className="w-4 h-4 text-[#70564b]" />
              <span className="text-[#70564b] font-mono text-[13px] font-bold uppercase tracking-widest">
                Cloud & Automation
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#2E2A28] leading-[1.05] tracking-tight mb-8"
            >
              Scale Fast. <br/>
              <span className="text-[#70564b]">Automate Everything.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-500 leading-relaxed max-w-lg mb-10 font-light"
            >
              We modernize your infrastructure and automate your operations. Move from manual provisioning to a self-healing, scalable cloud environment.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4"
            >
              <Link 
                to="/contact" 
                className="px-10 py-4 bg-[#70564b] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#5f4940] transition-colors rounded-none shadow-lg"
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </div>

          {/* Right: "Cloud Circuit" Motion Graphic */}
          <div className="h-[500px] flex items-center justify-center relative border-l border-gray-100 lg:pl-16">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              
              {/* Outer Orbit (Cloud) */}
              <motion.div 
                className="absolute w-full h-full border border-dashed border-gray-200 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner Orbit (Automation) */}
              <motion.div 
                className="absolute w-2/3 h-2/3 border border-gray-200 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-[#70564b] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-md"></div>
              </motion.div>

              {/* Central Core (Server) */}
              <div className="relative z-10 w-32 h-32 bg-white border-2 border-[#70564b]   rounded-full flex flex-col items-center justify-center shadow-2xl">
                <Icons.Server className="w-10 h-10 text-[#70564b] mb-2" />
                <span className="text-xs font-bold uppercase tracking-wider">Infra</span>
              </div>

              {/* Floating Nodes */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white border border-gray-200 px-3 py-1 text-xs font-bold text-gray-500 uppercase tracking-widest shadow-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, delay: i, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    top: `${20 + i * 25}%`,
                    right: i % 2 === 0 ? '-10%' : 'auto',
                    left: i % 2 !== 0 ? '-10%' : 'auto',
                  }}
                >
                  {["AWS / Azure", "Kubernetes", "Terraform"][i]}
                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* --- 2. CONTEXT: "The Modern Engine" --- */}
      <section className="py-24 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-4 text-xs">
                The Shift
              </h2>
              <h3 className="text-3xl font-bold text-[#2E2A28] mb-6">
                Cloud is not a Place. <br/> It's an Operating Model.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Migrating to the cloud is just step one. To realize the true value of cloud—agility, speed, and cost savings—you need **Automation**.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Manual server management is slow and error-prone. Glimmora International helps you embrace Infrastructure as Code (IaC) and automated pipelines to deploy faster and fail less.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-bold text-[#2E2A28] mb-6 border-b border-gray-100 pb-4">Operational Maturity</h4>
              <div className="space-y-4">
                {[
                  { from: "Manual Provisioning", to: "Infrastructure as Code" },
                  { from: "Reactive Fixing", to: "Self-Healing Systems" },
                  { from: "Quarterly Releases", to: "Continuous Deployment" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <span className="text-sm font-medium text-gray-400 line-through">{item.from}</span>
                    <Icons.ArrowRight className="w-4 h-4 text-[#70564b]" />
                    <span className="text-sm font-bold text-[#2E2A28]">{item.to}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 3. CAPABILITIES: "The Modular Rack" --- */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-2 text-xs">
              Our Capabilities
            </h2>
            <h3 className="text-3xl font-bold text-[#2E2A28]">
              Building the Engine
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            
            {[
              { icon: Icons.Cloud, title: "Cloud Strategy", desc: "Roadmap design for migration, modernization, and multi-cloud adoption." },
              { icon: Icons.Refresh, title: "Migration & Modernization", desc: "Replatforming legacy apps to cloud-native architectures (Containers, Serverless)." },
              { icon: Icons.Code, title: "Infrastructure as Code", desc: "Automating provisioning with Terraform and Ansible for consistent environments." },
              { icon: Icons.Zap, title: "CI/CD Pipelines", desc: "Building robust delivery pipelines for automated testing and deployment." },
              { icon: Icons.Server, title: "Hybrid Cloud", desc: "Seamlessly connecting on-premise data centers with public cloud resources." },
              { icon: Icons.Shield, title: "Governance & FinOps", desc: "Managing costs and enforcing policy compliance across your cloud estate." }
            ].map((card, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white p-10 hover:bg-[#fdfbf9] transition-colors group"
              >
                <div className="mb-6 text-gray-400 group-hover:text-[#70564b] transition-colors">
                  <card.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#2E2A28] mb-3">{card.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* --- 4. OUTCOMES: "Automation Value" --- */}
      <section className="py-24 bg-[#fdfbf9] border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-12 text-xs">
            Why Automate?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { val: "99.9%", label: "Uptime", desc: "Improved reliability" },
              { val: "50%", label: "Faster", desc: "Time to market" },
              { val: "30%", label: "Savings", desc: "OpEx reduction" },
              { val: "0", label: "Touch", desc: "Manual deployments" }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 border border-gray-100 shadow-sm">
                <div className="text-4xl font-bold text-[#70564b] mb-2">{stat.val}</div>
                <div className="text-xs font-bold text-[#2E2A28] uppercase mb-2">{stat.label}</div>
                <p className="text-xs text-gray-400">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. GOVERNANCE: "The Shield" --- */}
      <section className="py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="border border-gray-200 p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#f0f0f0_25%,transparent_25%,transparent_75%,#f0f0f0_75%,#f0f0f0),linear-gradient(45deg,#f0f0f0_25%,transparent_25%,transparent_75%,#f0f0f0_75%,#f0f0f0)] bg-[size:20px_20px] opacity-20"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-[#2E2A28] mb-4">Security by Design</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Automation isn't just about speed; it's about consistency. We bake security policies into your infrastructure code, ensuring every environment you spin up is compliant from day one.
                </p>
                <ul className="space-y-2">
                  {["Identity & Access Management (IAM)", "Automated Compliance Audits", "Disaster Recovery Automation"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[#2E2A28]">
                      <Icons.Check className="w-4 h-4 text-[#70564b]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 bg-[#70564b] flex items-center justify-center rounded-full text-white">
                  <Icons.Shield className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. TECH STACK: "Simple List" --- */}
      <section className="py-16 bg-[#faf9f6] border-t border-gray-200 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Supported Platforms</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Terraform", "Ansible"].map((tech, i) => (
              <span key={i} className="text-xl font-bold text-[#2E2A28]">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. CTA: "Sharp Strip" --- */}
      <section className="py-24 section-brand-bg px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Modernize?
          </h2>
          <p className="text-sm text-white/80 mb-8">
            Speak with our Cloud Architects to assess your infrastructure and build an automation roadmap.
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

export default CloudAutomation;