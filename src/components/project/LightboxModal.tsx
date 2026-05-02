'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { lockScroll, unlockScroll } from '@/utils/scrollLock';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  images: string[];
  labels?: string[];
  initialIndex?: number;
  onClose: () => void;
}

export default function LightboxModal({
  images,
  labels,
  initialIndex = 0,
  onClose,
}: LightboxModalProps) {
  const [current, setCurrent] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    lockScroll();
    closeButtonRef.current?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowLeft')   prev();
      if (e.key === 'ArrowRight')  next();
    };
    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
      unlockScroll();
    };
  }, [onClose, prev, next]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Galeri"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black flex flex-col"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            {labels?.[current] && (
              <span className="text-[10px] tracking-[0.25em] uppercase text-white/40 font-medium">
                {labels[current]}
              </span>
            )}
            <span className="text-white/50 text-sm">
              {current + 1} / {images.length}
            </span>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10"
            aria-label="Kapat"
          >
            <X size={22} />
          </button>
        </div>

        {/* Main image */}
        <div className="flex-1 relative flex items-center justify-center overflow-hidden">
          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-4 z-10 p-3 bg-black/50 hover:bg-brand-gold text-white hover:text-brand-dark rounded-full transition-colors"
            aria-label="Önceki"
          >
            <ChevronLeft size={20} />
          </button>

          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute inset-4 sm:inset-8"
            >
              <Image
                src={images[current]}
                alt={`Görsel ${current + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-4 z-10 p-3 bg-black/50 hover:bg-brand-gold text-white hover:text-brand-dark rounded-full transition-colors"
            aria-label="Sonraki"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 px-6 py-4 overflow-x-auto scrollbar-hide border-t border-white/10">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`relative shrink-0 w-16 h-16 overflow-hidden rounded-sm transition-all ${
                  i === current
                    ? 'ring-2 ring-brand-gold opacity-100'
                    : 'opacity-40 hover:opacity-70'
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
