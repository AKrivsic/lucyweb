'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, use } from 'react';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetail({ params }: PageProps) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastFocusedThumbnailRef = useRef<HTMLDivElement | null>(null);

  if (!project) {
    notFound();
  }

  const images = project.images;

  const openLightbox = (index: number, thumbnailElement: HTMLDivElement | null) => {
    if (thumbnailElement) {
      lastFocusedThumbnailRef.current = thumbnailElement;
    }
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    if (lastFocusedThumbnailRef.current) {
      lastFocusedThumbnailRef.current.focus();
      lastFocusedThumbnailRef.current = null;
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxOpen) closeLightbox();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [lightboxOpen]);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  useEffect(() => {
    if (lightboxOpen && closeButtonRef.current) {
      setTimeout(() => closeButtonRef.current?.focus(), 0);
    }
  }, [lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };
    document.addEventListener('keydown', handleArrowKeys);
    return () => document.removeEventListener('keydown', handleArrowKeys);
  }, [lightboxOpen, images.length]);

  useEffect(() => {
    if (!lightboxOpen || !modalRef.current) return;
    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [lightboxOpen]);

  return (
    <>
      <section className={`section ${styles.section}`}>
        <div className="container">
          <Link href="/projekty" className={styles.backLink}>
            <span aria-hidden>←</span> Zpět na projekty
          </Link>

          <header className={styles.header}>
            <div className={styles.headerMeta}>
              <span className="eyebrow">
                {project.location}, {project.year}
              </span>
            </div>
            <h1 className={styles.title}>{project.title}</h1>
          </header>

          <div className={styles.gallery}>
            {images.map((imageSrc, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  thumbnailRefs.current[idx] = el;
                }}
                className={`${styles.galleryItem} ${idx === 0 ? styles.galleryItemFirst : ''}`}
                onClick={() => openLightbox(idx, thumbnailRefs.current[idx])}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(idx, thumbnailRefs.current[idx]);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Otevřít obrázek ${idx + 1} z galerie`}
              >
                <Image
                  src={imageSrc}
                  alt={`${project.title} — obrázek ${idx + 1}`}
                  fill
                  priority={idx === 0}
                  sizes={idx === 0
                    ? '(max-width: 768px) 100vw, 66vw'
                    : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  }
                  className={styles.galleryImage}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>

          <div className={styles.content}>
            <div className={styles.description}>
              <span className="eyebrow">O projektu</span>
              <p>{project.description}</p>
            </div>

            <div className={styles.scope}>
              <span className="eyebrow">Rozsah</span>
              <ul className={styles.scopeList}>
                {project.scope.map((item, index) => (
                  <li key={index} className={styles.scopeItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.ctaBlock}>
            <p className={styles.ctaText}>
              Máte podobný projekt? Pojďme si o&nbsp;tom popovídat.
            </p>
            <Link href="/kontakt" className="btn">
              Domluvit konzultaci
            </Link>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div
          ref={modalRef}
          className={styles.lightboxOverlay}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Galerie: ${project.title}, obrázek ${currentImageIndex + 1} z ${images.length}`}
        >
          <button
            ref={closeButtonRef}
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Zavřít galerii"
          >
            ×
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.lightboxArrow}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Předchozí obrázek"
            >
              ←
            </button>
            <div className={styles.lightboxImageWrapper}>
              <Image
                src={images[currentImageIndex]}
                alt={`${project.title} — obrázek ${currentImageIndex + 1} z ${images.length}`}
                fill
                sizes="100vw"
                className={styles.lightboxImage}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <button
              className={styles.lightboxArrow}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Další obrázek"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
