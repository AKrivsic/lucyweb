export interface Post {
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

export const categories = [
  'Interiéry',
  'Rekonstrukce',
  'Inspirace',
  'Materiály',
  'Nábytek',
  'Za scénou',
];

export const posts: Post[] = [
  {
    title: '5 principů, na kterých stavím každý projekt',
    slug: '5-principu-projektu',
    category: 'Inspirace',
    date: '2025-04-05',
    excerpt:
      'Co dělá interiér nadčasovým? Sdílím pět zásad, kterými se řídím od první konzultace až po předání klíčů.',
    image: '/images/projects/project-1.jpg',
  },
  {
    title: 'Proč milovat přírodní materiály (a kde je použít)',
    slug: 'proc-milovat-prirodni-materialy',
    category: 'Materiály',
    date: '2025-04-05',
    excerpt:
      'Dřevo, kámen, len. Materiály, které stárnou s grácií a do interiéru přinášejí klid a opravdovost.',
    image: '/images/projects/project-2.jpg',
  },
  {
    title: 'Malý byt, velký dojem: tipy z rekonstrukce v centru',
    slug: 'maly-byt-velky-dojem',
    category: 'Rekonstrukce',
    date: '2025-04-05',
    excerpt:
      'Jak proměnit 48 m² v plnohodnotný domov bez kompromisů. Ukazuji konkrétní řešení z poslední realizace.',
    image: '/images/projects/project-3.jpg',
  },
  {
    title: 'Návrh kuchyně na míru: na co se ptát výrobce',
    slug: 'kuchyne-na-miru',
    category: 'Nábytek',
    date: '2025-04-05',
    excerpt:
      'Detail rozhoduje. Praktický průvodce, jak vést výrobce kuchyně, aby výsledek vydržel desítky let.',
    image: '/images/projects/project-1.jpg',
  },
];
