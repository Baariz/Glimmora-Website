import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import ScrollToTop from './components/ScrollToTop'
import ChatBot from './components/ChatBot'

// Core Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Privacy from './pages/Privacy'
import TermsOfService from './pages/TermsOfService'
import WhitePaper from './pages/WhitePaper'
import PartnerOnboard from './pages/PartnerOnBoard'

// New Ecosystem Structure
import Ecosystem from './pages/Ecosystem'
import Platforms from './pages/Platforms'
import Industries from './pages/Industries'
import CaseStudies from './pages/CaseStudies'

// Platform Pages
import VerifAI from './pages/platforms/VerifAI'
import HospitalityPlatform from './pages/platforms/HospitalityPlatform'
import CyberPlatform from './pages/platforms/CyberPlatform'
import AegisDefense from './pages/platforms/AegisDefense'
import Reach from './pages/platforms/Reach'
import Elan from './pages/platforms/Elan'
import Moda from './pages/platforms/Moda'
import FilmPlatform from './pages/platforms/FilmPlatform'
import Nidhi from './pages/platforms/Nidhi'
import DesignGlimmora from './pages/platforms/DesignGlimmora'
import GlimmoraTeam from './pages/platforms/GlimmoraTeam'

// Industry Pages
import Enterprise from './pages/industries/Enterprise'
import Defense from './pages/industries/Defense'
import HospitalityIndustry from './pages/industries/HospitalityIndustry'
import Healthcare from './pages/industries/Healthcare'
import TravelLuxury from './pages/industries/TravelLuxury'
import Fashion from './pages/industries/Fashion'
import Cinema from './pages/industries/Cinema'
import PublicSector from './pages/industries/PublicSector'

// Legacy Solution Pages (kept for backward compatibility + detail pages)
import Solutions from './pages/Solutions'
import GRC from './pages/solutions/GRC'
import TPRM from './pages/solutions/TPRM'
import InternalAudit from './pages/solutions/InternalAudit'
import ScanVista from './pages/solutions/ScanVista'
import TaxAutomation from './pages/solutions/TaxAutomation'
import Dynamics365 from './pages/solutions/Dynamics365'
import HumanResource from './pages/solutions/HumanResource'
import Glimmora from './pages/solutions/Glimmora'

// Legacy Service Pages (kept for backward compatibility)
import Services from './pages/Services'
import BusinessProcessConsulting from './pages/services/BusinessProcessConsulting'
import DigitalTransformation from './pages/services/DigitalTransformation'
import DataAnalyticsAI from './pages/services/DataAnalyticsAI'
import ERPConsulting from './pages/services/ERPConsulting'
import CybersecuritySOC from './pages/services/CybersecuritySOC'
import CloudAutomation from './pages/services/CloudAutomation'

// Resources
import Resources from './pages/resources/Resources'
import Blogs from './pages/resources/Blogs'
import BlogPost from './pages/resources/BlogPost'

function App() {
  return (
    <>
      <ChatBot />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Core */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="careers" element={<Careers />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="grc-whitepaper" element={<WhitePaper />} />
          <Route path="partner-on-board" element={<PartnerOnboard />} />

          {/* New Ecosystem Structure */}
          <Route path="ecosystem" element={<Ecosystem />} />
          <Route path="platforms" element={<Platforms />} />
          <Route path="industries" element={<Industries />} />
          <Route path="case-studies" element={<CaseStudies />} />

          {/* Platform Pages */}
          <Route path="platforms/verifai" element={<VerifAI />} />
          <Route path="platforms/scanvista" element={<ScanVista />} />
          <Route path="platforms/hospitality" element={<HospitalityPlatform />} />
          <Route path="platforms/cyber" element={<CyberPlatform />} />
          <Route path="platforms/aegis-defense" element={<AegisDefense />} />
          <Route path="platforms/reach" element={<Reach />} />
          <Route path="platforms/elan" element={<Elan />} />
          <Route path="platforms/moda" element={<Moda />} />
          <Route path="platforms/film" element={<FilmPlatform />} />
          <Route path="platforms/nidhi" element={<Nidhi />} />
          <Route path="platforms/design" element={<DesignGlimmora />} />
          <Route path="platforms/team" element={<GlimmoraTeam />} />

          {/* Industry Pages */}
          <Route path="industries/enterprise" element={<Enterprise />} />
          <Route path="industries/defense" element={<Defense />} />
          <Route path="industries/hospitality" element={<HospitalityIndustry />} />
          <Route path="industries/healthcare" element={<Healthcare />} />
          <Route path="industries/travel-luxury" element={<TravelLuxury />} />
          <Route path="industries/fashion" element={<Fashion />} />
          <Route path="industries/cinema" element={<Cinema />} />
          <Route path="industries/public-sector" element={<PublicSector />} />

          {/* Legacy Solution Pages (preserved for SEO + deep links) */}
          <Route path="solutions" element={<Solutions />} />
          <Route path="solutions/grc" element={<GRC />} />
          <Route path="solutions/tprm" element={<TPRM />} />
          <Route path="solutions/internal-audit" element={<InternalAudit />} />
          <Route path="solutions/scanvista" element={<ScanVista />} />
          <Route path="solutions/tax-automation" element={<TaxAutomation />} />
          <Route path="solutions/dynamics-365" element={<Dynamics365 />} />
          <Route path="solutions/human-resource" element={<HumanResource />} />
          <Route path="solutions/glimmora" element={<Glimmora />} />

          {/* Legacy Service Pages (preserved for SEO + deep links) */}
          <Route path="services" element={<Services />} />
          <Route path="services/business-process-consulting" element={<BusinessProcessConsulting />} />
          <Route path="services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="services/data-analytics-ai" element={<DataAnalyticsAI />} />
          <Route path="services/erp-consulting" element={<ERPConsulting />} />
          <Route path="services/cybersecurity-soc" element={<CybersecuritySOC />} />
          <Route path="services/cloud-automation" element={<CloudAutomation />} />

          {/* Resources */}
          <Route path="resources" element={<Resources />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
