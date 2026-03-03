import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Saya',
      value: 'teguh.april92@gmail.com',
      href: 'mailto:teguh.april92@gmail.com',
    },
    {
      icon: Phone,
      title: 'Telepon Saya',
      value: '+62 812 3456 7890',
      href: 'tel:+6281234567890',
    },
    {
      icon: MapPin,
      title: 'Alamat Saya',
      value: 'Jakarta, Indonesia',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-gray-50 dark:bg-dark/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">Hubungi Saya</span>
          <h2 className="section-title">
            Mari Berdiskusi Tentang <br />
            <span className="text-primary">Pendidikan</span>
          </h2>
          <p className="text-lg text-secondary dark:text-gray-400 mb-10">
            Saya selalu terbuka untuk diskusi mengenai metode pembelajaran, inovasi pendidikan, atau peluang kolaborasi lainnya.
          </p>

          <div className="space-y-8">
            {contactInfo.map((info, i) => (
              <div key={info.title} className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                  <info.icon size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-widest text-secondary dark:text-gray-400">
                    {info.title}
                  </h4>
                  <a href={info.href} className="text-xl font-bold hover:text-primary transition-colors">
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card p-10"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nama Lengkap</label>
                <input
                  type="text"
                  placeholder="Nama Anda"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-100 dark:bg-white/5 border-transparent focus:border-primary focus:bg-white dark:focus:bg-dark transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Alamat Email</label>
                <input
                  type="email"
                  placeholder="email@anda.com"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-100 dark:bg-white/5 border-transparent focus:border-primary focus:bg-white dark:focus:bg-dark transition-all outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Subjek</label>
              <input
                type="text"
                placeholder="Konsultasi Pendidikan"
                className="w-full px-6 py-4 rounded-2xl bg-gray-100 dark:bg-white/5 border-transparent focus:border-primary focus:bg-white dark:focus:bg-dark transition-all outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Pesan</label>
              <textarea
                rows={5}
                placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                className="w-full px-6 py-4 rounded-2xl bg-gray-100 dark:bg-white/5 border-transparent focus:border-primary focus:bg-white dark:focus:bg-dark transition-all outline-none resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              Kirim Pesan <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
