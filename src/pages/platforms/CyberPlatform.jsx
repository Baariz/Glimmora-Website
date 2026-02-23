import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
function AnimatedSection({ children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>{children}</motion.div>
}

const MODULES = [
  { name: '24/7 SOC Operations', desc: 'Round-the-clock Security Operations Center powered by AI threat detection, with human analysts for critical incident response.' },
  { name: 'AI Threat Intelligence', desc: 'Real-time threat intelligence feeds aggregated from global sources, analyzed by AI to identify threats relevant to your organization.' },
  { name: 'Compliance Monitoring', desc: 'Continuous monitoring of your security posture against regulatory frameworks including ISO 27001, NIST, SOC 2, and regional requirements.' },
  { name: 'Incident Response', desc: 'AI-accelerated incident response with automated containment playbooks and expert-led forensic investigation capabilities.' },
  { name: 'Cloud Security', desc: 'Multi-cloud security posture management covering AWS, Azure, and Google Cloud with real-time misconfiguration detection.' },
  { name: 'Vulnerability Management', desc: 'Continuous vulnerability scanning with AI-prioritized remediation guidance based on actual exploitability and business impact.' },
]

const OUTCOMES = [
  { metric: '90%', label: 'Faster threat detection' },
  { metric: '24/7', label: 'SOC coverage' },
  { metric: '60%', label: 'Reduction in alert fatigue' },
  { metric: 'ISO 27001', label: 'Ready architecture' },
]

export default function CyberPlatform() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-[#F5F3F1] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(112,86,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(112,86,75,0.06) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4a3830] opacity-20 rounded-full blur-[120px]" />
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
            <Link to="/platforms" className="hover:text-gray-900 transition-colors">Platforms</Link>
            <span>/</span><span className="text-gray-900">Cyber</span>
          </div>
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#70564b]/10 text-[#70564b] px-4 py-2">Enterprise & Defense Security</span>
                <span className="text-xs font-bold bg-green-500 text-white px-3 py-1.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" /> Live
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Glimmora Cyber<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #956e5d, #d4a48a)' }}>Sovereign Security Intelligence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                24/7 cybersecurity and threat intelligence for enterprises, defense organizations, and governments. AI-driven SOC operations, continuous compliance monitoring, and sovereign deployment options.
              </p>
              <p className="text-gray-500 mb-10">Target: CISOs · IT Security Leaders · Defense Organizations · Government Agencies</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary px-8 py-4">Request Security Assessment</Link>
                <Link to="/services/cybersecurity-soc" className="border-2 border-[#70564b]/40 text-[#70564b] hover:bg-[#70564b]/5 font-semibold px-8 py-4 transition-all duration-200 inline-flex items-center">View Service Details</Link>
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
                  <p className="text-3xl font-bold text-brand-maroon mb-2">{o.metric}</p>
                  <p className="text-sm text-gray-600">{o.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-[#F5F3F1]">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-brand-maroon mb-3">Platform Modules</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Six Security Modules.<br />One Sovereign Layer.</h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MODULES.map((m, i) => (
                <motion.div key={m.name} variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-[#4a3830] rounded-xl flex items-center justify-center text-white font-bold mb-5">{i + 1}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{m.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-[#F5F3F1]">
        <div className="section-container text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-5">Secure Your Enterprise with Glimmora Cyber</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">Start with a free security assessment and discover your threat exposure before it becomes a breach.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary px-8 py-4">Request Security Assessment</Link>
                <Link to="/services/cybersecurity-soc" className="btn-secondary px-8 py-4">View Full Service Details</Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
