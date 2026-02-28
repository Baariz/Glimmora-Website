import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }

function AnimatedSection({ children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>
      {children}
    </motion.div>
  )
}

// Generic intelligence visual — adapts colour to industry
function IntelligenceVisual({ color = '#70564b', metrics = [], label = 'Industry Intelligence' }) {
  const defaultMetrics = [
    { name: 'AI Coverage',    value: '100%', change: 'Automated' },
    { name: 'Time Saved',     value: '60%',  change: 'vs Manual'  },
    { name: 'Accuracy',       value: '97%',  change: 'AI-driven'  },
  ]
  const displayMetrics = metrics.length >= 3 ? metrics.slice(0, 3) : defaultMetrics

  const floatingItems = [
    'Real-time Insights',
    'AI Automation',
    'Predictive Analytics',
    'Custom Reporting',
    'Data Sovereignty',
  ]

  return (
    <div className="relative">
      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: `${color}0a` }}
      />

      <div className="bg-white border border-gray-100 shadow-xl p-6 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
            <p className="text-sm font-bold text-gray-900 mt-0.5">Intelligence Dashboard</p>
          </div>
          <motion.span
            className="text-[10px] font-bold px-2.5 py-1 flex items-center gap-1"
            style={{ backgroundColor: `${color}15`, color }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
            Glimmora AI
          </motion.span>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {displayMetrics.map((m, i) => (
            <motion.div
              key={m.name}
              className="bg-gray-50 p-3 text-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.35 }}
            >
              <p className="text-[10px] text-gray-400 mb-1">{m.name}</p>
              <p className="text-sm font-bold text-gray-900">{m.value}</p>
              <p className="text-[10px] font-semibold" style={{ color }}>{m.change}</p>
            </motion.div>
          ))}
        </div>

        {/* Floating capability tags */}
        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">AI Capabilities</p>
        <div className="flex flex-wrap gap-1.5">
          {floatingItems.map((item, i) => (
            <motion.span
              key={item}
              className="text-[11px] font-medium px-2.5 py-1.5"
              style={{ backgroundColor: `${color}10`, color, border: `1px solid ${color}25` }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.65, duration: 0.3 }}
            >
              {item}
            </motion.span>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-5">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[10px] text-gray-400">Platform Readiness</p>
            <p className="text-[10px] font-bold" style={{ color }}>Enterprise Grade</p>
          </div>
          <div className="h-1.5 bg-gray-100 overflow-hidden">
            <motion.div
              className="h-full"
              style={{ backgroundColor: color }}
              initial={{ width: '0%' }}
              animate={{ width: '96%' }}
              transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>

      {/* Floating accent card */}
      <motion.div
        className="absolute -bottom-4 -right-4 text-white px-4 py-3 shadow-lg"
        style={{ backgroundColor: color }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.4 }}
      >
        <p className="text-[10px] uppercase tracking-wide opacity-70">Powered by</p>
        <p className="text-sm font-bold">Glimmora AI</p>
      </motion.div>
    </div>
  )
}

/**
 * Reusable interest section for industry pages.
 *
 * Props:
 *   industryName  — e.g. "Enterprise"
 *   heading       — section headline
 *   description   — one paragraph
 *   features      — string[]
 *   color         — brand color hex (default #70564b)
 *   metrics       — [{ name, value, change }] (3 items)
 *   visualLabel   — dashboard label string
 *   formTitle     — interest form heading
 *   formDesc      — interest form subtext
 */
export default function InterestSection({
  industryName = 'Your Industry',
  heading,
  description,
  features = [],
  color = '#70564b',
  metrics = [],
  visualLabel,
  formTitle,
  formDesc,
}) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    emailjs.init('usx7JhywGy63cCrKc')
  }, [])

  const resolvedHeading   = heading     || `AI Intelligence for ${industryName}`
  const resolvedFormTitle = formTitle   || `Explore ${industryName} Intelligence`
  const resolvedFormDesc  = formDesc    || `Leave your email and our team will design a custom AI deployment roadmap for your ${industryName.toLowerCase()} organization.`
  const resolvedLabel     = visualLabel || `${industryName} Intelligence`

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color }}>
                Glimmora for {industryName}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                {resolvedHeading}
              </h2>
              {description && (
                <p className="text-gray-600 leading-relaxed mb-8">{description}</p>
              )}

              {features.length > 0 && (
                <ul className="space-y-3 mb-10">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Email interest form */}
              <div className="bg-[#F5F3F1] p-6">
                <p className="font-bold text-gray-900 mb-1">{resolvedFormTitle}</p>
                <p className="text-gray-500 text-sm mb-4">{resolvedFormDesc}</p>
                {submitted ? (
                  <div className="flex items-center gap-3 text-green-600">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold text-sm">We'll reach out within 24 hours.</span>
                  </div>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault()
                      if (!email || sending) return
                      setSending(true)
                      try {
                        await emailjs.send('service_wxj1uz3', 'template_kj44vfa', {
                          from_name: 'Interest Form',
                          from_email: email,
                          industry: industryName,
                          message: `Interest inquiry from ${email} for ${industryName} intelligence solutions.`,
                        })
                        setSubmitted(true)
                        setEmail('')
                      } catch (err) {
                        console.error('EmailJS error:', err)
                        alert('Something went wrong. Please try again.')
                      } finally {
                        setSending(false)
                      }
                    }}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      required
                      className="flex-1 bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 px-4 py-3 outline-none focus:border-[#956e5d] transition-colors text-sm"
                    />
                    <button type="submit" disabled={sending} className="btn-primary px-6 py-3 text-sm whitespace-nowrap disabled:opacity-60">
                      {sending ? 'Sending...' : 'Get in Touch'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Right: Animated intelligence visual */}
          <div className="hidden lg:block">
            <IntelligenceVisual color={color} metrics={metrics} label={resolvedLabel} />
          </div>

        </div>
      </div>
    </section>
  )
}
