import React from 'react'
import { ComingSoonPlatform } from './ComingSoonPlatform'

const PLATFORM = {
  name: 'Moda',
  displayName: 'Glimmora Moda',
  category: 'Fashion & Retail Platform',
  tagline: 'Fashion & Retail Intelligence Ecosystem',
  desc: 'AI-native fashion and retail intelligence platform. Trend forecasting, inventory optimization, and customer analytics purpose-built for fashion brands, retail groups, and department stores.',
  modules: ['Trend Forecasting AI', 'Inventory Intelligence', 'Customer Analytics', 'Retail Operations AI', 'Brand Intelligence', 'Sell-Through Optimization'],
}

export default function Moda() {
  return <ComingSoonPlatform platform={PLATFORM} />
}
