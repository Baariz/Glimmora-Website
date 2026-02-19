import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Zap, Globe, Linkedin, Smile } from 'lucide-react';

// --- ANIMATION HELPER ---
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Careers = () => {
  return (
    <div className="bg-[#fdfbf9] font-sans text-[#2E2A28] selection:bg-[#70564b] selection:text-white pt-20">

      {/* 1. HERO SECTION */}
      <section className="relative py-24 px-6 border-b border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="text-[#70564b] font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              Careers at Glimmora International
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#70564b] mb-6">
              Do Work That Matters.
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Glimmora International builds software that helps big companies stay safe and follow the rules. We use smart technology to solve complex problems in simple ways.
            </p>
            
            <div className="flex justify-center">
               <a 
                href="https://in.linkedin.com/company/glimmora-international" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0077b5] text-white px-6 py-3 rounded hover:bg-[#006097] transition-colors text-xs font-bold uppercase tracking-widest shadow-md"
              >
                <Linkedin size={16} />
                Connect on LinkedIn
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. WHAT WE DO (SIMPLIFIED) */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <FadeIn>
              <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] text-xs mb-3">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-6">
                We build technology for trust.
              </h3>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  Imagine a bank or a hospital handling thousands of documents every day. They need to make sure everything is correct and secure. That is where we come in.
                </p>
                <p>
                  We create "Governance, Risk, and Compliance" (GRC) tools. In simple terms, our software acts like a smart assistant that checks data, finds risks, and ensures businesses run smoothly without breaking any laws.
                </p>
                <p>
                  We are a team of problem-solvers who love turning difficult challenges into easy-to-use solutions.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-6">
               {[
                 { title: "Global Team", desc: "We work with clients and colleagues from around the world.", icon: Globe },
                 { title: "Innovation", desc: "We use AI to automate boring tasks, making work faster.", icon: Zap },
                 { title: "People First", desc: "We believe technology should help people, not replace them.", icon: Users },
               ].map((item, i) => (
                 <FadeIn key={i} delay={i * 0.1}>
                    <div className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#70564b]/50 transition-colors">
                      <div className="w-10 h-10 bg-[#fdfbf9] rounded-lg flex items-center justify-center text-[#70564b] shrink-0">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#70564b] mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                 </FadeIn>
               ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. CULTURE VALUES (LIGHT BACKGROUND) */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[#70564b] font-bold uppercase tracking-[0.2em] text-xs mb-3">Our Culture</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#2E2A28]">
              A Place to Grow.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Learning", desc: "We are always learning new things. If you are curious, you will fit right in." },
              { title: "Ownership", desc: "We trust you to do your job. No micromanagement, just support." },
              { title: "Friendship", desc: "We work hard, but we also respect each other and enjoy the journey." },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="h-full bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow text-center">
                  <div className="w-12 h-12 bg-[#70564b]/10 text-[#70564b] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smile size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-[#70564b] mb-3">{card.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CURRENT OPENINGS (LINKEDIN REDIRECT) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2A28] mb-4">
              Join Our Team
            </h2>
            
            <div className="bg-[#fdfbf9] border border-gray-200 rounded-xl p-10 mt-8">
              <h3 className="text-xl font-bold text-[#70564b] mb-3">
                Check our LinkedIn for Updates
              </h3>
              <p className="text-sm text-gray-600 mb-8 max-w-lg mx-auto">
                We don't have any specific roles open on the website right now, but we are always active on LinkedIn. Follow our page to see what we are up to and catch new job postings the moment they go live.
              </p>
              
              <a 
                href="https://in.linkedin.com/company/glimmora-international" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0077b5] text-white px-8 py-3 rounded hover:bg-[#006097] transition-colors text-xs font-bold uppercase tracking-widest shadow-lg"
              >
                <Linkedin size={16} />
                Visit Glimmora LinkedIn
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};

export default Careers;