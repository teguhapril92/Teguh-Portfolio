import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-gray-100 dark:border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <a href="#home" className="text-2xl font-bold tracking-tighter">
          TEGUH<span className="text-primary">.</span>
        </a>

        <p className="text-sm text-secondary dark:text-gray-400 flex items-center gap-1">
          &copy; {currentYear} Teguh Firmansyah. Dibuat dengan <Heart size={14} className="text-red-500 fill-red-500" /> untuk Pendidikan.
        </p>

        <div className="flex items-center space-x-6">
          {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-secondary dark:text-gray-400 hover:text-primary transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
