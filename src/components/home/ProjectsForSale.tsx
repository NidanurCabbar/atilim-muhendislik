'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { forSaleProjects } from '@/data/projects';

export default function ProjectsForSale() {
  return (
    <section id="projects" className="bg-white px-4 md:px-8 py-14">

      {/* Section header */}
      <h2
        className="text-center text-sm font-semibold tracking-[0.2em] uppercase text-black mb-8"
        style={{ fontFamily: 'var(--font-manrope), system-ui, sans-serif' }}
      >
        Satıştaki Projeler
      </h2>

      {/* 2×2 grid */}
      <div className="grid grid-cols-2 gap-8 md:gap-12 w-full">
        {forSaleProjects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="pb-5"
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="relative aspect-square overflow-visible group cursor-pointer">

                {/* Image container (clips image but not button) */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <Image
                    src={project.coverImage}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 50vw"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Project name — bottom center, above button */}
                  <div className="absolute bottom-12 left-0 right-0 flex justify-center">
                    <span
                      className="text-white text-sm md:text-base font-semibold tracking-widest uppercase"
                      style={{ fontFamily: "'Clash Display', system-ui, sans-serif" }}
                    >
                      {project.name}
                    </span>
                  </div>
                </div>

                {/* Arrow button — protrudes from bottom center */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-black border-2 border-white rounded-xl flex items-center justify-center group-hover:bg-[#C8A96E] transition-colors duration-300">
                    <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M2 8H14M14 8L9 3M14 8L9 13"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
