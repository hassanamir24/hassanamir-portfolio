import { Flag } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { journey } from '../data/content'

export default function Journey() {
  return (
    <section id="journey" aria-label="Level 06 — Journey" className="relative px-6 py-28 sm:py-36">
      <div className="max-w-2xl mx-auto">
        <SectionHeader code="06" label="Journey" title="Progression Path" align="center" />

        <div className="relative pl-2">
          {/* vertical path line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-border to-accent-2/60" />

          <ol className="flex flex-col gap-10">
            {journey.map((step, i) => (
              <JourneyStep key={`${step.year}-${step.label}`} step={step} index={i} isLast={i === journey.length - 1} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function JourneyStep({ step, index, isLast }) {
  return (
    <Reveal delay={index * 0.08} y={16}>
      <li className="relative flex items-center gap-5">
        <span
          className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border shrink-0 ${
            isLast
              ? 'border-accent-2 bg-accent-2/10 shadow-[0_0_16px_rgba(34,197,94,0.35)]'
              : 'border-accent/50 bg-bg'
          }`}
        >
          {isLast ? (
            <Flag size={13} className="text-accent-2" strokeWidth={1.5} />
          ) : (
            <span className="w-2 h-2 rounded-full bg-accent" />
          )}
        </span>

        <div className="flex items-baseline gap-3 flex-wrap">
          <span className="font-mono text-xs tracking-widest text-muted">
            {step.year}
          </span>
          <span
            className={`font-display text-lg sm:text-xl ${
              isLast ? 'text-accent-2' : 'text-text'
            }`}
          >
            {step.label}
          </span>
        </div>
      </li>
    </Reveal>
  )
}
