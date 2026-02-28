import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs, { init } from '@emailjs/browser';

// Comprehensive Country Codes
const COUNTRY_CODES = [
  { name: "Afghanistan", code: "+93" },
  { name: "Albania", code: "+355" },
  { name: "Algeria", code: "+213" },
  { name: "Andorra", code: "+376" },
  { name: "Angola", code: "+244" },
  { name: "Argentina", code: "+54" },
  { name: "Armenia", code: "+374" },
  { name: "Australia", code: "+61" },
  { name: "Austria", code: "+43" },
  { name: "Azerbaijan", code: "+994" },
  { name: "Bahrain", code: "+973" },
  { name: "Bangladesh", code: "+880" },
  { name: "Belarus", code: "+375" },
  { name: "Belgium", code: "+32" },
  { name: "Belize", code: "+501" },
  { name: "Benin", code: "+229" },
  { name: "Bhutan", code: "+975" },
  { name: "Bolivia", code: "+591" },
  { name: "Bosnia & Herzegovina", code: "+387" },
  { name: "Botswana", code: "+267" },
  { name: "Brazil", code: "+55" },
  { name: "Brunei", code: "+673" },
  { name: "Bulgaria", code: "+359" },
  { name: "Burkina Faso", code: "+226" },
  { name: "Burundi", code: "+257" },
  { name: "Cambodia", code: "+855" },
  { name: "Cameroon", code: "+237" },
  { name: "Canada", code: "+1" },
  { name: "Central African Republic", code: "+236" },
  { name: "Chad", code: "+235" },
  { name: "Chile", code: "+56" },
  { name: "China", code: "+86" },
  { name: "Colombia", code: "+57" },
  { name: "Comoros", code: "+269" },
  { name: "Congo - Kinshasa", code: "+243" },
  { name: "Costa Rica", code: "+506" },
  { name: "Croatia", code: "+385" },
  { name: "Cuba", code: "+53" },
  { name: "Cyprus", code: "+357" },
  { name: "Czech Republic", code: "+420" },
  { name: "Denmark", code: "+45" },
  { name: "Djibouti", code: "+253" },
  { name: "Dominican Republic", code: "+1-809" },
  { name: "Ecuador", code: "+593" },
  { name: "Egypt", code: "+20" },
  { name: "El Salvador", code: "+503" },
  { name: "Estonia", code: "+372" },
  { name: "Ethiopia", code: "+251" },
  { name: "Fiji", code: "+679" },
  { name: "Finland", code: "+358" },
  { name: "France", code: "+33" },
  { name: "Gabon", code: "+241" },
  { name: "Gambia", code: "+220" },
  { name: "Georgia", code: "+995" },
  { name: "Germany", code: "+49" },
  { name: "Ghana", code: "+233" },
  { name: "Greece", code: "+30" },
  { name: "Guatemala", code: "+502" },
  { name: "Guinea", code: "+224" },
  { name: "Guyana", code: "+592" },
  { name: "Haiti", code: "+509" },
  { name: "Honduras", code: "+504" },
  { name: "Hong Kong", code: "+852" },
  { name: "Hungary", code: "+36" },
  { name: "Iceland", code: "+354" },
  { name: "India", code: "+91" },
  { name: "Indonesia", code: "+62" },
  { name: "Iran", code: "+98" },
  { name: "Iraq", code: "+964" },
  { name: "Ireland", code: "+353" },
  { name: "Israel", code: "+972" },
  { name: "Italy", code: "+39" },
  { name: "Jamaica", code: "+1-876" },
  { name: "Japan", code: "+81" },
  { name: "Jordan", code: "+962" },
  { name: "Kazakhstan", code: "+7" },
  { name: "Kenya", code: "+254" },
  { name: "Kuwait", code: "+965" },
  { name: "Kyrgyzstan", code: "+996" },
  { name: "Laos", code: "+856" },
  { name: "Latvia", code: "+371" },
  { name: "Lebanon", code: "+961" },
  { name: "Lesotho", code: "+266" },
  { name: "Liberia", code: "+231" },
  { name: "Libya", code: "+218" },
  { name: "Liechtenstein", code: "+423" },
  { name: "Lithuania", code: "+370" },
  { name: "Luxembourg", code: "+352" },
  { name: "Madagascar", code: "+261" },
  { name: "Malawi", code: "+265" },
  { name: "Malaysia", code: "+60" },
  { name: "Maldives", code: "+960" },
  { name: "Mali", code: "+223" },
  { name: "Malta", code: "+356" },
  { name: "Mauritania", code: "+222" },
  { name: "Mauritius", code: "+230" },
  { name: "Mexico", code: "+52" },
  { name: "Moldova", code: "+373" },
  { name: "Monaco", code: "+377" },
  { name: "Mongolia", code: "+976" },
  { name: "Montenegro", code: "+382" },
  { name: "Morocco", code: "+212" },
  { name: "Mozambique", code: "+258" },
  { name: "Myanmar", code: "+95" },
  { name: "Namibia", code: "+264" },
  { name: "Nepal", code: "+977" },
  { name: "Netherlands", code: "+31" },
  { name: "New Zealand", code: "+64" },
  { name: "Nicaragua", code: "+505" },
  { name: "Niger", code: "+227" },
  { name: "Nigeria", code: "+234" },
  { name: "North Korea", code: "+850" },
  { name: "North Macedonia", code: "+389" },
  { name: "Norway", code: "+47" },
  { name: "Oman", code: "+968" },
  { name: "Pakistan", code: "+92" },
  { name: "Palestine", code: "+970" },
  { name: "Panama", code: "+507" },
  { name: "Papua New Guinea", code: "+675" },
  { name: "Paraguay", code: "+595" },
  { name: "Peru", code: "+51" },
  { name: "Philippines", code: "+63" },
  { name: "Poland", code: "+48" },
  { name: "Portugal", code: "+351" },
  { name: "Qatar", code: "+974" },
  { name: "Romania", code: "+40" },
  { name: "Russia", code: "+7" },
  { name: "Rwanda", code: "+250" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Senegal", code: "+221" },
  { name: "Serbia", code: "+381" },
  { name: "Sierra Leone", code: "+232" },
  { name: "Singapore", code: "+65" },
  { name: "Slovakia", code: "+421" },
  { name: "Slovenia", code: "+386" },
  { name: "Somalia", code: "+252" },
  { name: "South Africa", code: "+27" },
  { name: "South Korea", code: "+82" },
  { name: "South Sudan", code: "+211" },
  { name: "Spain", code: "+34" },
  { name: "Sri Lanka", code: "+94" },
  { name: "Sudan", code: "+249" },
  { name: "Suriname", code: "+597" },
  { name: "Sweden", code: "+46" },
  { name: "Switzerland", code: "+41" },
  { name: "Syria", code: "+963" },
  { name: "Taiwan", code: "+886" },
  { name: "Tajikistan", code: "+992" },
  { name: "Tanzania", code: "+255" },
  { name: "Thailand", code: "+66" },
  { name: "Togo", code: "+228" },
  { name: "Tunisia", code: "+216" },
  { name: "Turkey", code: "+90" },
  { name: "Turkmenistan", code: "+993" },
  { name: "Uganda", code: "+256" },
  { name: "Ukraine", code: "+380" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "United Kingdom", code: "+44" },
  { name: "United States", code: "+1" },
  { name: "Uruguay", code: "+598" },
  { name: "Uzbekistan", code: "+998" },
  { name: "Venezuela", code: "+58" },
  { name: "Vietnam", code: "+84" },
  { name: "Yemen", code: "+967" },
  { name: "Zambia", code: "+260" },
  { name: "Zimbabwe", code: "+263" }
];

const Contact = () => {
  useEffect(() => {
    init("usx7JhywGy63cCrKc"); 
  }, []);

  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Separate state for the phone prefix
  const [phoneCode, setPhoneCode] = useState("+971"); 

  // Form State
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  // Validation Patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Allow numbers only for the number part
  const numberRegex = /^[0-9]*$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for phone to allow only numbers
    if (name === 'phone' && !numberRegex.test(value)) return;

    setFormData({ ...formData, [name]: value });
    
    if (value.trim() !== '') {
        setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
    if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    
    if (!formData.email.trim()) {
        newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
        newErrors.phone = "Phone is required";
    } else if (formData.phone.length < 5) {
        newErrors.phone = "Phone number is too short";
    }

    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Please tell us how we can help";

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        isValid = false;
    }

    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return; 

    setIsSubmitting(true);

    // Combine code and number for the final submission
    const finalPhone = `${phoneCode} ${formData.phone}`;
    
    // Create a temporary object to match template params perfectly
    // Note: We use the existing formRef but overwrite the phone field's value dynamically if needed, 
    // OR we can pass a raw object to emailjs.send instead of sendForm.
    // Here we use sendForm, so we will append the combined phone to a hidden field or update state?
    // Easiest with sendForm is to create a hidden input for the FULL phone number.
    
    const hiddenPhoneInput = document.createElement("input");
    hiddenPhoneInput.type = "hidden";
    hiddenPhoneInput.name = "full_phone"; // Ensure your template uses {{full_phone}} or just overwrites {{phone}}
    hiddenPhoneInput.value = finalPhone;
    formRef.current.appendChild(hiddenPhoneInput);

    // If your template uses {{phone}}, the existing input handles the number part. 
    // Ideally, change template to use a specific variable or update the input value right before send.
    // Let's modify the actual phone input value temporarily for the submission event? No, that flickers UI.
    // Better strategy: We will use `emailjs.send` with a custom object instead of `sendForm` to be safer/cleaner.

    const templateParams = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        company: formData.company,
        email: formData.email,
        phone: finalPhone, // Combined here
        service: formData.service,
        message: formData.message
    };

    const serviceId = "service_wxj1uz3";
    const templateId = "template_1n8jyv4";
    const publicKey = "usx7JhywGy63cCrKc";

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        setStatus({ type: 'success', message: 'Thank you! We will schedule a call at your convenience.' });
        setIsSubmitting(false);
        setFormData({
            first_name: '', last_name: '', company: '', email: '', phone: '', service: '', message: ''
        });
        setErrors({});
      }, (error) => {
        setStatus({ type: 'error', message: 'Transmission failed. Please call us directly.' });
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-[#FCFCFC] font-sans text-[#2E2A28] selection:bg-[#70564b] selection:text-white pt-32 overflow-x-hidden">
      
      {/* 1. SECTION: HEADER & CONTEXT */}
      <section className="bg-white py-10 md:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#70564b]"></span>
              <span className="text-xs text-[#70564b] font-bold uppercase tracking-[0.3em]">Engagement Hub</span>
            </motion.div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#70564b] leading-tight mb-8">
              Reach us for Comprehensive <br /> IT Services.
            </h1>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              We’re happy to answer any questions you may have and help you determine 
              which of our services best fit your needs.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SECTION: THE BAAREZ INTERACTION GRID */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
            
            {/* LEFT SIDE: THINKING VISIBLE & BENEFITS */}
            <div className="lg:col-span-4 space-y-12">
              <div className="bg-[#70564b] p-6 sm:p-8 lg:p-10 text-white shadow-2xl relative">
                <p className="text-xs text-white/60 font-bold uppercase tracking-widest mb-4 italic">Direct Connection</p>
                <h3 className="text-xl font-bold mb-2 text-white">Call us at:</h3>
                <p className="text-2xl sm:text-3xl font-light tracking-tighter text-white">+971 501371105</p>
                <p className="text-xl font-light tracking-tighter text-white/80">info@baarez.com</p>
              </div>

              {/* Benefit Pillars */}
              <div>
                <h4 className="text-[#70564b] font-bold text-xs uppercase tracking-widest mb-8 border-b border-gray-100 pb-4">
                  Why Partners Choose Glimmora
                </h4>
                <div className="grid grid-cols-2 gap-y-4">
                  {['Client-oriented', 'Independent', 'Competent', 'Results-driven', 'Problem-solving', 'Transparent'].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-[#70564b]"></div>
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thinking Visible Process */}
              <div className="bg-white p-6 sm:p-8 lg:p-10 border-l-4 border-[#70564b] shadow-sm">
                <h4 className="text-xs text-[#70564b] font-bold uppercase tracking-widest mb-6 sm:mb-8 lg:mb-10">What happens next?</h4>
                <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                  {[
                    { s: "1", t: "Coordination", d: "We schedule a call at your convenience." },
                    { s: "2", t: "Discovery", d: "A deep-dive consulting and discovery meeting." },
                    { s: "3", t: "Strategy", d: "We prepare a comprehensive project proposal." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-[#70564b] font-bold text-sm">
                        {step.s}
                      </div>
                      <div>
                        <h5 className="font-bold text-[#70564b] text-sm mb-1">{step.t}</h5>
                        <p className="text-gray-400 text-xs leading-relaxed">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: CONSULTATION FORM */}
            <div className="lg:col-span-8">
              <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-14 border border-gray-100 shadow-xl">
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-[#70564b] mb-2">Schedule a Demo</h3>
                  <div className="h-[2px] w-12 bg-[#70564b]"></div>
                </div>

                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First name" className={`w-full px-5 py-4 bg-[#fcfcfc] border ${errors.first_name ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`} />
                        {errors.first_name && <p className="text-red-500 text-[10px] uppercase font-bold mt-1">{errors.first_name}</p>}
                    </div>
                    <div>
                        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last name" className={`w-full px-5 py-4 bg-[#fcfcfc] border ${errors.last_name ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`} />
                        {errors.last_name && <p className="text-red-500 text-[10px] uppercase font-bold mt-1">{errors.last_name}</p>}
                    </div>
                  </div>

                  <div>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company / Organization" className={`w-full px-5 py-4 bg-[#fcfcfc] border ${errors.company ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`} />
                    {errors.company && <p className="text-red-500 text-[10px] uppercase font-bold mt-1">{errors.company}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Company email" className={`w-full px-5 py-4 bg-[#fcfcfc] border ${errors.email ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`} />
                        {errors.email && <p className="text-red-500 text-[10px] uppercase font-bold mt-1">{errors.email}</p>}
                    </div>
                    
                    {/* PHONE INPUT WITH COUNTRY CODE */}
                    <div>
                        <div className="flex gap-2">
                            <select 
                                value={phoneCode} 
                                onChange={(e) => setPhoneCode(e.target.value)} 
                                className="w-24 px-2 py-4 bg-[#fcfcfc] border border-gray-100 focus:border-[#70564b] outline-none text-sm cursor-pointer"
                            >
                                {COUNTRY_CODES.map((c) => (
                                    <option key={c.name} value={c.code}>{c.code} ({c.name.substring(0,3)})</option>
                                ))}
                            </select>
                            <input 
                                type="tel" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                placeholder="Phone number" 
                                className={`flex-1 px-5 py-4 bg-[#fcfcfc] border ${errors.phone ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm`} 
                            />
                        </div>
                        {errors.phone && <p className="text-red-500 text-[10px] uppercase font-bold mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="relative">
                    <select name="service" value={formData.service} onChange={handleChange} className={`w-full px-5 py-4 bg-[#fcfcfc] border ${errors.service ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm appearance-none cursor-pointer`}>
                      <option value="">How Can We Help You?</option>
                      <option value="Glimmora Hospitality">Glimmora Hospitality</option>
                      <option value="AI GRC Platform">AI GRC Platform</option>
                      <option value="AI TPRM Platform">AI TPRM Platform</option>
                      <option value="Al Internal Audit Platform">Al Internal Audit Platform</option>
                      <option value="Glimmora ScanVista">Glimmora ScanVista</option>
                      <option value="Automation Services">Automation Services</option>
                      <option value="Remote Consulting Services">Remote Consulting Services</option>
                      <option value="Microsoft ERP">Microsoft ERP</option>
                      <option value="IT Consulting & Advisory">IT Consulting & Advisory</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile Development">Mobile Development</option>
                      <option value="Cloud Services">Cloud Services</option>
                      <option value="Others">Others</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                    {errors.service && <p className="text-red-500 text-[10px] uppercase font-bold mt-1">{errors.service}</p>}
                  </div>

                  <div>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Message" className={`w-full px-5 py-4 bg-[#fcfcfc] border ${errors.message ? 'border-red-500' : 'border-gray-100'} focus:border-[#70564b] outline-none text-sm resize-none`}></textarea>
                    {errors.message && <p className="text-red-500 text-[10px] uppercase font-bold mt-1">{errors.message}</p>}
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full bg-[#70564b] text-white py-5 font-bold uppercase tracking-widest text-xs hover:bg-[#5f4940] transition-all duration-500 shadow-lg disabled:bg-gray-400"
                  >
                    {isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}
                  </button>

                  {status.message && (
                    <motion.p 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className={`text-center text-xs font-bold ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
                    >
                      {status.message}
                    </motion.p>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FOOTER IDENTIFIER */}
      <footer className="py-8 md:py-12 bg-white border-t border-gray-50 text-center">
         <p className="text-gray-300 text-xs uppercase tracking-[0.2em] sm:tracking-[0.5em] font-bold">
           Doha • Technology • Ownership
         </p>
      </footer>

    </div>
  );
};

export default Contact;