import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProjectRows from '@/components/tamamlanan-projeler/ProjectRows';
import ResidentialRows from '@/components/tamamlanan-projeler/ResidentialRows';
import { completedProjects, residentialProjects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Tamamlanmış Projeler | Atılım Mühendislik',
  description: '30 yılı aşkın tecrübemizle tamamladığımız büyük ölçekli altyapı ve yapı projeleri.',
  openGraph: {
    title: 'Tamamlanmış Projeler | Atılım Mühendislik',
    description: '30 yılı aşkın tecrübemizle tamamladığımız büyük ölçekli altyapı ve yapı projeleri.',
    images: [{ url: '/images/projects/esenboga-cover.png', width: 1200, height: 630 }],
  },
};

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
        <ProjectRows projects={completedProjects} />
      </section>

      {/* ── Konut ve Ticari Yapılar ── */}
      <section className="bg-white px-6 md:px-14 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-gray-200 pt-12 mb-2">
            <p className="text-[10px] tracking-[0.35em] text-gray-400 uppercase font-semibold mb-3">
              Tamamlanmış Projelerimiz
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-black mb-0"
              style={{ fontFamily: "'Clash Display', system-ui, sans-serif" }}
            >
              Konut ve Ticari Yapılar
            </h2>
          </div>
          <ResidentialRows projects={residentialProjects} />
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
