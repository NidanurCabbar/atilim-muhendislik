import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProjectGallery from '@/components/project/ProjectGallery';
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

  // Other for-sale projects (excluding current)
  const otherProjects = forSaleProjects.filter((p) => p.slug !== project.slug);

  const whatsappMsg = encodeURIComponent(
    `Merhaba, "${project.fullName}" projesi hakkında bilgi almak istiyorum.`,
  );

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      {/* ── Hero Image ───────────────────────────────────────────────── */}
      <div className="relative w-full h-[55vh] min-h-[320px] bg-black">
        <Image
          src={project.coverImage}
          alt={project.fullName}
          fill
          className="object-cover opacity-90"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        {/* Project name over hero */}
        <div className="absolute bottom-8 left-6 md:left-10">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wider text-white">
            {project.fullName}
          </h1>
        </div>
      </div>

      {/* ── White Content ─────────────────────────────────────────────── */}
      <section className="bg-white px-4 md:px-8 py-12">
        <div className="max-w-5xl mx-auto">

          {/* Description + Map+Gallery two-column */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">

            {/* Left: description + CTA */}
            <div>
              <p className="text-gray-700 text-sm leading-relaxed mb-8 max-w-md">
                {project.description}
              </p>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="border border-gray-100 p-4">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Konum</p>
                  <p className="text-sm font-medium">{project.location}</p>
                </div>
                <div className="border border-gray-100 p-4">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Alan</p>
                  <p className="text-sm font-medium">{project.area}</p>
                </div>
                <div className="border border-gray-100 p-4">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Yıl</p>
                  <p className="text-sm font-medium">{project.year}</p>
                </div>
                <div className="border border-gray-100 p-4">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Durum</p>
                  <p className="text-sm font-medium">
                    {project.status === 'for-sale' ? 'Satışta' : 'Tamamlandı'}
                  </p>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-black text-white text-xs font-semibold tracking-widest uppercase hover:bg-gray-800 transition-colors"
                >
                  Konumu Gör
                </a>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 border border-black text-black text-xs font-semibold tracking-widest uppercase hover:bg-black hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href={`tel:${contactInfo.phone1.replace(/\s/g, '')}`}
                  className="px-6 py-2.5 border border-gray-300 text-black text-xs font-semibold tracking-widest uppercase hover:bg-gray-100 transition-colors"
                >
                  Ara
                </a>
              </div>
            </div>

            {/* Right: Map button + gallery grid */}
            <div className="space-y-3">
              {/* Map CTA box */}
              <a
                href={project.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full h-32 md:h-36 bg-gray-100 border border-gray-200 hover:bg-gray-200 transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#333"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm font-semibold tracking-widest uppercase text-gray-700 group-hover:text-black transition-colors">
                  Haritada Gör
                </span>
              </a>

              {/* Gallery thumbnails — 2 columns */}
              {project.gallery.length > 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {project.gallery.slice(0, 4).map((img, i) => (
                    <ProjectGallery
                      key={i}
                      images={project.gallery}
                      startIndex={i}
                      thumb={img}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── Gallery full section ─────────────────────────────────── */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-black inline-block" />
              <h2 className="text-base font-semibold tracking-widest uppercase">Galeri</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xl">
              {project.aboutProject}
            </p>

            {project.gallery.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.gallery.map((img, i) => (
                  <ProjectGallery
                    key={i}
                    images={project.gallery}
                    startIndex={i}
                    thumb={img}
                  />
                ))}
              </div>
            )}
          </div>

          {/* ── Diğer Projelerimiz ───────────────────────────────────── */}
          {otherProjects.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 rounded-full bg-black inline-block" />
                <h2 className="text-base font-semibold tracking-widest uppercase">
                  Diğer Projelerimiz
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {otherProjects.map((other) => (
                  <Link key={other.slug} href={`/projects/${other.slug}`}>
                    <div className="group cursor-pointer">
                      <div className="relative aspect-[4/3] overflow-hidden bg-gray-200 mb-2">
                        <Image
                          src={other.coverImage}
                          alt={other.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-3 left-3">
                          <span className="text-white text-sm font-semibold tracking-wider">
                            {other.name}
                          </span>
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
