import React from 'react'
import { ComingSoonPlatform } from './ComingSoonPlatform'

const PLATFORM = {
  name: 'Team',
  displayName: 'GlimmoraTeam™',
  category: 'Workforce Intelligence Platform',
  tagline: 'SOW to Governed Project Execution via AGI',
  desc: 'GlimmoraTeam™ converts a Scope of Work into a fully governed project execution flow. An AGI layer automatically breaks the SOW into modules, tasks, and micro-roles — then assembles the right team from verified students, professionals, and educated homemakers based on skills, not resumes. Every task is atomic, evidence-backed, and paid on validated outcomes. Not a freelancing platform — an enterprise-grade project operating system.',
  modules: ['SOW Intelligence Engine', 'AGI Team Formation', 'Autonomous Project Governor (APG)', 'Atomic Task Engine', 'Proof-of-Delivery Ledger', 'Embedded Learning Layer'],
  target: 'Enterprises, Project Managers, Businesses needing governed execution',
}

export default function GlimmoraTeam() {
  return <ComingSoonPlatform platform={PLATFORM} />
}
