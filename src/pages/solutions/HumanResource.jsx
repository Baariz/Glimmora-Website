import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* =========================================
   1. Icons (Sharp, HR & Business Style)
   ========================================= */
const Icons = {
  Users: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  FileText: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  UserPlus: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <line x1="20" y1="8" x2="20" y2="14" />
      <line x1="23" y1="11" x2="17" y2="11" />
    </svg>
  ),
  Shield: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Microsoft: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="1" y="1" width="10" height="10" />
      <rect x="13" y="1" width="10" height="10" />
      <rect x="1" y="13" width="10" height="10" />
      <rect x="13" y="13" width="10" height="10" />
    </svg>
  ),
  TrendingUp: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  Clock: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Check: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
};

/* =========================================
   2. Animation Variants
   ========================================= */
const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

/* =========================================
   3. Main Component
   ========================================= */

const HumanResource = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2E2A28] selection:bg-[#70564b] selection:text-white overflow-x-hidden">
      
      {/* --- 1. HERO: "People & Process" Split --- */}
      <section className="pt-28 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid lg:grid-cols-12 gap-0 border-t border-l border-r border-gray-200"
        >
          
          {/* Text Area */}
          <div className="lg:col-span-7 p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 bg-white flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#70564b] mb-6 w-fit">
              <span className="w-1.5 h-1.5 bg-[#70564b]"></span>
              <span className="text-[#70564b] text-xs font-bold uppercase tracking-widest">
                Human Resource
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] mb-6 text-[#2E2A28]">
              Manage Your <br/>
              Most Valuable <span className="text-[#70564b]">Asset.</span>
            </h1>
            
            <p className="text-sm text-gray-500 max-w-lg leading-relaxed mb-8">
              Modernize your HR operations with Business Central. Centralize employee records, streamline onboarding, and gain visibility into your workforce—all from one secure platform.
            </p>

            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-[#70564b] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#5f4940] transition-colors shadow-sm rounded-none"
              >
                Schedule Consultation
              </Link>
              <a
                href="#capabilities" 
                className="px-8 py-4 bg-white border border-gray-300 text-[#2E2A28] font-bold text-xs uppercase tracking-widest hover:border-[#70564b] hover:text-[#70564b] transition-colors rounded-none"
              >
                HR Capabilities
              </a>
            </div>
          </div>

          {/* Image Area */}
          <div className="lg:col-span-5 relative h-[400px] lg:h-auto border-b border-gray-200 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" 
              alt="HR Manager working with team" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
            />
            {/* Color Overlay (Maroon Tint) */}
            <div className="absolute inset-0 bg-[#70564b]/5 mix-blend-multiply"></div>
            
            {/* Overlay Card */}
            <div className="absolute bottom-0 left-0 bg-white p-6 border-t border-r border-gray-200">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Focus</p>
              <p className="text-sm font-bold text-[#2E2A28]">Employee Lifecycle</p>
            </div>
          </div>

        </motion.div>
      </section>

      {/* --- 2. DEFINITION: "The Strategic View" --- */}
      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-4">
                What is <span className="text-[#70564b]">HR Management?</span>
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Human Resource Management is more than just hiring and payroll. It is the strategic administration of the employee lifecycle—from recruitment and onboarding to performance tracking and development.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Modern HR teams need tools that reduce administrative burden so they can focus on culture, talent retention, and business growth.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 border border-gray-200 shadow-sm relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#70564b]"></div>
              <h3 className="text-xl font-bold text-[#2E2A28] mb-4">The Digital HR Shift</h3>
              <ul className="space-y-4">
                {[
                  "Centralized Data vs. Scattered Files",
                  "Automated Workflows vs. Manual Paperwork",
                  "Data-Driven Insights vs. Intuition"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Icons.Check className="w-4 h-4 text-[#70564b]" />
                    <span className="text-sm font-medium text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. CHALLENGES: "The Paper Trail Problem" --- */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-2 text-xs">
              Common Pain Points
            </h2>
            <h3 className="text-3xl font-bold text-[#2E2A28]">
              Is Your HR Team Overwhelmed?
            </h3>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { title: "Manual Records", desc: "Managing employee data across spreadsheets and physical files creates compliance risks." },
              { title: "Disconnected Data", desc: "Recruitment, payroll, and performance data live in silos, making reporting impossible." },
              { title: "Compliance Risk", desc: "Difficulty tracking certifications, contracts, and sensitive data securely." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="p-8 bg-[#fdfbf9] border border-gray-100 hover:border-[#70564b] transition-colors group"
              >
                <div className="w-8 h-8 bg-white border border-gray-200 group-hover:border-[#70564b] transition-colors mb-4 flex items-center justify-center text-[#70564b] font-bold text-xs rounded-none">
                  !
                </div>
                <h4 className="text-xl font-bold text-[#2E2A28] mb-3">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 4. CORE CAPABILITIES: "The HR Grid" --- */}
      <section id="capabilities" className="py-20 bg-white px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-6">
            <div>
              <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-2 text-xs">
                Business Central HR
              </h2>
              <h3 className="text-3xl font-bold text-[#2E2A28]">
                A Complete People Solution
              </h3>
            </div>
            <div className="hidden md:block text-right">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Efficiency & Compliance</span>
            </div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200"
          >
            {[
              { icon: Icons.Users, title: "Employee Records", desc: "Maintain comprehensive profiles including contacts, qualifications, confidential info, and contracts." },
              { icon: Icons.UserPlus, title: "Recruitment & Hiring", desc: "Streamline the hiring process. Track candidates and manage onboarding checklists efficiently." },
              { icon: Icons.Clock, title: "Absence Management", desc: "Register and track absences. Analyze leave trends and manage workforce availability." },
              { icon: Icons.TrendingUp, title: "Development", desc: "Track employee skills, certifications, and training needs to support career growth." },
              { icon: Icons.Shield, title: "Data Security", desc: "Protect sensitive employee data with role-based access controls and enterprise-grade security." },
              { icon: Icons.FileText, title: "Admin Efficiency", desc: "Reduce paperwork with digital document management and automated HR workflows." },
            ].map((card, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-white p-8 hover:bg-[#faf9f6] transition-colors group relative"
              >
                <div className="w-10 h-10 mb-4 text-gray-400 group-hover:text-[#70564b] transition-colors">
                  <card.icon className="w-full h-full" />
                </div>
                <h4 className="text-xl font-bold text-[#2E2A28] mb-2">{card.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 5. SPOTLIGHT: "Records Management" --- */}
      <section className="py-20 bg-[#fdfbf9]">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-6">
              One Profile. <br/> Total Clarity.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Stop hunting through filing cabinets. Business Central gives you a single, digital view of every employee. From their first contract to their latest training certification, everything is one click away.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-white border border-gray-200">
                <h4 className="font-bold text-[#2E2A28] text-sm mb-1">Contract Management</h4>
                <p className="text-xs text-gray-500">Track start dates, roles, and contract renewals automatically.</p>
              </div>
              <div className="p-4 bg-white border border-gray-200">
                <h4 className="font-bold text-[#2E2A28] text-sm mb-1">Confidential Information</h4>
                <p className="text-xs text-gray-500">Securely store insurance, bank details, and personal data.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="border border-gray-200 bg-white p-2 shadow-sm">
                <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                alt="HR Dashboard View"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
            {/* Decor */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#70564b]/10 -z-10"></div>
          </motion.div>

        </div>
      </section>

      {/* --- 6. INTEGRATION: "The Microsoft Edge" --- */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <div className="w-16 h-16 mx-auto mb-6 text-[#2E2A28] bg-gray-50 flex items-center justify-center">
             <Icons.Microsoft className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-6">
            Work in the Ecosystem You Know
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-2xl mx-auto">
            Your HR data doesn't live in a bubble. Export employee lists to <strong>Excel</strong> for analysis, schedule interviews via <strong>Outlook</strong>, and collaborate on policy documents in <strong>Teams</strong>—all connected to your core HR system.
          </p>
          
          <div className="flex justify-center gap-4">
             <div className="px-6 py-2 border border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wide">Excel</div>
             <div className="px-6 py-2 border border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wide">Outlook</div>
             <div className="px-6 py-2 border border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wide">Teams</div>
          </div>
        </div>
      </section>

      {/* --- 7. WHY BAAREZ --- */}
      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                     <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] mb-4 text-xs">
                        Glimmora Expertise
                     </h2>
                    <h3 className="text-3xl font-bold text-[#2E2A28] mb-6">
                        HR Solutions, <br/> Implemented with Care.
                    </h3>
                    <p className="text-gray-600 mb-6">
                        We understand that HR is sensitive. Our implementation process prioritizes data security, user adoption, and minimal disruption to your daily operations.
                    </p>
                    <Link to="/about" className="text-[#70564b] font-bold text-sm uppercase tracking-widest hover:underline">
                        About Glimmora &rarr;
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {[
                        "Secure Data Migration",
                        "Role-Based Training",
                        "Custom HR Workflows",
                        "Ongoing Support"
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 border border-gray-100">
                             <div className="w-2 h-2 bg-[#70564b] mb-4"></div>
                             <p className="font-bold text-[#2E2A28] text-sm">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* --- 8. CTA: "Sharp Strip" --- */}
      <section className="py-24 section-brand-bg px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Modernize Your Workforce Management.
          </h2>
          <p className="text-sm text-white/80 mb-8">
            Let's discuss how Business Central can simplify your HR operations.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-white text-[#70564b] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#5f4940] hover:text-white transition-colors rounded-none"
          >
            Book Discovery Call
          </Link>
        </div>
      </section>

    </div>
  );
};

export default HumanResource;