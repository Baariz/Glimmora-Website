import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Icons = {
  Shield: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Hotel: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Military: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Lock: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  Sparkles: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  Globe: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Layers: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Building: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M9 8h1M9 12h1M9 16h1M15 8h1M15 12h1M15 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
    </svg>
  ),
  Users: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Heart: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Plane: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  Film: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
    </svg>
  ),
  Doc: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  BookOpen: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  ChartBar: () => (
    <svg className="w-5 h-5 text-brand-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const [mobileAscendOpen, setMobileAscendOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [ascendHover, setAscendHover] = useState(false)

  const platformsMenu = [
    {
      title: 'Live Now',
      items: [
        { name: 'Glimmora Hospitality', path: '/platforms/hospitality', desc: 'AGI-native intelligence for hotels & resorts.', icon: Icons.Hotel, badge: null },
        { name: 'Glimmora VerifAI', path: '/platforms/verifai', desc: 'Enterprise governance, risk & compliance intelligence.', icon: Icons.Shield, badge: null },
        { name: 'Glimmora ScanVista', path: '/platforms/scanvista', desc: 'Intelligent document understanding — English & Arabic OCR.', icon: Icons.Doc, badge: null },
      ]
    },
    {
      title: 'Coming Soon',
      items: [
        { name: 'Moda Glimmora',    path: '/platforms/moda',          desc: 'Fashion & retail intelligence layer.',                        icon: Icons.Sparkles, badge: 'Soon' },
        { name: 'Design Glimmora',  path: '/platforms/design',        desc: 'AI architecture & interior design intelligence.',            icon: Icons.Building, badge: 'Soon' },
        { name: 'GlimmoraTeam',     path: '/platforms/team',          desc: 'SOW to governed project execution via AGI.',                icon: Icons.Users,    badge: 'Soon' },
        { name: 'Film Glimmora',    path: '/platforms/film',          desc: 'Cinema & entertainment intelligence.',                      icon: Icons.Film,     badge: 'Soon' },
        { name: 'Elan Glimmora',    path: '/platforms/elan',          desc: 'Travel & luxury intelligence ecosystem.',                   icon: Icons.Plane,    badge: 'Soon' },
        { name: 'Glimmora Reach',   path: '/platforms/reach',         desc: 'Multi-channel enterprise outreach platform.',               icon: Icons.Globe,    badge: 'Soon' },
        { name: 'Glimmora Nidhi',   path: '/platforms/nidhi',         desc: 'Financial intelligence & advisory platform.',              icon: Icons.Layers,   badge: 'Soon' },
        { name: 'Cyber Glimmora',   path: '/platforms/cyber',         desc: '24/7 cybersecurity & sovereign threat intelligence.',      icon: Icons.Lock,     badge: 'Soon' },
      ]
    },
  ]

  const ascendPlatforms = [
    { name: 'ASCEND Defense',       path: '/platforms/ascend-defense',       desc: 'Military combat simulation & tactical training.',     icon: Icons.Military },
    { name: 'ASCEND Vitalis',       path: '/platforms/ascend-vitalis',       desc: 'Medical simulation & clinical training.',             icon: Icons.Heart },
    { name: 'ASCEND Aero',          path: '/platforms/ascend-aero',          desc: 'Flight simulation & aviation safety.',                icon: Icons.Plane },
    { name: 'ASCEND Manufacturing', path: '/platforms/ascend-manufacturing', desc: 'Factory simulation & industrial safety.',             icon: Icons.Building },
    { name: 'ASCEND Energy',        path: '/platforms/ascend-energy',        desc: 'Energy operations & safety simulation.',              icon: Icons.Layers },
  ]

  const industriesMenu = [
    {
      title: 'Core Industries',
      items: [
        { name: 'Enterprise', path: '/industries/enterprise', desc: 'GRC, compliance & risk for regulated industries.', icon: Icons.Building },
        { name: 'Defense & Military', path: '/industries/defense', desc: 'AI simulation & tactical intelligence.', icon: Icons.Military },
        { name: 'Hospitality', path: '/industries/hospitality', desc: 'Revenue optimization & guest intelligence.', icon: Icons.Hotel },
        { name: 'Healthcare', path: '/industries/healthcare', desc: 'Regulatory compliance & patient intelligence.', icon: Icons.Heart },
      ]
    },
    {
      title: 'Growth Industries',
      items: [
        { name: 'Travel & Luxury', path: '/industries/travel-luxury', desc: 'Premium experience & distribution intelligence.', icon: Icons.Plane },
        { name: 'Fashion', path: '/industries/fashion', desc: 'Trend intelligence & retail AI.', icon: Icons.Sparkles },
        { name: 'Cinema & Entertainment', path: '/industries/cinema', desc: 'Content intelligence & audience analytics.', icon: Icons.Film },
        { name: 'Public Sector', path: '/industries/public-sector', desc: 'Sovereign AI for government & public institutions.', icon: Icons.Globe },
      ]
    }
  ]

  // Resources dropdown: GRC White Paper, Blogs, Case Studies
  const resources = [
    { name: 'GRC White Paper', path: '/grc-whitepaper', icon: Icons.Doc },
    { name: 'Blogs', path: '/blogs', icon: Icons.BookOpen },
    { name: 'Case Studies', path: '/case-studies', icon: Icons.ChartBar },
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

          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3 z-50 shrink-0">
            <img
              src="/Glimmora_website_logov2_fit.png"
              alt="Glimmora International"
              className="h-36 w-36 sm:h-44 sm:w-44 lg:h-52 lg:w-52 object-contain"
            />
          </Link>

          {/* DESKTOP NAV — Order: About, Ecosystem, Platforms, Industries, Resources, Contact */}
          <div className="hidden lg:flex items-center space-x-10 h-full">

            {/* 1. About */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-brand-maroon' : 'text-gray-700 hover:text-brand-maroon'}`
              }
            >
              About
            </NavLink>

            {/* 2. Ecosystem */}
            <NavLink
              to="/ecosystem"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-brand-maroon' : 'text-gray-700 hover:text-brand-maroon'}`
              }
            >
              Ecosystem
            </NavLink>

            {/* 3. Platforms Mega Menu */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => setActiveMegaMenu('platforms')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className={`text-sm font-medium transition-colors flex items-center space-x-1 outline-none ${activeMegaMenu === 'platforms' ? 'text-brand-maroon' : 'text-gray-700 hover:text-brand-maroon'}`}>
                <Link to="/platforms" onClick={() => setActiveMegaMenu(null)}>Platforms</Link>
                <svg className={`w-4 h-4 transition-transform duration-200 ${activeMegaMenu === 'platforms' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 origin-top transform ${activeMegaMenu === 'platforms' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="grid grid-cols-3 gap-8">
                    {/* Live Now — 1 column */}
                    <div className="space-y-4">
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                        {platformsMenu[0].title}
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />
                      </h3>
                      <ul className="space-y-3">
                        {platformsMenu[0].items.map((item) => (
                          <li key={item.path}>
                            <Link to={item.path} onClick={() => setActiveMegaMenu(null)} className="group block p-3 -mx-3 hover:bg-gray-50 transition-colors">
                              <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1"><item.icon /></div>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900 group-hover:text-brand-maroon">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Coming Soon — 2-col inner grid */}
                    <div className="col-span-2 space-y-4 pl-8 border-l border-gray-100">
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {platformsMenu[1].title}
                      </h3>
                      <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
                        {platformsMenu[1].items.map((item) => (
                          <li key={item.path}>
                            <Link to={item.path} onClick={() => setActiveMegaMenu(null)} className="group block p-3 -mx-3 hover:bg-gray-50 transition-colors">
                              <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1"><item.icon /></div>
                                <div className="ml-4">
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    <p className="text-sm font-medium text-gray-900 group-hover:text-brand-maroon leading-tight">{item.name}</p>
                                    {item.badge && (
                                      <span className="text-[9px] font-semibold bg-brand-maroon/10 text-brand-maroon px-1.5 py-0.5">{item.badge}</span>
                                    )}
                                  </div>
                                  <p className="mt-1 text-xs text-gray-500">{item.desc}</p>
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}

                        {/* Glimmora ASCEND — hover to show overlay above */}
                        <li
                          className="col-span-2 relative"
                          onMouseEnter={() => setAscendHover(true)}
                          onMouseLeave={() => setAscendHover(false)}
                        >
                          <div className="group block p-3 -mx-3 hover:bg-gray-50 transition-colors cursor-pointer">
                            <div className="flex items-start">
                              <div className="flex-shrink-0 mt-1"><Icons.Layers /></div>
                              <div className="ml-4 flex-1">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <p className="text-sm font-medium text-gray-900 group-hover:text-brand-maroon leading-tight">Glimmora ASCEND</p>
                                  <span className="text-[9px] font-semibold bg-amber-100 text-amber-700 px-1.5 py-0.5">Training</span>
                                  <svg className={`w-3.5 h-3.5 text-gray-400 ml-auto transition-transform ${ascendHover ? '-rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </div>
                                <p className="mt-1 text-xs text-gray-500">AI-powered training & simulation ecosystem.</p>
                              </div>
                            </div>
                          </div>

                          {/* ASCEND overlay — appears above the item */}
                          <div className={`absolute bottom-full left-0 right-0 mb-1 bg-white shadow-xl border border-gray-100 rounded-lg p-5 z-50 transition-all duration-200 ${ascendHover ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2 pointer-events-none'}`}>
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                              Glimmora ASCEND Platforms
                              <span className="text-[9px] font-semibold bg-amber-100 text-amber-700 px-1.5 py-0.5 normal-case tracking-normal">Training &amp; Simulation</span>
                            </h4>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                              {ascendPlatforms.map((item) => (
                                <Link key={item.path} to={item.path} onClick={() => { setActiveMegaMenu(null); setAscendHover(false) }} className="group flex items-start gap-3 p-2.5 -mx-1 hover:bg-gray-50 transition-colors rounded">
                                  <div className="flex-shrink-0 mt-0.5"><item.icon /></div>
                                  <div>
                                    <p className="text-sm font-medium text-gray-900 group-hover:text-brand-maroon leading-tight">{item.name}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100 bg-gray-50 -mx-8 -mb-8 px-8 py-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">Explore the full Glimmora Intelligence Ecosystem</span>
                    <Link to="/ecosystem" className="text-sm font-semibold text-brand-maroon hover:text-brand-maroon-dark" onClick={() => setActiveMegaMenu(null)}>View Ecosystem &rarr;</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Industries Mega Menu */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => setActiveMegaMenu('industries')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className={`text-sm font-medium transition-colors flex items-center space-x-1 outline-none ${activeMegaMenu === 'industries' ? 'text-brand-maroon' : 'text-gray-700 hover:text-brand-maroon'}`}>
                <Link to="/industries" onClick={() => setActiveMegaMenu(null)}>Industries</Link>
                <svg className={`w-4 h-4 transition-transform duration-200 ${activeMegaMenu === 'industries' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 origin-top transform ${activeMegaMenu === 'industries' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="grid grid-cols-2 gap-8">
                    {industriesMenu.map((column, idx) => (
                      <div key={idx} className="space-y-4">
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{column.title}</h3>
                        <ul className="space-y-3">
                          {column.items.map((item) => (
                            <li key={item.path}>
                              <Link to={item.path} onClick={() => setActiveMegaMenu(null)} className="group block p-3 -mx-3 hover:bg-gray-50 transition-colors">
                                <div className="flex items-start">
                                  <div className="flex-shrink-0 mt-1"><item.icon /></div>
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900 group-hover:text-brand-maroon">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100 bg-gray-50 -mx-8 -mb-8 px-8 py-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">Find the right intelligence layer for your industry</span>
                    <Link to="/industries" className="text-sm font-semibold text-brand-maroon hover:text-brand-maroon-dark" onClick={() => setActiveMegaMenu(null)}>All Industries &rarr;</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Resources Dropdown */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveMegaMenu('resources')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className={`text-sm font-medium transition-colors flex items-center space-x-1 outline-none ${activeMegaMenu === 'resources' ? 'text-brand-maroon' : 'text-gray-700 hover:text-brand-maroon'}`}>
                <span>Resources</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${activeMegaMenu === 'resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full right-0 w-56 bg-white shadow-xl py-2 border border-gray-100 transition-all duration-200 ${activeMegaMenu === 'resources' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                {resources.map((resource) => (
                  <Link
                    key={resource.path}
                    to={resource.path}
                    onClick={() => setActiveMegaMenu(null)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-maroon transition-colors"
                  >
                    <resource.icon />
                    {resource.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* 6. Contact — solid button, sharp corners */}
            <Link
              to="/contact"
              className="btn-primary text-sm px-6 py-2.5"
              style={{ borderRadius: 0 }}
            >
              Contact
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
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

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-24 left-0 w-full bg-white border-t border-gray-100 shadow-xl overflow-y-auto max-h-[calc(100vh-6rem)]">
            <div className="px-4 py-6 space-y-4">

              <Link to="/about" className="block text-lg font-semibold text-gray-900 py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/ecosystem" className="block text-lg font-semibold text-gray-900 py-2" onClick={() => setIsMobileMenuOpen(false)}>Ecosystem</Link>

              {/* Platforms */}
              <div>
                <button onClick={() => toggleMobileExpand('platforms')} className="w-full flex justify-between items-center text-lg font-semibold text-gray-900 py-2">
                  <span>Platforms</span>
                  <svg className={`w-5 h-5 transform transition-transform ${mobileExpanded === 'platforms' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileExpanded === 'platforms' && (
                  <div className="pl-4 space-y-2 mt-2 border-l-2 border-gray-100">
                    {platformsMenu.map((group) =>
                      group.items.map((item) => (
                        <Link key={item.path} to={item.path} className="flex items-center justify-between py-2 text-gray-600 hover:text-brand-maroon text-base" onClick={() => setIsMobileMenuOpen(false)}>
                          <span>{item.name}</span>
                          {item.badge && <span className="text-[10px] font-semibold bg-brand-maroon/10 text-brand-maroon px-2 py-0.5">Soon</span>}
                        </Link>
                      ))
                    )}
                    {/* ASCEND sub-section */}
                    <button onClick={() => setMobileAscendOpen(!mobileAscendOpen)} className="w-full flex justify-between items-center text-base font-semibold text-gray-800 py-2 mt-1">
                      <span className="flex items-center gap-2">Glimmora ASCEND <span className="text-[10px] font-semibold bg-amber-100 text-amber-700 px-2 py-0.5">Training</span></span>
                      <svg className={`w-4 h-4 transform transition-transform ${mobileAscendOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileAscendOpen && (
                      <div className="pl-4 space-y-2 border-l-2 border-amber-200">
                        {ascendPlatforms.map((item) => (
                          <Link key={item.path} to={item.path} className="flex items-center justify-between py-2 text-gray-600 hover:text-brand-maroon text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                            <span>{item.name}</span>
                            <span className="text-[10px] font-semibold bg-amber-100 text-amber-700 px-2 py-0.5">Soon</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Industries */}
              <div>
                <button onClick={() => toggleMobileExpand('industries')} className="w-full flex justify-between items-center text-lg font-semibold text-gray-900 py-2">
                  <span>Industries</span>
                  <svg className={`w-5 h-5 transform transition-transform ${mobileExpanded === 'industries' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileExpanded === 'industries' && (
                  <div className="pl-4 space-y-2 mt-2 border-l-2 border-gray-100">
                    {industriesMenu.map((group) =>
                      group.items.map((item) => (
                        <Link key={item.path} to={item.path} className="block py-2 text-gray-600 hover:text-brand-maroon text-base" onClick={() => setIsMobileMenuOpen(false)}>
                          {item.name}
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>

              {/* Resources */}
              <div>
                <button onClick={() => toggleMobileExpand('resources')} className="w-full flex justify-between items-center text-lg font-semibold text-gray-900 py-2">
                  <span>Resources</span>
                  <svg className={`w-5 h-5 transform transition-transform ${mobileExpanded === 'resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileExpanded === 'resources' && (
                  <div className="pl-4 space-y-2 mt-2 border-l-2 border-gray-100">
                    {resources.map((resource) => (
                      <Link key={resource.path} to={resource.path} className="block py-2 text-gray-600 hover:text-brand-maroon text-base" onClick={() => setIsMobileMenuOpen(false)}>
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4">
                <Link to="/contact" className="btn-primary w-full text-center block" style={{ borderRadius: 0 }} onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
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
