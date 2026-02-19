import React from 'react';
import { Link } from 'react-router-dom';

/* =========================================
   1. Internal Icon System 
   ========================================= */
const Icons = {
  Shield: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  ),
  Users: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  ),
  DocSearch: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
  ),
  Scan: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
  ),
  Chart: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
  ),
  Robot: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ),
  Cloud: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
  ),
  ArrowRight: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
  ),
  Layers: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
  ),
  Server: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
  ),
  Check: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
  ),
  Sparkles: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
  ),
  Briefcase: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  )
};

/* =========================================
   2. Data Configuration 
   ========================================= */
const solutionCategories = [
  {
    title: "Core Risk & Compliance",
    description: "Foundational platforms for governance, third-party oversight, and audit readiness.",
    items: [
      {
        id: 'glimmora',
        name: 'Glimmora Hospitality',
        target: "Hospitality COOs",
        outcome: "Boost RevPAR by up to 15%",
        synergy: "Standalone Intelligence OS",
        desc: 'AI-native hospitality intelligence for predictive operations and revenue.',
        path: '/solutions/glimmora',
        icon: Icons.Sparkles,
        badge: "Industry Solution"
      },
      {
        id: 'grc',
        name: 'AI GRC Platform',
        target: "Chief Risk Officers",
        outcome: "Reduce audit prep time by 40%",
        synergy: "ScanVista → GRC → Audit",
        desc: 'Unified governance, risk management, and compliance automation.',
        path: '/solutions/grc',
        icon: Icons.Shield,
        badge: "Core Platform"
      },
      {
        id: 'tprm',
        name: 'AI TPRM Platform',
        target: "Vendor Risk Managers",
        outcome: "Cut onboarding cycles to days",
        synergy: "Feeds into GRC Risk Register",
        desc: 'End-to-end third-party risk management and vendor due diligence.',
        path: '/solutions/tprm',
        icon: Icons.Users,
        badge: "Core Platform"
      },
      {
        id: 'audit',
        name: 'AI Internal Audit',
        target: "Chief Audit Executives",
        outcome: "100% Traceability of findings",
        synergy: "Validates GRC Controls",
        desc: 'Streamline audit workflows, workpapers, and reporting cycles.',
        path: '/solutions/internal-audit',
        icon: Icons.DocSearch,
        badge: "Core Platform"
      }
    ]
  },
  {
    title: "Intelligence & Automation",
    description: "AI-driven tools to digitize documentation and automate complex calculations.",
    items: [
      {
        id: 'scanvista',
        name: 'AI OCR ScanVista',
        target: "Ops & Compliance Leads",
        outcome: "Process docs in seconds",
        synergy: "Extracts data for all platforms",
        desc: 'Intelligent OCR for document digitisation and data extraction.',
        path: '/solutions/scanvista',
        icon: Icons.Scan,
        badge: "AI Accelerator"
      },
      {
        id: 'tax',
        name: 'Tax Automation',
        target: "Finance Controllers",
        outcome: "Zero-error regulatory filing",
        synergy: "Links to ERP Systems",
        desc: 'Automated tax compliance engine for regulatory reporting.',
        path: '/solutions/tax-automation',
        icon: Icons.Chart,
        badge: "Add-on Module"
      },
      
    ]
  },
  {
    title: "Enterprise Enablement",
    description: "Scalable technology solutions to power your daily operations.",
    items: [
      // {
      //   id: 'raas',
      //   name: 'Robot as a Service',
      //   target: "IT & Ops Directors",
      //   outcome: "Reduce operational costs by 30%",
      //   synergy: "Automates legacy tasks",
      //   desc: 'Deploy software robots to handle repetitive, high-volume tasks.',
      //   path: '/solutions/robot-as-a-service',
      //   icon: Icons.Robot,
      //   badge: "Service Module"
      // },
      {
        id: 'dynamics',
        name: 'Dynamics 365',
        target: "CIOs & CTOs",
        outcome: "Unified single source of truth",
        synergy: "Core Enterprise Backbone",
        desc: 'Comprehensive ERP and CRM implementation and support.',
        path: '/solutions/dynamics-365',
        icon: Icons.Cloud,
        badge: "Enterprise Solution"
      }
    ]
  }
];

