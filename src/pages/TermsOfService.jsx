import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, FileText, Lock, AlertCircle, Gavel, Zap } from 'lucide-react';

const TermsOfService = () => {
  const lastUpdated = "January 2026";

  return (
    <div className="bg-[#FCFCFC] font-sans text-[#2E2A28] pt-32 min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-center"
          >
            <span className="text-xs text-[#70564b] font-bold uppercase tracking-[0.4em] mb-4 block">Legal Framework</span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#70564b] mb-6 tracking-tight">Terms & Conditions</h1>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
              Welcome to Glimmora International. By accessing and using our services, you agree to comply with the 
              following terms and conditions designed to ensure a secure and transparent partnership.
            </p>
            <div className="mt-8 text-gray-400 text-xs uppercase tracking-widest font-bold">
              Effective Date: {lastUpdated}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-gray-100 shadow-sm p-8 md:p-16 space-y-12">
            
            {/* 1. Definitions */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-[#70564b]" />
                  <h3 className="text-[#70564b] font-bold text-sm uppercase tracking-wider">Definitions</h3>
                </div>
              </div>
              <div className="md:col-span-8 prose prose-sm text-gray-600">
                <p>
                  In these terms and conditions, <strong>“we”</strong>, <strong>“our”</strong> and <strong>“us”</strong> refer to Glimmora International. 
                  <strong> “You”</strong> and <strong>“your”</strong> refer to the user or entity accessing our services.
                </p>
              </div>
            </div>

            {/* 2. Services */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-8 border-t border-gray-50">
              <div className="md:col-span-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-[#70564b]" />
                  <h3 className="text-[#70564b] font-bold text-sm uppercase tracking-wider">Services</h3>
                </div>
              </div>
              <div className="md:col-span-8 prose prose-sm text-gray-600">
                <p>
                  Glimmora International provides technology and software development services, 
                  including software, web, and mobile app development, and cloud solutions. 
                  We reserve the right to modify, suspend, or discontinue services at any time without notice.
                </p>
              </div>
            </div>

            {/* 3. Intellectual Property */}
            <div className="bg-[#FCFCFC] p-8 border border-gray-50">
              <h3 className="text-[#70564b] font-bold text-lg mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#70564b]" /> Intellectual Property
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Glimmora International retains all rights, title, and interest in its intellectual property, 
                including software, trademarks, logos, and copyrights. You may not use or distribute 
                our intellectual property without prior written consent.
              </p>
              <h4 className="text-[#2E2A28] font-bold text-xs uppercase tracking-widest mb-3">User Content License</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                By using our services, you grant us a worldwide, royalty-free, non-exclusive license to use, reproduce, 
                and display your content solely in connection with our services.
              </p>
            </div>

            {/* 4. Confidentiality */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-8 border-t border-gray-50">
              <div className="md:col-span-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="w-4 h-4 text-[#70564b]" />
                  <h3 className="text-[#70564b] font-bold text-sm uppercase tracking-wider">Confidentiality</h3>
                </div>
              </div>
              <div className="md:col-span-8 prose prose-sm text-gray-600">
                <p>
                  We agree to protect your confidential information and use it solely for providing our services. 
                  You agree to maintain the confidentiality of any proprietary information belonging 
                  to Glimmora International encountered during our engagement.
                </p>
              </div>
            </div>

            {/* 5. Liability */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-8 border-t border-gray-50">
              <div className="md:col-span-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-[#70564b]" />
                  <h3 className="text-[#70564b] font-bold text-sm uppercase tracking-wider">Liability</h3>
                </div>
              </div>
              <div className="md:col-span-8 prose prose-sm text-gray-600">
                <p className="mb-4">
                  Glimmora International shall not be liable for any direct, indirect, or consequential 
                  damages arising out of your use of our services.
                </p>
                <p>
                  You agree to indemnify and hold harmless Glimmora International from any claims 
                  arising out of your use of our services or breach of these terms.
                </p>
              </div>
            </div>

            {/* 6. Governing Law */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-8 border-t border-gray-50">
              <div className="md:col-span-4">
                <div className="flex items-center gap-2 mb-2">
                  <Gavel className="w-4 h-4 text-[#70564b]" />
                  <h3 className="text-[#70564b] font-bold text-sm uppercase tracking-wider">Governing Law</h3>
                </div>
              </div>
              <div className="md:col-span-8 prose prose-sm text-gray-600">
                <p>
                  These terms shall be governed by the laws of the State of Qatar. Any disputes shall 
                  be resolved through arbitration in accordance with local regulations.
                </p>
              </div>
            </div>

            {/* Contact & Privacy Link */}
            <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="text-sm text-gray-600">
                <h3 className="text-[#70564b] font-bold mb-2">Legal Inquiries</h3>
                <p>Email: info@glimmora.ai</p>
                <p className="mt-4">
                  For information on data handling, visit our <Link to="/privacy" className="text-[#70564b] font-bold hover:underline">Privacy Policy</Link>.
                </p>
              </div>
              <div className="bg-[#70564b] p-6 text-white max-w-xs shadow-lg">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2 text-[#70564b]">Notice</p>
                <p className="text-xs leading-relaxed opacity-80">
                  Continued use of our services constitutes acceptance of these terms. We reserve the right to 
                  update these conditions at any time.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER NOTICE */}
      <footer className="py-12 bg-white border-t border-gray-50 text-center">
        <p className="text-gray-300 text-[10px] uppercase tracking-[0.5em] font-bold italic">
          Trust • Accountability • Innovation
        </p>
      </footer>
    </div>
  );
};

export default TermsOfService;