import React from 'react'
import { ComingSoonPlatform } from './ComingSoonPlatform'

const PLATFORM = {
  name: 'Nidhi',
  displayName: 'Glimmora Nidhi',
  category: 'Finance & Wealth Platform',
  tagline: 'Financial Intelligence & Wealth Advisory',
  desc: 'Financial intelligence, advisory, and wealth management platform. AI-driven portfolio analysis, risk assessment, and personalized financial advisory at scale for wealth managers, banks, and financial advisors.',
  modules: ['Portfolio Intelligence', 'AI Risk Assessment', 'Financial Advisory Engine', 'Regulatory Compliance', 'Wealth Analytics', 'HNI Intelligence'],
}

export default function Nidhi() {
  return <ComingSoonPlatform platform={PLATFORM} />
}
