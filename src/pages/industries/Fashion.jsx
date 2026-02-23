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
  { title: 'Trend Forecasting Accuracy', desc: 'Fashion brands struggle to predict trend cycles accurately, leading to over-investment in slow-moving styles and missed commercial opportunities.' },
  { title: 'Inventory Waste', desc: 'Excess inventory and markdowns cost the fashion industry billions annually — AI-powered demand forecasting can reduce this dramatically.' },
  { title: 'Customer Intelligence', desc: 'Understanding fast-moving consumer preferences across channels, demographics, and geographies requires sophisticated AI analytics.' },
  { title: 'Brand Positioning', desc: 'Maintaining brand equity while competing across price points, channels, and fast-fashion disruption requires strategic intelligence.' },
]

const PLATFORMS = [
  {
    name: 'Glimmora Moda',
    badge: 'Primary Platform',
    desc: 'Fashion and retail trend intelligence ecosystem. AI-powered trend forecasting, inventory optimization, and customer analytics for fashion brands and retail groups.',
    modules: ['Trend Forecasting AI', 'Inventory Intelligence', 'Customer Analytics', 'Retail Operations AI', 'Brand Intelligence'],
    path: '/platforms/moda',
    soon: true,
  },
  {
    name: 'Glimmora Reach',
    badge: 'Market Intelligence',
    desc: 'AI-powered market intelligence and outreach for fashion brands. Connect trend data with targeted customer engagement and market expansion strategy.',
    modules: ['Market Intelligence', 'Brand Reach Analytics', 'Customer Engagement AI'],
    path: '/platforms/reach',
    soon: true,
  },
]

export default function Fashion() {
  return (
    <main className="pt-24">
      <section className="py-20 bg-[#F5F3F1] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(112,86,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(112,86,75,0.06) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="section-container relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
            <Link to="/industries" className="hover:text-gray-900 transition-colors">Industries</Link>
            <span>/</span><span className="text-gray-900">Fashion</span>
          </div>
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#70564b]/10 text-[#70564b] px-4 py-2 mb-6">Industry: Fashion & Retail</span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                The Intelligence Layer<br />
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #956e5d, #d4a48a)' }}>for Fashion</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Glimmora Moda brings AI-native trend intelligence, inventory optimization, and customer analytics to fashion brands and retail groups — turning data into design decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary px-8 py-4">Request Demo</Link>
                <Link to="/platforms/moda" className="border-2 border-[#70564b]/40 text-[#70564b] hover:bg-[#70564b]/5 font-semibold px-8 py-4 transition-all duration-200 inline-flex items-center">Explore Moda</Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-[#F5F3F1]">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Fashion Challenges We Address</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Fashion Intelligence Platforms</h2>
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
        industryName="Fashion & Retail"
        heading="AI Intelligence for Fashion Brands"
        description="Glimmora Moda forecasts trends, optimizes inventory, and personalizes customer journeys — helping fashion brands eliminate waste and increase sell-through rates."
        features={[
          'AI trend forecasting months ahead of market cycles',
          'Smart inventory optimization to reduce dead stock',
          'Customer intelligence for personalized retail experiences',
          'Real-time brand performance and competitor analytics',
        ]}
        color="#70564b"
        metrics={[
          { name: 'Sell-Through', value: '+28%', change: 'Improved' },
          { name: 'Dead Stock', value: '40%', change: 'Reduced' },
          { name: 'Forecast', value: '94%', change: 'Accuracy' },
        ]}
        visualLabel="Fashion & Retail Intelligence"
        formTitle="Request a Fashion Demo"
        formDesc="See how Glimmora Moda transforms trend intelligence and inventory for your fashion brand."
      />

      <section className="py-20 bg-[#F5F3F1]">
        <div className="section-container text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-5">Intelligence that Defines Fashion's Future</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">Discover how Glimmora Moda can transform your fashion brand's intelligence and decision-making.</p>
              <Link to="/contact" className="btn-primary px-8 py-4 inline-flex items-center gap-2">Request Demo</Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
