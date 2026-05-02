'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { heroSlides } from '@/data/projects';

const INTERVAL = 6000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % heroSlides.length),
      INTERVAL,
    );
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
    resetTimer();
  };

  const next = () => {
    setCurrent((c) => (c + 1) % heroSlides.length);
    resetTimer();
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const slide = heroSlides[current];

  return (
    <section className="relative w-full h-[100svh] min-h-[560px] overflow-hidden bg-black">
      {/* Background images */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={s.image}
            alt={s.projectName}
            fill
            className="object-cover"
            style={{ filter: 'saturate(1.55) contrast(1.08) brightness(1.05) hue-rotate(-5deg)' }}
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Warm sky tint — boosts sunset orange/pink tones */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,130,70,0.10) 0%, rgba(255,110,50,0.05) 40%, transparent 70%)',
          mixBlendMode: 'overlay',
        }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/20 to-transparent" />

      {/* Left arrow */}
      <button
        onClick={prev}
        aria-label="Önceki slayt"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-[10] w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/30 bg-black/20 text-white/70 hover:bg-black/50 hover:text-white hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
      >
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        aria-label="Sonraki slayt"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-[10] w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/30 bg-black/20 text-white/70 hover:bg-black/50 hover:text-white hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
      >
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
          <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Clickable background link — covers the full slide */}
      <Link
        href={`/projects/${slide.projectSlug}`}
        className="absolute inset-0 z-[3]"
        aria-label={`${slide.projectName} projesini görüntüle`}
        tabIndex={-1}
      />

      {/* Bottom content */}
      <div className="absolute bottom-10 left-6 right-6 md:left-10 md:right-10 z-[10]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="mb-6"
          >
            <Link href={`/projects/${slide.projectSlug}`} className="group inline-block">
              <h2 className="text-4xl md:text-6xl font-normal tracking-wide text-white leading-tight group-hover:text-white/80 transition-colors duration-300">
                {slide.tagline}{' '}
                <span className="font-bold">{slide.projectName}</span>
              </h2>
            </Link>
            <p className="font-sans mt-2 text-white/70 text-sm md:text-base max-w-lg leading-relaxed">
              {slide.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Progress lines — centered */}
        <div className="flex items-end justify-center gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                resetTimer();
              }}
              aria-label={s.projectName}
              className="relative overflow-hidden bg-white/25 cursor-pointer"
              style={{
                height: i === current ? 4 : 2,
                width: i === current ? 80 : 40,
                transition: 'width 0.4s ease, height 0.4s ease',
              }}
            >
              {i === current && (
                <span
                  key={`fill-${current}`}
                  className="absolute inset-y-0 left-0 bg-white"
                  style={{
                    animation: `progress-fill ${INTERVAL}ms linear forwards`,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
