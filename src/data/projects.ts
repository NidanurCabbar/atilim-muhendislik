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
      'TRIO-1 İncek projesi; geniş villa parselleri, özel peyzaj alanları ve üst düzey mimari detaylarıyla Ankara\'da ayrıcalıklı bir yaşam sunar. Her villa bağımsız bahçe, özel havuz seçeneği ve akıllı ev sistemleriyle tasarlanmıştır. İncek\'in yeşil dokusunu koruyarak entegre olan proje, hem huzurlu hem de prestijli bir yaşam tarzı vaat eder.',
    status: 'for-sale',
    location: 'İncek, Ankara',
    area: '18.500 m²',
    year: '2024–2026',
    mapsUrl: 'https://maps.google.com/?q=İncek+Ankara',
    coverImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
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
    coverImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
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
    coverImage: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=1200&q=80',
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
    description: 'Ankara Esenboğa Havalimanı terminal projesi.',
    aboutProject: 'Ankara Esenboğa Havalimanı yeni terminal yapısı, modern havacılık mimarisinin en başarılı örneklerinden biridir.',
    status: 'completed',
    location: 'Ankara',
    area: '120.000 m²',
    year: '2018–2021',
    mapsUrl: 'https://maps.google.com/?q=Esenboğa+Havalimanı+Ankara',
    coverImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80',
    ],
    completedYear: 2021,
  },
  {
    slug: '360-avm',
    name: '360 AVM',
    fullName: '360 AVM',
    tagline: 'Tamamlandı',
    description: '360 Alışveriş Merkezi projesi.',
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
    description: 'ODTÜ Kuzey Kıbrıs Türk Cumhuriyeti Kampüsü inşaat projesi.',
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
    description: 'Erifsha Uluslararası Havalimanı terminal ve apron inşaat projesi.',
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
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&q=90',
    tagline: 'Hayalinizdeki Villa',
    projectName: 'TRIO-1',
    projectSlug: 'trio-1',
  },
  {
    image: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=1600&q=90',
    tagline: 'Prestijin Yeni İmzası',
    projectName: 'İLKO',
    projectSlug: 'ilko',
  },
  {
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=90',
    tagline: 'Benzersiz Bir Deneyim',
    projectName: 'LABRİS',
    projectSlug: 'labris',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT INFO
// ─────────────────────────────────────────────────────────────────────────────
export const contactInfo = {
  phone1: '+90 312 000 00 00',
  phone2: '+90 530 000 00 00',
  whatsapp: '905300000000',
  email: 'info@atilimmuhendislik.com',
  addressTR: 'Reşitpaşa Süyü Tower, Yazıcıoğlu Cd., 06830 Çankaya/Ankara',
  addressUS: '823 Middlesex Turnpike, Burlington, MA 01803, USA',
  companyName: 'Atılım Mühendislik İnşaat A.Ş.',
  linkedin: '#',
  instagram: '#',
};

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const forSaleProjects = projects.filter((p) => p.status === 'for-sale');
export const completedProjects = projects.filter((p) => p.status === 'completed');
