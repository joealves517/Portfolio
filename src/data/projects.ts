export interface Project {
  id: string;
  title: string;
  type: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  architectureHighlights: string[];
  metrics: { label: string; value: string }[];
  links: { label: string; url: string; icon: string }[];
  image?: string;
  iconImage?: string;
  screenshots?: string[];
  gradientFrom?: string;
  gradientTo?: string;
}

export const projects: Project[] = [
  {
    id: 'gnote',
    title: 'G-Note',
    type: 'PWA + Chrome Extension',
    tagline: 'Free note-taking app with Google Drive sync and real-time collaboration',
    description: 'A modern, offline-first note-taking application featuring rich text editing, Google Drive synchronization, real-time P2P collaboration, and AI-powered writing assistance. Built as a PWA with companion Chrome Extension.',
    features: [
      'Offline-First PWA', 'Google Drive Sync', 'Real-time Collaboration (WebRTC + Yjs)',
      'AI Writing Assistant (Gemini)', 'Rich Text Editor (TipTap)', '19 Languages Support', 'Chrome Extension'
    ],
    techStack: [
      'React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand',
      'TipTap', 'Yjs', 'Dexie', 'Node.js', 'Express', 'Firestore', 'Vertex AI', 'WebRTC'
    ],
    architectureHighlights: [
      'CRDT-based conflict-free editing', 'Tombstone pattern for sync',
      'Service Worker caching strategies', 'P2P signaling server'
    ],
    metrics: [
      { label: 'Lines of Code', value: '25,000+' },
      { label: 'React Components', value: '50+' },
      { label: 'Languages', value: '19' }
    ],
    links: [
      { label: 'Web App', url: 'https://gnote.graphosai.com', icon: 'ExternalLink' },
      { label: 'Chrome Extension', url: 'https://chromewebstore.google.com/detail/pncgcnggbbbgnhdniigjndekfmmblioj', icon: 'Chrome' }
    ],
    iconImage: 'icons/G-Note.png',
    screenshots: [
      'G-Note image/unnamed.png',
      'G-Note image/unnamed (1).png',
      'G-Note image/unnamed (2).png',
      'G-Note image/unnamed (3).png',
      'G-Note image/unnamed (4).png'
    ],
    gradientFrom: 'from-emerald-500/30',
    gradientTo: 'to-teal-600/20'
  },
  {
    id: 'graphos-ai-studio',
    title: 'Graphos AI Studio',
    type: 'Chrome Extension + Web App',
    tagline: 'AI content detection and humanization platform',
    description: 'A comprehensive platform for detecting AI-generated content and rewriting text to sound more natural. Features voice profile matching, multi-language support, and a complete admin dashboard for user management.',
    features: [
      'AI Content Detection', 'Content Humanization', 'Voice Profile System',
      'Rich Text Editor', 'Credit-based Payments', 'Admin Dashboard'
    ],
    techStack: [
      'React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand',
      'TanStack Query', 'TipTap', 'i18next', 'Node.js', 'Express',
      'Firestore', 'Redis', 'BullMQ', 'Vertex AI', 'LemonSqueezy'
    ],
    architectureHighlights: [
      'Circuit breaker pattern for AI calls', 'Multi-layer caching (Redis + LRU)',
      'Background job processing', 'Token refresh with single-flight pattern'
    ],
    metrics: [
      { label: 'Lines of Code', value: '60,000+' },
      { label: 'React Components', value: '150+' },
      { label: 'API Endpoints', value: '40+' }
    ],
    links: [
      { label: 'Website', url: 'https://graphosai.com', icon: 'ExternalLink' },
      { label: 'Web App', url: 'https://app.graphosai.com', icon: 'ExternalLink' },
      { label: 'Chrome Extension', url: 'https://chromewebstore.google.com/detail/nedkeccobejcenjdkegndfejblbjplol', icon: 'Chrome' }
    ],
    iconImage: 'icons/GraphosAI.png',
    screenshots: [
      'GraphosAI image/unnamed.png',
      'GraphosAI image/unnamed (1).png',
      'GraphosAI image/unnamed (2).png',
      'GraphosAI image/unnamed (3).png',
      'GraphosAI image/unnamed (5).png'
    ],
    gradientFrom: 'from-violet-500/30',
    gradientTo: 'to-purple-600/20'
  },
  {
    id: 'localize-ai',
    title: 'LocalizeAI',
    type: 'Chrome Extension + API',
    tagline: 'AI-powered localization testing tool for developers',
    description: 'A powerful Chrome Extension helping developers and QA testers verify localization directly on any website. Features live translation, pseudo-localization for UI testing, and comprehensive bug reporting.',
    features: [
      'Live Language Toggle', 'Pseudo-Localization', 'Live Edit Mode',
      'AI Translation Suggestions', 'Bug Report System', 'JSON File Translator',
      'Google Drive Sync', 'Export to Excel/JSON'
    ],
    techStack: [
      'Vanilla JavaScript (ES6+)', 'Chrome Extension Manifest V3',
      'IndexedDB', 'Node.js', 'Express', 'Firestore', 'Vertex AI', 'Google OAuth', 'Google Drive API'
    ],
    architectureHighlights: [
      'MutationObserver for SPA support', 'Offline-first with IndexedDB',
      'CSS isolation for third-party sites', 'Client-side translation caching'
    ],
    metrics: [
      { label: 'Lines of Code', value: '15,000+' },
      { label: 'Supported Languages', value: '100+' },
      { label: 'Locale Translations', value: '90+' }
    ],
    links: [{ label: 'Chrome Extension', url: 'https://chromewebstore.google.com/detail/iepjpfaadjlhedjnichldgkmfcjjcelk', icon: 'Chrome' }],
    iconImage: 'icons/LocalizeAI.png',
    screenshots: [
      'LocalizeAI image/unnamed.png',
      'LocalizeAI image/unnamed (1).png',
      'LocalizeAI image/unnamed (2).png',
      'LocalizeAI image/unnamed (3).png',
      'LocalizeAI image/unnamed (4).png'
    ],
    gradientFrom: 'from-cyan-500/30',
    gradientTo: 'to-blue-600/20'
  }
];

