import { useMemo } from 'react'

/**
 * Ambient background: slow gradient drift + a scattering of soft glowing
 * points. Pure CSS animation (no per-frame JS) to keep this cheap.
 */
export default function ParticleField({ density = 28 }) {
  const particles = useMemo(() => {
    return Array.from({ length: density }).map((_, i) => {
      const size = Math.random() * 2.2 + 1
      const isAccent = i % 5 === 0
      return {
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size,
        duration: 14 + Math.random() * 16,
        delay: Math.random() * -20,
        color: isAccent ? 'var(--color-accent-2)' : 'var(--color-accent)',
        opacity: Math.random() * 0.4 + 0.15,
      }
    })
  }, [density])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* slow moving gradient wash */}
      <div
        className="absolute -top-1/3 -left-1/4 w-[70%] h-[70%] rounded-full blur-3xl animate-drift-slow"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.10), transparent 70%)' }}
      />
      <div
        className="absolute -bottom-1/3 -right-1/4 w-[60%] h-[60%] rounded-full blur-3xl animate-drift"
        style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.08), transparent 70%)' }}
      />

      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-drift"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
