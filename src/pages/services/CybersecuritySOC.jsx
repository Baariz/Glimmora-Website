import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* =========================================
   1. Icons (Security, Shield, Sharp)
   ========================================= */
const Icons = {
  Shield: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Lock: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="3" y="11" width="18" height="11" rx="0" ry="0" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  Eye: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Key: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="M21 2l-6.5 6.5" />
      <path d="M15.5 7.5l3 3L22 7l-3-3" />
    </svg>
  ),
  Globe: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Code: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Check: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  ArrowRight: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
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

const CybersecuritySOC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2E2A28] selection:bg-[#70564b] selection:text-white overflow-x-hidden">
      
      {/* --- 1. HERO: "The Threat Radar" --- */}
      <section className="relative pt-32 pb-24 lg:pt-40 px-6 lg:px-12 max-w-[1800px] mx-auto border-b border-gray-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Strategic Content */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-gray-200 bg-[#faf9f6]"
            >
              <Icons.Shield className="w-4 h-4 text-[#70564b]" />
              <span className="text-[#70564b] font-mono text-[13px] font-bold uppercase tracking-widest">
                Enterprise Security
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#2E2A28] leading-[1.05] tracking-tight mb-8"
            >
              Resilience by <br/>
              <span className="text-[#70564b]">Design.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-500 leading-relaxed max-w-lg mb-10 font-light"
            >
              Protect your applications, data, and identities across cloud and hybrid environments. We deliver unified, AI-driven defense for the modern enterprise.
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

          {/* Right: "Threat Radar" Motion Graphic */}
          <div className="h-[500px] flex items-center justify-center relative border-l border-gray-100 lg:pl-16">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              
              {/* Radar Circles (Grid) */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-gray-200"
                  style={{ width: `${i * 30}%`, height: `${i * 30}%` }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                />
              ))}
              
              {/* Rotating Scanner - FIXED: Added overflow-hidden and adjusted gradient positioning */}
              <motion.div 
                className="absolute w-full h-full rounded-full overflow-hidden" 
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                {/* The "Beam" - positioned as a quadrant to sweep cleanly */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#70564b]/20 via-[#70564b]/5 to-transparent origin-bottom-left transform translate-y-[0.5px] -translate-x-[0.5px]"></div>
                
                {/* The Leading Edge Line */}
                <div className="absolute top-1/2 left-1/2 w-1/2 h-[1px] bg-[#70564b]/40 origin-left -translate-y-1/2"></div>
              </motion.div>

              {/* Central Shield */}
              <div className="relative z-10 w-24 h-24 bg-white border-2 rounded-full border-[#70564b] flex items-center justify-center shadow-lg">
                <Icons.Lock className="w-10 h-10 text-[#70564b]" />
              </div>

              {/* Detected "Threats" / "Assets" */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-[#70564b] rounded-full shadow-[0_0_10px_#70564b]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 1.5 }}
                  style={{ 
                    top: `${20 + i * 20}%`, 
                    left: `${80 - i * 15}%` 
                  }}
                />
              ))}

              {/* Status Badge */}
              <div className="absolute bottom-0 right-0 bg-white border border-gray-200 px-4 py-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-[#2E2A28] uppercase tracking-widest">Active Monitoring</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- 2. PHILOSOPHY: "Unified Defense" --- */}
      <section className="py-24 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-4 text-xs">
                Our Philosophy
              </h2>
              <h3 className="text-3xl font-bold text-[#2E2A28] mb-6">
                Fragmentation Creates Risk. <br/> Unity Creates Resilience.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Security isn't a list of tools; it's a unified posture. Managing data, applications, and identities in silos leaves gaps that attackers exploit.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Glimmora brings these layers together under a single, AI-enabled governance framework, ensuring visibility and compliance across your entire digital estate.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-bold text-[#2E2A28] mb-6 border-b border-gray-100 pb-4">The Unified Model</h4>
              <div className="space-y-4">
                {[
                  "Consolidated Visibility",
                  "AI-Driven Threat Detection",
                  "Automated Incident Response",
                  "Continuous Compliance"
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <span className="text-sm font-medium text-gray-500 group-hover:text-[#70564b] transition-colors">{item}</span>
                    <Icons.Check className="w-4 h-4 text-[#70564b]" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 3. SECURITY LAYERS: "The Four Fortresses" --- */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-2 text-xs">
              Defense Layers
            </h2>
            <h3 className="text-3xl font-bold text-[#2E2A28]">
              Protecting What Matters
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            
            {/* Layer 1: Data Security */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white p-12 hover:bg-[#fdfbf9] transition-colors group"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 bg-gray-50 border border-gray-200 text-[#70564b]">
                  <Icons.Shield className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-gray-400">01</span>
              </div>
              <h4 className="text-xl font-bold text-[#2E2A28] mb-4">Data Security</h4>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Protect sensitive information across its entire lifecycle—at rest, in motion, and in use. We implement discovery, classification, and encryption to ensure data privacy across cloud and on-prem storage.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2 text-xs font-bold text-[#2E2A28] uppercase tracking-wide">
                  <span className="text-[#70564b]">+</span> Data Discovery
                </li>
                <li className="flex gap-2 text-xs font-bold text-[#2E2A28] uppercase tracking-wide">
                  <span className="text-[#70564b]">+</span> Cloud Protection
                </li>
              </ul>
            </motion.div>

            {/* Layer 2: App & API Security */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white p-12 hover:bg-[#fdfbf9] transition-colors group"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 bg-gray-50 border border-gray-200 text-[#70564b]">
                  <Icons.Code className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-gray-400">02</span>
              </div>
              <h4 className="text-xl font-bold text-[#2E2A28] mb-4">App & API Security</h4>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Secure your digital front door. We defend web apps, mobile backends, and APIs against DDoS attacks, bot abuse, and zero-day vulnerabilities without compromising performance.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2 text-xs font-bold text-[#2E2A28] uppercase tracking-wide">
                  <span className="text-[#70564b]">+</span> WAF & DDoS
                </li>
                <li className="flex gap-2 text-xs font-bold text-[#2E2A28] uppercase tracking-wide">
                  <span className="text-[#70564b]">+</span> API Governance
                </li>
              </ul>
            </motion.div>

            {/* Layer 3: Identity (IAM) */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white p-12 hover:bg-[#fdfbf9] transition-colors group"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 bg-gray-50 border border-gray-200 text-[#70564b]">
                  <Icons.Key className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-gray-400">03</span>
              </div>
              <h4 className="text-xl font-bold text-[#2E2A28] mb-4">Identity & Access</h4>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Identity is the new perimeter. We implement Zero Trust architectures with rigorous authentication, authorization, and identity governance for users and machines.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2 text-xs font-bold text-[#2E2A28] uppercase tracking-wide">
                  <span className="text-[#70564b]">+</span> MFA & SSO
                </li>
                <li className="flex gap-2 text-xs font-bold text-[#2E2A28] uppercase tracking-wide">
                  <span className="text-[#70564b]">+</span> Privileged Access
                </li>
              </ul>
            </motion.div>

            {/* Layer 4: Software Security */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white p-12 hover:bg-[#fdfbf9] transition-colors group"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 bg-gray-50 border border-gray-200 text-[#70564b]">
                  <Icons.Lock className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-gray-400">04</span>
              </div>
              <h4 className="text-xl font-bold text-[#2E2A28] mb-4">Software & Monetization</h4>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Protect your IP and revenue streams. We offer solutions for license enforcement, code obfuscation, and usage monitoring to prevent piracy and tampering.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2 text-xs font-bold text-[#2E2A28] uppercase tracking-wide">
                  <span className="text-[#70564b]">+</span> IP Protection
                </li>
                <li className="flex gap-2 text-xs font-bold text-[#2E2A28] uppercase tracking-wide">
                  <span className="text-[#70564b]">+</span> License Mgmt
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- 4. WHY BAAREZ: "Trust Metrics" --- */}
      <section className="py-24 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-4 text-xs">
            The Glimmora Advantage
          </h2>
          <h3 className="text-3xl font-bold text-[#2E2A28] mb-12">
            Security That Enables Business
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { val: "24/7", label: "Monitoring", desc: "Continuous SOC surveillance." },
              { val: "AI", label: "Detection", desc: "Predictive threat hunting." },
              { val: "Zero", label: "Trust", desc: "Architecture by default." },
              { val: "100%", label: "Compliance", desc: "GDPR, HIPAA, ISO ready." }
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-white border border-gray-200">
                <div className="text-4xl font-bold text-[#70564b] mb-2">{stat.val}</div>
                <div className="text-xs font-bold text-[#70564b] uppercase mb-2">{stat.label}</div>
                <p className="text-xs text-gray-400">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. CTA: "Sharp Strip" --- */}
      <section className="py-24 section-brand-bg px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Secure Your Future.
          </h2>
          <p className="text-sm text-white/80 mb-8">
            Don't wait for a breach to rethink your strategy. Speak to a Glimmora Cybersecurity Specialist today.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-white text-[#70564b] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#5f4940] hover:text-white transition-colors rounded-none"
          >
            Talk to a Specialist
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CybersecuritySOC;