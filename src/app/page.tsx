import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { projects } from '@/data/projects';
import styles from './page.module.css';

export default function Home() {
  // Vezmi první 3 projekty pro sekci "Vybrané projekty"
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/images/hero.jpg"
            alt="Interiérový design v Praze"
            fill
            priority
            sizes="100vw"
            className={styles.heroImageContent}
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Lucy Design</h1>
          <p className={styles.heroText}>
            Nadčasové interiéry v Praze. Od konceptu po realizaci.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/kontakt" className={styles.ctaPrimary}>
              Domluvit konzultaci
            </Link>
            <Link href="/projekty" className={styles.ctaSecondary}>
              Prohlédnout projekty
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Intro */}
      <Reveal>
        <section className={`section ${styles.editorialIntro}`}>
          <div className="container">
            <div className={styles.editorialGrid}>
              <div className={styles.editorialText}>
                <p>
                  Věřím, že každý prostor má svůj příběh. Naslouchám vašim potřebám a vytvářím interiéry, 
                  které jsou nejen krásné, ale především funkční a autentické.
                </p>
                <p>
                  Společně proměníme váš domov v místo, kde se budete cítit skutečně doma.
                </p>
                <p className={styles.editorialMeta}>
                  Oblast: Praha a okolí
                </p>
              </div>
              <div className={styles.editorialImage}>
                <Image
                  src="/images/about.jpg"
                  alt="O přístupu k interiérovému designu"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.editorialImageContent}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Vybrané projekty */}
      <Reveal delay={100}>
        <section className={`section ${styles.featuredProjects}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Vybrané projekty</h2>
            <div className={styles.featuredGrid}>
              {featuredProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projekty/${project.slug}`}
                  className={styles.featuredCard}
                >
                  <div className={styles.featuredImage}>
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.featuredImageContent}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={styles.featuredInfo}>
                    <h3 className={styles.featuredTitle}>{project.title}</h3>
                    <span className={styles.featuredYear}>{project.year}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className={styles.featuredLink}>
              <Link href="/projekty">Zobrazit všechny projekty</Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Služby Preview */}
      <Reveal delay={150}>
        <section className={`section ${styles.services}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Služby</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Interiérový koncept a dispozice</h3>
                <p className={styles.serviceText}>
                  Komplexní návrh prostoru s ohledem na vaše potřeby a životní styl.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Návrh nábytku na míru</h3>
                <p className={styles.serviceText}>
                  Jedinečné kusy navržené přesně pro váš prostor a vkus.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Výběr nábytku a doplňků</h3>
                <p className={styles.serviceText}>
                  Kurátorský výběr kusů, které dokonale ladí s celkovou koncepcí.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Materiály a povrchy</h3>
                <p className={styles.serviceText}>
                  Pečlivý výběr materiálů pro podlahy, stěny a další povrchy.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Kompletní rekonstrukce na klíč</h3>
                <p className={styles.serviceText}>
                  Od projektu až po finální realizaci – vše pod jednou střechou.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Autorský dozor</h3>
                <p className={styles.serviceText}>
                  Zajištění kvality a souladu s návrhem během celé realizace.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Jak to funguje */}
      <Reveal delay={200}>
        <section className={`section ${styles.process}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Jak to funguje</h2>
            <div className={styles.processGrid}>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>01</div>
                <h3 className={styles.processTitle}>Konzultace</h3>
                <p className={styles.processText}>
                  Společně probereme vaše představy, potřeby a představíme si finální podobu prostoru.
                </p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>02</div>
                <h3 className={styles.processTitle}>Koncept</h3>
                <p className={styles.processText}>
                  Vytvořím komplexní návrh včetně dispozice, barev, materiálů a klíčových prvků.
                </p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>03</div>
                <h3 className={styles.processTitle}>Detail</h3>
                <p className={styles.processText}>
                  Provedeme detailní rozpracování projektu a výběr konkrétních produktů a materiálů.
                </p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>04</div>
                <h3 className={styles.processTitle}>Realizace</h3>
                <p className={styles.processText}>
                  Zajistím koordinaci a dozor nad realizací, aby vše proběhlo podle plánu.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Reference */}
      <Reveal delay={250}>
        <section className={`section ${styles.testimonials}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Reference</h2>
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonial}>
                <p className={styles.testimonialText}>
                  "Lucy vytvořila interiér, který přesně odpovídá našemu životnímu stylu. Každý detail byl promyšlený."
                </p>
                <p className={styles.testimonialAuthor}>— Klient, Praha</p>
              </div>
              <div className={styles.testimonial}>
                <p className={styles.testimonialText}>
                  "Profesionální přístup od začátku do konce. Spolupráce byla skvělá a výsledek předčil očekávání."
                </p>
                <p className={styles.testimonialAuthor}>— Klient, Praha</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CTA Pás */}
      <Reveal delay={300}>
        <section className={`section ${styles.ctaSection}`}>
          <div className="container">
            <div className={styles.ctaBox}>
              <p className={styles.ctaText}>
                Napište mi o vašem projektu – ozvu se do 48 hodin.
              </p>
              <Link href="/kontakt" className={styles.ctaPrimary}>
                Kontaktovat
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
