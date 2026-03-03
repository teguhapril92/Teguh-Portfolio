import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const skills = [
    'Manajemen Kelas',
    'Pengembangan Kurikulum',
    'Metode Pembelajaran Aktif',
    'Evaluasi Pendidikan',
    'Teknologi Pendidikan',
    'Konseling Siswa',
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-gray-50 dark:bg-dark/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://picsum.photos/seed/about/800/1000"
              alt="About Matias"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
          </div>
          
          {/* Floating Card */}
          <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-3xl text-white shadow-2xl hidden md:block">
            <p className="text-4xl font-bold mb-1">99%</p>
            <p className="text-sm font-medium uppercase tracking-widest opacity-80">
              Kepuasan Siswa/Wali
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">Tentang Saya</span>
          <h2 className="section-title">
            Saya adalah <br />
            Seorang <span className="text-primary">Professional</span> Teacher
          </h2>
          <p className="text-lg text-secondary dark:text-gray-400 mb-8">
            Dengan pengalaman bertahun-tahun di dunia pendidikan, saya berkomitmen untuk membimbing siswa mencapai potensi terbaik mereka melalui metode pembelajaran yang kreatif dan efektif.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {skills.map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary" size={20} />
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary">
            Unduh CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
