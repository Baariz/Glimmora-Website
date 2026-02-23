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
  { title: 'Guest Personalization at Scale', desc: 'Delivering genuinely personalized luxury experiences across thousands of guests requires AI intelligence beyond traditional CRM systems.' },
  { title: 'Channel Distribution Complexity', desc: 'Managing premium brand positioning across OTAs, GDS, direct channels, and luxury consortia without diluting brand equity.' },
  { title: 'Experience Consistency', desc: 'Maintaining consistent luxury service standards across multiple properties, regions, and staff rotations at global scale.' },
  { title: 'Luxury Brand Intelligence', desc: 'Understanding ultra-high-net-worth traveler preferences, competitive positioning, and emerging luxury market trends.' },
]

const PLATFORMS = [
  {
    name: 'Glimmora Elan',
    badge: 'Primary Platform',
    desc: 'Premium travel and luxury intelligence ecosystem. AI-powered experience personalization, concierge intelligence, and distribution optimization for luxury travel brands.',
    modules: ['Luxury Analytics', 'AI Concierge Layer', 'Booking Intelligence', 'Experience Personalization', 'Premium Distribution'],
    path: '/platforms/elan',
    soon: true,
  },
  {
    name: 'Glimmora Hospitality',
    badge: 'Operations Layer',
    desc: 'For luxury hotel properties within travel groups — comprehensive hospitality intelligence for revenue, operations, and guest experience management.',
    modules: ['Revenue Optimization', 'Guest Intelligence', 'Operational Digital Twin'],
    path: '/platforms/hospitality',
    live: true,
  },
]

export default function TravelLuxury() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-[#F5F3F1] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(112,86,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(112,86,75,0.06) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
            <Link to="/industries" className="hover:text-gray-900 transition-colors">Industries</Link>
            <span>/</span><span className="text-gray-900">Travel & Luxury</span>
          </div>
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#70564b]/10 text-[#70564b] px-4 py-2 mb-6">Industry: Travel & Luxury</span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Luxury Intelligence<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #956e5d, #d4a48a)' }}>Beyond Expectations</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Glimmora Elan brings AI-native intelligence to luxury travel brands — delivering hyper-personalized experiences, premium distribution intelligence, and concierge AI at scale.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary px-8 py-4">Request Demo</Link>
                <Link to="/platforms/elan" className="border-2 border-[#70564b]/40 text-[#70564b] hover:bg-[#70564b]/5 font-semibold px-8 py-4 transition-all duration-200 inline-flex items-center">
                  Explore Elan
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-[#F5F3F1]">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Luxury Travel Challenges We Address</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Luxury Intelligence Platforms</h2>
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
        industryName="Travel & Luxury"
        heading="Intelligence for Premium Travel Brands"
        description="Glimmora Elan delivers AI-powered booking optimization, luxury analytics, and concierge intelligence — helping premium travel brands create unforgettable experiences at scale."
        features={[
          'AI-powered luxury booking and distribution intelligence',
          'Personalized concierge experience for every guest segment',
          'Destination analytics and demand forecasting',
          'Premium brand loyalty and guest retention programs',
        ]}
        color="#956e5d"
        metrics={[
          { name: 'Booking Rate', value: '+22%', change: 'Growth' },
          { name: 'Guest NPS', value: '4.8/5', change: 'Score' },
          { name: 'Retention', value: '35%', change: 'Higher' },
        ]}
        visualLabel="Luxury Travel Intelligence"
        formTitle="Request a Travel & Luxury Demo"
        formDesc="See how Glimmora Elan transforms guest experiences for premium travel brands."
      />

      <section className="py-20 bg-[#F5F3F1]">
        <div className="section-container text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-5">Elevate Your Luxury Travel Brand</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">Discover how Glimmora Elan can transform your luxury travel brand's guest experience and distribution intelligence.</p>
              <Link to="/contact" className="btn-primary px-8 py-4 inline-flex items-center gap-2">Request Demo</Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
