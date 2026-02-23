import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.div>
  )
}

const INDUSTRIES = [
  {
    name: 'Enterprise',
    tagline: 'Governance Intelligence for Regulated Organizations',
    desc: 'AI-native compliance, risk management, and governance for banks, insurance companies, energy firms, and regulated enterprises worldwide.',
    challenges: ['Regulatory Complexity', 'Cyber Risk Exposure', 'Compliance Burden', 'Audit Inefficiency'],
    platforms: [
      { name: 'Glimmora VerifAI', path: '/platforms/verifai' },
      { name: 'Cyber Glimmora', path: '/platforms/cyber' },
      { name: 'Glimmora Reach', path: '/platforms/reach' },
    ],
    path: '/industries/enterprise',
    color: '#70564b',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    name: 'Defense & Military',
    tagline: 'Tactical & Simulation Intelligence for National Security',
    desc: 'AI-powered defense training, simulation, and tactical intelligence for armies, navies, air forces, and national security agencies.',
    challenges: ['Training Gap', 'Simulation Limitations', 'Autonomous Intelligence Needs', 'National Security Readiness'],
    platforms: [
      { name: 'AEGIS Glimmora', path: '/platforms/aegis-defense' },
      { name: 'Cyber Glimmora', path: '/platforms/cyber' },
    ],
    path: '/industries/defense',
    color: '#4a3830',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    name: 'Hospitality',
    tagline: 'Revenue & Guest Intelligence for Hotels & Resorts',
    desc: 'The complete AI intelligence layer for hotel chains, resorts, and hospitality groups. From revenue optimization to guest experience personalization.',
    challenges: ['Revenue Pressure', 'OTA Dependency', 'Fragmented PMS Systems', 'Low Intelligence Layer'],
    platforms: [
      { name: 'Glimmora Hospitality', path: '/platforms/hospitality' },
      { name: 'Glimmora VerifAI', path: '/platforms/verifai' },
    ],
    path: '/industries/hospitality',
    color: '#956e5d',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    name: 'Healthcare',
    tagline: 'Clinical Compliance & Patient Intelligence',
    desc: 'AI-powered compliance, operational intelligence, and patient analytics for hospitals, clinics, and healthcare networks.',
    challenges: ['Regulatory Compliance', 'Patient Data Security', 'Operational Inefficiency', 'Clinical Quality'],
    platforms: [
      { name: 'Glimmora VerifAI', path: '/platforms/verifai' },
      { name: 'Cyber Glimmora', path: '/platforms/cyber' },
    ],
    path: '/industries/healthcare',
    color: '#70564b',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    name: 'Travel & Luxury',
    tagline: 'Premium Experience & Distribution Intelligence',
    desc: 'Luxury intelligence for premium travel brands, destination management organizations, and high-end resorts.',
    challenges: ['Guest Personalization', 'Channel Distribution', 'Experience Consistency', 'Luxury Brand Positioning'],
    platforms: [
      { name: 'Elan Glimmora', path: '/platforms/elan' },
      { name: 'Glimmora Hospitality', path: '/platforms/hospitality' },
    ],
    path: '/industries/travel-luxury',
    color: '#956e5d',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    name: 'Fashion',
    tagline: 'Trend Intelligence & Retail AI',
    desc: 'AI-powered trend forecasting, inventory optimization, and customer intelligence for fashion brands and retail groups.',
    challenges: ['Trend Forecasting', 'Inventory Waste', 'Customer Intelligence', 'Brand Positioning'],
    platforms: [
      { name: 'Moda Glimmora', path: '/platforms/moda' },
      { name: 'Glimmora Reach', path: '/platforms/reach' },
    ],
    path: '/industries/fashion',
    color: '#70564b',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    name: 'Cinema & Entertainment',
    tagline: 'Content Intelligence & Audience Analytics',
    desc: 'AI platform for studios, distributors, and cinema chains. Content performance prediction, audience intelligence, and distribution optimization.',
    challenges: ['Content ROI', 'Audience Intelligence', 'Distribution Optimization', 'OTT Competition'],
    platforms: [
      { name: 'Film Glimmora', path: '/platforms/film' },
      { name: 'Glimmora Reach', path: '/platforms/reach' },
    ],
    path: '/industries/cinema',
    color: '#5f4940',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375z" />
      </svg>
    ),
  },
  {
    name: 'Public Sector',
    tagline: 'Sovereign AI for Government & Public Institutions',
    desc: 'Secure, sovereign AI platforms for government agencies, public institutions, and national organizations with data sovereignty requirements.',
    challenges: ['Data Sovereignty', 'Regulatory Compliance', 'Operational Efficiency', 'Citizen Service Quality'],
    platforms: [
      { name: 'Glimmora VerifAI', path: '/platforms/verifai' },
      { name: 'AEGIS Glimmora', path: '/platforms/aegis-defense' },
      { name: 'Cyber Glimmora', path: '/platforms/cyber' },
    ],
    path: '/industries/public-sector',
    color: '#4a3830',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
]