// Comparison Data for the new Matrix Section
const comparisonData = [
  { name: "AI GRC", owner: "Chief Risk Officer", focus: "Enterprise Governance", outcome: "Unified Risk View", deployment: "Cloud / On-Prem" },
  { name: "AI TPRM", owner: "Vendor Managers", focus: "Third-Party Risk", outcome: "Vendor Health Score", deployment: "Cloud Only" },
  { name: "Internal Audit", owner: "Chief Audit Exec", focus: "Audit Execution", outcome: "Audit Trail & Reporting", deployment: "Cloud / On-Prem" },
  { name: "ScanVista", owner: "IT / Ops Leads", focus: "Data Extraction (OCR)", outcome: "Digitized Documents", deployment: "API / Cloud" },
  { name: "Glimmora", owner: "Hospitality COOs", focus: "Revenue & Ops", outcome: "RevPAR Growth", deployment: "Cloud Platform" }
];

const caseStudies = [
  { id: 1, industry: "BFSI", outcome: "40% reduction in audit cycle time", desc: "How a regional bank unified their risk controls using Glimmora GRC.", link: "/solutions/grc" },
  { id: 2, industry: "Manufacturing", outcome: "100% automated vendor assessments", desc: "Streamlining 500+ supplier audits annually with our TPRM platform.", link: "/solutions/tprm" },
  { id: 3, industry: "Hospitality", outcome: "15% revenue uplift in Q1", desc: "Predictive pricing intelligence for a luxury hotel chain via Glimmora.", link: "/solutions/glimmora" }
];

const getCtaText = (id) => {
    const platformIds = ['grc', 'tprm', 'audit', 'scanvista', 'glimmora'];
    return platformIds.includes(id) ? 'Explore Platform' : 'Explore Solution';
};

