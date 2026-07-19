import { motion } from 'framer-motion'
import { ChevronDown, Terminal } from 'lucide-react'
import ParticleField from './ParticleField'
import HUDFrame from './HUDFrame'
import { player } from '../data/content'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero({ onStart }) {
  return (
    <section
      id="home"
      aria-label="Level 01 — Home"
      className="relative min-h-screen flex items-center justify-center px-6 bg-grid"
    >
      <ParticleField density={26} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-2xl"
      >
        <HUDFrame className="px-8 py-12 sm:px-14 sm:py-16" size={18}>
          <motion.div variants={item} className="flex items-center justify-center gap-2 mb-8">
            <Terminal size={14} className="text-accent-2" strokeWidth={1.5} />
            <span className="font-mono text-[11px] tracking-[0.3em] text-accent-2">
              PLAYER
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-center text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-glow"
          >
            {player.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-center font-mono text-xs sm:text-sm tracking-widest text-muted uppercase"
          >
            {player.title}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 grid grid-cols-2 gap-4 max-w-sm mx-auto"
          >
            <Stat label="Class" value={player.class} />
            <Stat label="Status" value={player.status} isStatus />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-10 text-center text-sm sm:text-base leading-relaxed text-muted max-w-md mx-auto"
          >
            <span className="text-text/70 font-mono text-[10px] tracking-widest block mb-2">
              MISSION
            </span>
            {player.mission}
          </motion.p>

          <motion.div variants={item} className="mt-12 flex justify-center">
            <button
              onClick={onStart}
              className="group relative inline-flex items-center gap-2 rounded-sm border border-accent/50 bg-accent/10 px-8 py-3 font-mono text-xs tracking-[0.25em] text-accent transition-all duration-300 hover:bg-accent/20 hover:border-accent hover:shadow-[0_0_28px_rgba(59,130,246,0.35)] focus-visible:outline-none"
            >
              START
              <ChevronDown
                size={14}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-y-0.5 animate-pulse-soft"
              />
            </button>
          </motion.div>
        </HUDFrame>
      </motion.div>
    </section>
  )
}

function Stat({ label, value, isStatus }) {
  return (
    <div className="rounded-sm border border-border/60 bg-card/40 px-4 py-3 text-center">
      <div className="font-mono text-[9px] tracking-widest text-muted mb-1">
        {label.toUpperCase()}
      </div>
      <div
        className={`font-display text-sm ${
          isStatus ? 'text-accent-2' : 'text-text'
        } flex items-center justify-center gap-1.5`}
      >
        {isStatus && (
          <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-pulse-soft" />
        )}
        {value}
      </div>
    </div>
  )
}
