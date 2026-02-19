import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs, { init } from '@emailjs/browser';

// --- DATA: 200+ Countries & Codes ---
const COUNTRY_DATA = [
  { name: "Afghanistan", code: "+93" }, { name: "Albania", code: "+355" }, { name: "Algeria", code: "+213" }, { name: "Andorra", code: "+376" },
  { name: "Angola", code: "+244" }, { name: "Antigua & Barbuda", code: "+1-268" }, { name: "Argentina", code: "+54" }, { name: "Armenia", code: "+374" },
  { name: "Australia", code: "+61" }, { name: "Austria", code: "+43" }, { name: "Azerbaijan", code: "+994" }, { name: "Bahamas", code: "+1-242" },
  { name: "Bahrain", code: "+973" }, { name: "Bangladesh", code: "+880" }, { name: "Barbados", code: "+1-246" }, { name: "Belarus", code: "+375" },
  { name: "Belgium", code: "+32" }, { name: "Belize", code: "+501" }, { name: "Benin", code: "+229" }, { name: "Bhutan", code: "+975" },
  { name: "Bolivia", code: "+591" }, { name: "Bosnia & Herzegovina", code: "+387" }, { name: "Botswana", code: "+267" }, { name: "Brazil", code: "+55" },
  { name: "Brunei", code: "+673" }, { name: "Bulgaria", code: "+359" }, { name: "Burkina Faso", code: "+226" }, { name: "Burundi", code: "+257" },
  { name: "Cambodia", code: "+855" }, { name: "Cameroon", code: "+237" }, { name: "Canada", code: "+1" }, { name: "Cape Verde", code: "+238" },
  { name: "Central African Republic", code: "+236" }, { name: "Chad", code: "+235" }, { name: "Chile", code: "+56" }, { name: "China", code: "+86" },
  { name: "Colombia", code: "+57" }, { name: "Comoros", code: "+269" }, { name: "Congo (Brazzaville)", code: "+242" }, { name: "Congo (Kinshasa)", code: "+243" },
  { name: "Costa Rica", code: "+506" }, { name: "Croatia", code: "+385" }, { name: "Cuba", code: "+53" }, { name: "Cyprus", code: "+357" },
  { name: "Czech Republic", code: "+420" }, { name: "Denmark", code: "+45" }, { name: "Djibouti", code: "+253" }, { name: "Dominica", code: "+1-767" },
  { name: "Dominican Republic", code: "+1-809" }, { name: "Ecuador", code: "+593" }, { name: "Egypt", code: "+20" }, { name: "El Salvador", code: "+503" },
  { name: "Equatorial Guinea", code: "+240" }, { name: "Eritrea", code: "+291" }, { name: "Estonia", code: "+372" }, { name: "Eswatini", code: "+268" },
  { name: "Ethiopia", code: "+251" }, { name: "Fiji", code: "+679" }, { name: "Finland", code: "+358" }, { name: "France", code: "+33" },
  { name: "Gabon", code: "+241" }, { name: "Gambia", code: "+220" }, { name: "Georgia", code: "+995" }, { name: "Germany", code: "+49" },
  { name: "Ghana", code: "+233" }, { name: "Greece", code: "+30" }, { name: "Grenada", code: "+1-473" }, { name: "Guatemala", code: "+502" },
  { name: "Guinea", code: "+224" }, { name: "Guinea-Bissau", code: "+245" }, { name: "Guyana", code: "+592" }, { name: "Haiti", code: "+509" },
  { name: "Honduras", code: "+504" }, { name: "Hong Kong", code: "+852" }, { name: "Hungary", code: "+36" }, { name: "Iceland", code: "+354" },
  { name: "India", code: "+91" }, { name: "Indonesia", code: "+62" }, { name: "Iran", code: "+98" }, { name: "Iraq", code: "+964" },
  { name: "Ireland", code: "+353" }, { name: "Israel", code: "+972" }, { name: "Italy", code: "+39" }, { name: "Ivory Coast", code: "+225" },
  { name: "Jamaica", code: "+1-876" }, { name: "Japan", code: "+81" }, { name: "Jordan", code: "+962" }, { name: "Kazakhstan", code: "+7" },
  { name: "Kenya", code: "+254" }, { name: "Kiribati", code: "+686" }, { name: "North Korea", code: "+850" }, { name: "South Korea", code: "+82" },
  { name: "Kuwait", code: "+965" }, { name: "Kyrgyzstan", code: "+996" }, { name: "Laos", code: "+856" }, { name: "Latvia", code: "+371" },
  { name: "Lebanon", code: "+961" }, { name: "Lesotho", code: "+266" }, { name: "Liberia", code: "+231" }, { name: "Libya", code: "+218" },
  { name: "Liechtenstein", code: "+423" }, { name: "Lithuania", code: "+370" }, { name: "Luxembourg", code: "+352" }, { name: "Madagascar", code: "+261" },
  { name: "Malawi", code: "+265" }, { name: "Malaysia", code: "+60" }, { name: "Maldives", code: "+960" }, { name: "Mali", code: "+223" },
  { name: "Malta", code: "+356" }, { name: "Marshall Islands", code: "+692" }, { name: "Mauritania", code: "+222" }, { name: "Mauritius", code: "+230" },
  { name: "Mexico", code: "+52" }, { name: "Micronesia", code: "+691" }, { name: "Moldova", code: "+373" }, { name: "Monaco", code: "+377" },
  { name: "Mongolia", code: "+976" }, { name: "Montenegro", code: "+382" }, { name: "Morocco", code: "+212" }, { name: "Mozambique", code: "+258" },
  { name: "Myanmar", code: "+95" }, { name: "Namibia", code: "+264" }, { name: "Nauru", code: "+674" }, { name: "Nepal", code: "+977" },
  { name: "Netherlands", code: "+31" }, { name: "New Zealand", code: "+64" }, { name: "Nicaragua", code: "+505" }, { name: "Niger", code: "+227" },
  { name: "Nigeria", code: "+234" }, { name: "North Macedonia", code: "+389" }, { name: "Norway", code: "+47" }, { name: "Oman", code: "+968" },
  { name: "Pakistan", code: "+92" }, { name: "Palau", code: "+680" }, { name: "Palestine", code: "+970" }, { name: "Panama", code: "+507" },
  { name: "Papua New Guinea", code: "+675" }, { name: "Paraguay", code: "+595" }, { name: "Peru", code: "+51" }, { name: "Philippines", code: "+63" },
  { name: "Poland", code: "+48" }, { name: "Portugal", code: "+351" }, { name: "Qatar", code: "+974" }, { name: "Romania", code: "+40" },
  { name: "Russia", code: "+7" }, { name: "Rwanda", code: "+250" }, { name: "Saint Kitts & Nevis", code: "+1-869" }, { name: "Saint Lucia", code: "+1-758" },
  { name: "Saint Vincent & Grenadines", code: "+1-784" }, { name: "Samoa", code: "+685" }, { name: "San Marino", code: "+378" },
  { name: "Sao Tome & Principe", code: "+239" }, { name: "Saudi Arabia", code: "+966" }, { name: "Senegal", code: "+221" }, { name: "Serbia", code: "+381" },
  { name: "Seychelles", code: "+248" }, { name: "Sierra Leone", code: "+232" }, { name: "Singapore", code: "+65" }, { name: "Slovakia", code: "+421" },
  { name: "Slovenia", code: "+386" }, { name: "Solomon Islands", code: "+677" }, { name: "Somalia", code: "+252" }, { name: "South Africa", code: "+27" },
  { name: "South Sudan", code: "+211" }, { name: "Spain", code: "+34" }, { name: "Sri Lanka", code: "+94" }, { name: "Sudan", code: "+249" },
  { name: "Suriname", code: "+597" }, { name: "Sweden", code: "+46" }, { name: "Switzerland", code: "+41" }, { name: "Syria", code: "+963" },
  { name: "Taiwan", code: "+886" }, { name: "Tajikistan", code: "+992" }, { name: "Tanzania", code: "+255" }, { name: "Thailand", code: "+66" },
  { name: "Timor-Leste", code: "+670" }, { name: "Togo", code: "+228" }, { name: "Tonga", code: "+676" }, { name: "Trinidad & Tobago", code: "+1-868" },
  { name: "Tunisia", code: "+216" }, { name: "Turkey", code: "+90" }, { name: "Turkmenistan", code: "+993" }, { name: "Tuvalu", code: "+688" },
  { name: "Uganda", code: "+256" }, { name: "Ukraine", code: "+380" }, { name: "United Arab Emirates", code: "+971" }, { name: "United Kingdom", code: "+44" },
  { name: "United States", code: "+1" }, { name: "Uruguay", code: "+598" }, { name: "Uzbekistan", code: "+998" }, { name: "Vanuatu", code: "+678" },
  { name: "Vatican City", code: "+39" }, { name: "Venezuela", code: "+58" }, { name: "Vietnam", code: "+84" }, { name: "Yemen", code: "+967" },
  { name: "Zambia", code: "+260" }, { name: "Zimbabwe", code: "+263" }
];

