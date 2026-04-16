import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Atılım Mühendislik İnşaat | Ankara\'nın Prestijli Konut Projeleri',
  description:
    '25 yıllık deneyimle Ankara\'nın lüks konut projelerini hayata geçiriyoruz. Satıştaki ve tamamlanmış projelerimizi keşfedin.',
  keywords: 'atılım mühendislik, inşaat, konut projeleri, ankara, lüks daire, villa',
  openGraph: {
    title: 'Atılım Mühendislik İnşaat',
    description: 'Ankara\'nın prestijli konut projeleri',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {/* Grain texture overlay — adds tactile warmth site-wide */}
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            pointerEvents: 'none',
            opacity: 0.035,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
        />
      </body>
    </html>
  );
}
