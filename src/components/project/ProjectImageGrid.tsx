'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
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

// ── Notch geometry (px) ───────────────────────────────────────────────────────
const OUTER_R = 12;  // outer image card corner radius
const NOTCH_W = 156; // notch width  — badge (~132px) + 12px gap each side
const NOTCH_H = 60;  // notch height — badge (36px) + 12px gap each side
const NOTCH_R = 16;  // corner radius at ALL THREE notch transition points

// Build an SVG mask that is a rounded-rect with a notch carved from bottom-right.
// Three corners on the notch all use NOTCH_R:
//   • top-right convex  (right image edge curves left into notch)
//   • top-left concave  (notch roof curves down — the concave one)
//   • bottom-left convex (notch left wall curves right to image bottom)
function buildMaskUrl(W: number, H: number): string {
  const R = OUTER_R, nW = NOTCH_W, nH = NOTCH_H, nR = NOTCH_R;
  const d = [
    `M ${R} 0`,
    `L ${W - R} 0 Q ${W} 0 ${W} ${R}`,                           // top-right outer corner
    `L ${W} ${H - nH - nR}`,                                      // right edge → notch start
    `Q ${W} ${H - nH} ${W - nR} ${H - nH}`,                      // ① top-right convex corner
    `L ${W - nW + nR} ${H - nH}`,                                 // notch top edge
    `Q ${W - nW} ${H - nH} ${W - nW} ${H - nH + nR}`,            // ② top-left concave corner
    `L ${W - nW} ${H - R}`,                                       // notch left wall
    `Q ${W - nW} ${H} ${W - nW - nR} ${H}`,                      // ③ bottom-left convex corner
    `L ${R} ${H} Q 0 ${H} 0 ${H - R}`,                           // bottom-left outer corner
    `L 0 ${R} Q 0 0 ${R} 0 Z`,                                   // left edge + top-left corner
  ].join(' ');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><path d="${d}" fill="black"/></svg>`;
  return `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}")`;
}

// ── Row heights ───────────────────────────────────────────────────────────────
const ROW_TOP = 310;
const ROW_BOT = 280;

// ── ImageCell — applies the SVG mask and renders badge outside the mask ───────
// The masked inner div clips the image (including corner rounding + notch).
// The badge is a sibling, outside the mask, visible in the notch area.
interface ImageCellProps {
  badgeText: string;
  gridArea?: string;
  onClick?: () => void;
  href?: string;
  hrefLabel?: string;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

function ImageCell({
  badgeText, gridArea, onClick, href, hrefLabel, className, style: extraStyle, children,
}: ImageCellProps) {
  const maskRef = useRef<HTMLDivElement>(null);
  const [maskUrl, setMaskUrl] = useState('');

  useEffect(() => {
    const el = maskRef.current;
    if (!el) return;
    const update = () => {
      const { width: W, height: H } = el.getBoundingClientRect();
      if (W > 0 && H > 0) setMaskUrl(buildMaskUrl(Math.round(W), Math.round(H)));
    };
    const ro = new ResizeObserver(update);
    ro.observe(el);
    update();
    return () => ro.disconnect();
  }, []);

  return (
    <div
      className={`relative ${onClick ? 'cursor-zoom-in' : ''} ${className ?? ''}`}
      style={{ gridArea, ...extraStyle }}
      onClick={onClick}
    >
      {/* ── Masked layer: image is clipped here (corners + notch) ── */}
      <div
        ref={maskRef}
        className="absolute inset-0 overflow-hidden rounded-xl"
        style={
          maskUrl
            ? {
                WebkitMaskImage: maskUrl,
                maskImage: maskUrl,
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
              }
            : undefined
        }
      >
        {children}
      </div>

      {/* ── Map link overlay (pointer-events cover entire cell) ── */}
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20"
          aria-label={hrefLabel}
        />
      )}

