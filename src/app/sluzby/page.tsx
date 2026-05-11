import Link from 'next/link';
import styles from './page.module.css';

const services = [
  {
    title: 'Interiérový koncept a dispozice',
    description: 'Komplexní návrh prostoru s ohledem na vaše potřeby, životní styl a estetické preference. Vytvořím koncept, který dokonale využije potenciál vašeho prostoru.',
    includes: [
      'Analýza prostoru a vašich potřeb',
      'Návrh dispozice a rozmístění',
      'Barevný koncept a materiálová paleta',
      '3D vizualizace klíčových prostor',
    ],
  },
  {
    title: 'Návrh nábytku na míru',
    description: 'Jedinečné kusy navržené přesně pro váš prostor a vkus. Od kuchyně přes vestavěné skříně až po speciální kusy, které dokonale zapadnou do vašeho interiéru.',
    includes: [
      'Návrh a technické výkresy',
      'Výběr materiálů a povrchů',
      'Koordinace s výrobci',
      'Autorský dozor nad realizací',
    ],
  },
  {
    title: 'Výběr nábytku a doplňků',
    description: 'Kurátorský výběr kusů, které dokonale ladí s celkovou koncepcí. Pomohu vám najít ty správné kousky, které dotvoří atmosféru vašeho domova.',
    includes: [
      'Výběr nábytku podle konceptu',
      'Nákupní seznamy s odkazy',
      'Výběr doplňků a dekorací',
      'Koordinace dodávek',
    ],
  },
  {
    title: 'Materiály a povrchy',
    description: 'Pečlivý výběr materiálů pro podlahy, stěny a další povrchy. Společně vybereme materiály, které jsou nejen krásné, ale také praktické a trvanlivé.',
    includes: [
      'Výběr podlahových krytin',
      'Výběr obkladů a dlažeb',
      'Výběr nátěrů a tapet',
      'Vzorkování a schválení',
    ],
  },
  {
    title: 'Kompletní rekonstrukce na klíč',
    description: 'Od projektu až po finální realizaci – vše pod jednou střechou. Zajistím koordinaci všech profesí a dohlédnu na to, aby vše proběhlo podle plánu.',
    includes: [
      'Kompletní projektová dokumentace',
      'Koordinace všech profesí',
      'Autorský dozor',
      'Předání klíčů',
    ],
  },
  {
    title: 'Autorský dozor',
    description: 'Zajištění kvality a souladu s návrhem během celé realizace. Pravidelné kontroly a komunikace s realizační firmou, aby výsledek odpovídal vašim představám.',
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
    <section className="section">
      <div className="container">
        <h1 className={styles.title}>Služby</h1>
        
        <div className={styles.services}>
          {services.map((service, index) => (
            <div key={index} className={styles.service}>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDescription}>{service.description}</p>
              
              <div className={styles.serviceIncludes}>
                <h3 className={styles.includesTitle}>Co zahrnuje:</h3>
                <ul className={styles.includesList}>
                  {service.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.includesItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Máte konkrétní představu nebo potřebujete poradit? Napište mi a domluvíme se na konzultaci.
          </p>
          <Link href="/kontakt" className={styles.ctaButton}>
            Kontaktovat
          </Link>
        </div>
      </div>
    </section>
  );
}
