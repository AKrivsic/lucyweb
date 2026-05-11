'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on ESC key
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

  // Close menu on click outside
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          Lucy Design
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link 
                href="/projekty"
                className={pathname === '/projekty' ? styles.active : ''}
              >
                Projekty
              </Link>
            </li>
            <li>
              <Link 
                href="/sluzby"
                className={pathname === '/sluzby' ? styles.active : ''}
              >
                Služby
              </Link>
            </li>
            <li>
              <Link 
                href="/o-mne"
                className={pathname === '/o-mne' ? styles.active : ''}
              >
                O mně
              </Link>
            </li>
            <li>
              <Link 
                href="/kontakt"
                className={pathname === '/kontakt' ? styles.active : ''}
              >
                Kontakt
              </Link>
            </li>
          </ul>
          <Link href="/kontakt" className={styles.ctaButton}>
            Konzultace
          </Link>
        </nav>
        <button 
          ref={buttonRef}
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
        {isMenuOpen && (
          <nav 
            ref={menuRef}
            id="mobile-nav"
            className={styles.mobileNav}
            aria-label="Mobile navigation"
          >
            <ul className={styles.mobileNavList}>
              <li className={styles.mobileCtaItem}>
                <Link href="/kontakt" onClick={closeMenu} className={styles.mobileCtaButton}>
                  Konzultace
                </Link>
              </li>
              <li>
                <Link 
                  href="/projekty" 
                  onClick={closeMenu}
                  className={pathname === '/projekty' ? styles.active : ''}
                >
                  Projekty
                </Link>
              </li>
              <li>
                <Link 
                  href="/sluzby" 
                  onClick={closeMenu}
                  className={pathname === '/sluzby' ? styles.active : ''}
                >
                  Služby
                </Link>
              </li>
              <li>
                <Link 
                  href="/o-mne" 
                  onClick={closeMenu}
                  className={pathname === '/o-mne' ? styles.active : ''}
                >
                  O mně
                </Link>
              </li>
              <li>
                <Link 
                  href="/kontakt" 
                  onClick={closeMenu}
                  className={pathname === '/kontakt' ? styles.active : ''}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
