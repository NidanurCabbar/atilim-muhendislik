'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/data/projects';

interface RelatedProjectsProps {
  projects: Project[];
}

export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (!projects.length) return null;

  return (
    <section className="section-padding bg-brand-dark-2">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-3">Diğer Fırsatlar</p>
          <h2 className="font-display text-2xl sm:text-3xl text-white">Satıştaki Diğer Projeler</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`} className="group block bg-brand-dark-3 border border-white/5 hover:border-brand-gold/30 transition-colors overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-white group-hover:text-brand-gold transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-brand-gray text-xs mt-1">{project.location}</p>
                  <div className="mt-3 flex items-center gap-1 text-brand-gold text-xs">
                    <span>Detayları Gör</span>
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
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
