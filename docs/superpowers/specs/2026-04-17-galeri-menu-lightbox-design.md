# Design: Galeri Menu — All-Projects Lightbox

**Date:** 2026-04-17  
**Status:** Approved

## Summary

When the user clicks "GALERİ" in the drawer menu, open a lightbox containing all gallery images from all projects. Each image shows a small label indicating which project it belongs to. Behavior mirrors the "Galeriyi İncele" lightbox on individual project pages.

## Approach

Option A: extend the existing `LightboxModal` with an optional `labels` prop, and replace the "GALERİ" nav link in `DrawerMenu` with a button that triggers the lightbox.

## Files Changed

- `src/components/project/LightboxModal.tsx`
- `src/components/layout/DrawerMenu.tsx`

No new files created.

## 1. LightboxModal Changes

### Props
Add optional `labels?: string[]` to `LightboxModalProps`.

### Top bar
When `labels` is provided and `labels[current]` is non-empty, render a small dim pill to the left of the counter:

```
[TRIO-1]   3 / 22                              ✕
```

The label is styled as a low-contrast tag (e.g. `text-white/40 text-xs tracking-widest uppercase`) so it doesn't compete with the image.

No other changes — keyboard nav, thumbnails, prev/next arrows all stay identical.

## 2. DrawerMenu Changes

### Data
At the top of the component (outside render), build two parallel flat arrays from the imported `projects`:

```ts
import { projects } from '@/data/projects';

const allImages = projects.flatMap(p => p.gallery);
const allLabels = projects.flatMap(p => p.gallery.map(() => p.name));
```

### State
```ts
const [galleryOpen, setGalleryOpen] = useState(false);
```

### GALERİ nav item
Change from:
```tsx
<Link href="/#gallery" onClick={onClose}>GALERİ</Link>
```
To:
```tsx
<button onClick={() => { onClose(); setTimeout(() => setGalleryOpen(true), 300); }}>
  GALERİ
</button>
```

The 300ms delay lets the drawer exit animation finish before the lightbox mounts.

### Lightbox render
```tsx
{galleryOpen && (
  <LightboxModal
    images={allImages}
    labels={allLabels}
    onClose={() => setGalleryOpen(false)}
  />
)}
```

## Success Criteria

- Clicking "GALERİ" in the drawer closes the drawer and opens the lightbox
- All project gallery images are shown in a single flat sequence
- Each image shows the project name as a small label in the top-left of the lightbox bar
- Keyboard nav (←/→/Esc), thumbnails, and animations work unchanged
- "Galeriyi İncele" on individual project pages is unaffected
