import { Monitor, Server, Sparkles, Chrome, Wifi, Brain } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

const highlights = [
  {
    icon: Monitor,
    title: 'Frontend Excellence',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      'React 18/19, TypeScript, Next.js',
      'State: Zustand, TanStack Query',
      'UI: Tailwind, Framer Motion, Radix UI',
      'Rich Text: TipTap/ProseMirror'
    ]
  },
  {
    icon: Server,
    title: 'Backend & Infrastructure',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      'Node.js, Express, REST APIs',
      'Firebase, Firestore, Cloud Run',
      'Redis, BullMQ, WebSocket',
      'Docker, CI/CD, Vercel'
    ]
  },
  {
    icon: Chrome,
    title: 'Chrome Extension Expert',
    color: 'from-violet-500 to-purple-500',
    skills: [
      'Manifest V3 Architecture',
      'Service Workers, Content Scripts',
      'Chrome Identity & Storage APIs',
      '3 Published Extensions'
    ]
  },
  {
    icon: Wifi,
    title: 'Real-time & Offline',
    color: 'from-amber-500 to-orange-500',
    skills: [
      'WebRTC P2P Connections',
      'Yjs CRDT Collaboration',
      'PWA & Service Workers',
      'IndexedDB, Offline-first'
    ]
  },
  {
    icon: Brain,
    title: 'AI Integration',
    color: 'from-pink-500 to-rose-500',
    skills: [
      'Google Vertex AI & Gemini',
      'AI Content Detection',
      'Text Humanization',
      'Embeddings & NLP'
    ]
  },
  {
    icon: Sparkles,
    title: 'Specialized Skills',
    color: 'from-indigo-500 to-blue-500',
    skills: [
      'i18n/l10n (19+ languages)',
      'Payment Integration (LemonSqueezy)',
      'OAuth & Security',
      'Performance Optimization'
    ]
  }
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="About Me" 
          subtitle="Full-stack developer specializing in Chrome Extensions, PWAs, and AI integration"
        />

        <AnimatedSection className="max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
            <p>
              I'm a passionate full-stack developer with expertise in building production-ready 
              applications that scale. My work has served <span className="text-indigo-400 font-medium">25,000+ users</span> across 
              multiple platforms including PWAs and Chrome Extensions.
            </p>
            <p>
              I specialize in <span className="text-indigo-400 font-medium">Chrome Extension development</span> (Manifest V3), 
              <span className="text-indigo-400 font-medium"> AI integration</span> using Google Vertex AI and Gemini, 
              and <span className="text-indigo-400 font-medium">real-time collaboration</span> systems with WebRTC and Yjs CRDT.
              I'm particularly passionate about offline-first architecture and creating exceptional user experiences.
            </p>
            <p>
              With <span className="text-indigo-400 font-medium">100,000+ lines of production code</span> and 
              <span className="text-indigo-400 font-medium"> 8+ Chrome Extensions</span>, I understand 
              what it takes to deliver reliable, performant software that users love.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((highlight, index) => (
            <AnimatedSection key={highlight.title} delay={index * 0.05}>
              <Card className="h-full relative overflow-hidden group border-white/5">
                {/* Wave background - hiển thị mặc định */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div 
                    className={`absolute -bottom-1/2 -left-1/4 w-[150%] h-full bg-gradient-to-t ${highlight.color} opacity-[0.06] group-hover:opacity-[0.1] rounded-[50%] transition-opacity duration-500`}
                    style={{
                      animation: 'wave 8s ease-in-out infinite',
                      willChange: 'opacity',
                    }}
                  />
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                  <div 
                    className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${highlight.color}`}
                    style={{
                      top: '20%',
                      left: '10%',
                      animation: 'float 6s ease-in-out infinite',
                      willChange: 'transform',
                    }}
                  />
                  <div 
                    className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${highlight.color}`}
                    style={{
                      top: '60%',
                      right: '15%',
                      animation: 'float 8s ease-in-out infinite reverse',
                      animationDelay: '-2s',
                      willChange: 'transform',
                    }}
                  />
                </div>

                {/* Content */}
                <CardHeader className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                    <highlight.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <CardTitle>{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-2">
                    {highlight.skills.map((skill) => (
                      <li key={skill} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-indigo-400 mt-1">•</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* CSS Animations - tối ưu hóa */}
        <style>{`
          @keyframes wave {
            0%, 100% {
              transform: translateY(0) rotate(0deg) translateZ(0);
            }
            50% {
              transform: translateY(-20px) rotate(2deg) translateZ(0);
            }
          }
          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0) translateZ(0);
              opacity: 0.3;
            }
            50% {
              transform: translateY(-20px) translateX(10px) translateZ(0);
              opacity: 0.6;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            * {
              animation: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
