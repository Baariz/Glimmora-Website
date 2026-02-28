import React,{ useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion'

/* ===================================================================
   1. INTERNAL ICON SYSTEM (Self-Contained)
   Expanded with new icons for the new sections.
   =================================================================== */
const Icons = {
  // --- Existing Icons ---
  ShieldCheck: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
  ),
  Users: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  ),
  ClipboardCheck: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
  ),
  Search: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
  ),
  Lightning: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  ),
  Briefcase: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ),
  Server: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
  ),
  ArrowRight: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
  ),
  CheckCircle: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
  Globe: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
  ChevronDown: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
  ),
  ChartBar: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  ),
  Chart: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Lock: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
  ),
  Database: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
  ),
  Cloud: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
  ),
  Quote: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" /></svg>
  ),
  Chip: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
  ),
  Headset: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
  ),

  // --- NEW ICONS ADDED (User, Layers, TrendingUp) ---
  User: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
  ),
  Layers: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
  ),
  TrendingUp: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
  ),

  // --- Other Icons you added previously ---
  Settings: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ),
  RefreshCcw: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
  ),
  BarChart3: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
  ),
  Shield: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  ),
  Default: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
};

/* ===================================================================
   2. CONFIGURATION & CONTENT
   Expanded with new sections data.
   =================================================================== */
const BAAREZ_CONFIG = {
  brand: {
    primary: "#70564b",
    secondary: "#4a3830",
  },
 hero: {
  tagline: "AI-Native Governance for Regulated Enterprises",
  headline: "Engineering the Intelligent Future.",
  subheadline:
    "Glimmora International enables enterprises to operate with intelligence, clarity, and scalable digital architecture powered by artificial intelligence and structured innovation.",
  roles: ["CRO", "CISO", "CCO", "Internal Audit Heads"],
  ctaPrimary: "Explore Solutions",
  ctaSecondary: "Learn More",
  image:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
}


,
 trust: {
  label: "Technology Ecosystem",
  logos: [
    { 
      name: "Oracle", 
      url: "https://i.postimg.cc/RFdd76kq/image.png" 
    },
    { 
      name: "AWS", 
      url: "https://i.postimg.cc/fykcYH72/image.png" 
    },
    { 
      name: "Google Cloud", 
      url: "https://i.postimg.cc/B67DZTWB/image.png" 
    },
    { 
      name: "Fujitsu", 
      url: "https://i.postimg.cc/nVQMQbqH/image.png" 
    },
    { 
      name: "Palo Alto Networks", 
      url: "https://i.postimg.cc/9frc5Zpj/image.png" 
    },
    {
      name: "Newgen",
      url: "https://i.postimg.cc/mgrsCCKd/image.png"
    }
  ]
},
  solutions: {
  title: "Glimmora Platforms",
  subtitle: "Independent platforms designed to work standalone or together as a unified ecosystem.",
  tabs: [
    {
      id: "grc",
      label: "GRC Platform",
      icon: Icons.ShieldCheck,
      title: "Enterprise Governance, Centralized",
      desc: "A unified operating system for governance, risk, and compliance. We replace fragmented spreadsheets with automated workflows that link policies to controls and regulatory obligations.",
      target: "Chief Risk & Compliance Officers", // New Field
      outcome: "40% reduction in audit preparation time", // New Field
      features: [
        "Automated Policy & Control Lifecycle",
        "Regulatory Change Management",
        "Real-time Risk Heatmaps"
      ],
      synergy: "Glimmora ScanVista feeds Regulatory Data → GRC → Internal Audit", // New Field
      link: "/solutions/grc",
      image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "tprm",
      label: "Third-Party Risk",
      icon: Icons.Users,
      title: "Control Risk Beyond Your Enterprise",
      desc: "Extend your governance perimeter to your supply chain. Assess, monitor, and remediate risks from vendors and third parties in a single, auditable platform.",
      target: "Vendor Risk Managers & Procurement",
      outcome: "Cut vendor onboarding time by 50%",
      features: [
        "Automated Vendor Risk Assessments",
        "Continuous Performance Monitoring",
        "Due Diligence & Compliance Tracking"
      ],
      synergy: "TPRM Risk Data → GRC Risk Register → Reporting",
      link: "/solutions/tprm",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "internal-audit",
      label: "Internal Audit",
      icon: Icons.ClipboardCheck,
      title: "Modernize Audit Execution",
      desc: "Shift from checklist-based auditing to risk-based assurance. Streamline the entire audit lifecycle from planning and fieldwork to reporting and issue tracking.",
      target: "Chief Audit Executives (CAE)",
      outcome: "100% traceability of audit findings",
      features: [
        "Risk-Based Audit Planning",
        "Automated Workpapers & Evidence",
        "Issue Remediation Tracking"
      ],
      synergy: "GRC Controls → Internal Audit Testing → Board Reporting",
      link: "/solutions/internal-audit",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "scanvista",
      label: "Glimmora ScanVista",
      icon: Icons.Search,
      title: "Intelligent Document Understanding",
      desc: "Turn unstructured documents into decision-ready data. Glimmora ScanVista uses AI to read, classify, and extract data from complex files (PDFs, images) in English and Arabic.",
      target: "Operations & Compliance Teams",
      outcome: "90% accuracy in automated data extraction",
      features: [
        "English & Arabic OCR/NLP",
        "KYC & Contract Analysis",
        "Automated Metadata Tagging"
      ],
      synergy: "Glimmora ScanVista Extraction → GRC Evidence → TPRM Assessments",
      link: "/solutions/scanvista",
      image: "https://i.postimg.cc/05WRxbzP/image.png"
    },
    {
      id: "glimmora",
      label: "Hospitality",
      icon: Icons.Chip,
      title: "AGI-Native Hospitality Intelligence",
      desc: "The operating brain for modern hospitality groups. Glimmora Hospitality unifies guest data, operations, and pricing intelligence to optimize revenue and experience in real-time.",
      target: "Hospitality COOs & Revenue Managers",
      outcome: "15% increase in RevPAR (Revenue Per Available Room)",
      features: [
        "Dynamic Pricing Intelligence",
        "Guest Sentiment Analysis",
        "Operational Digital Twins"
      ],
      synergy: "Glimmora Hospitality Data → Corporate GRC Oversight via VerifAI",
      link: "/platforms/hospitality",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
    }
  ]
}
,
services: {
  title: "Glimmora Services",
  subtitle: "Advisory and execution services that help enterprises design, transform, and operate with confidence.",
  tabs: [
    {
      id: "business-process-consulting",
      label: "Business Process Consulting",
      icon: Icons.Settings,
      title: "Optimize How Your Business Operates",
      desc: "Glimmora Business Process Consulting helps organizations analyze, redesign, and optimize critical business processes—reducing inefficiencies, improving control, and enabling scalable operations.",
      features: [
        "Process Assessment & Gap Analysis",
        "Process Redesign & Optimization",
        "Operational Efficiency Improvement"
      ],
      platformTie: "Integrates with GRC Platform for control-aligned process design",
      link: "/services/business-process-consulting",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "digital-transformation",
      label: "Digital Transformation",
      icon: Icons.RefreshCcw,
      title: "Transform Operations Through Technology",
      desc: "Glimmora partners with enterprises to modernize legacy operations through digital transformation—aligning people, processes, and technology to drive agility, resilience, and long-term growth.",
      features: [
        "Digital Strategy & Roadmapping",
        "Process Automation Enablement",
        "Enterprise Technology Modernization"
      ],
      platformTie: "Leverages Glimmora ScanVista for document digitization & workflow automation",
      link: "/services/digital-transformation",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "data-analytics-ai",
      label: "Data Analytics & AI",
      icon: Icons.BarChart3,
      title: "Turn Data Into Actionable Intelligence",
      desc: "Glimmora Data Analytics & AI services help organizations unlock insights from enterprise data—enabling better decision-making, predictive analytics, and intelligent automation.",
      features: [
        "Enterprise Data Analytics",
        "Predictive & Prescriptive Insights",
        "AI & Machine Learning Enablement"
      ],
      platformTie: "Powers AI models within GRC risk scoring & Internal Audit analytics",
      link: "/services/data-analytics-ai",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "erp-consulting",
      label: "ERP Consulting",
      icon: Icons.Database,
      title: "Strengthen Core Enterprise Systems",
      desc: "Glimmora ERP Consulting supports organizations in implementing, optimizing, and governing ERP platforms—ensuring alignment with business processes, controls, and compliance requirements.",
      features: [
        "ERP Implementation & Optimization",
        "Process & Control Alignment",
        "ERP Governance & Support"
      ],
      platformTie: "Connects ERP data flows to GRC controls & TPRM vendor assessments",
      link: "/services/erp-consulting",
      image: "https://i.postimg.cc/ryB6z7Nv/image.png"
    },
    {
      id: "cybersecurity-soc",
      label: "Cybersecurity & SOC",
      icon: Icons.Shield,
      title: "Protect Critical Systems and Data",
      desc: "Glimmora Cybersecurity & SOC services help enterprises strengthen security posture, detect threats early, and respond effectively—supporting regulatory compliance and business continuity.",
      features: [
        "Security Risk Assessment & Hardening",
        "Security Operations & Monitoring",
        "Incident Response & Compliance Support"
      ],
      platformTie: "Feeds security incidents into GRC risk register & audit evidence",
      link: "/services/cybersecurity-soc",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "cloud-automation",
      label: "Cloud & Automation",
      icon: Icons.Cloud,
      title: "Enable Scalable, Automated Infrastructure",
      desc: "Glimmora Cloud & Automation services help organizations design, migrate, and optimize cloud environments—leveraging automation to improve scalability, reliability, and operational efficiency.",
      features: [
        "Cloud Strategy & Migration",
        "Infrastructure Automation",
        "Cloud Governance & Optimization"
      ],
      platformTie: "Deploys Glimmora platforms on sovereign cloud with compliance controls",
      link: "/services/cloud-automation",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop"
    }
  ]
}

,
  methodology: {
  title: "How Glimmora Operates",
  subtitle: "Before: 120+ spreadsheets, manual updates, no single source of truth. After: One connected platform with automated workflows.",
  steps: [
    {
      num: "01",
      title: "Connect",
      desc: "Integrate enterprise systems (SAP, Oracle, ServiceNow), third-party data, and documents into a single control library linked to every obligation.",
      icon: Icons.Server
    },
    {
      num: "02",
      title: "Interpret",
      desc: "AI-powered analysis identifies risk signals, flags compliance gaps, and surfaces operational patterns—before they become audit findings.",
      icon: Icons.Search
    },
    {
      num: "03",
      title: "Operationalize",
      desc: "Automated workflows route tasks, generate reports, and enforce controls—converting decisions into documented, auditable outcomes.",
      icon: Icons.CheckCircle
    }
  ]
}
,
 industries: {
  title: "Industries We Serve",
  desc: "Glimmora platforms are designed for organizations operating in highly regulated environments where governance, risk management, and compliance are critical to business continuity.",
  cards: [
    {
      title: "Banking & Financial Services",
      regulations: "Basel III, AML, central bank guidelines (SAMA, CBI), IFRS 9/17",
      accelerators: ["Pre-built Basel III risk taxonomy", "AML control library", "Central bank reporting templates"],
      icon: Icons.Briefcase,
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Healthcare & Life Sciences",
      regulations: "HIPAA, FDA 21 CFR Part 11, GDPR, data privacy & interoperability standards",
      accelerators: ["HIPAA evidence library", "FDA compliance workflows", "Patient data governance controls"],
      icon: Icons.ShieldCheck,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Government & Public Sector",
      regulations: "National data localization, NIST, GDPR, public procurement & audit standards",
      accelerators: ["NIST control mapping", "Public procurement audit trails", "Data sovereignty workflows"],
      icon: Icons.Server,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Energy & Utilities",
      regulations: "NERC CIP, HSE incident tracking, operational resilience, ISO 55000",
      accelerators: ["NERC CIP incident runbooks", "HSE risk registers", "Asset management workflows"],
      icon: Icons.Lightning,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
    }
  ]
}
,


  // --- NEW CONFIG DATA START ---
  integrations: {
    title: "The Neural Nexus",
    subtitle: "Glimmora doesn't replace your stack. It unifies it. Pre-built connectors for the world's leading enterprise systems.",
    nodes: ["SAP", "Oracle", "Microsoft", "Salesforce", "Workday", "ServiceNow"]
  },
  impact: {
    title: "Return on Intelligence",
    stats: [
      { val: "60%", desc: "Reduction in Audit Cycle Time" },
      { val: "$2.4M", desc: "Average Annual Compliance Savings" },
      { val: "0", desc: "Critical Vulnerabilities Missed" },
      { val: "100%", desc: "Regulatory Audit Success Rate" }
    ]
  },
  testimonials: {
    title: "Executive Perspectives",
    items: [
      {
        quote: "Glimmora International didn't just automate our compliance; they gave us a real-time view of our risk posture that we never thought possible.",
        author: "Sarah J.",
        role: "Chief Risk Officer, FinBank Global",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
      },
      {
        quote: "The RaaS implementation was flawless. We scaled our operations overnight without hiring a single new headcount.",
        author: "Ahmed K.",
        role: "VP of Operations, LogiTech Solutions",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
      }
    ]
  },
  // --- NEW CONFIG DATA END ---
  cta: {
    headline: "Ready to deploy the intelligence layer?",
    subheadline: "See how enterprises, governments, and hospitality groups are transforming operations with Glimmora's AI-native platforms.",
    button: "Request Strategic Demo"
  }
}



