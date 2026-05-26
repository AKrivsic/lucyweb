import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { projects } from '@/data/projects';
import styles from './page.module.css';

export const metadata = {
  title: 'Projekty — Lucy Design',
  description: 'Vybrané interiérové projekty z Prahy a okolí. Byty, rodinné domy a komerční prostory.',
};

export default function Projekty() {
  return (
    <>
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <Reveal>
            <div className={styles.introInner}>
              <span className="eyebrow">Projekty</span>
              <h1 className={styles.title}>
                Co spolu<br />vytvoříme.
              </h1>
              <p className={styles.subtitle}>
                Vybrané realizace z&nbsp;Prahy a&nbsp;okolí. Byty, rodinné domy
                i&nbsp;komerční prostory — každý projekt s&nbsp;důrazem na detail
                a&nbsp;osobní příběh klienta.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.gridSection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.grid}>
              {projects.map((project, idx) => (
                <Link
                  key={project.slug}
                  href={`/projekty/${project.slug}`}
                  className={`${styles.card} ${idx % 3 === 1 ? styles.cardOffset : ''}`}
                >
                  <div className={styles.cardImage}>
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.cardGradient} />
                  </div>
                  <div className={styles.cardOverlay}>
                    <span className={`eyebrow eyebrow--light ${styles.cardLocation}`}>
                      {project.location}, {project.year.slice(2)}
                    </span>
                    <h2 className={styles.cardTitle}>{project.title}</h2>
                  </div>
                  <span className={styles.cardDate}>{project.year}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
