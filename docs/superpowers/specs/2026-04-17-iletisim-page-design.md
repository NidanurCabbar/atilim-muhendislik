# Design: İletişim Page

**Date:** 2026-04-17  
**Status:** Approved

## Summary

A dedicated `/iletisim` contact page accessible from the İletişim pill button in the header and the İLETİŞİM item in the drawer menu. Info-only (no form). Two-column layout: contact details on the left, a project image on the right.

## Files Changed

- Create: `src/app/iletisim/page.tsx`
- Modify: `src/components/layout/Header.tsx` (update İletişim link)
- Modify: `src/components/layout/DrawerMenu.tsx` (update İLETİŞİM href)

No new components. All contact data comes from the existing `contactInfo` export in `src/data/projects.ts`.

## Page: `src/app/iletisim/page.tsx`

### Structure

```
<Header />
<main bg-black>
  <section — two-column grid, min-h-screen, pt accounts for fixed header>
    <left column>
    <right column — image>
  </section>
</main>
<Footer />
```

### Left Column

Stacked vertically with generous spacing (`space-y-12` or similar):

1. **Heading** — `"Ayrıcalıklı bir yaşam sizi bekliyor"` in Clash Display, large (text-4xl → text-6xl), white
2. **Subtitle** — `"Proje hakkında detaylı bilgi ve özel satış fırsatları için bizimle iletişime geçin."` in Manrope, small, `text-white/60`
3. **ADRES section**
   - Label: `"ADRES"` in `text-[10px] tracking-[0.3em] uppercase text-white/40`
   - TR address: `contactInfo.addressTR` in `text-white/60 text-sm`
   - USA address: `contactInfo.addressUS` in `text-white/60 text-sm`
4. **İLETİŞİM section**
   - Label: `"İLETİŞİM"` styled same as ADRES label
   - Phone 1: `<a href="tel:…">` — `contactInfo.phone1`
   - Phone 2: `<a href="tel:…">` — `contactInfo.phone2`
   - Email: `<a href="mailto:…">` — `contactInfo.email`
   - All links: `text-white/60 hover:text-white transition text-sm`
5. **WhatsApp button** — pill button, gold border, opens `wa.me/contactInfo.whatsapp` with a pre-filled Turkish message. Styled consistently with other CTA elements on the site.
6. **BİZİ TAKİP EDİN section**
   - Label: same style as above
   - Instagram + Facebook icon buttons — same `w-8 h-8 rounded-full border border-white/30` style as DrawerMenu

### Right Column

- `<Image src="/images/projects/ilko-cover-v2.png" fill className="object-cover" />`
- Container: `relative` with fixed height on mobile (`h-72`), `sticky top-0 h-screen` on desktop so the image stays in view while scrolling the left column
- Subtle left-edge gradient overlay: `absolute inset-0 bg-gradient-to-r from-black/60 to-transparent` so the image blends into the dark page background

### Responsive behaviour

- Mobile: single column, image appears above the contact info (full-width, fixed height)
- Desktop (`md:`): two-column grid, roughly 55% left / 45% right

## Navigation Updates

### Header.tsx

Change the İletişim pill `href` from `"#contact"` to `"/iletisim"`.

### DrawerMenu.tsx

Change the İLETİŞİM nav link `href` from `"/#contact"` to `"/iletisim"`.

## Success Criteria

- `/iletisim` loads with the full Header (frosted glass on scroll) and Footer
- All contact info is visible: both addresses, both phones, email, WhatsApp button, social icons
- WhatsApp button opens `wa.me/…` in a new tab with a pre-filled message
- İletişim pill in header navigates to `/iletisim`
- İLETİŞİM in the drawer menu navigates to `/iletisim` (and closes the drawer)
- Page is responsive: stacks to single column on mobile
