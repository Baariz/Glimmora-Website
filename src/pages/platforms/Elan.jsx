import React from 'react'
import { ComingSoonPlatform } from './ComingSoonPlatform'

const PLATFORM = {
  name: 'Elan',
  displayName: 'Glimmora Elan',
  category: 'Travel & Luxury Platform',
  tagline: 'Premium Travel & Luxury Intelligence',
  desc: 'Luxury travel intelligence ecosystem designed for premium travel brands, destination management organizations, and high-end resorts. AI-powered experience personalization and premium distribution intelligence.',
  modules: ['Luxury Analytics', 'AI Concierge Layer', 'Booking Intelligence', 'Experience Personalization', 'Premium Distribution', 'Destination Intelligence'],
}

export default function Elan() {
  return <ComingSoonPlatform platform={PLATFORM} />
}
