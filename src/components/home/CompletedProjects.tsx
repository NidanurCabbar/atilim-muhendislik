import Image from 'next/image';
import Link from 'next/link';

export default function CompletedProjects() {
  return (
    <section className="bg-white px-4 md:px-8 pb-14">
      <Link href="/tamamlanan-projeler" className="block group">
        <div className="relative max-w-6xl mx-auto h-[280px] overflow-hidden rounded-2xl bg-black cursor-pointer">

          {/* Background image */}
          <Image
            src="/images/projects/esenboga-cover.png"
            alt="Tamamlanmış Projeler"
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 group-hover:saturate-150"
            sizes="(max-width: 768px) 100vw, 1152px"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 group-hover:from-black/70 transition-all duration-500" />

          {/* Left content */}
          <div className="absolute inset-0 flex items-center justify-between px-8 md:px-14">
            <div>
              <p className="text-[10px] tracking-[0.35em] text-white/40 uppercase font-semibold mb-3 group-hover:text-white/60 transition-colors duration-500">
                Referanslarımız
              </p>
              <h2
                className="text-3xl md:text-4xl font-light text-white leading-tight tracking-wide"
                style={{ fontFamily: "'Clash Display', system-ui, sans-serif" }}
              >
                Tamamlanmış <span className="font-bold">Projeler</span>
              </h2>
              <p
                className="text-sm text-white/50 mt-0 max-h-0 opacity-0 overflow-hidden
                           group-hover:max-h-[2rem] group-hover:opacity-100 group-hover:mt-2
                           transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              >
                Tamamladığımız büyük ölçekli projeleri keşfedin
              </p>
            </div>

            {/* Right — arrow button */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <span
                className="text-[10px] tracking-[0.25em] text-white uppercase opacity-0 translate-x-2
                           group-hover:opacity-100 group-hover:translate-x-0
                           transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              >
                Tümünü Gör
              </span>
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </Link>
    </section>
  );
}
