'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

const stats = [
  { end: 30, suffix: '+', label: 'YILLIK TECRÜBE' },
  { end: 50, suffix: '+', label: 'TAMAMLANAN PROJE' },
  { end: 1000, suffix: '+', label: 'MÜŞTERİ REFERANSI' },
];

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, end, {
      duration: 3.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, end]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-white py-16 px-6 md:px-14">
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p
              className="text-4xl md:text-6xl font-bold text-red-600 mb-2"
              style={{ fontFamily: "'Clash Display', system-ui, sans-serif" }}
            >
              <CountUp end={stat.end} suffix={stat.suffix} />
            </p>
            <p className="text-[10px] md:text-xs tracking-[0.25em] text-gray-500 font-medium uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
