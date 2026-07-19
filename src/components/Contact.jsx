import { motion } from 'framer-motion'
import { Mail, FileDown, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import HUDFrame from './HUDFrame'
import ParticleField from './ParticleField'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'
import { contactLinks } from '../data/content'

const icons = { github: GithubIcon, linkedin: LinkedinIcon, email: Mail, resume: FileDown }

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Level 07 — Contact"
      className="relative px-6 py-28 sm:py-36 overflow-hidden"
    >
      <ParticleField density={16} />
      <div className="relative max-w-3xl mx-auto">
        <SectionHeader code="07" label="Contact" title="Final Checkpoint" align="center" />

        <Reveal delay={0.1}>
          <p className="text-center text-muted max-w-lg mx-auto mb-12 text-sm sm:text-base leading-relaxed">
            The level ends here — but the game doesn't. Reach out to collaborate,
            hire, or talk about AI agents.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((link, i) => {
            const Icon = icons[link.id]
            return (
              <Reveal key={link.id} delay={0.15 + i * 0.06}>
                <motion.a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="group block"
                >
                  <HUDFrame
                    active
                    cornerClassName="text-border"
                    className="rounded-md bg-card/60 border border-border/60 p-5 flex items-center gap-4 transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-card-hover/60"
                  >
                    <span className="flex items-center justify-center w-11 h-11 rounded-sm bg-bg-raised border border-border/60 text-accent shrink-0">
                      <Icon size={18} strokeWidth={1.5} />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-mono text-[10px] tracking-widest text-muted">
                        {link.label.toUpperCase()}
                      </span>
                      <span className="block font-display text-sm text-text truncate">
                        {link.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-muted/50 group-hover:text-accent transition-colors duration-300 shrink-0"
                    />
                  </HUDFrame>
                </motion.a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
