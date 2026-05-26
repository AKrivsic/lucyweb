import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { posts, categories } from '@/data/posts';
import styles from './page.module.css';

export const metadata = {
  title: 'Aktuality — Lucy Design',
  description: 'Inspirace, tipy a poznatky ze světa interiérového designu od Lucy Design.',
};

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-');
  return `${parseInt(d, 10)}. ${parseInt(m, 10)}. ${y.slice(2)}`;
}

export default function Aktuality() {
  return (
    <>
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <Reveal>
            <div className={styles.introInner}>
              <span className="eyebrow">Aktuality</span>
              <h1 className={styles.title}>
                Co je<br />nového?
              </h1>
              <p className={styles.subtitle}>
                Inspirace, tipy a&nbsp;poznatky ze světa interiérového designu.
                Krátká zamyšlení z&nbsp;mé praxe — od&nbsp;materiálů přes
                projekty až po&nbsp;zákulisí&nbsp;práce.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.listSection}`}>
        <div className="container">
          <div className={styles.layout}>
            <aside className={styles.sidebar}>
              <span className="eyebrow">Populární kategorie</span>
              <ul className={styles.categoryList}>
                {categories.map((cat) => (
                  <li key={cat}>
                    <span className={styles.categoryLink}>{cat}</span>
                  </li>
                ))}
              </ul>
            </aside>

            <div className={styles.main}>
              <Reveal>
                <div className={styles.grid}>
                  {posts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`#${post.slug}`}
                      id={post.slug}
                      className={styles.card}
                    >
                      <div className={styles.cardImage}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <h2 className={styles.cardTitle}>{post.title}</h2>
                      <p className={styles.cardExcerpt}>{post.excerpt}</p>
                      <div className={styles.cardMeta}>
                        <span className="eyebrow">{post.category}</span>
                        <span className={styles.cardDate}>{formatDate(post.date)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </Reveal>

              <p className={styles.note}>
                Pracuji na plných verzích jednotlivých článků. Brzy zde najdete víc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