const ARCHITECTURE_SECTION = {
  badge: {
    label: "Deployment & Security",
    icon: Icons.Server
  },
  headline: {
    primary: "Secure by Design.",
    highlight: "Sovereign by Default."
  },
  description:
    "We respect data gravity. Whether you need strict data residency within national borders or an air-gapped on-premise installation, Glimmora International adapts to your infrastructure standards.",
  cards: [
    {
      title: "Sovereign Cloud",
      desc: "Region-locked data hosting (UAE, KSA, India, EU) ensuring total compliance with local data residency laws.",
      icon: Icons.Cloud
    },
    {
      title: "On-Premise & Air-Gapped",
      desc: "Deploy Glimmora entirely within your private firewall. Ideal for Defense, Public Sector, and strict Banking environments.",
      icon: Icons.Database
    },
    {
      title: "Zero-Trust Security",
      desc: "Built on a zero-trust architecture with granular Role-Based Access Control (RBAC) and military-grade encryption.",
      icon: Icons.Lock
    },
    {
      title: "API-First Integration",
      desc: "Seamlessly connects with your existing ERP (SAP, Oracle), CRM, and HRMS via secure, bi-directional APIs.",
      icon: Icons.Settings
    }
  ]
}




/* ===================================================================
   3. UI COMPONENTS
   =================================================================== */

const Section = ({ className = "", children }) => (
  <section className={`relative w-full px-6 md:px-12 lg:px-24 ${className}`}>
    {children}
  </section>
)

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
)

