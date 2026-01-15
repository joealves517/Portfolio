import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Code2, Zap, CheckCircle2,
  GitBranch, BarChart3, FileCode, Globe, Cpu, Database, Cloud,
  Smartphone, Brain, Users, Shield, Rocket, Settings, Chrome,
  ArrowLeft, Images, X, ChevronLeft, ChevronRight, Layers
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useHeaderVisibility } from '@/hooks/useHeaderVisibility';
import type { Project } from '@/data/projects';

interface ProjectFullViewProps {
  project: Project;
  onClose: () => void;
}

const projectIcons: Record<string, typeof Code2> = {
  'gnote': Globe,
  'graphos-ai-studio': Brain,
  'localize-ai': Chrome,
};

const projectStyles: Record<string, {
  bgGradient: string;
  glowColor: string;
  accentColor: string;
}> = {
  'gnote': {
    bgGradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    glowColor: 'bg-emerald-500/40',
    accentColor: 'emerald',
  },
  'graphos-ai-studio': {
    bgGradient: 'from-violet-600 via-purple-600 to-fuchsia-700',
    glowColor: 'bg-purple-500/40',
    accentColor: 'purple',
  },
  'localize-ai': {
    bgGradient: 'from-cyan-600 via-blue-600 to-indigo-700',
    glowColor: 'bg-blue-500/40',
    accentColor: 'blue',
  },
};

const featureIcons = [
  CheckCircle2, Zap, Shield, Rocket, Globe, Database, 
  Cloud, Smartphone, Brain, Users, Settings, FileCode
];

const archIcons = [GitBranch, Cpu, Database, Cloud, Shield, Settings];

export function ProjectFullView({ project, onClose }: ProjectFullViewProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoScrollIndex, setAutoScrollIndex] = useState(0);
  const { hide: hideHeader, show: showHeader } = useHeaderVisibility();
  
  const styles = projectStyles[project.id] || {
    bgGradient: 'from-indigo-600 via-purple-600 to-pink-600',
    glowColor: 'bg-indigo-500/40',
    accentColor: 'indigo',
  };
  const ProjectIcon = projectIcons[project.id] || Code2;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToPrevious = () => {
    if (project.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.screenshots!.length - 1 : prev - 1
      );
    }
  };

  const goToNext = () => {
    if (project.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === project.screenshots!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const goToPreviousCarousel = () => {
    if (project.screenshots) {
      setAutoScrollIndex((prev) => 
        prev === 0 ? project.screenshots!.length - 1 : prev - 1
      );
    }
  };

  const goToNextCarousel = () => {
    if (project.screenshots) {
      setAutoScrollIndex((prev) => 
        prev === project.screenshots!.length - 1 ? 0 : prev + 1
      );
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    hideHeader();
    return () => {
      document.body.style.overflow = '';
      showHeader();
    };
  }, [hideHeader, showHeader]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const content = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-slate-950 overflow-y-auto overflow-x-hidden"
    >
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-b ${styles.bgGradient} opacity-10`} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        onClick={onClose}
        className="fixed top-4 left-4 z-[10000] flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back</span>
      </motion.button>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Hero Section - Compact */}
        <div className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10"
            >
              {/* Icon & Title */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <motion.div 
                  className="relative mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className={`absolute inset-0 rounded-2xl ${styles.glowColor} blur-xl opacity-60`} />
                  <div className="relative w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    {project.iconImage ? (
                      <img 
                        src={`${import.meta.env.BASE_URL}${project.iconImage.replace(/^\//, '')}`}
                        alt={project.title}
                        className="w-12 h-12 object-contain"
                      />
                    ) : (
                      <ProjectIcon className="w-10 h-10 text-white" />
                    )}
                  </div>
                </motion.div>

                <Badge className={`mb-3 text-xs px-3 py-1 bg-gradient-to-r ${styles.bgGradient} border-0 text-white`}>
                  {project.type}
                </Badge>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {project.title}
                </h1>
                
                <p className="text-base sm:text-lg text-gray-400 max-w-xl mb-4">
                  {project.tagline}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {project.links.map((link, i) => {
                    const isChrome = link.icon === 'Chrome';
                    const LinkIcon = isChrome ? Chrome : ExternalLink;
                    return (
                      <Button 
                        key={link.label} 
                        variant={i === 0 ? 'primary' : 'secondary'} 
                        size="default" 
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                          <LinkIcon className="w-4 h-4" />
                          {link.label}
                          {isChrome && <ExternalLink className="w-3.5 h-3.5 opacity-70" />}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>

              {/* Metrics - Inline */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="grid grid-cols-3 gap-3">
                  {project.metrics.map((metric, i) => {
                    const icons = [BarChart3, FileCode, Globe];
                    const Icon = icons[i % icons.length];
                    return (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                        className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                      >
                        <Icon className={`w-5 h-5 mx-auto mb-2 text-${styles.accentColor}-400`} />
                        <div className="text-xl sm:text-2xl font-bold text-white">{metric.value}</div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Description */}
        <div className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 text-center leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Screenshots Section */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 py-8 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-${styles.accentColor}-500/20`}>
                  <Images className={`w-4 h-4 text-${styles.accentColor}-400`} />
                </div>
                <h2 className="text-xl font-semibold text-white">Screenshots</h2>
              </div>
              
              <div className="relative">
                {/* Navigation Buttons */}
                {project.screenshots.length > 2 && (
                  <>
                    <button
                      onClick={goToPreviousCarousel}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all group"
                    >
                      <ChevronLeft className="w-5 h-5 text-white group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    
                    <button
                      onClick={goToNextCarousel}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all group"
                    >
                      <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </>
                )}

                <div className="overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={autoScrollIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      {/* Current Image */}
                      <div 
                        onClick={() => openLightbox(autoScrollIndex)}
                        className="cursor-pointer group"
                      >
                        <div className="relative rounded-xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all shadow-lg group-hover:shadow-xl">
                          <img
                            src={`${import.meta.env.BASE_URL}${project.screenshots[autoScrollIndex]}`}
                            alt={`${project.title} screenshot ${autoScrollIndex + 1}`}
                            className="w-full h-[300px] sm:h-[360px] object-cover rounded-xl"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center rounded-xl">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <Images className="w-6 h-6 text-white" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Next Image */}
                      {project.screenshots.length > 1 && (
                        <div 
                          onClick={() => openLightbox((autoScrollIndex + 1) % project.screenshots!.length)}
                          className="cursor-pointer group"
                        >
                          <div className="relative rounded-xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all shadow-lg group-hover:shadow-xl">
                            <img
                              src={`${import.meta.env.BASE_URL}${project.screenshots[(autoScrollIndex + 1) % project.screenshots.length]}`}
                              alt={`${project.title} screenshot ${((autoScrollIndex + 1) % project.screenshots.length) + 1}`}
                              className="w-full h-[300px] sm:h-[360px] object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center rounded-xl">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                  <Images className="w-6 h-6 text-white" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                  {project.screenshots.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setAutoScrollIndex(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === autoScrollIndex || i === (autoScrollIndex + 1) % project.screenshots!.length 
                          ? 'bg-white w-8' 
                          : 'bg-white/30 w-1.5 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Features & Architecture - Two Columns */}
        <section className="px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/20">
                    <Zap className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">Key Features</h2>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, i) => {
                    const Icon = featureIcons[i % featureIcons.length];
                    return (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-emerald-500/20 transition-all group"
                      >
                        <div className="p-1.5 rounded-md bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-colors">
                          <Icon className="w-4 h-4 text-emerald-400" />
                        </div>
                        <span className="text-base text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">{feature}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Architecture */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <Cpu className="w-4 h-4 text-purple-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">Architecture</h2>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.architectureHighlights.map((highlight, i) => {
                    const Icon = archIcons[i % archIcons.length];
                    return (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-purple-500/20 transition-all group"
                      >
                        <div className="p-1.5 rounded-md bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                          <Icon className="w-4 h-4 text-purple-400" />
                        </div>
                        <span className="text-base text-gray-300 group-hover:text-white transition-colors">{highlight}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="px-4 sm:px-6 lg:px-8 py-8 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-cyan-500/20">
                <Layers className="w-4 h-4 text-cyan-400" />
              </div>
              <h2 className="text-xl font-semibold text-white">Tech Stack</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {project.techStack.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge 
                    variant="outline" 
                    className="text-sm px-4 py-2 bg-white/5 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all cursor-default"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer spacing */}
        <div className="h-8" />
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && project.screenshots && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10001] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={`${import.meta.env.BASE_URL}${project.screenshots[currentImageIndex]}`}
              alt={`${project.title} screenshot`}
              className="max-h-[90vh] max-w-[95vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {project.screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentImageIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return createPortal(content, document.body);
}
