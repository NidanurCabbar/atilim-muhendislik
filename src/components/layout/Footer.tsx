import Image from 'next/image';
import { contactInfo } from '@/data/projects';

export default function Footer() {
  return (
    <>
      {/* ── WhatsApp / CTA Banner ──────────────────────────────────────── */}
      <section className="bg-white px-4 md:px-8 py-10 border-t border-gray-100">
        <div className="max-w-5xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-black text-base md:text-lg font-light">
            Ayrıcalıklı bir{' '}
            <span className="font-semibold">🏠 yaşam</span>{' '}
            sizi bekliyor
          </p>

          <div className="flex gap-3">
            {/* Telefon */}
            <a
              href={`tel:${contactInfo.phone1.replace(/\s/g, '')}`}
              className="flex items-center gap-2 px-5 py-2.5 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.44 2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.94a16 16 0 0 0 6.15 6.15l.62-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Telefon
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Merhaba, projeleriniz hakkında bilgi almak istiyorum.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-sm font-medium hover:bg-[#1dbe5b] transition-colors"
            >
              {/* WhatsApp icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Dark Footer ────────────────────────────────────────────────── */}
      <footer id="contact" className="bg-black px-4 md:px-8 pt-14 pb-8">
        <div className="max-w-5xl mx-auto">

          {/* Logo + tagline */}
          <div className="mb-10">
            <Image
              src="/logo.png"
              alt="Atılım Mühendislik"
              width={100}
              height={40}
              className="h-10 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-gray-500 text-xs tracking-widest uppercase">Changing the</p>
            <p className="text-white text-3xl font-light mt-0.5">Dynamics</p>
          </div>

          {/* Divider line */}
          <div className="h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent mb-10" />

          {/* 3-column links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
            <div>
              <h3 className="text-[10px] text-white/40 tracking-[0.25em] uppercase mb-4">
                Projeler
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/#projects" className="hover:text-white transition">
                    Satıştaki Projeler
                  </a>
                </li>
                <li>
                  <a href="/kurumsal" className="hover:text-white transition">
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a href="/#gallery" className="hover:text-white transition">
                    Galeri
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] text-white/40 tracking-[0.25em] uppercase mb-4">
                İletişim
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a
                    href={`tel:${contactInfo.phone1.replace(/\s/g, '')}`}
                    className="hover:text-white transition"
                  >
                    {contactInfo.phone1}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contactInfo.phone2.replace(/\s/g, '')}`}
                    className="hover:text-white transition"
                  >
                    {contactInfo.phone2}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-white transition"
                  >
                    {contactInfo.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] text-white/40 tracking-[0.25em] uppercase mb-4">
                Adres
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {contactInfo.addressTR}
              </p>
            </div>
          </div>

          {/* Red accent line */}
          <div className="h-[2px] w-full bg-gradient-to-r from-red-600 via-red-500 to-transparent mb-6" />

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-gray-600 text-xs">
            <span>© {new Date().getFullYear()} {contactInfo.companyName}. Tüm hakları saklıdır.</span>
            <div className="flex gap-4">
              <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                Instagram
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
