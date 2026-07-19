/**
 * Signature visual motif: thin corner brackets that frame key surfaces,
 * echoing a game menu / targeting reticle without leaning on neon or pixel art.
 */
export default function HUDFrame({
  children,
  className = '',
  cornerClassName = 'text-border',
  size = 14,
  active = false,
}) {
  const stroke = active ? 'text-accent' : cornerClassName
  return (
    <div className={`relative ${className}`}>
      <Corner pos="top-left" size={size} className={stroke} />
      <Corner pos="top-right" size={size} className={stroke} />
      <Corner pos="bottom-left" size={size} className={stroke} />
      <Corner pos="bottom-right" size={size} className={stroke} />
      {children}
    </div>
  )
}

function Corner({ pos, size, className }) {
  const positions = {
    'top-left': 'top-0 left-0 border-t border-l',
    'top-right': 'top-0 right-0 border-t border-r',
    'bottom-left': 'bottom-0 left-0 border-b border-l',
    'bottom-right': 'bottom-0 right-0 border-b border-r',
  }
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute ${positions[pos]} ${className} transition-colors duration-500`}
      style={{ width: size, height: size }}
    />
  )
}
