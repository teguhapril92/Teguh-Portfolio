import React from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Siswa Kelas XII',
      content: 'Pak Teguh adalah guru yang sangat sabar. Berkat bimbingan beliau, saya akhirnya bisa memahami konsep matematika yang sebelumnya terasa sangat sulit.',
      image: 'https://i.pravatar.cc/150?u=budi',
    },
    {
      name: 'Siti Aminah',
      role: 'Orang Tua Siswa',
      content: 'Kami sangat berterima kasih atas dedikasi Pak Teguh. Anak kami menjadi lebih rajin belajar dan memiliki motivasi tinggi sejak diajar oleh beliau.',
      image: 'https://i.pravatar.cc/150?u=siti',
    },
    {
      name: 'Dr. Ahmad Fauzi',
      role: 'Kepala Sekolah',
      content: 'Teguh adalah aset berharga bagi sekolah kami. Inovasi pembelajarannya selalu memberikan dampak positif bagi perkembangan akademik siswa.',
      image: 'https://i.pravatar.cc/150?u=ahmad',
    },
    {
      name: 'Lestari Putri',
      role: 'Alumni',
      content: 'Meskipun sudah lulus, nasihat dan ilmu dari Pak Teguh masih sangat bermanfaat bagi saya di bangku perkuliahan. Guru yang luar biasa!',
      image: 'https://i.pravatar.cc/150?u=lestari',
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">Testimoni</span>
          <h2 className="section-title">
            Apa Kata <span className="text-primary">Mereka</span>
          </h2>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="pb-16"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className="card text-center p-12 relative">
                <div className="absolute top-6 left-6 text-primary/20">
                  <Quote size={64} />
                </div>
                <p className="text-xl italic text-secondary dark:text-gray-400 mb-8 relative z-10">
                  "{testimonial.content}"
                </p>
                <div className="flex flex-col items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mb-4 border-4 border-primary/10"
                    referrerPolicy="no-referrer"
                  />
                  <h4 className="text-xl font-bold">{testimonial.name}</h4>
                  <p className="text-sm font-medium text-primary uppercase tracking-widest">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
