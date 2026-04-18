'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { forSaleProjects } from '@/data/projects';
import RevealText from '@/components/ui/RevealText';

export default function ProjectsForSale() {
  return (
    <section id="projects" className="bg-white px-4 md:px-8 pt-14 pb-20">

      {/* Section header */}
      <h2 className="font-display text-center text-3xl md:text-5xl font-semibold tracking-wide text-black mb-14">
        <RevealText text="Satıştaki Projeler" />
      </h2>

      {/* 2×2 grid — constrained to match "Other Projects" width on the detail page */}
      <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 gap-5 md:gap-8 w-full">
        {forSaleProjects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className=""
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer">
                  <Image
                    src={project.cardImage ?? project.coverImage}
                    alt={project.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:[filter:grayscale(0.18)_brightness(0.92)]"
                    style={{ objectPosition: project.cardImagePosition ?? 'center' }}
                    sizes="(max-width: 768px) 50vw, 50vw"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Project name — bottom center */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                    <span
                      className="text-white text-lg md:text-2xl font-semibold tracking-widest uppercase"
                      style={{ fontFamily: "'Clash Display', system-ui, sans-serif" }}
                    >
                      {project.name}
                    </span>
                  </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
