import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// ── GRC Intelligence Visual ──────────────────────────────────────
const RISK_CELLS = [
  { label: 'Vendor Risk',     color: '#16a34a' },
  { label: 'Cyber Risk',      color: '#d97706' },
  { label: 'Regulatory Risk', color: '#dc2626' },
  { label: 'Tax Risk',        color: '#16a34a' },
  { label: 'Audit Risk',      color: '#16a34a' },
  { label: 'Op Risk',         color: '#d97706' },
]
const MODULE_STATUS = [
  { module: 'AI GRC Platform',  status: 'Active'     },
  { module: 'AI TPRM',          status: 'Monitoring' },
  { module: 'Internal Audit',   status: 'In Review'  },
  { module: 'Tax Automation',   status: 'Filed'      },
]

function GRCVisual() {
  return (
    <div className="relative">
      <div className="bg-white border border-gray-100 shadow-xl p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">Risk Intelligence Dashboard</p>
            <p className="text-sm font-bold text-gray-900 mt-0.5">Real-time Compliance View</p>
          </div>
          <span className="text-[10px] font-bold bg-green-50 text-green-600 px-2.5 py-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Live
          </span>
        </div>

        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Risk Heatmap</p>
        <div className="grid grid-cols-3 gap-1.5 mb-5">
          {RISK_CELLS.map((cell, i) => (
            <motion.div
              key={cell.label}
              className="p-2.5 text-center"
              style={{ backgroundColor: `${cell.color}15`, border: `1px solid ${cell.color}30` }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.3 }}
            >
              <div className="w-2 h-2 rounded-full mx-auto mb-1" style={{ backgroundColor: cell.color }} />
              <p className="text-[10px] text-gray-600 font-medium leading-tight">{cell.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Module Status</p>
        <div className="space-y-1.5">
          {MODULE_STATUS.map((item, i) => (
            <motion.div
              key={item.module}
              className="flex items-center justify-between bg-gray-50 px-3 py-2"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 + 0.85, duration: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.15 + 1.1, duration: 0.2 }}
                >
                  <svg className="w-3.5 h-3.5 text-[#70564b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.span>
                <span className="text-xs font-medium text-gray-700">{item.module}</span>
              </div>
              <span className="text-[10px] text-[#70564b] font-semibold">{item.status}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute -top-4 -right-4 bg-[#70564b] text-white px-4 py-3 shadow-lg"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.4 }}
      >
        <p className="text-[10px] uppercase tracking-wide opacity-70">Compliance Score</p>
        <p className="text-2xl font-bold">94.2%</p>
      </motion.div>
    </div>
  )
}

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
function AnimatedSection({ children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>{children}</motion.div>
}

const MODULES = [
  {
    id: 'grc',
    name: 'AI GRC Platform',
    tagline: 'Enterprise Governance, Centralized',
    desc: 'A unified operating system for governance, risk, and compliance. Replace fragmented spreadsheets with automated workflows that link policies to controls and regulatory obligations in real-time.',
    features: ['Automated Policy & Control Lifecycle', 'Regulatory Change Management', 'Real-time Risk Heatmaps', 'Board-Level Reporting Dashboard'],
    target: 'Chief Risk & Compliance Officers',
    outcome: '40% reduction in audit preparation time',
    path: '/solutions/grc',
  },
  {
    id: 'tprm',
    name: 'AI TPRM Platform',
    tagline: 'Control Risk Beyond Your Enterprise',
    desc: 'Extend your governance perimeter to your supply chain. Assess, monitor, and remediate risks from vendors and third parties in a single, auditable platform.',
    features: ['Automated Vendor Risk Assessments', 'Continuous Performance Monitoring', 'Due Diligence & Compliance Tracking', 'Fourth-Party Risk Visibility'],
    target: 'Vendor Risk Managers & Procurement',
    outcome: '50% cut in vendor onboarding time',
    path: '/solutions/tprm',
  },
  {
    id: 'audit',
    name: 'AI Internal Audit',
    tagline: 'Modernize Audit Execution',
    desc: 'Shift from checklist-based auditing to risk-based assurance. Streamline the entire audit lifecycle from planning and fieldwork to reporting and issue tracking.',
    features: ['Risk-Based Audit Planning', 'Automated Workpapers & Evidence', 'Issue Remediation Tracking', '100% Audit Finding Traceability'],
    target: 'Chief Audit Executives (CAE)',
    outcome: '100% traceability of audit findings',
    path: '/solutions/internal-audit',
  },
  {
    id: 'tax',
    name: 'Tax Automation',
    tagline: 'Automated Tax Intelligence',
    desc: 'AI-powered tax reporting and compliance automation. Reduce manual effort, eliminate calculation errors, and ensure timely, accurate tax submissions across jurisdictions.',
    features: ['Multi-Jurisdiction Tax Processing', 'Automated Tax Calculations', 'Regulatory Filing Engine', 'Audit-Ready Documentation'],
    target: 'CFOs, Tax Directors & Finance Teams',
    outcome: 'Zero manual tax calculation errors',
    path: '/solutions/tax-automation',
  },
]

const OUTCOMES = [
  { metric: '40%', label: 'Reduction in audit prep time' },
  { metric: '50%', label: 'Faster vendor onboarding' },
  { metric: '100%', label: 'Audit finding traceability' },
  { metric: '4', label: 'Integrated compliance modules' },
]

export default function VerifAI() {
  const [activeModule, setActiveModule] = useState(0)
  const module = MODULES[activeModule]
  const [demoEmail, setDemoEmail] = useState('')
  const [demoSubmitted, setDemoSubmitted] = useState(false)

  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="py-20 bg-[#F5F3F1] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(112,86,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(112,86,75,0.06) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#70564b] opacity-10 rounded-full blur-[120px]" />
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
            <Link to="/platforms" className="hover:text-gray-900 transition-colors">Platforms</Link>
            <span>/</span><span className="text-gray-900">VerifAI</span>
          </div>
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#70564b]/10 text-[#70564b] px-4 py-2">Enterprise & Compliance Platform</span>
                <span className="text-xs font-bold bg-green-500 text-white px-3 py-1.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" /> Live
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Glimmora VerifAI
                <br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #956e5d, #d4a48a)' }}>
                  Enterprise GRC Intelligence
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                The unified intelligence layer for Governance, Risk & Compliance. VerifAI consolidates GRC, TPRM, Internal Audit, and Tax Automation into one AI-native platform — built for regulated industries at enterprise scale.
              </p>
              <p className="text-gray-500 mb-10">
                Target: CRO · CISO · CCO · Chief Audit Executives · Risk Managers
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary px-8 py-4">Request Strategic Demo</Link>
                <a href="/grc-whitepaper" target="_blank" rel="noopener noreferrer" className="border-2 border-[#70564b]/40 text-[#70564b] hover:bg-[#70564b]/5 font-semibold px-8 py-4 transition-all duration-200 inline-flex items-center gap-2">
                  Download GRC White Paper
                </a>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {OUTCOMES.map((o) => (
                <motion.div key={o.label} variants={fadeUp} className="p-6">
                  <p className="text-4xl font-bold text-brand-maroon mb-2">{o.metric}</p>
                  <p className="text-sm text-gray-600">{o.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-24 bg-[#F5F3F1]">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-brand-maroon mb-3">Platform Modules</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Five Intelligence Modules.<br />One Unified Platform.</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Each module works independently or as part of the full VerifAI intelligence stack — giving you the flexibility to start where you need and scale across your governance framework.</p>
            </motion.div>
          </AnimatedSection>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {MODULES.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setActiveModule(i)}
                className={`px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeModule === i ? 'bg-brand-maroon text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>

          {/* Active module detail */}
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 p-10 md:p-14">
                <p className="text-xs font-semibold text-brand-maroon uppercase tracking-widest mb-2">{module.tagline}</p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{module.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">{module.desc}</p>

                <ul className="space-y-3 mb-8">
                  {module.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
                      <svg className="w-4 h-4 text-brand-maroon flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to={module.path} className="btn-primary px-6 py-3 inline-flex items-center gap-2">
                  Explore {module.name}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="lg:col-span-2 bg-[#F5F3F1] p-10 flex flex-col justify-center gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Target User</p>
                  <p className="font-semibold text-gray-900">{module.target}</p>
                </div>
                <div className="bg-brand-maroon rounded-2xl p-6">
                  <p className="text-xs text-white/60 uppercase tracking-wide mb-1">Key Outcome</p>
                  <p className="font-bold text-white text-xl">{module.outcome}</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Part of VerifAI Synergy</p>
                  <p className="text-sm text-gray-600">GRC → TPRM → Internal Audit → Tax Automation → Board Reporting</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm font-semibold tracking-widest uppercase text-brand-maroon mb-3">Platform Architecture</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">VerifAI Synergy Model</h2>
              </div>
              <div className="bg-[#F5F3F1] rounded-3xl p-10">
                <div className="flex flex-wrap items-center justify-center gap-3 text-center">
                  {['AI GRC', '→', 'AI TPRM', '→', 'Internal Audit', '→', 'Tax Automation', '→', 'Board Reporting'].map((item, i) => (
                    <span key={i} className={item === '→'
                      ? 'text-brand-maroon font-bold text-lg'
                      : 'bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm'
                    }>
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-center text-gray-600 text-sm mt-6">
                  GRC policies feed TPRM vendor assessments → Risk data flows into Internal Audit testing → Tax automation aligns with compliance controls → All data compiles into Board-level reporting
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ANIMATED FEATURE SECTION + EMAIL FORM */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <AnimatedSection>
              <motion.div variants={fadeUp}>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#70564b] mb-4">Platform Intelligence</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                  See Risk Intelligence<br />In Real Time
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  VerifAI processes governance data across your entire organization and surfaces actionable insights instantly — from vendor risk signals to board-ready compliance reports.
                </p>
                <ul className="space-y-3 mb-10">
                  {[
                    'Real-time risk heatmaps across all domains',
                    'Automated audit evidence collection',
                    'Continuous regulatory change monitoring',
                    'Board-ready compliance reporting',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[#70564b] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Email interest form */}
                <div className="bg-[#F5F3F1] p-6">
                  <p className="font-bold text-gray-900 mb-1">Request a Live Demo</p>
                  <p className="text-gray-500 text-sm mb-4">See VerifAI's compliance intelligence tailored to your organization.</p>
                  {demoSubmitted ? (
                    <div className="flex items-center gap-3 text-green-600">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-sm">We'll reach out within 24 hours.</span>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => { e.preventDefault(); if (demoEmail) { setDemoSubmitted(true); setDemoEmail('') } }}
                      className="flex flex-col sm:flex-row gap-3"
                    >
                      <input
                        type="email"
                        value={demoEmail}
                        onChange={(e) => setDemoEmail(e.target.value)}
                        placeholder="Enter your work email"
                        required
                        className="flex-1 bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 px-4 py-3 outline-none focus:border-[#956e5d] transition-colors text-sm"
                      />
                      <button type="submit" className="btn-primary px-6 py-3 text-sm whitespace-nowrap">
                        Schedule Demo
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Right: Animated visual */}
            <div className="hidden lg:block">
              <GRCVisual />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5F3F1]">
        <div className="section-container text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-5">Deploy VerifAI in Your Organization</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                Speak with our enterprise team to design your VerifAI deployment roadmap — from a single module to full platform rollout.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary px-8 py-4 inline-flex items-center gap-2">Request Strategic Demo</Link>
                <a href="/grc-whitepaper" className="btn-secondary px-8 py-4 inline-flex items-center gap-2">Download White Paper</a>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
