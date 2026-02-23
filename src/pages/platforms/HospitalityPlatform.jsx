import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// ── Hotel Intelligence Visual ──────────────────────────────────────
const HOTEL_METRICS = [
  { label: 'RevPAR', value: '₹8,450', change: '+15%' },
  { label: 'Occupancy', value: '87%', change: '+8%' },
  { label: 'Direct', value: '64%', change: '+30%' },
]
const BAR_HEIGHTS = [48, 62, 55, 78, 71, 85, 92]

function HotelVisual() {
  return (
    <div className="relative">
      <div className="bg-white border border-gray-100 shadow-xl p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">Hospitality Intelligence</p>
            <p className="text-sm font-bold text-gray-900 mt-0.5">Revenue Command Center</p>
          </div>
          <span className="text-[10px] font-bold bg-green-50 text-green-600 px-2.5 py-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Live
          </span>
        </div>

        {/* KPI metrics */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {HOTEL_METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              className="bg-gray-50 p-3 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.35 }}
            >
              <p className="text-[10px] text-gray-400 mb-1">{m.label}</p>
              <p className="text-sm font-bold text-gray-900">{m.value}</p>
              <p className="text-[10px] font-semibold text-green-600">{m.change}</p>
            </motion.div>
          ))}
        </div>

        {/* Bar chart */}
        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">7-Day Occupancy</p>
        <div className="flex items-end gap-1.5 h-20 mb-1">
          {BAR_HEIGHTS.map((val, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-[#70564b]/20"
              style={{ height: `${val}%`, originY: 1 }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: i * 0.08 + 0.55, duration: 0.4, ease: 'easeOut' }}
            />
          ))}
        </div>
        <div className="flex justify-between">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            <p key={i} className="flex-1 text-center text-[9px] text-gray-400">{d}</p>
          ))}
        </div>

        {/* Guest satisfaction */}
        <div className="mt-5 flex items-center justify-between bg-[#F5F3F1] px-3 py-2.5">
          <p className="text-xs text-gray-600 font-medium">Guest Satisfaction Score</p>
          <div className="flex items-center gap-1.5">
            <motion.div
              className="h-1.5 bg-[#70564b]"
              style={{ width: '0%' }}
              animate={{ width: '91%' }}
              transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
            />
            <span className="text-xs font-bold text-[#70564b]">4.7 / 5</span>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -bottom-4 -left-4 bg-[#956e5d] text-white px-4 py-3 shadow-lg"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.4 }}
      >
        <p className="text-[10px] uppercase tracking-wide opacity-70">RevPAR Growth</p>
        <p className="text-2xl font-bold">+15%</p>
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
  { name: 'AI-Powered PMS', desc: 'Intelligent property management system that learns from guest behavior, automates operations, and reduces front desk workload by 60%.' },
  { name: 'Revenue Optimization', desc: 'Dynamic pricing intelligence that analyzes demand signals, competitor rates, and events to maximize RevPAR across all room categories.' },
  { name: 'Distribution Intelligence', desc: 'Smart channel management that optimizes rate parity, shifts booking mix toward direct, and reduces OTA commission dependency.' },
  { name: 'Guest Intelligence Layer', desc: 'AI-powered guest profiling that enables hyper-personalized pre-arrival, in-stay, and post-stay experiences across your entire portfolio.' },
  { name: 'Digital Twin for Hotels', desc: 'Real-time simulation of your hotel operations — predictive maintenance, staffing optimization, and energy management intelligence.' },
]

const OUTCOMES = [
  { metric: '15%', label: 'Increase in RevPAR' },
  { metric: '30%', label: 'Direct booking growth' },
  { metric: '60%', label: 'Reduction in front desk workload' },
  { metric: '25%', label: 'Operational cost savings' },
]

export default function HospitalityPlatform() {
  const [demoEmail, setDemoEmail] = useState('')
  const [demoSubmitted, setDemoSubmitted] = useState(false)

  return (
    <main className="pt-24">
      <section className="py-20 bg-[#F5F3F1] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(112,86,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(112,86,75,0.06) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#956e5d] opacity-10 rounded-full blur-[120px]" />
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
            <Link to="/platforms" className="hover:text-gray-900 transition-colors">Platforms</Link>
            <span>/</span><span className="text-gray-900">Hospitality</span>
          </div>
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#70564b]/10 text-[#70564b] px-4 py-2">Hospitality Industry Platform</span>
                <span className="text-xs font-bold bg-green-500 text-white px-3 py-1.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" /> Live
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Glimmora Hospitality<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #956e5d, #d4a48a)' }}>AGI-Native Intelligence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                The operating brain for modern hospitality groups. Glimmora Hospitality unifies guest intelligence, revenue optimization, and operational digital twins into a single real-time command center.
              </p>
              <p className="text-gray-500 mb-10">Target: Hospitality COOs · Revenue Managers · General Managers · Hotel Groups</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary px-8 py-4">Request Demo</Link>
                <Link to="/solutions/glimmora" className="border-2 border-[#70564b]/40 text-[#70564b] hover:bg-[#70564b]/5 font-semibold px-8 py-4 transition-all duration-200 inline-flex items-center">Detailed Platform View</Link>
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

      <section className="py-24 bg-[#F5F3F1]">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-brand-maroon mb-3">Platform Modules</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Five Modules. One Intelligence Layer.</h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MODULES.map((m, i) => (
                <motion.div key={m.name} variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-brand-maroon rounded-xl flex items-center justify-center text-white font-bold mb-5">{i + 1}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{m.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
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
                  Intelligence That<br />Runs Your Hotel
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Glimmora Hospitality processes your property data in real time — dynamically optimizing pricing, predicting maintenance needs, and personalizing every guest touchpoint automatically.
                </p>
                <ul className="space-y-3 mb-10">
                  {[
                    'Dynamic RevPAR optimization across room categories',
                    'Direct booking intelligence to reduce OTA dependency',
                    'Guest preference profiling and hyper-personalization',
                    'Predictive maintenance and staffing optimization',
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
                  <p className="font-bold text-gray-900 mb-1">Request a Property Demo</p>
                  <p className="text-gray-500 text-sm mb-4">See how Glimmora Hospitality transforms revenue performance for your property portfolio.</p>
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
              <HotelVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F3F1]">
        <div className="section-container text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-5">Transform Your Hotel Operations</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">See Glimmora Hospitality in action — a demo tailored to your property portfolio and revenue goals.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary px-8 py-4">Request Demo</Link>
                <Link to="/solutions/glimmora" className="btn-secondary px-8 py-4">Full Platform Details</Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
