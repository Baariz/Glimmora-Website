import React, { useState } from 'react'
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

const ALL_PLATFORMS = [
  {
    name: 'Glimmora VerifAI',
    short: 'VerifAI',
    category: 'Enterprise & Compliance',
    tagline: 'Governance, Risk & Compliance Intelligence',
    desc: 'The unified intelligence layer for GRC, TPRM, Internal Audit, Tax Automation, and regulatory reporting. Replaces fragmented compliance tools with a single AI-powered platform.',
    modules: ['AI GRC Platform', 'AI TPRM', 'Internal Audit Automation', 'Tax Automation', 'ESG Reporting'],
    path: '/platforms/verifai',
    status: 'live',
    target: 'CRO, CISO, CCO, Chief Audit Executives',
    outcome: '40% reduction in audit preparation time',
    color: '#70564b',
  },
  {
    name: 'Glimmora ScanVista',
    short: 'Glimmora ScanVista',
    category: 'Document Intelligence',
    tagline: 'Intelligent Document Understanding',
    desc: 'Turn unstructured documents into decision-ready data. Glimmora ScanVista uses AI to read, classify, and extract data from complex files in English and Arabic — powering KYC, contract analysis, and regulatory evidence collection.',
    modules: ['English & Arabic OCR', 'NLP Document Classification', 'KYC & Contract Analysis', 'Automated Metadata Tagging', 'Regulatory Evidence Extraction'],
    path: '/platforms/scanvista',
    status: 'live',
    target: 'Operations & Compliance Teams',
    outcome: '90% accuracy in automated data extraction',
    color: '#956e5d',
  },
  {
    name: 'Glimmora Hospitality',
    short: 'Hospitality',
    category: 'Hospitality Industry',
    tagline: 'AGI-Native Hospitality Intelligence',
    desc: 'The operating brain for modern hotel chains and resorts. Unifies PMS, revenue optimization, distribution, and guest intelligence into a real-time AI command center.',
    modules: ['AI-Powered PMS', 'Revenue Optimization', 'Distribution Intelligence', 'Guest Intelligence Layer', 'Operational Digital Twin'],
    path: '/platforms/hospitality',
    status: 'live',
    target: 'Hospitality COOs, Revenue Managers, GMs',
    outcome: '15% increase in RevPAR',
    color: '#4a3830',
  },
  {
    name: 'Cyber Glimmora',
    short: 'Cyber',
    category: 'Enterprise & Defense',
    tagline: '24/7 Cybersecurity Intelligence',
    desc: 'Sovereign cybersecurity and threat intelligence platform. AI-driven threat detection, SOC-as-a-service, and continuous compliance monitoring for enterprise and government.',
    modules: ['24/7 SOC Operations', 'AI Threat Intelligence', 'Compliance Monitoring', 'Incident Response', 'Cloud Security', 'Vulnerability Management'],
    path: '/platforms/cyber',
    status: 'soon',
    target: 'CISOs, IT Security Leaders, Defense Organizations',
    outcome: '90% faster threat detection & response',
    color: '#70564b',
  },
  {
    name: 'AEGIS Glimmora',
    short: 'AEGIS Defense',
    category: 'Defense & Military',
    tagline: 'Defense & Military Simulation Intelligence',
    desc: 'AI-powered defense training, war simulation, and tactical intelligence. Engineered for national security readiness with multi-force digital twin capabilities.',
    modules: ['3D Training Engine', 'War Simulation AI', 'Tactical Intelligence Layer', 'Multi-Force Digital Twin', 'Instructor Command Dashboard'],
    path: '/platforms/aegis-defense',
    status: 'soon',
    target: 'Defense Ministries, Military Command, National Security Agencies',
    outcome: 'Mission readiness & simulation accuracy',
    color: '#5f4940',
  },
  {
    name: 'Glimmora Reach',
    short: 'Reach',
    category: 'Enterprise',
    tagline: 'Enterprise Intelligence & Outreach',
    desc: 'Multi-channel enterprise intelligence and outreach platform powered by AI. Market intelligence, predictive analytics, and AI-driven engagement at scale.',
    modules: ['Market Intelligence', 'AI Outreach Engine', 'CRM Intelligence', 'Predictive Analytics', 'Campaign Intelligence'],
    path: '/platforms/reach',
    status: 'live',
    target: 'CMOs, Sales Leaders, Business Development',
    outcome: 'Accelerated enterprise pipeline growth',
    color: '#70564b',
  },
  {
    name: 'Elan Glimmora',
    short: 'Elan',
    category: 'Travel & Luxury',
    tagline: 'Premium Travel & Luxury Intelligence',
    desc: 'Luxury travel intelligence ecosystem. AI-powered experience personalization, concierge intelligence, and premium distribution for luxury travel brands.',
    modules: ['Luxury Analytics', 'AI Concierge Layer', 'Booking Intelligence', 'Experience Personalization', 'Premium Distribution'],
    path: '/platforms/elan',
    status: 'soon',
    target: 'Luxury Hotel Groups, Travel Brands, DMOs',
    outcome: 'Premium guest experience transformation',
    color: '#956e5d',
  },
  {
    name: 'Moda Glimmora',
    short: 'Moda',
    category: 'Fashion & Retail',
    tagline: 'Fashion & Retail Intelligence',
    desc: 'Fashion and retail trend intelligence ecosystem. AI-powered trend forecasting, inventory optimization, and customer intelligence for fashion brands.',
    modules: ['Trend Forecasting AI', 'Inventory Intelligence', 'Customer Analytics', 'Retail Operations AI', 'Brand Intelligence'],
    path: '/platforms/moda',
    status: 'soon',
    target: 'Fashion Brands, Retail Groups, Department Stores',
    outcome: 'Reduced inventory waste, increased sell-through',
    color: '#70564b',
  },
  {
    name: 'Film Glimmora',
    short: 'Film',
    category: 'Cinema & Entertainment',
    tagline: 'Cinema & Entertainment Intelligence',
    desc: 'Content intelligence platform for cinema and entertainment. Audience analytics, content performance prediction, and distribution intelligence.',
    modules: ['Audience Intelligence', 'Content Analytics', 'Box Office Prediction', 'Distribution AI', 'Production Intelligence'],
    path: '/platforms/film',
    status: 'soon',
    target: 'Studios, Distributors, OTT Platforms, Cinema Chains',
    outcome: 'Content ROI maximization',
    color: '#5f4940',
  },
  {
    name: 'Glimmora Nidhi',
    short: 'Nidhi',
    category: 'Finance & Wealth',
    tagline: 'Financial Intelligence Platform',
    desc: 'Financial intelligence, advisory, and wealth management platform. AI-driven portfolio analysis, risk assessment, and personalized financial advisory at scale.',
    modules: ['Portfolio Intelligence', 'AI Risk Assessment', 'Financial Advisory', 'Regulatory Compliance', 'Wealth Analytics'],
    path: '/platforms/nidhi',
    status: 'soon',
    target: 'Wealth Managers, Banks, Financial Advisors, HNIs',
    outcome: 'Optimized portfolio performance & compliance',
    color: '#4a3830',
  },
  {
    name: 'Design Glimmora',
    short: 'Design',
    category: 'Architecture & Interior Design',
    tagline: 'AI-Powered Design Intelligence',
    desc: 'The operating system for architecture and interior design. Design Glimmora thinks like an experienced architect — taking rough ideas and transforming them into build-ready designs with Vastu compliance, 3D previews, cost estimation, and site execution control.',
    modules: ['AI Design Generator', 'Vastu Compliance Engine', '3D Preview & Visualization', 'Cost Estimation AI', 'Construction Site Control', 'Client Presentation Module'],
    path: '/platforms/design',
    status: 'live',
    target: 'Architects, Interior Designers, Real Estate Developers, Construction Firms',
    outcome: 'Build-ready designs from rough concepts in minutes',
    color: '#956e5d',
  },
  {
    name: 'GlimmoraTeam™',
    short: 'Team',
    category: 'Workforce Intelligence',
    tagline: 'SOW to Governed Project Execution',
    desc: 'Converts a Scope of Work into a fully governed project execution flow. AGI forms teams from verified students, professionals, and educated homemakers based on skills — not resumes. Atomic tasks, validated outcomes, and a Proof-of-Delivery Ledger replace traditional freelancing with an enterprise-grade project operating system.',
    modules: ['SOW Intelligence Engine', 'AGI Team Formation', 'Autonomous Project Governor', 'Atomic Task Engine', 'Proof-of-Delivery Ledger', 'Embedded Learning Layer'],
    path: '/platforms/team',
    status: 'live',
    target: 'Enterprises, Project Managers, Operations Leaders',
    outcome: 'Governed execution with validated, evidence-backed outcomes',
    color: '#70564b',
  },
  {
    name: 'Glimmora ASCEND Defense',
    short: 'ASCEND Defense',
    category: 'Training & Simulation',
    tagline: 'AI-Powered Combat Simulation & Tactical Training',
    desc: 'AI-powered combat simulation, tactical training, and mission readiness platform for armed forces and defense agencies. Immersive scenario-based training with real-time performance analytics.',
    modules: ['Combat Simulation Engine', 'Tactical Training AI', 'Mission Readiness Analytics', 'Terrain Modeling', 'After-Action Review', 'Multi-Domain Warfare Sim'],
    path: '/platforms/ascend-defense',
    status: 'soon',
    target: 'Armed Forces, Defense Agencies, Military Training Centers',
    outcome: 'Enhanced mission readiness & training effectiveness',
    color: '#70564b',
  },
  {
    name: 'Glimmora ASCEND Vitalis',
    short: 'ASCEND Vitalis',
    category: 'Training & Simulation',
    tagline: 'AI-Driven Medical Simulation & Clinical Training',
    desc: 'Medical simulation, clinical training, and healthcare workforce development using AI-driven scenarios. From surgical simulations to emergency response training.',
    modules: ['Surgical Simulation', 'Clinical Scenario Engine', 'Emergency Response Training', 'Patient Interaction AI', 'Performance Analytics', 'Certification Tracking'],
    path: '/platforms/ascend-vitalis',
    status: 'soon',
    target: 'Hospitals, Medical Schools, Healthcare Training Centers',
    outcome: 'Improved clinical competency & patient outcomes',
    color: '#956e5d',
  },
  {
    name: 'Glimmora ASCEND Aero',
    short: 'ASCEND Aero',
    category: 'Training & Simulation',
    tagline: 'Flight Simulation & Aviation Safety Intelligence',
    desc: 'Flight simulation, aviation safety training, and aerospace workforce readiness platform. AI-powered scenario generation for pilot training, crew resource management, and maintenance procedures.',
    modules: ['Flight Simulation Engine', 'Crew Resource Management', 'Aviation Safety Training', 'Maintenance Procedure Sim', 'Performance Analytics', 'Regulatory Compliance Training'],
    path: '/platforms/ascend-aero',
    status: 'soon',
    target: 'Airlines, Aviation Academies, Aerospace Organizations',
    outcome: 'Enhanced pilot proficiency & safety compliance',
    color: '#5f4940',
  },
  {
    name: 'Glimmora ASCEND Manufacturing',
    short: 'ASCEND Mfg',
    category: 'Training & Simulation',
    tagline: 'Factory Floor Simulation & Safety Intelligence',
    desc: 'Factory floor simulation, safety training, and manufacturing workforce development. AI-powered scenarios for assembly line operations, hazard response, and quality control procedures.',
    modules: ['Factory Simulation Engine', 'Safety Protocol Training', 'Quality Control Sim', 'Hazard Response Training', 'Equipment Operation Sim', 'Workforce Analytics'],
    path: '/platforms/ascend-manufacturing',
    status: 'soon',
    target: 'Manufacturing Plants, Industrial Training Centers, Safety Organizations',
    outcome: 'Reduced workplace incidents & improved productivity',
    color: '#4a3830',
  },
  {
    name: 'Glimmora ASCEND Energy',
    short: 'ASCEND Energy',
    category: 'Training & Simulation',
    tagline: 'Energy Operations Simulation & Safety Training',
    desc: 'Oil & gas, renewable energy, and utilities training simulation platform. AI-powered scenarios for drilling operations, plant safety, grid management, and emergency response.',
    modules: ['Drilling Simulation', 'Plant Safety Training', 'Grid Management Sim', 'Emergency Response AI', 'Environmental Compliance', 'Workforce Certification'],
    path: '/platforms/ascend-energy',
    status: 'soon',
    target: 'Oil & Gas Companies, Utilities, Renewable Energy Firms',
    outcome: 'Enhanced operational safety & regulatory compliance',
    color: '#70564b',
  },
]

