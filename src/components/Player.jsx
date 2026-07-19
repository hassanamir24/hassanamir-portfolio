import { motion } from 'framer-motion'
import { User, ShieldCheck, Building2, Target, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import HUDFrame from './HUDFrame'
import { playerInfo } from '../data/content'

const rows = [
  { icon: User, label: 'Name', value: playerInfo.name },
  { icon: ShieldCheck, label: 'Class', value: playerInfo.class },
  { icon: Building2, label: 'Guild', value: playerInfo.guild },
  { icon: Target, label: 'Current Mission', value: playerInfo.currentMission },
]

export default function Player() {
  return (
    <section id="player" aria-label="Level 02 — Player" className="relative px-6 py-28 sm:py-36">
      <div className="max-w-5xl mx-auto">
        <SectionHeader code="02" label="Player" title="Player Info" />

        <div className="grid md:grid-cols-5 gap-6">
          <Reveal delay={0.05} className="md:col-span-2">
            <HUDFrame className="h-full rounded-md bg-card/60 border border-border/60 p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-muted">
                  SPECIALIZATION
                </span>
                <div className="mt-4 flex flex-col gap-3">
                  {playerInfo.specialization.map((spec, i) => (
                    <motion.div
                      key={spec}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                      className="flex items-center gap-3 rounded-sm border border-border/50 bg-bg-raised/60 px-4 py-3"
                    >
                      <Sparkles size={14} className="text-accent-2 shrink-0" strokeWidth={1.5} />
                      <span className="font-display text-sm text-text">{spec}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </HUDFrame>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-3">
            <HUDFrame className="h-full rounded-md bg-card/60 border border-border/60 p-8">
              <dl className="grid sm:grid-cols-2 gap-6 mb-8">
                {rows.map(({ icon: Icon, label, value }) => (
                  <div key={label}>
                    <dt className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-muted mb-1.5">
                      <Icon size={12} strokeWidth={1.5} className="text-accent" />
                      {label.toUpperCase()}
                    </dt>
                    <dd className="font-display text-lg text-text">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="pt-6 border-t border-border/50">
                <span className="font-mono text-[10px] tracking-widest text-muted">
                  DESCRIPTION
                </span>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
                  {playerInfo.description}
                </p>
              </div>
            </HUDFrame>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
