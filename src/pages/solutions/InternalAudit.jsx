import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* =========================================
   1. Icon System (Audit & Compliance Focused)
   ========================================= */
const Icons = {
  ClipboardCheck: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9 2 2 4-4" />
    </svg>
  ),
  ChartBar: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  Clock: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Users: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  DocumentSearch: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  Refresh: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  ),
  ArrowRight: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
};

/* =========================================
   2. Micro-Components (Visuals)
   ========================================= */

// Hero Visual: "The Organized Audit"
// Represents chaos (unorganized dots) becoming structure (a neat grid).
const AuditVisual = () => (
  <div className="relative w-full h-[450px] flex items-center justify-center">
    
    {/* The "Chaotic" Input Side (Left) */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20">
        {[...Array(6)].map((_, i) => (
            <motion.div 
                key={i}
                className="w-12 h-16 bg-gray-300 rounded mb-2 ml-4 rotate-6"
                animate={{ x: [0, 20, 0], rotate: [6, -6, 6] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
            />
        ))}
    </div>

    {/* The Processing Core (Center) */}
    <div className="relative z-10 w-64 h-64 bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-[#70564b]/5 rounded-full flex items-center justify-center mb-4">
            <Icons.ClipboardCheck className="w-8 h-8 text-[#70564b]" />
        </div>
        <div className="text-center px-6">
            <div className="text-sm font-bold text-[#2E2A28] mb-1">Audit Intelligent Engine</div>
            <div className="text-xs text-gray-400">Processing Controls...</div>
        </div>
        {/* Progress Bar */}
        <div className="w-32 h-1 bg-gray-100 rounded-full mt-4 overflow-hidden">
            <motion.div 
                className="h-full bg-[#70564b]"
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    </div>

    {/* The Structured Output (Right) */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100 border-l-4 border-l-green-500 w-48 mb-4">
            <div className="h-2 w-12 bg-gray-200 rounded mb-2"></div>
            <div className="h-2 w-24 bg-gray-100 rounded"></div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100 border-l-4 border-l-[#70564b] w-48 mb-4 ml-8">
            <div className="h-2 w-12 bg-gray-200 rounded mb-2"></div>
            <div className="h-2 w-24 bg-gray-100 rounded"></div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100 border-l-4 border-l-[#70564b] w-48">
            <div className="h-2 w-12 bg-gray-200 rounded mb-2"></div>
            <div className="h-2 w-24 bg-gray-100 rounded"></div>
        </div>
    </div>
  </div>
);

/* =========================================
   3. Main Page Component
   ========================================= */

const InternalAudit = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2E2A28] pt-5  selection:bg-[#70564b] selection:text-white">
      
      {/* --- 1. HERO: Clear Value Proposition --- */}
      <section className="relative px-8 lg:px-20 py-24 max-w-[1800px] mx-auto overflow-hidden bg-white border-b border-gray-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text */}
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 bg-[#70564b]/10 text-[#70564b] text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
             AI Internal Audit Management
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[#2E2A28] leading-tight">
              Transform Audit from
              <span className="text-[#70564b]"> Overhead to Insight.</span>
            </h1>

            <p className="text-sm text-gray-600 font-light leading-relaxed max-w-lg mb-10">
              Move beyond spreadsheets. Glimmora International provides an AI-powered platform to plan, execute, and report on audits with precision and speed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-[#70564b] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#5f4940] transition-colors shadow-xl rounded-sm text-center">
                Schedule a Consultation
              </Link>
              <a href="#how-it-works" className="px-8 py-4 bg-white border border-gray-200 text-[#2E2A28] font-bold text-sm uppercase tracking-wider hover:border-[#70564b] transition-colors text-center rounded-sm">
                Explore Features
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hidden lg:block">
            <AuditVisual />
          </div>
        </div>
      </section>

      {/* --- 2. THE PROBLEM: Why Modernize? --- */}
      <section className="py-24 px-8 lg:px-20 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-4">Why Modern Internal Audit Needs Change</h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Traditional audit methods are disconnected, manual, and reactive. They can't keep pace with today's risk velocity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Manual Process Fatigue",
                desc: "Spending more time gathering data in spreadsheets than analyzing risks and controls.",
                icon: Icons.ClipboardCheck
              },
              {
                title: "Lack of Visibility",
                desc: "Audit leaders struggle to see real-time progress, creating bottlenecks before reporting.",
                icon: Icons.Clock
              },
              {
                title: "Static Planning",
                desc: "Annual audit plans become obsolete quickly as business risks shift dynamically.",
                icon: Icons.Refresh
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#70564b] mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#2E2A28] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. THE SOLUTION: How It Works --- */}
      <section id="how-it-works" className="py-24 px-8 lg:px-20 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8">
            <div>
              <span className="text-[#70564b] font-bold text-xs uppercase tracking-widest mb-2 block">Platform Capabilities</span>
              <h2 className="text-4xl font-bold text-[#2E2A28]">How Glimmora Audit Works</h2>
            </div>
            <p className="text-gray-500 text-sm font-medium mt-4 md:mt-0">
              End-to-end functionality for the modern auditor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Risk-Based Planning",
                desc: "Create dynamic audit plans prioritized by risk level, resource availability, and strategic importance.",
                icon: Icons.ChartBar
              },
              {
                title: "Structured Workflow",
                desc: "Standardize audit execution with configurable checklists, workpapers, and review stages.",
                icon: Icons.ClipboardCheck
              },
              {
                title: "Real-Time Tracking",
                desc: "Monitor field work progress instantly. See what's open, in-review, or delayed on one dashboard.",
                icon: Icons.Clock
              },
              {
                title: "Intelligent Reporting",
                desc: "Generate draft audit reports automatically based on findings, reducing documentation time.",
                icon: Icons.DocumentSearch
              },
              {
                title: "Resource Management",
                desc: "Allocate auditors based on skills and availability. Track utilization to prevent burnout.",
                icon: Icons.Users
              },
              {
                title: "Issue Remediation",
                desc: "Track findings through to closure. Automated follow-ups ensure management action plans are met.",
                icon: Icons.Refresh
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 border border-gray-200 hover:border-[#70564b] transition-all bg-white rounded-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-gray-400 group-hover:text-[#70564b] transition-colors">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2E2A28]">{feature.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. THE LIFECYCLE: Visual Flow --- */}
      <section className="py-24 bg-[#fdfbf9] border-y border-gray-100">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-4">Supporting the Full Audit Lifecycle</h2>
            <p className="text-gray-500">From initial risk assessment to final board reporting.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Plan", desc: "Risk Assessment & Scheduling" },
                { step: "02", title: "Execute", desc: "Fieldwork & Testing" },
                { step: "03", title: "Report", desc: "Findings & Management Response" },
                { step: "04", title: "Monitor", desc: "Follow-up & Issue Closure" }
              ].map((phase, i) => (
                <div key={i} className="bg-white p-6 border border-gray-200 shadow-sm rounded-lg text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-10 h-10 bg-[#70564b] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-sm">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#2E2A28] mb-2">{phase.title}</h3>
                  <p className="text-sm text-gray-500">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. BENEFITS: The ROI --- */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="bg-gray-50 p-10 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-[#2E2A28] mb-6">Who is this for?</h3>
              <ul className="space-y-4">
                {[
                  "Chief Audit Executives (CAE)",
                  "Internal Audit Managers",
                  "Risk & Compliance Committees",
                  "CFOs seeking assurance visibility"
                ].map((role, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-2 h-2 bg-[#70564b] rounded-full"></div>
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-8">Business Impact</h2>
              <div className="space-y-8">
                {[
                  { label: "Faster Audit Cycles", val: "40%", desc: "Reduction in administrative time via automation." },
                  { label: "Compliance Readiness", val: "100%", desc: "Always-on tracking of regulatory adherence." },
                  { label: "Resource Optimization", val: "High", desc: "Focus talent on high-risk areas, not paperwork." }
                ].map((stat, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="text-4xl font-light text-[#70564b] w-24 text-right">{stat.val}</div>
                    <div>
                      <h4 className="font-bold text-[#2E2A28] text-xl">{stat.label}</h4>
                      <p className="text-sm text-gray-500">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 6. CTA: Strategic Close --- */}
      {/* --- 6. CTA: Strategic Close (Modern Split-Panel) --- */}
<section className="py-24 bg-white px-6">
  <div className="max-w-[1400px] mx-auto">
    <div className="relative bg-[#f8f9fa] border border-gray-200 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] lg:grid lg:grid-cols-12">
      
      {/* Decorative Visual Side (Right on Desktop, Hidden on Mobile) */}
      <div className="hidden lg:block lg:col-span-5 relative overflow-hidden h-full min-h-[400px] bg-white border-l border-gray-100">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" r="300" stroke="#70564b" strokeWidth="2" strokeDasharray="8 8" />
            <circle cx="400" cy="400" r="200" stroke="#70564b" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="400" cy="400" r="100" stroke="#70564b" strokeWidth="1" />
          </svg>
        </div>
        {/* Floating Abstract Nodes */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#70564b] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-[#70564b] rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#2E2A28] rounded-full"></div>
        {/* Subtle connecting lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="25" y1="25" x2="75" y2="50" stroke="#70564b" strokeWidth="0.5" opacity="0.2" />
          <line x1="75" y1="50" x2="66" y2="66" stroke="#70564b" strokeWidth="0.5" opacity="0.3" />
        </svg>
        
        <div className="absolute bottom-8 left-8 bg-white p-4 rounded-lg shadow-md border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-[#2E2A28] uppercase">Audit Status</span>
          </div>
          <div className="text-sm font-bold text-[#70564b]">Modernized & Audit-Ready</div>
        </div>
      </div>

      {/* Content Side */}
      <div className="lg:col-span-7 p-12 lg:p-20 flex flex-col justify-center relative z-10">
        <div className="inline-block mb-6">
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
            <div className="w-3 h-3 bg-[#70564b] rounded-full"></div>
            <span className="text-xs font-bold text-[#2E2A28] uppercase tracking-wider">Next Steps</span>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-6 leading-tight">
          Ready to modernize your <br/> Internal Audit function?
        </h2>
        
        <p className="text-sm text-gray-500 mb-10 max-w-xl leading-relaxed">
          Stop relying on outdated methods. See how Glimmora can help you deliver deeper insights and greater assurance to your stakeholders.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-10 py-5 bg-[#70564b] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#5f4940] transition-all shadow-xl rounded-sm"
          >
            Schedule a Consultation
          </Link>
          <Link 
            to="/about" 
            className="inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-gray-200 text-[#2E2A28] font-bold text-sm uppercase tracking-widest hover:border-[#70564b] hover:text-[#70564b] transition-all rounded-sm"
          >
            Why Glimmora?
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>
    </div>
  );
};

export default InternalAudit;