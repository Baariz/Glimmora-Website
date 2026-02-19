import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, ChevronRight, ShieldCheck, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// --- CONFIGURATION START ---
const BRAND = {
  name: "Saarah",
  role: "Glimmora AI Assistant",
  avatar: "./Saarah.jpg", 
  colors: {
    primary: "#70564b",   // Glimmora Maroon
    accent: "#70564b",    // Glimmora Orange
    bg: "#F8FAFC",
    error: "#EF4444"      // Red for errors
  }
};

const EMAIL_CONFIG = {
  SERVICE_ID: "service_juodf0k",   
  TEMPLATE_ID: "template_kj44vfa", 
  PUBLIC_KEY: "hbSmjgNJuGIGzSLrq"   
};

// FULL COMPREHENSIVE COUNTRY LIST
const COUNTRIES = [
  { name: "Afghanistan", code: "+93" },
  { name: "Albania", code: "+355" },
  { name: "Algeria", code: "+213" },
  { name: "Andorra", code: "+376" },
  { name: "Angola", code: "+244" },
  { name: "Antigua & Barbuda", code: "+1-268" },
  { name: "Argentina", code: "+54" },
  { name: "Armenia", code: "+374" },
  { name: "Australia", code: "+61" },
  { name: "Austria", code: "+43" },
  { name: "Azerbaijan", code: "+994" },
  { name: "Bahamas", code: "+1-242" },
  { name: "Bahrain", code: "+973" },
  { name: "Bangladesh", code: "+880" },
  { name: "Barbados", code: "+1-246" },
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
  { name: "Cape Verde", code: "+238" },
  { name: "Central African Republic", code: "+236" },
  { name: "Chad", code: "+235" },
  { name: "Chile", code: "+56" },
  { name: "China", code: "+86" },
  { name: "Colombia", code: "+57" },
  { name: "Comoros", code: "+269" },
  { name: "Congo - Brazzaville", code: "+242" },
  { name: "Congo - Kinshasa", code: "+243" },
  { name: "Costa Rica", code: "+506" },
  { name: "Croatia", code: "+385" },
  { name: "Cuba", code: "+53" },
  { name: "Cyprus", code: "+357" },
  { name: "Czech Republic", code: "+420" },
  { name: "Denmark", code: "+45" },
  { name: "Djibouti", code: "+253" },
  { name: "Dominica", code: "+1-767" },
  { name: "Dominican Republic", code: "+1-809" },
  { name: "Ecuador", code: "+593" },
  { name: "Egypt", code: "+20" },
  { name: "El Salvador", code: "+503" },
  { name: "Equatorial Guinea", code: "+240" },
  { name: "Eritrea", code: "+291" },
  { name: "Estonia", code: "+372" },
  { name: "Eswatini", code: "+268" },
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
  { name: "Grenada", code: "+1-473" },
  { name: "Guatemala", code: "+502" },
  { name: "Guinea", code: "+224" },
  { name: "Guinea-Bissau", code: "+245" },
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
  { name: "Ivory Coast", code: "+225" },
  { name: "Jamaica", code: "+1-876" },
  { name: "Japan", code: "+81" },
  { name: "Jordan", code: "+962" },
  { name: "Kazakhstan", code: "+7" },
  { name: "Kenya", code: "+254" },
  { name: "Kiribati", code: "+686" },
  { name: "North Korea", code: "+850" },
  { name: "South Korea", code: "+82" },
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
  { name: "Marshall Islands", code: "+692" },
  { name: "Mauritania", code: "+222" },
  { name: "Mauritius", code: "+230" },
  { name: "Mexico", code: "+52" },
  { name: "Micronesia", code: "+691" },
  { name: "Moldova", code: "+373" },
  { name: "Monaco", code: "+377" },
  { name: "Mongolia", code: "+976" },
  { name: "Montenegro", code: "+382" },
  { name: "Morocco", code: "+212" },
  { name: "Mozambique", code: "+258" },
  { name: "Myanmar", code: "+95" },
  { name: "Namibia", code: "+264" },
  { name: "Nauru", code: "+674" },
  { name: "Nepal", code: "+977" },
  { name: "Netherlands", code: "+31" },
  { name: "New Zealand", code: "+64" },
  { name: "Nicaragua", code: "+505" },
  { name: "Niger", code: "+227" },
  { name: "Nigeria", code: "+234" },
  { name: "North Macedonia", code: "+389" },
  { name: "Norway", code: "+47" },
  { name: "Oman", code: "+968" },
  { name: "Pakistan", code: "+92" },
  { name: "Palau", code: "+680" },
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
  { name: "Saint Kitts & Nevis", code: "+1-869" },
  { name: "Saint Lucia", code: "+1-758" },
  { name: "Saint Vincent & Grenadines", code: "+1-784" },
  { name: "Samoa", code: "+685" },
  { name: "San Marino", code: "+378" },
  { name: "Sao Tome & Principe", code: "+239" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Senegal", code: "+221" },
  { name: "Serbia", code: "+381" },
  { name: "Seychelles", code: "+248" },
  { name: "Sierra Leone", code: "+232" },
  { name: "Singapore", code: "+65" },
  { name: "Slovakia", code: "+421" },
  { name: "Slovenia", code: "+386" },
  { name: "Solomon Islands", code: "+677" },
  { name: "Somalia", code: "+252" },
  { name: "South Africa", code: "+27" },
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
  { name: "Timor-Leste", code: "+670" },
  { name: "Togo", code: "+228" },
  { name: "Tonga", code: "+676" },
  { name: "Trinidad & Tobago", code: "+1-868" },
  { name: "Tunisia", code: "+216" },
  { name: "Turkey", code: "+90" },
  { name: "Turkmenistan", code: "+993" },
  { name: "Tuvalu", code: "+688" },
  { name: "Uganda", code: "+256" },
  { name: "Ukraine", code: "+380" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "United Kingdom", code: "+44" },
  { name: "United States", code: "+1" },
  { name: "Uruguay", code: "+598" },
  { name: "Uzbekistan", code: "+998" },
  { name: "Vanuatu", code: "+678" },
  { name: "Vatican City", code: "+39" },
  { name: "Venezuela", code: "+58" },
  { name: "Vietnam", code: "+84" },
  { name: "Yemen", code: "+967" },
  { name: "Zambia", code: "+260" },
  { name: "Zimbabwe", code: "+263" }
];
// --- CONFIGURATION END ---

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  
  // Logic State
  const [step, setStep] = useState(0); 
  const [inputValue, setInputValue] = useState('');
  const [selectedPhoneCode, setSelectedPhoneCode] = useState('+971'); // Default UAE
  
  const [formData, setFormData] = useState({ 
    name: '', 
    interest: '', 
    email: '', 
    phone: '', 
    company: '', 
    country: '' 
  });

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `Hi, I’m ${BRAND.name} from Glimmora International. May I know your name?`,
      sender: 'bot',
      type: 'text'
    }
  ]);

  const messagesEndRef = useRef(null);

  // Validation Patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const numberOnlyRegex = /^[0-9]*$/;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen, error]);

  // Handle Input Change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (error) setError('');
  };

  // Catalog Data
  const catalog = {
    solutions: [
      { id: 'ai-grc', label: 'AI GRC Platform', desc: 'AI GRC helps enterprises manage governance, risk, and compliance through a unified, AI-driven platform.' },
      { id: 'ai-tprm', label: 'AI TPRM', desc: 'Automate third-party risk assessments and continuous monitoring to secure your supply chain.' },
      { id: 'ai-audit', label: 'AI Internal Audit', desc: 'Streamline audit lifecycles with AI-powered evidence collection and reporting.' },
      { id: 'ai-ocr', label: 'AI OCR Scanvista', desc: 'Intelligent Document Processing (IDP) to extract and organize data from complex docs instantly.' },
      { id: 'glimmora', label: 'Glimmora Hospitality', desc: 'A Hospitality Intelligence Platform designed to enhance guest experiences via data.' },
    ],
    services: [
      { id: 'consulting', label: 'Business Process Consulting', desc: 'Optimize your operational workflows with our expert process re-engineering.' },
      { id: 'dt', label: 'Digital Transformation', desc: 'End-to-end modernization of your legacy systems and digital strategy.' },
      { id: 'data', label: 'Data Analytics & AI', desc: 'Turn raw data into actionable business intelligence with advanced analytics.' },
      { id: 'erp', label: 'ERP Consulting', desc: 'Implementation and optimization of enterprise resource planning systems.' },
      { id: 'cyber', label: 'Cybersecurity & SOC', desc: '24/7 security operations and threat defense for your enterprise assets.' },
      { id: 'cloud', label: 'Cloud & Automation', desc: 'Scalable cloud architecture and DevOps automation services.' },
    ]
  };

  const addMessage = (text, sender = 'bot', delay = 600) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now(), text, sender }]);
      setIsTyping(false);
    }, delay);
  };

  // --- STEP HANDLERS ---

  // Step 0: Name
  const handleNameSubmit = (e) => {
    e.preventDefault();
    const name = inputValue.trim();
    if (name.length < 2) {
        setError("Please enter a valid name.");
        return;
    }
    setFormData(prev => ({ ...prev, name }));
    setMessages(prev => [...prev, { id: Date.now(), text: name, sender: 'user' }]);
    setInputValue('');
    addMessage(`Nice to meet you, ${name}. What are you exploring today?`, 'bot', 800);
    setStep(1);
  };

  // Step 1: Interest
  const handleOptionSelect = (item) => {
    const label = item.label || item;
    const desc = item.desc || "Our team can guide you through this specific requirement.";
    setFormData(prev => ({ ...prev, interest: label }));
    setMessages(prev => [...prev, { id: Date.now(), text: label, sender: 'user' }]);
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now(), text: desc, sender: 'bot' }]);
      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now() + 1, text: "Would you like to explore this further with our team?", sender: 'bot' }]);
        setIsTyping(false);
        setStep(2);
      }, 1000);
    }, 600);
  };

  // Step 2: Context
  const handleContextResponse = (response) => {
    setMessages(prev => [...prev, { id: Date.now(), text: response, sender: 'user' }]);
    if (response === 'Yes, talk to an expert') {
      addMessage("Excellent. May I have your work email?", 'bot', 800);
      setStep(3);
    } else {
      addMessage("No problem. Feel free to browse our website. Have a great day!", 'bot', 800);
      setStep(7); // End
    }
  };

  // Step 3: Email
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const email = inputValue.trim();
    if (!emailRegex.test(email)) {
        setError("Please enter a valid work email.");
        return;
    }
    setFormData(prev => ({ ...prev, email }));
    setMessages(prev => [...prev, { id: Date.now(), text: email, sender: 'user' }]);
    setInputValue('');
    addMessage("Thanks. Please select your country code and enter your phone number.", 'bot', 800);
    setStep(4);
  };

  // Step 4: Phone (Split Logic)
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    const number = inputValue.trim();

    if (!numberOnlyRegex.test(number) || number.length < 5) {
        setError("Please enter a valid numeric phone number.");
        return;
    }

    const fullPhone = `${selectedPhoneCode} ${number}`;
    setFormData(prev => ({ ...prev, phone: fullPhone }));
    setMessages(prev => [...prev, { id: Date.now(), text: fullPhone, sender: 'user' }]);
    setInputValue('');
    addMessage("Got it. What is your Company Name?", 'bot', 800);
    setStep(5);
  };

  // Step 5: Company
  const handleCompanySubmit = (e) => {
    e.preventDefault();
    const company = inputValue.trim();
    if (company.length < 2) {
        setError("Please enter your company name.");
        return;
    }
    setFormData(prev => ({ ...prev, company }));
    setMessages(prev => [...prev, { id: Date.now(), text: company, sender: 'user' }]);
    setInputValue('');
    addMessage("Almost done. Please select your Country.", 'bot', 800);
    setStep(6);
  };

  // Step 6: Country (Dropdown Logic)
  const handleCountrySubmit = (e) => {
    e.preventDefault();
    const country = inputValue; // Is value from select

    if (!country || country === "Select Country") {
        setError("Please select a country from the list.");
        return;
    }
    
    const finalData = { ...formData, country };
    setFormData(finalData); 
    setMessages(prev => [...prev, { id: Date.now(), text: country, sender: 'user' }]);
    setInputValue('');
    setIsSending(true);

    const templateParams = {
      from_name: finalData.name,
      reply_to: finalData.email,
      phone_number: finalData.phone,
      company_name: finalData.company,
      country_location: country,
      interest: finalData.interest,
      message: `LEAD DETAILS:\n- Name: ${finalData.name}\n- Email: ${finalData.email}\n- Phone: ${finalData.phone}\n- Company: ${finalData.company}\n- Country: ${country}\n- Interest: ${finalData.interest}`
    };

    emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    )
    .then(() => {
      setIsSending(false);
      addMessage(`Thank you, ${finalData.name}. Our team has received your details and will reach out shortly.`, 'bot', 800);
      setStep(7); // End
    })
    .catch((err) => {
      console.error('EmailJS Failed', err);
      setIsSending(false);
      addMessage("Thanks! We've noted your details. Our team will contact you soon.", 'bot', 800);
      setStep(7); // End
    });
  };

  const renderInputArea = () => {
    const commonStyle = `flex-1 bg-gray-50 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 transition-all ${error ? 'border-red-400 focus:ring-red-400' : 'border-gray-200'}`;
    const btnStyle = { backgroundColor: error ? BRAND.colors.error : BRAND.colors.accent };

    // Added shrink-0 to prevent button squashing
    const submitBtn = (disabled) => (
        <button 
            type="submit" 
            disabled={disabled} 
            className="text-white p-2 rounded-lg transition-colors disabled:opacity-50 hover:opacity-90 shadow-sm flex items-center justify-center min-w-[40px] shrink-0" 
            style={btnStyle}
        >
            {isSending ? <Loader2 size={18} className="animate-spin"/> : <ChevronRight size={20} />}
        </button>
    );

    switch (step) {
      case 0: // Name
        return (
          <form onSubmit={handleNameSubmit} className="flex gap-2">
            <input type="text" placeholder="Type your name..." autoFocus value={inputValue} onChange={handleInputChange} className={commonStyle} style={!error ? { '--tw-ring-color': BRAND.colors.primary } : {}} />
            {submitBtn(!inputValue.trim())}
          </form>
        );

      case 1: // Intent
        return (
          <div className="flex flex-col gap-3 h-[220px] overflow-y-auto pr-1 custom-scrollbar">
            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1 sticky top-0 bg-white z-10 py-1">Solutions</p>
            <div className="grid grid-cols-1 gap-2">
              {catalog.solutions.map(item => (
                <button key={item.id} onClick={() => handleOptionSelect(item)} className="text-left px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm text-gray-700 hover:bg-orange-50 transition-all flex justify-between items-center group shadow-sm hover:border-orange-200">
                  {item.label} <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: BRAND.colors.accent }}/>
                </button>
              ))}
            </div>
            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1 mt-2 sticky top-0 bg-white z-10 py-1">Services</p>
            <div className="grid grid-cols-1 gap-2">
              {catalog.services.map(item => (
                <button key={item.id} onClick={() => handleOptionSelect(item)} className="text-left px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm text-gray-700 hover:bg-orange-50 transition-all flex justify-between items-center group shadow-sm hover:border-orange-200">
                  {item.label} <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: BRAND.colors.accent }}/>
                </button>
              ))}
            </div>
          </div>
        );

      case 2: // Context
        return (
          <div className="flex flex-col gap-2">
            <button onClick={() => handleContextResponse('Yes, talk to an expert')} className="w-full py-3 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2" style={{ backgroundColor: BRAND.colors.accent }}><Sparkles size={16} /> Yes, talk to an expert</button>
            <button onClick={() => handleContextResponse('Just browsing')} className="w-full py-3 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm hover:bg-gray-50 transition-colors">Just browsing</button>
          </div>
        );

      case 3: // Email
        return (
          <form onSubmit={handleEmailSubmit} className="flex gap-2">
            <input type="email" placeholder="name@company.com" autoFocus value={inputValue} onChange={handleInputChange} className={commonStyle} style={!error ? { '--tw-ring-color': BRAND.colors.primary } : {}} />
            {submitBtn(!inputValue.trim())}
          </form>
        );

      case 4: // Phone (Split Dropdown + Input)
        return (
          <form onSubmit={handlePhoneSubmit} className="flex gap-2 w-full">
            <select 
              value={selectedPhoneCode} 
              onChange={(e) => setSelectedPhoneCode(e.target.value)} 
              className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-2 text-xs focus:outline-none focus:ring-1 max-w-[90px] truncate shrink-0"
              style={{ '--tw-ring-color': BRAND.colors.primary }}
            >
                {COUNTRIES.map(c => <option key={c.name} value={c.code}>{c.code} ({c.name.substring(0, 10)}..)</option>)}
            </select>
            <input 
              type="tel" 
              placeholder="Phone Number" 
              autoFocus 
              value={inputValue} 
              onChange={(e) => {
                  // Only allow numbers
                  if (numberOnlyRegex.test(e.target.value)) handleInputChange(e);
              }} 
              className={`${commonStyle} min-w-0`} 
              style={!error ? { '--tw-ring-color': BRAND.colors.primary } : {}} 
            />
            {submitBtn(!inputValue.trim())}
          </form>
        );

      case 5: // Company
        return (
          <form onSubmit={handleCompanySubmit} className="flex gap-2">
            <input type="text" placeholder="Company Name" autoFocus value={inputValue} onChange={handleInputChange} className={commonStyle} style={!error ? { '--tw-ring-color': BRAND.colors.primary } : {}} />
            {submitBtn(!inputValue.trim())}
          </form>
        );

      case 6: // Country (Dropdown)
        return (
          <form onSubmit={handleCountrySubmit} className="flex gap-2 w-full">
            <select 
              value={inputValue} 
              onChange={handleInputChange} 
              className={`${commonStyle} appearance-none cursor-pointer`} 
              style={!error ? { '--tw-ring-color': BRAND.colors.primary } : {}}
            >
                <option value="">Select Country</option>
                {COUNTRIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
            </select>
            {submitBtn(!inputValue || inputValue === "Select Country" || isSending)}
          </form>
        );

      case 7: // End
        return (
          <div className="text-center py-2">
            <p className="text-xs font-medium flex items-center justify-center gap-1" style={{ color: BRAND.colors.primary }}><ShieldCheck size={14} /> session complete</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 font-sans antialiased">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            /* INCREASED WIDTH HERE: w-[400px] */
            className="w-[90vw] sm:w-[400px] h-[550px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-100 ring-1 ring-black/5"
            style={{ maxHeight: 'calc(100vh - 100px)' }}
          >
            {/* Header */}
            <div className="p-4 flex justify-between items-center text-white shrink-0 shadow-md" style={{ backgroundColor: BRAND.colors.primary }}>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={BRAND.avatar} alt={BRAND.name} className="w-10 h-10 rounded-full object-cover border-2 border-white/20 shadow-sm" onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Saarah&background=random"; }} />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#70564b] rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm tracking-wide">{BRAND.name}</h3>
                  <p className="text-[10px] text-white/80 uppercase tracking-wider">{BRAND.role}</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/10 rounded-full transition-colors"><X size={18} className="text-white/90" /></button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 scroll-smooth" style={{ backgroundColor: BRAND.colors.bg }}>
              {messages.map((msg) => (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.sender === 'user' ? 'text-white rounded-tr-none' : 'bg-white text-slate-700 border border-gray-200/60 rounded-tl-none'}`} style={msg.sender === 'user' ? { backgroundColor: BRAND.colors.primary } : {}}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
              
              {/* Error Notification */}
              {error && (
                <motion.div initial={{opacity:0, y:5}} animate={{opacity:1, y:0}} className="flex items-center gap-2 text-xs text-red-500 mb-2 font-semibold">
                    <AlertCircle size={12} /> {error}
                </motion.div>
              )}

              {renderInputArea()}
              <div className="text-center mt-3">
                <p className="text-[10px] text-gray-300">Powered by Glimmora International</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FIXED LAUNCHER BUTTON */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(118, 0, 21, 0.7)",
            "0 0 0 10px rgba(118, 0, 21, 0)",
            "0 0 0 0 rgba(118, 0, 21, 0)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1
        }}
        className="w-14 h-14 text-white rounded-full flex items-center justify-center transition-all relative shadow-lg z-[10000]"
        style={{ backgroundColor: BRAND.colors.primary }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={26} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare size={26} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ChatBot;