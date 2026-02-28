import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.div>
  )
}

const PLATFORMS = [
  {
    name: 'Glimmora VerifAI',
    short: 'VerifAI',
    industry: 'Enterprise & Compliance',
    desc: 'The unified intelligence layer for Governance, Risk & Compliance. Automates GRC, TPRM, Internal Audit, Tax Automation, and regulatory reporting.',
    modules: ['AI GRC Platform', 'AI TPRM', 'Internal Audit', 'Tax Automation', 'ESG Reporting'],
    path: '/platforms/verifai',
    status: 'live',
    color: '#70564b',
  },
  {
    name: 'Glimmora ScanVista',
    short: 'Glimmora ScanVista',
    industry: 'Document Intelligence',
    desc: 'Intelligent document understanding powered by AI. Reads, classifies, and extracts data from complex documents in English and Arabic — for KYC, contracts, and regulatory evidence.',
    modules: ['English & Arabic OCR', 'NLP Classification', 'KYC & Contract Analysis', 'Metadata Tagging', 'Evidence Extraction'],
    path: '/platforms/scanvista',
    status: 'live',
    color: '#956e5d',
  },
  {
    name: 'Glimmora Hospitality',
    short: 'Hospitality',
    industry: 'Hotels, Resorts & Chains',
    desc: 'AGI-native operating brain for modern hospitality groups. Unifies PMS, revenue optimization, distribution intelligence, and guest experience.',
    modules: ['AI PMS', 'Revenue Optimization', 'Distribution Intelligence', 'Guest Intelligence', 'Operational Digital Twin'],
    path: '/platforms/hospitality',
    status: 'live',
    color: '#4a3830',
  },
  {
    name: 'Cyber Glimmora',
    short: 'Cyber',
    industry: 'Enterprise & Defense',
    desc: '24/7 cybersecurity and sovereign threat intelligence. SOC-as-a-service with AI-driven threat detection, response, and compliance monitoring.',
    modules: ['24/7 SOC', 'Threat Intelligence', 'Compliance Monitoring', 'Incident Response', 'Cloud Security'],
    path: '/platforms/cyber',
    status: 'soon',
    color: '#70564b',
  },
  {
    name: 'AEGIS Glimmora',
    short: 'AEGIS Defense',
    industry: 'Army, Navy, Airforce',
    desc: 'AI-powered defense training, war simulation, and tactical intelligence platform built for national security readiness.',
    modules: ['3D Training Engine', 'War Simulation AI', 'Tactical Intelligence Layer', 'Multi-Force Digital Twin', 'Instructor Command Dashboard'],
    path: '/platforms/aegis-defense',
    status: 'soon',
    color: '#5f4940',
  },
  {
    name: 'Glimmora Reach',
    short: 'Reach',
    industry: 'Enterprise',
    desc: 'Multi-channel enterprise intelligence and outreach platform. AI-powered engagement, analytics, and market intelligence.',
    modules: ['Market Intelligence', 'AI Outreach Engine', 'CRM Intelligence', 'Analytics Dashboard', 'Predictive Insights'],
    path: '/platforms/reach',
    status: 'soon',
    color: '#70564b',
  },
  {
    name: 'Elan Glimmora',
    short: 'Elan',
    industry: 'Travel & Luxury',
    desc: 'Premium travel and luxury experience intelligence. AI-powered booking optimization, concierge intelligence, and luxury analytics.',
    modules: ['Luxury Analytics', 'AI Concierge', 'Booking Intelligence', 'Experience Personalization', 'Premium Distribution'],
    path: '/platforms/elan',
    status: 'soon',
    color: '#956e5d',
  },
  {
    name: 'Moda Glimmora',
    short: 'Moda',
    industry: 'Fashion & Retail',
    desc: 'Fashion and retail trend intelligence ecosystem. AI-powered trend forecasting, inventory optimization, and customer intelligence.',
    modules: ['Trend Forecasting', 'Inventory AI', 'Customer Intelligence', 'Retail Analytics', 'Brand Intelligence'],
    path: '/platforms/moda',
    status: 'soon',
    color: '#70564b',
  },
  {
    name: 'Film Glimmora',
    short: 'Film',
    industry: 'Cinema & Entertainment',
    desc: 'Cinema and entertainment content intelligence platform. AI-powered content analytics, audience insights, and production intelligence.',
    modules: ['Audience Intelligence', 'Content Analytics', 'Box Office Prediction', 'Distribution AI', 'Production Intelligence'],
    path: '/platforms/film',
    status: 'soon',
    color: '#5f4940',
  },
  {
    name: 'Glimmora Nidhi',
    short: 'Nidhi',
    industry: 'Finance & Wealth',
    desc: 'Financial intelligence, advisory, and wealth management platform. AI-driven portfolio analysis, risk assessment, and financial advisory.',
    modules: ['Portfolio Intelligence', 'Risk Assessment', 'Financial Advisory AI', 'Regulatory Compliance', 'Wealth Analytics'],
    path: '/platforms/nidhi',
    status: 'soon',
    color: '#4a3830',
  },
  {
    name: 'Design Glimmora',
    short: 'Design',
    industry: 'Architecture & Interior Design',
    desc: 'AI-powered design intelligence for architecture and interiors. From rough concept to build-ready plans — with Vastu compliance, 3D previews, cost estimation, and site execution control.',
    modules: ['AI Design Generator', 'Vastu Compliance', '3D Visualization', 'Cost Estimation AI', 'Construction Control'],
    path: '/platforms/design',
    status: 'soon',
    color: '#956e5d',
  },
  {
    name: 'GlimmoraTeam™',
    short: 'Team',
    industry: 'Workforce Intelligence',
    desc: 'Converts a Scope of Work into a fully governed project execution flow. AGI forms teams from verified professionals and students based on skills, not resumes. Atomic tasks, validated outcomes, and a Proof-of-Delivery Ledger — enterprise-grade, not a freelancing platform.',
    modules: ['SOW Intelligence Engine', 'AGI Team Formation', 'Autonomous Project Governor', 'Atomic Task Engine', 'Proof-of-Delivery Ledger'],
    path: '/platforms/team',
    status: 'soon',
    color: '#70564b',
  },
  {
    name: 'Glimmora ASCEND Defense',
    short: 'ASCEND Defense',
    industry: 'Military & Defense Training',
    desc: 'AI-powered combat simulation, tactical training, and mission readiness.',
    modules: ['Combat Simulation', 'Tactical Training AI', 'Mission Readiness', 'After-Action Review'],
    path: '/platforms/ascend-defense',
    status: 'soon',
    color: '#70564b',
  },
  {
    name: 'Glimmora ASCEND Vitalis',
    short: 'ASCEND Vitalis',
    industry: 'Healthcare Training & Simulation',
    desc: 'Medical simulation, clinical training, and healthcare workforce development.',
    modules: ['Surgical Simulation', 'Clinical Scenarios', 'Emergency Response', 'Certification Tracking'],
    path: '/platforms/ascend-vitalis',
    status: 'soon',
    color: '#956e5d',
  },
  {
    name: 'Glimmora ASCEND Aero',
    short: 'ASCEND Aero',
    industry: 'Aviation & Aerospace Training',
    desc: 'Flight simulation, aviation safety training, and aerospace readiness.',
    modules: ['Flight Simulation', 'Crew Management', 'Aviation Safety', 'Maintenance Sim'],
    path: '/platforms/ascend-aero',
    status: 'soon',
    color: '#5f4940',
  },
  {
    name: 'Glimmora ASCEND Manufacturing',
    short: 'ASCEND Mfg',
    industry: 'Industrial Training & Safety',
    desc: 'Factory floor simulation, safety training, and manufacturing workforce development.',
    modules: ['Factory Simulation', 'Safety Training', 'Quality Control', 'Equipment Operations'],
    path: '/platforms/ascend-manufacturing',
    status: 'soon',
    color: '#4a3830',
  },
  {
    name: 'Glimmora ASCEND Energy',
    short: 'ASCEND Energy',
    industry: 'Energy Sector Training',
    desc: 'Energy operations simulation and safety training for oil & gas, renewables, and utilities.',
    modules: ['Drilling Simulation', 'Plant Safety', 'Grid Management', 'Emergency Response'],
    path: '/platforms/ascend-energy',
    status: 'soon',
    color: '#70564b',
  },
]

