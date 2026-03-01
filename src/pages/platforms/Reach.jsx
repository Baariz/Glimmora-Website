import React from 'react'
import { ComingSoonPlatform } from './ComingSoonPlatform'

const PLATFORM = {
  name: 'Reach',
  displayName: 'Glimmora Reach',
  category: 'Enterprise Intelligence Platform',
  tagline: 'Multi-Channel Enterprise Intelligence & Outreach',
  desc: 'AI-powered enterprise intelligence and outreach platform. Combining market intelligence, predictive analytics, and AI-driven engagement to accelerate enterprise growth and market expansion at scale.',
  modules: ['Market Intelligence', 'AI Outreach Engine', 'CRM Intelligence', 'Predictive Analytics', 'Campaign Intelligence', 'Brand Reach Analytics'],
  target: 'CMOs, Sales Leaders, Business Development Teams',
  showDemo: true,
}

export default function Reach() {
  return <ComingSoonPlatform platform={PLATFORM} />
}
