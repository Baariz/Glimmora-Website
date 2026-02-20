import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  // Helper Component for Links with smooth animation
  const FooterLink = ({ to, children }) => (
    <Link
      to={to}
      className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[#70564b] transition-all duration-300 ease-out"
    >
      {/* Arrow that slides in and fades in */}
      <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#70564b]">
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
      {/* Text that slides slightly right */}
      <span className="transform group-hover:translate-x-1 transition-transform duration-300">
        {children}
      </span>
    </Link>
  )

  const solutions = [
    { name: 'AI GRC Platform', path: '/solutions/grc' },
    { name: 'AI TPRM Platform', path: '/solutions/tprm' },
    { name: 'AI Internal Audit', path: '/solutions/internal-audit' },
    { name: 'AI OCR ScanVista', path: '/solutions/scanvista' },
    { name: 'Glimmora Hospitality', path: '/solutions/glimmora' },
  ]

  const services = [
    { name: 'Business Process Consulting', path: '/services/business-process-consulting' },
    { name: 'Digital Transformation', path: '/services/digital-transformation' },
    { name: 'Data Analytics & AI', path: '/services/data-analytics-ai' },
    { name: 'ERP Consulting', path: '/services/erp-consulting' },
  ]

  const resources = [
    { name: 'White Paper', path: '/grc-whitepaper' },
    { name: 'Blogs', path: '/blogs' },
  ]

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' },
  ]

  const locations = [
    'India', 'US', 'Qatar', 'Dubai', 'Singapore', 'Latvia'
  ]

  return (
    <footer className="bg-[#2E2A28] text-gray-300 border-t border-[#70564b]/30 relative overflow-hidden font-sans">

      {/* --- Decorative Elements --- */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#70564b] via-[#4a3830] to-[#70564b]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#70564b] opacity-5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">

        {/* --- Main Footer Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* 1. Left Column: Brand Identity */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Text-based logo — temporary until brand assets are finalised */}
             <Link to="/" className="inline-block mb-6">
                <img
                  src="/Glimmora_website_logov2_fit.png"
                  alt="Glimmora International"
                  className="h-20 w-auto object-contain"
                />
            </Link>

            <p className="text-sm text-[#ffffff] mb-4 font-bold tracking-widest uppercase">
              The intelligence layer for the modern world.
            </p>

            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              AI-native enterprise platform for regulated industries. We bridge the gap between complex governance frameworks and operational reality with speed and precision.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4">
                <a href="https://in.linkedin.com/company/the-baarez-technology-solutions" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#70564b]/20 flex items-center justify-center text-[#70564b] hover:bg-[#5f4940] hover:text-white transition-all duration-300 border border-[#70564b]/30">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://x.com/baariztech" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#70564b]/20 flex items-center justify-center text-[#70564b] hover:bg-[#5f4940] hover:text-white transition-all duration-300 border border-[#70564b]/30">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://www.youtube.com/@baareztechnologysolutions" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#70564b]/20 flex items-center justify-center text-[#70564b] hover:bg-[#5f4940] hover:text-white transition-all duration-300 border border-[#70564b]/30">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
            </div>
          </div>

          {/* 2. Right Column: Link Navigation Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

              <div>
                <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-widest border-b border-[#70564b]/50 pb-2 inline-block">Solutions</h3>
                <ul className="space-y-3">
                  {solutions.map((item) => (
                    <li key={item.path}>
                      <FooterLink to={item.path}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-widest border-b border-[#70564b]/50 pb-2 inline-block">Services</h3>
                <ul className="space-y-3">
                  {services.map((item) => (
                    <li key={item.path}>
                      <FooterLink to={item.path}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-8">
                <div>
                    <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-widest border-b border-[#70564b]/50 pb-2 inline-block">Resources</h3>
                    <ul className="space-y-3">
                    {resources.map((item) => (
                        <li key={item.path}>
                          <FooterLink to={item.path}>{item.name}</FooterLink>
                        </li>
                    ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-widest border-b border-[#70564b]/50 pb-2 inline-block">Company</h3>
                    <ul className="space-y-3">
                    {company.map((item) => (
                        <li key={item.path}>
                          <FooterLink to={item.path}>{item.name}</FooterLink>
                        </li>
                    ))}
                    </ul>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-widest border-b border-[#70564b]/50 pb-2 inline-block">Global Presence</h3>
                <ul className="space-y-3">
                  {locations.map((location) => (
                    <li key={location} className="text-sm text-gray-400 flex items-center gap-3">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#70564b]"></span>
                       <span>{location}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-8 border-t border-[#70564b]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {currentYear} Glimmora International. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-[#70564b] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-[#70564b] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
