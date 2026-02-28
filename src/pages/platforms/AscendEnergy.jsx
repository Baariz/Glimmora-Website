import { ComingSoonPlatform } from './ComingSoonPlatform'

const PLATFORM = {
  name: 'ASCEND Energy',
  displayName: 'Glimmora ASCEND Energy',
  category: 'Energy Sector Training',
  tagline: 'Energy Operations Simulation & Safety Training',
  desc: 'Oil & gas, renewable energy, and utilities training simulation platform. AI-powered scenarios for drilling operations, plant safety, grid management, and emergency response.',
  modules: ['Drilling Simulation', 'Plant Safety Training', 'Grid Management Sim', 'Emergency Response AI', 'Environmental Compliance', 'Workforce Certification'],
  target: 'Oil & Gas Companies, Utilities, Renewable Energy Firms',
}

export default function AscendEnergy() {
  return <ComingSoonPlatform platform={PLATFORM} />
}