const FILTERS = ['All', 'Live', 'Coming Soon']

export default function Platforms() {
  const [filter, setFilter] = useState('All')

  const filtered = ALL_PLATFORMS.filter((p) => {
    if (filter === 'Live') return p.status === 'live'
    if (filter === 'Coming Soon') return p.status === 'soon'
    return true
  })

  return (
    <main className="pt-24">

      {/* HERO — light background */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#F5F3F1] relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(112,86,75,0.12) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#70564b]/10 text-[#70564b] px-4 py-2 mb-4 md:mb-6" style={{ borderRadius: 0 }}>
                Intelligence Platforms
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Global Intelligence<br />Platforms
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                17+ purpose-built AI platforms for every industry. Each platform is a category leader — together, they form the world's most comprehensive enterprise AI ecosystem.
              </p>
              <div className="flex flex-wrap gap-5 md:gap-8">
                {[
                  { value: '6', label: 'Live Platforms' },
                  { value: '11+', label: 'Launching Soon' },
                  { value: '8+', label: 'Industries Served' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl md:text-3xl font-bold text-[#70564b]">{stat.value}</p>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="section-container">

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10 lg:mb-14">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{ borderRadius: 0 }}
                className={`px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-semibold transition-all duration-300 border ${
                  filter === f
                    ? 'bg-[#70564b] text-white border-[#70564b]'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#70564b] hover:text-[#70564b]'
                }`}
              >
                {f}
                <span className="ml-2 text-xs opacity-70">
                  ({f === 'All' ? ALL_PLATFORMS.length : f === 'Live' ? ALL_PLATFORMS.filter(p => p.status === 'live').length : ALL_PLATFORMS.filter(p => p.status === 'soon').length})
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
            {filtered.map((platform) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  to={platform.path}
                  className="group flex flex-col bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  {/* Colored top bar + header */}
                  <div className="p-4 md:p-5 lg:p-6 border-b border-gray-50" style={{ borderTop: `3px solid ${platform.color}` }}>
                    <div className="flex items-start justify-between gap-3 md:gap-4">
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: platform.color }}>{platform.category}</p>
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-brand-maroon transition-colors">{platform.name}</h3>
                        <p className="text-xs md:text-sm text-gray-400 mt-0.5">{platform.tagline}</p>
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        {platform.status === 'live' ? (
                          <span className="text-[10px] font-bold bg-green-50 text-green-600 px-2.5 py-1 flex items-center gap-1 whitespace-nowrap">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Live
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold bg-[#70564b]/10 text-[#70564b] px-2.5 py-1 whitespace-nowrap">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 md:p-5 lg:p-6">
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4 md:mb-5">{platform.desc}</p>

                    {/* Outcome highlight */}
                    <div className="flex items-center gap-2 mb-4 md:mb-5 p-2.5 md:p-3 bg-[#F5F3F1]">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: platform.color }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-xs font-semibold text-gray-700">{platform.outcome}</span>
                    </div>

                    {/* Modules */}
                    <div className="flex flex-wrap gap-1.5 mb-4 md:mb-5">
                      {platform.modules.slice(0, 3).map((mod) => (
                        <span key={mod} className="text-[10px] md:text-xs bg-gray-100 text-gray-600 px-2 py-0.5 md:px-2.5 md:py-1">{mod}</span>
                      ))}
                      {platform.modules.length > 3 && (
                        <span className="text-[10px] md:text-xs px-2 py-0.5 md:px-2.5 md:py-1" style={{ background: `${platform.color}18`, color: platform.color }}>
                          +{platform.modules.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Target */}
                    <p className="text-[10px] md:text-xs text-gray-400 mb-3 md:mb-4">{platform.target}</p>

                    <div className="flex items-center text-sm font-semibold" style={{ color: platform.color }}>
                      <span>Explore {platform.short}</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#F5F3F1]">
        <div className="section-container text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-5">
                Not sure which platform fits your industry?
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8 md:mb-10">
                Our strategic team will identify the right intelligence layer for your organization and design a custom deployment roadmap.
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <Link to="/contact" className="btn-primary px-6 py-3 md:px-8 md:py-4 text-sm md:text-base">Request Strategic Demo</Link>
                <Link to="/industries" className="btn-secondary px-6 py-3 md:px-8 md:py-4 text-sm md:text-base">Browse by Industry</Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
