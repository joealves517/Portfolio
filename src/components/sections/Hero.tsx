import { motion } from 'framer-motion';
import { Mail, Download, ArrowDown, Users, Code2, Chrome, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/data/projects';
import { DiscordIcon } from '@/components/shared/DiscordIcon';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: Users, value: '25K+', label: 'Users Served' },
    { icon: Code2, value: '100K+', label: 'Lines of Code' },
    { icon: Chrome, value: '8+', label: 'Chrome Extensions' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 z-10">
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-float" style={{ transform: 'translateZ(0)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s', transform: 'translateZ(0)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            style={{ willChange: 'transform, opacity' }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-lg opacity-50 animate-pulse" />
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-br from-indigo-500 to-purple-600">
                <img
                  src={`${import.meta.env.BASE_URL}avatar.png`}
                  alt="Joe's avatar"
                  className="w-full h-full rounded-full object-cover border-4 border-slate-900"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="gradient-text">Joe</span>
            </h1>
            <p className="text-xl sm:text-2xl text-indigo-300 font-medium mb-6">
              Full-Stack Developer | AI Integration Specialist
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
          >
            Specializing in Chrome Extensions, PWAs, and AI-powered applications with 
            real-time collaboration. Building production-ready apps that scale to thousands of users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-12 px-4 sm:px-0"
          >
            <Button variant="primary" size="lg" onClick={scrollToProjects} className="flex flex-row items-center gap-2 w-full sm:w-auto">
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4 shrink-0" />
            </Button>
            <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
              <a href="/Portfolio/Joe_Resume.html" target="_blank" className="flex flex-row items-center justify-center gap-2">
                <Download className="w-4 h-4 shrink-0" />
                <span>Download Resume</span>
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              aria-label="Discord"
            >
              <DiscordIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto px-2 sm:px-0"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ willChange: 'transform, opacity' }}
                className="relative text-center p-2 sm:p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden group hover:border-indigo-500/30 transition-all"
              >
                {/* Animated wave background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(99, 102, 241, 0.1)" />
                        <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,32 Q25,16 50,32 T100,32 L100,100 L0,100 Z"
                      fill={`url(#gradient-${index})`}
                      className="animate-wave"
                    />
                    <path
                      d="M0,48 Q25,32 50,48 T100,48 L100,100 L0,100 Z"
                      fill="rgba(99, 102, 241, 0.05)"
                      className="animate-wave-slow"
                    />
                  </svg>
                </div>
                
                {/* Geometric shapes background */}
                <div className="absolute inset-0 opacity-30">
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${
                    index === 0 ? 'from-indigo-500/20 to-purple-500/20' :
                    index === 1 ? 'from-purple-500/20 to-pink-500/20' :
                    'from-pink-500/20 to-indigo-500/20'
                  } rounded-full blur-xl transform translate-x-8 -translate-y-8`} />
                  <div className={`absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr ${
                    index === 0 ? 'from-purple-500/20 to-indigo-500/20' :
                    index === 1 ? 'from-pink-500/20 to-purple-500/20' :
                    'from-indigo-500/20 to-pink-500/20'
                  } rounded-full blur-lg transform -translate-x-6 translate-y-6`} />
                </div>

                <div className="relative z-10">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 mx-auto mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 leading-tight">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
