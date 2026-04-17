# İletişim Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a dedicated `/iletisim` contact page with a two-column layout (info left, image right) and update the header and drawer menu links to point to it.

**Architecture:** One new Next.js page at `src/app/iletisim/page.tsx`, self-contained, reading all data from the existing `contactInfo` export. Two existing files updated to change link `href` values.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, `next/image`

---

### Task 1: Create the İletişim page

**Files:**
- Create: `src/app/iletisim/page.tsx`

- [ ] **Step 1: Create the file with the full page**

Create `src/app/iletisim/page.tsx` with this content:

```tsx
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { contactInfo } from '@/data/projects';

export const metadata = {
  title: 'İletişim | Atılım Mühendislik',
  description: 'Proje hakkında detaylı bilgi ve özel satış fırsatları için bizimle iletişime geçin.',
};

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section className="min-h-screen grid md:grid-cols-[55fr_45fr]">

        {/* ── Left — Contact info ── */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-36 pb-20 md:pt-40 space-y-12">

          {/* Heading */}
          <div className="space-y-4">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight"
              style={{ fontFamily: "'Clash Display', system-ui, sans-serif" }}
            >
              Ayrıcalıklı bir yaşam<br />sizi bekliyor
            </h1>
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">
              Proje hakkında detaylı bilgi ve özel satış fırsatları için bizimle iletişime geçin.
            </p>
          </div>

          {/* ADRES */}
          <div className="space-y-3">
            <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-semibold">
              Adres
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              {contactInfo.addressTR}
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              {contactInfo.addressUS}
            </p>
          </div>

          {/* İLETİŞİM */}
          <div className="space-y-3">
            <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-semibold">
              İletişim
            </p>
            <a
              href={`tel:${contactInfo.phone1.replace(/\s/g, '')}`}
              className="block text-white/60 hover:text-white transition-colors text-sm"
            >
              {contactInfo.phone1}
            </a>
            <a
              href={`tel:${contactInfo.phone2.replace(/\s/g, '')}`}
              className="block text-white/60 hover:text-white transition-colors text-sm"
            >
              {contactInfo.phone2}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="block text-white/60 hover:text-white transition-colors text-sm"
            >
              {contactInfo.email}
            </a>
          </div>

          {/* WhatsApp button */}
          <a
            href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Merhaba, projeleriniz hakkında bilgi almak istiyorum.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition-all duration-300 text-sm tracking-wide w-fit"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            WhatsApp ile ulaşın
          </a>

          {/* BİZİ TAKİP EDİN */}
          <div className="space-y-3">
            <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-semibold">
              Bizi Takip Edin
            </p>
            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* ── Right — Image ── */}
        <div className="relative h-72 md:h-auto md:sticky md:top-0 md:min-h-screen order-first md:order-last">
          <Image
            src="/images/projects/ilko-cover-v2.png"
            alt="İlko projesi"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
            priority
          />
          {/* Left-edge gradient so image blends into dark page */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>

      </section>

      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/iletisim/page.tsx
git commit -m "feat: add İletişim page at /iletisim"
```

---

### Task 2: Update Header İletişim link

**Files:**
- Modify: `src/components/layout/Header.tsx`

- [ ] **Step 1: Change the href from `#contact` to `/iletisim`**

Find this line in `src/components/layout/Header.tsx`:

```tsx
<Link
  href="#contact"
```

Change to:

```tsx
<Link
  href="/iletisim"
```

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/Header.tsx
git commit -m "feat: İletişim header link points to /iletisim"
```

---

### Task 3: Update DrawerMenu İLETİŞİM link

**Files:**
- Modify: `src/components/layout/DrawerMenu.tsx`

- [ ] **Step 1: Change the href from `/#contact` to `/iletisim`**

Find this line in `src/components/layout/DrawerMenu.tsx`:

```tsx
{ label: 'İLETİŞİM',     href: '/#contact' },
```

Change to:

```tsx
{ label: 'İLETİŞİM',     href: '/iletisim' },
```

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/DrawerMenu.tsx
git commit -m "feat: İLETİŞİM drawer link points to /iletisim"
```

---

### Task 4: Verify in browser

- [ ] **Step 1: Open http://localhost:3001/iletisim directly**

Expected:
- Header visible (transparent, frosted glass on scroll)
- Heading "Ayrıcalıklı bir yaşam sizi bekliyor" in large Clash Display font
- ADRES section shows both TR and USA addresses
- İLETİŞİM section shows both phone numbers and email as clickable links
- WhatsApp gold pill button visible
- BİZİ TAKİP EDİN section shows Instagram + Facebook icons
- İlko image fills the right half with a left-edge gradient fade
- Footer visible at bottom

- [ ] **Step 2: Test navigation from header**

On the home page, click the "İletişim" pill button in the header → should navigate to `/iletisim`.

- [ ] **Step 3: Test navigation from drawer menu**

Open the drawer menu, click "İLETİŞİM" → drawer closes, page navigates to `/iletisim`.

- [ ] **Step 4: Test mobile layout**

Resize to mobile width. Expected: image appears at top (full-width, `h-72`), contact info stacks below it in a single column.

- [ ] **Step 5: Test WhatsApp button**

Click the WhatsApp button → opens `https://wa.me/905332938739?text=Merhaba%2C%20projeleriniz%20hakkında%20bilgi%20almak%20istiyorum.` in a new tab.
