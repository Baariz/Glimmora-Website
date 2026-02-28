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
  { title: 'Data Sovereignty', desc: 'Government agencies require AI deployments with complete data sovereignty — no cloud dependency, full on-premise or sovereign cloud options.' },
  { title: 'Regulatory Compliance', desc: 'Public sector organizations navigate complex regulatory frameworks, procurement requirements, and audit mandates across multiple agencies.' },
  { title: 'Operational Efficiency', desc: 'Legacy government systems create inefficiency, delay service delivery, and prevent data-driven policy decisions at scale.' },
  { title: 'Citizen Service Quality', desc: 'Delivering high-quality citizen services requires intelligent, responsive systems that can adapt to changing public needs and expectations.' },
]

const PLATFORMS = [
  {
    name: 'Glimmora VerifAI',
    badge: 'Governance Platform',
    desc: 'Sovereign governance and compliance intelligence for government agencies. Automate regulatory reporting, vendor risk management, and audit workflows with full data sovereignty.',
    modules: ['Government GRC', 'Regulatory Compliance', 'Audit Automation', 'Procurement Risk (TPRM)', 'Document Intelligence'],
    path: '/platforms/verifai',
    live: true,
  },
  {
    name: 'Glimmora AEGIS',
    badge: 'National Security',
    desc: 'AI-powered defense and security intelligence for national security agencies. Tactical intelligence, simulation, and mission readiness platforms with classified deployment options.',
    modules: ['Tactical Intelligence', 'National Security AI', 'Classified Deployment', 'Multi-Agency Integration'],
    path: '/platforms/aegis-defense',
    soon: true,
  },
  {
    name: 'Glimmora Cyber',
    badge: 'Sovereign Security',
    desc: 'Sovereign cybersecurity for government networks. Air-gap deployment, classified threat intelligence, and government-grade incident response infrastructure.',
    modules: ['Sovereign SOC', 'Government Network Security', 'Air-Gap Deployment', 'Classified Threat Intel'],
    path: '/platforms/cyber',
    soon: true,
  },
  {
    name: 'GlimmoraTeam™',
    badge: 'Execution Platform',
    desc: 'AGI-powered governed project execution for public sector initiatives. Converts SOW documents into atomic tasks with verified execution teams and audit-ready delivery artifacts.',
    modules: ['SOW Intelligence Engine', 'AGI Team Formation', 'Autonomous Project Governor', 'Atomic Task Engine', 'Proof-of-Delivery Ledger'],
    path: '/platforms/team',
    soon: true,
  },
  {
    name: 'Glimmora ASCEND Defense',
    badge: 'Training Platform',
    desc: 'AI-powered military simulation and training for government defense agencies. Sovereign deployment with classified scenario options.',
    modules: ['Combat Simulation', 'Tactical Training AI', 'Mission Readiness', 'After-Action Review'],
    path: '/platforms/ascend-defense',
    soon: true,
  },
]

export default function PublicSector() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-[#F5F3F1] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(112,86,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(112,86,75,0.06) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
            <Link to="/industries" className="hover:text-gray-900 transition-colors">Industries</Link>
            <span>/</span><span className="text-gray-900">Public Sector</span>
          </div>
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#70564b]/10 text-[#70564b] px-4 py-2 mb-6">Industry: Public Sector & Government</span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Sovereign AI<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #956e5d, #d4a48a)' }}>for the Public Sector</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Glimmora delivers sovereign AI platforms to governments and public institutions — with full data sovereignty, classified deployment options, and purpose-built intelligence for public sector mandates.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary px-8 py-4">Request Government Briefing</Link>
                <Link to="/platforms/verifai" className="border-2 border-[#70564b]/40 text-[#70564b] hover:bg-[#70564b]/5 font-semibold px-8 py-4 transition-all duration-200 inline-flex items-center">Explore VerifAI</Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-[#F5F3F1]">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Public Sector Challenges We Address</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Sovereign Intelligence Platforms</h2>
            </motion.div>
            <motion.div variants={stagger} className="space-y-6">
              {PLATFORMS.map((platform) => (
                <motion.div key={platform.name} variants={fadeUp} className="bg-[#F5F3F1] rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                      <span className="text-xs font-semibold bg-brand-maroon text-white px-3 py-1 rounded-full">{platform.badge}</span>
                      {platform.soon && <span className="text-xs font-semibold bg-[#70564b]/10 text-[#70564b] px-2.5 py-1 rounded-full">Coming Soon</span>}
                      {platform.live && <span className="text-xs font-semibold bg-green-50 text-green-600 px-2.5 py-1 rounded-full flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full" />Live</span>}
                    </div>
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
        industryName="Public Sector"
        heading="Sovereign AI for Government & Public Services"
        description="Glimmora's sovereign AI platforms are engineered for government — fully deployable on national infrastructure with zero data egress, enabling digital transformation without compromising security."
        features={[
          'Full sovereign deployment on government infrastructure',
          'Automated regulatory compliance and audit reporting',
          'AI-powered public service delivery optimization',
          'Cybersecurity intelligence for critical national infrastructure',
        ]}
        color="#4a3830"
        metrics={[
          { name: 'Data', value: '100%', change: 'Sovereign' },
          { name: 'Compliance', value: '100%', change: 'Automated' },
          { name: 'Efficiency', value: '45%', change: 'Improved' },
        ]}
        visualLabel="Public Sector Intelligence"
        formTitle="Request a Government Briefing"
        formDesc="Our government team will present a classified overview of Glimmora's sovereign AI capabilities."
      />

      <section className="py-20 bg-[#F5F3F1]">
        <div className="section-container text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-5">Deploy Sovereign Intelligence</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">Request a government briefing to understand how Glimmora's sovereign AI platforms can transform your public sector organization.</p>
              <Link to="/contact" className="btn-primary px-8 py-4 inline-flex items-center gap-2">Request Government Briefing</Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
