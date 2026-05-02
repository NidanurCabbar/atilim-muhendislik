import Image from 'next/image';
import Link from 'next/link';
import { contactInfo } from '@/data/projects';

const sitemap = [
  { label: 'Ana Sayfa',           href: '/'                    },
  { label: 'Projeler',            href: '/#projeler'           },
  { label: 'Tamamlanan Projeler', href: '/tamamlanan-projeler' },
  { label: 'Hakkımızda',          href: '/hakkimizda'          },
  { label: 'İletişim',            href: '/iletisim'            },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 pt-10 pb-8 grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-8 md:gap-14">

        {/* Left — brand */}
        <div className="max-w-sm">
          <Image
            src="/logo.png"
            alt="Atılım Mühendislik"
            width={150}
            height={60}
            className="h-14 w-auto object-contain brightness-0 invert mb-4"
          />
          <h2
            className="text-2xl md:text-3xl font-light text-white leading-tight mb-3"
            style={{ fontFamily: "'Clash Display', system-ui, sans-serif" }}
          >
            30 Yılın<br /><span className="font-bold">Mirası</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            1995'ten bu yana kalite, güven ve mühendislik disipliniyle büyük ölçekli projeler inşa ediyoruz.
          </p>
        </div>

        {/* Sitemap */}
        <div>
          <p className="text-[10px] tracking-[0.25em] text-white/30 uppercase font-semibold mb-4">
            Site Haritası
          </p>
          <ul className="space-y-2.5">
            {sitemap.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <p className="text-[10px] tracking-[0.25em] text-white/30 uppercase font-semibold mb-4">
            Sosyal
          </p>
          <ul className="space-y-2.5">
            <li>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </li>
            <li>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[10px] tracking-[0.25em] text-white/30 uppercase font-semibold mb-4">
            İletişim
          </p>
          <div className="space-y-2.5 text-sm text-gray-400">
            <p className="leading-relaxed">{contactInfo.addressTR}</p>
            <a
              href={`tel:${contactInfo.phone1.replace(/[\s()]/g, '')}`}
              className="block hover:text-white transition-colors duration-200"
            >
              {contactInfo.phone1}
            </a>
            <a
              href={`tel:${contactInfo.phone2.replace(/[\s()]/g, '')}`}
              className="block hover:text-white transition-colors duration-200"
            >
              {contactInfo.phone2}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="block hover:text-white transition-colors duration-200"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>

      </div>

      {/* ── Red divider ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        <div className="h-px bg-red-600" />
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-gray-600 text-xs tracking-wide">
          © {new Date().getFullYear()} {contactInfo.companyName}. Tüm hakları saklıdır.
        </span>
        <div className="flex items-center gap-6 text-xs text-gray-600">
          <a href="#" className="hover:text-white transition-colors duration-200">Gizlilik Politikası</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Hizmet Şartları</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Çerez Politikası</a>
        </div>
      </div>
    </footer>
  );
}