const Button = ({ children, to = "/", variant = "primary", className = "" }) => {
  const base = "inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-300 transform hover:-translate-y-1"
  const variants = {
    primary: `bg-[#70564b] text-white hover:bg-[#5f4940] shadow-xl shadow-[#70564b]/20`,
    secondary: `bg-white border-2 border-[#70564b] text-[#70564b] hover:bg-gray-50`,
    white: `bg-white text-[#70564b] hover:bg-gray-100 shadow-xl`
  }
  
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {variant === 'primary' && <Icons.ArrowRight className="w-5 h-5 ml-2" />}
    </Link>
  )
}

/* ===================================================================
   4. NEW CREATIVE COMPONENTS (For Added Sections)
   =================================================================== */

const IntegrationNode = ({ label, angle, radius }) => {
    // Calculate position based on angle and radius
    const x = Math.cos(angle * (Math.PI / 180)) * radius;
    const y = Math.sin(angle * (Math.PI / 180)) * radius;
    
    return (
        <motion.div 
            className="absolute w-20 h-20 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 z-10"
            style={{ x, y }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
        >
            {label}
        </motion.div>
    )
}

const ConnectionLine = ({ angle, radius }) => {
    return (
        <motion.div 
             className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-[#70564b] to-transparent origin-left opacity-30"
             style={{ 
                 width: radius, 
                 rotate: angle,
                 x: 0,
                 y: 0
             }}
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             transition={{ duration: 1.5, delay: 0.2 }}
        />
    )
}

/* ===================================================================
   5. MAIN PAGE
   =================================================================== */

function Home() {
  const [activeTab, setActiveTab] = useState(BAAREZ_CONFIG.solutions.tabs[0].id)
  const { scrollYProgress } = useScroll()
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="font-sans text-gray-900 bg-[#fdfbf9] selection:bg-[#70564b] selection:text-white overflow-x-hidden">

      
{/* ================================================================= */}
{/* GLIMMORA HERO — SPLIT LAYOUT, WHITE + BEIGE, ENTERPRISE GRADE   */}
{/* ================================================================= */}
<section className="relative flex items-center mt-12 bg-white overflow-hidden">

  {/* BACKGROUND: White-to-beige gradient + abstract geometric shapes at 5–8% opacity */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#F5F3F1]" />
    {/* Shape 1 — large soft circle */}
    <div className="absolute -top-24 -right-24 w-[400px] md:w-[640px] h-[400px] md:h-[640px] rounded-full bg-[#70564b] opacity-[0.06]" />
    {/* Shape 2 — rotated square border */}
    <div className="absolute top-1/3 right-[14%] w-32 md:w-56 h-32 md:h-56 border border-[#70564b] opacity-[0.07] rotate-45 hidden sm:block" />
    {/* Shape 3 — filled rectangle (bottom-right) */}
    <div className="absolute bottom-16 right-[6%] w-48 md:w-72 h-48 md:h-72 bg-[#70564b] opacity-[0.05] rounded-sm hidden sm:block" />
    {/* Vertical centre divider (desktop only) */}
    <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gray-100 hidden lg:block" />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10 py-24 sm:py-28 md:py-32 lg:py-0">
    <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center lg:min-h-screen">

      {/* ——————————————————————————————————————————————————— */}
      {/* LEFT PANEL: Headline, subtext, CTAs, trust strip    */}
      {/* ——————————————————————————————————————————————————— */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-8 text-center lg:text-left"
      >
        {/* Eyebrow label */}
        <div className="flex items-center justify-center lg:justify-start gap-4">
          <div className="w-8 h-[2px] bg-[#70564b] hidden lg:block" />
          <span className="text-[#70564b] text-xs font-bold uppercase tracking-[0.4em]">Glimmora International</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3 rem] font-bold text-[#2E2A28] leading-[1.08] tracking-tight">
          The Intelligence layer <br/>
          <span className="text-[#70564b]"> for the Modern World</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
          Glimmora International enables enterprises to operate with intelligence, clarity, and scalable digital architecture powered by artificial intelligence and structured innovation.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
          <Link
            to="/solutions"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#70564b] hover:bg-[#5f4940] text-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-[#70564b]/20"
          >
            Explore Solutions
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            to="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#2E2A28]/20 text-[#2E2A28] hover:border-[#70564b] hover:text-[#70564b] px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold tracking-wide transition-all duration-300"
          >
            Learn More
          </Link>
        </div>

        {/* Platform links — visible on mobile, hidden on lg (shown in right panel instead) */}
        <div className="flex lg:hidden flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-4 border-t border-gray-100">
          {[
            { name: 'VerifAI', to: '/platforms/verifai' },
            { name: 'Glimmora ScanVista', to: '/platforms/scanvista' },
            { name: 'Hospitality', to: '/platforms/hospitality' },
          ].map((p, i) => (
            <Link key={i} to={p.to} className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#70564b] font-medium transition-colors">
              <div className="w-1 h-1 rounded-full bg-[#70564b]" />
              {p.name}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* ——————————————————————————————————————————————————— */}
      {/* RIGHT PANEL: Subtle geometric visual accent          */}
      {/* ——————————————————————————————————————————————————— */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative hidden lg:flex items-center justify-center"
      >
        <div className="relative w-full max-w-md aspect-square">

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#70564b]/40" />
          <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#70564b]/40" />
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#70564b]/40" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#70564b]/40" />

          {/* Inner border */}
          <div className="absolute inset-6 border border-[#70564b]/10" />

          {/* Central content card */}
          <div className="absolute inset-12 bg-gradient-to-br from-[#F5F3F1] to-white shadow-xl flex flex-col justify-between p-8">
            <div>
              <div className="w-8 h-[2px] bg-[#70564b] mb-4" />
              <p className="text-[#2E2A28] text-base font-bold leading-snug">
                Global Intelligence<br />Ecosystem
              </p>
            </div>

            <div className="space-y-3">
              {[
                { name: 'Glimmora VerifAI', to: '/platforms/verifai' },
                { name: 'Glimmora ScanVista', to: '/platforms/scanvista' },
                { name: 'Glimmora Hospitality', to: '/platforms/hospitality' },
              ].map((platform, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#70564b]" />
                  <Link to={platform.to} className="text-gray-500 text-xs font-medium hover:text-[#70564b] transition-colors">
                    {platform.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-3">
  

  <img
    src="/Glimmora_website_logov2_fit.png"   // change this to your logo path
    alt="Glimmora Logo"
    className="h-12 w-auto object-contain"
  />
</div>
          </div>

          {/* Floating info chip — top-right */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-5 -right-5 bg-white shadow-lg border-l-2 border-[#70564b] px-4 py-2.5 z-10"
          >
            <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Ecosystem</p>
            <p className="text-xs font-bold text-[#2E2A28] mt-0.5">12+ AI Platforms</p>
          </motion.div>

          {/* Floating info chip — bottom-left */}
          <motion.div
            animate={{ y: [6, -6, 6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-5 -left-5 bg-white shadow-lg border-l-2 border-[#70564b] px-4 py-2.5 z-10"
          >
            <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Presence</p>
            <p className="text-xs font-bold text-[#2E2A28] mt-0.5">6 Global Offices</p>
          </motion.div>

        </div>
      </motion.div>

    </div>
  </div>
</section>


{/* --- BAAREZ = GLIMMORA STRIP --- */}
<section className="w-full bg-white border-y border-[#70564b]/15 relative overflow-hidden">
  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(112,86,75,0.03)_0%,transparent_60%)]" />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 relative z-10">
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">

      <div className="flex items-center gap-4 shrink-0">
        <img src="/logo.png" alt="Baarez Technology Solutions" className="h-10 md:h-12 w-auto object-contain opacity-40 grayscale" />
        <span className="text-lg font-bold text-[#70564b]">=</span>
        <img src="/Glimmora_logo_icon_fit.png" alt="Glimmora International" className="h-10 md:h-12 w-auto object-contain" />
      </div>

      <div className="flex-1 text-center md:text-left">
        <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0">
          <span className="font-semibold text-gray-600">Baarez Technology Solutions</span> is now <span className="font-semibold text-[#70564b]">Glimmora International</span>. Same team, same trust, a broader vision.
        </p>
      </div>

    </div>
  </div>
</section>




      {/* --- TRUST TICKER --- */}
      {/* --- TRUST LOGO GRID --- */}
      {/* --- TRUST LOGO SLIDER (MARQUEE) --- */}
      <div className="py-16 bg-white border-b border-gray-100 overflow-hidden">
        {/* Inject Custom Animation Styles */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        `}</style>

        <Section>
          <div className="text-center mb-12">
             <span className="inline-block relative px-4">
                <span className="text-xs font-bold text-[#70564b] uppercase tracking-[0.2em] relative z-10 bg-white px-4">
                  {BAAREZ_CONFIG.trust.label}
                </span>
                <div className="absolute top-1/2 left-0 w-full h-px bg-[#70564b]/10 -z-0"></div>
             </span>
          </div>

          <div className="relative w-full overflow-hidden">
            {/* Gradient Fade Masks on Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Track */}
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {/* We duplicate the list 4 times to ensure seamless scrolling on wide screens */}
              {[...Array(4)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex items-center">
                  {BAAREZ_CONFIG.trust.logos.map((logo, i) => (
                    <div key={i} className="flex items-center">
                      
                      {/* Logo */}
                      <div className="px-12 group cursor-pointer">
                        <img 
                          src={logo.url} 
                          alt={logo.name} 
                          className="h-12 md:h-12 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" 
                        />
                      </div>

                      {/* The "Small Line" Separator */}
                      <div className="h-10 w-px bg-gray-100 transform rotate-12"></div>
                      
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

<section className="w-full bg-white py-16 border-b border-slate-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-[#70564b] font-bold uppercase tracking-widest text-xs mb-3">
        The Governance Gap
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
        Stop managing risk in silos.
      </h3>
      <p className="mt-4 text-sm text-slate-500">
        Regulated industries cannot afford disconnected data. We bridge the gap between manual fragmentation and automated control.
      </p>
    </div>

    {/* Problem-Solution Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {/* Card 1: GRC */}
      <div className="group relative bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-[#70564b] hover:shadow-md transition-all duration-300">
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 bg-red-50 rounded-lg text-[#70564b]">
            {/* Warning Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          </div>
          <h4 className="font-semibold text-slate-700 text-sm leading-tight">
            Fragmented spreadsheets & risk silos
          </h4>
        </div>
        
        <div className="my-4 border-t border-slate-200 w-full group-hover:border-[#70564b]/30 transition-colors"></div>

        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#70564b] uppercase tracking-wide">
            Solved by GRC
          </span>
          <a href="/solutions/grc" className="p-1.5 rounded-full bg-white text-slate-400 hover:text-[#70564b] hover:bg-orange-50 transition-colors shadow-sm ring-1 ring-slate-200 group-hover:ring-[#70564b]">
            {/* Arrow Right */}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>

      {/* Card 2: TPRM */}
      <div className="group relative bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-[#70564b] hover:shadow-md transition-all duration-300">
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 bg-red-50 rounded-lg text-[#70564b]">
            {/* Users/Vendor Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
          <h4 className="font-semibold text-slate-700 text-sm leading-tight">
            Manual vendor assessments
          </h4>
        </div>
        
        <div className="my-4 border-t border-slate-200 w-full group-hover:border-[#70564b]/30 transition-colors"></div>

        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#70564b] uppercase tracking-wide">
            Solved by TPRM
          </span>
          <a href="/solutions/tprm" className="p-1.5 rounded-full bg-white text-slate-400 hover:text-[#70564b] hover:bg-orange-50 transition-colors shadow-sm ring-1 ring-slate-200 group-hover:ring-[#70564b]">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>

      {/* Card 3: Internal Audit */}
      <div className="group relative bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-[#70564b] hover:shadow-md transition-all duration-300">
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 bg-red-50 rounded-lg text-[#70564b]">
            {/* File/Audit Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
          </div>
          <h4 className="font-semibold text-slate-700 text-sm leading-tight">
            Reactive, disconnected audit trails
          </h4>
        </div>
        
        <div className="my-4 border-t border-slate-200 w-full group-hover:border-[#70564b]/30 transition-colors"></div>

        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#70564b] uppercase tracking-wide">
            Solved by Audit
          </span>
          <a href="/solutions/internal-audit" className="p-1.5 rounded-full bg-white text-slate-400 hover:text-[#70564b] hover:bg-orange-50 transition-colors shadow-sm ring-1 ring-slate-200 group-hover:ring-[#70564b]">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>

      {/* Card 4: Glimmora ScanVista (Data) */}
      <div className="group relative bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-[#70564b] hover:shadow-md transition-all duration-300">
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 bg-red-50 rounded-lg text-[#70564b]">
            {/* Search/Doc Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <h4 className="font-semibold text-slate-700 text-sm leading-tight">
            Unstructured data slowing compliance
          </h4>
        </div>
        
        <div className="my-4 border-t border-slate-200 w-full group-hover:border-[#70564b]/30 transition-colors"></div>

        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#70564b] uppercase tracking-wide">
            Solved by Glimmora ScanVista
          </span>
          <a href="/solutions/scanvista" className="p-1.5 rounded-full bg-white text-slate-400 hover:text-[#70564b] hover:bg-orange-50 transition-colors shadow-sm ring-1 ring-slate-200 group-hover:ring-[#70564b]">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>



{/* --- VERTICAL AI MODULES --- */}
<section className="py-16 bg-white border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-12 gap-12 items-center">

      {/* Left: Context */}
      <div className="lg:col-span-5">
        <span className="text-xs font-bold text-[#70564b] uppercase tracking-[0.2em] mb-3 block">Intelligence Ecosystem</span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-4">
          12+ Platforms. One Unified Ecosystem.
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          Glimmora has expanded into a multi-industry intelligence ecosystem. Three platforms are live today — VerifAI, Glimmora ScanVista, and Hospitality — with more in active development across defense, fashion, cinema, finance, and more.
        </p>

        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
          <p className="text-xs text-gray-500 italic">
            "Glimmora isn't a single product — it's a sovereign AI infrastructure layer. Each platform is purpose-built for its industry, yet interconnected through a shared intelligence core."
          </p>
        </div>
      </div>

      {/* Right: Live Platforms + Coming Soon */}
      <div className="lg:col-span-7 space-y-4">

        {/* Live Platforms */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { name: 'Glimmora VerifAI', desc: 'Enterprise GRC & Compliance', to: '/platforms/verifai', status: 'Live' },
            { name: 'Glimmora ScanVista', desc: 'Intelligent Document Understanding', to: '/platforms/scanvista', status: 'Live' },
            { name: 'Glimmora Hospitality', desc: 'AGI-Native Hotel Intelligence', to: '/platforms/hospitality', status: 'Live' },
          ].map((p, i) => (
            <Link key={i} to={p.to} className="group block bg-gradient-to-br from-[#70564b] to-[#5f4940] p-5 text-white hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full blur-xl -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <span className="text-[9px] font-bold text-green-300 uppercase tracking-widest block mb-2">● Live</span>
                <h4 className="text-sm font-bold leading-snug mb-1">{p.name}</h4>
                <p className="text-xs text-white/60">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Modules Teaser */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Cyber Glimmora", desc: "24/7 SOC & Threat Intelligence", to: "/platforms/cyber" },
            { name: "AEGIS Glimmora", desc: "Defense & Military Simulation", to: "/platforms/aegis-defense" },
            { name: "Elan Glimmora", desc: "Travel & Luxury Intelligence", to: "/platforms/elan" },
            { name: "Moda Glimmora", desc: "Fashion & Retail Intelligence", to: "/platforms/moda" },
          ].map((module, i) => (
            <Link key={i} to={module.to} className="group flex items-center justify-between p-4 bg-gray-50 border border-gray-100 hover:border-[#70564b]/30 transition-colors">
              <div>
                <h4 className="text-sm font-bold text-gray-700 group-hover:text-[#70564b] transition-colors">{module.name}</h4>
                <p className="text-xs text-gray-500">{module.desc}</p>
              </div>
              <span className="text-[9px] text-gray-400 font-bold bg-gray-200 px-2 py-0.5 uppercase tracking-wide shrink-0">Soon</span>
            </Link>
          ))}
        </div>

        <Link to="/platforms" className="flex items-center justify-center gap-2 text-sm text-[#70564b] font-bold border border-[#70564b]/30 py-3 hover:bg-[#70564b]/5 transition-colors">
          View All 12+ Platforms <Icons.ArrowRight className="w-4 h-4" />
        </Link>

      </div>
    </div>
  </div>
</section>

{/* --- SERVICES SECTION: "THE EXECUTIVE DOSSIER" (RESPONSIVE) --- */}
<div className="py-16 md:py-24 bg-white relative overflow-hidden" id="services">
  <Section>
    
    {/* Section Header */}
    <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
      <div>
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#70564b] mb-2">
          {BAAREZ_CONFIG.services.title}
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-[#2E2A28]">
          Strategic Capabilities.
        </h3>
      </div>
      <div className="hidden md:block h-[1px] bg-gray-200 flex-1 mx-8 mb-2"></div>
      <div className="text-right">
        <span className="text-xl text-[#70564b] font-mono font-bold">06</span>
        <span className="text-gray-400 text-xs uppercase tracking-wider ml-2">Core Modules</span>
      </div>
    </div>

    {/* THE DOSSIER INTERFACE */}
    {/* Mobile: h-auto (grows with content). Desktop: Fixed h-[550px] preserved. */}
    <div className="flex flex-col lg:flex-row-reverse h-auto lg:h-[550px] border border-gray-200 rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 bg-[#fdfbf9]">
      
      {/* RIGHT PANEL: Navigation */}
      {/* Mobile: w-full. Desktop: Fixed w-[350px]. */}
      <div className="w-full lg:w-[350px] flex flex-col bg-white border-b lg:border-b-0 lg:border-l border-gray-200 overflow-y-auto custom-scrollbar lg:h-full max-h-[300px] lg:max-h-full">
        {BAAREZ_CONFIG.services.tabs.map((service, index) => {
          const isActive = activeService === index;
          const IconComponent = service.icon || Icons.Default;

          return (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              // Mobile: Compact padding. Desktop: Spacious padding.
              className={`relative p-4 md:p-6 text-left transition-all duration-300 group outline-none ${
                isActive ? 'bg-[#fdfbf9]' : 'hover:bg-gray-50'
              }`}
            >
              {/* Active Marker */}
              {isActive && (
                <motion.div 
                  layoutId="activeMarker"
                  // Mobile: Bottom marker. Desktop: Right marker.
                  className="absolute bottom-0 left-0 right-0 h-1 lg:h-auto lg:top-0 lg:bottom-0 lg:left-auto lg:right-0 lg:w-1 bg-[#70564b]"
                />
              )}

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-mono font-bold transition-colors ${
                    isActive ? 'text-[#70564b]' : 'text-gray-300'
                  }`}>
                    0{index + 1}
                  </span>
                  <h4 className={`font-bold text-sm transition-colors ${
                    isActive ? 'text-[#2E2A28]' : 'text-gray-500 group-hover:text-gray-800'
                  }`}>
                    {service.label}
                  </h4>
                </div>
                
                <IconComponent className={`w-4 h-4 transition-all duration-300 ${
                  isActive ? 'text-[#70564b] opacity-100' : 'text-gray-300 opacity-0 -translate-x-2'
                }`} />
              </div>
            </button>
          )
        })}
      </div>

      {/* LEFT PANEL: Content Viewport */}
      {/* Mobile: Relative height. Desktop: Flex-1 relative. */}
      <div className="w-full lg:flex-1 relative overflow-hidden bg-[#fdfbf9] min-h-[500px] lg:min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            // Mobile: Relative (flows naturally), flex-col-reverse (Image Top).
            // Desktop: Absolute inset-0 (overlay), flex-row-reverse (Image Left).
            className="relative lg:absolute inset-0 flex flex-col-reverse lg:flex-row-reverse h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            
            {/* Background Number - Adjusted for mobile size */}
            <div className="absolute top-0 left-0 text-[120px] lg:text-[200px] font-bold text-[#70564b]/5 select-none leading-none z-0 pointer-events-none">
              0{activeService + 1}
            </div>

            {/* Content Text */}
            <div className="p-8 md:p-12 w-full lg:w-1/2 flex flex-col justify-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-white border border-gray-100 rounded-lg flex items-center justify-center shadow-sm mb-6 text-[#70564b]">
                    {(() => {
                      const IconComp = BAAREZ_CONFIG.services.tabs[activeService].icon || Icons.Default;
                      return <IconComp className="w-6 h-6" />;
                    })()}
                </div>

                <h3 className="text-xl font-bold text-[#2E2A28] mb-4 leading-tight">
                  {BAAREZ_CONFIG.services.tabs[activeService].title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  {BAAREZ_CONFIG.services.tabs[activeService].desc}
                </p>

                <ul className="space-y-3 mb-6">
                  {BAAREZ_CONFIG.services.tabs[activeService].features.map((feat, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="flex items-center gap-3 text-sm font-medium text-[#2E2A28]"
                    >
                      <Icons.CheckCircle className="w-4 h-4 text-[#70564b]" />
                      {feat}
                    </motion.li>
                  ))}
                </ul>

                {/* Platform Integration Tie */}
                {BAAREZ_CONFIG.services.tabs[activeService].platformTie && (
                  <div className="mb-6 p-3 bg-[#70564b]/5 border-l-4 border-[#70564b] rounded-r-lg">
                    <div className="flex items-start gap-2">
                      <Icons.Layers className="w-4 h-4 text-[#70564b] mt-0.5 shrink-0" />
                      <span className="text-xs text-[#70564b] font-medium">
                        {BAAREZ_CONFIG.services.tabs[activeService].platformTie}
                      </span>
                    </div>
                  </div>
                )}

                <Link
                  to={BAAREZ_CONFIG.services.tabs[activeService].link}
                  className="inline-flex items-center gap-2 text-xs text-[#70564b] font-bold uppercase tracking-widest border-b border-[#70564b] pb-1 hover:text-[#70564b] hover:border-[#70564b] transition-colors"
                >
                  Explore Capabilities
                </Link>
              </motion.div>
            </div>

            {/* Image Area */}
            {/* Mobile: Fixed height (h-64). Desktop: Full height (h-full). */}
            <div className="w-full lg:w-1/2 relative h-64 lg:h-full overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gray-100 lg:rounded-tr-[80px] overflow-hidden border-r border-t border-white shadow-[20px_20px_60px_rgba(0,0,0,0.05)] z-10">
                <motion.img 
                  src={BAAREZ_CONFIG.services.tabs[activeService].image}
                  alt={BAAREZ_CONFIG.services.tabs[activeService].title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#70564b]/40 to-transparent mix-blend-multiply"></div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  </Section>
</div>
      {/* --- METHODOLOGY (DARK SECTION) --- */}
     {/* --- METHODOLOGY (UNIFIED WORKFLOW STRIP) --- */}
      <div className="py-24 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
        <Section>
          <div className="max-w-6xl mx-auto">
            
            {/* Header - Centered & Minimal */}
            <div className="text-center mb-16">
               <FadeIn>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#70564b] mb-3">Our Process</h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#70564b] mb-4">
                    {BAAREZ_CONFIG.methodology.title}
                  </h3>
                  <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                    {BAAREZ_CONFIG.methodology.subtitle}
                  </p>
               </FadeIn>
            </div>

            {/* The Unified Strip Container */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  
                  {BAAREZ_CONFIG.methodology.steps.map((step, i) => (
                    <div key={i} className="group relative p-8 md:p-10 hover:bg-[#fdfbf9] transition-colors duration-500">
                       {/* Top Decorative Line */}
                       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#70564b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                       
                       <div className="flex flex-col h-full">
                          {/* Header Part */}
                          <div className="flex items-start justify-between mb-6">
                             <div className="w-12 h-12 bg-[#70564b]/10 rounded-lg flex items-center justify-center text-[#70564b] group-hover:bg-[#70564b] group-hover:text-white transition-all duration-300">
                                <step.icon className="w-6 h-6" />
                             </div>
                             <span className="text-4xl font-bold text-gray-100 group-hover:text-[#70564b]/20 transition-colors">
                                {step.num}
                             </span>
                          </div>

                          {/* Content Part */}
                          <div>
                             <h4 className="text-xl font-bold text-[#2E2A28] mb-3 group-hover:text-[#70564b] transition-colors">
                                {step.title}
                             </h4>
                             <p className="text-sm text-gray-500 leading-relaxed">
                                {step.desc}
                             </p>
                          </div>
                       </div>
                    </div>
                  ))}

                </div>
              </div>
            </FadeIn>

          </div>
        </Section>
      </div>

      {/* --- SOVEREIGN COMPLIANCE --- */}

<div className="section-brand-bg py-24 text-white relative overflow-hidden">

  {/* Background: Technical Circuit/Node Pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>

  {/* Abstract Accent Glow */}
  <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-[150px] pointer-events-none translate-y-1/2 translate-x-1/3"></div>

  <Section>
    <div className="relative z-10 flex flex-col items-center">

      {/* Header */}
      <div className="text-center max-w-4xl mb-16">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <ARCHITECTURE_SECTION.badge.icon className="w-4 h-4 text-white/80" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">
              {ARCHITECTURE_SECTION.badge.label}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {ARCHITECTURE_SECTION.headline.primary}{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              {ARCHITECTURE_SECTION.headline.highlight}
            </span>
          </h2>

          <p className="text-sm text-white/70 leading-relaxed max-w-2xl mx-auto">
            {ARCHITECTURE_SECTION.description}
          </p>
        </FadeIn>
      </div>

      {/* Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ARCHITECTURE_SECTION.cards.map((card, i) => {
          const IconComponent = card.icon
          return (
            <FadeIn key={i} delay={0.2 + i * 0.1} className="h-full">
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-[#70564b]/50 transition-all duration-300 group flex flex-col relative overflow-hidden">
                
                {/* Hover Glow Effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#70564b]/20 blur-2xl rounded-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>

                <div className="w-14 h-14 bg-[#70564b]/10 rounded-xl flex items-center justify-center text-[#70564b] mb-6 group-hover:bg-[#70564b] group-hover:text-white transition-all border border-[#70564b]/20 group-hover:border-[#70564b]">
                  <IconComponent className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#70564b] transition-colors">
                    {card.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed flex-grow">
                  {card.desc}
                </p>
              </div>
            </FadeIn>
          )
        })}
      </div>

    </div>
  </Section>
</div>


{/* --- BUILT FOR MENA & SOVEREIGN MARKETS --- */}
<section className="py-20 bg-[#fafafa] border-y border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-12 gap-12 items-start">

      {/* Left: Header */}
      <div className="lg:col-span-4">
        <span className="text-xs font-bold text-[#70564b] uppercase tracking-[0.2em] mb-3 block">Regional Specialization</span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-4">
          Built for MENA & Sovereign Markets
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          Global GRC vendors often under-serve local regulatory nuance and data residency expectations. Glimmora International is designed as the regulation-native and sovereign-by-default platform for MENA and similar high-regulation markets.
        </p>
        <div className="w-12 h-[2px] bg-[#70564b]"></div>
      </div>

      {/* Right: Content Grid */}
      <div className="lg:col-span-8 space-y-6">

        {/* Central Bank Regimes */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-sm font-bold text-[#70564b] uppercase tracking-widest mb-4 flex items-center gap-2">
            <Icons.ShieldCheck className="w-4 h-4" />
            Central Bank Compliance Support
          </h3>
          <div className="flex flex-wrap gap-2">
            {['SAMA (Saudi Arabia)', 'CBUAE (UAE)', 'CBB (Bahrain)', 'QCB (Qatar)', 'CBI (Iraq)', 'CBK (Kuwait)'].map((reg, i) => (
              <span key={i} className="px-3 py-1.5 bg-[#70564b]/5 text-[#70564b] text-xs font-bold rounded-full border border-[#70564b]/10">
                {reg}
              </span>
            ))}
          </div>
        </div>

        {/* Data Residency */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-[#2E2A28] mb-3 flex items-center gap-2">
              <Icons.Database className="w-4 h-4 text-[#70564b]" />
              Data Residency Options
            </h3>
            <ul className="space-y-2">
              {['UAE sovereign cloud', 'KSA region-locked hosting', 'India data localization', 'EU GDPR-compliant zones'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                  <Icons.CheckCircle className="w-3 h-3 text-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-[#2E2A28] mb-3 flex items-center gap-2">
              <Icons.Lock className="w-4 h-4 text-[#70564b]" />
              Government & Defense Ready
            </h3>
            <ul className="space-y-2">
              {['Air-gapped deployment options', 'On-premise installation', 'Zero-trust architecture', 'Military-grade encryption'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                  <Icons.CheckCircle className="w-3 h-3 text-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regulatory Mappings Preview */}
        <div className="bg-[#70564b] p-6 rounded-xl text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-1">Pre-built Regulatory Mappings</h3>
              <p className="text-xs text-white/70">Ready-to-deploy frameworks for regional compliance requirements</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['NCA ECC', 'PDPL', 'NESA', 'ADHICS'].map((framework, i) => (
                <span key={i} className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded border border-white/20">
                  {framework}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* --- INDUSTRIES CARDS --- */}
      <div className="py-32 bg-gray-50">
        <Section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#70564b] mb-4">Industries</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#2E2A28]">{BAAREZ_CONFIG.industries.title}</h3>
            </div>
            <Link
              to="/industries"
              className="flex items-center gap-2 text-sm font-bold text-[#70564b] hover:gap-3 transition-all duration-200 uppercase tracking-widest mt-4 md:mt-0"
            >
              View All Industries
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BAAREZ_CONFIG.industries.cards.map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative h-[500px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500 rounded-lg">
                  <div className="absolute inset-0 bg-gray-900">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#70564b] via-[#70564b]/50 to-transparent opacity-90"></div>

                  <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center mb-6 shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
                      <card.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                    <div className="h-0.5 w-0 bg-white group-hover:w-full transition-all duration-700 mb-4"></div>

                    {/* Key Regulations */}
                    {card.regulations && (
                      <p className="text-white/70 text-xs mb-4 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <span className="font-bold text-white">Key Regulations: </span>{card.regulations}
                      </p>
                    )}

                    {/* What you get on day 1 - Accelerators */}
                    {card.accelerators && (
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        <p className="text-xs font-bold text-white/80 uppercase tracking-wide mb-2">Out-of-the-box content:</p>
                        <ul className="space-y-1">
                          {card.accelerators.map((acc, j) => (
                            <li key={j} className="flex items-center gap-2 text-xs text-white/80">
                              <Icons.CheckCircle className="w-3 h-3 text-white/70 shrink-0" />
                              {acc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>
      </div>

{/* --- INTEGRATION NEXUS (RESPONSIVE) --- */}
<div className="py-16 md:py-24 lg:py-32 bg-[#fdfbf9] relative overflow-hidden">
  <Section>
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
      
      {/* Text Side */}
      <div className="w-full lg:w-1/2">
        <FadeIn>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#70564b] mb-4">
            Enterprise Connectivity
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-6 leading-tight">
            Built to Fit Your Existing Enterprise Stack
          </h3>

          <p className="text-sm text-gray-600 mb-8 leading-relaxed">
            Glimmora integrates seamlessly with the systems you already trust—enabling unified governance,
            risk intelligence, and compliance workflows without disrupting business operations.
          </p>

          <div className="mt-8 md:mt-10 p-6 bg-white border-l-4 border-[#70564b] shadow-lg rounded-r-lg">
            <div className="flex items-center gap-4">
              <Icons.Cloud className="w-8 h-8 text-[#70564b] shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  Enterprise-Ready Integration Model
                </h4>
                <p className="text-xs text-gray-500">
                  Connect once. Govern consistently across platforms.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Visual Side: The Aligned Neural Orbit */}
      {/* Adjusted height for mobile to fit scaled content */}
      <div className="w-full lg:w-1/2 h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center relative overflow-hidden lg:overflow-visible">
        
        {/* Container for the Orbit System */}
        {/* Mobile: Scale down to 0.65 to fit 450px circle in small screens. Tablet: 0.8. Desktop: 1.0 */}
        <div className="relative w-[450px] h-[450px] flex items-center justify-center scale-[0.65] md:scale-[0.8] lg:scale-100 origin-center transition-transform duration-500">
          
          {/* Central Hub */}
          <div className="absolute z-20 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#70564b]">
            <Icons.Chip className="w-10 h-10 text-[#70564b]" />
          </div>

          {/* Orbit Ring (Visual Guide) */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-200 animate-[spin_60s_linear_infinite] opacity-60"></div>
          <div className="absolute inset-24 rounded-full border border-gray-100 opacity-50"></div>

          {/* Nodes & Lines */}
          {BAAREZ_CONFIG.integrations.nodes.map((label, i) => {
            const totalNodes = BAAREZ_CONFIG.integrations.nodes.length
            const angle = i * (360 / totalNodes)
            const radius = 225

            return (
              <div key={i} className="absolute top-1/2 left-1/2 w-0 h-0">
                
                {/* Connection Line */}
                <motion.div
                  className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-[#70564b] to-transparent origin-left opacity-30"
                  style={{
                    width: radius,
                    rotate: angle,
                    y: "-50%"
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }} // Triggers when in viewport
                  viewport={{ once: true, margin: "-100px" }} // Won't reset, triggers slightly before full view
                  transition={{ duration: 0.8, delay: 0.1 + (i * 0.05) }}
                />

                {/* Orbiting Node */}
                <motion.div
                  className="absolute flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg border border-gray-100 z-10 text-xs font-bold text-gray-600 text-center px-2"
                  style={{
                    x: Math.cos(angle * (Math.PI / 180)) * radius,
                    y: Math.sin(angle * (Math.PI / 180)) * radius
                  }}
                  // 1. Initial State (Hidden & Uncentered)
                  initial={{ 
                    scale: 0, 
                    marginLeft: 0, 
                    marginTop: 0 
                  }}
                  // 2. Target State (Visible & Centered) - moved to whileInView
                  whileInView={{
                    scale: 1,
                    marginLeft: "-2.5rem", // Centers the 5rem width
                    marginTop: "-2.5rem"   // Centers the 5rem height
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: 0.3 + (i * 0.1), // Staggered delay
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                >
                  {label}
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  </Section>
</div>


      {/* ==========================================================
          NEW CREATIVE SECTION 2: HIGH CONTRAST IMPACT (ROI)
          Dark section focusing purely on numbers and results.
         ========================================================== */}
     {/* --- IMPACT SECTION WITH CASE ABSTRACTS --- */}
<div className="py-16 bg-[#fdfbf9] border-y border-gray-100">
  <Section>
    <div className="grid lg:grid-cols-12 gap-8 items-start">

        {/* Left: Text Content */}
        <div className="lg:col-span-4">
          <FadeIn>
            <div className="w-12 h-12 bg-[#70564b]/10 rounded-xl flex items-center justify-center text-[#70564b] mb-4">
              <Icons.TrendingUp className="w-6 h-6" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#70564b]">
              Measurable Enterprise Impact
            </h2>

            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Organizations partner with Glimmora International to move faster, operate with confidence,
              and convert governance and risk management into a source of strategic advantage.
            </p>

            {/* Field Results Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
              <Icons.CheckCircle className="w-3 h-3 text-green-600" />
              <span className="text-xs font-bold text-green-700 uppercase tracking-wide">Field Results from Deployed Programs</span>
            </div>
          </FadeIn>
        </div>

        {/* Right: Stats + Case Abstracts */}
        <div className="lg:col-span-8 space-y-6">

          {/* Stat Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { val: "60%", desc: "Reduction in manual compliance effort" },
              { val: "3–5x", desc: "Faster audit and reporting cycles" },
              { val: "99.9%", desc: "Operational availability across platforms" },
              { val: "Weeks", desc: "Time to value instead of months" }
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:border-[#70564b]/30 transition-all duration-300 group relative overflow-hidden">

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-[#70564b]/5 rounded-bl-full -mr-6 -mt-6 group-hover:bg-[#70564b]/10 transition-colors"></div>

                  <div className="text-4xl font-bold text-[#70564b] mb-2 relative z-10 font-mono tracking-tighter">
                    {stat.val}
                  </div>

                  <div className="h-1 w-8 bg-[#70564b] mb-3 rounded-full"></div>

                  <p className="text-gray-600 font-medium text-xs uppercase tracking-wide relative z-10">
                    {stat.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Mini Case Abstracts */}
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-4 bg-gray-50 border-b border-gray-100">
                <h4 className="text-xs font-bold text-[#70564b] uppercase tracking-widest">Outcome Snapshots</h4>
              </div>
              <div className="divide-y divide-gray-50">
                {[
                  { sector: "Tier-1 GCC Bank", metric: "62%", outcome: "reduction in manual control testing", platform: "GRC Platform" },
                  { sector: "Government Entity", metric: "4 weeks", outcome: "to full compliance visibility (vs 6 months industry avg)", platform: "Internal Audit" },
                  { sector: "Healthcare Provider", metric: "85%", outcome: "faster vendor risk assessments", platform: "TPRM" }
                ].map((caseItem, i) => (
                  <div key={i} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#70564b]"></div>
                      <div>
                        <span className="text-xs font-bold text-gray-700">{caseItem.sector}</span>
                        <span className="text-xs text-gray-400 mx-2">—</span>
                        <span className="text-xs text-[#70564b] font-bold">{caseItem.metric}</span>
                        <span className="text-xs text-gray-500 ml-1">{caseItem.outcome}</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide bg-gray-100 px-2 py-1 rounded">{caseItem.platform}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>

    </div>
  </Section>
</div>

    
<section className="w-full bg-slate-50 border-t border-slate-200 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-12">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#70564b] mb-3">
        Find Your Intelligence Layer
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold text-[#2E2A28]">
        Explore Glimmora by what matters to you
      </h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* 1. By Platform */}
      <a href="/platforms" className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#70564b] hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#70564b] to-[#956e5d] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {['CISOs', 'CROs', 'COOs', 'CTOs'].map((persona, i) => (
            <span key={i} className="px-2 py-0.5 bg-[#70564b]/5 text-[#70564b] text-xs font-bold">{persona}</span>
          ))}
        </div>
        <div className="w-16 h-16 bg-[#fdfbf9] text-[#70564b] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#70564b] group-hover:text-white transition-colors duration-300">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" /></svg>
        </div>
        <h4 className="font-bold text-xl text-[#2E2A28] mb-2">Browse by Platform</h4>
        <p className="text-xs text-[#70564b] font-medium italic mb-3">"Which platform fits my use case?"</p>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          Explore all 12+ Glimmora platforms — from GRC and cybersecurity to hospitality intelligence and defense simulation.
        </p>
        <span className="mt-auto text-[#70564b] font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
          View All Platforms <Icons.ArrowRight className="w-4 h-4" />
        </span>
      </a>

      {/* 2. By Industry */}
      <a href="/industries" className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#70564b] hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#70564b] to-[#4a3830] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {['Enterprise', 'Defense', 'Hospitality', 'Healthcare'].map((persona, i) => (
            <span key={i} className="px-2 py-0.5 bg-[#70564b]/10 text-[#70564b] text-xs font-bold">{persona}</span>
          ))}
        </div>
        <div className="w-16 h-16 bg-[#fdfbf9] text-[#70564b] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#70564b] group-hover:text-white transition-colors duration-300">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>
        </div>
        <h4 className="font-bold text-xl text-[#2E2A28] mb-2">Browse by Industry</h4>
        <p className="text-xs text-[#70564b] font-medium italic mb-3">"What's built for my sector?"</p>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          Each industry gets purpose-built intelligence — not generic tools. Find the exact platform for your regulatory and operational environment.
        </p>
        <span className="mt-auto text-[#70564b] font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
          Explore Industries <Icons.ArrowRight className="w-4 h-4" />
        </span>
      </a>

      {/* 3. Full Ecosystem */}
      <a href="/ecosystem" className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#2E2A28] hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E2A28] to-[#555] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {['Strategic Leaders', 'Enterprise Architects', 'Boards'].map((persona, i) => (
            <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-bold">{persona}</span>
          ))}
        </div>
        <div className="w-16 h-16 bg-[#fdfbf9] text-[#2E2A28] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#2E2A28] group-hover:text-white transition-colors duration-300">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" /></svg>
        </div>
        <h4 className="font-bold text-xl text-[#2E2A28] mb-2">The Full Ecosystem</h4>
        <p className="text-xs text-[#70564b] font-medium italic mb-3">"How does the full ecosystem connect?"</p>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          Understand Glimmora's 4-layer intelligence architecture and how platforms connect to create compounded intelligence across your organization.
        </p>
        <span className="mt-auto text-[#70564b] font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
          View Full Ecosystem <Icons.ArrowRight className="w-4 h-4" />
        </span>
      </a>

    </div>
  </div>
</section>



      {/* --- FINAL CTA --- */}
      {/* --- MINIMALIST CTA CARD --- */}
      <div className="py-20 bg-white border-t border-gray-50 relative">
        <Section>
          <FadeIn>
            {/* Card Container */}
            <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group hover:border-[#70564b]/20 transition-colors duration-500">
              
              {/* Stylish Brand Accent (Left Vertical Line) */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#70564b]"></div>
              
              {/* Subtle Ambient Glow (Decorative) */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#70564b]/5 to-transparent rounded-full blur-[60px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

              {/* Text Content */}
              <div className="relative z-10 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-2 tracking-tight">
                  {BAAREZ_CONFIG.cta.headline}
                </h2>
                <p className="text-sm text-gray-500 font-light max-w-lg leading-relaxed">
                  {BAAREZ_CONFIG.cta.subheadline}
                </p>
              </div>

              {/* Actions (Minimal Buttons - No Zoom) */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
                 <Link 
                    to="/contact" 
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#70564b] text-white font-semibold rounded text-center hover:bg-[#5f4940] transition-colors shadow-lg shadow-[#70564b]/20"
                 >
                   {BAAREZ_CONFIG.cta.button}
                 </Link>
                 <Link 
                    to="/contact" 
                    className="w-full sm:w-auto px-6 py-3.5 text-[#70564b] font-semibold text-center hover:bg-gray-50 rounded transition-colors"
                 >
                   Talk to Sales
                 </Link>
              </div>

            </div>
          </FadeIn>
        </Section>
      </div>

      {/* --- REVIEW TRUST DASHBOARD (MINIMAL & MERGED) --- */}
      <div className="py-16 bg-gray-50 border-t border-gray-200">
         <Section>
            <FadeIn>
               <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                  
                  {/* Left: Text Context */}
                  <div className="text-center md:text-left md:w-1/3">
                     <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-2">Customer Reviews</h2>
                     <p className="text-sm text-gray-500 leading-relaxed">
                        Trusted by government entities and global enterprises. Our partners do not just use Glimmora; they rely on it.
                     </p>
                     <div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <Icons.ShieldCheck className="w-4 h-4 text-green-600" />
                        <span>Verified Feedback</span>
                     </div>
                  </div>

                  {/* Right: The Data Card (Transparent/Merged) */}
                  <div className="flex-1 w-full flex flex-col sm:flex-row items-center justify-around gap-8 pl-0 md:pl-12">
                     
                     {/* Big Aggregate Score */}
                     <div className="text-center border-r-0 sm:border-r border-gray-200 sm:pr-12 w-full sm:w-auto">
                        <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-bold">Average Rating</div>
                        <div className="text-3xl md:text-4xl font-bold text-[#70564b] mb-1 tracking-tighter">4.9</div>
                        <div className="flex justify-center gap-1 text-[#70564b] mb-1">
                           {[...Array(5)].map((_, i) => (
                              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                           ))}
                        </div>
                        <div className="text-xs font-bold text-gray-400">out of 5.0</div>
                     </div>

                     {/* Review Count & Breakdown */}
                     <div className="flex flex-col gap-4 w-full sm:w-auto">
                        <div className="flex items-center justify-center sm:justify-start gap-4">
                           <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm text-xl font-bold text-gray-900">
                              31
                           </div>
                           <div className="text-left">
                              <div className="font-bold text-gray-900 text-sm">Total Reviews</div>
                              <div className="text-xs text-gray-500">Across all platforms</div>
                           </div>
                        </div>

                        {/* Mini Platform Bar */}
                        <div className="space-y-2 w-full max-w-xs mx-auto sm:mx-0">
                           <div className="flex items-center gap-3 text-xs">
                              <span className="font-bold text-gray-600 w-24 text-right sm:text-left">Reviewed on</span>
                              <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                 <div className="h-full bg-[#70564b] w-[98%]"></div>
                              </div>
                              <span className="font-bold text-[#70564b]">5.0</span>
                           </div>
                           <div className="flex items-center gap-3 text-xs">
                              <span className="font-bold text-gray-600 w-24 text-right sm:text-left">Service Quality</span>
                              <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                 <div className="h-full bg-[#70564b] w-[90%]"></div>
                              </div>
                              <span className="font-bold text-[#70564b]">4.5</span>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </FadeIn>
         </Section>
      </div>

    </div>
  )
}

export default Home
