import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  const lastUpdated = "January 2024";

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
            <span className="text-xs text-[#70564b] font-bold uppercase tracking-[0.4em] mb-4 block">Legal Documentation</span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#70564b] mb-6">Privacy Policy</h1>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
              Baâriz Technology Solutions is committed to protecting your privacy. This policy explains how we collect, 
              use, and safeguard your personal information across our services and subdomains.
            </p>
            <div className="mt-8 text-gray-400 text-xs uppercase tracking-widest font-bold">
              Last Updated: {lastUpdated}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-gray-100 shadow-sm p-8 md:p-16 space-y-12">
            
            {/* 1. Introduction */}
            <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
              <p>
                By accessing or using our Service, you signify that you have read, understood, and agree to our collection, 
                storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
              </p>
            </div>

            {/* 2. Definitions */}
            <div>
              <h3 className="text-xl text-[#70564b] font-bold mb-6 border-b border-gray-50 pb-2">Definitions and Key Terms</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { term: "Cookie", desc: "Small data used to identify your browser, provide analytics, and remember preferences." },
                  { term: "Company", desc: "Baâriz Technology Solutions, Doha, Qatar (responsible for your information)." },
                  { term: "Personal Data", desc: "Information allowing for the identification or identifiability of a natural person." },
                  { term: "Website", desc: "Accessed via baariz.com.qa." },
                  { term: "Device", desc: "Any internet-connected device used to visit the Service." },
                  { term: "IP Address", desc: "Numbers assigned to devices to identify geographic connection blocks." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#FCFCFC] p-4 border border-gray-50">
                    <span className="block font-bold text-[#70564b] text-xs uppercase mb-1">{item.term}</span>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Information Collection */}
            <div>
              <h3 className="text-[#70564b] font-bold text-lg mb-4">What Information Do We Collect?</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                We collect information when you visit our website, register, place an order, or fill out a form:
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                <li>Name / Username</li>
                <li>Email Addresses</li>
                <li>Billing/Payment details (processed via secure SSL providers)</li>
              </ul>
            </div>

            {/* 4. Use of Information */}
            <div className="bg-[#70564b] p-8 text-white">
              <h3 className="font-bold text-lg mb-4">How Do We Use Your Data?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-white/80">
                <p>• Personalizing your user experience</p>
                <p>• Improving customer service and support</p>
                <p>• Processing secure transactions</p>
                <p>• Sending periodic administrative emails</p>
                <p>• Improving website performance</p>
                <p>• Administering surveys or promotions</p>
              </div>
            </div>

            {/* 5. Security */}
            <div>
              <h3 className="text-[#70564b] font-bold text-lg mb-4">Data Security & Protection</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We implement Secure Socket Layer (SSL) technology and encrypt sensitive data into our payment gateway 
                providers' databases. While we implement physical, electronic, and managerial procedures to safeguard 
                your information, please note that no security system is foolproof.
              </p>
            </div>

            {/* 6. International Transfers */}
            <div>
              <h3 className="text-[#70564b] font-bold text-lg mb-4">International Data Transfers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Baâriz Technology Solutions is incorporated in Qatar. Information collected may be transferred to 
                offices, personnel, or third parties worldwide. By using our Service, you consent to the trans-border 
                transfer and hosting of such information.
              </p>
            </div>

            {/* 7. GDPR & CCPA */}
            <div className="border-l-4 border-[#70564b] pl-6 py-2">
              <h3 className="text-[#2E2A28] font-bold text-lg mb-4 uppercase tracking-tighter">Global Compliance (GDPR & CCPA)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We respect your rights to data access, portability, and deletion. European and California residents 
                possess specific rights to request a record of their data or demand its deletion. We dispose of 
                conversation data after 6 years or 60 days following account deletion.
              </p>
            </div>

            {/* 8. Contact Us */}
            <div className="pt-10 border-t border-gray-100">
              <h3 className="text-[#70564b] font-bold text-lg mb-6">Contact Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600">
                <div>
                  <span className="block font-bold text-[#70564b] text-[10px] uppercase mb-2">Support Channels</span>
                  <p>Email: info@baarez.com</p>
                  <p>Phone: +974 44164978</p>
                </div>
                <div>
                  <span className="block font-bold text-[#70564b] text-[10px] uppercase mb-2">Registered Address</span>
                  <p className="leading-relaxed">
                    Baâriz Technology Solutions<br />
                    Office No.15, 2nd Floor, MISR Insurance Building<br />
                    Street no 230, C-ring Road, Doha, Qatar
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER NOTICE */}
      <footer className="py-12 bg-white border-t border-gray-50 text-center">
        <p className="text-gray-300 text-[10px] uppercase tracking-[0.5em] font-bold italic">
          Transparency • Security • Innovation
        </p>
      </footer>
    </div>
  );
};

export default Privacy;