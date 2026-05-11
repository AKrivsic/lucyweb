import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.brand}>Lucy Design</h3>
            <p className={styles.description}>
              Interiérový design v Praze. Od konceptu po realizaci.
            </p>
          </div>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Kontakt</h4>
            <div className={styles.contactLinks}>
              <a href="mailto:info@lucydesign.cz" className={styles.link}>
                Email
              </a>
              <a 
                href="https://instagram.com/lucydesign" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                Instagram
              </a>
            </div>
          </div>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Oblast</h4>
            <p className={styles.area}>Praha a okolí</p>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© {currentYear} Lucy Design</p>
        </div>
      </div>
    </footer>
  );
}
