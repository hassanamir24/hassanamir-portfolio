import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { levels } from '../data/content'

/**
 * Compact HUD-style top bar for small screens, expanding into a full
 * level-select overlay.
 */
export default function MobileNav({ activeId, onNavigate }) {
  const [open, setOpen] = useState(false)
  const activeLevel = levels.find((l) => l.id === activeId) ?? levels[0]

  const handleSelect = (id) => {
    setOpen(false)
    onNavigate(id)
  }

  return (
    <div className="lg:hidden">
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 bg-bg/80 backdrop-blur-md border-b border-border/60">
        <div className="font-mono text-[11px] tracking-widest text-muted">
          LEVEL {activeLevel.code} <span className="text-text/80">— {activeLevel.label}</span>
        </div>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open level select"
          aria-expanded={open}
          className="p-2 -mr-2 text-text/80 hover:text-accent transition-colors"
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-bg/97 backdrop-blur-xl flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/60">
              <span className="font-mono text-[11px] tracking-widest text-muted">SELECT LEVEL</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close level select"
                className="p-2 -mr-2 text-text/80 hover:text-accent transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-1">
              {levels.map((level, i) => {
                const isActive = level.id === activeId
                return (
                  <motion.li
                    key={level.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <button
                      onClick={() => handleSelect(level.id)}
                      className={`w-full flex items-center gap-4 py-4 border-b border-border/40 text-left transition-colors ${
                        isActive ? 'text-accent' : 'text-text/90'
                      }`}
                    >
                      <span className="font-mono text-xs text-muted">{level.code}</span>
                      <span className="font-display text-xl">{level.label}</span>
                    </button>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
