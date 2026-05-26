import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { projects } from '@/data/projects';
import { posts, categories } from '@/data/posts';
import styles from './page.module.css';

const services = [
  {
    title: 'Interiérový koncept',
    description:
      'Komplexní návrh prostoru — dispozice, materiály, světlo a atmosféra v souladu s vaším životem.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="6" cy="6" r="1.5" />
        <line x1="10" y1="6" x2="18" y2="6" />
        <circle cx="6" cy="12" r="1.5" />
        <line x1="10" y1="12" x2="18" y2="12" />
        <circle cx="6" cy="18" r="1.5" />
        <line x1="10" y1="18" x2="18" y2="18" />
      </svg>
    ),
  },
  {
    title: 'Nábytek na míru',
    description:
      'Jedinečné kusy navržené přesně pro váš prostor — od kuchyně přes vestavěné skříně až po speciální solitéry.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <line x1="4" y1="7" x2="20" y2="7" />
        <circle cx="9" cy="7" r="1.8" fill="currentColor" stroke="none" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <circle cx="15" cy="12" r="1.8" fill="currentColor" stroke="none" />
        <line x1="4" y1="17" x2="20" y2="17" />
        <circle cx="11" cy="17" r="1.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Realizace na klíč',
    description:
      'Od projektové dokumentace po předání hotového interiéru. Koordinace řemeslníků i autorský dozor.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="4" y="4" width="7" height="7" />
        <rect x="13" y="4" width="7" height="7" />
        <rect x="4" y="13" width="7" height="7" />
        <rect x="13" y="13" width="7" height="7" />
      </svg>
    ),
  },
];

const testimonial = {
  quote:
    'Lucy vytvořila interiér, který přesně odpovídá našemu životnímu stylu. Každý detail byl promyšlený a celý proces byl naprosto profesionální.',
  name: 'Klára Novotná',
  role: 'Klient, Praha',
  image: '/images/about.jpg',
};

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-');
  return `${parseInt(d, 10)}. ${parseInt(m, 10)}. ${y.slice(2)}`;
}

