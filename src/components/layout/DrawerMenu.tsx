'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { contactInfo } from '@/data/projects';

interface DrawerMenuProps {
  open: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'PROJELERİMİZ', href: '/#projects' },
  { label: 'GALERİ',       href: '/#gallery' },
  { label: 'HAKKIMIZDA',   href: '/kurumsal' },
  { label: 'İLETİŞİM',    href: '/#contact' },
];

export default function DrawerMenu({ open, onClose }: DrawerMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60"
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.38, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-full md:w-[72%] bg-[#1c1c1c] z-[70] overflow-y-auto"
          >
            <div className="min-h-full px-8 py-8 md:px-14 md:py-10 flex flex-col">

              {/* Top bar: logo + close */}
              <div className="flex justify-between items-start mb-14">
                {/* Logo box */}
                <div className="bg-white px-5 py-3">
                  <Image
                    src="/logo.png"
                    alt="Atılım Mühendislik"
                    width={100}
                    height={36}
                    className="h-8 w-auto object-contain"
                  />
                </div>

                {/* Close */}
                <button
                  onClick={onClose}
                  aria-label="Kapat"
                  className="w-10 h-10 flex items-center justify-center hover:bg-white/10 transition rounded text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Two-column layout */}
              <div className="flex-1 grid md:grid-cols-2 gap-12">

                {/* Left — Contact info */}
                <div className="text-white space-y-7 order-2 md:order-1">
                  <div>
                    <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase mb-2">
                      Türkiye Ofis
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {contactInfo.addressTR}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase mb-2">
                      Telefon
                    </p>
                    <a
                      href={`tel:${contactInfo.phone1.replace(/\s/g, '')}`}
                      className="text-gray-400 hover:text-white transition text-sm block"
                    >
                      {contactInfo.phone1}
                    </a>
                    <a
                      href={`tel:${contactInfo.phone2.replace(/\s/g, '')}`}
                      className="text-gray-400 hover:text-white transition text-sm block mt-1"
                    >
                      {contactInfo.phone2}
                    </a>
                  </div>

                  <div>
                    <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase mb-2">
                      E-Posta
                    </p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-400 hover:text-white transition text-sm"
                    >
                      {contactInfo.email}
                    </a>
                  </div>

                  {/* Social */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={contactInfo.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition text-xs"
                    >
                      IG
                    </a>
                    <a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition text-xs"
                    >
                      IN
                    </a>
                  </div>
                </div>

                {/* Right — Navigation */}
                <nav className="order-1 md:order-2 flex items-start md:justify-end">
                  <ul className="space-y-5">
                    {navLinks.map((link, i) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                      >
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-white hover:text-white/50 transition-colors duration-200 block"
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
