import { Save } from 'lucide-react'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer className="relative px-6 py-12 border-t border-border/50">
      <Reveal className="max-w-3xl mx-auto flex flex-col items-center gap-2 text-center">
        <div className="flex items-center gap-2 text-accent-2">
          <Save size={14} strokeWidth={1.5} />
          <span className="font-mono text-xs tracking-[0.3em]">GAME SAVED</span>
        </div>
        <p className="text-xs text-muted/70">
          Thanks for visiting. &copy; {new Date().getFullYear()} Hassan Amir.
        </p>
      </Reveal>
    </footer>
  )
}
