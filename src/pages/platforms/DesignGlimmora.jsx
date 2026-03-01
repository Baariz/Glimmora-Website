import React from 'react'
import { ComingSoonPlatform } from './ComingSoonPlatform'

const PLATFORM = {
  name: 'Design',
  displayName: 'Design Glimmora',
  category: 'Architecture & Interior Design',
  tagline: 'AI-Powered Design Intelligence',
  desc: 'The operating system for architecture and interior design. Design Glimmora thinks like an experienced architect — taking rough ideas and transforming them into build-ready designs with Vastu compliance, safety checks, 3D previews, cost estimation, and site execution control.',
  modules: ['AI Design Generator', 'Vastu Compliance Engine', '3D Preview & Visualization', 'Cost Estimation AI', 'Construction Site Control', 'Client Presentation Module'],
  target: 'Architects, Interior Designers, Real Estate Developers, Construction Firms',
  showDemo: true,
}

export default function DesignGlimmora() {
  return <ComingSoonPlatform platform={PLATFORM} />
}
