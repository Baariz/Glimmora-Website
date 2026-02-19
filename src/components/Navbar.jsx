import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Reusable Icon Components for the Menu
const Icons = {
  Shield: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Chart: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Cloud: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  Cog: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Doc: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Users: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Sparkles: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState(null) 
  const [mobileExpanded, setMobileExpanded] = useState(null) 

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const solutionsMenu = [
    {
      title: "Core Platforms",
      items: [
        { name: 'Glimmora Hospitality', path: '/solutions/glimmora', desc: 'AGI-native hospitality intelligence.', icon: Icons.Sparkles },

        { name: 'AI GRC Platform', path: '/solutions/grc', desc: 'Unified governance, risk & compliance.', icon: Icons.Shield },
        { name: 'AI TPRM Platform', path: '/solutions/tprm', desc: 'Third-party risk management lifecycle.', icon: Icons.Shield },
        { name: 'AI Internal Audit Platform', path: '/solutions/internal-audit', desc: 'Streamline audit workflows.', icon: Icons.Doc },
      ]
    },
    {
      title: "Intelligence & Automation",
      items: [
        { name: 'AI OCR ScanVista', path: '/solutions/scanvista', desc: 'AI-powered document processing.', icon: Icons.Doc },
        { name: 'Tax Automation', path: '/solutions/tax-automation', desc: 'Automated tax reporting engine.', icon: Icons.Chart },
      ]
    },
    {
      title: "Enterprise Systems",
      items: [
        { name: 'Dynamics 365', path: '/solutions/dynamics-365', desc: 'ERP & CRM implementation.', icon: Icons.Cloud },
        { name: 'Human Resources (HR)', path: '/solutions/human-resource', desc: 'Business Central HR solution.', icon: Icons.Users },
      ]
    }
  ]

  const servicesMenu = [
    {
      title: "Consulting & Transformation",
      items: [
        { name: 'Business Process Consulting', path: '/services/business-process-consulting', desc: 'Optimize operational efficiency.', icon: Icons.Chart },
        { name: 'Digital Transformation', path: '/services/digital-transformation', desc: 'Modernize legacy systems.', icon: Icons.Cog },
      ]
    },
    {
      title: "Technology & AI",
      items: [
        { name: 'Data Analytics & AI', path: '/services/data-analytics-ai', desc: 'Actionable insights from data.', icon: Icons.Chart },
      ]
    },
    {
      title: "Cloud, Security & ERP",
      items: [
        { name: 'ERP Consulting', path: '/services/erp-consulting', desc: 'Expert ERP advisory services.', icon: Icons.Cog },
        { name: 'Cybersecurity & SOC', path: '/services/cybersecurity-soc', desc: '24/7 threat monitoring.', icon: Icons.Shield },
        { name: 'Cloud & Automation', path: '/services/cloud-automation', desc: 'Cloud migration & DevOps.', icon: Icons.Cloud },
      ]
    }
  ]

  // Updated Resources Array
  const resources = [
    { name: 'Blogs', path: '/blogs' },
    { name: 'White Paper', path: '/grc-whitepaper' },
  ]

  const toggleMobileExpand = (menu) => {
    setMobileExpanded(mobileExpanded === menu ? null : menu)
  }

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
      }`}
    >
      <div className="section-container relative">
        <div className="flex items-center justify-between h-24">
          
          {/* --- LOGO (text-based, temporary until brand assets are finalised) --- */}
          <Link to="/" className="flex items-center space-x-3 z-50 shrink-0">
            <img
              src="/Glimmora_website_logo_fit.png"
              alt="Glimmora International"
              className="h-52 w-52 object-contain" 
            />
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden lg:flex items-center space-x-8 h-full">
            
            {/* 1. About */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-brand-maroon' : 'text-gray-700 hover:text-brand-maroon'}`
              }
            >
              About
            </NavLink>

            {/* 2. Solutions Mega Menu */}
            <div 
              className="h-full flex items-center"
              onMouseEnter={() => setActiveMegaMenu('solutions')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button 
                className={`text-sm font-medium transition-colors flex items-center space-x-1 outline-none ${
                  activeMegaMenu === 'solutions' ? 'text-brand-maroon' : 'text-gray-700 hover:text-brand-maroon'
                }`}
              >
                <span><Link to="/solutions" onClick={() => setActiveMegaMenu(null)}>Solutions</Link></span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${activeMegaMenu === 'solutions' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div 
                className={`absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 origin-top transform ${
                  activeMegaMenu === 'solutions' 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="grid grid-cols-3 gap-8">
                    {solutionsMenu.map((column, idx) => (
                      <div key={idx} className="space-y-4">
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          {column.title}
                        </h3>
                        <ul className="space-y-3">
                          {column.items.map((item) => (
                            <li key={item.path}>
                              <Link 
                                to={item.path} 
                                onClick={() => setActiveMegaMenu(null)}
                                className="group block p-3 -mx-3 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <div className="flex items-start">
                                  <div className="flex-shrink-0 mt-1">
                                    <item.icon />
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900 group-hover:text-brand-maroon">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.desc}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100 bg-gray-50 -mx-8 -mb-8 px-8 py-4 flex justify-between items-center rounded-b-lg">
                    <span className="text-sm text-gray-500">Need help finding the right solution?</span>
                    <Link 
                      to="/contact" 
                      className="text-sm font-semibold text-brand-maroon hover:text-brand-dark"
                      onClick={() => setActiveMegaMenu(null)}
                    >
                      Talk to an expert &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Services Mega Menu */}
            <div 
              className="h-full flex items-center"
              onMouseEnter={() => setActiveMegaMenu('services')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button 
                className={`text-sm font-medium transition-colors flex items-center space-x-1 outline-none ${
                  activeMegaMenu === 'services' ? 'text-brand-maroon' : 'text-gray-700 hover:text-brand-maroon'
                }`}
              >
                <span><Link to="/services" onClick={() => setActiveMegaMenu(null)}>Services</Link></span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${activeMegaMenu === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div 
                className={`absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 origin-top transform ${
                  activeMegaMenu === 'services' 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="grid grid-cols-3 gap-8">
                    {servicesMenu.map((column, idx) => (
                      <div key={idx} className="space-y-4">
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          {column.title}
                        </h3>
                        <ul className="space-y-3">
                          {column.items.map((item) => (
                            <li key={item.path}>
                              <Link 
                                to={item.path} 
                                onClick={() => setActiveMegaMenu(null)}
                                className="group block p-3 -mx-3 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <div className="flex items-start">
                                  <div className="flex-shrink-0 mt-1">
                                    <item.icon />
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900 group-hover:text-brand-maroon">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.desc}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Resources */}
            <div 
              className="relative group h-full flex items-center"
              onMouseEnter={() => setActiveMegaMenu('resources')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className={`text-sm font-medium transition-colors flex items-center space-x-1 outline-none ${
                  activeMegaMenu === 'resources' ? 'text-brand-maroon' : 'text-gray-700 hover:text-brand-maroon'
                }`}>
                <span>Resources</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full right-0 w-48 bg-white rounded-b-lg shadow-xl py-2 border border-gray-100 transition-all duration-200 ${
                  activeMegaMenu === 'resources' 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}>
                {resources.map((resource) => (
                  <Link
                    key={resource.path}
                    to={resource.path}
                    onClick={() => setActiveMegaMenu(null)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-maroon"
                  >
                    {resource.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* 5. Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-brand-maroon' : 'text-gray-700 hover:text-brand-maroon'}`
              }
            >
              Contact
            </NavLink>

            {/* Button */}
            <Link to="/partner-on-board" className="btn-primary text-sm px-5 py-2.5">
              Become A Partner
            </Link>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* --- MOBILE MENU --- */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-24 left-0 w-full bg-white border-t border-gray-100 shadow-xl overflow-y-auto max-h-[calc(100vh-6rem)]">
            <div className="px-4 py-6 space-y-4">
              
              {/* 1. About */}
              <Link
                to="/about"
                className="block text-lg font-semibold text-gray-900 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* 2. Solutions */}
              <div>
                <button 
                  onClick={() => toggleMobileExpand('solutions')}
                  className="w-full flex justify-between items-center text-lg font-semibold text-gray-900 py-2"
                >
                  <span>Solutions</span>
                  <svg className={`w-5 h-5 transform transition-transform ${mobileExpanded === 'solutions' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileExpanded === 'solutions' && (
                  <div className="pl-4 space-y-2 mt-2 border-l-2 border-gray-100">
                    {solutionsMenu.map((group) => 
                      group.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block py-2 text-gray-600 hover:text-brand-maroon text-base"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>

              {/* 3. Services */}
              <div>
                <button 
                  onClick={() => toggleMobileExpand('services')}
                  className="w-full flex justify-between items-center text-lg font-semibold text-gray-900 py-2"
                >
                  <span>Services</span>
                  <svg className={`w-5 h-5 transform transition-transform ${mobileExpanded === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileExpanded === 'services' && (
                  <div className="pl-4 space-y-2 mt-2 border-l-2 border-gray-100">
                    {servicesMenu.map((group) => 
                      group.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block py-2 text-gray-600 hover:text-brand-maroon text-base"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>

              {/* 4. Resources */}
              <div>
                <button 
                  onClick={() => toggleMobileExpand('resources')}
                  className="w-full flex justify-between items-center text-lg font-semibold text-gray-900 py-2"
                >
                  <span>Resources</span>
                  <svg className={`w-5 h-5 transform transition-transform ${mobileExpanded === 'resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileExpanded === 'resources' && (
                  <div className="pl-4 space-y-2 mt-2 border-l-2 border-gray-100">
                    {resources.map((resource) => (
                      <Link
                        key={resource.path}
                        to={resource.path}
                        className="block py-2 text-gray-600 hover:text-brand-maroon text-base"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 5. Contact */}
              <Link
                to="/contact"
                className="block text-lg font-semibold text-gray-900 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Button */}
              <div className="pt-4">
                <Link 
                  to="/partner-on-board" 
                  className="btn-primary w-full text-center block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Become A Partner
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar