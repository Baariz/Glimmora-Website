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
  { title: 'Regulatory Compliance', desc: 'Healthcare organizations face complex, ever-changing regulations across patient data, clinical standards, and medical device compliance.' },
  { title: 'Patient Data Security', desc: 'Protecting sensitive patient information while enabling data-driven care requires sophisticated cybersecurity and governance frameworks.' },
  { title: 'Operational Inefficiency', desc: 'Fragmented clinical and operational systems create waste, delay care delivery, and reduce staff productivity.' },
  { title: 'Clinical Quality & Audit', desc: 'Maintaining clinical quality standards and demonstrating compliance through continuous audit processes is resource-intensive.' },
]

const PLATFORMS = [
  {
    name: 'Glimmora VerifAI',
    badge: 'Compliance Platform',
    desc: 'Healthcare compliance intelligence. Automate regulatory reporting, manage vendor and supplier risk, and streamline clinical audit workflows across your healthcare network.',
    modules: ['Healthcare GRC', 'Clinical Audit Automation', 'Vendor Risk (TPRM)', 'Regulatory Reporting', 'Document Intelligence'],
    path: '/platforms/verifai',
    live: true,
  },
  {
    name: 'Glimmora Cyber',
    badge: 'Security Layer',
    desc: 'Healthcare-grade cybersecurity. HIPAA-compliant threat monitoring, medical device security, and patient data protection infrastructure.',
    modules: ['HIPAA Compliance Monitoring', 'Medical Device Security', 'Patient Data Protection', '24/7 SOC'],
    path: '/platforms/cyber',
    soon: true,
  },
  {
    name: 'Glimmora ASCEND Vitalis',
    badge: 'Training Platform',
    desc: 'Medical simulation, clinical training, and healthcare workforce development. AI-driven scenarios for surgical procedures, emergency response, and patient care.',
    modules: ['Surgical Simulation', 'Clinical Scenario Engine', 'Emergency Response Training', 'Certification Tracking'],
    path: '/platforms/ascend-vitalis',
    soon: true,
  },
]

export default function Healthcare() {
  return (
    <main className="pt-24">
      <section className="py-12 md:py-20 bg-[#F5F3F1] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(112,86,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(112,86,75,0.06) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-6 md:mb-8 overflow-x-auto whitespace-nowrap">
            <Link to="/industries" className="hover:text-gray-900 transition-colors">Industries</Link>
            <span>/</span><span className="text-gray-900">Healthcare</span>
          </div>
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#70564b]/10 text-[#70564b] px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">Industry: Healthcare</span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Healthcare Intelligence<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #956e5d, #d4a48a)' }}>that Protects & Optimizes</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-10 leading-relaxed">
                Glimmora brings AI-native compliance, cybersecurity, and operational intelligence to hospitals, clinics, and healthcare networks — ensuring regulatory excellence while improving patient outcomes.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link to="/contact" className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-center">Request Demo</Link>
                <Link to="/platforms/verifai" className="border-2 border-[#70564b]/40 text-[#70564b] hover:bg-[#70564b]/5 font-semibold px-6 sm:px-8 py-3 sm:py-4 transition-all duration-200 inline-flex items-center justify-center">
                  Explore VerifAI
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-5">Healthcare Challenges We Address</h2>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-5">Healthcare Intelligence Platforms</h2>
            </motion.div>
            <motion.div variants={stagger} className="space-y-4 md:space-y-6">
              {PLATFORMS.map((platform) => (
                <motion.div key={platform.name} variants={fadeUp} className="bg-[#F5F3F1] rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">{platform.name}</h3>
                      <span className="text-xs font-semibold bg-brand-maroon text-white px-3 py-1 rounded-full">{platform.badge}</span>
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
        industryName="Healthcare"
        heading="AI Compliance for Regulated Healthcare"
        description="Healthcare organizations face the strictest compliance requirements — VerifAI automates HIPAA monitoring, vendor risk management, and audit workflows so your team can focus on patient outcomes."
        features={[
          'HIPAA and healthcare regulatory compliance automation',
          'Medical vendor risk assessment and monitoring',
          'Patient data sovereignty and security intelligence',
          'Automated internal audit for clinical operations',
        ]}
        color="#70564b"
        metrics={[
          { name: 'Compliance', value: '99%', change: 'Automated' },
          { name: 'Audit Time', value: '50%', change: 'Reduced' },
          { name: 'Vendor Risk', value: '100%', change: 'Monitored' },
        ]}
        visualLabel="Healthcare Compliance AI"
        formTitle="Request a Healthcare Demo"
        formDesc="See how Glimmora VerifAI handles HIPAA compliance and vendor risk across your healthcare network."
      />

      <section className="py-12 md:py-20 bg-[#F5F3F1]">
        <div className="section-container text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-5">Elevate Healthcare Intelligence</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-10">Deploy AI-native compliance and security intelligence across your healthcare network.</p>
              <Link to="/contact" className="btn-primary px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center gap-2">Request Strategic Demo</Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
