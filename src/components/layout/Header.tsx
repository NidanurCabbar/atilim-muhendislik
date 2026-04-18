'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import DrawerMenu from './DrawerMenu';

/** Returns true only for near-white solid colours (luminance > 0.85) */
function isNearWhite(rgb: string): boolean {
  const m = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return false;
  const lum = (0.299 * +m[1] + 0.587 * +m[2] + 0.114 * +m[3]) / 255;
  return lum > 0.85;
}

/**
 * Sample the element stack at a given viewport point, hiding `skip` first so
 * we see what is behind the header. Returns true if the background is white
 * with no image in the stack (safe to show dark logo).
 */
function isSolidWhiteBehind(x: number, y: number, skip: HTMLElement): boolean {
  skip.style.visibility = 'hidden';
  const stack = document.elementsFromPoint(x, y);
  skip.style.visibility = '';

  for (const el of stack) {
    // Any image/video in the stack means visually non-white → keep logo white
    if (el.tagName === 'IMG' || el.tagName === 'VIDEO' || el.tagName === 'CANVAS') {
      return false;
    }
    const bg = window.getComputedStyle(el).backgroundColor;
    // Skip fully transparent layers (gradient overlays, etc.)
    if (!bg || bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent') continue;
    // First solid colour found — is it near-white?
    return isNearWhite(bg);
  }
  return false;
}

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const logoRef  = useRef<HTMLImageElement>(null);

  const check = useCallback(() => {
    const header = headerRef.current;
    const logo   = logoRef.current;
    if (!header || !logo) return;

    const r  = logo.getBoundingClientRect();
    const cx = r.left + r.width  / 2;
    const cy = r.top  + r.height / 2;

    setOnLight(isSolidWhiteBehind(cx, cy, header));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      check();
    };
    const timer = setTimeout(check, 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', check, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', check);
    };
  }, [pathname, check]);

  return (
    <>
      <header
        ref={headerRef}
        className="px-8 py-8 md:px-14 md:py-10 flex justify-between items-center fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          backdropFilter:       scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          backgroundColor:      scrolled ? 'rgba(0,0,0,0.25)' : 'transparent',
          paddingTop:           scrolled ? '1.25rem' : undefined,
          paddingBottom:        scrolled ? '1.25rem' : undefined,
        }}
      >
        <Link href="/" className="inline-block relative h-14 w-[120px]">
          {/* Default logo — visible when not scrolled */}
          <Image
            ref={logoRef}
            src="/logo.png"
            alt="Atılım Mühendislik"
            width={120}
            height={64}
            priority
            className="absolute inset-0 h-14 w-auto object-contain"
            style={{
              filter: !scrolled && onLight ? 'brightness(0)' : 'none',
              opacity: scrolled ? 0 : 1,
              transition: 'opacity 0.4s ease, filter 0.4s ease',
            }}
          />
          {/* Scrolled logo — fades in with frosted glass navbar */}
          <Image
            src="/Atilim-Logo 2 (1).png"
            alt="Atılım Mühendislik"
            width={120}
            height={64}
            priority
            className="absolute inset-0 h-14 w-auto object-contain"
            style={{
              opacity: scrolled ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          />
        </Link>

        <div className="flex items-center gap-3">
          {/* İletişim pill button */}
          <Link
            href="/iletisim"
            className="flex items-center gap-2 px-4 md:px-5 h-9 md:h-10 rounded-full text-xs tracking-[0.2em] font-medium uppercase transition-opacity hover:opacity-80"
            style={{
              background: onLight ? '#111' : 'rgba(255,255,255,0.12)',
              color: onLight ? '#fff' : '#fff',
              backdropFilter: 'blur(8px)',
              border: onLight ? 'none' : '1px solid rgba(255,255,255,0.25)',
              transition: 'background 0.4s ease, border 0.4s ease',
            }}
          >
            İletişim
            <span className="text-sm leading-none">→</span>
          </Link>

          {/* Hamburger menu */}
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Menüyü Aç"
            className="flex items-center gap-3 px-2 h-12 rounded hover:bg-black/10"
            style={{
              color: !scrolled && onLight ? '#000' : '#fff',
              transition: 'color 0.4s ease',
            }}
          >
            <span className="text-xs tracking-[0.25em] font-light uppercase">Menü</span>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <DrawerMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
