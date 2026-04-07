'use client';

import { useState } from 'react';
import Image from 'next/image';
import LightboxModal from './LightboxModal';

interface ProjectImageGridProps {
  images: string[];        // [img1, img2, img3, img4]
  projectName: string;
  aboutProject: string;
  mapsUrl: string;
  whatsappHref: string;
  galleryImages: string[]; // tüm galeri (LightboxModal için)
}

export default function ProjectImageGrid({
  images,
  projectName,
  aboutProject,
  mapsUrl,
  whatsappHref,
  galleryImages,
}: ProjectImageGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);

  const [img1, img2, img3, img4] = images;

  return (
    <>
      <div className="grid md:grid-cols-[55%_45%] gap-4 mb-14">

        {/* Left column: 1 large + 2 small + buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => open(0)}
            className="relative aspect-[4/3] overflow-hidden bg-gray-200 cursor-zoom-in"
          >
            <Image
              src={img1}
              alt={`${projectName} - 1`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="55vw"
            />
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => open(1)}
              className="relative aspect-[4/3] overflow-hidden bg-gray-200 cursor-zoom-in"
            >
              <Image
                src={img2}
                alt={`${projectName} - 2`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="27vw"
              />
            </button>
            <button
              onClick={() => open(2)}
              className="relative aspect-[4/3] overflow-hidden bg-gray-200 cursor-zoom-in"
            >
              <Image
                src={img3}
                alt={`${projectName} - 3`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="27vw"
              />
            </button>
          </div>

          <div className="flex gap-3">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-black text-white text-xs font-semibold tracking-widest uppercase hover:bg-gray-800 transition-colors"
            >
              Konumu Gör
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-black text-black text-xs font-semibold tracking-widest uppercase hover:bg-black hover:text-white transition-colors"
            >
              Bilgi Al
            </a>
          </div>
        </div>

        {/* Right column: tall image + gallery text */}
        <div className="flex flex-col gap-5">
          <button
            onClick={() => open(3)}
            className="relative aspect-[3/4] overflow-hidden bg-gray-200 cursor-zoom-in"
          >
            <Image
              src={img4}
              alt={`${projectName} - 4`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="45vw"
            />
          </button>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Galeri
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {aboutProject}
            </p>
            <button
              onClick={() => open(0)}
              className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-500 transition-colors group"
            >
              Galeri İçin Tıkla
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
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
