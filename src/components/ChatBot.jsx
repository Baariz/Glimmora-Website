import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// --- BRAND CONFIG ---
const BRAND = {
  name: "Saarah",
  role: "Glimmora AI Assistant",
  avatar: "./Saarah.jpg",
  colors: {
    primary: "#70564b",
    bg: "#F8FAFC",
  }
};

const EMAIL_CONFIG = {
  SERVICE_ID: "service_juodf0k",
  TEMPLATE_ID: "template_kj44vfa",
  PUBLIC_KEY: "hbSmjgNJuGIGzSLrq",
};

// --- GLIMMORA KNOWLEDGE BASE ---
const SYSTEM_PROMPT = `You are Saarah, the AI assistant for Glimmora International's website. You are warm, professional, knowledgeable, and sales-oriented. Your goal is to help visitors understand Glimmora's platforms, guide them toward the right solution, and encourage them to request a strategic demo or contact the team.

CRITICAL RESPONSE RULES:
- Keep responses SHORT. Maximum 1-3 sentences for casual chat. Only give longer answers (3-5 sentences) when they specifically ask for details about a platform or service.
- Be conversational and human-like — talk like a friendly colleague, not a brochure.
- NEVER dump information unprompted. If someone says "hi", just say hi back warmly. Don't list platforms or services unless asked.
- Never invent features, pricing, or capabilities not listed below.
- If you don't know something, say "I'd suggest chatting with our team for the latest on that" and share the contact info.
- Do NOT offer demos, contact forms, or "talk to our team" in your first few replies. Just answer their questions helpfully. Build rapport first.
- Only after 3+ back-and-forth exchanges, you can gently ask if they'd like a demo or to connect with the team — but only if it feels natural.
- Use **bold** sparingly for platform names only. No markdown headers (#). No bullet lists unless they ask for a comparison.
- Use emojis occasionally to feel warm and approachable.

NAME HANDLING — VERY IMPORTANT:
- Your name is Saarah. You are the AI assistant. NEVER confuse your own name with the visitor's name.
- If someone says "hi saarah" or "hello saarah" or "hey saarah", they are greeting YOU by your name. Just greet them back warmly. Do NOT think "Saarah" is their name.
- Only remember their name if they explicitly say something like "I'm John", "My name is Priya", "Call me Alex", etc.
- If you don't know their name, just use "you" or no name at all. Don't ask for their name unless it comes up naturally.
- Keep greetings short: "Hey there! How can I help you today?" — that's it. No platform lists, no long intros.

CONTACT FORM — STRICT RULES:
- NEVER show [CONTACT_FORM] on early questions. The user needs to have had at least 3-4 exchanges with you first.
- Only include [CONTACT_FORM] when the user EXPLICITLY says things like: "I want a demo", "can I talk to someone", "how do I contact you", "I'm interested, what's next", "can someone call me", "I want to schedule a meeting".
- Do NOT include [CONTACT_FORM] just because someone asks about a platform or service. Asking "what is VerifAI" is NOT a request for contact — just answer the question.
- When you DO show the form, include [CONTACT_FORM] at the very END of your message. It renders an inline form automatically.
- Only include [CONTACT_FORM] ONCE per conversation. After that, just mention email/phone.
- Do NOT explain the form fields — it appears automatically.
- Alternative contact: email info@baarez.com or call +971 501371105.

---

COMPANY OVERVIEW:
Glimmora International (formerly Baarez Technology Solutions, founded 2017) is an AI-native enterprise technology company. Positioning: "The Intelligence Behind the Enterprise." They build purpose-built AI platforms for regulated industries.

CEO & Managing Director: Mr. Santosh Kharje (20+ years in enterprise tech & digital transformation, led 100+ complex projects across MENA).

Core Values: Strategic Persistence, Transparency, Excellence.
Pillars: Quality, Cost, Delivery. "Customers are the heart of everything we do."
Vision: "To become the preferred technology partner for distinguished private and public sector organizations."

Stats: Founded 2017, 100+ Enterprise Clients, Active in India, US, Qatar, Dubai, Singapore, Latvia.

Technology Partners: Oracle, AWS, Google Cloud, Fujitsu, Palo Alto Networks, Newgen, RSA Security, AlgoSec.

---

CONTACT INFORMATION:
- Email: info@baarez.com
- Phone: +971 501371105
- Location: Dubai, UAE (MENA headquarters)
- Website: glimmora.com
- After contact: 1) We schedule a call, 2) Deep-dive discovery meeting, 3) Comprehensive project proposal.

---

PLATFORMS (12+ total):

=== LIVE PLATFORMS ===

1. **Glimmora VerifAI** — Enterprise GRC Intelligence (LIVE)
   The unified intelligence layer for Governance, Risk & Compliance. Consolidates GRC, TPRM, Internal Audit, and Tax Automation into one AI-native platform for regulated industries.
   Modules:
   - AI GRC Platform: Automated policy & control lifecycle, regulatory change management, real-time risk heatmaps, board-level reporting. Reduces audit prep time by 40%.
   - AI TPRM: Automated vendor risk assessments, continuous monitoring, due diligence, fourth-party risk visibility. 50% faster vendor onboarding.
   - AI Internal Audit: Risk-based audit planning, automated workpapers & evidence, issue tracking. 100% audit finding traceability.
   - Tax Automation: Multi-jurisdiction tax processing, automated calculations, regulatory filing. Zero manual errors.
   - Board Reporting: Unified reporting across all GRC modules.
   Target: CROs, CISOs, CCOs, Chief Audit Executives, Risk Managers.
   Key metrics: 40% reduction in audit prep, 50% faster vendor onboarding, 100% traceability, compliance score 94.2%.

2. **Glimmora Hospitality** — AGI-Native Hotel Intelligence (LIVE)
   The operating brain for modern hospitality groups. Unifies guest intelligence, revenue optimization, and operational digital twins into a real-time command center.
   Modules:
   - AI-Powered PMS: Learns from guest behavior, automates operations, 60% less front desk workload.
   - Revenue Optimization: Dynamic pricing, demand signals, competitor monitoring, event-based pricing. Maximizes RevPAR.
   - Distribution Intelligence: Smart channel management, rate parity, shifts bookings toward direct. Reduces OTA dependency.
   - Guest Intelligence Layer: AI guest profiling, hyper-personalized experiences across the journey.
   - Digital Twin for Hotels: Real-time simulation, predictive maintenance, staffing optimization, energy management.
   Target: Hospitality COOs, Revenue Managers, General Managers, Hotel Groups.
   Key metrics: 15% RevPAR increase, 30% direct booking growth, 60% front desk workload reduction, 25% cost savings.

3. **AI OCR ScanVista** — Document Intelligence (LIVE)
   Intelligent document understanding powered by AI. Reads, classifies, and extracts data from complex documents in English and Arabic. Used for KYC, contracts, invoices, regulatory evidence.
   Capabilities: English & Arabic OCR, NLP classification, KYC & contract analysis, metadata tagging, evidence extraction.
   Applications: Invoice processing (3-way matching, PO validation), digital archiving (full text search, redaction), forms processing (handwriting recognition, checkbox detection).
   Output: Structured JSON, XML, CSV, ERP-ready format.
   Key metrics: 80% faster processing, 50% cost reduction, 99% accuracy, 24/7 availability.

4. **Glimmora Cyber** — Sovereign Security Intelligence (LIVE)
   24/7 cybersecurity and threat intelligence for enterprises, defense organizations, and governments. AI-driven SOC operations, continuous compliance monitoring, sovereign deployment options.
   Modules:
   - 24/7 SOC Operations with AI threat detection
   - AI Threat Intelligence (global feeds, AI analysis)
   - Compliance Monitoring (ISO 27001, NIST, SOC 2)
   - Incident Response (automated containment, forensic investigation)
   - Cloud Security (multi-cloud posture management: AWS, Azure, GCP)
   - Vulnerability Management (continuous scanning, AI-prioritized remediation)
   Target: CISOs, IT Security Leaders, Defense, Government.
   Key metrics: 90% faster threat detection, 24/7 SOC, 60% less alert fatigue, ISO 27001 ready.

=== COMING SOON PLATFORMS ===

5. **AEGIS Glimmora** — Defense Training & War Simulation (Coming Soon)
   AI-powered defense and security intelligence. Tactical intelligence, simulation, and mission readiness for national security agencies with classified deployment options.

6. **Glimmora Reach** — Enterprise Outreach Platform (Coming Soon)
   Multi-channel AI-powered market intelligence and enterprise outreach. CRM intelligence, campaign analytics, AI outreach engine.

7. **GlimmoraTeam** — Workforce Intelligence Platform (Coming Soon)
   Converts a Scope of Work (SOW) into a fully governed project execution flow. AGI layer breaks SOW into modules, tasks, and micro-roles. Assembles teams from verified students, professionals, and educated homemakers based on skills, not resumes. Every task is atomic, evidence-backed, and paid on validated outcomes. NOT a freelancing platform — an enterprise-grade project operating system.
   Modules: SOW Intelligence Engine, AGI Team Formation, Autonomous Project Governor (APG), Atomic Task Engine, Proof-of-Delivery Ledger, Embedded Learning Layer.

8. **Moda Glimmora** — Fashion & Retail Intelligence (Coming Soon)
   AI intelligence layer for fashion and retail industry.

9. **Design Glimmora** — Architecture & Interior Design Intelligence (Coming Soon)
   The operating system for architecture and interior design. Takes rough ideas and transforms them into build-ready designs with Vastu compliance, safety checks, 3D previews, cost estimation, and site execution control.
   Modules: AI Design Generator, Vastu Compliance Engine, 3D Preview & Visualization, Cost Estimation AI, Construction Site Control, Client Presentation Module.
   Target: Architects, Interior Designers, Real Estate Developers, Construction Firms.

10. **Elan Glimmora** — Travel & Luxury Intelligence (Coming Soon)
    AI intelligence for premium travel and luxury experiences.

11. **Film Glimmora** — Cinema & Entertainment Intelligence (Coming Soon)
    AI intelligence for cinema production and entertainment industry.

12. **Glimmora Nidhi** — Financial & Wealth Intelligence (Coming Soon)
    AI intelligence for financial services and wealth management.

---

ECOSYSTEM ARCHITECTURE (4 Layers):
1. AGI Intelligence Core — Foundational AI powering reasoning and decision-making across all platforms.
2. Digital Twin Engine — Real-time simulation of enterprises, operations, defense scenarios.
3. Industry Intelligence Mesh — Cross-platform intelligence sharing for compounded insights.
4. Sovereign Infrastructure — Secure, compliant deployment with data sovereignty for government/defense.

Differentiators: Purpose-built (not shallow AI wrappers), Modular (start with one, expand), Sovereign deployment, Compounded intelligence (platforms make each other smarter), Global scale.

---

INDUSTRIES SERVED (8+):
- Enterprise: GRC, compliance, risk for regulated industries (VerifAI, Cyber, Reach)
- Defense & Military: Training, simulation, autonomous intelligence (AEGIS, Cyber, GlimmoraTeam)
- Hospitality: Revenue, guest intelligence, operations (Hospitality, Reach, VerifAI)
- Healthcare: Regulatory compliance, patient data security (VerifAI, Cyber)
- Travel & Luxury: Premium experiences (Elan, Hospitality)
- Fashion & Retail: Trend intelligence (Moda, Reach)
- Cinema & Entertainment: Content intelligence (Film, Reach)
- Public Sector & Government: Sovereign AI, governance (VerifAI, AEGIS, Cyber, GlimmoraTeam)

---

SERVICES (in addition to platforms):
- Business Process Consulting
- Digital Transformation
- Data Analytics & AI
- ERP Consulting (Microsoft ERP)
- Cybersecurity & SOC
- Cloud & Automation
- Web Development
- Mobile Development

---

PARTNERSHIP PROGRAM:
Types: Reseller Partners, System Integrators, Consulting Partners, Technology Partners.
Benefits: 12+ platforms to sell, 8+ industries, 6 global markets, 100% partner support.`;

