import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Users, Lightbulb, GraduationCap, ClipboardCheck, Presentation } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: BookOpen,
      title: 'Bimbingan Belajar',
      description: 'Memberikan bimbingan intensif untuk membantu siswa memahami materi pelajaran dengan lebih mendalam.',
    },
    {
      icon: Users,
      title: 'Konseling Pendidikan',
      description: 'Membantu siswa dalam mengenali potensi diri dan merencanakan masa depan akademik mereka.',
    },
    {
      icon: Lightbulb,
      title: 'Inovasi Pembelajaran',
      description: 'Mengembangkan metode mengajar yang kreatif dan menyenangkan agar siswa lebih antusias belajar.',
    },
    {
      icon: GraduationCap,
      title: 'Persiapan Ujian',
      description: 'Mempersiapkan siswa menghadapi ujian sekolah maupun seleksi masuk perguruan tinggi.',
    },
    {
      icon: ClipboardCheck,
      title: 'Penyusunan Kurikulum',
      description: 'Merancang rencana pembelajaran yang efektif dan sesuai dengan standar kompetensi pendidikan.',
    },
    {
      icon: Presentation,
      title: 'Pelatihan Guru',
      description: 'Berbagi pengalaman dan metode mengajar kepada sesama pendidik untuk meningkatkan kualitas pendidikan.',
    },
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">Layanan Saya</span>
          <h2 className="section-title">
            Apa yang Saya <span className="text-primary">Lakukan</span>
          </h2>
          <p className="text-lg text-secondary dark:text-gray-400 max-w-2xl mx-auto">
            Saya menawarkan berbagai layanan pendidikan untuk membantu siswa mencapai potensi maksimal mereka.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="card group hover:bg-primary hover:text-white transition-all duration-500"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
              <service.icon className="text-primary group-hover:text-white transition-colors" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-secondary dark:text-gray-400 group-hover:text-white/80 transition-colors">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