      {/* ── Badge — outside mask, centered within the notch area ── */}
      <div
        className="absolute z-30 pointer-events-none flex items-center justify-center"
        style={{
          bottom: (NOTCH_H - 36) / 2,  // 12px — centered vertically
          right:  0,
          width:  NOTCH_W,
          height: 36,
        }}
      >
        <span
          className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-white
            flex items-center justify-center"
          style={{
            height:       36,
            padding:      '0 16px',
            borderRadius: 8,
            background:   '#1a1a1a',
            whiteSpace:   'nowrap',
          }}
        >
          {badgeText}
        </span>
      </div>
    </div>
  );
}

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
    '&output=embed&z=14';

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
        className="hidden md:grid gap-2 mb-14"
        style={{
          gridTemplateColumns: '1fr 1fr 1.1fr',
          gridTemplateRows: `${ROW_TOP}px ${ROW_BOT}px`,
          gridTemplateAreas: `
            "map      peyzaj  ictasarim"
            "katplani peyzaj  galeri"
          `,
        }}
      >
        {/* LOKASYON */}
        <ImageCell
          badgeText="LOKASYON"
          gridArea="map"
          href={mapsUrl}
          hrefLabel="Google Maps'te aç"
        >
          <iframe src={embedUrl} title={`${projectName} konumu`} loading="lazy" style={iframeStyle} />
        </ImageCell>

        {/* PEYZAJ — spans both rows */}
        <ImageCell badgeText="PEYZAJ" gridArea="peyzaj" onClick={() => open(0)}>
          <Image
            src={img1}
            alt={`${projectName} peyzaj`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="30vw"
          />
        </ImageCell>

        {/* İÇ TASARIM */}
        <ImageCell badgeText="İÇ TASARIM" gridArea="ictasarim" onClick={() => open(2)}>
          <Image
            src={img3}
            alt={`${projectName} iç tasarım`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="28vw"
          />
        </ImageCell>

        {/* KAT PLANI */}
        <ImageCell badgeText="KAT PLANI" gridArea="katplani" onClick={() => open(1)}>
          <Image
            src={img2}
            alt={`${projectName} kat planı`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="22vw"
          />
        </ImageCell>

        {/* Galeri text */}
        <div
          className="flex flex-col justify-between px-2 py-1 overflow-hidden"
          style={{ gridArea: 'galeri' }}
        >
          <div className="flex flex-col gap-2 min-h-0 overflow-hidden">
            <h2 className="font-display text-4xl font-bold text-black leading-tight tracking-tight shrink-0">
              Galeri
            </h2>
            <p className="font-sans text-gray-500 text-xs leading-relaxed overflow-hidden">
              {aboutProject}
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans inline-flex items-center gap-1.5 text-sm font-semibold group w-fit shrink-0 mt-2"
            style={{ color: '#c0392b' }}
          >
            Galeriyi İncele
            <span className="text-base leading-none transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* ── Mobile stacked layout ─────────────────────────────────────────── */}
      <div className="flex flex-col gap-2 md:hidden mb-10">

        <ImageCell badgeText="LOKASYON" href={mapsUrl} hrefLabel="Google Maps'te aç" style={{ height: 190 }}>
          <iframe src={embedUrl} title={`${projectName} konumu`} loading="lazy" style={iframeStyle} />
        </ImageCell>

        <ImageCell badgeText="PEYZAJ" onClick={() => open(0)} className="aspect-[16/9]">
          <Image src={img1} alt="Peyzaj" fill className="object-cover" sizes="100vw" />
        </ImageCell>

        <div className="grid grid-cols-2 gap-2">
          <ImageCell badgeText="KAT PLANI" onClick={() => open(1)} className="aspect-square">
            <Image src={img2} alt="Kat Planı" fill className="object-cover" sizes="50vw" />
          </ImageCell>
          <ImageCell badgeText="İÇ TASARIM" onClick={() => open(2)} className="aspect-square">
            <Image src={img3} alt="İç Tasarım" fill className="object-cover" sizes="50vw" />
          </ImageCell>
        </div>

        <div className="pt-2 flex flex-col gap-2">
          <h2 className="font-display text-3xl font-bold text-black leading-tight tracking-tight">Galeri</h2>
          <p className="font-sans text-gray-500 text-sm leading-relaxed">{aboutProject}</p>
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
