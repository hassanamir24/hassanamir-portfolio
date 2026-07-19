import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, ChevronRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import HUDFrame from './HUDFrame'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" aria-label="Level 05 — Projects" className="relative px-6 py-28 sm:py-36 bg-bg-raised/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeader code="05" label="Projects" title="Mission Board" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.08}>
              <MissionCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function MissionCard({ project }) {
  const [hovered, setHovered] = useState(false)
  const isCompleted = project.status === 'Completed'

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <HUDFrame
        active={hovered}
        className={`h-full rounded-md bg-card/60 border border-border/60 p-6 flex flex-col transition-shadow duration-300 ${
          hovered ? 'shadow-[0_0_36px_rgba(59,130,246,0.14)] border-accent/40' : ''
        }`}
      >
        <div className="flex items-start justify-between mb-4">
          <span className="font-mono text-[10px] tracking-widest text-muted">MISSION</span>
          <StatusPill status={project.status} />
        </div>

        <h3 className="font-display text-lg text-text mb-2 leading-snug">
          {project.mission}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-wide text-muted/80 border border-border/60 rounded-sm px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.div
          initial={false}
          animate={{ height: hovered ? 'auto' : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="text-xs leading-relaxed text-muted/90 pt-1 pb-3 border-t border-border/50 mt-1">
            {project.details}
          </p>
        </motion.div>

        {isCompleted && (
          <div className="mt-auto pt-3 flex items-center gap-2 border-t border-border/50">
            <Award size={13} className="text-accent-2 shrink-0" strokeWidth={1.5} />
            <span className="font-mono text-[10px] tracking-widest text-accent-2">
              REWARD: {project.reward.toUpperCase()}
            </span>
          </div>
        )}

        <div className="mt-3 flex items-center gap-1 font-mono text-[10px] tracking-widest text-muted/60">
          <ChevronRight size={12} className={`transition-transform duration-300 ${hovered ? 'translate-x-1 text-accent' : ''}`} />
          {hovered ? 'MISSION DETAILS' : 'HOVER FOR DETAILS'}
        </div>
      </HUDFrame>
    </motion.div>
  )
}

function StatusPill({ status }) {
  const isCompleted = status === 'Completed'
  return (
    <span
      className={`flex items-center gap-1.5 font-mono text-[10px] tracking-widest rounded-full px-2.5 py-1 border ${
        isCompleted
          ? 'text-accent-2 border-accent-2/30 bg-accent-2/5'
          : 'text-accent border-accent/30 bg-accent/5'
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isCompleted ? 'bg-accent-2' : 'bg-accent animate-pulse-soft'
        }`}
      />
      {status.toUpperCase()}
    </span>
  )
}