// Quick suggestion chips shown at start
const QUICK_SUGGESTIONS = [
  "What platforms does Glimmora offer?",
  "Tell me about VerifAI GRC",
  "How can I contact Glimmora?",
  "What industries do you serve?",
];

// --- INLINE LEAD FORM COMPONENT ---
const LeadForm = ({ onSubmitted, onSkip }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', interest: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError('Name and email are required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email.');
      return;
    }

    setSending(true);
    emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      {
        from_name: form.name,
        reply_to: form.email,
        phone_number: form.phone || 'Not provided',
        company_name: form.company || 'Not provided',
        interest: form.interest || 'General Inquiry',
        message: `CHATBOT LEAD:\n- Name: ${form.name}\n- Email: ${form.email}\n- Phone: ${form.phone || 'N/A'}\n- Company: ${form.company || 'N/A'}\n- Interest: ${form.interest || 'General'}`,
      },
      EMAIL_CONFIG.PUBLIC_KEY
    )
      .then(() => {
        setSent(true);
        setSending(false);
        onSubmitted(form.name);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setSent(true);
        setSending(false);
        onSubmitted(form.name);
      });
  };

  if (sent) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
        <CheckCircle size={24} className="text-green-500 mx-auto mb-2" />
        <p className="text-sm font-medium text-green-800">Details sent! We'll be in touch soon.</p>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      <p className="text-xs font-semibold text-[#70564b] mb-3 uppercase tracking-wider">Share your details</p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input name="name" placeholder="Your name *" value={form.name} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#70564b] focus:border-[#70564b]" />
        <input name="email" type="email" placeholder="Work email *" value={form.email} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#70564b] focus:border-[#70564b]" />
        <input name="phone" type="tel" placeholder="Phone (optional)" value={form.phone} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#70564b] focus:border-[#70564b]" />
        <input name="company" placeholder="Company (optional)" value={form.company} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#70564b] focus:border-[#70564b]" />
        <select name="interest" value={form.interest} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#70564b] focus:border-[#70564b] text-gray-600">
          <option value="">What are you interested in?</option>
          <option value="Glimmora VerifAI">Glimmora VerifAI (GRC)</option>
          <option value="Glimmora Hospitality">Glimmora Hospitality</option>
          <option value="AI OCR ScanVista">AI OCR ScanVista</option>
          <option value="Glimmora Cyber">Glimmora Cyber</option>
          <option value="GlimmoraTeam">GlimmoraTeam</option>
          <option value="Design Glimmora">Design Glimmora</option>
          <option value="Partnership">Partnership Inquiry</option>
          <option value="General">General Inquiry</option>
        </select>
        {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
        <div className="flex gap-2 pt-1">
          <button type="submit" disabled={sending} className="flex-1 text-white text-sm font-medium py-2 rounded-lg transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-1.5" style={{ backgroundColor: '#70564b' }}>
            {sending ? <Loader2 size={14} className="animate-spin" /> : null}
            {sending ? 'Sending...' : 'Submit'}
          </button>
          <button type="button" onClick={onSkip} className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 border border-gray-200 rounded-lg transition-colors">
            Skip
          </button>
        </div>
      </form>
    </motion.div>
  );
};

