'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navLinks = [
  { href: '/projekty', label: 'Projekty' },
  { href: '/sluzby', label: 'Služby' },
  { href: '/aktuality', label: 'Aktuality' },
  { href: '/o-mne', label: 'O mně' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Lucy Design<span className={styles.logoDot}>.</span>
        </Link>

        <nav className={styles.nav} aria-label="Hlavní navigace">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/kontakt" className={`btn ${styles.cta}`}>
            Kontakt
          </Link>
        </nav>

        <button
          ref={buttonRef}
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>

        {isMenuOpen && (
          <nav
            ref={menuRef}
            id="mobile-nav"
            className={styles.mobileNav}
            aria-label="Mobilní navigace"
          >
            <ul className={styles.mobileNavList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`${styles.mobileNavLink} ${
                      pathname === link.href ? styles.active : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className={styles.mobileCtaItem}>
                <Link
                  href="/kontakt"
                  onClick={closeMenu}
                  className={`btn ${styles.mobileCta}`}
                >
                  Domluvit konzultaci
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
