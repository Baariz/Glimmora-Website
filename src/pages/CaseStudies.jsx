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

const CASE_STUDIES = [
  {
    industry: 'Enterprise & Compliance',
    platform: 'Glimmora VerifAI',
    title: 'Global Bank Reduces Audit Preparation Time by 40%',
    challenge: 'A Tier-1 bank across 5 countries struggled with fragmented GRC tools, manual audit workpapers, and inability to demonstrate real-time regulatory compliance to their board.',
    solution: 'Deployed Glimmora VerifAI across GRC, Internal Audit, and TPRM modules — creating a unified compliance command center with automated evidence collection.',
    outcomes: ['40% reduction in audit preparation time', 'Real-time board compliance dashboard', 'Unified vendor risk visibility across 500+ suppliers', '100% audit finding traceability'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    path: '/platforms/verifai',
    tag: 'GRC & Compliance',
  },
  {
    industry: 'Hospitality',
    platform: 'Glimmora Hospitality',
    title: 'Luxury Hotel Chain Increases RevPAR by 18% in 6 Months',
    challenge: 'A 12-property luxury hotel chain across the Middle East was losing revenue to OTA over-dependency, had fragmented PMS data, and lacked real-time revenue intelligence.',
    solution: 'Implemented Glimmora Hospitality with Dynamic Pricing Intelligence, Distribution Intelligence, and Guest AI — creating a unified real-time revenue command center.',
    outcomes: ['18% increase in RevPAR within 6 months', '32% growth in direct bookings', '25% reduction in OTA commission costs', 'Unified guest intelligence across all 12 properties'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
    path: '/platforms/hospitality',
    tag: 'Hospitality Intelligence',
  },
  {
    industry: 'Enterprise Cybersecurity',
    platform: 'Glimmora Cyber',
    title: 'Regional Bank Achieves ISO 27001 Compliance & Eliminates 3 Security Incidents',
    challenge: 'A regional bank faced escalating cyber threats, regulatory non-compliance with ISO 27001, and an overwhelmed IT team managing security reactively without intelligence.',
    solution: 'Deployed Glimmora Cyber with 24/7 SOC operations, AI threat intelligence, and continuous compliance monitoring aligned to ISO 27001 and local central bank requirements.',
    outcomes: ['ISO 27001 certification achieved in 4 months', '90% faster threat detection & response', '3 major security incidents prevented', '60% reduction in security alert fatigue'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    path: '/platforms/cyber',
    tag: 'Cybersecurity',
  },
  {
    industry: 'Financial Services',
    platform: 'Glimmora VerifAI — TPRM',
    title: 'Insurance Group Cuts Vendor Onboarding from 45 Days to 22 Days',
    challenge: 'A large insurance group was spending 45+ days onboarding new vendors due to manual due diligence, disconnected compliance tools, and lack of ongoing vendor monitoring.',
    solution: 'Implemented Glimmora VerifAI TPRM with automated vendor risk assessments, digital due diligence workflows, and continuous vendor performance monitoring.',
    outcomes: ['Vendor onboarding cut from 45 to 22 days', 'Automated due diligence for 200+ vendors', 'Real-time vendor risk scoring dashboard', 'Zero compliance gaps in external audit'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    path: '/platforms/verifai',
    tag: 'Third-Party Risk',
  },
]

export default function CaseStudies() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="py-20 bg-[#F5F3F1] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(112,86,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(112,86,75,0.06) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#70564b]/10 text-[#70564b] px-4 py-2 mb-6">
                Intelligence in Action
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Case Studies
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Real outcomes. Real transformations. See how Glimmora's intelligence platforms are reshaping enterprises, hospitality groups, and regulated industries across the globe.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 bg-[#F5F3F1]">
        <div className="section-container">
          <AnimatedSection>
            <motion.div variants={stagger} className="space-y-10">
              {CASE_STUDIES.map((cs, i) => (
                <motion.div key={cs.title} variants={fadeUp} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`relative h-64 lg:h-auto ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <img src={cs.image} alt={cs.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2E2A28]/70 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-xs font-bold bg-[#70564b] text-white px-3 py-1.5 rounded-full">{cs.tag}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-10 md:p-14 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-semibold text-brand-maroon uppercase tracking-wide">{cs.industry}</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-xs font-semibold text-gray-400">{cs.platform}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">{cs.title}</h2>

                      <div className="mb-5">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Challenge</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Solution</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                      </div>

                      <div className="mb-8">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Outcomes</p>
                        <ul className="space-y-2">
                          {cs.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-center gap-3 text-sm text-gray-700">
                              <svg className="w-4 h-4 text-brand-maroon flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link to={cs.path} className="btn-primary px-6 py-3 inline-flex items-center gap-2">
                        Explore {cs.platform}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5F3F1]">
        <div className="section-container text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-5">Your Transformation Starts Here</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                Join the enterprises, hotel groups, and governments already operating with Glimmora's intelligence layer. Request a strategic demo tailored to your industry and challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary px-8 py-4 inline-flex items-center gap-2">
                  Request Strategic Demo
                </Link>
                <Link to="/platforms" className="btn-secondary px-8 py-4 inline-flex items-center gap-2">
                  Explore All Platforms
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
