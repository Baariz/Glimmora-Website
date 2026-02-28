import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

// --- DATA LISTS ---

const industries = [
  "Information Technology & Services", "Financial Services / Banking", "Insurance", "Manufacturing",
  "Healthcare & Life Sciences", "Retail & E-Commerce", "Logistics & Supply Chain", "Government / Public Sector",
  "Energy & Utilities", "Real Estate & Construction", "Education & E-Learning", "Telecom & Networking",
  "Hospitality & Travel", "Media & Entertainment", "Automotive", "Professional Services / Consulting",
  "Oil & Gas", "Aerospace & Defense", "Non-Profit / NGOs", "Other (Please Specify)"
];

const countries = [
  {name: "United States", code: "+1"}, {name: "United Kingdom", code: "+44"}, {name: "India", code: "+91"},
  {name: "United Arab Emirates", code: "+971"}, {name: "Saudi Arabia", code: "+966"}, {name: "Qatar", code: "+974"},
  {name: "Singapore", code: "+65"}, {name: "Canada", code: "+1"}, {name: "Australia", code: "+61"},
  {name: "Germany", code: "+49"}, {name: "France", code: "+33"}, {name: "Netherlands", code: "+31"},
  {name: "Afghanistan", code: "+93"}, {name: "Albania", code: "+355"}, {name: "Algeria", code: "+213"},
  {name: "Argentina", code: "+54"}, {name: "Austria", code: "+43"}, {name: "Bahrain", code: "+973"},
  {name: "Bangladesh", code: "+880"}, {name: "Belgium", code: "+32"}, {name: "Brazil", code: "+55"},
  {name: "China", code: "+86"}, {name: "Denmark", code: "+45"}, {name: "Egypt", code: "+20"},
  {name: "Finland", code: "+358"}, {name: "Greece", code: "+30"}, {name: "Hong Kong", code: "+852"},
  {name: "Indonesia", code: "+62"}, {name: "Ireland", code: "+353"}, {name: "Israel", code: "+972"},
  {name: "Italy", code: "+39"}, {name: "Japan", code: "+81"}, {name: "Kuwait", code: "+965"},
  {name: "Malaysia", code: "+60"}, {name: "Mexico", code: "+52"}, {name: "New Zealand", code: "+64"},
  {name: "Norway", code: "+47"}, {name: "Oman", code: "+968"}, {name: "Pakistan", code: "+92"},
  {name: "Philippines", code: "+63"}, {name: "Poland", code: "+48"}, {name: "Portugal", code: "+351"},
  {name: "Russia", code: "+7"}, {name: "South Africa", code: "+27"}, {name: "South Korea", code: "+82"},
  {name: "Spain", code: "+34"}, {name: "Sri Lanka", code: "+94"}, {name: "Sweden", code: "+46"},
  {name: "Switzerland", code: "+41"}, {name: "Thailand", code: "+66"}, {name: "Turkey", code: "+90"},
  {name: "Vietnam", code: "+84"}
  // Note: List truncated for performance, typically you'd include the full list or use a library
];