const ARCHITECTURE_LAYERS = [
  {
    layer: 'Layer 1',
    name: 'AGI Intelligence Core',
    desc: 'Foundational artificial general intelligence that powers reasoning, pattern recognition, and decision-making across all platforms.',
    color: '#70564b',
  },
  {
    layer: 'Layer 2',
    name: 'Digital Twin Engine',
    desc: 'Real-time simulation layer that creates living models of enterprises, operations, defense scenarios, and entire industries.',
    color: '#956e5d',
  },
  {
    layer: 'Layer 3',
    name: 'Industry Intelligence Mesh',
    desc: 'Cross-platform intelligence layer that enables data flow and insight sharing between platforms for compounded intelligence.',
    color: '#5f4940',
  },
  {
    layer: 'Layer 4',
    name: 'Sovereign Infrastructure',
    desc: 'Secure, compliant deployment layer with data sovereignty options for government, defense, and regulated industries.',
    color: '#4a3830',
  },
]

const DIFFERENTIATORS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'Purpose-Built Intelligence',
    desc: 'Every platform is engineered from the ground up for its specific industry — not a generic tool adapted to fit. Deep domain logic, not shallow wrappers.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Modular by Design',
    desc: 'Start with one module, expand across an entire platform, and eventually connect the full ecosystem. Scale at your own pace without locked-in contracts.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286z" />
      </svg>
    ),
    title: 'Sovereign Deployment',
    desc: 'Deploy on-premise, private cloud, or sovereign infrastructure. Built for governments, defense organizations, and enterprises with strict data residency requirements.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: 'Compounded Intelligence',
    desc: 'As you deploy more platforms, each one benefits from the intelligence of the others. The more you use the ecosystem, the smarter it gets across your organization.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Global Scale',
    desc: 'Active across India, US, Qatar, Dubai, Singapore, and Latvia. Built for multinational operations with localization, multi-currency, and regional compliance baked in.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Continuous Innovation',
    desc: 'The ecosystem is under active development with new platforms, modules, and integrations launching regularly. Partners get early access to every new capability.',
  },
]

