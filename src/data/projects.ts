export interface Project {
  title: string;
  slug: string;
  location: string;
  year: string;
  description: string;
  scope: string[];
  images: string[]; // Pole cest k obrázkům: /images/projects/<slug>/...
}

export const projects: Project[] = [
  {
    title: 'Byt v centru Prahy',
    slug: 'byt-v-centru-prahy',
    location: 'Praha',
    year: '2024',
    description: 'Kompletní rekonstrukce bytu v historickém centru Prahy. Cílem bylo zachovat autenticitu prostoru a zároveň vytvořit moderní a funkční bydlení pro mladou rodinu.',
    scope: [
      'Kompletní rekonstrukce bytu',
      'Návrh dispozice',
      'Výběr materiálů a povrchů',
      'Návrh nábytku na míru',
      'Autorský dozor',
    ],
    // Dočasně: cyklíme project-1..3 (5 obrázků)
    // Později: nahradit za /images/projects/byt-v-centru-prahy/image-1.jpg, image-2.jpg, ...
    images: Array.from({ length: 5 }, (_, i) => `/images/projects/project-${(i % 3) + 1}.jpg`),
  },
  {
    title: 'Rodinný dům na okraji',
    slug: 'rodinny-dum-na-okraji',
    location: 'Praha',
    year: '2024',
    description: 'Interiérový design rodinného domu s důrazem na propojení vnitřních prostor s velkou zahradou. Vytvořili jsme světlý a vzdušný prostor plný přírodních materiálů.',
    scope: [
      'Interiérový koncept celého domu',
      'Návrh kuchyně na míru',
      'Výběr nábytku a doplňků',
      'Materiály a povrchy',
      'Autorský dozor',
    ],
    // Dočasně: cyklíme project-1..3 (6 obrázků)
    images: Array.from({ length: 6 }, (_, i) => `/images/projects/project-${(i % 3) + 1}.jpg`),
  },
  {
    title: 'Loft v Holešovicích',
    slug: 'loft-v-holesovicich',
    location: 'Praha',
    year: '2023',
    description: 'Přeměna průmyslového prostoru na moderní loft. Zachovali jsme industriální charakter prostoru a doplnili ho o jemné a teplé prvky.',
    scope: [
      'Koncept interiéru',
      'Návrh nábytku na míru',
      'Výběr doplňků',
      'Materiály a povrchy',
    ],
    // Dočasně: cyklíme project-1..3 (4 obrázky)
    images: Array.from({ length: 4 }, (_, i) => `/images/projects/project-${(i % 3) + 1}.jpg`),
  },
  {
    title: 'Kancelářské prostory',
    slug: 'kancelarske-prostory',
    location: 'Praha',
    year: '2023',
    description: 'Design moderních kancelářských prostor s důrazem na funkčnost a pohodlí zaměstnanců. Vytvořili jsme flexibilní prostor, který podporuje produktivitu i odpočinek.',
    scope: [
      'Interiérový koncept',
      'Návrh zón',
      'Výběr nábytku',
      'Materiály a povrchy',
      'Autorský dozor',
    ],
    // Dočasně: cyklíme project-1..3 (7 obrázků)
    images: Array.from({ length: 7 }, (_, i) => `/images/projects/project-${(i % 3) + 1}.jpg`),
  },
  {
    title: 'Rekonstrukce bytu',
    slug: 'rekonstrukce-bytu',
    location: 'Praha',
    year: '2023',
    description: 'Kompletní rekonstrukce bytu s novou dispozicí. Cílem bylo maximálně využít prostor a vytvořit funkční bydlení pro pár.',
    scope: [
      'Kompletní rekonstrukce',
      'Návrh nové dispozice',
      'Výběr materiálů',
      'Návrh nábytku na míru',
    ],
    // Dočasně: cyklíme project-1..3 (5 obrázků)
    images: Array.from({ length: 5 }, (_, i) => `/images/projects/project-${(i % 3) + 1}.jpg`),
  },
  {
    title: 'Minimalistický interiér',
    slug: 'minimalisticky-interier',
    location: 'Praha',
    year: '2022',
    description: 'Minimalistický interiér s důrazem na kvalitu materiálů a precizní detaily. Vytvořili jsme klidný a nadčasový prostor.',
    scope: [
      'Interiérový koncept',
      'Návrh nábytku na míru',
      'Výběr doplňků',
      'Materiály a povrchy',
      'Autorský dozor',
    ],
    // Dočasně: cyklíme project-1..3 (8 obrázků)
    images: Array.from({ length: 8 }, (_, i) => `/images/projects/project-${(i % 3) + 1}.jpg`),
  },
];
