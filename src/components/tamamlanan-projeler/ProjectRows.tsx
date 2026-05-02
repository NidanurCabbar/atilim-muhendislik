'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

export default function ProjectRows({ projects }: { projects: Project[] }) {
  return (
    <div className="max-w-5xl mx-auto">
      {projects.map((project, i) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
          className="group flex items-center justify-between gap-6 py-7 border-b border-gray-100 first:border-t cursor-default overflow-hidden"
        >
          {/* Left — name + context */}
          <div className="flex-1 min-w-0">
            <p
              className="text-xl md:text-2xl font-bold text-black tracking-wide group-hover:text-red-600 transition-colors duration-500"
              style={{ fontFamily: "'Clash Display', system-ui, sans-serif" }}
            >
              {project.name}
            </p>
            <p
              className="text-sm text-gray-500 mt-0 max-h-0 opacity-0 overflow-hidden
                         group-hover:max-h-[5rem] group-hover:opacity-100 group-hover:mt-2
                         transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            >
              {project.description}
            </p>
          </div>

          {/* Centre — meta (fades out on hover) */}
          <div className="hidden md:flex gap-8 flex-shrink-0 group-hover:opacity-0 transition-opacity duration-500">
            <div className="text-right">
              <p className="text-[9px] tracking-[0.25em] text-gray-400 uppercase">Konum</p>
              <p className="text-xs font-semibold text-gray-600 mt-0.5">{project.location}</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] tracking-[0.25em] text-gray-400 uppercase">Alan</p>
              <p className="text-xs font-semibold text-gray-600 mt-0.5">{project.area}</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] tracking-[0.25em] text-gray-400 uppercase">Yıl</p>
              <p className="text-xs font-semibold text-gray-600 mt-0.5">{project.year}</p>
            </div>
          </div>

          {/* Right — image slides in */}
          <div
            className="flex-shrink-0 overflow-hidden rounded-lg
                       w-0 group-hover:w-56
                       transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          >
            <div className="relative w-56 h-36">
              <Image
                src={project.coverImage}
                alt={project.name}
                fill
                className="object-cover rounded-lg"
                sizes="224px"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
