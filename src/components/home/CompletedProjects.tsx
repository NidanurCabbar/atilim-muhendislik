'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { completedProjects } from '@/data/projects';

export default function CompletedProjects() {
  return (
    <section className="bg-white px-4 md:px-8 pb-14">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="w-2 h-2 rounded-full bg-black inline-block" />
        <h2 className="text-base font-semibold tracking-widest uppercase text-black">
          Tamamlanmış Projeler
        </h2>
      </div>

      {/* 2×2 grid — image only with caption overlay */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-5xl">
        {completedProjects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative aspect-[4/3] overflow-hidden group bg-gray-200"
          >
            <Image
              src={project.coverImage}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 40vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
              <span className="text-white text-sm md:text-base font-medium tracking-wide">
                {project.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
