import { motion } from 'framer-motion'
import { levels } from '../data/content'

/**
 * Desktop navigation styled as a game level-select rail. A vertical line
 * acts as a progress spine; the active level's node glows and expands.
 */
export default function LevelRail({ activeId, onNavigate }) {
  const activeIndex = levels.findIndex((l) => l.id === activeId)
  const progress =
    levels.length > 1 ? activeIndex / (levels.length - 1) : 0

  return (
    <nav
      aria-label="Level navigation"
      className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-start"
    >
      <div className="relative pl-6">
        {/* spine track */}
        <div className="absolute left-0 top-1 bottom-1 w-px bg-border" />
        {/* spine fill (progress) */}
        <motion.div
          className="absolute left-0 top-1 w-px bg-accent origin-top"
          style={{ height: '100%' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: progress }}
          transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        />

        <ul className="flex flex-col gap-7">
          {levels.map((level, i) => {
            const isActive = level.id === activeId
            const isPast = i < activeIndex
            return (
              <li key={level.id} className="relative -ml-6 pl-6">
                <span
                  aria-hidden="true"
                  className={`absolute left-[-3px] top-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-2 h-2 bg-accent shadow-[0_0_10px_var(--color-accent)]'
                      : isPast
                      ? 'w-1.5 h-1.5 bg-accent-2/70'
                      : 'w-1.5 h-1.5 bg-border'
                  }`}
                />
                <button
                  onClick={() => onNavigate(level.id)}
                  className="group flex items-baseline gap-2 text-left"
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span
                    className={`font-mono text-[10px] tracking-widest transition-colors duration-300 ${
                      isActive ? 'text-accent' : 'text-muted/50 group-hover:text-muted'
                    }`}
                  >
                    {level.code}
                  </span>
                  <span
                    className={`font-display text-sm transition-all duration-300 ${
                      isActive
                        ? 'text-text opacity-100'
                        : 'text-muted opacity-0 -translate-x-1 group-hover:opacity-70 group-hover:translate-x-0'
                    }`}
                  >
                    {level.label}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
