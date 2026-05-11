'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import styles from './page.module.css';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetail({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastFocusedThumbnailRef = useRef<HTMLDivElement | null>(null);

  if (!project) {
    notFound();
  }

  // Použijeme pole images z projektu
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
    // Return focus to the thumbnail that opened the lightbox
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

  // ESC key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxOpen) {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [lightboxOpen]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  // Focus on close button when lightbox opens
  useEffect(() => {
    if (lightboxOpen && closeButtonRef.current) {
      // Small delay to ensure modal is rendered
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 0);
    }
  }, [lightboxOpen]);

  // Arrow keys handler
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

  // Focus trap - prevent tabbing outside modal
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
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [lightboxOpen]);

  return (
    <>
      <section className="section">
        <div className="container">
          <Link href="/projekty" className={styles.backLink}>
            ← Zpět na projekty
          </Link>

          <div className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.location}>{project.location}</span>
              <span className={styles.year}>{project.year}</span>
            </div>
            <h1 className={styles.title}>{project.title}</h1>
          </div>

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
                style={{ cursor: 'pointer' }}
              >
                <Image
                  src={imageSrc}
                  alt={`${project.title} - obrázek ${idx + 1}`}
                  fill
                  priority={idx === 0}
                  sizes={idx === 0 
                    ? "(max-width: 768px) 100vw, 66vw" 
                    : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className={styles.galleryImage}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>

          <div className={styles.content}>
            <div className={styles.description}>
              <p>{project.description}</p>
            </div>

            <div className={styles.scope}>
              <h2 className={styles.scopeTitle}>Rozsah</h2>
              <ul className={styles.scopeList}>
                {project.scope.map((item, index) => (
                  <li key={index} className={styles.scopeItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          ref={modalRef}
          className={styles.lightboxOverlay} 
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Galerie obrázků: ${project.title}, obrázek ${currentImageIndex + 1} z ${images.length}`}
        >
          <button 
            ref={closeButtonRef}
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Zavřít galerii"
          >
            ×
          </button>
          <div 
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
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
                alt={`${project.title} - obrázek ${currentImageIndex + 1} z ${images.length}`}
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
