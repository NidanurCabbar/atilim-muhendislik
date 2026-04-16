'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let raf: number;
    let mx = -100, my = -100; // off-screen until first move
    let rx = -100, ry = -100; // ring lags behind

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    };

    const tick = () => {
      // ring follows with spring-like lerp
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(tick);
    };

    const onEnter = (e: Event) => {
      const t = e.target as HTMLElement;
      if (
        t.closest('a, button, [data-cursor-expand], .cursor-zoom-in') ||
        t.tagName === 'A' || t.tagName === 'BUTTON'
      ) setExpanded(true);
    };
    const onLeave = () => setExpanded(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout',  onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout',  onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Small filled dot — snaps instantly to cursor */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[99999] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      >
        <div
          className="rounded-full bg-white mix-blend-difference transition-all duration-200"
          style={{
            width:  expanded ? 10 : 6,
            height: expanded ? 10 : 6,
          }}
        />
      </div>

      {/* Expanding ring — lags behind for depth */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[99998] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      >
        <div
          className="rounded-full border border-white mix-blend-difference transition-all duration-300"
          style={{
            width:   expanded ? 48 : 28,
            height:  expanded ? 48 : 28,
            opacity: expanded ? 1  : 0.6,
          }}
        />
      </div>
    </>
  );
}
