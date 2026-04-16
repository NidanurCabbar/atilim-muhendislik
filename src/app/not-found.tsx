import Link from 'next/link';
import Header from '@/components/layout/Header';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-4">404</p>
        <h1 className="font-display text-4xl text-white mb-4">Sayfa Bulunamadı</h1>
        <p className="text-brand-gray mb-8">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
        <Link
          href="/"
          className="bg-brand-gold hover:bg-brand-gold-dark transition-colors text-brand-dark font-medium text-sm tracking-wider px-8 py-3 uppercase"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </main>
  );
}
