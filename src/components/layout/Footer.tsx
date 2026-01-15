import { Github, Mail, Heart } from 'lucide-react';
import { socialLinks } from '@/data/projects';
import { DiscordIcon } from '@/components/shared/DiscordIcon';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
              Built with React & <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="Discord"
            >
              <DiscordIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
