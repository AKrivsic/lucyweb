import Image from 'next/image';
import styles from './page.module.css';

const values = [
  'Naslouchání vašim potřebám a představám',
  'Respekt k prostoru a jeho historii',
  'Důraz na kvalitu materiálů a provedení',
  'Nadčasový design, který nestárne',
  'Funkčnost a praktičnost na prvním místě',
];

export default function OMne() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.profile}>
          <div className={styles.profileImageSticky}>
            <div className={styles.profileImage}>
              <Image
                src="/images/about.jpg"
                alt="Lucy Design - Interiérová designérka"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className={styles.profileImageContent}
              />
            </div>
          </div>
          
          <div className={styles.profileContent}>
            <h1 className={styles.title}>O mně</h1>
            
            <div className={styles.text}>
              <p>
                Jmenuji se Lucy a jsem interiérová designérka působící v Praze a okolí. 
                Věřím, že každý prostor má svůj příběh a každý domov by měl odrážet 
                osobnost a životní styl svých obyvatel.
              </p>
              <p>
                Můj přístup k interiérovému designu je založen na pečlivém naslouchání 
                klientům a vytváření prostorů, které jsou nejen krásné, ale především 
                funkční a autentické. Spolupracuji s řemeslníky a dodavateli, které 
                znám a kterým důvěřuji, abych zajistila kvalitu od konceptu až po 
                realizaci.
              </p>
              <p>
                Specializuji se na byty a rodinné domy v Praze a okolí. Ať už jde o 
                kompletní rekonstrukci nebo jen o úpravu interiéru, vždy se snažím 
                vytvořit prostor, kde se budete cítit skutečně doma.
              </p>
            </div>

            <div className={styles.values}>
              <h2 className={styles.valuesTitle}>Můj přístup</h2>
              <ul className={styles.valuesList}>
                {values.map((value, index) => (
                  <li key={index} className={styles.valuesItem}>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