// Ecosystem hero visual — sliding platform cards list
function EcosystemVisual() {
  const platforms = [
    { name: 'Glimmora Hospitality', tag: 'Live', tagCls: 'bg-green-50 text-green-600',  dot: 'bg-green-500' },
    { name: 'Glimmora VerifAI',     tag: 'Live', tagCls: 'bg-green-50 text-green-600',  dot: 'bg-green-500' },
    { name: 'Glimmora ScanVista',     tag: 'Live', tagCls: 'bg-green-50 text-green-600',  dot: 'bg-green-500' },
    { name: 'Glimmora Reach',       tag: 'Soon', tagCls: 'bg-amber-50 text-amber-600',  dot: 'bg-amber-400' },
    { name: 'Cyber Glimmora',       tag: 'Soon', tagCls: 'bg-amber-50 text-amber-600',  dot: 'bg-amber-400' },
    { name: 'Moda Glimmora',        tag: 'Soon', tagCls: 'bg-amber-50 text-amber-600',  dot: 'bg-amber-400' },
    { name: 'Design Glimmora',      tag: 'Soon', tagCls: 'bg-amber-50 text-amber-600',  dot: 'bg-amber-400' },
    { name: 'GlimmoraTeam',         tag: 'Soon', tagCls: 'bg-amber-50 text-amber-600',  dot: 'bg-amber-400' },
    { name: 'ASCEND Defense',       tag: 'Soon', tagCls: 'bg-amber-50 text-amber-600',  dot: 'bg-amber-400' },
    { name: 'ASCEND Vitalis',       tag: 'Soon', tagCls: 'bg-amber-50 text-amber-600',  dot: 'bg-amber-400' },
    { name: 'ASCEND Aero',          tag: 'Soon', tagCls: 'bg-amber-50 text-amber-600',  dot: 'bg-amber-400' },
    { name: 'ASCEND Manufacturing', tag: 'Soon', tagCls: 'bg-amber-50 text-amber-600',  dot: 'bg-amber-400' },
    { name: 'ASCEND Energy',        tag: 'Soon', tagCls: 'bg-amber-50 text-amber-600',  dot: 'bg-amber-400' },
  ]

  return (
    <div className="relative w-full max-w-sm">
      {/* Background glow */}
      <div className="absolute -top-6 -right-6 w-56 h-56 bg-[#70564b]/8 rounded-full blur-3xl pointer-events-none" />

      {/* Header label */}
      <motion.p
        className="text-[10px] font-bold uppercase tracking-widest text-[#70564b] mb-4 pl-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        17 Platforms · Active Ecosystem
      </motion.p>

      {/* Platform cards */}
      <div className="space-y-2">
        {platforms.map((p, i) => (
          <motion.div
            key={p.name}
            className="bg-white border border-gray-100 shadow-sm px-4 py-3 flex items-center gap-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: i < 3 ? 1 : i < 6 ? 0.78 : 0.5, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.4, ease: 'easeOut' }}
          >
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${p.dot}`} />
            <span className="text-sm font-medium text-gray-800 flex-1">{p.name}</span>
            {p.tag && (
              <span className={`text-[10px] font-bold px-2 py-0.5 ${p.tagCls}`}>{p.tag}</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Ecosystem() {
  return (
    <main className="pt-24">

      {/* HERO — light background */}
      <section className="py-20 bg-[#F5F3F1] relative overflow-hidden">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(112,86,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(112,86,75,0.06) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#70564b] opacity-5 rounded-full blur-[120px] pointer-events-none" />

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* LEFT: Content */}
            <AnimatedSection>
              <motion.div variants={fadeUp}>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#70564b]/10 text-[#70564b] px-4 py-2 mb-6" style={{ borderRadius: 0 }}>
                  Global Intelligence Ecosystem
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  The Glimmora<br />
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #70564b, #956e5d)' }}>
                    Intelligence Ecosystem
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  17+ AI-native platforms. 8+ industries. One unified intelligence layer designed to power the modern world — from enterprise boardrooms to defense command centers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary px-8 py-4">
                    Request Strategic Demo
                  </Link>
                  <Link to="/platforms" className="border-2 border-[#70564b]/40 text-[#70564b] hover:bg-[#70564b]/5 font-semibold px-8 py-4 transition-all duration-200 inline-flex items-center" style={{ borderRadius: 0 }}>
                    View All Platforms
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* RIGHT: Animated platform list */}
            <div className="hidden lg:flex justify-end">
              <EcosystemVisual />
            </div>

          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: 'Global Intelligence Ecosystem',
                  desc: 'Not a product company — a sovereign AI infrastructure layer for the modern world.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  ),
                },
                {
                  title: 'Industry Solutions',
                  desc: 'Purpose-built intelligence for 8+ sectors — each with dedicated platforms, not generic tools.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                  ),
                },
                {
                  title: 'Platform Modules',
                  desc: 'Each platform contains specialized modules that work independently or as part of the broader ecosystem.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp} className="p-8 bg-[#F5F3F1]">
                  <div className="w-14 h-14 bg-[#70564b]/10 flex items-center justify-center text-[#70564b] mx-auto mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ARCHITECTURE LAYERS */}
      <section className="py-24 bg-[#F5F3F1]">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <p className="text-sm font-semibold tracking-widest uppercase text-brand-maroon mb-3">Architecture</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                The Intelligence Stack
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Four architectural layers that enable Glimmora to operate as a unified intelligence ecosystem across every industry.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="space-y-4 max-w-4xl mx-auto">
              {ARCHITECTURE_LAYERS.map((layer, i) => (
                <motion.div
                  key={layer.name}
                  variants={fadeUp}
                  className="flex gap-6 bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div
                      className="w-14 h-14 flex items-center justify-center text-white font-bold text-lg"
                      style={{ background: `linear-gradient(135deg, ${layer.color}, ${layer.color}cc)` }}
                    >
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brand-maroon uppercase tracking-wide mb-1">{layer.layer}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{layer.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{layer.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ALL PLATFORMS */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <p className="text-sm font-semibold tracking-widest uppercase text-brand-maroon mb-3">All Platforms</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                17+ Platforms.<br />One Ecosystem.
              </h2>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PLATFORMS.map((platform) => (
                <motion.div key={platform.name} variants={fadeUp}>
                  <Link
                    to={platform.path}
                    className="group block bg-white border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{platform.industry}</p>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-maroon transition-colors">{platform.name}</h3>
                      </div>
                      {platform.status === 'live' ? (
                        <span className="text-[10px] font-bold bg-green-50 text-green-600 px-2.5 py-1 flex items-center gap-1 whitespace-nowrap">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          Live
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold bg-[#70564b]/10 text-[#70564b] px-2.5 py-1 whitespace-nowrap">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{platform.desc}</p>

                    <div className="space-y-1.5">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Modules</p>
                      {platform.modules.map((mod) => (
                        <div key={mod} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: platform.color }} />
                          {mod}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center text-brand-maroon text-sm font-semibold">
                      <span>Explore {platform.short}</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY THE GLIMMORA ECOSYSTEM — replaces Cross-Industry section */}
      <section className="py-24 bg-[#F5F3F1]">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <p className="text-sm font-semibold tracking-widest uppercase text-brand-maroon mb-3">The Glimmora Advantage</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                Built Different.<br />Built to Last.
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Six principles that separate the Glimmora ecosystem from every other enterprise software platform in the market.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DIFFERENTIATORS.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 bg-[#70564b]/10 flex items-center justify-center text-[#70564b] mb-6 group-hover:bg-[#70564b] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="section-container text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-5">
                Ready to Deploy the Intelligence Layer?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                Speak with our strategic team to understand which platforms fit your industry and how Glimmora's ecosystem can transform your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary px-8 py-4">Request Strategic Demo</Link>
                <Link to="/industries" className="btn-secondary px-8 py-4">Explore Industries</Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
