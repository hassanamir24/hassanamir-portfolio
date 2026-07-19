# Hassan Amir — Player Profile

A premium, minimalist, game-inspired personal portfolio. Built as a single
scrolling "level select" experience rather than a traditional set of page
sections.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion
- lucide-react

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  data/content.js        ← all copy and data lives here — edit this first
  hooks/useActiveSection.js
  components/
    Hero.jsx              LEVEL 01 — Home
    Player.jsx             LEVEL 02 — Player
    Stats.jsx               LEVEL 03 — Skills
    QuestLog.jsx             LEVEL 04 — Quest Log
    Projects.jsx              LEVEL 05 — Projects
    Journey.jsx                LEVEL 06 — Journey
    Contact.jsx                LEVEL 07 — Contact
    Footer.jsx
    LevelRail.jsx           desktop side navigation
    MobileNav.jsx           mobile overlay navigation
    HUDFrame.jsx            signature corner-bracket motif
    ParticleField.jsx       ambient background
    Reveal.jsx              shared scroll-reveal wrapper
    SectionHeader.jsx       "LEVEL 0X" heading pattern
    BootScreen.jsx          brief load-in animation
    icons/BrandIcons.jsx    GitHub / LinkedIn glyphs (drawn to match lucide's style)
```



## Design notes

- Color tokens, fonts, and animation keyframes are defined once in
  `src/index.css` under `@theme`, matching the brief's palette exactly
  (background `#09090B`, cards `#111827`, accent `#3B82F6`, secondary accent
  `#22C55E`).
- Typography: Space Grotesk for display headings, Inter for body copy,
  JetBrains Mono for HUD-style labels (level numbers, stats, status tags) —
  this is what gives the terminal/menu feel without pixel art or neon.
- The signature visual motif is the thin corner-bracket frame (`HUDFrame`)
  used on the hero, cards, and contact tiles, plus the level-progress rail
  on the left of desktop — a quiet nod to menu/HUD design without leaning on
  loud color or game clichés.
- Respects `prefers-reduced-motion` globally.
- No unused dependencies; only the four libraries requested.
