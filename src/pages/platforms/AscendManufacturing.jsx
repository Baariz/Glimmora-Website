import { ComingSoonPlatform } from './ComingSoonPlatform'

const PLATFORM = {
  name: 'ASCEND Manufacturing',
  displayName: 'Glimmora ASCEND Manufacturing',
  category: 'Industrial Training & Safety',
  tagline: 'Factory Floor Simulation & Safety Intelligence',
  desc: 'Factory floor simulation, safety training, and manufacturing workforce development. AI-powered scenarios for assembly line operations, hazard response, and quality control procedures.',
  modules: ['Factory Simulation Engine', 'Safety Protocol Training', 'Quality Control Sim', 'Hazard Response Training', 'Equipment Operation Sim', 'Workforce Analytics'],
  target: 'Manufacturing Plants, Industrial Training Centers, Safety Organizations',
}

export default function AscendManufacturing() {
  return <ComingSoonPlatform platform={PLATFORM} />
}