const getBadgeStyles = (type) => {
    switch(type) {
        case 'Core Platform': return 'bg-[#70564b] text-white border-[#70564b]';
        case 'AI Accelerator': return 'bg-[#70564b]/10 text-[#70564b] border-[#70564b]/30';
        case 'Industry Solution': return 'bg-purple-50 text-purple-700 border-purple-200';
        default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
}

/* =========================================
   3. Reusable Components
   ========================================= */

const SolutionCard = ({ item }) => {
  return (
    <Link 
      to={item.path}
      className="group relative flex flex-col h-full bg-white p-6 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-transparent hover:border-[#70564b]"
    >
      {/* Header: Icon & Badge */}
      <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 flex items-center justify-start text-[#70564b]">
              <item.icon className="w-10 h-10" />
          </div>
          {item.badge && (
              <span className={`text-xs uppercase tracking-wider font-bold px-2.5 py-1 rounded-full border ${getBadgeStyles(item.badge)}`}>
                  {item.badge}
              </span>
          )}
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#70564b] transition-colors">
          {item.name}
        </h3>
        
        {/* NEW: 3-Bullet Structure for Clarity (Visual Hierarchy Update) */}
        <div className="space-y-3 mb-6">
            <div className="flex items-start gap-2">
                <Icons.Users className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <p className="text-xs text-gray-600"><span className="font-semibold text-gray-900">For:</span> {item.target}</p>
            </div>
            <div className="flex items-start gap-2">
                <Icons.Check className="w-4 h-4 text-[#70564b] mt-0.5 shrink-0" />
                <p className="text-xs text-gray-600"><span className="font-semibold text-gray-900">Outcome:</span> {item.outcome}</p>
            </div>
            <div className="flex items-start gap-2">
                <Icons.Layers className="w-4 h-4 text-[#70564b] mt-0.5 shrink-0" />
                <p className="text-xs text-gray-600"><span className="font-semibold text-gray-900">Synergy:</span> {item.synergy}</p>
            </div>
        </div>
      </div>

      <div className="flex items-center text-sm font-bold text-[#70564b] mt-auto uppercase tracking-wide pt-4 border-t border-gray-100">
        <span className="mr-2 border-b border-transparent group-hover:border-[#70564b] transition-all">
            {getCtaText(item.id)}
        </span>
        <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </Link>
  );
};

/* =========================================
   4. Main Page Component
   ========================================= */
const Solutions = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-gray-900 pt-20">
      
      {/* --- 1. HERO SECTION (UPDATED FOR REGULATED INDUSTRIES) --- */}
      <section className="relative bg-white py-20 lg:py-24 border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#70564b]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Text */}
                <div>
                    <h4 className="text-[#70564b] font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-[#70564b]"></span>
                        Enterprise Catalog
                    </h4>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#2E2A28] mb-6 leading-[1.1]">
                        AI-Native Governance for <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#70564b] to-[#70564b]">Regulated Industries</span>
                    </h1>
                    <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-lg">
                        From GRC to TPRM and Internal Audit on one unified stack. Secure outcomes like reduced audit cycles, faster vendor onboarding, and automated compliance.
                    </p>
                    
                    {/* Industry Badges (Req: Short list/badges) */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {['BFSI', 'Pharma', 'Manufacturing', 'Public Sector'].map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wide rounded-full border border-gray-200">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Link to="/contact" className="px-8 py-3.5 bg-[#70564b] text-white font-semibold rounded hover:bg-[#5f4940] transition-all shadow-xl shadow-[#70564b]/20 flex items-center gap-2 group">
                            Schedule a Briefing
                            <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Right: UI Composition */}
                <div className="relative h-[400px] w-full flex items-center justify-center lg:justify-end">
                    <div className="absolute w-[350px] h-[350px] border border-[#70564b]/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
                    <div className="absolute w-[250px] h-[250px] border border-[#70564b]/20 rounded-full border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>
                    
                    <div className="relative z-10 w-80 md:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden transform -rotate-3 translate-y-4 hover:rotate-0 hover:translate-y-0 transition-all duration-500 cursor-default">
                        <div className="bg-gray-50 border-b border-gray-100 p-3 flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="ml-auto text-[10px] font-mono text-gray-400">dashboard.baarez.com</div>
                        </div>
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Analytics Dashboard" className="w-full h-48 object-cover opacity-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                        </div>
                        <div className="p-4 grid grid-cols-3 gap-4">
                            <div><div className="text-xs text-gray-400 uppercase tracking-wider">Risk Score</div><div className="text-xl font-bold text-[#70564b]">Low</div></div>
                            <div><div className="text-xs text-gray-400 uppercase tracking-wider">Compliance</div><div className="text-xl font-bold text-green-600">98%</div></div>
                            <div><div className="text-xs text-gray-400 uppercase tracking-wider">Audits</div><div className="text-xl font-bold text-[#70564b]">Active</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- 2. PROBLEM-SOLUTION STRIP (NEW) --- */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { problem: "Fragmented Risk Tools", solved: "Unified GRC Platform" },
                    { problem: "Manual Vendor Audits", solved: "AI-Driven TPRM" },
                    { problem: "Slow Reporting Cycles", solved: "Real-time Dashboards" },
                    { problem: "Data Sovereignty Issues", solved: "Region-Locked Cloud" }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#70564b] transition-colors">
                        <span className="text-xs text-gray-500 mb-1">Problem: {item.problem}</span>
                        <div className="h-4 w-[1px] bg-gray-300 my-1"></div>
                        <span className="text-sm font-bold text-[#70564b]">Solved by: {item.solved}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- 3. VALUE STRIP --- */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0"><Icons.Layers className="w-5 h-5 text-[#70564b]" /></div>
                    <div><h4 className="font-bold text-gray-900 text-sm">Compliance Architecture</h4><p className="text-xs text-gray-500 mt-0.5">Hosted on compliant infra to support SOC 2 & ISO controls.</p></div>
                </div>
                <div className="w-px h-10 bg-gray-100 hidden md:block"></div>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0"><Icons.Robot className="w-5 h-5 text-[#70564b]" /></div>
                    <div><h4 className="font-bold text-gray-900 text-sm">AI-Native Core</h4><p className="text-xs text-gray-500 mt-0.5">Built on Advanced ML Models</p></div>
                </div>
                <div className="w-px h-10 bg-gray-100 hidden md:block"></div>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0"><Icons.Server className="w-5 h-5 text-[#70564b]" /></div>
                    <div><h4 className="font-bold text-gray-900 text-sm">Sovereign Data</h4><p className="text-xs text-gray-500 mt-0.5">Region-Locked Hosting</p></div>
                </div>
            </div>
        </div>
      </section>

      {/* --- 4. SOLUTIONS GRID --- */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {solutionCategories.map((category, idx) => (
            <div key={idx}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-[#2E2A28] mb-2 flex items-center gap-2">
                        <span className="w-2 h-8 bg-[#70564b] rounded-sm block"></span>
                        {category.title}
                    </h2>
                    <p className="text-gray-500 text-sm max-w-2xl ml-4">{category.description}</p>
                  </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((solution) => (
                  <SolutionCard key={solution.id} item={solution} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. COMPARISON SECTION (NEW) --- */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-xs text-[#70564b] font-bold uppercase tracking-widest mb-3">Quick View</h2>
            <h3 className="text-xl font-bold text-[#2E2A28]">Compare Platforms at a Glance</h3>
          </div>
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                  <th className="p-5">Platform</th><th className="p-5">Primary Owner</th><th className="p-5">Core Focus</th><th className="p-5">Key Outcome</th><th className="p-5">Deployment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-600">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-5 font-bold text-[#70564b]">{row.name}</td>
                    <td className="p-5 flex items-center gap-2"><Icons.Users className="w-4 h-4 text-gray-400" />{row.owner}</td>
                    <td className="p-5">{row.focus}</td>
                    <td className="p-5 font-medium text-[#2E2A28]">{row.outcome}</td>
                    <td className="p-5"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{row.deployment}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- 6. CASE STUDIES --- */}
      <section className="py-20 bg-[#fafafa] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
                <div>
                    <h2 className="text-xs text-[#70564b] font-bold uppercase tracking-widest mb-3">Proven Outcomes</h2>
                    <h3 className="text-xl font-bold text-[#2E2A28]">See Glimmora in Action</h3>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {caseStudies.map((study) => (
                    <Link key={study.id} to={study.link} className="group bg-white p-6 rounded-lg border border-gray-200 hover:border-[#70564b] hover:shadow-lg transition-all duration-300 flex flex-col">
                        <div className="mb-4"><span className="inline-block px-3 py-1 bg-gray-100 text-[#70564b] text-xs font-bold uppercase tracking-wide rounded-full">{study.industry}</span></div>
                        <h4 className="text-xl font-bold text-[#2E2A28] mb-2 leading-tight group-hover:text-[#70564b] transition-colors">{study.outcome}</h4>
                        <p className="text-gray-500 text-sm mb-6 flex-grow">{study.desc}</p>
                        <div className="flex items-center text-sm font-bold text-[#70564b] mt-auto"><span className="mr-2">Explore Solution</span><Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* --- 7. FINAL CTA --- */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
            <div className="relative bg-white rounded-2xl p-10 md:p-14 border border-gray-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#70564b] via-[#70564b] to-[#70564b]"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#70564b]/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#70564b]/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-4">Find the right fit for your enterprise.</h2>
                    <p className="text-sm text-gray-500 mb-8 max-w-2xl mx-auto font-light">Unsure which platform aligns with your compliance needs? Our solution architects can provide a tailored roadmap.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-[#70564b] rounded hover:bg-[#5f4940] transition-colors shadow-lg shadow-[#70564b]/20">Talk to an Expert</Link>
                        <Link to="/about" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-[#70564b] bg-white border border-[#70564b]/20 rounded hover:bg-gray-50 transition-colors">About Glimmora</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Solutions;