'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { completedProjects } from '@/data/projects';
import RevealText from '@/components/ui/RevealText';

export default function CompletedProjects() {
  return (
    <section className="bg-white px-4 md:px-8 pb-14">
      {/* Section header */}
      <h2 className="font-display text-center text-3xl md:text-5xl font-semibold tracking-wide text-black mb-14">
        <RevealText text="Tamamlanmış Projeler" />
      </h2>

      {/* 2×2 grid — same width as Satıştaki Projeler */}
      <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 gap-5 md:gap-8 w-full">
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
              className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:[filter:grayscale(0.18)_brightness(0.92)]"
              sizes="(max-width: 768px) 50vw, 50vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/65" />

            {/* Title — always visible, animates up on hover (desktop only) */}
            <div className="absolute inset-0 flex items-end justify-center px-3 pb-10 transition-all duration-500 md:group-hover:pb-[4.5rem]">
              <span className="font-display text-white text-lg md:text-2xl font-semibold text-center leading-tight tracking-wide drop-shadow-lg">
                {project.name}
              </span>
            </div>

            {/* Subtitle — desktop only, fades in on hover */}
            <div className="hidden md:flex absolute inset-0 items-end justify-center px-4 pb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="font-sans text-white/85 text-sm text-center leading-snug">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