const WhitePaper = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => { emailjs.init('usx7JhywGy63cCrKc'); }, []);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    job_title: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    country: 'United States',
    privacy_consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'country') {
        const countryObj = countries.find(c => c.name === value);
        if (countryObj) setSelectedCountryCode(countryObj.code);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. Prepare data for EmailJS (including timestamp and formatted phone)
    const finalData = {
        ...formData,
        full_phone: `${selectedCountryCode} ${formData.phone}`,
        date_stamp: new Date().toLocaleString()
    };

    // 2. Send Data to Sales Team via EmailJS
    // REPLACE THE PLACEHOLDERS BELOW WITH YOUR ACTUAL CREDENTIALS
    emailjs.send(
        'service_wxj1uz3',      // e.g. 'service_x9s...'
        'template_2e2pi24',     // e.g. 'template_b7d...'
        finalData,
        'usx7JhywGy63cCrKc'       // e.g. 'user_8as...'
    )
    .then((result) => {
        console.log("Sales team notified successfully");
        setLoading(false);
        setSuccess(true);
        
        // 3. Automatically Trigger PDF Download
        const pdfUrl = "/grc-whitepaper.pdf"; // Path relative to public folder
        
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'Glimmora_GRC_Framework.pdf'); // Filename the user sees
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }, (error) => {
        console.log("EmailJS Error:", error.text);
        setLoading(false);
        alert("There was an issue processing your request. Please try again later.");
    });
  };

  if (success) {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20 flex items-center justify-center px-4 sm:px-6">
            <div className="max-w-md w-full bg-green-50 p-6 sm:p-8 rounded-xl border border-green-200 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">Your download should start automatically. If not, click the button below.</p>
                {/* Updated link to point to the correct file in public folder */}
                <a href="/grc-whitepaper.pdf" download="Glimmora_GRC_Framework.pdf" className="inline-block bg-[#70564b] text-white font-bold py-3 px-6 rounded hover:bg-[#5f4940] transition-colors">
                    Download PDF Now
                </a>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfbf9] pt-24 pb-20">
      
      {/* Header Background Strip */}
      <div className="bg-[#2E2A28] text-white py-10 md:py-16 mb-8 md:mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#70564b]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">GRC in the Age of AI</h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">Strategic insights for regulated enterprises.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: Content */}
            <div className="lg:col-span-7 space-y-8">
                <div>
                    <span className="text-[#70564b] font-bold uppercase tracking-widest text-xs">White Paper</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E2A28] mt-2 mb-6">
                        A Framework for Strong GRC in a Digitally Evolving World
                    </h2>
                    <div className="w-20 h-1 bg-[#70564b] mb-8"></div>
                    
                    <div className="prose prose-base md:prose-lg text-gray-600 leading-relaxed">
                        <p className="mb-6">
                            As AI continues to evolve at an unprecedented pace, governments worldwide are rushing to introduce frameworks that unlock its potential while keeping rising risks in check.
                        </p>
                        <p className="mb-6">
                            For modern organizations, this global push for AI regulation isn’t just political it’s an urgent signal to strengthen internal governance, risk, and compliance (GRC) processes.
                        </p>
                        <p className="mb-6">
                            This white paper walks you through practical steps to build robust controls that help you stay compliant, deploy AI responsibly, and stay ahead of rapidly shifting regulatory demands.
                        </p>
                        <p className="font-semibold text-[#70564b]">
                            Fill out the form to get instant access and start shaping a safer, smarter AI future.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 md:mt-8">
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 bg-[#70564b]/10 rounded-lg flex items-center justify-center text-[#70564b] mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">What You Will Learn</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>• Global AI Regulatory Landscape</li>
                            <li>• Automated Compliance Workflows</li>
                            <li>• Risk Mitigation Strategies</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 bg-[#70564b]/10 rounded-lg flex items-center justify-center text-[#70564b] mb-4">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Format</h4>
                        <p className="text-sm text-gray-600">
                            PDF Download<br/>
                            12 Pages<br/>
                            Instant Access
                        </p>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: Form */}
            <div className="lg:col-span-5">
                <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-200 p-4 sm:p-6 md:p-8 sticky top-28">
                    <h3 className="text-2xl font-bold text-[#2E2A28] mb-6 border-b border-gray-100 pb-4">
                        Get your copy
                    </h3>
                    
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                        
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">First Name *</label>
                                <input 
                                    type="text" 
                                    name="first_name" 
                                    required 
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#70564b] focus:border-[#70564b] block p-2.5" 
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Last Name</label>
                                <input 
                                    type="text" 
                                    name="last_name" 
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#70564b] focus:border-[#70564b] block p-2.5" 
                                />
                            </div>
                        </div>

                        {/* Job & Company */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Job Title *</label>
                            <input 
                                type="text" 
                                name="job_title" 
                                required 
                                value={formData.job_title}
                                onChange={handleChange}
                                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#70564b] focus:border-[#70564b] block p-2.5" 
                            />
                        </div>
                         <div>
                            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Company *</label>
                            <input 
                                type="text" 
                                name="company" 
                                required 
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#70564b] focus:border-[#70564b] block p-2.5" 
                            />
                        </div>

                        {/* Work Email */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Work Email *</label>
                            <input 
                                type="email" 
                                name="email" 
                                required 
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#70564b] focus:border-[#70564b] block p-2.5" 
                            />
                        </div>

                        {/* Country */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Country *</label>
                            <select 
                                name="country" 
                                required 
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#70564b] focus:border-[#70564b] block p-2.5"
                            >
                                {countries.map((c) => (
                                    <option key={c.name} value={c.name}>{c.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Phone with Auto Code */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Phone *</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                                    {selectedCountryCode}
                                </span>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    required 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-[#70564b] focus:border-[#70564b] block flex-1 min-w-0 w-full text-sm p-2.5" 
                                    placeholder="123-456-7890"
                                />
                            </div>
                        </div>

                        {/* Industry */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Industry *</label>
                            <select 
                                name="industry" 
                                required 
                                value={formData.industry}
                                onChange={handleChange}
                                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#70564b] focus:border-[#70564b] block p-2.5"
                            >
                                <option value="" disabled>Select Industry</option>
                                {industries.map((ind) => (
                                    <option key={ind} value={ind}>{ind}</option>
                                ))}
                            </select>
                        </div>

                        {/* Privacy Statement */}
                        <div className="bg-gray-50 p-3 rounded text-[10px] text-gray-500 leading-tight">
                            At Glimmora International, your privacy isn’t just a policy, it’s a promise. We use your personal information strictly to manage your account and deliver the services you trust us for. From time to time, we’d also love to share updates about our latest solutions, innovations, and valuable content that could benefit your business. Your consent helps us keep our conversations meaningful, relevant, and always welcome.
                        </div>

                        {/* Consent Checkbox */}
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input 
                                    id="privacy_consent" 
                                    name="privacy_consent"
                                    type="checkbox" 
                                    required 
                                    checked={formData.privacy_consent}
                                    onChange={handleChange}
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#70564b] accent-[#70564b]" 
                                />
                            </div>
                            <label htmlFor="privacy_consent" className="ml-2 text-xs font-medium text-gray-900">
                                I agree to allow Glimmora International to store and process my personal data.*
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full text-white bg-[#70564b] hover:bg-[#5f4940] focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-lg text-sm px-5 py-3 text-center transition-all duration-300 disabled:opacity-50"
                        >
                            {loading ? 'Processing...' : 'Download White Paper'}
                        </button>

                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhitePaper;