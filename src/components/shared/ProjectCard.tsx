import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layers, Sparkles, Globe, Brain, Chrome } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProjectFullView } from './ProjectFullView';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const projectIcons: Record<string, typeof Code2> = {
  'gnote': Globe,
  'graphos-ai-studio': Brain,
  'localize-ai': Chrome,
};

const projectStyles: Record<string, {
  bgGradient: string;
  glowColor: string;
  patternOpacity: string;
}> = {
  'gnote': {
    bgGradient: 'from-emerald-700 via-teal-800 to-cyan-900',
    glowColor: 'bg-emerald-500/30',
    patternOpacity: 'opacity-10',
  },
  'graphos-ai-studio': {
    bgGradient: 'from-violet-700 via-purple-800 to-fuchsia-900',
    glowColor: 'bg-purple-500/30',
    patternOpacity: 'opacity-10',
  },
  'localize-ai': {
    bgGradient: 'from-cyan-700 via-blue-800 to-indigo-900',
    glowColor: 'bg-blue-500/30',
    patternOpacity: 'opacity-10',
  },
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ProjectIcon = projectIcons[project.id] || Code2;
  const styles = projectStyles[project.id] || {
    bgGradient: 'from-indigo-600 via-purple-600 to-pink-600',
    glowColor: 'bg-indigo-500/40',
    patternOpacity: 'opacity-20',
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.1 }}
        className="h-full"
      >
        <Card className="h-full flex flex-col overflow-hidden group hover:border-indigo-500/30 bg-slate-900/50 backdrop-blur-sm">
          <div className="h-44 relative overflow-hidden shrink-0">
            <div className={`absolute inset-0 bg-gradient-to-br ${styles.bgGradient}`} />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.4)_0%,transparent_50%)]" />
            
            <div className={`absolute inset-0 ${styles.patternOpacity}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[length:16px_16px]" />
            </div>
            
            <div className={`absolute top-4 left-4 w-20 h-20 rounded-full ${styles.glowColor} blur-2xl group-hover:scale-150 transition-transform duration-700`} />
            <div className={`absolute bottom-4 right-4 w-16 h-16 rounded-full ${styles.glowColor} blur-xl group-hover:scale-150 transition-transform duration-700 delay-100`} />
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full ${styles.glowColor} blur-2xl group-hover:scale-125 transition-transform duration-500`} />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                <div className="absolute inset-0 -m-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl" />
                {project.iconImage ? (
                  <img 
                    src={`${import.meta.env.BASE_URL}${project.iconImage.replace(/^\//, '')}`}
                    alt={`${project.title} icon`}
                    className="w-16 h-16 object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <ProjectIcon className="w-14 h-14 text-white relative z-10 drop-shadow-lg" />
                )}
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-900/80 to-transparent" />
            <Badge className="absolute top-3 right-3 text-xs backdrop-blur-sm bg-black/30 border-white/20" variant="secondary">
              {project.type}
            </Badge>
          </div>
          
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Layers className="w-4 h-4 text-indigo-400" />
              {project.title}
            </CardTitle>
            <CardDescription className="text-indigo-300/70 text-sm line-clamp-2">
              {project.tagline}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="flex flex-col flex-1 pt-0">
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-3">
              {project.description}
            </p>

            <div className="flex gap-4 mb-3 text-center">
              {project.metrics.slice(0, 3).map((metric) => (
                <div key={metric.label} className="flex-1">
                  <div className="text-sm font-semibold text-white">{metric.value}</div>
                  <div className="text-xs text-gray-500 truncate">{metric.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {project.techStack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5">
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 4 && (
                <Badge variant="outline" className="text-xs px-2 py-0.5">
                  +{project.techStack.length - 4}
                </Badge>
              )}
            </div>

            <div className="flex-1" />

            <Button variant="primary" size="sm" onClick={() => setIsOpen(true)} className="w-full">
              <Sparkles className="w-3.5 h-3.5" />
              View Details
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <ProjectFullView project={project} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
