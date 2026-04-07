'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { heroSlides } from '@/data/projects';

const INTERVAL = 6000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % heroSlides.length),
      INTERVAL,
    );
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      {/* Bottom content */}
      <div className="absolute bottom-10 left-6 right-6 md:left-10 md:right-10 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="mb-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-wide text-white leading-tight">
              {slide.tagline}{' '}
              <span className="text-white">{slide.projectName}</span>
            </h2>
          </motion.div>
        </AnimatePresence>

        {/* Progress lines */}
        <div className="flex items-end gap-2">
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
