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
  { title: 'Training Gap', desc: 'Traditional defense training lacks the realism, adaptability, and scale required for modern multi-domain warfare scenarios.' },
  { title: 'Simulation Needs', desc: 'Combat simulation systems are outdated, siloed, and unable to replicate the complexity of modern battlefield environments.' },
  { title: 'Autonomous Intelligence', desc: 'Defense organizations need AI systems that can process battlefield data and deliver tactical intelligence in real-time.' },
  { title: 'National Security Readiness', desc: 'Maintaining operational readiness across Army, Navy, and Air Force requires coordinated AI infrastructure at scale.' },
]

const PLATFORMS = [
  {
    name: 'AEGIS Glimmora',
    badge: 'Primary Platform',
    desc: 'Defense training, war simulation, and tactical intelligence platform. Built for national security organizations with multi-force digital twin capabilities and classified deployment options.',
    modules: ['3D Training Engine', 'War Simulation AI', 'Tactical Intelligence Layer', 'Multi-Force Digital Twin', 'Instructor Command Dashboard'],
    path: '/platforms/aegis-defense',
    soon: true,
  },
  {
    name: 'Cyber Glimmora',
    badge: 'Security Layer',
    desc: 'Sovereign cybersecurity infrastructure for defense organizations. Classified threat intelligence, air-gap deployment options, and military-grade data sovereignty.',
    modules: ['Sovereign SOC', 'Classified Threat Intelligence', 'Air-Gap Deployment', 'Military-Grade Security'],
    path: '/platforms/cyber',
    soon: true,
  },
  {
    name: 'GlimmoraTeam™',
    badge: 'Execution Platform',
    desc: 'AGI-powered project execution for defense operations. Converts scope-of-work documents into governed task flows with verified experts, real-time monitoring, and audit-ready delivery artifacts.',
    modules: ['SOW Intelligence Engine', 'AGI Team Formation', 'Autonomous Project Governor', 'Atomic Task Engine', 'Proof-of-Delivery Ledger'],
    path: '/platforms/team',
    soon: true,
  },
  {
    name: 'Glimmora ASCEND Defense',
    badge: 'Training Platform',
    desc: 'AI-powered combat simulation, tactical training, and mission readiness for armed forces. Immersive scenario-based training with real-time performance analytics.',
    modules: ['Combat Simulation Engine', 'Tactical Training AI', 'Mission Readiness Analytics', 'After-Action Review'],
    path: '/platforms/ascend-defense',
    soon: true,
  },
]

export default function Defense() {
  return (
    <main className="pt-24">
      <section className="py-12 md:py-20 bg-[#F5F3F1] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(112,86,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(112,86,75,0.06) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-6 md:mb-8 overflow-x-auto whitespace-nowrap">
            <Link to="/industries" className="hover:text-gray-900 transition-colors">Industries</Link>
            <span>/</span><span className="text-gray-900">Defense & Military</span>
          </div>
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#70564b]/10 text-[#70564b] px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">Industry: Defense & Military</span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Tactical Intelligence<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #956e5d, #d4a48a)' }}>for National Security</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-10 leading-relaxed">
                Glimmora AEGIS is the AI-native intelligence platform for defense forces — delivering simulation, training, and tactical intelligence at national security scale.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link to="/contact" className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-center">Request Classified Demo</Link>
                <Link to="/platforms/aegis-defense" className="border-2 border-[#70564b]/40 text-[#70564b] hover:bg-[#70564b]/5 font-semibold px-6 sm:px-8 py-3 sm:py-4 transition-all duration-200 inline-flex items-center justify-center">
                  Explore AEGIS
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#F5F3F1]">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-8 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-5">Defense Challenges We Address</h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {CHALLENGES.map((c) => (
                <motion.div key={c.title} variants={fadeUp} className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-8 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-5">Defense Intelligence Platforms</h2>
            </motion.div>
            <motion.div variants={stagger} className="space-y-4 md:space-y-6">
              {PLATFORMS.map((platform) => (
                <motion.div key={platform.name} variants={fadeUp} className="bg-[#F5F3F1] rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">{platform.name}</h3>
                      <span className="text-xs font-semibold bg-brand-maroon text-white px-3 py-1 rounded-full">{platform.badge}</span>
                      {platform.soon && <span className="text-xs font-semibold bg-[#70564b]/10 text-[#70564b] px-2.5 py-1 rounded-full">Coming Soon</span>}
                      {platform.live && <span className="text-xs font-semibold bg-green-50 text-green-600 px-2.5 py-1 rounded-full flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full" />Live</span>}
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{platform.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {platform.modules.map((m) => <span key={m} className="text-xs bg-white text-gray-600 border border-gray-200 px-3 py-1 rounded-full">{m}</span>)}
                    </div>
                  </div>
                  <Link to={platform.path} className="btn-primary px-6 py-3 whitespace-nowrap flex-shrink-0 w-full md:w-auto text-center">Explore Platform</Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <InterestSection
        industryName="Defense"
        heading="Sovereign AI for National Security"
        description="AEGIS Glimmora delivers AI-powered defense simulation, tactical training, and multi-force intelligence — engineered for national security readiness at command scale."
        features={[
          'Multi-force digital twin for joint military operations',
          'Realistic war simulation with AI-driven scenario modeling',
          'Tactical intelligence overlay for mission planning',
          'Sovereign deployment with no data leaving national borders',
        ]}
        color="#5f4940"
        metrics={[
          { name: 'Simulation', value: '98%', change: 'Accuracy' },
          { name: 'Readiness', value: '3x', change: 'Faster' },
          { name: 'Sovereignty', value: '100%', change: 'On-Premise' },
        ]}
        visualLabel="Defense Intelligence"
        formTitle="Request a Defense Briefing"
        formDesc="Connect with our defense team for a classified strategic briefing on AEGIS capabilities."
      />

      <section className="py-12 md:py-20 bg-[#F5F3F1]">
        <div className="section-container text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-5">Ready to Elevate Defense Intelligence?</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-10">
                Connect with our defense team for a classified strategic briefing on Glimmora AEGIS capabilities.
              </p>
              <Link to="/contact" className="btn-primary px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center gap-2">
                Request Classified Briefing
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
