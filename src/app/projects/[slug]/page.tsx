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
  const img3 = project.gallery[2] ?? project.gallery[0] ?? project.coverImage;
  const img4 = project.gallery[3] ?? project.gallery[2] ?? project.coverImage;

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[70vh] min-h-[440px] bg-black">
        <Image
          src={project.coverImage}
          alt={project.fullName}
          fill
          className="object-cover opacity-90"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20" />

        <div className="absolute bottom-8 left-6 md:left-10 right-6 md:right-10">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wider text-white mb-3">
            {project.fullName}
          </h1>
          <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────────────────── */}
      <section className="bg-white px-4 md:px-8 py-10">
        <div className="max-w-5xl mx-auto">

          {/* Two-column image layout — tıklanabilir galeri */}
          <ProjectImageGrid
            images={[img1, img2, img3, img4]}
            projectName={project.name}
            aboutProject={project.aboutProject}
            mapsUrl={project.mapsUrl}
            whatsappHref={`https://wa.me/${contactInfo.whatsapp}?text=${whatsappMsg}`}
            galleryImages={project.gallery}
          />

          {/* ── Diğer Projelerimiz ───────────────────────────────────── */}
          {otherProjects.length > 0 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide mb-8">
                Diğer Projelerimiz
              </h2>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {otherProjects.map((other) => (
                  <Link key={other.slug} href={`/projects/${other.slug}`}>
                    <div className="relative aspect-[4/3] overflow-hidden group cursor-pointer bg-gray-200">
                      <Image
                        src={other.coverImage}
                        alt={other.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Project name — bottom left */}
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white text-sm md:text-base font-semibold tracking-wider">
                          {other.name}
                        </span>
                      </div>

                      {/* Arrow button — bottom center */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <div className="w-11 h-11 bg-black flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
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
