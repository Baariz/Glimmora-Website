// Image utility for enterprise-relevant placeholder images
// Uses Unsplash API for high-quality, relevant stock photos

const UNSPLASH_BASE = 'https://images.unsplash.com/photo-'

export const images = {
  // GRC & Compliance
  governance: `${UNSPLASH_BASE}1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop`,
  riskManagement: `${UNSPLASH_BASE}1460925895917-afdab827c52f?w=1200&auto=format&fit=crop`,
  compliance: `${UNSPLASH_BASE}1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop`,
  audit: `${UNSPLASH_BASE}1434626881859-1efd5a6fda02?w=1200&auto=format&fit=crop`,

  // Technology & Data
  dataAnalytics: `${UNSPLASH_BASE}1551288049-1bf02ee1f9b0?w=1200&auto=format&fit=crop`,
  aiTechnology: `${UNSPLASH_BASE}1677442136019-21780ecad995?w=1200&auto=format&fit=crop`,
  dashboard: `${UNSPLASH_BASE}1551288049-1bf02ee1f9b0?w=1200&auto=format&fit=crop`,
  cloudComputing: `${UNSPLASH_BASE}1451187580459-43490279c0fa?w=1200&auto=format&fit=crop`,

  // Security
  cybersecurity: `${UNSPLASH_BASE}1550751827-4bd374c3f58b?w=1200&auto=format&fit=crop`,
  security: `${UNSPLASH_BASE}1563986768609-322da13575f3?w=1200&auto=format&fit=crop`,
  network: `${UNSPLASH_BASE}1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop`,

  // Business & Enterprise
  businessMeeting: `${UNSPLASH_BASE}1552664730-d307ca884978?w=1200&auto=format&fit=crop`,
  office: `${UNSPLASH_BASE}1497366216548-37526070297e?w=1200&auto=format&fit=crop`,
  corporate: `${UNSPLASH_BASE}1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop`,
  teamwork: `${UNSPLASH_BASE}1522071820081-009f0129c71c?w=1200&auto=format&fit=crop`,

  // Digital Transformation
  automation: `${UNSPLASH_BASE}1518186285589-2f7649de83e0?w=1200&auto=format&fit=crop`,
  robotics: `${UNSPLASH_BASE}1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop`,
  innovation: `${UNSPLASH_BASE}1519389950473-47ba0277781c?w=1200&auto=format&fit=crop`,

  // Finance & Tax
  finance: `${UNSPLASH_BASE}1579621970563-ebec7560ff3e?w=1200&auto=format&fit=crop`,
  accounting: `${UNSPLASH_BASE}1554224154-26032ffc0d07?w=1200&auto=format&fit=crop`,

  // Abstract & Backgrounds
  abstract1: `${UNSPLASH_BASE}1557683316-973673baf926?w=1200&auto=format&fit=crop`,
  abstract2: `${UNSPLASH_BASE}1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop`,
  gradient: `${UNSPLASH_BASE}1557683311-eac922347aa1?w=1200&auto=format&fit=crop`,
}

// Helper function to get image with specific dimensions
export const getImage = (imageName, width = 1200, height = 800) => {
  const baseImage = images[imageName] || images.abstract1
  return `${baseImage}&w=${width}&h=${height}`
}

// Alternative: Using placeholder.com for simple colored backgrounds
export const getPlaceholder = (width = 1200, height = 800, color = '760015', textColor = 'FFFFFF', text = '') => {
  return `https://via.placeholder.com/${width}x${height}/${color}/${textColor}?text=${encodeURIComponent(text)}`
}

// For blog images
export const blogImages = {
  grc: `${UNSPLASH_BASE}1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop`,
  tprm: `${UNSPLASH_BASE}1522071820081-009f0129c71c?w=800&auto=format&fit=crop`,
  audit: `${UNSPLASH_BASE}1434626881859-1efd5a6fda02?w=800&auto=format&fit=crop`,
  automation: `${UNSPLASH_BASE}1518186285589-2f7649de83e0?w=800&auto=format&fit=crop`,
  security: `${UNSPLASH_BASE}1550751827-4bd374c3f58b?w=800&auto=format&fit=crop`,
  tax: `${UNSPLASH_BASE}1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop`,
}
