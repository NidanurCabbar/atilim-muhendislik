import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProjectImageGrid from '@/components/project/ProjectImageGrid';
import { getProjectBySlug, forSaleProjects, projects, contactInfo } from '@/data/projects';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Proje Bulunamadı' };
  return {
    title: `${project.fullName} | Atılım Mühendislik`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const otherProjects = forSaleProjects.filter((p) => p.slug !== project.slug);

  const whatsappMsg = encodeURIComponent(
    `Merhaba, "${project.fullName}" projesi hakkında bilgi almak istiyorum.`,
  );

  const img1 = project.gallery[0] ?? project.coverImage;
  const img2 = project.gallery[1] ?? project.coverImage;
  const img3 = project.gallery[2] ?? project.coverImage;

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[100svh] min-h-[560px] bg-black">
        <Image
          src={project.coverImage}
          alt={project.fullName}
          fill
          className="object-cover"
          style={{ filter: 'saturate(1.55) contrast(1.08) brightness(1.05) hue-rotate(-5deg)' }}
          priority
          sizes="100vw"
        />
        {/* Warm sky tint */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,130,70,0.10) 0%, rgba(255,110,50,0.05) 40%, transparent 70%)',
            mixBlendMode: 'overlay',
          }}
        />
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/30 to-transparent" />

        <div className="absolute bottom-8 left-6 md:left-10 right-6 md:right-10 z-[10]">
          <h1 className="text-3xl md:text-5xl tracking-wider text-white mb-3">
            {(() => {
              const [first, ...rest] = project.fullName.split(' ');
              return (
                <>
                  <span className="font-bold">{first}</span>
                  {rest.length > 0 && (
                    <span className="font-light ml-2">{rest.join(' ')}</span>
                  )}
                </>
              );
            })()}
          </h1>
          <p className="text-white/70 text-sm leading-relaxed">
            {project.aboutProject}
          </p>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────────────────── */}
      <section className="bg-white px-4 md:px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <ProjectImageGrid
            images={[img1, img2, img3]}
            projectName={project.name}
            aboutProject={project.aboutProject}
            mapsUrl={project.mapsUrl}
            whatsappHref={`https://wa.me/${contactInfo.whatsapp}?text=${whatsappMsg}`}
            galleryImages={project.gallery}
          />

          {/* ── Diğer Projelerimiz ───────────────────────────────────── */}
          {otherProjects.length > 0 && (
            <div>
              <h2
                className="font-display text-2xl md:text-3xl font-bold tracking-wide mb-8"
              >
                Diğer Projelerimiz
              </h2>

              <div className="grid grid-cols-2 gap-8 md:gap-12 w-full">
                {otherProjects.map((other) => (
                  <div key={other.slug} className="pb-5">
                    <Link href={`/projects/${other.slug}`}>
                      <div className="relative aspect-square overflow-visible group cursor-pointer">

                        {/* Image container — clips image but not button */}
                        <div className="relative w-full h-full overflow-hidden rounded-2xl">
                          <Image
                            src={other.coverImage}
                            alt={other.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 50vw, 50vw"
                          />

                          {/* Dark gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                          {/* Project name — bottom center, above button */}
                          <div className="absolute bottom-12 left-0 right-0 flex justify-center">
                            <span
                              className="text-white text-lg md:text-2xl font-semibold tracking-widest uppercase"
                              style={{ fontFamily: "'Clash Display', system-ui, sans-serif" }}
                            >
                              {other.name}
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
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}
