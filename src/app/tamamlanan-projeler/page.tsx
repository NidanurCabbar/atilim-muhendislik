'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { completedProjects } from '@/data/projects';

export default function TamamlananProjelerPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      {/* ── Hero ── */}
      <section className="relative w-full h-[100svh] min-h-[560px] bg-black overflow-hidden">
        <Image
          src="/images/projects/esenboga-cover.png"
          alt="Tamamlanmış Projeler"
          fill
          className="object-cover"
          style={{ filter: 'saturate(1.3) brightness(1.05)' }}
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.4) 60%, transparent 90%)' }}
        />
        <div className="absolute inset-0 z-10 flex items-end pb-24 md:pb-28">
          <div className="px-6 md:px-14 w-full md:w-1/2">
            <p className="text-[10px] tracking-[0.35em] text-white/40 uppercase font-semibold mb-4">
              Referanslarımız
            </p>
            <h1
              className="text-3xl md:text-5xl font-light text-white leading-tight tracking-wide mb-4"
              style={{ fontFamily: "'Clash Display', system-ui, sans-serif" }}
            >
              Tamamlanmış <span className="font-bold">Projeler</span>
            </h1>
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">
              30 yılı aşkın tecrübemizle tamamladığımız büyük ölçekli altyapı ve yapı projeleri.
            </p>
          </div>
        </div>
      </section>

      {/* ── Project List ── */}
      <section className="bg-white px-6 md:px-14 py-16">
        <div className="max-w-5xl mx-auto">
          {completedProjects.map((project, i) => (
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
                             group-hover:max-h-[2rem] group-hover:opacity-100 group-hover:mt-2
                             transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                             whitespace-nowrap text-ellipsis"
                >
                  {project.description}
                </p>
              </div>

              {/* Centre — meta (fades out on hover) */}
              <div className="hidden md:flex gap-8 flex-shrink-0 group-hover:opacity-0 transition-opacity duration-400">
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
                           w-0 group-hover:w-40
                           transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              >
                <div className="relative w-40 h-24">
                  <Image
                    src={project.coverImage}
                    alt={project.name}
                    fill
                    className="object-cover rounded-lg"
                    sizes="160px"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-14 py-16 bg-white">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-black via-[#1a0000] to-black px-8 md:px-16 py-16 text-center">
          <h2
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "'Clash Display', system-ui, sans-serif" }}
          >
            Projenizi Birlikte<br />Hayata Geçirelim
          </h2>
          <p className="text-white/60 text-sm md:text-base mb-10">
            Proje hakkında detaylı bilgi ve özel fırsatlar için bizimle iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="px-8 py-3 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            Hemen İletişime Geçin
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
