import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StatsCounter from '@/components/hakkimizda/StatsCounter';

export const metadata = {
  title: 'Hakkımızda | Atılım Mühendislik',
  description: '1995 yılında kurulan Atılım Müteahhitlik, çeyrek asrı aşan tecrübesiyle sektörde güvenin simgesi.',
};

const team = [
  { name: 'Talatcan', surname: 'Özerson', role: 'Proje Yöneticisi', photo: '/team/talatcan.png' },
  { name: 'Zafer', surname: 'Özerson', role: 'Kurucu & Genel Müdür', photo: '/team/zafer.png' },
  { name: 'Eren Erdoğan', surname: 'Güven', role: 'Proje Mühendisi', photo: '/team/eren.png' },
];

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      {/* ── Hero ── */}
      <section className="relative w-full h-[100svh] min-h-[560px] bg-black overflow-hidden">
        <Image
          src="/images/hero/hakkımızdabanner.png"
          alt="Atılım Mühendislik"
          fill
          className="object-cover"
          style={{ objectPosition: '75% center', filter: 'saturate(1.4) brightness(1.08)' }}
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 30%, rgba(0,0,0,0.4) 55%, transparent 90%)' }}
        />

        <div className="absolute inset-0 z-10 flex items-end pb-24 md:pb-28">
          <div className="px-6 md:px-14 w-full md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-medium text-white leading-tight tracking-wide mb-4"
              style={{ fontFamily: "'Clash Display', system-ui, sans-serif" }}>
              Geleceği Güvenle<br />İnşa Ediyoruz
            </h1>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              1995&apos;ten bu yana; konut, ticari yapı ve taahhüt projelerinde güven, kalite ve sürdürülebilirliği bir araya getiriyoruz. Her projede güçlü mühendislik altyapısı, planlı süreç yönetimi ve seçkin uygulama anlayışıyla ilerliyoruz.
            </p>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-red-500 text-red-400 text-sm hover:bg-red-600 hover:text-white transition-all duration-300"
            >
              Projelerimizi İnceleyin →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <StatsCounter />

      {/* ── Biz Kimiz ── */}
      <section className="bg-white px-6 md:px-14 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/hero/hakkımızda.png"
              alt="Atılım Mühendislik"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black"
              style={{ fontFamily: "'Clash Display', system-ui, sans-serif" }}>
              Biz Kimiz?
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              1995 yılında Atılım Müteahhitlik çatısı altında başlayan yolculuğumuzu, ilk günden itibaren <strong>kalite, güven</strong> ve <strong>mühendislik disiplini</strong> odağında sürdürüyoruz. Kurucumuz Zafer Özerson&apos;un teknik birikimiyle, modern mühendislik çözümlerini estetik bir mimari anlayışla birleştiriyoruz. Bizim için bir yapı inşa etmek; sadece bir proje değil, uzun vadeli değer ve kalıcı bir imzadır.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Yaklaşık 30 yıllık tecrübemizle, konut projelerinden kamu yapılarına kadar her aşamada en yüksek standartları hedefliyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* ── Ekibimiz ── */}
      <section className="bg-white px-6 md:px-14 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-14"
            style={{ fontFamily: "'Clash Display', system-ui, sans-serif" }}>
            Ekibimiz
          </h2>
          <div className="grid grid-cols-3 gap-8 md:gap-12">
            {team.map((member) => (
              <div key={member.surname + member.name} className="flex flex-col items-center text-center gap-4">
                <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0">
                  <Image src={member.photo} alt={`${member.name} ${member.surname}`} fill className="object-cover" sizes="192px" />
                </div>
                <div>
                  <p className="text-sm md:text-base font-normal text-black">
                    {member.name} <span className="font-bold">{member.surname}</span>
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 mt-0.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-14 py-16 bg-white">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-black via-[#1a0000] to-black px-8 md:px-16 py-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "'Clash Display', system-ui, sans-serif" }}>
            Hayallerinizdeki Yapıyı<br />Birlikte İnşa Edelim
          </h2>
          <p className="text-white/60 text-sm md:text-base mb-10">
            Proje hakkında detaylı bilgi ve özel satış fırsatları için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="px-8 py-3 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              Hemen İletişime Geçin
            </Link>
            <a
              href="/pdfs/atilim-katalog.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/30 text-white/70 text-sm tracking-widest uppercase hover:border-white hover:text-white transition-all duration-300"
            >
              Katalog İndir
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
