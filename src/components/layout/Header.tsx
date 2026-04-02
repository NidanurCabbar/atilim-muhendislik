'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import DrawerMenu from './DrawerMenu';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="px-6 py-5 flex justify-between items-center absolute top-0 left-0 right-0 z-40">
        <Link href="/" className="inline-block">
          <Image
            src="/logo.png"
            alt="Atılım Mühendislik"
            width={120}
            height={64}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        <button
          onClick={() => setDrawerOpen(true)}
          aria-label="Menüyü Aç"
          className="w-12 h-12 flex items-center justify-center hover:bg-white/10 transition rounded text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      <DrawerMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
