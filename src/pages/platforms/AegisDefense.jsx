import React from 'react'
import { ComingSoonPlatform } from './ComingSoonPlatform'

const PLATFORM = {
  name: 'AEGIS Defense',
  displayName: 'Glimmora AEGIS',
  category: 'Defense & Military Platform',
  tagline: 'Tactical Intelligence for National Security',
  desc: 'AI-powered defense training, war simulation, and tactical intelligence platform engineered for national security readiness. Multi-force digital twin capabilities with classified deployment options for Army, Navy, and Air Force.',
  modules: ['3D Training Engine', 'War Simulation AI', 'Tactical Intelligence Layer', 'Multi-Force Digital Twin', 'Instructor Command Dashboard', 'Classified Deployment'],
}

export default function AegisDefense() {
  return <ComingSoonPlatform platform={PLATFORM} />
}