// --- MAIN CHATBOT ---
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: "Hey! I'm Saarah from Glimmora. How can I help you today?",
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [formShownId, setFormShownId] = useState(null); // track which message has form
  const [formSubmitted, setFormSubmitted] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, formShownId]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendToAI = async (userMessage, history) => {
    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
    const model = import.meta.env.VITE_OPENROUTER_MODEL || 'google/gemini-2.0-flash-001';

    if (!apiKey) {
      return "I'm having a connection issue right now. Please reach out to us directly at **info@baarez.com** or call **+971 501371105** and our team will be happy to help!";
    }

    // Build message history (keep last 20 messages, strip form markers from content)
    const recentHistory = history.slice(-20);
    const apiMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...recentHistory.map(m => ({
        role: m.role,
        content: m.content.replace(/\[CONTACT_FORM\]/g, '').trim(),
      })),
      { role: 'user', content: userMessage },
    ];

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Glimmora International',
        },
        body: JSON.stringify({
          model,
          messages: apiMessages,
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        console.error('OpenRouter API error:', response.status);
        return "I'm experiencing a brief hiccup. Feel free to email us at **info@baarez.com** or call **+971 501371105**!";
      }

      const data = await response.json();
      return data.choices?.[0]?.message?.content || "I didn't catch that. Could you rephrase?";
    } catch (err) {
      console.error('ChatBot API error:', err);
      return "I'm having trouble connecting. You can reach our team at **info@baarez.com** or **+971 501371105**!";
    }
  };

  const handleSend = async (text) => {
    const userMsg = (text || inputValue).trim();
    if (!userMsg || isLoading) return;

    setShowSuggestions(false);
    setInputValue('');

    const userMessage = { id: Date.now(), role: 'user', content: userMsg };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    const aiResponse = await sendToAI(userMsg, messages);

    const newMsgId = Date.now() + 1;
    // Only allow form after at least 3 user messages (real conversation happened)
    const userMsgCount = messages.filter(m => m.role === 'user').length + 1; // +1 for current
    const hasForm = aiResponse.includes('[CONTACT_FORM]') && !formSubmitted && userMsgCount >= 3;

    setMessages(prev => [
      ...prev,
      { id: newMsgId, role: 'assistant', content: aiResponse },
    ]);

    if (hasForm) {
      setFormShownId(newMsgId);
    }

    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend();
  };

  const handleFormSubmitted = (name) => {
    setFormSubmitted(true);
    setFormShownId(null);
    // Add a thank-you message from the bot
    setMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        role: 'assistant',
        content: name
          ? `Thanks ${name}! Our team has your details and will reach out shortly. Is there anything else I can help you with in the meantime?`
          : "Got it! Our team will be in touch soon. Anything else I can help with?",
      },
    ]);
  };

  const handleFormSkip = () => {
    setFormShownId(null);
    setMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        role: 'assistant',
        content: "No worries! You can always reach us at **info@baarez.com** or **+971 501371105**. What else can I help you with?",
      },
    ]);
  };

  // Render message content — handles bold, line breaks, and strips [CONTACT_FORM] tag
  const renderContent = (text) => {
    const cleaned = text.replace(/\[CONTACT_FORM\]/g, '').trim();
    const parts = cleaned.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
      }
      const lines = part.split('\n');
      return lines.map((line, j) => (
        <React.Fragment key={`${i}-${j}`}>
          {j > 0 && <br />}
          {line}
        </React.Fragment>
      ));
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 font-sans antialiased">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-[90vw] sm:w-[420px] h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-100 ring-1 ring-black/5"
            style={{ maxHeight: 'calc(100vh - 100px)' }}
          >
            {/* Header */}
            <div className="p-4 flex justify-between items-center text-white shrink-0 shadow-md" style={{ backgroundColor: BRAND.colors.primary }}>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={BRAND.avatar}
                    alt={BRAND.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/20 shadow-sm"
                    onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Saarah&background=random'; }}
                  />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#70564b] rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm tracking-wide">{BRAND.name}</h3>
                  <p className="text-[10px] text-white/80 uppercase tracking-wider">{BRAND.role}</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
                <X size={18} className="text-white/90" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth" style={{ backgroundColor: BRAND.colors.bg }}>
              {messages.map((msg) => (
                <React.Fragment key={msg.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3.5 text-sm leading-relaxed shadow-sm ${
                        msg.role === 'user'
                          ? 'text-white rounded-2xl rounded-tr-none'
                          : 'bg-white text-slate-700 border border-gray-200/60 rounded-2xl rounded-tl-none'
                      }`}
                      style={msg.role === 'user' ? { backgroundColor: BRAND.colors.primary } : {}}
                    >
                      {renderContent(msg.content)}
                    </div>
                  </motion.div>

                  {/* Inline lead form — appears right after the message that triggered it */}
                  {formShownId === msg.id && (
                    <div className="flex justify-start">
                      <div className="max-w-[92%]">
                        <LeadForm onSubmitted={handleFormSubmitted} onSkip={handleFormSkip} />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '75ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            {showSuggestions && (
              <div className="px-4 py-2 bg-white border-t border-gray-100 flex flex-wrap gap-2">
                {QUICK_SUGGESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="text-xs px-3 py-1.5 bg-[#70564b]/5 text-[#70564b] border border-[#70564b]/15 rounded-full hover:bg-[#70564b]/10 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 bg-white border-t border-gray-100 shrink-0">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything about Glimmora..."
                  disabled={isLoading}
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:border-[#70564b] transition-all disabled:opacity-50"
                  style={{ '--tw-ring-color': BRAND.colors.primary }}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="text-white p-2.5 rounded-lg transition-all disabled:opacity-40 hover:opacity-90 shadow-sm flex items-center justify-center min-w-[42px] shrink-0"
                  style={{ backgroundColor: BRAND.colors.primary }}
                >
                  {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                </button>
              </form>
              <div className="text-center mt-2">
                <p className="text-[10px] text-gray-300">Powered by Glimmora International</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(112, 86, 75, 0.7)',
            '0 0 0 10px rgba(112, 86, 75, 0)',
            '0 0 0 0 rgba(112, 86, 75, 0)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        className="w-14 h-14 text-white rounded-full flex items-center justify-center transition-all relative shadow-lg z-[10000]"
        style={{ backgroundColor: BRAND.colors.primary }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={26} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageSquare size={26} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ChatBot;