const PartnerOnboard = () => {
  useEffect(() => {
    init("usx7JhywGy63cCrKc"); 
  }, []);

  const formRef = useRef();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  
  // Validation State
  const [errors, setErrors] = useState({});
  
  // Form State
  const [phoneCode, setPhoneCode] = useState("+971"); // Default UAE
  const [formData, setFormData] = useState({
    first_name: '', last_name: '', business_email: '', job_title: '', phone_number: '',
    company_name: '', company_website: '', region: '', country: '',
    state_province: '', official_address: '', postal_code: '',
    desired_partnerships: [], relevant_solutions: [],
    industries_serviced: '', market_segments: '',
    annual_revenue: '', number_of_clients: '',
    number_of_employees: '', security_certifications: ''
  });

  // Handle "Other" country manually logic
  const [countrySelection, setCountrySelection] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      let updatedList = [...formData[name]];
      if (checked) updatedList.push(value);
      else updatedList = updatedList.filter((item) => item !== value);
      
      setFormData({ ...formData, [name]: updatedList });
      if (updatedList.length > 0) setErrors({ ...errors, [name]: '' });

    } else if (name === 'country_selector') {
      setCountrySelection(value);
      if (value !== 'Other') {
        setFormData({ ...formData, country: value });
        if (value) setErrors({ ...errors, country: '' });
      } else {
        setFormData({ ...formData, country: '' });
      }

    } else if (name === 'phone_number') {
        // Only allow numbers
        if (/^[0-9]*$/.test(value)) {
            setFormData({ ...formData, [name]: value });
            if (value.length > 5) setErrors({ ...errors, phone_number: '' });
        }
    } else {
      setFormData({ ...formData, [name]: value });
      if (value.trim() !== '') setErrors({ ...errors, [name]: '' });
    }
  };

  const validateStep = (currentStep) => {
    let newErrors = {};
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    if (currentStep === 1) {
      if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
      if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
      if (!formData.job_title.trim()) newErrors.job_title = "Job title is required";
      
      if (!formData.business_email.trim()) newErrors.business_email = "Email is required";
      else if (!emailRegex.test(formData.business_email)) newErrors.business_email = "Invalid email format";

      if (!formData.phone_number.trim()) newErrors.phone_number = "Phone number is required";
      else if (formData.phone_number.length < 5) newErrors.phone_number = "Phone number is too short";
    }

    if (currentStep === 2) {
      if (!formData.company_name.trim()) newErrors.company_name = "Company name is required";
      
      if (!formData.company_website.trim()) newErrors.company_website = "Website is required";
      else if (!urlRegex.test(formData.company_website)) newErrors.company_website = "Invalid URL format";
      
      if (!formData.region) newErrors.region = "Region is required";
      
      if (!formData.country.trim()) newErrors.country = countrySelection === 'Other' ? "Please type your country" : "Country is required";

      if (!formData.official_address.trim()) newErrors.official_address = "Address is required";
      if (!formData.postal_code.trim()) newErrors.postal_code = "Postal code is required";
    }

    if (currentStep === 3) {
      if (formData.desired_partnerships.length === 0) newErrors.desired_partnerships = "Select at least one partnership";
      if (formData.relevant_solutions.length === 0) newErrors.relevant_solutions = "Select at least one solution";
      if (!formData.industries_serviced.trim()) newErrors.industries_serviced = "Industry details required";
      if (!formData.market_segments.trim()) newErrors.market_segments = "Market segment required";
      
      // New validations
      if (!formData.annual_revenue.trim()) newErrors.annual_revenue = "Revenue is required";
      if (!formData.number_of_clients.trim()) newErrors.number_of_clients = "Client count is required";
      if (!formData.number_of_employees) newErrors.number_of_employees = "Employee count required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
    }
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    // 1. Create hidden inputs for Arrays
    const hiddenPartnerships = document.createElement("input");
    hiddenPartnerships.type = "hidden";
    hiddenPartnerships.name = "desired_partnerships_str";
    hiddenPartnerships.value = formData.desired_partnerships.join(", ");
    formRef.current.appendChild(hiddenPartnerships);

    const hiddenSolutions = document.createElement("input");
    hiddenSolutions.type = "hidden";
    hiddenSolutions.name = "relevant_solutions_str";
    hiddenSolutions.value = formData.relevant_solutions.join(", ");
    formRef.current.appendChild(hiddenSolutions);

    // 2. Create hidden input for FULL Phone Number
    const hiddenPhone = document.createElement("input");
    hiddenPhone.type = "hidden";
    hiddenPhone.name = "full_phone";
    hiddenPhone.value = `${phoneCode} ${formData.phone_number}`;
    formRef.current.appendChild(hiddenPhone);

    emailjs.sendForm(
      "service_juodf0k",
      "template_fjuiudn",
      formRef.current,
      "hbSmjgNJuGIGzSLrq"
    )
    .then(() => {
      setStatus({ type: 'success', message: 'Application submitted successfully.' });
      setIsSubmitting(false);
      setStep(4); 
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      setStatus({ type: 'error', message: 'Submission failed. Please try again later.' });
      setIsSubmitting(false);
    });
  };

  const partnershipTypes = ["Tech/Integration", "Resell", "Referral", "Managed Services", "Professional Services", "Implementation"];
  const solutionsList = ["OCR Solutions", "Governance, Risk and Compliance (GRC)", "Third-Party Management", "Tech Risk & Compliance", "AI Governance", "Internal Audit", "Microsoft Dynamics 365"];
  const regions = ["NORAM", "EMEA", "LATAM", "APAC"];

  return (
    <div className="bg-[#FCFCFC] font-sans text-[#2E2A28] pt-32 min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="bg-white py-16 border-b border-gray-100 print:hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <span className="text-xs text-[#70564b] font-bold uppercase tracking-[0.4em] mb-4 block">Partner Application</span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#70564b] mb-6">Join the Glimmora Ecosystem</h1>
            <p className="text-gray-500 text-sm max-w-3xl mx-auto leading-relaxed">
              Complete the form below to apply for our partner program. 
            </p>

          {/* PROGRESS BAR */}
          <div className="max-w-md mx-auto mt-12 flex items-center justify-between relative">
            <div className="absolute h-[1px] bg-gray-100 w-full top-1/2 -z-10"></div>
            {[1, 2, 3].map((num) => (
              <div key={num} className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${step >= num ? 'bg-[#70564b] text-white' : 'bg-gray-100 text-gray-400'}`}>
                {num}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-gray-100 shadow-xl p-8 md:p-12">
            
            <form ref={formRef} onSubmit={handleSubmit}>
              
                {/* STEP 1: CONTACT INFO */}
                <div className={step === 1 ? "block" : "hidden"}>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                    <h3 className="text-xl text-[#70564b] font-bold border-b border-gray-50 pb-4">1. Contact Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">First Name *</label>
                        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.first_name ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`} />
                        {errors.first_name && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.first_name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Last Name *</label>
                        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.last_name ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`} />
                        {errors.last_name && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.last_name}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Business Email *</label>
                        <input type="email" name="business_email" value={formData.business_email} onChange={handleChange} className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.business_email ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`} />
                        {errors.business_email && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.business_email}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Job Role / Title *</label>
                        <input type="text" name="job_title" value={formData.job_title} onChange={handleChange} className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.job_title ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`} />
                        {errors.job_title && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.job_title}</p>}
                      </div>
                    </div>

                    {/* PHONE NUMBER FIELD */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Contact Number *</label>
                        <div className="flex gap-3">
                            <select 
                                value={phoneCode} 
                                onChange={(e) => setPhoneCode(e.target.value)} 
                                className="w-28 px-2 py-3 bg-[#fcfcfc] border border-gray-100 focus:border-[#70564b] outline-none text-sm truncate"
                            >
                                {COUNTRY_DATA.map(c => (
                                    <option key={c.name} value={c.code}>{c.code} ({c.name.substring(0,10)}..)</option>
                                ))}
                            </select>
                            <input 
                                type="tel" 
                                name="phone_number" 
                                value={formData.phone_number} 
                                onChange={handleChange} 
                                placeholder="Phone Number" 
                                className={`flex-1 px-4 py-3 bg-[#fcfcfc] border ${errors.phone_number ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`} 
                            />
                        </div>
                        {errors.phone_number && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.phone_number}</p>}
                    </div>

                    <div className="pt-6 flex justify-end">
                      <button type="button" onClick={handleNext} className="bg-[#70564b] text-white px-10 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#5f4940] transition-all">Next</button>
                    </div>
                  </motion.div>
                </div>

                {/* STEP 2: COMPANY & LOCATION */}
                <div className={step === 2 ? "block" : "hidden"}>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                    <h3 className="text-xl text-[#70564b] font-bold border-b border-gray-50 pb-4">2. Company & Location</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Company Name *</label>
                        <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.company_name ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`} />
                        {errors.company_name && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.company_name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Company Website *</label>
                        <input type="text" name="company_website" value={formData.company_website} onChange={handleChange} placeholder="baarez.com" className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.company_website ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`} />
                        {errors.company_website && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.company_website}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Region *</label>
                        <select name="region" value={formData.region} onChange={handleChange} className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.region ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`}>
                          <option value="">--Select Region--</option>
                          {regions.map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                        {errors.region && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.region}</p>}
                    </div>

                    {/* COUNTRY SELECTION WITH "OTHER" LOGIC */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Country *</label>
                            
                            {/* Hidden input holds real value */}
                            <input type="hidden" name="country" value={formData.country} />

                            <select name="country_selector" value={countrySelection} onChange={handleChange} className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.country ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`}>
                                <option value="">--Select--</option>
                                {COUNTRY_DATA.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                                <option value="Other">Other</option>
                            </select>
                            
                            {countrySelection === 'Other' && (
                                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-2">
                                    <input 
                                        type="text" 
                                        name="country" 
                                        placeholder="Type your country name" 
                                        value={formData.country} 
                                        onChange={handleChange} 
                                        className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.country ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`}
                                    />
                                </motion.div>
                            )}
                            
                            {errors.country && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.country}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">State / Province</label>
                            <input type="text" name="state_province" value={formData.state_province} onChange={handleChange} className="w-full px-4 py-3 bg-[#fcfcfc] border border-gray-100 focus:border-[#70564b] outline-none text-sm" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Official Address *</label>
                        <textarea name="official_address" value={formData.official_address} onChange={handleChange} rows="2" className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.official_address ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm resize-none`}></textarea>
                        {errors.official_address && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.official_address}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Postal Code / Zip Code *</label>
                        <input type="text" name="postal_code" value={formData.postal_code} onChange={handleChange} className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.postal_code ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`} />
                        {errors.postal_code && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.postal_code}</p>}
                    </div>

                    <div className="pt-6 flex justify-between">
                      <button type="button" onClick={prevStep} className="text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-[#70564b]">Back</button>
                      <button type="button" onClick={handleNext} className="bg-[#70564b] text-white px-10 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#5f4940] transition-all">Next</button>
                    </div>
                  </motion.div>
                </div>

                {/* STEP 3: BUSINESS DETAILS */}
                <div className={step === 3 ? "block" : "hidden"}>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                    <h3 className="text-xl text-[#70564b] font-bold border-b border-gray-50 pb-4">3. Partnership Details</h3>
                    
                    {/* Desired Partnerships */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Desired Partnership(s) *</label>
                        <div className="grid md:grid-cols-2 gap-2">
                            {partnershipTypes.map((type) => (
                                <label key={type} className="flex items-center space-x-2 text-sm text-[#2E2A28] cursor-pointer hover:bg-gray-50 p-2 rounded">
                                    <input 
                                      type="checkbox" 
                                      name="desired_partnerships" 
                                      value={type} 
                                      checked={formData.desired_partnerships.includes(type)}
                                      onChange={handleChange}
                                      className="accent-[#70564b] w-4 h-4" 
                                    />
                                    <span>{type}</span>
                                </label>
                            ))}
                        </div>
                        {errors.desired_partnerships && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.desired_partnerships}</p>}
                    </div>

                    {/* Relevant Solutions */}
                    <div className="space-y-3 pt-4 border-t border-gray-50">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Relevant Glimmora Solutions *</label>
                        <div className="grid md:grid-cols-2 gap-2">
                            {solutionsList.map((sol) => (
                                <label key={sol} className="flex items-center space-x-2 text-sm text-[#2E2A28] cursor-pointer hover:bg-gray-50 p-2 rounded">
                                    <input 
                                      type="checkbox" 
                                      name="relevant_solutions" 
                                      value={sol} 
                                      checked={formData.relevant_solutions.includes(sol)}
                                      onChange={handleChange}
                                      className="accent-[#70564b] w-4 h-4" 
                                    />
                                    <span>{sol}</span>
                                </label>
                            ))}
                        </div>
                        {errors.relevant_solutions && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.relevant_solutions}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 pt-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Industries Serviced *</label>
                            <input type="text" name="industries_serviced" value={formData.industries_serviced} onChange={handleChange} placeholder="e.g. Finance, Healthcare" className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.industries_serviced ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`} />
                            {errors.industries_serviced && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.industries_serviced}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Market Segments *</label>
                            <input type="text" name="market_segments" value={formData.market_segments} onChange={handleChange} placeholder="e.g. Enterprise, SMB" className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.market_segments ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`} />
                            {errors.market_segments && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.market_segments}</p>}
                        </div>
                    </div>

                    {/* NEW FIELDS: REVENUE & CLIENTS */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Annual Revenue *</label>
                            <input type="text" name="annual_revenue" value={formData.annual_revenue} onChange={handleChange} placeholder="e.g. $1M - $5M" className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.annual_revenue ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`} />
                            {errors.annual_revenue && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.annual_revenue}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Number of Clients *</label>
                            <input type="text" name="number_of_clients" value={formData.number_of_clients} onChange={handleChange} placeholder="e.g. 50+" className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.number_of_clients ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`} />
                            {errors.number_of_clients && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.number_of_clients}</p>}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Number of Employees *</label>
                            <select name="number_of_employees" value={formData.number_of_employees} onChange={handleChange} className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.number_of_employees ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`}>
                                <option value="">--Select--</option>
                                <option value="1-50">1-50</option>
                                <option value="51-200">51-200</option>
                                <option value="201-500">201-500</option>
                                <option value="500+">500+</option>
                            </select>
                            {errors.number_of_employees && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.number_of_employees}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Security Certifications</label>
                            <input type="text" name="security_certifications" value={formData.security_certifications} onChange={handleChange} placeholder="e.g. ISO 27001, SOC 2" className="w-full px-4 py-3 bg-[#fcfcfc] border border-gray-100 focus:border-[#70564b] outline-none text-sm" />
                        </div>
                    </div>

                    <div className="pt-6 flex justify-between items-center">
                      <button type="button" onClick={prevStep} className="text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-[#70564b]">Back</button>
                      <button type="submit" disabled={isSubmitting} className="bg-[#70564b] text-white px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#5f4940] transition-all disabled:bg-gray-400">
                        {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* STEP 4: SUCCESS MESSAGE */}
                {step === 4 && (
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10 space-y-6">
                    <div className="w-16 h-16 bg-[#F5F3F1] text-[#70564b] rounded-full flex items-center justify-center mx-auto text-3xl">✓</div>
                    <h3 className="text-xl font-bold text-[#70564b]">Application Submitted Successfully</h3>
                    <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you for applying to the Glimmora Partner Program. Our team will review your details and contact you shortly.
                    </p>
                    
                    <div className="flex justify-center pt-4">
                        <button type="button" onClick={() => window.location.href = '/'} className="text-[#70564b] text-xs underline font-bold uppercase tracking-wider">Return to Home</button>
                    </div>
                  </motion.div>
                )}

            </form>

            {status.message && step !== 4 && (
              <p className={`mt-6 text-center text-xs font-bold uppercase ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {status.message}
              </p>
            )}

          </div>
        </div>
      </section>

      {/* FOOTER NOTICE */}
      <footer className="py-12 bg-white border-t border-gray-50 text-center print:hidden">
        <p className="text-gray-300 text-xs uppercase tracking-[0.5em] font-bold italic">
          Transparency • Innovation • Partnership
        </p>
      </footer>

    </div>
  );
};

export default PartnerOnboard;