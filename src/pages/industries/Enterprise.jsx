import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import InterestSection from '../../components/InterestSection'
import { useRef } from 'react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }

function AnimatedSection({ children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>{children}</motion.div>
}

const CHALLENGES = [
  { title: 'Regulatory Complexity', desc: 'Navigating hundreds of overlapping regulations across jurisdictions with manual processes that create risk and inefficiency.' },
  { title: 'Third-Party & Cyber Risk', desc: 'Expanding vendor ecosystems and persistent cyber threats create blind spots in enterprise risk posture.' },
  { title: 'Compliance Burden', desc: 'Fragmented compliance tools, siloed data, and audit-heavy processes consume resources without delivering insight.' },
  { title: 'Audit Inefficiency', desc: 'Checklist-based internal auditing fails to surface strategic risks, leaving boards without timely intelligence.' },
]

const PLATFORMS = [
  {
    name: 'Glimmora VerifAI',
    badge: 'Primary Platform',
    desc: 'Unified GRC, TPRM, Internal Audit, and compliance intelligence. Replaces fragmented tools with a single AI-powered operating system for enterprise governance.',
    modules: ['AI GRC Platform', 'AI TPRM', 'Internal Audit Automation', 'Tax Automation', 'ESG Reporting'],
    path: '/platforms/verifai',
    live: true,
  },
  {
    name: 'Cyber Glimmora',
    badge: 'Security Layer',
    desc: '24/7 cybersecurity intelligence and threat monitoring. Continuous compliance monitoring, incident response, and sovereign security infrastructure.',
    modules: ['24/7 SOC', 'Threat Intelligence', 'Cloud Security', 'Compliance Monitoring'],
    path: '/platforms/cyber',
    live: false,
    soon: true,
  },
  {
    name: 'Glimmora Reach',
    badge: 'Enterprise Intelligence',
    desc: 'AI-powered enterprise outreach and market intelligence. Connect compliance posture with strategic business development.',
    modules: ['Market Intelligence', 'CRM Intelligence', 'Predictive Analytics'],
    path: '/platforms/reach',
    live: false,
  },
]

const OUTCOMES = [
  { metric: '40%', label: 'Reduction in audit preparation time' },
  { metric: '90%', label: 'Faster threat detection & response' },
  { metric: '50%', label: 'Cut vendor onboarding time' },
  { metric: '100%', label: 'Traceability of audit findings' },
]

export default function Enterprise() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="py-20 bg-[#F5F3F1] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(112,86,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(112,86,75,0.06) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
            <Link to="/industries" className="hover:text-gray-900 transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-gray-900">Enterprise</span>
          </div>
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#70564b]/10 text-[#70564b] px-4 py-2 mb-6">
                Industry: Enterprise & Regulated Organizations
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Enterprise Intelligence<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #956e5d, #d4a48a)' }}>
                  for the Modern Era
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Glimmora's enterprise intelligence layer replaces fragmented compliance tools with AI-native platforms that govern risk, automate compliance, and secure operations — at the speed of business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary px-8 py-4">Request Strategic Demo</Link>
                <Link to="/platforms/verifai" className="border-2 border-[#70564b]/40 text-[#70564b] hover:bg-[#70564b]/5 font-semibold px-8 py-4 transition-all duration-200 inline-flex items-center">
                  Explore VerifAI
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-16 bg-white border-b border-gray-100">
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

      {/* CHALLENGES */}
      <section className="py-20 bg-[#F5F3F1]">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-brand-maroon mb-3">Enterprise Challenges</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                The Challenges We Solve
              </h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CHALLENGES.map((c) => (
                <motion.div key={c.title} variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-brand-maroon/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-brand-maroon mb-3">Glimmora Solutions</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Platforms Built for Enterprise
              </h2>
            </motion.div>
            <motion.div variants={stagger} className="space-y-6">
              {PLATFORMS.map((platform) => (
                <motion.div key={platform.name} variants={fadeUp}
                  className="bg-[#F5F3F1] rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                      <span className="text-xs font-semibold bg-brand-maroon text-white px-3 py-1 rounded-full">{platform.badge}</span>
                      {platform.live && (
                        <span className="text-xs font-semibold bg-green-50 text-green-600 px-2.5 py-1 rounded-full flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Live
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{platform.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {platform.modules.map((m) => (
                        <span key={m} className="text-xs bg-white text-gray-600 border border-gray-200 px-3 py-1 rounded-full">{m}</span>
                      ))}
                    </div>
                  </div>
                  <Link to={platform.path} className="btn-primary px-6 py-3 whitespace-nowrap flex-shrink-0">
                    Explore Platform
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <InterestSection
        industryName="Enterprise"
        heading="Deploy Unified Governance Intelligence"
        description="VerifAI gives enterprise leaders a single command center for GRC, TPRM, internal audit, and tax compliance — reducing manual effort and elevating decision-making speed."
        features={[
          'AI-powered risk detection across all enterprise domains',
          'Continuous regulatory monitoring and change alerts',
          'Automated audit evidence and workpaper generation',
          'Board-ready reporting with real-time risk metrics',
        ]}
        color="#70564b"
        metrics={[
          { name: 'Audit Prep', value: '40%', change: 'Faster' },
          { name: 'Vendor Risk', value: '50%', change: 'Reduced' },
          { name: 'Traceability', value: '100%', change: 'Guaranteed' },
        ]}
        visualLabel="Enterprise GRC Intelligence"
        formTitle="Request an Enterprise Demo"
        formDesc="Our enterprise team will design a tailored GRC deployment roadmap for your organization."
      />

      {/* CTA */}
      <section className="py-20 bg-[#F5F3F1]">
        <div className="section-container text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-5">Deploy Enterprise Intelligence</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                Work with our enterprise team to design a custom deployment roadmap for your regulatory, risk, and compliance challenges.
              </p>
              <Link to="/contact" className="btn-primary px-8 py-4 inline-flex items-center gap-2">
                Request Strategic Demo
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
