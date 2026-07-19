import { useCallback, useState } from 'react'
import BootScreen from './components/BootScreen'
import LevelRail from './components/LevelRail'
import MobileNav from './components/MobileNav'
import Hero from './components/Hero'
import Player from './components/Player'
import Stats from './components/Stats'
import QuestLog from './components/QuestLog'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useActiveSection from './hooks/useActiveSection'
import { levels } from './data/content'

const sectionIds = levels.map((l) => l.id)

export default function App() {
  const [, setBooted] = useState(false)
  const activeId = useActiveSection(sectionIds)

  const navigate = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const scrollToPlayer = useCallback(() => navigate('player'), [navigate])

  return (
    <>
      <BootScreen onDone={() => setBooted(true)} />

      <a
        href="#player"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:bg-accent focus:text-bg focus:px-4 focus:py-2 focus:rounded-sm font-mono text-xs"
      >
        Skip to content
      </a>

      <MobileNav activeId={activeId} onNavigate={navigate} />
      <LevelRail activeId={activeId} onNavigate={navigate} />

      <main className="pt-14 lg:pt-0">
        <Hero onStart={scrollToPlayer} />
        <Player />
        <Stats />
        <QuestLog />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