export default function Home() {
  const featuredProject = projects[0];
  const homeProjects = projects.slice(0, 3);
  const homePosts = posts.slice(0, 3);

  return (
    <>
      {/* === HERO === */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/images/hero.jpg"
            alt="Interiér v Praze"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className="eyebrow eyebrow--light">Studio v Praze</span>
            <h1 className={styles.heroTitle}>
              Interiér,
              <br />
              který má&nbsp;smysl.
            </h1>
            <Link href="/kontakt" className="btn btn--outline-light">
              Domluvit konzultaci
            </Link>
          </div>

          <a href="#sluzby" className={styles.scrollDown} aria-label="Posunout na další sekci">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="6 13 12 19 18 13" />
            </svg>
          </a>
        </div>

        <Link href={`/projekty/${featuredProject.slug}`} className={styles.heroFeatured}>
          <span className={styles.heroFeaturedSide}>Vybrané</span>
          <div className={styles.heroFeaturedBody}>
            <span className="eyebrow">{featuredProject.location}, {featuredProject.year}</span>
            <span className={styles.heroFeaturedTitle}>{featuredProject.title}</span>
          </div>
        </Link>
      </section>

      {/* === SLUŽBY === */}
      <section id="sluzby" className="section">
        <div className="container">
          <Reveal>
            <div className={styles.sectionHeader}>
              <div>
                <span className="eyebrow">Služby</span>
                <h2 className={styles.sectionTitle}>Co umím nejlépe.</h2>
              </div>
              <Link href="/sluzby" className="btn">
                Všechny služby
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <div key={service.title} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceText}>{service.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* === DARK QUOTE / O LUCY === */}
      <Reveal>
        <section className={styles.quoteSection}>
          <div className={styles.quoteImage}>
            <Image
              src="/images/about.jpg"
              alt="Interiér od Lucy Design"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.quoteOverlay} />
          </div>
          <div className={`container ${styles.quoteInner}`}>
            <span className="eyebrow eyebrow--light">O Lucy</span>
            <p className={styles.quoteText}>
              Věřím, že každý prostor má svůj příběh — a každý domov by měl
              odrážet osobnost a životní styl těch, kdo v něm bydlí.
            </p>
            <div className={styles.quoteAuthor}>
              <span className="eyebrow eyebrow--light">Lucy, Interiérová designérka</span>
            </div>
          </div>
        </section>
      </Reveal>

      {/* === PROJEKTY === */}
      <section className={`section ${styles.projectsSection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.projectsIntro}>
              <span className="eyebrow eyebrow--light">Moje práce</span>
              <h2 className={styles.projectsHeadline}>
                Podívejte se,<br />co spolu vytvoříme.
              </h2>
              <Link href="/projekty" className="btn btn--outline-light">
                Všechny projekty
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className={styles.projectsGrid}>
              {homeProjects.map((project, idx) => (
                <Link
                  key={project.slug}
                  href={`/projekty/${project.slug}`}
                  className={`${styles.projectCard} ${idx === 1 ? styles.projectCardOffset : ''}`}
                >
                  <div className={styles.projectImage}>
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.projectGradient} />
                  </div>
                  <div className={styles.projectOverlay}>
                    <span className={`eyebrow eyebrow--light ${styles.projectLocation}`}>
                      {project.location}, {project.year.slice(2)}
                    </span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                  </div>
                  <span className={styles.projectDate}>
                    {project.year}
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* === FEATURED TESTIMONIAL (dark slider) === */}
      <Reveal>
        <section className={styles.testimonialSection}>
          <div className={styles.testimonialImage}>
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.testimonialContent}>
            <div className={styles.testimonialBody}>
              <h2 className={styles.testimonialName}>{testimonial.name}</h2>
              <p className={styles.testimonialQuote}>{testimonial.quote}</p>
              <span className={`eyebrow eyebrow--light ${styles.testimonialRole}`}>
                {testimonial.role}
              </span>
            </div>
          </div>
        </section>
      </Reveal>

      {/* === O AUTORCE (Behind the design) === */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className={styles.sectionHeader}>
              <div>
                <span className="eyebrow">O autorce</span>
                <h2 className={styles.sectionTitle}>Za designem.</h2>
              </div>
              <Link href="/o-mne" className="btn">
                Více o Lucy
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className={styles.authorGrid}>
              <Link href="/o-mne" className={styles.authorCard}>
                <div className={styles.authorImage}>
                  <Image
                    src="/images/about.jpg"
                    alt="Lucy — interiérová designérka"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.authorOverlay}>
                  <h3 className={styles.authorName}>Lucy</h3>
                  <span className={`eyebrow eyebrow--light ${styles.authorRole}`}>Designérka</span>
                </div>
              </Link>

              <div className={styles.authorBio}>
                <p>
                  Jmenuji se Lucy a věnuji se interiérovému designu v Praze. 
                  Mým cílem je vytvořit prostor, kde se každý den budete cítit
                  doma — od první konzultace po předání klíčů.
                </p>
                <p>
                  Specializuji se na byty a rodinné domy v Praze a okolí. 
                  Spolupracuji s vybranými řemeslníky a dodavateli, kteří 
                  sdílí stejný důraz na kvalitu a detail.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* === AKTUALITY / BLOG === */}
      <section className={`section ${styles.postsSection}`}>
        <div className="container">
          <div className={styles.postsLayout}>
            <aside className={styles.postsSidebar}>
              <span className="eyebrow">Kategorie</span>
              <ul className={styles.categoryList}>
                {categories.map((cat) => (
                  <li key={cat}>
                    <Link href="/aktuality" className={styles.categoryLink}>
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>

            <div className={styles.postsMain}>
              <Reveal>
                <div className={styles.postsHeader}>
                  <div>
                    <span className="eyebrow">Aktuality</span>
                    <h2 className={styles.sectionTitle}>Co je nového?</h2>
                  </div>
                  <Link href="/aktuality" className="btn">
                    Všechny články
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className={styles.postsGrid}>
                  {homePosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/aktuality#${post.slug}`}
                      className={styles.postCard}
                    >
                      <div className={styles.postImage}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <h3 className={styles.postTitle}>{post.title}</h3>
                      <p className={styles.postExcerpt}>{post.excerpt}</p>
                      <div className={styles.postMeta}>
                        <span className="eyebrow">{post.category}</span>
                        <span className={styles.postDate}>{formatDate(post.date)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
