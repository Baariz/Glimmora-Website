import { ComingSoonPlatform } from './ComingSoonPlatform'

const PLATFORM = {
  name: 'ASCEND Aero',
  displayName: 'Glimmora ASCEND Aero',
  category: 'Aviation & Aerospace Training',
  tagline: 'Flight Simulation & Aviation Safety Intelligence',
  desc: 'Flight simulation, aviation safety training, and aerospace workforce readiness platform. AI-powered scenario generation for pilot training, crew resource management, and maintenance procedures.',
  modules: ['Flight Simulation Engine', 'Crew Resource Management', 'Aviation Safety Training', 'Maintenance Procedure Sim', 'Performance Analytics', 'Regulatory Compliance Training'],
  target: 'Airlines, Aviation Academies, Aerospace Organizations',
}

export default function AscendAero() {
  return <ComingSoonPlatform platform={PLATFORM} />
}
