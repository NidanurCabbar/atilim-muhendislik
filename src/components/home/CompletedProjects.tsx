'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { completedProjects } from '@/data/projects';

export default function CompletedProjects() {
  return (
    <section className="bg-white px-4 md:px-8 pb-14">
      {/* Section header */}
      <h2 className="text-center text-sm font-semibold tracking-[0.2em] uppercase text-black mb-8">
        Tamamlanmış Projeler
      </h2>

      {/* 2×2 grid */}
      <div className="grid grid-cols-2 gap-8 md:gap-12 w-full">
        {completedProjects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl group bg-gray-200"
          >
            <Image
              src={project.coverImage}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 50vw"
            />

            {/* Default overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end px-4 py-4 md:py-5">
              <span className="text-white text-sm md:text-base font-semibold tracking-wide mb-1">
                {project.name}
              </span>
              {project.description && (
                <p className="text-white/85 text-xs md:text-sm leading-snug">
                  {project.description}
                </p>
              )}
            </div>

            {/* Caption (hidden on hover) */}
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 group-hover:opacity-0 transition-opacity duration-500">
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