export const skills = {
  frontend: [
    { name: 'React/Next.js', level: 'Expert', icon: 'Atom' },
    { name: 'TypeScript', level: 'Expert', icon: 'FileCode2' },
    { name: 'Tailwind CSS', level: 'Expert', icon: 'Palette' },
    { name: 'Framer Motion', level: 'Advanced', icon: 'Sparkles' },
    { name: 'TipTap/ProseMirror', level: 'Advanced', icon: 'FileText' },
    { name: 'Zustand/Redux', level: 'Expert', icon: 'Database' },
    { name: 'TanStack Query', level: 'Advanced', icon: 'RefreshCw' }
  ],
  backend: [
    { name: 'Node.js/Express', level: 'Expert', icon: 'Server' },
    { name: 'Firebase/Firestore', level: 'Expert', icon: 'Flame' },
    { name: 'PostgreSQL/MongoDB', level: 'Intermediate', icon: 'Database' },
    { name: 'Redis', level: 'Advanced', icon: 'Zap' },
    { name: 'WebSocket', level: 'Advanced', icon: 'Radio' },
    { name: 'REST API Design', level: 'Expert', icon: 'Network' }
  ],
  cloud: [
    { name: 'Google Cloud Platform', level: 'Advanced', icon: 'Cloud' },
    { name: 'Docker', level: 'Intermediate', icon: 'Container' },
    { name: 'CI/CD', level: 'Intermediate', icon: 'GitBranch' },
    { name: 'Vercel/Firebase Hosting', level: 'Expert', icon: 'Globe' }
  ],
  specialized: [
    { name: 'Chrome Extension Dev', level: 'Expert', icon: 'Chrome' },
    { name: 'PWA Development', level: 'Expert', icon: 'Smartphone' },
    { name: 'AI Integration (Gemini/Vertex AI)', level: 'Advanced', icon: 'Brain' },
    { name: 'Real-time Collaboration (Yjs/WebRTC)', level: 'Advanced', icon: 'Users' },
    { name: 'i18n/l10n', level: 'Advanced', icon: 'Languages' }
  ]
};

export const socialLinks = {
  github: 'https://github.com/alvesoscar517-cloud',
  discord: 'https://discord.com/users/joejoe_baby',
  email: 'alvesoscar517@gmail.com',
  upwork: 'https://www.upwork.com/freelancers/~019c738622df4ea5b4'
};
