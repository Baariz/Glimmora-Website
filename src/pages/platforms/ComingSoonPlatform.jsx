import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }

// Fixed positions for up to 6 module cards distributed around the center hub
const MODULE_POSITIONS = [
  { top: '4%',    left:  '5%'  },
  { top: '4%',    right: '5%'  },
  { top: '40%',   left:  '0%'  },
  { top: '40%',   right: '0%'  },
  { bottom: '5%', left:  '5%'  },
  { bottom: '5%', right: '5%'  },
]

function PlatformVisual({ platform }) {
  const mods = platform.modules.slice(0, 6)
  const floatAmounts = [-7, 6, -8, 7, -6, 8]

  return (
    <div className="relative w-full h-[440px]">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, rgba(112,86,75,0.25) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#70564b]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Outer pulsing ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 border border-[#70564b]/15 rounded-full pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.15, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Inner pulsing ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 border border-[#70564b]/20 rounded-full pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.2, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Central hub */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white border-2 border-[#70564b]/20 shadow-2xl w-28 h-28 flex flex-col items-center justify-center text-center"
        animate={{
          boxShadow: [
            '0 0 0 0px rgba(112,86,75,0)',
            '0 0 0 14px rgba(112,86,75,0.07)',
            '0 0 0 0px rgba(112,86,75,0)',
          ],
        }}
        transition={{ duration: 2.8, repeat: Infinity }}
      >
        <div className="w-8 h-8 bg-[#70564b]/10 flex items-center justify-center mb-1.5">
          <svg className="w-4 h-4 text-[#70564b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <p className="text-[11px] font-bold text-gray-900 leading-tight px-2">{platform.name}</p>
        <p className="text-[9px] text-[#70564b] mt-0.5 leading-tight px-1 uppercase tracking-wide">
          {platform.category.split(' ')[0]}
        </p>
      </motion.div>

      {/* Connector dots */}
      {[
        { ml: '-90px', mt: '-75px' },
        { ml: '75px',  mt: '-75px' },
        { ml: '-100px',mt: '0px'   },
        { ml: '85px',  mt: '0px'   },
        { ml: '-90px', mt: '75px'  },
        { ml: '75px',  mt: '75px'  },
      ].slice(0, mods.length).map((pos, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#70564b]/40 rounded-full z-10 pointer-events-none"
          style={{ marginLeft: pos.ml, marginTop: pos.mt }}
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.35 }}
        />
      ))}

      {/* Module cards */}
      {mods.map((mod, i) => (
        <motion.div
          key={mod}
          className="absolute bg-white border border-gray-100 shadow-md px-3 py-2 z-30"
          style={{ maxWidth: '148px', ...MODULE_POSITIONS[i] }}
          initial={{ opacity: 0, scale: 0.85, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, floatAmounts[i], 0] }}
          transition={{
            opacity: { delay: 0.3 + i * 0.15, duration: 0.45 },
            scale:   { delay: 0.3 + i * 0.15, duration: 0.45 },
            y: { duration: 2.8 + i * 0.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 + i * 0.25 },
          }}
        >
          <div className="w-1.5 h-1.5 bg-[#70564b] mb-1.5" />
          <p className="text-[11px] font-semibold text-gray-700 leading-snug">{mod}</p>
        </motion.div>
      ))}
    </div>
  )
}

export function ComingSoonPlatform({ platform }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <main className="pt-24">

      {/* ── HERO: two-column ── */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#F5F3F1] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(112,86,75,0.12) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-1/3 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#70564b] opacity-[0.06] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#956e5d] opacity-[0.04] rounded-full blur-[100px] pointer-events-none" />

        <div className="section-container relative z-10">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-6 md:mb-8 lg:mb-12">
            <Link to="/platforms" className="hover:text-gray-900 transition-colors">Platforms</Link>
            <span>/</span>
            <span className="text-gray-900">{platform.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-20 items-center">

            {/* ── LEFT: Content ── */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {/* Badge row */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-5 md:mb-8">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#70564b]/10 text-[#70564b] px-4 py-2">
                  {platform.category}
                </span>
                {!platform.showDemo && (
                  <span className="text-xs font-bold bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5">
                    Launching Soon
                  </span>
                )}
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeUp}
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
              >
                {platform.displayName}
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl font-light text-[#956e5d] mb-5">
                {platform.tagline}
              </motion.p>

              <motion.p variants={fadeUp} className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
                {platform.desc}
              </motion.p>

              {/* Modules */}
              <motion.div variants={fadeUp} className="mb-6 md:mb-8">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                  {platform.showDemo ? 'Core Modules' : 'Planned Modules'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {platform.modules.map((mod) => (
                    <span
                      key={mod}
                      className="bg-[#70564b]/10 border border-[#70564b]/20 text-[#70564b] px-3 py-1.5 text-xs font-medium"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Back link */}
              <motion.div variants={fadeUp}>
                <Link
                  to="/ecosystem"
                  className="text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Explore the full Glimmora Ecosystem
                </Link>
              </motion.div>
            </motion.div>

            {/* ── RIGHT: Animated Visual ── */}
            <div className="hidden lg:block">
              <PlatformVisual platform={platform} />
            </div>

          </div>
        </div>
      </section>

      {/* ── EARLY ACCESS SECTION ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="section-container">
          <div className="max-w-xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              {platform.showDemo ? (
                <>
                  <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-[#70564b] mb-3">
                    Get Started
                  </motion.p>
                  <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    See {platform.displayName} in Action
                  </motion.h2>
                  <motion.p variants={fadeUp} className="text-gray-500 text-sm mb-8 leading-relaxed">
                    Schedule a strategic demo to explore how {platform.displayName} can transform your operations.
                  </motion.p>
                  <motion.div variants={fadeUp}>
                    <Link to="/contact" className="btn-primary px-8 py-4 text-sm inline-block">
                      Book a Demo
                    </Link>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-[#70564b] mb-3">
                    Early Access
                  </motion.p>
                  <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Be First to Deploy {platform.displayName}
                  </motion.h2>
                  <motion.p variants={fadeUp} className="text-gray-500 text-sm mb-8 leading-relaxed">
                    Join our early access program and get priority deployment when {platform.displayName} launches.
                  </motion.p>
                  <motion.div variants={fadeUp}>
                    {submitted ? (
                      <div className="flex items-center justify-center gap-3 text-green-600 bg-green-50 border border-green-200 px-6 py-4">
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-semibold text-sm">You're on the list. We'll be in touch.</span>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your work email"
                          required
                          className="flex-1 bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 px-4 py-3 outline-none focus:border-[#956e5d] transition-colors text-sm"
                        />
                        <button type="submit" className="btn-primary px-6 py-3 text-sm whitespace-nowrap">
                          Request Access
                        </button>
                      </form>
                    )}
                  </motion.div>
                </>
              )}

              {platform.target && (
                <motion.p variants={fadeUp} className="text-xs text-gray-400 mt-5">
                  Built for: {platform.target}
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  )
}
