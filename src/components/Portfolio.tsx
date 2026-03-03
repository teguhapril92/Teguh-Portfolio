import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Plus } from 'lucide-react';
import { cn } from '../utils';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filters = ['Semua', 'Materi Ajar', 'Kegiatan Siswa', 'Penghargaan', 'Workshop'];

  const projects = [
    {
      title: 'Modul Matematika Kreatif',
      category: 'Materi Ajar',
      image: 'https://picsum.photos/seed/edu1/800/600',
    },
    {
      title: 'Lomba Sains Nasional',
      category: 'Kegiatan Siswa',
      image: 'https://picsum.photos/seed/edu2/800/600',
    },
    {
      title: 'Guru Berprestasi 2023',
      category: 'Penghargaan',
      image: 'https://picsum.photos/seed/edu3/800/600',
    },
    {
      title: 'Seminar Literasi Digital',
      category: 'Workshop',
      image: 'https://picsum.photos/seed/edu4/800/600',
    },
    {
      title: 'Video Pembelajaran Interaktif',
      category: 'Materi Ajar',
      image: 'https://picsum.photos/seed/edu5/800/600',
    },
    {
      title: 'Pentas Seni Sekolah',
      category: 'Kegiatan Siswa',
      image: 'https://picsum.photos/seed/edu6/800/600',
    },
  ];

  const filteredProjects = activeFilter === 'Semua' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 bg-gray-50 dark:bg-dark/50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">Portofolio Saya</span>
          <h2 className="section-title">
            Karya <span className="text-primary">Terbaru</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  'px-6 py-2 rounded-full text-sm font-medium transition-all',
                  activeFilter === filter 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-white dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10'
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-white text-center">
                <p className="text-sm font-medium uppercase tracking-widest mb-2 opacity-80">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold mb-6">{project.title}</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center hover:bg-dark hover:text-white transition-all">
                    <ExternalLink size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center hover:bg-dark hover:text-white transition-all">
                    <Plus size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
