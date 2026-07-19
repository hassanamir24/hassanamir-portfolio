import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, Lock } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import HUDFrame from './HUDFrame'
import { quests } from '../data/content'

export default function QuestLog() {
  return (
    <section id="quests" aria-label="Level 04 — Quest Log" className="relative px-6 py-28 sm:py-36">
      <div className="max-w-5xl mx-auto">
        <SectionHeader code="04" label="Quest Log" title="Quest Log" />

        <div className="grid md:grid-cols-3 gap-6">
          <QuestColumn
            title="Completed Quests"
            icon={CheckCircle2}
            iconColor="text-accent-2"
            accent="border-accent-2/30"
            delay={0}
          >
            <ul className="flex flex-col gap-3">
              {quests.completed.map((q, i) => (
                <QuestItem key={q} delay={i * 0.05}>
                  <CheckCircle2 size={14} className="text-accent-2 shrink-0" strokeWidth={1.5} />
                  <span className="text-text/90">{q}</span>
                </QuestItem>
              ))}
            </ul>
          </QuestColumn>

          <QuestColumn
            title="Current Quest"
            icon={Loader2}
            iconColor="text-accent"
            accent="border-accent/40"
            delay={0.1}
            active
          >
            <p className="font-display text-base text-text mb-4">{quests.current.title}</p>
            <ul className="flex flex-col gap-3">
              {quests.current.items.map((q, i) => (
                <QuestItem key={q} delay={i * 0.05}>
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                  </span>
                  <span className="text-text">{q}</span>
                </QuestItem>
              ))}
            </ul>
          </QuestColumn>

          <QuestColumn
            title="Future Quests"
            icon={Lock}
            iconColor="text-muted"
            accent="border-border"
            delay={0.2}
          >
            <ul className="flex flex-col gap-3">
              {quests.future.map((q, i) => (
                <QuestItem key={q} delay={i * 0.05}>
                  <Lock size={13} className="text-muted/60 shrink-0" strokeWidth={1.5} />
                  <span className="text-muted">{q}</span>
                </QuestItem>
              ))}
            </ul>
          </QuestColumn>
        </div>
      </div>
    </section>
  )
}

function QuestColumn({ title, icon: Icon, iconColor, accent, delay, active, children }) {
  return (
    <Reveal delay={delay}>
      <HUDFrame
        className={`h-full rounded-md bg-card/60 border p-6 ${accent} ${
          active ? 'shadow-[0_0_30px_rgba(59,130,246,0.08)]' : ''
        }`}
      >
        <div className="flex items-center gap-2 mb-5">
          <Icon size={15} className={iconColor} strokeWidth={1.5} />
          <h3 className="font-mono text-[11px] tracking-widest text-muted">
            {title.toUpperCase()}
          </h3>
        </div>
        {children}
      </HUDFrame>
    </Reveal>
  )
}

function QuestItem({ children, delay }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-center gap-2.5 text-sm"
    >
      {children}
    </motion.li>
  )
}
