import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

/* =========================================
   1. Icon System
   ========================================= */
const Icons = {
  Scan: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M7 12h10" />
    </svg>
  ),
  FileText: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  ),
  Globe: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  CheckCircle: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Lightning: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  Layers: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  ShieldCheck: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  Alert: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
  Clock: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  ArrowRight: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
  Invoice: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  )
};

/* =========================================
   2. Micro-Components (Visuals)
   ========================================= */

// UPDATED Hero Visual: Larger Paper, Floating Elements Fix
const ScanVisual = () => (
  <div className="relative w-full h-[550px] flex items-center justify-center">
    
    {/* Large Document (Back Layer) */}
    <div className="absolute w-80 h-[28rem] bg-white border border-gray-200 rounded-lg shadow-xl transform -rotate-3 z-0 origin-bottom-left"></div>
    
    {/* The Active Document (Front Layer - Much Bigger) */}
    <div className="relative w-80 h-[28rem] bg-white border border-gray-200 rounded-lg shadow-2xl z-10 overflow-visible">
      {/* Document Content Skeleton */}
      <div className="p-8 space-y-6">
        <div className="flex justify-between items-center">
            <div className="w-1/3 h-5 bg-gray-200 rounded"></div>
            <div className="w-10 h-10 rounded-full bg-gray-100"></div>
        </div>
        <div className="w-full h-px bg-gray-100 my-6"></div>
        <div className="space-y-3">
          <div className="w-full h-3 bg-gray-100 rounded"></div>
          <div className="w-5/6 h-3 bg-gray-100 rounded"></div>
          <div className="w-4/6 h-3 bg-gray-100 rounded"></div>
          <div className="w-full h-3 bg-gray-100 rounded"></div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-10">
          <div className="h-24 bg-gray-50 rounded border border-gray-100"></div>
          <div className="h-24 bg-gray-50 rounded border border-gray-100"></div>
        </div>
      </div>

      {/* The Scanning Beam */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#70564b]/20 to-transparent border-t-2 border-[#70564b] shadow-[0_0_20px_rgba(112,86,75,0.3)] pointer-events-none"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      {/* Extracted Data Floating Out (Fixed Z-Index & Position) */}
      <motion.div 
        className="absolute top-1/4 -right-32 bg-white p-4 rounded-lg shadow-xl border border-[#70564b]/20 z-50 w-48"
        initial={{ opacity: 0, x: -20, scale: 0.9 }}
        animate={{ opacity: [0, 1, 1, 0], x: [-20, 0, 0, 20], scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0">
            <Icons.CheckCircle className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Invoice ID</div>
            <div className="text-sm font-bold text-[#2E2A28]">#INV-8821</div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-1/4 -left-32 bg-white p-4 rounded-lg shadow-xl border border-[#70564b]/20 z-50 w-48"
        initial={{ opacity: 0, x: 20, scale: 0.9 }}
        animate={{ opacity: [0, 1, 1, 0], x: [20, 0, 0, -20], scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, delay: 2.5 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0">
            <Icons.CheckCircle className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Total Amount</div>
            <div className="text-sm font-bold text-[#2E2A28]">$4,250.00</div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

/* =========================================
   3. Main Page Component
   ========================================= */

const ScanVista = () => {
  const [activeTab, setActiveTab] = useState('invoice');

  return (
    <div className="min-h-screen bg-white font-sans text-[#2E2A28] selection:bg-[#70564b] selection:text-white">
      
      {/* --- 1. HERO: (Kept the Same, Updated Visual) --- */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-20 py-16 md:py-20 lg:py-24 max-w-[1800px] mx-auto bg-[#fdfbf9] border-b border-gray-100 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left: Text */}
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 bg-[#70564b]/10 text-[#70564b] text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
              Glimmora ScanVista
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[#2E2A28] leading-tight">
              Stop typing data. <br/>
              <span className="text-[#70564b]">Start using it.</span>
            </h1>
            
            <p className="text-sm text-gray-600 font-light leading-relaxed max-w-lg mb-10">
              AI-powered OCR that transforms physical documents into structured, searchable digital data—automatically.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-[#70564b] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#5f4940] transition-colors shadow-xl rounded-sm text-center">
                Schedule a Consultation
              </Link>
              <a href="#features" className="px-8 py-4 bg-white border border-gray-200 text-[#2E2A28] font-bold text-sm uppercase tracking-wider hover:border-[#70564b] transition-colors text-center rounded-sm">
                See Features
              </a>
            </div>
          </div>

          {/* Right: Visual (Fixed Clipping) */}
          <div className="hidden lg:block relative z-20">
            <ScanVisual />
          </div>
        </div>
      </section>

      {/* --- 2. DEFINITION: The "Process Stream" Layout --- */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-center">
            
            {/* Step 1: Input */}
            <div className="relative p-8 border border-gray-100 rounded-2xl bg-gray-50 text-center">
              <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center shadow-sm mb-6 text-gray-400">
                <Icons.FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#2E2A28] mb-2">1. Input</h3>
              <p className="text-sm text-gray-500">Unstructured PDFs, Images, Scans.</p>
              {/* Connector */}
              <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[2px] bg-gray-200"></div>
            </div>

            {/* Step 2: Engine */}
            <div className="relative p-8 md:p-10 border border-[#70564b]/20 rounded-2xl bg-[#70564b]/5 text-center shadow-lg transform lg:scale-105 z-10">
              <div className="w-20 h-20 bg-[#70564b] rounded-full mx-auto flex items-center justify-center shadow-lg mb-6 text-white animate-pulse">
                <Icons.Lightning className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#2E2A28] mb-2">2. Glimmora ScanVista Core</h3>
              <p className="text-sm text-gray-600">AI Recognition, Field Mapping, Validation.</p>
              {/* Connector */}
              <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[2px] bg-gray-200"></div>
            </div>

            {/* Step 3: Output */}
            <div className="relative p-8 border border-gray-100 rounded-2xl bg-gray-50 text-center">
              <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center shadow-sm mb-6 text-green-600">
                <Icons.Layers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#2E2A28] mb-2">3. Output</h3>
              <p className="text-sm text-gray-500">Structured JSON, ERP Entry, Analytics.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- 3. THE PROBLEM: The "Bottleneck Bar" Layout --- */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-20 bg-[#f9fafb]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E2A28] mb-4">The Manual Bottleneck</h2>
            <p className="text-gray-500 text-sm">Where human speed limits business growth.</p>
          </div>

          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
            {/* Background Stripe */}
            <div className="absolute top-0 left-0 w-2 h-full bg-[#70564b]"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="text-center md:text-left pt-6 md:pt-0 first:pt-0">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-[#70564b]">
                  <Icons.Clock className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-wider text-xs">Speed</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-light text-[#2E2A28] mb-2">3 Days</h3>
                <p className="text-sm text-gray-500">Average time to manually process complex invoices.</p>
              </div>

              <div className="text-center md:text-left md:pl-12 pt-6 md:pt-0">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-[#70564b]">
                  <Icons.Alert className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-wider text-xs">Accuracy</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-light text-[#2E2A28] mb-2">4% Error</h3>
                <p className="text-sm text-gray-500">Manual keystroke error rate in data entry.</p>
              </div>

              <div className="text-center md:text-left md:pl-12 pt-6 md:pt-0">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-[#70564b]">
                  <Icons.Layers className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-wider text-xs">Scale</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-light text-[#2E2A28] mb-2">Limited</h3>
                <p className="text-sm text-gray-500">Cannot scale without hiring more staff.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. THE SOLUTION: The "Masonry Grid" Layout --- */}
      <section id="features" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E2A28]">Platform Capabilities</h2>
            <div className="h-1 w-20 bg-[#70564b] mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Feature 1: Large Card (Spans 2 cols) */}
            <div className="md:col-span-2 bg-[#fdfbf9] p-6 sm:p-8 md:p-10 rounded-xl border border-gray-100 flex flex-col md:flex-row gap-6 md:gap-8 items-center group hover:border-[#70564b] transition-colors">
              <div className="flex-1">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#70564b] shadow-sm mb-6">
                  <Icons.Lightning className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#2E2A28] mb-3">Swift Extraction</h3>
                <p className="text-gray-600 leading-relaxed">
                  Process thousands of pages in minutes. Our engine identifies key-value pairs (Invoice #, Date, Total) instantly, regardless of layout.
                </p>
              </div>
              <div className="w-full md:w-1/3 h-32 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-xs font-mono text-gray-400">Processing...</span>
              </div>
            </div>

            {/* Feature 2: Tall Card */}
            <div className="md:row-span-2 bg-white p-6 sm:p-8 md:p-10 rounded-xl border border-gray-200 hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <Icons.Globe className="w-10 h-10 text-gray-400 mb-6" />
                <h3 className="text-xl font-bold text-[#2E2A28] mb-3">Bilingual Core</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Built natively for <strong>English & Arabic</strong>. Most OCR tools fail at right-to-left text; Glimmora ScanVista excels at it.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="flex justify-between text-xs font-bold text-gray-400 uppercase">
                  <span>ENG</span>
                  <span>ARA</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
                  <div className="w-full h-full bg-[#70564b] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#70564b] transition-colors">
              <Icons.Layers className="w-8 h-8 text-[#70564b] mb-4" />
              <h3 className="text-xl font-bold text-[#2E2A28] mb-2">Smart Formatting</h3>
              <p className="text-sm text-gray-600">Converts unstructured scans into clean JSON, XML, or CSV ready for ERP import.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#70564b] transition-colors">
              <Icons.ShieldCheck className="w-8 h-8 text-[#70564b] mb-4" />
              <h3 className="text-xl font-bold text-[#2E2A28] mb-2">Secure & Private</h3>
              <p className="text-sm text-gray-600">Enterprise-grade encryption for all processed documents. SOC2 Compliant.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- 5. USE CASES: The "Interactive Tabs" Layout --- */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#fdfbf9] border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E2A28]">Applications</h2>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            {[
              { id: 'invoice', label: 'Finance & AP' },
              { id: 'legal', label: 'Legal & HR' },
              { id: 'ops', label: 'Operations' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-[#2E2A28] text-white shadow-lg' 
                    : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-8 md:p-16 shadow-sm min-h-[250px] md:min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              {activeTab === 'invoice' && (
                <motion.div 
                  key="invoice"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full"
                >
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2A28] mb-4">Invoice Processing</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Finance teams use Glimmora ScanVista to automate Accounts Payable. Drop in a PDF invoice, and get back vendor name, invoice date, line items, and tax amounts instantly.
                    </p>
                    <ul className="space-y-2 text-sm font-bold text-[#70564b]">
                      <li className="flex items-center gap-2"><Icons.CheckCircle className="w-4 h-4" /> 3-Way Matching</li>
                      <li className="flex items-center gap-2"><Icons.CheckCircle className="w-4 h-4" /> PO Validation</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 flex justify-center">
                    <Icons.Invoice className="w-32 h-32 text-gray-300" />
                  </div>
                </motion.div>
              )}

              {activeTab === 'legal' && (
                <motion.div 
                  key="legal"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full"
                >
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2A28] mb-4">Digital Archiving</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Legal and HR teams digitize legacy paper files (contracts, employee records) into a searchable, secure digital archive.
                    </p>
                    <ul className="space-y-2 text-sm font-bold text-[#70564b]">
                      <li className="flex items-center gap-2"><Icons.CheckCircle className="w-4 h-4" /> Full Text Search</li>
                      <li className="flex items-center gap-2"><Icons.CheckCircle className="w-4 h-4" /> Redaction Ready</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 flex justify-center">
                    <Icons.Layers className="w-32 h-32 text-gray-300" />
                  </div>
                </motion.div>
              )}

              {activeTab === 'ops' && (
                <motion.div 
                  key="ops"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full"
                >
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2A28] mb-4">Forms Processing</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Operations teams auto-fill databases from customer applications, surveys, and handwritten intake forms.
                    </p>
                    <ul className="space-y-2 text-sm font-bold text-[#70564b]">
                      <li className="flex items-center gap-2"><Icons.CheckCircle className="w-4 h-4" /> Handwriting (ICR)</li>
                      <li className="flex items-center gap-2"><Icons.CheckCircle className="w-4 h-4" /> Checkbox Detection</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 flex justify-center">
                    <Icons.FileText className="w-32 h-32 text-gray-300" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- 6. BENEFITS: The "Bold Metrics" Strip --- */}
      <section className="py-12 md:py-16 lg:py-20 section-brand-bg text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 text-center">
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">80%</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Faster Processing</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">50%</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">99%</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Data Accuracy</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. CTA: The "Floating Card" --- */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl shadow-2xl text-center relative overflow-hidden">
          {/* Decor */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#70564b]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#70564b]/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E2A28] mb-4 md:mb-6">Eliminate the paper backlog.</h2>
            <p className="text-sm text-gray-500 mb-6 md:mb-10">
              See how Glimmora ScanVista can digitize your operations with speed and accuracy.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#70564b] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#5f4940] transition-colors rounded-sm shadow-lg"
            >
              Book A Demo
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ScanVista;