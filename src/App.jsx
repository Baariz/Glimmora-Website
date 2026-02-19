import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import ScrollToTop from './components/ScrollToTop'
import ChatBot from './components/ChatBot'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Solutions from './pages/Solutions'

// Solution Pages
import GRC from './pages/solutions/GRC'
import TPRM from './pages/solutions/TPRM'
import InternalAudit from './pages/solutions/InternalAudit'
import ScanVista from './pages/solutions/ScanVista'
import TaxAutomation from './pages/solutions/TaxAutomation'
// import RobotAsAService from './pages/solutions/RobotAsAService'
import Dynamics365 from './pages/solutions/Dynamics365'

// Service Pages
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
import HumanResource from './pages/solutions/HumanResource'
import PartnerOnboard from './pages/PartnerOnBoard'

import Privacy from './pages/Privacy'
import TermsOfService from './pages/TermsOfService'
import Services from './pages/Services'
import Glimmora from './pages/solutions/Glimmora'
import WhitePaper from './pages/WhitePaper'
import Careers from './pages/Careers'


function App() {
  return (
    <>
      
      <ChatBot/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="platforms" element={<Solutions />} /> {/* Redirect platforms to solutions */}
          <Route path="services" element={<Services/>} />

          {/* Solutions */}
          <Route path="solutions/grc" element={<GRC />} />
          <Route path="solutions/tprm" element={<TPRM />} />
          <Route path="solutions/internal-audit" element={<InternalAudit />} />
          <Route path="solutions/scanvista" element={<ScanVista />} />
          <Route path="solutions/tax-automation" element={<TaxAutomation />} />
          {/* <Route path="solutions/robot-as-a-service" element={<RobotAsAService />} /> */}
          <Route path="solutions/dynamics-365" element={<Dynamics365 />} />
          <Route path="solutions/human-resource" element={<HumanResource/>} />
          <Route path="solutions/glimmora" element={<Glimmora/>} />

          {/* Services */}
          <Route path="services/business-process-consulting" element={<BusinessProcessConsulting />} />
          <Route path="services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="services/data-analytics-ai" element={<DataAnalyticsAI />} />
          <Route path="services/erp-consulting" element={<ERPConsulting />} />
          <Route path="services/cybersecurity-soc" element={<CybersecuritySOC />} />
          <Route path="services/cloud-automation" element={<CloudAutomation />} />

          {/* Resources */}
          <Route path="resources" element={<Resources />} />
          <Route path="partner-on-board" element={<PartnerOnboard/>} />
          <Route path="privacy" element={<Privacy/>} />
          <Route path="terms" element={<TermsOfService/>} />
          <Route path="careers" element={<Careers/> } />
          <Route path="grc-whitepaper" element={<WhitePaper/>} />
          
          {/* FIX: Removed 'resources/' prefix so '/blogs/...' URLs work */}
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:slug" element={<BlogPost />} />
          
        </Route>
      </Routes>
     </>
  )
}

export default App