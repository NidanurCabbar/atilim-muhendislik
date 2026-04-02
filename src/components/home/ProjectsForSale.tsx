'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { forSaleProjects } from '@/data/projects';

export default function ProjectsForSale() {
  return (
    <section id="projects" className="bg-white px-4 md:px-8 py-14">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="w-2 h-2 rounded-full bg-black inline-block" />
        <h2 className="text-base font-semibold tracking-widest uppercase text-black">
          Satıştaki Projeler
        </h2>
      </div>

      {/* 2×2 grid */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-5xl">
        {forSaleProjects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="relative aspect-[4/3] overflow-hidden group cursor-pointer bg-gray-200">
                <Image
                  src={project.coverImage}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 40vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Project name */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-end justify-between">
                  <span className="text-white text-sm md:text-base font-semibold tracking-wider">
                    {project.name}
                  </span>

                  {/* Play / arrow button */}
                  <div className="w-8 h-8 bg-black flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors duration-300">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="group-hover:[&>path]:fill-black transition-colors"
                    >
                      <path
                        d="M2 1L10 6L2 11V1Z"
                        fill="white"
                        className="group-hover:fill-black transition-colors duration-300"
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
