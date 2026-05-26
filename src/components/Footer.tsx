import Link from 'next/link';
import styles from './Footer.module.css';

const navLinks = [
  { href: '/projekty', label: 'Projekty' },
  { href: '/sluzby', label: 'Služby' },
  { href: '/aktuality', label: 'Aktuality' },
  { href: '/o-mne', label: 'O mně' },
  { href: '/kontakt', label: 'Kontakt' },
];

const socials = [
  { href: 'https://instagram.com/lucydesign', label: 'Instagram', handle: '@lucydesign' },
  { href: 'mailto:info@lucydesign.cz', label: 'Email', handle: 'info@lucydesign.cz' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.brand}>
              Lucy Design<span className={styles.brandDot}>.</span>
            </Link>
            <h4 className={styles.aboutTitle}>O studiu</h4>
            <p className={styles.about}>
              Interiérový design v Praze. Vytvářím nadčasové prostory s důrazem
              na detail, funkčnost a osobnost klienta — od konceptu po realizaci.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Navigace</h4>
            <ul className={styles.list}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Sledujte mě</h4>
            <ul className={styles.list}>
              {socials.map((s) => (
                <li key={s.label} className={styles.socialItem}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={styles.link}
                  >
                    <span className={styles.socialDot} aria-hidden />
                    <span>{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Lucy Design. Všechna práva vyhrazena.</p>
          <p className={styles.area}>Praha &amp; okolí</p>
        </div>
      </div>
    </footer>
  );
}
