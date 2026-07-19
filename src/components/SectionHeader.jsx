import Reveal from './Reveal'

/**
 * Consistent "LEVEL 0X" eyebrow + title treatment used at the top of
 * every section, reinforcing the level-progression conceit.
 */
export default function SectionHeader({ code, label, title, align = 'left' }) {
  const isCenter = align === 'center'
  return (
    <Reveal className={`mb-14 ${isCenter ? 'text-center' : ''}`}>
      <div
        className={`flex items-center gap-3 mb-4 ${isCenter ? 'justify-center' : ''}`}
      >
        <span className="font-mono text-xs tracking-[0.25em] text-accent">
          LEVEL {code}
        </span>
        <span className="h-px w-8 bg-border" />
        <span className="font-mono text-xs tracking-[0.25em] text-muted">
          {label.toUpperCase()}
        </span>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-text">
        {title}
      </h2>
    </Reveal>
  )
}
