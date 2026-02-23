import React from 'react'
import { ComingSoonPlatform } from './ComingSoonPlatform'

const PLATFORM = {
  name: 'Film',
  displayName: 'Glimmora Film',
  category: 'Cinema & Entertainment Platform',
  tagline: 'Cinema & Entertainment Intelligence',
  desc: 'Content intelligence platform for cinema and entertainment organizations. Audience analytics, box office prediction, distribution AI, and production intelligence for studios, distributors, and cinema chains.',
  modules: ['Audience Intelligence', 'Content Analytics', 'Box Office Prediction', 'Distribution AI', 'Production Intelligence', 'OTT Strategy Engine'],
}

export default function FilmPlatform() {
  return <ComingSoonPlatform platform={PLATFORM} />
}
