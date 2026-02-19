import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* =========================================
   1. Brand Assets (Maroon & Orange)
   ========================================= */
const Section = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-6 ${className}`}>
    {children}
  </div>
);

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);




   
const Icons = {
  Network: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a10 10 0 1 0 10 10" opacity="0.2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 9V5" />
      <path d="M12 19v-4" />
      <path d="M19 12h-4" />
      <path d="M9 12H5" />
      <circle cx="12" cy="3" r="2" />
      <circle cx="12" cy="21" r="2" />
      <circle cx="21" cy="12" r="2" />
      <circle cx="3" cy="12" r="2" />
    </svg>
  ),
  Search: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  Alert: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    </svg>
  ),
  Check: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Arrow: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
  CheckCircle: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Globe: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  ShieldCheck: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Database: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  Users: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
};

/* =========================================
   2. Visual Components
   ========================================= */

// Hero Visual: "The Extended Perimeter"
// Represents the company (Center) connecting to vendors (Orbit) in a clean, branded way.
// New Hero Visual: "The Vendor Intelligence Hub"
const PerimeterVisual = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* 1. Background Pulse/Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#70564b_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#70564b]/5 rounded-full blur-3xl"></div>

      {/* 2. Connecting Data Lines (SVG Layer) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* Line to Top Right (Cloud) */}
        <motion.path 
          d="M300 300 L480 180" 
          stroke="#e5e7eb" 
          strokeWidth="2" 
          fill="none"
        />
        <motion.circle r="3" fill="#70564b">
          <animateMotion dur="3s" repeatCount="indefinite" path="M300 300 L480 180" />
        </motion.circle>

        {/* Line to Bottom Right (Logistics) */}
        <motion.path 
          d="M300 300 L450 450" 
          stroke="#e5e7eb" 
          strokeWidth="2" 
          fill="none"
        />
        <motion.circle r="3" fill="#70564b">
          <animateMotion dur="4s" repeatCount="indefinite" path="M300 300 L450 450" />
        </motion.circle>

        {/* Line to Left (Payments) */}
        <motion.path 
          d="M300 300 L120 280" 
          stroke="#e5e7eb" 
          strokeWidth="2" 
          fill="none"
        />
        <motion.circle r="3" fill="#70564b">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M300 300 L120 280" />
        </motion.circle>
      </svg>

      {/* 3. Central Hub (Your Enterprise) */}
      <div className="relative z-20 w-32 h-32 bg-white rounded-full border-4 border-gray-50 shadow-[0_0_40px_-10px_rgba(112,86,75,0.2)] flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-[#70564b]/10 animate-ping opacity-20"></div>
        <div className="text-center">
          <div className="w-8 h-8 mx-auto mb-1 text-[#70564b]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/></svg>
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Host</div>
          <div className="text-xs font-bold text-[#2E2A28]">Enterprise</div>
        </div>
      </div>

      {/* 4. Vendor Node: Cloud Provider (Top Right) */}
      <motion.div 
        className="absolute top-10 right-0 md:right-10 bg-white/80 backdrop-blur-md p-4 rounded-lg border border-gray-200 shadow-xl z-10 w-56"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
            </div>
            <div>
              <div className="text-xs font-bold text-[#2E2A28]">Acme Cloud</div>
              <div className="text-xs text-gray-500">Infrastructure</div>
            </div>
          </div>
          <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
        </div>
        <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden mb-2">
          <div className="h-full w-[92%] bg-green-500"></div>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-400">Compliance</span>
          <span className="font-bold text-[#2E2A28]">98%</span>
        </div>
      </motion.div>

      {/* 5. Vendor Node: Payments (Left) */}
      <motion.div 
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/80 backdrop-blur-md p-4 rounded-lg border-l-4 border-[#70564b] shadow-xl z-10 w-60"
        animate={{ y: ["-50%", "-55%", "-50%"] }} // Centered adjustment
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#70564b]/10 flex items-center justify-center text-[#70564b]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <div className="text-xs font-bold text-[#2E2A28]">Global Pay</div>
              <div className="text-xs text-gray-500">Financial Services</div>
            </div>
          </div>
          <div className="px-2 py-0.5 bg-[#70564b]/10 text-[#70564b] text-xs font-bold rounded uppercase">
            Alert
          </div>
        </div>
        <div className="text-xs bg-gray-50 p-2 rounded border border-gray-100 text-gray-600">
          ⚠️ New CVE Vulnerability detected in payment gateway API.
        </div>
      </motion.div>

      {/* 6. Vendor Node: Logistics (Bottom Right) */}
      <motion.div 
        className="absolute bottom-10 right-10 md:right-20 bg-white/80 backdrop-blur-md p-4 rounded-lg border border-gray-200 shadow-xl z-10 w-56"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <div className="text-xs font-bold text-[#2E2A28]">FastShip Logistics</div>
              <div className="text-xs text-gray-500">Supply Chain</div>
            </div>
          </div>
          <span className="inline-block w-2 h-2 rounded-full bg-[#70564b]"></span>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-3">
          <div className="text-center bg-gray-50 p-1 rounded">
            <div className="text-xs text-gray-400 uppercase">Risk</div>
            <div className="text-xs font-bold text-[#70564b]">Medium</div>
          </div>
          <div className="text-center bg-gray-50 p-1 rounded">
            <div className="text-xs text-gray-400 uppercase">Audit</div>
            <div className="text-xs font-bold text-[#2E2A28]">Due</div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

/* =========================================
   3. Main Page Layout
   ========================================= */

const TPRM = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2E2A28] selection:bg-[#70564b] selection:text-white">
      
      {/* --- 1. HERO: Product Definition (Clear & Stylish) --- */}
      <section className="relative px-8 lg:px-20 py-24 max-w-[1800px] mx-auto overflow-hidden bg-[#fdfbf9] border-b border-gray-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Explanation */}
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 bg-[#70564b]/10 text-[#70564b] text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
              AI Third-Party Risk Management
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-[#2E2A28] leading-tight">
              See risk beyond <br/>
              <span className="text-[#70564b]">your walls.</span>
            </h1>

            <p className="text-sm text-gray-600 font-light leading-relaxed max-w-lg mb-10">
              Your vendors are your new perimeter. Glimmora International helps you assess, monitor, and manage third-party risk in a single, automated platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-[#70564b] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#5f4940] transition-colors shadow-xl rounded-sm text-center">
                Book a Demo
              </Link>
              <a href="#how-it-works" className="px-8 py-4 bg-white border border-gray-200 text-[#2E2A28] font-bold text-sm uppercase tracking-wider hover:border-[#70564b] transition-colors text-center rounded-sm">
                How It Works
              </a>
            </div>
          </div>

          {/* Right: The Visual */}
          <div className="hidden lg:block">
            <PerimeterVisual />
          </div>
        </div>
      </section>

      {/* --- 2. THE PROBLEM: "The Visibility Gap" (Redesigned) --- */}
      {/* Concept: A clean white section using BLUR to represent the "Blind Spot" */}
      <section className="py-32 px-8 lg:px-20 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-4">The "Visibility Gap"</h2>
            <p className="text-gray-500 text-sm">Why traditional vendor management feels like flying blind.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* The "Foggy" State (Problem) */}
            <div className="relative group cursor-default">
              <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 flex items-center justify-center border border-gray-100 rounded-xl transition-all duration-500 group-hover:backdrop-blur-none group-hover:bg-transparent">
                <div className="bg-white px-6 py-3 shadow-lg border border-gray-100 rounded-full group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-[#70564b] font-bold text-sm flex items-center gap-2">
                    <Icons.Search className="w-4 h-4" /> Hidden Risks
                  </span>
                </div>
              </div>
              
              {/* Underlying Content (Obscured) */}
              <div className="p-8 bg-gray-50 border border-gray-100 rounded-xl space-y-4 opacity-50">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-32 bg-gray-200 rounded w-full flex items-center justify-center text-gray-400 font-mono text-xs">
                  [DATA SILOED IN SPREADSHEETS]
                </div>
              </div>
            </div>

            {/* The Explanation */}
            <div>
              <h3 className="text-xl font-bold text-[#2E2A28] mb-6">Static files hide dynamic risks.</h3>
              <div className="space-y-8">
                {[
                  { title: "The Snapshot Problem", desc: "A questionnaire is obsolete the moment it's submitted. Risks evolve daily." },
                  { title: "Manual Blind Spots", desc: "You can't manually track the financial health or cyber posture of 500+ vendors." },
                  { title: "Compliance Drift", desc: "Vendors drift out of compliance (GDPR, SAMA) without you knowing." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 min-w-[20px]">
                      <div className="w-2 h-2 bg-[#70564b] rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2A28] text-xl">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 3. THE SOLUTION: "How Glimmora Helps" (Clean Cards) --- */}
      <section id="how-it-works" className="py-32 bg-[#fdfbf9] border-y border-gray-100">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
          <div className="mb-20 max-w-2xl">
            <span className="text-[#70564b] font-bold uppercase tracking-widest text-xs mb-2 block">Platform Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28]">Automated Vendor Intelligence.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Live Vendor Scoring",
                desc: "We pull data from financial, cyber, and operational feeds to give every vendor a dynamic risk score.",
                icon: Icons.Network
              },
              {
                title: "Automated Onboarding",
                desc: "Send digital assessments that auto-score responses. Onboard low-risk vendors 3x faster.",
                icon: Icons.Arrow
              },
              {
                title: "Regulatory Mapping",
                desc: "Automatically map vendor controls to your specific obligations (ISO, NIST, SAMA).",
                icon: Icons.Check
              },
              {
                title: "Continuous Monitoring",
                desc: "Get alerted immediately if a vendor suffers a breach, lawsuits, or credit downgrade.",
                icon: Icons.Alert
              },
              {
                title: "Centralized Dashboard",
                desc: "One single source of truth for all contracts, evidence, and risk profiles.",
                icon: Icons.Search
              },
              {
                title: "Remediation Workflow",
                desc: "Collaborate with vendors directly in the platform to fix identified gaps.",
                icon: Icons.Network
              }
            ].map((card, i) => (
              <div key={i} className="bg-white p-10 rounded-sm border border-gray-100 hover:border-[#70564b] hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#fafafa] rounded-full flex items-center justify-center mb-6 text-[#2E2A28] group-hover:bg-[#70564b] group-hover:text-white transition-colors">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#2E2A28] mb-3">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* The Active Sentinel */}
{/* --- NEW SECTION 2: THE ACTIVE SENTINEL (COMPACT LIGHT THEME) --- */}
<div className="py-16 bg-white border-t border-gray-100 relative overflow-hidden">
  <Section>
    {/* Main Container */}
    <div className="relative rounded-2xl bg-[#fdfbf9] border border-gray-200 overflow-hidden p-8 md:p-10 shadow-xl">
      
      {/* Subtle Background Grid (Brand Colored) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(112,86,75,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(112,86,75,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#70564b] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#70564b]"></span>
              </span>
              <span className="text-[#70564b] font-bold font-mono text-xs tracking-widest uppercase">
                Continuous Oversight
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2E2A28]">
              Visibility That Never Pauses.
            </h2>

            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Modern enterprises cannot rely on periodic reviews to manage risk, compliance,
              and operational exposure. Continuous visibility enables faster decisions and
              earlier intervention—before issues escalate.
            </p>

            <div className="flex flex-col gap-3">
              {[
                "Ongoing monitoring across business operations",
                "Early identification of compliance and control gaps",
                "Real-time operational signals for leadership teams"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                  <Icons.CheckCircle className="w-4 h-4 text-[#70564b]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right Dashboard Visual (Light Mode) */}
        <div className="relative">
          <FadeIn delay={0.2}>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-lg relative">
              
              {/* Decorative Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#70564b] to-[#70564b] rounded-t-xl"></div>

              {/* Dashboard Header */}
              <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-3 pt-1">
                <div className="text-xs font-bold text-[#70564b] uppercase tracking-wider">
                  Enterprise Operations View
                </div>
                <Icons.Globe className="w-4 h-4 text-gray-400" />
              </div>
              
              {/* Stats Rows */}
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-2">
                    <Icons.ShieldCheck className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-bold text-gray-600">
                      Control Stability
                    </span>
                  </div>
                  <span className="text-green-600 font-mono font-bold text-sm">
                    Stable
                  </span>
                </div>

                <div className="flex justify-between items-center p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-2">
                    <Icons.Database className="w-4 h-4 text-[#70564b]" />
                    <span className="text-xs font-bold text-gray-600">
                      Operational Data Flow
                    </span>
                  </div>
                  <span className="text-gray-900 font-mono font-bold text-sm">
                    Active
                  </span>
                </div>

                <div className="flex justify-between items-center p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-2">
                    <Icons.Users className="w-4 h-4 text-[#70564b]" />
                    <span className="text-xs font-bold text-gray-600">
                      Business Units Observed
                    </span>
                  </div>
                  <span className="text-gray-900 font-mono font-bold text-sm">
                    100+
                  </span>
                </div>
              </div>

              {/* Animated Graph Line */}
              <div className="mt-5 h-16 flex items-end justify-between gap-1">
                {[40, 55, 50, 70, 60, 80, 65, 75, 60, 85, 70, 90].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="w-full bg-gradient-to-t from-[#70564b] to-[#70564b] rounded-t-sm opacity-90"
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  </Section>
</div>


      

   {/* --- 4. USE CASES: "Tailored Ecosystems" (RESPONSIVE) --- */}
<section className="py-16 md:py-24 lg:py-32 bg-white">
  <div className="max-w-[1600px] mx-auto px-6 md:px-8 lg:px-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
      
      {/* Left: Context */}
      {/* Mobile: Static position. Desktop: Sticky top-32. */}
      <div className="relative lg:sticky lg:top-32">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-4 md:mb-6 leading-tight">
          Designed for Regulated Industries.
        </h2>
        <p className="text-sm text-gray-600 mb-6 md:mb-8 leading-relaxed">
          Glimmora isn't a generic tool. It’s pre-configured for the specific vendor pressures of high-compliance sectors.
        </p>
        <Link to="/contact" className="inline-block text-[#70564b] font-bold border-b-2 border-[#70564b] pb-1 hover:text-[#70564b] hover:border-[#70564b] transition-colors">
          See industry-specific demos
        </Link>
      </div>

      {/* Right: The List */}
      <div className="space-y-4 md:space-y-6">
        {[
          {
            industry: "Financial Services",
            context: "Fintech, Banking, Insurance",
            risk: "Concentration Risk & SAMA Compliance",
            desc: "Ensure critical vendors meet central bank outsourcing guidelines."
          },
          {
            industry: "Healthcare",
            context: "Hospitals, Pharma",
            risk: "Patient Data (PHI) Sovereignty",
            desc: "Monitor third parties for HIPAA compliance and data residency violations."
          },
          {
            industry: "Manufacturing",
            context: "Supply Chain, Automotive",
            risk: "Operational Continuity",
            desc: "Predict upstream supplier failures before they stop your production line."
          },
          {
            industry: "Government",
            context: "Public Sector, Defense",
            risk: "National Cybersecurity Standards",
            desc: "Enforce strict NCA and NIST security controls across all contractors."
          }
        ].map((item, i) => (
          <div key={i} className="p-6 md:p-8 border border-gray-200 rounded-sm hover:border-l-4 hover:border-l-[#70564b] transition-all bg-white hover:shadow-lg group">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
              <h3 className="text-xl font-bold text-[#2E2A28]">{item.industry}</h3>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">{item.context}</span>
            </div>
            <div className="text-xs font-bold text-[#70564b] uppercase mb-3">{item.risk}</div>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

      {/* --- 5. OUTCOMES: "The Value" --- */}
      <section className="py-24 section-brand-bg text-white">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
          <div className="grid md:grid-cols-4 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pr-8">
              <h3 className="text-xl font-bold mb-4">Why Leaders Choose Glimmora</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We turn third-party risk from a liability into a strategic advantage.
              </p>
            </div>
            {[
              { val: "360°", label: "Vendor Visibility" },
              { val: "3x", label: "Faster Onboarding" },
              { val: "100%", label: "Audit Readiness" }
            ].map((stat, i) => (
              <div key={i} className="pt-8 md:pt-0 md:pl-12">
                <div className="text-5xl font-bold text-white mb-2">{stat.val}</div>
                <div className="text-sm font-bold uppercase tracking-widest text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. CTA: The Close --- */}
      <section className="py-32 px-8 lg:px-20 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-8 leading-tight">
            Stop chasing vendors.<br/>
            Start governing risk.
          </h2>
          <p className="text-sm text-gray-500 mb-12 max-w-lg mx-auto">
            Get a clear view of your extended enterprise with the Glimmora TPRM platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="inline-block px-12 py-5 bg-[#70564b] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#5f4940] transition-colors shadow-2xl rounded-sm"
            >
              Book a Demo
            </Link>
            <Link 
              to="/contact" 
              className="inline-block px-12 py-5 bg-white border border-gray-200 text-[#2E2A28] font-bold text-sm uppercase tracking-widest hover:border-[#70564b] transition-colors rounded-sm"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TPRM;