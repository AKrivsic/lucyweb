import Link from 'next/link';
import Reveal from '@/components/Reveal';
import styles from './page.module.css';

export const metadata = {
  title: 'Služby — Lucy Design',
  description:
    'Interiérový design v Praze: koncept, návrh nábytku na míru, výběr materiálů, realizace na klíč a autorský dozor.',
};

const services = [
  {
    number: '01',
    title: 'Interiérový koncept a dispozice',
    description:
      'Komplexní návrh prostoru s ohledem na vaše potřeby, životní styl a estetické preference. Vytvořím koncept, který dokonale využije potenciál vašeho prostoru.',
    includes: [
      'Analýza prostoru a vašich potřeb',
      'Návrh dispozice a rozmístění',
      'Barevný koncept a materiálová paleta',
      '3D vizualizace klíčových prostor',
    ],
  },
  {
    number: '02',
    title: 'Návrh nábytku na míru',
    description:
      'Jedinečné kusy navržené přesně pro váš prostor a vkus. Od kuchyně přes vestavěné skříně až po speciální kusy, které dokonale zapadnou do vašeho interiéru.',
    includes: [
      'Návrh a technické výkresy',
      'Výběr materiálů a povrchů',
      'Koordinace s výrobci',
      'Autorský dozor nad realizací',
    ],
  },
  {
    number: '03',
    title: 'Výběr nábytku a doplňků',
    description:
      'Kurátorský výběr kusů, které dokonale ladí s celkovou koncepcí. Pomohu vám najít ty správné kousky, které dotvoří atmosféru vašeho domova.',
    includes: [
      'Výběr nábytku podle konceptu',
      'Nákupní seznamy s odkazy',
      'Výběr doplňků a dekorací',
      'Koordinace dodávek',
    ],
  },
  {
    number: '04',
    title: 'Materiály a povrchy',
    description:
      'Pečlivý výběr materiálů pro podlahy, stěny a další povrchy. Společně vybereme materiály, které jsou nejen krásné, ale také praktické a trvanlivé.',
    includes: [
      'Výběr podlahových krytin',
      'Výběr obkladů a dlažeb',
      'Výběr nátěrů a tapet',
      'Vzorkování a schválení',
    ],
  },
  {
    number: '05',
    title: 'Kompletní rekonstrukce na klíč',
    description:
      'Od projektu až po finální realizaci – vše pod jednou střechou. Zajistím koordinaci všech profesí a dohlédnu na to, aby vše proběhlo podle plánu.',
    includes: [
      'Kompletní projektová dokumentace',
      'Koordinace všech profesí',
      'Autorský dozor',
      'Předání klíčů',
    ],
  },
  {
    number: '06',
    title: 'Autorský dozor',
    description:
      'Zajištění kvality a souladu s návrhem během celé realizace. Pravidelné kontroly a komunikace s realizační firmou, aby výsledek odpovídal vašim představám.',
    includes: [
      'Pravidelné kontroly stavby',
      'Komunikace s realizační firmou',
      'Kontrola kvality provedení',
      'Finální kontrola a předání',
    ],
  },
];

export default function Sluzby() {
  return (
    <>
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <Reveal>
            <div className={styles.introInner}>
              <span className="eyebrow">Služby</span>
              <h1 className={styles.title}>
                Co umím<br />nejlépe.
              </h1>
              <p className={styles.subtitle}>
                Doprovodím vás celým procesem proměny vašeho prostoru — od první
                konzultace přes koncept a&nbsp;projekt až po finální realizaci
                a&nbsp;předání klíčů.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.services}>
            {services.map((service) => (
              <Reveal key={service.number}>
                <article className={styles.service}>
                  <div className={styles.serviceHeader}>
                    <span className={styles.serviceNumber}>{service.number}</span>
                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                  </div>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <div className={styles.includes}>
                    <span className="eyebrow">Co zahrnuje</span>
                    <ul className={styles.includesList}>
                      {service.includes.map((item) => (
                        <li key={item} className={styles.includesItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <span className="eyebrow eyebrow--light">Další krok</span>
              <h2 className={styles.ctaTitle}>
                Máte konkrétní představu nebo si chcete jen popovídat?
              </h2>
            </div>
            <Link href="/kontakt" className="btn btn--outline-light">
              Domluvit konzultaci
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