export default function Industries() {
  return (
    <main className="pt-24">

      {/* HERO — light background */}
      <section className="py-20 bg-[#F5F3F1] relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(112,86,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(112,86,75,0.06) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#70564b] opacity-5 rounded-full blur-[120px] pointer-events-none" />

        <div className="section-container relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#70564b]/10 text-[#70564b] px-4 py-2 mb-6" style={{ borderRadius: 0 }}>
                Industry Intelligence
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Purpose-Built Intelligence<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #70564b, #956e5d)' }}>
                  for Every Industry
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Glimmora doesn't deploy generic AI. Every industry gets purpose-built intelligence platforms with sector-specific modules, compliance frameworks, and operational expertise.
              </p>
              <div className="flex flex-wrap gap-6">
                {[{ value: '8+', label: 'Industries Served' }, { value: '12+', label: 'AI Platforms' }, { value: '6', label: 'Global Offices' }].map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-bold text-[#70564b]">{s.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Industry Solutions → Platform Modules
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Each industry page maps real-world challenges to specific Glimmora platform solutions. We don't offer the same software to every sector — we build dedicated intelligence layers for each one.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="py-20 bg-[#F5F3F1]">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {INDUSTRIES.map((industry) => (
                <motion.div key={industry.name} variants={fadeUp}>
                  <Link
                    to={industry.path}
                    className="group flex flex-col bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full border border-gray-100 hover:border-transparent"
                  >
                    {/* Colored header band */}
                    <div className="p-6" style={{ borderTop: `3px solid ${industry.color}` }}>
                      <div className="flex items-start gap-4">
                        <div
                          className="w-14 h-14 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                          style={{ background: `${industry.color}15`, color: industry.color }}
                        >
                          {industry.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-maroon transition-colors">{industry.name}</h3>
                          <p className="text-sm mt-0.5" style={{ color: industry.color }}>{industry.tagline}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 px-6 pb-6">
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">{industry.desc}</p>

                      {/* Challenges */}
                      <div className="mb-5">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Key Challenges</p>
                        <div className="flex flex-wrap gap-2">
                          {industry.challenges.map((c) => (
                            <span key={c} className="text-xs bg-gray-100 text-gray-600 px-3 py-1">{c}</span>
                          ))}
                        </div>
                      </div>

                      {/* Platforms */}
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Glimmora Platforms</p>
                        <div className="flex flex-wrap gap-2">
                          {industry.platforms.map((p) => (
                            <span key={p.name} className="text-xs font-medium px-3 py-1" style={{ background: `${industry.color}15`, color: industry.color }}>
                              ✓ {p.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 flex items-center text-sm font-semibold" style={{ color: industry.color }}>
                        <span>Explore {industry.name} Solutions</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-5">Find Your Industry Intelligence Layer</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                Our strategic team will design a custom intelligence roadmap tailored to your industry's regulatory, operational, and competitive challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary px-8 py-4">
                  Request Strategic Demo
                </Link>
                <Link to="/ecosystem" className="btn-secondary px-8 py-4">
                  View Full Ecosystem
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
