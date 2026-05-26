import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import styles from './page.module.css';

export const metadata = {
  title: 'O mně — Lucy Design',
  description: 'Lucy — interiérová designérka z Prahy. O mém přístupu, hodnotách a způsobu práce.',
};

const values = [
  {
    title: 'Naslouchání',
    description: 'Každý projekt začíná hlubokým rozhovorem. Bez něj nemůže vzniknout autentický prostor.',
  },
  {
    title: 'Respekt k prostoru',
    description: 'Pracuji s tím, co prostor nabízí — světlem, dispozicí, materiály. Místo bojování hledám harmonii.',
  },
  {
    title: 'Důraz na kvalitu',
    description: 'Spolupracuji s prověřenými řemeslníky a značkami. Detail musí být tak dobrý zblízka jako zdálky.',
  },
  {
    title: 'Nadčasovost',
    description: 'Trendy přicházejí a odcházejí. Já navrhuji interiéry, které vás budou bavit i za deset let.',
  },
];

export default function OMne() {
  return (
    <>
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <Reveal>
            <div className={styles.introInner}>
              <span className="eyebrow">O autorce</span>
              <h1 className={styles.title}>Lucy.</h1>
              <p className={styles.subtitle}>
                Interiérová designérka z&nbsp;Prahy. Vytvářím prostory, které
                přesně sedí svým majitelům — ne&nbsp;trendy.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.profileSection}`}>
        <div className="container">
          <div className={styles.profile}>
            <Reveal>
              <div className={styles.imageWrap}>
                <div className={styles.image}>
                  <Image
                    src="/images/about.jpg"
                    alt="Lucy — interiérová designérka"
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.imageMeta}>
                  <span className={`eyebrow ${styles.imageEyebrow}`}>Praha</span>
                </div>
              </div>
            </Reveal>

            <div className={styles.content}>
              <Reveal>
                <div className={styles.text}>
                  <p>
                    Jmenuji se Lucy a&nbsp;jsem interiérová designérka působící v&nbsp;Praze
                    a&nbsp;okolí. Věřím, že každý prostor má svůj příběh
                    a&nbsp;každý domov by měl odrážet osobnost a&nbsp;životní styl
                    svých obyvatel.
                  </p>
                  <p>
                    Můj přístup je založen na pečlivém naslouchání klientům
                    a&nbsp;vytváření prostorů, které jsou nejen krásné, ale především
                    funkční a&nbsp;autentické. Spolupracuji s&nbsp;řemeslníky
                    a&nbsp;dodavateli, které znám a&nbsp;kterým důvěřuji,
                    abych zajistila kvalitu od&nbsp;konceptu až po&nbsp;realizaci.
                  </p>
                  <p>
                    Specializuji se na byty a&nbsp;rodinné domy. Ať už jde
                    o&nbsp;kompletní rekonstrukci, nebo jen o&nbsp;úpravu interiéru,
                    vždy se snažím vytvořit prostor, kde se budete cítit skutečně doma.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className={styles.quoteSection}>
          <div className={`container ${styles.quoteInner}`}>
            <span className="eyebrow eyebrow--light">Filozofie</span>
            <p className={styles.quote}>
              Nejlepší interiér je takový, na který za rok nebudete chtít sahat
              — a&nbsp;za deset let si na něm pořád budete najít něco nového.
            </p>
            <span className={`eyebrow eyebrow--light ${styles.quoteAuthor}`}>
              Lucy, Designérka
            </span>
          </div>
        </section>
      </Reveal>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className={styles.valuesHeader}>
              <span className="eyebrow">Můj přístup</span>
              <h2 className={styles.valuesTitle}>
                Čtyři věci,<br />kterými se řídím.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className={styles.valuesGrid}>
              {values.map((value, idx) => (
                <div key={value.title} className={styles.valueCard}>
                  <span className={styles.valueNumber}>0{idx + 1}</span>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <span className="eyebrow">Pojďme se poznat</span>
              <h2 className={styles.ctaTitle}>
                Napište mi pár vět<br />o&nbsp;vašem projektu.
              </h2>
            </div>
            <Link href="/kontakt" className="btn">
              Domluvit konzultaci
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
