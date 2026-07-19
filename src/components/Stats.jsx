import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { stats } from '../data/content'

const MAX = 10

export default function Stats() {
  return (
    <section id="skills" aria-label="Level 03 — Skills" className="relative px-6 py-28 sm:py-36 bg-bg-raised/40">
      <div className="max-w-3xl mx-auto">
        <SectionHeader code="03" label="Skills" title="Character Stats" />

        <div className="flex flex-col gap-7">
          {stats.map((stat, i) => (
            <StatBar key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatBar({ stat, index }) {
  const pct = (stat.value / MAX) * 100
  return (
    <Reveal delay={index * 0.06}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-display text-sm sm:text-base text-text">{stat.label}</span>
        <span className="font-mono text-xs text-muted">{stat.value}/{MAX}</span>
      </div>
      <div
        className="relative h-2 rounded-full bg-border/60 overflow-hidden"
        role="progressbar"
        aria-label={stat.label}
        aria-valuenow={stat.value}
        aria-valuemin={0}
        aria-valuemax={MAX}
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent to-accent-2"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.06 + 0.15, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </Reveal>
  )
}
