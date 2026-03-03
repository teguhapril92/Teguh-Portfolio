import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">Halo, Saya</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
            Teguh <br />
            <span className="text-primary">Professional</span> Teacher
          </h1>
          <p className="text-lg text-secondary dark:text-gray-400 mb-8 max-w-lg">
            Saya adalah seorang pendidik profesional yang berdedikasi untuk menciptakan lingkungan belajar yang inspiratif dan inovatif bagi para siswa.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#portfolio" className="btn-primary flex items-center gap-2">
              Lihat Portofolio <ArrowRight size={18} />
            </a>
            <div className="flex items-center space-x-4">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full border border-gray-200 dark:border-white/10 hover:bg-primary hover:text-white transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/d/1OSf1mDwI7Xr5aARfVnDO2myx9D16tS7z"
              alt="Teguh Firmansyah"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>
          
          {/* Floating Stats */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white dark:bg-dark p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10"
          >
            <span className="text-4xl font-bold text-primary">12+</span>
            <p className="text-xs font-medium uppercase tracking-widest text-secondary dark:text-gray-400">
              Tahun Pengalaman
            </p>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-6 -right-6 bg-white dark:bg-dark p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10"
          >
            <span className="text-4xl font-bold text-primary">1000+</span>
            <p className="text-xs font-medium uppercase tracking-widest text-secondary dark:text-gray-400">
              Siswa Terbimbing
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
