import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Brief boot sequence shown once on load — a small, purposeful loading
 * animation rather than a generic spinner, reinforcing the "entering a
 * game" framing without delaying the visitor long.
 */
export default function BootScreen({ onDone }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-bg flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="w-10 h-10 border border-accent/40 rounded-sm relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
            >
              <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-accent" />
              <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-accent-2" />
            </motion.div>
            <motion.span
              className="font-mono text-[11px] tracking-[0.3em] text-muted"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              LOADING WORLD
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
