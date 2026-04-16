'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '25+', label: 'Yıllık Deneyim' },
  { value: '60+', label: 'Tamamlanan Proje' },
  { value: '3500+', label: 'Mutlu Aile' },
  { value: '100%', label: 'Zamanında Teslimat' },
];

export default function StatsBar() {
  return (
    <section className="bg-brand-dark-3 border-y border-white/5 py-10">
      <div className="container-custom px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <span className="font-display text-3xl sm:text-4xl text-brand-gold font-bold">
                {stat.value}
              </span>
              <span className="text-brand-gray text-xs sm:text-sm mt-1 tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
