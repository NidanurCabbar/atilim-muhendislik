'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative overflow-hidden border border-white/5 hover:border-white/20 transition-colors duration-500"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="bg-white text-black text-[10px] tracking-widest uppercase font-semibold px-3 py-1">
            Satışta
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-[#111]">
        <div className="flex items-start gap-1.5 text-gray-400 text-xs mb-2">
          <MapPin size={12} className="mt-0.5 shrink-0 text-white" />
          {project.location}
        </div>

        <h3 className="text-xl text-white group-hover:text-gray-300 transition-colors">
          {project.fullName}
        </h3>
        <p className="text-gray-500 text-sm mt-1">{project.tagline}</p>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-5 flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group/link"
        >
          <span className="border-b border-transparent group-hover/link:border-white transition-colors pb-0.5">
            Detayları Gör
          </span>
          <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
