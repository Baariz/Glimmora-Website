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
  { title: 'Revenue Pressure', desc: 'Hotels face compressed margins, fluctuating ADR, and increasing OTA commission costs that erode profitability.' },
  { title: 'OTA Dependency', desc: 'Over-reliance on online travel agencies reduces direct booking revenue and weakens the guest relationship.' },
  { title: 'Fragmented PMS Systems', desc: 'Disconnected property management, revenue, and guest data systems prevent holistic operational intelligence.' },
  { title: 'Low Intelligence Layer', desc: 'Most hotels still operate on intuition and historical data rather than real-time AI intelligence for decision-making.' },
]

const PLATFORMS = [
  {
    name: 'Glimmora Hospitality',
    badge: 'Primary Platform',
    desc: 'The AGI-native operating brain for modern hospitality groups. Unifies PMS, revenue optimization, distribution intelligence, and guest experience into a real-time command center.',
    modules: ['AI-Powered PMS', 'Revenue Optimization', 'Distribution Intelligence', 'Guest Intelligence Layer', 'Operational Digital Twin'],
    path: '/platforms/hospitality',
    live: true,
    outcome: '15% increase in RevPAR',
  },
  {
    name: 'Glimmora Reach',
    badge: 'Outreach & Intelligence',
    desc: 'AI-powered market intelligence and outreach platform for hospitality groups. Connect with corporate clients, travel agents, and tour operators at scale with predictive engagement.',
    modules: ['Market Intelligence', 'AI Outreach Engine', 'CRM Intelligence', 'Campaign Analytics'],
    path: '/platforms/reach',
    soon: true,
  },
  {
    name: 'Glimmora VerifAI',
    badge: 'Compliance Layer',
    desc: 'Governance, risk, and compliance intelligence for hospitality groups. Automate regulatory compliance, vendor risk management, and audit processes.',
    modules: ['Hospitality Compliance', 'Vendor Risk Management', 'Regulatory Reporting'],
    path: '/platforms/verifai',
    live: true,
  },
]

const OUTCOMES = [
  { metric: '15%', label: 'Increase in RevPAR' },
  { metric: '30%', label: 'Direct booking growth' },
  { metric: '25%', label: 'Operational cost reduction' },
  { metric: '90%', label: 'Guest satisfaction score improvement' },
]

export default function HospitalityIndustry() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-[#F5F3F1] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(112,86,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(112,86,75,0.06) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
            <Link to="/industries" className="hover:text-gray-900 transition-colors">Industries</Link>
            <span>/</span><span className="text-gray-900">Hospitality</span>
          </div>
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#70564b]/10 text-[#70564b] px-4 py-2 mb-6">Industry: Hotels, Resorts & Chains</span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                The Hospitality<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #956e5d, #d4a48a)' }}>Intelligence Revolution</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Glimmora Hospitality is the AGI-native intelligence layer for modern hotel groups — optimizing revenue, transforming guest experiences, and unifying operations in real-time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary px-8 py-4">Request Demo</Link>
                <Link to="/platforms/hospitality" className="border-2 border-[#70564b]/40 text-[#70564b] hover:bg-[#70564b]/5 font-semibold px-8 py-4 transition-all duration-200 inline-flex items-center">
                  Explore Platform
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

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

      <section className="py-20 bg-[#F5F3F1]">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Hospitality Challenges We Solve</h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CHALLENGES.map((c) => (
                <motion.div key={c.title} variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Hospitality Intelligence Platforms</h2>
            </motion.div>
            <motion.div variants={stagger} className="space-y-6">
              {PLATFORMS.map((platform) => (
                <motion.div key={platform.name} variants={fadeUp} className="bg-[#F5F3F1] rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                      <span className="text-xs font-semibold bg-brand-maroon text-white px-3 py-1 rounded-full">{platform.badge}</span>
                      {platform.live && <span className="text-xs font-semibold bg-green-50 text-green-600 px-2.5 py-1 rounded-full flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full" />Live</span>}
                    </div>
                    {platform.outcome && <p className="text-brand-maroon font-bold mb-2">{platform.outcome}</p>}
                    <p className="text-gray-600 mb-4 leading-relaxed">{platform.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {platform.modules.map((m) => <span key={m} className="text-xs bg-white text-gray-600 border border-gray-200 px-3 py-1 rounded-full">{m}</span>)}
                    </div>
                  </div>
                  <Link to={platform.path} className="btn-primary px-6 py-3 whitespace-nowrap flex-shrink-0">Explore Platform</Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <InterestSection
        industryName="Hospitality"
        heading="Intelligence That Maximizes Every Room"
        description="Glimmora Hospitality unifies your property data in real time — dynamically pricing rooms, profiling guests, and predicting maintenance before issues occur."
        features={[
          'AI-driven revenue optimization across all room categories',
          'Guest hyper-personalization from pre-arrival to check-out',
          'Direct booking growth with smart channel management',
          'Operational digital twin for staffing and maintenance',
        ]}
        color="#4a3830"
        metrics={[
          { name: 'RevPAR', value: '+15%', change: 'Growth' },
          { name: 'Direct', value: '+30%', change: 'Bookings' },
          { name: 'Ops Cost', value: '25%', change: 'Saved' },
        ]}
        visualLabel="Hospitality Intelligence"
        formTitle="Request a Property Demo"
        formDesc="See how Glimmora Hospitality transforms revenue for your hotel portfolio."
      />

      <section className="py-20 bg-[#F5F3F1]">
        <div className="section-container text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-5">Transform Your Hospitality Operations</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                See how Glimmora Hospitality can optimize your revenue, transform guest experiences, and unify your hotel operations.
              </p>
              <Link to="/contact" className="btn-primary px-8 py-4 inline-flex items-center gap-2">
                Request Demo
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
