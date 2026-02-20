import React from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom'

const About = () => {
  const CHAIRMAN_IMAGE = "https://i.postimg.cc/RV4jTwd4/Hamad_Suwaid.webp"; 
  const CEO_IMAGE = "https://i.postimg.cc/ncp61qk6/1763550079714.jpg";

  return (
    <div className="bg-[#FCFCFC] font-sans text-[#2E2A28] selection:bg-[#70564b] selection:text-white overflow-x-hidden">
      
      {/* 1. ARCHITECTURAL HERO (Identity Focus) */}
 <section className="relative pt-44 pb-32 border-b border-gray-100 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[#70564b] text-xs font-bold uppercase tracking-[0.5em]">Identity 01.</span>
          <div className="h-[1px] w-20 bg-[#70564b]"></div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#70564b] leading-[1.1] tracking-tight mb-10">
          The Intelligence <br />
          Behind the <br />
          <span className="text-gray-300 italic">Enterprise.</span>
        </h1>
        <p className="text-gray-500 text-sm font-light leading-relaxed max-w-lg mb-10">
          Glimmora International is not just a consultancy; we are an innovation house.
          Since 2017, we have specialized in delivering AI-native governance, risk, and compliance solutions
          for regulated industries across MENA, building trust through transparency and technical excellence.
        </p>

        {/* --- UPDATED MILESTONES --- */}
        {/* <div className="flex items-center gap-8">
          <div className="text-left">
             <p className="text-2xl font-bold text-[#70564b]">100+</p>
             <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">AI Deployments</p>
          </div>
          <div className="w-[1px] h-10 bg-gray-200"></div>
          <div className="text-left">
             <p className="text-2xl font-bold text-[#70564b]">98%</p>
             <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Client Trust</p>
          </div>
        </div> */}
        {/* ------------------------- */}
        
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative hidden lg:block"
      >
        <div className="aspect-[4/3] bg-[#70564b] relative p-12 overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 p-8">
              <span className="text-white/20 text-9xl font-black">G.</span>
           </div>
           <div className="relative z-10 h-full flex flex-col justify-center">
              <h2 className="text-white text-xl font-bold leading-tight mb-6">"We take ownership of each project we engage in."</h2>
              <p className="text-white/70 font-bold text-xs uppercase tracking-widest">The intelligence layer for the modern world</p>
           </div>
        </div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-gray-100 -z-10"></div>
      </motion.div>
    </div>
  </div>
</section>

      {/* BRAND EVOLUTION: Baarez → Glimmora International */}
      <section className="py-24 bg-[#F5F3F1] relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(112,86,75,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(112,86,75,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#70564b] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Our Evolution</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2E2A28] leading-tight">
              A New Chapter. The Same Commitment.
            </h2>
          </motion.div>

          {/* Transition visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 mb-16"
          >
            {/* Old brand — Baarez */}
            <div className="flex-1 max-w-xs flex flex-col items-center md:items-end">
              <div className="grayscale opacity-40 mb-3">
                <img src="/logo.png" alt="Baarez Technology Solutions" className="h-16 md:h-20 object-contain" />
              </div>
              <p className="text-sm font-semibold text-gray-400">Baarez Technology Solutions</p>
              <p className="text-xs text-gray-400 italic mt-1">Est. 2017</p>
            </div>

            {/* Arrow transition */}
            <div className="flex flex-col items-center gap-2 px-6">
              <div className="hidden md:block w-28 h-[2px] bg-gradient-to-r from-gray-300 via-[#70564b] to-[#70564b] relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[8px] border-l-[#70564b] border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent"></div>
              </div>
              <div className="md:hidden h-14 w-[2px] bg-gradient-to-b from-gray-300 via-[#70564b] to-[#70564b] relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-t-[8px] border-t-[#70564b] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></div>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#70564b]">Evolved</span>
            </div>

            {/* New brand — Glimmora International */}
            <div className="flex-1 max-w-xs flex flex-col items-center md:items-start">
              <div className="mb-3">
                <img src="/Glimmora_logo_icon_fit.png" alt="Glimmora International" className="h-16 md:h-20 object-contain" />
              </div>
              <p className="text-sm font-bold text-[#2E2A28]">Glimmora International</p>
              <p className="text-xs text-[#70564b] font-semibold mt-1">AI-Native Enterprise Platform</p>
            </div>
          </motion.div>

          {/* Supporting message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white border border-gray-100 p-8 md:p-10 shadow-sm relative overflow-hidden">
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#956e5d] to-[#70564b]"></div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    What began in 2017 as <span className="font-semibold text-gray-500">Baarez Technology Solutions</span> — a focused GRC consultancy — has grown into something far more ambitious. Today, as <span className="font-semibold text-[#70564b]">Glimmora International</span>, we are building the AI-native operating system for enterprise governance across regulated industries.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our name has changed, but our DNA remains: precision, transparency, and relentless dedication to client outcomes. Every relationship we built, every trust we earned — it all carries forward.
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-4 border-l border-gray-100 pl-8">
                  <div>
                    <p className="text-2xl font-bold text-[#70564b]">2017</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Founded</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#70564b]">100+</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Enterprise Clients</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#70564b]">MENA</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Region Focus</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. OUR DNA: THE CORE PILLARS (The Approach) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-24 max-w-2xl">
            <h2 className="text-xs text-[#70564b] font-bold uppercase tracking-[0.3em] mb-4">The Glimmora Way</h2>
            <h3 className="text-xl font-bold text-[#70564b]">Precision in execution, consistency in results.</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-0 border border-gray-100">
            {[
              { title: "Strategic Persistence", desc: "Weekly steering forums and dedicated technical procurement ensure relentless progress on every engagement. We persist through complexity until objectives are met." },
              { title: "Transparency", desc: "Openness and honesty at every stage. Full visibility into project status, risks, and decisions. We build solutions based on trust and dedicated determination." },
              { title: "Excellence", desc: "A constant aim for 100% client satisfaction through rigorous quality controls and continuous improvement, ensuring every project leaves a lasting legacy." }
            ].map((pillar, i) => (
              <div key={i} className="p-12 border-r border-gray-100 last:border-r-0 hover:bg-[#fafafa] transition-colors group">
                <span className="text-[#70564b] text-xs font-mono block mb-8">0{i+1} ———</span>
                <h4 className="text-xl font-bold text-[#70564b] mb-6">{pillar.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CEO LEADERSHIP (Mr. Santosh Kharje - First) */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="w-full lg:w-5/12">
              <div className="relative">
                <img 
                  src={CEO_IMAGE} 
                  alt="Mr. Santosh Kharje" 
                  className="w-full grayscale hover:grayscale-0 transition-all duration-1000 shadow-[30px_30px_0px_0px_rgba(112,86,75,1)]"
                />
              </div>
            </div>
            <div className="w-full lg:w-7/12">
              <span className="text-[#70564b] text-xs font-bold uppercase tracking-[0.5em] mb-6 block">Leadership / CEO</span>
              <h3 className="text-3xl md:text-4xl font-bold text-[#70564b] mb-8">Mr. Santosh Kharje</h3>
              <div className="space-y-6 text-gray-600 leading-relaxed text-sm">
                <p>
                  "The success of Glimmora International lies deeply in our pillars of customer satisfaction practices; <strong>quality, cost, delivery</strong>. Customers are the heart of everything we do."
                </p>
                <p>
                  "We have consistently delivered world-beating projects that make our large competitors admire us. By building long-term relationships with customers and partners, we achieve high levels of success in meeting their unique needs."
                </p>
              </div>

              {/* Profile Highlights */}
              <div className="mt-8 p-6 bg-[#fafafa] border-l-4 border-[#70564b] rounded">
                <h4 className="text-xs font-bold text-[#70564b] uppercase tracking-widest mb-4">Profile Highlights</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#70564b] mt-1">•</span>
                    <span>Over 20 years of experience in enterprise technology and digital transformation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#70564b] mt-1">•</span>
                    <span>Deep expertise in AI-native governance solutions for BFSI and public sector</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#70564b] mt-1">•</span>
                    <span>Led successful delivery of 100+ complex infrastructure projects across MENA</span>
                  </li>
                </ul>
              </div>

              <div className="mt-12 flex items-center gap-6">
                 <div className="w-16 h-[1px] bg-[#70564b]"></div>
                 <p className="text-xs font-bold text-[#70564b] uppercase tracking-widest">CEO & Managing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CHAIRMAN LEADERSHIP (Mr. Hamad Suwaid) */}
      {/* <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row-reverse gap-24 items-center">
            <div className="w-full lg:w-5/12">
              <div className="relative">
                <img 
                  src={CHAIRMAN_IMAGE} 
                  alt="Mr. Hamad Suwaid" 
                  className="w-full grayscale hover:grayscale-0 transition-all duration-1000 shadow-[-30px_30px_0px_0px_rgba(112,86,75,1)]"
                />
              </div>
            </div>
            <div className="w-full lg:w-7/12">
              <span className="text-[#70564b] text-xs font-bold uppercase tracking-[0.5em] mb-6 block">Leadership / Chairman</span>
              <h3 className="text-3xl md:text-4xl font-bold text-[#70564b] mb-8">Mr. Hamad Suwaid</h3>
              <div className="space-y-6 text-gray-600 leading-relaxed text-sm">
                <p>
                  "Glimmora International is a local innovative IT company that supports <strong>Qatar National Vision 2030</strong>. We help build a knowledge-based economy and a knowledgeable national workforce."
                </p>
                <p>
                  "I believe that technology, used properly, can drive corporate innovation and growth, and help government departments maximize their resources. We empower our team to deliver the best possible outcomes for each and every one of our partners."
                </p>
                <p className=" bg-[#F5F3F1] p-6 border-l-4 border-[#70564b]">
                  "Technology without the support of knowledgeable, trained and professional IT staff, does not maximize the opportunities that technology can deliver."
                </p>
              </div>

              
              <div className="mt-8 p-6 bg-[#fafafa] border-l-4 border-[#70564b] rounded">
                <h4 className="text-xs font-bold text-[#70564b] uppercase tracking-widest mb-4">Profile Highlights</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#70564b] mt-1">•</span>
                    <span>Champion of Qatar National Vision 2030 and knowledge economy initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#70564b] mt-1">•</span>
                    <span>Extensive experience in public sector digital transformation across GCC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#70564b] mt-1">•</span>
                    <span>Strategic advisor on technology adoption and workforce development</span>
                  </li>
                </ul>
              </div>

              <div className="mt-12 flex items-center gap-6">
                 <div className="w-16 h-[1px] bg-[#70564b]"></div>
                 <p className="text-xs font-bold text-[#70564b] uppercase tracking-widest">Chairman & Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* 5. VISIBLE THINKING: THE VALUE SYSTEM */}
      <section className="section-brand-bg py-32 relative overflow-hidden">
        {/* Soft white ambient glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white translate-x-3/4 opacity-[0.04] rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-xs text-white/60 font-bold uppercase tracking-[0.4em] mb-4">Our Ethical Framework</h2>
            <h3 className="text-xl font-bold text-white">The Principles of Ownership</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {[
              { t: "Integrity", d: "Communicate openly. Be honest." },
              { t: "Satisfaction", d: "Be responsive. Deliver quality." },
              { t: "Teamwork", d: "Leads to exceptional output." },
              { t: "Consistency", d: "Consistent customer-first attitude." },
              { t: "Ownership", d: "Be empowered. Be decisive." }
            ].map((v, i) => (
              <div key={i} className="bg-white/10 p-10 hover:bg-white/20 transition-all group">
                <h4 className="text-white font-bold text-xl mb-4 group-hover:scale-110 transition-transform origin-left">{v.t}</h4>
                <p className="text-white/70 text-xs leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STRATEGIC GROWTH (New Section) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#70564b] mb-10 leading-tight">
                Driving Excellence Across <br />Sector Boundaries.
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <span className="text-3xl font-black text-[#70564b] opacity-20">01</span>
                  <div>
                    <h5 className="font-bold text-[#70564b] text-xl mb-2">Public Sector</h5>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">Helping government departments maximize their resources and drive efficiency, effectiveness, and customer service through local innovation.</p>
                    <div className="flex flex-wrap gap-2">
                      <Link to="/solutions/grc" className="text-xs text-[#70564b] underline hover:text-[#70564b]">GRC for Government</Link>
                      <span className="text-gray-300">•</span>
                      <Link to="/solutions/internal-audit" className="text-xs text-[#70564b] underline hover:text-[#70564b]">Public Sector Audit</Link>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="text-3xl font-black text-[#70564b] opacity-20">02</span>
                  <div>
                    <h5 className="font-bold text-[#70564b] text-xl mb-2">Private Sector</h5>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">Acting as the preferred technology partner for distinguished private organizations in BFSI, healthcare, and energy sectors to drive corporate growth and regulatory excellence.</p>
                    <div className="flex flex-wrap gap-2">
                      <Link to="/solutions/grc" className="text-xs text-[#70564b] underline hover:text-[#70564b]">Banking GRC</Link>
                      <span className="text-gray-300">•</span>
                      <Link to="/solutions/tprm" className="text-xs text-[#70564b] underline hover:text-[#70564b]">Vendor Risk Management</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#fafafa] p-16 border border-gray-100 relative">
               <div className="mb-10">
                  <h4 className="text-xs text-[#70564b] font-bold uppercase tracking-widest mb-4">Corporate Vision</h4>
                  <p className="text-[#70564b] text-xl font-bold italic leading-relaxed">"To become the preferred technology partner for distinguished private and public sector organizations."</p>
               </div>
               <div className="w-20 h-[2px] bg-[#70564b]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl font-bold text-[#70564b] mb-8">Looking forward for longer & stronger business relation.</h2>
          <p className="text-gray-500 text-sm font-light mb-12 italic">
            "Once again thank you for visiting the website and taking your time to read our thoughts."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#70564b] text-white px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#5f4940] transition-all shadow-xl">
             <Link to="/contact">Connect with our Experts</Link>
            </button>
            <button className="border border-[#70564b] text-[#70564b] px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-50 transition-all">
               <Link to="/services">View Our Services</Link>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
