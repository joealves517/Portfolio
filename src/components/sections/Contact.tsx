import { motion } from 'framer-motion';
import { Mail, Github } from 'lucide-react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { socialLinks } from '@/data/projects';
import { DiscordIcon } from '@/components/shared/DiscordIcon';
import { UpworkIcon } from '@/components/shared/UpworkIcon';

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Let's Work Together" 
          subtitle="I'm currently available for freelance projects on Upwork"
        />

        <div className="max-w-xl mx-auto space-y-4 sm:space-y-6">
          <AnimatedSection>
            <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>Send an Email</span>
                </a>
                <a
                  href={socialLinks.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <DiscordIcon className="w-5 h-5" />
                  </div>
                  <span>Discord Profile</span>
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <motion.a
              href={socialLinks.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <UpworkIcon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Hire Me on Upwork</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      View my profile and start a project
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Availability</h3>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-medium">Available for new projects</span>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Typical response time: within 24 hours
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
