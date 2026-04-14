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

// ── Height constants that keep Col 1 and Col 2 equal in total height ──────────
// Col 1 total = C1H + gap + BTN + gap + C1H + gap + BTN = 2×220 + 3×12 + 2×36 = 548
// Col 2 total = C2H + gap + BTN                          =   500 + 12  +  36  = 548 ✓
const C1H = 220; // each stacked image in column 1
const C2H = 500; // single tall image in column 2
const BTN = 36;  // h-9 = 36px for bottom label buttons
const GAP = 12;  // gap-3 = 12px

// Suppress unused-variable warnings (values used in comments/docs only)
void BTN; void GAP;

// ── Sub-components ────────────────────────────────────────────────────────────

/** Dark label button rendered below (outside) an image card */
function BottomBtn({
  label,
  onClick,
  href,
}: {
  label: string;
  onClick?: () => void;
  href?: string;
}) {
  const cls =
    'flex items-center justify-center w-full h-9 bg-[#0d0d0d] text-white ' +
    'text-[9px] tracking-[0.3em] uppercase rounded-md ' +
    'hover:bg-[#1e1e1e] transition-colors duration-200 cursor-pointer';

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {label}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={cls}>
      {label}
    </button>
  );
}

/** Dark badge overlaid on an image (used for İÇ TASARIM) */
function Badge({ text }: { text: string }) {
  return (
    <span className="absolute bottom-3 right-3 bg-black/80 text-white text-[9px] tracking-[0.28em] uppercase px-4 py-2 rounded-md pointer-events-none z-10">
      {text}
    </span>
  );
}

/** Rounded image cell with overflow:hidden */
function ImgCell({
  height,
  className = '',
  style,
  children,
  onClick,
}: {
  height: number | string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-[#1a1a1a] ${className}`}
      style={{ height, ...style }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
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

  // Add z=13 for a neighbourhood-level zoom
  const embedUrl =
    mapsUrl.replace('https://maps.google.com/?', 'https://maps.google.com/maps?') +
    '&output=embed&z=13';

  return (
    <>
      <div className="grid md:grid-cols-[1fr_1.5fr_1.7fr] gap-3 mb-14 items-start">

        {/* ── Col 1: map + floor plan, each with a label below ── */}
        <div className="flex flex-col gap-3">

          {/* Map — iframe extended beyond container to hide chrome */}
          <ImgCell height={C1H}>
            <iframe
              src={embedUrl}
              title={`${projectName} konumu`}
              loading="lazy"
              className="absolute border-0 pointer-events-none"
              style={{
                top: -50,
                left: -15,
                width: 'calc(100% + 30px)',
                height: 'calc(100% + 90px)',
              }}
            />
            {/* Clickable overlay that links to Google Maps */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label="Google Maps'te aç"
            />
          </ImgCell>
          <BottomBtn label="LOKASYON" href={mapsUrl} />

          {/* Floor plan */}
          <ImgCell height={C1H} className="cursor-zoom-in" onClick={() => open(1)}>
            <Image
              src={img2}
              alt={`${projectName} kat planı`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="20vw"
            />
          </ImgCell>
          <BottomBtn label="KAT PLANI" onClick={() => open(1)} />
        </div>

        {/* ── Col 2: tall exterior / landscape ── */}
        <div className="flex flex-col gap-3">
          <ImgCell height={C2H} className="cursor-zoom-in" onClick={() => open(0)}>
            <Image
              src={img1}
              alt={`${projectName} peyzaj`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="35vw"
            />
          </ImgCell>
          <BottomBtn label="PEYZAJ" onClick={() => open(0)} />
        </div>

        {/* ── Col 3: luxury interior + Galeri text ── */}
        <div className="flex flex-col gap-4">

          {/* Interior image — İÇ TASARIM badge stays overlaid */}
          <ImgCell height={C1H} className="cursor-zoom-in" onClick={() => open(2)}>
            <Image
              src={img3}
              alt={`${projectName} iç tasarım`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="35vw"
            />
            <Badge text="İÇ TASARIM" />
          </ImgCell>

          {/* Galeri text section */}
          <div className="flex flex-col gap-3 pt-1">
            <h2
              className="text-[2.4rem] font-bold leading-tight text-black"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Galeri
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-6">
              {aboutProject}
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold group w-fit mt-1"
              style={{ color: '#c0392b' }}
            >
              Galeriyi İncele
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
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
