'use client';

import { useState } from 'react';
import Image from 'next/image';
import LightboxModal from './LightboxModal';

interface ProjectImageGridProps {
  images: string[];
  projectName: string;
  aboutProject: string;
  mapsUrl: string;
  whatsappHref: string;
  galleryImages: string[];
}

// ── Row heights for the bento grid ────────────────────────────────────────────
const ROW_TOP = 280; // px — map / İç Tasarım row
const ROW_BOT = 260; // px — floor plan / Galeri text row
// Peyzaj spans both rows: ROW_TOP + gap(12) + ROW_BOT = 552px total

// ── Small badge overlaid on an image (bottom-right) ───────────────────────────
function Badge({ text }: { text: string }) {
  return (
    <span
      className={
        'absolute bottom-2.5 right-2.5 z-10 ' +
        'bg-black/75 text-white font-sans ' +
        'text-[9px] font-medium tracking-[0.2em] uppercase ' +
        'px-3 py-1.5 rounded-md pointer-events-none'
      }
    >
      {text}
    </span>
  );
}

// ── Shared image cell styles ───────────────────────────────────────────────────
const CELL = 'relative overflow-hidden rounded-2xl bg-gray-100';

// ── Component ─────────────────────────────────────────────────────────────────
export default function ProjectImageGrid({
  images,
  projectName,
  aboutProject,
  mapsUrl,
  whatsappHref,
  galleryImages,
}: ProjectImageGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const open  = (i: number) => setLightboxIndex(i);
  const close = ()          => setLightboxIndex(null);

  const [img1, img2, img3] = images;

  const embedUrl =
    mapsUrl.replace('https://maps.google.com/?', 'https://maps.google.com/maps?') +
    '&output=embed&z=13';

  // Map iframe: extend beyond container bounds so Google chrome is clipped
  const iframeStyle: React.CSSProperties = {
    position: 'absolute',
    top: -50, left: -15,
    width:  'calc(100% + 30px)',
    height: 'calc(100% + 90px)',
    border: 0,
    pointerEvents: 'none',
  };

  return (
    <>
      {/* ── Desktop bento grid (md+) ─────────────────────────────────────── */}
      <div
        className="hidden md:grid gap-3 mb-14"
        style={{
          gridTemplateColumns: '1fr 1.5fr 1.7fr',
          gridTemplateRows: `${ROW_TOP}px ${ROW_BOT}px`,
          gridTemplateAreas: `
            "map     peyzaj  ictasarim"
            "katplani peyzaj  galeri"
          `,
        }}
      >
        {/* Map */}
        <div className={CELL} style={{ gridArea: 'map' }}>
          <iframe src={embedUrl} title={`${projectName} konumu`} loading="lazy" style={iframeStyle} />
          {/* Transparent overlay — clicking opens Google Maps */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label="Google Maps'te aç"
          />
          <Badge text="LOKASYON" />
        </div>

        {/* Peyzaj — spans both rows via grid-area */}
        <div
          className={`${CELL} cursor-zoom-in`}
          style={{ gridArea: 'peyzaj' }}
          onClick={() => open(0)}
        >
          <Image
            src={img1}
            alt={`${projectName} peyzaj`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="35vw"
          />
          <Badge text="PEYZAJ" />
        </div>

        {/* İç Tasarım */}
        <div
          className={`${CELL} cursor-zoom-in`}
          style={{ gridArea: 'ictasarim' }}
          onClick={() => open(2)}
        >
          <Image
            src={img3}
            alt={`${projectName} iç tasarım`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="35vw"
          />
          <Badge text="İÇ TASARIM" />
        </div>

        {/* Floor plan */}
        <div
          className={`${CELL} cursor-zoom-in`}
          style={{ gridArea: 'katplani' }}
          onClick={() => open(1)}
        >
          <Image
            src={img2}
            alt={`${projectName} kat planı`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="20vw"
          />
          <Badge text="KAT PLANI" />
        </div>

        {/* Galeri text */}
        <div
          className="flex flex-col justify-between px-1 py-2"
          style={{ gridArea: 'galeri' }}
        >
          <div>
            <h2 className="font-sans text-4xl font-bold text-black mb-3 leading-tight tracking-tight">
              Galeri
            </h2>
            <p className="font-sans text-gray-500 text-sm leading-[1.75] tracking-wide line-clamp-5">
              {aboutProject}
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans inline-flex items-center gap-1.5 text-sm font-semibold group w-fit"
            style={{ color: '#c0392b' }}
          >
            Galeriyi İncele
            <span className="text-base leading-none transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      {/* ── Mobile stacked layout ─────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 md:hidden mb-10">

        {/* Map */}
        <div className={CELL} style={{ height: 200 }}>
          <iframe src={embedUrl} title={`${projectName} konumu`} loading="lazy" style={iframeStyle} />
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" />
          <Badge text="LOKASYON" />
        </div>

        {/* Peyzaj */}
        <div className={`${CELL} aspect-[16/9] cursor-zoom-in`} onClick={() => open(0)}>
          <Image src={img1} alt="Peyzaj" fill className="object-cover" sizes="100vw" />
          <Badge text="PEYZAJ" />
        </div>

        {/* Floor plan + İç Tasarım side by side */}
        <div className="grid grid-cols-2 gap-3">
          <div className={`${CELL} aspect-square cursor-zoom-in`} onClick={() => open(1)}>
            <Image src={img2} alt="Kat Planı" fill className="object-cover" sizes="50vw" />
            <Badge text="KAT PLANI" />
          </div>
          <div className={`${CELL} aspect-square cursor-zoom-in`} onClick={() => open(2)}>
            <Image src={img3} alt="İç Tasarım" fill className="object-cover" sizes="50vw" />
            <Badge text="İÇ TASARIM" />
          </div>
        </div>

        {/* Galeri text */}
        <div className="pt-2">
          <h2 className="font-sans text-3xl font-bold text-black mb-2 leading-tight tracking-tight">
            Galeri
          </h2>
          <p className="font-sans text-gray-500 text-sm leading-[1.75] tracking-wide mb-4">
            {aboutProject}
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: '#c0392b' }}
          >
            Galeriyi İncele <span className="text-base leading-none">→</span>
          </a>
        </div>
      </div>

      {lightboxIndex !== null && (
        <LightboxModal
          images={galleryImages}
          initialIndex={Math.min(lightboxIndex, galleryImages.length - 1)}
          onClose={close}
        />
      )}
    </>
  );
}
