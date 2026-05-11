import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import styles from './page.module.css';

export default function Projekty() {
  return (
    <section className="section">
      <div className="container">
        <h1 className={styles.title}>Projekty</h1>
        <div className={styles.grid}>
          {projects.map((project, index) => {
            // Použijeme první obrázek z pole images pro thumbnail
            const thumbnailImage = project.images[0] || `/images/projects/project-${(index % 3) + 1}.jpg`;
            
            return (
              <Link 
                key={project.slug} 
                href={`/projekty/${project.slug}`}
                className={styles.projectCard}
              >
                <div className={styles.projectImage}>
                  <Image
                    src={thumbnailImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.projectImageContent}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.projectInfo}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectLocation}>{project.location}</span>
                    <span className={styles.projectYear}>{project.year}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
