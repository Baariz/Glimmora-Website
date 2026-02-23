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
  { title: 'Content ROI Uncertainty', desc: 'Studios and distributors invest hundreds of millions in content with limited data-driven insights into audience reception and commercial performance.' },
  { title: 'Audience Intelligence Gap', desc: 'Understanding audience preferences across demographics, geographies, and viewing platforms requires AI intelligence beyond traditional market research.' },
  { title: 'OTT Disruption', desc: 'Traditional cinema chains and studios face existential pressure from streaming platforms — requiring intelligent distribution and content strategies.' },
  { title: 'Production Intelligence', desc: 'Production cost optimization, casting intelligence, and market timing decisions need AI-powered analytics for competitive advantage.' },
]

const PLATFORMS = [
  {
    name: 'Glimmora Film',
    badge: 'Primary Platform',
    desc: 'Cinema and entertainment content intelligence platform. Audience analytics, box office prediction, distribution optimization, and production intelligence for studios and entertainment groups.',
    modules: ['Audience Intelligence', 'Content Analytics', 'Box Office Prediction', 'Distribution AI', 'Production Intelligence'],
    path: '/platforms/film',
    soon: true,
  },
  {
    name: 'Glimmora Reach',
    badge: 'Market Intelligence',
    desc: 'AI-powered market intelligence and audience outreach for entertainment brands. Connect content analytics with targeted promotional campaigns.',
    modules: ['Market Intelligence', 'Audience Outreach AI', 'Campaign Analytics'],
    path: '/platforms/reach',
    soon: true,
  },
]

export default function Cinema() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-[#F5F3F1] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(112,86,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(112,86,75,0.06) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
            <Link to="/industries" className="hover:text-gray-900 transition-colors">Industries</Link>
            <span>/</span><span className="text-gray-900">Cinema & Entertainment</span>
          </div>
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#70564b]/10 text-[#70564b] px-4 py-2 mb-6">Industry: Cinema & Entertainment</span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Content Intelligence<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #956e5d, #d4a48a)' }}>for the Entertainment Era</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Glimmora Film delivers AI-native intelligence to studios, distributors, and cinema chains — predicting box office performance, understanding audiences, and optimizing content distribution.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary px-8 py-4">Request Demo</Link>
                <Link to="/platforms/film" className="border-2 border-[#70564b]/40 text-[#70564b] hover:bg-[#70564b]/5 font-semibold px-8 py-4 transition-all duration-200 inline-flex items-center">Explore Film</Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-[#F5F3F1]">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Cinema Challenges We Address</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Entertainment Intelligence Platforms</h2>
            </motion.div>
            <motion.div variants={stagger} className="space-y-6">
              {PLATFORMS.map((platform) => (
                <motion.div key={platform.name} variants={fadeUp} className="bg-[#F5F3F1] rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                      <span className="text-xs font-semibold bg-brand-maroon text-white px-3 py-1 rounded-full">{platform.badge}</span>
                      {platform.soon && <span className="text-xs font-semibold bg-[#70564b]/10 text-[#70564b] px-2.5 py-1 rounded-full">Coming Soon</span>}
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
        industryName="Cinema & Entertainment"
        heading="Content Intelligence for the Modern Studio"
        description="Glimmora Film uses AI to predict box office performance, understand audience behaviour, and optimize content distribution across theatrical and digital channels."
        features={[
          'Box office prediction with 90%+ accuracy before release',
          'Audience intelligence for targeted content decisions',
          'Distribution channel optimization for maximum ROI',
          'Production cost vs. revenue forecasting intelligence',
        ]}
        color="#5f4940"
        metrics={[
          { name: 'Prediction', value: '91%', change: 'Accuracy' },
          { name: 'Content ROI', value: '+33%', change: 'Higher' },
          { name: 'Distribution', value: '60%', change: 'Optimized' },
        ]}
        visualLabel="Cinema Intelligence"
        formTitle="Request a Cinema Demo"
        formDesc="See how Glimmora Film transforms content intelligence for studios and distributors."
      />

      <section className="py-20 bg-[#F5F3F1]">
        <div className="section-container text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-5">Intelligence that Moves the Industry</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">Discover how Glimmora Film can transform your content intelligence and audience strategy.</p>
              <Link to="/contact" className="btn-primary px-8 py-4 inline-flex items-center gap-2">Request Demo</Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
