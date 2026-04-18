// ─────────────────────────────────────────────────────────────────────────────
// DATA SCHEMA — Edit this file to add/update/remove projects.
// The UI reads purely from this file; no component logic needs to change.
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectStatus = 'for-sale' | 'completed';

export interface Project {
  slug: string;
  name: string;           // e.g. "TRIO-1"
  fullName: string;       // e.g. "TRIO-1 İNCEK"
  tagline: string;        // hero slider tagline, e.g. "Hayalinizdeki Villa"
  description: string;
  aboutProject: string;
  status: ProjectStatus;
  location: string;
  area: string;
  year: string;
  mapsUrl: string;
  coverImage: string;
  gallery: string[];
  galleryDescription?: string;
  completedYear?: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// SATILIKTAKI PROJELER
// ─────────────────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: 'trio-1',
    name: 'TRIO-1',
    fullName: 'TRIO-1 İNCEK',
    tagline: 'Hayalinizdeki Villa',
    description:
      'TRIO-1 İncek, Ankara\'nın en prestijli bölgesinde, doğayla iç içe villa yaşamını modern mimariyle buluşturan eşsiz bir konut projesidir.',
    aboutProject:
      'İncek Trio -1, İncek\'in prestijli yaşam bölgesinde, modern şehir hayatını doğayla dengeli bir şekilde buluşturan özel bir yaşam anlayışı sunuyor. Seçkin konumu ve çağdaş mimarisiyle tasarlanan İncek Trio -1, konforu, estetiği ve fonksiyonelliği bir araya getirerek yaşam kalitesini yeni bir seviyeye taşıyor. Bu özel projede; modern yaşamın tüm gereksinimlerine cevap veren mimari çözümler, ferah yaşam alanları ve günlük hayatı kolaylaştıran detaylar ön planda tutuluyor. Şehrin dinamizmini yaşarken aynı zamanda sakin ve huzurlu bir atmosfere sahip olmak isteyenler için tasarlanan İncek Trio -1, yaşamın her anını değerli kılan bir deneyim sunuyor.',
    status: 'for-sale',
    location: 'İncek, Ankara',
    area: '18.500 m²',
    year: '2024–2026',
    mapsUrl: 'https://maps.google.com/?q=İncek+Ankara',
    coverImage: '/images/projects/trio-1-cover-v2.png',
    galleryDescription:
      'İncek\'in değer kazanan lokasyonunda yer alan Trio-1 İncek; çevresindeki sosyal olanaklar ve modern yaşam standartlarıyla hem yaşam hem de yatırım için güçlü bir alternatif sunuyor. Geniş ve kullanışlı yaşam alanları, estetik mimari detaylar ve çağdaş konseptiyle Trio -1 İncek, kendine özgü bir kent yaşamı arayanlar için özenle tasarlandı.',
    gallery: [
      '/images/projects/trio-1-cover-v2.png',
      '/images/projects/OFİS 2D-Photoroom 1.png',
      'https://images.pexels.com/photos/19689230/pexels-photo-19689230.jpeg?auto=compress&cs=tinysrgb&w=1200', // iç tasarım — replace with dark luxury marble interior
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
  },
  {
    slug: 'trio-2',
    name: 'TRIO-2',
    fullName: 'TRIO-2',
    tagline: 'Prestijin Yeni Tanımı',
    description:
      'TRIO-2, modern yaşam anlayışını yüksek kaliteli malzeme kullanımı ve özgün mimarisiyle harmanlayan Ankara\'nın gözdesi haline gelen konut projesidir.',
    aboutProject:
      'TRIO-2 projesi; çağdaş mimari anlayışı, geniş sosyal donatı alanları ve üst segment yaşam standardıyla öne çıkmaktadır. Yüzme havuzu, spor merkezi, kapalı otopark ve 24/7 güvenlik sistemi ile tam anlamıyla güvenli ve konforlu bir yaşam sunmaktadır.',
    status: 'for-sale',
    location: 'Ankara',
    area: '22.000 m²',
    year: '2024–2027',
    mapsUrl: 'https://maps.google.com/?q=Ankara+Türkiye',
    coverImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
      'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
  },
  {
    slug: 'labris',
    name: 'LABRİS',
    fullName: 'LABRİS',
    tagline: 'Benzersiz Bir Deneyim',
    description:
      'LABRİS; çarpıcı cephesi ve özgün tasarımıyla Ankara\'ya yeni bir soluk getiren, mimari çizgisiyle dikkat çeken prestijli bir konut projesidir.',
    aboutProject:
      'LABRİS projesi, güçlü mimari kimliği ve premium yaşam alanlarıyla sektörde fark yaratmaktadır. Etkileyici giriş lobisi, ticari zemin katlar ve üst katlarda yer alan geniş rezidans daireleriyle karma kullanım anlayışını başarıyla yansıtmaktadır.',
    status: 'for-sale',
    location: 'Ankara',
    area: '28.000 m²',
    year: '2025–2027',
    mapsUrl: 'https://maps.google.com/?q=Ankara+Türkiye',
    coverImage: '/images/projects/labris-cover.png',
    gallery: [
      '/images/projects/labris-cover.png',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
  },
  {
    slug: 'ilko',
    name: 'İLKO',
    fullName: 'İLKO',
    tagline: 'Prestijin Yeni İmzası',
    description:
      'İLKO; yenilikçi mimari anlayışı ve ayrıcalıklı konumuyla Ankara\'nın yükselen değeri olan, modern konut projesinde yeni standartları belirliyor.',
    aboutProject:
      'İLKO projesi; şehrin kalbinde stratejik konumu, çarpıcı cephesi ve lüks iç mekan tasarımıyla öne çıkmaktadır. Geniş balkonlar, panoramik manzaralar ve yüksek tavan yükseklikleri ile farklı bir yaşam deneyimi sunmaktadır. Akıllı ev sistemleri ve enerji verimliliği odaklı tasarımıyla geleceğe hazır bir proje.',
    status: 'for-sale',
    location: 'Ankara',
    area: '15.000 m²',
    year: '2024–2026',
    mapsUrl: 'https://maps.google.com/?q=Ankara+Türkiye',
    coverImage: '/images/projects/ilko-cover-v2.png',
    gallery: [
      '/images/projects/ilko-cover-v2.png',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
  },

  // ─── TAMAMLANMIŞ PROJELER ───────────────────────────────────────────────
  {
    slug: 'esenboga-havalimani',
    name: 'Esenboğa Havalimanı',
    fullName: 'Esenboğa Havalimanı',
    tagline: 'Tamamlandı',
    description: 'Yapının estetik ve teknik standartlarını yükselten taş kaplama, mekanik kaplama, izolasyon ve çevre düzenlemesi çalışmaları başarıyla tamamlanmıştır.',
    aboutProject: 'Ankara Esenboğa Havalimanı yeni terminal yapısı, modern havacılık mimarisinin en başarılı örneklerinden biridir.',
    status: 'completed',
    location: 'Ankara',
    area: '120.000 m²',
    year: '2018–2021',
    mapsUrl: 'https://maps.google.com/?q=Esenboğa+Havalimanı+Ankara',
    coverImage: '/images/projects/esenboga-cover.png',
    gallery: [
      '/images/projects/esenboga-cover.png',
    ],
    completedYear: 2021,
  },
  {
    slug: '360-avm',
    name: '360 AVM',
    fullName: '360 AVM',
    tagline: 'Tamamlandı',
    description: 'Yapının modern mimari kimliğini ve teknik dayanıklılığını pekiştiren taş ve mekanik kaplama uygulamaları titizlikle tamamlanmıştır.',
    aboutProject: 'Modern mimari anlayışıyla tasarlanan 360 AVM, bölgenin ticari yaşamına katkı sağlayan büyük ölçekli bir alışveriş merkezi projesidir.',
    status: 'completed',
    location: 'Ankara',
    area: '85.000 m²',
    year: '2019–2022',
    mapsUrl: 'https://maps.google.com/?q=360+AVM+Ankara',
    coverImage: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80',
    ],
    completedYear: 2022,
  },
  {
    slug: 'odtu-kktc-kampusu',
    name: 'ODTÜ KKTC Kampüsü',
    fullName: 'ODTÜ KKTC Kampüsü',
    tagline: 'Tamamlandı',
    description: 'İç mekân konforunu artıran çözümler ile yapının teknik performansını ve modern görünümünü pekiştiren mekanik kaplama uygulamaları başarıyla uygulanmıştır.',
    aboutProject: 'ODTÜ KKTC Kampüsü, üniversitenin yurt dışındaki ilk kampüsü olup modern eğitim yapıları ve sosyal alanlarıyla örnek bir eğitim merkezi oluşturmaktadır.',
    status: 'completed',
    location: 'Kuzey Kıbrıs',
    area: '200.000 m²',
    year: '2016–2020',
    mapsUrl: 'https://maps.google.com/?q=ODTÜ+KKTC+Kampüsü',
    coverImage: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
    ],
    completedYear: 2020,
  },
  {
    slug: 'erifsha-international-airport',
    name: 'Erifsha International Airport',
    fullName: 'Erifsha International Airport',
    tagline: 'Tamamlandı',
    description: 'Yapının mimari estetiğini ve teknik ömrünü güçlendiren taş kaplama, mekanik kaplama, izolasyon ve çevre düzenlemesi çalışmaları titizlikle tamamlanmıştır.',
    aboutProject: 'Erifsha Uluslararası Havalimanı, modern terminal binası ve altyapısıyla bölgenin hava ulaşımına önemli katkılar sağlayan büyük ölçekli bir havalimanı projesidir.',
    status: 'completed',
    location: 'Uluslararası',
    area: '95.000 m²',
    year: '2020–2023',
    mapsUrl: 'https://maps.google.com/?q=Erifsha+International+Airport',
    coverImage: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1200&q=80',
    ],
    completedYear: 2023,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HERO SLIDES
// ─────────────────────────────────────────────────────────────────────────────
export const heroSlides = [
  {
    image: '/images/projects/trio-1-cover-v2.png',
    tagline: 'Hayalinizdeki Villa',
    projectName: 'TRIO -1',
    projectSlug: 'trio-1',
    subtitle: 'İncek Trio -1 ile modern mimari ve prestijli bir yaşamın merkezinde yerinizi alın.',
  },
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=90',
    tagline: 'Prestijin Yeni Tanımı',
    projectName: 'TRİO-2',
    projectSlug: 'trio-2',
    subtitle: 'Modern yaşam anlayışını yüksek kaliteli malzeme ve özgün mimariyle buluşturuyor.',
  },
  {
    image: '/images/hero/cover-image-3.png',
    tagline: 'Benzersiz Bir Deneyim',
    projectName: 'LABRİS',
    projectSlug: 'labris',
    subtitle: 'Hayallerinizdeki yaşam standartlarına bugün adım atın ve yerinizi hemen ayırtın.',
  },
  {
    image: '/images/projects/ilko-cover-v2.png',
    tagline: 'Prestijin Yeni İmzası',
    projectName: 'İLKO',
    projectSlug: 'ilko',
    subtitle: 'Bitişik nizam villada, hayallerinizdeki prestijli yaşam standartlarına bugün adım atın ve yerinizi hemen ayırtın.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT INFO
// ─────────────────────────────────────────────────────────────────────────────
export const contactInfo = {
  phone1: '+90 (533) 293 87 39',
  phone2: '+90 (537) 288 74 29',
  whatsapp: '905332938739',
  email: 'info@atilimmuhendislik.com',
  addressTR: 'Mesnevi Caddesi 36/4, Çankaya, Ankara',
  addressUS: '823 Middlesex Turnpike, Burlington, MA 01803, USA',
  companyName: 'Atılım Mühendislik İnşaat A.Ş.',
  linkedin: '#',
  instagram: 'https://www.instagram.com/atilimmuteahhitlik?igsh=MXhsbWd5ZHYwa3Q3YQ==',
};

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const forSaleProjects = projects.filter((p) => p.status === 'for-sale');
export const completedProjects = projects.filter((p) => p.status === 'completed');
