// Centralized copy + data for the site. Edit here to update content everywhere.

export const levels = [
  { id: 'home', code: '01', label: 'Home' },
  { id: 'player', code: '02', label: 'Player' },
  { id: 'skills', code: '03', label: 'Skills' },
  { id: 'quests', code: '04', label: 'Quest Log' },
  { id: 'projects', code: '05', label: 'Projects' },
  { id: 'journey', code: '06', label: 'Journey' },
  { id: 'contact', code: '07', label: 'Contact' },
]

export const player = {
  name: 'Hassan Amir',
  title: 'Level 4 Computer Science Student',
  class: 'Aspiring AI Engineer',
  status: 'Learning',
  mission:
    'Building practical software while mastering Machine Learning, LLMs, RAG, and AI Agents.',
}

export const playerInfo = {
  name: 'Hassan Amir',
  class: 'Computer Science Student',
  guild: 'FAST National University',
  currentMission: 'Learning AI Engineering',
  specialization: ['Python', 'Machine Learning', 'Software Development'],
  description:
    "I'm a second-year Computer Science student building a practical foundation in software engineering while actively studying modern AI systems. My coursework spans algorithms, operating systems, and databases, and I've applied it directly — shipping full-stack products, a terminal-based OS simulator in C, and a logic-driven AI agent. Right now I'm deep in a self-directed roadmap through LLMs, LangChain, and Retrieval-Augmented Generation, working toward building reliable AI agents rather than just experimenting with them. I learn by building: understand the concept, write the code myself, and only ask for help when I'm genuinely stuck.",
}

export const stats = [
  { label: 'Python', value: 8 },
  { label: 'Problem Solving', value: 9 },
  { label: 'React', value: 7 },
  { label: 'Machine Learning', value: 6 },
  { label: 'Communication', value: 8 },
  { label: 'Leadership', value: 7 },
]

export const quests = {
  completed: [
    'Python',
    'Object-Oriented Programming',
    'Data Structures',
    'Algorithms',
    'Machine Learning Fundamentals',
    'Neural Networks',
  ],
  current: {
    title: 'Learning AI Engineering',
    items: ['LLMs', 'LangChain', 'RAG', 'AI Agents'],
  },
  future: ['Deployment', 'Fine-Tuning', 'MLOps', 'Evaluation'],
}

export const projects = [
  {
    id: 'flyrank',
    mission: 'FlyRank Internship',
    status: 'Completed',
    reward: 'Machine Learning Experience',
    summary: 'Applied ML concepts in a real internship environment.',
    details:
      'Worked on applied machine learning tasks in a production-adjacent setting, translating coursework into shipped outcomes and learning how ML work is scoped, reviewed, and delivered on a team.',
    tags: ['Machine Learning', 'Internship'],
  },
  {
    id: 'dhobinow',
    mission: 'DhobiNow — Laundry Platform',
    status: 'Completed',
    reward: 'Full-Stack Deployment',
    summary: 'Full-stack laundry management platform, live on Vercel.',
    details:
      'Designed the schema and built triggers and stored procedures in PostgreSQL/Supabase, then shipped a React dashboard on top — covering the full path from data model to a deployed, usable product.',
    tags: ['React', 'PostgreSQL', 'Supabase'],
  },
  {
    id: 'wumpus',
    mission: 'Wumpus World Logic Agent',
    status: 'Completed',
    reward: 'AI Agent Experience',
    summary: 'A logic-driven agent deployed as a stateless serverless app.',
    details:
      'Built a knowledge-based agent that reasons under uncertainty to navigate the Wumpus World, then deployed it with a stateless serverless Flask architecture on Vercel.',
    tags: ['AI Agents', 'Flask', 'Logic'],
  },
  {
    id: 'amigos',
    mission: 'AmigOS — Terminal OS Simulator',
    status: 'Completed',
    reward: 'Systems Programming Depth',
    summary: 'A terminal-based OS simulator in C with real POSIX concepts.',
    details:
      'Implemented fork/exec process control, shared memory, and a multilevel queue scheduler, wrapped in an ncurses GUI — a full-semester systems project run on Ubuntu via WSL2.',
    tags: ['C', 'POSIX', 'Systems'],
  },
  {
    id: 'automation',
    mission: 'Python Automation Toolkit',
    status: 'Completed',
    reward: 'Workflow Efficiency',
    summary: 'Scripts that remove repetitive manual work.',
    details:
      'A set of Python utilities built to automate recurring tasks — from file handling to data cleanup — trading manual repetition for a few reliable lines of code.',
    tags: ['Python', 'Automation'],
  },
  {
    id: 'portfolio',
    mission: 'This Portfolio',
    status: 'In Progress',
    reward: 'Interface Design Practice',
    summary: 'A level-based portfolio built with React and Framer Motion.',
    details:
      'The site you\u2019re on — designed as a menu you progress through rather than a page you scroll past, built with React, Tailwind, and Framer Motion.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
]

export const journey = [
  { year: '2024', label: 'Started Computer Science' },
  { year: '2024', label: 'Learned Python' },
  { year: '2025', label: 'Built Projects' },
  { year: '2025', label: 'Internship' },
  { year: '2026', label: 'Learning AI' },
  { year: 'Next', label: 'Future AI Engineer' },
]

export const contactLinks = [
  { id: 'github', label: 'GitHub', value: 'View source code', href: 'https://github.com/hassanamir24' },
  { id: 'linkedin', label: 'LinkedIn', value: 'Professional profile', href: 'https://www.linkedin.com/in/hassan-amir-/' },
  { id: 'email', label: 'Email', value: 'mohammadhassanamir.sh@gmail.com', href: 'mailto:mohammadhassanamir.sh@gmail.com' },
  { id: 'resume', label: 'Resume', value: 'Download PDF', href: '/resume.pdf' },
]
