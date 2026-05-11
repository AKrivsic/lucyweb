'use client';

import { useState, FormEvent } from 'react';
import styles from './page.module.css';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Jméno je povinné';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email je povinný';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Neplatný formát emailu';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Zpráva je povinná';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setErrors({
      name: '',
      email: '',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className={styles.title}>Kontakt</h1>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoSection}>
              <h2 className={styles.infoTitle}>Kontaktní informace</h2>
              <div className={styles.infoItem}>
                <strong>Email:</strong>
                <a href="mailto:info@lucydesign.cz" className={styles.infoLink}>
                  info@lucydesign.cz
                </a>
              </div>
              <div className={styles.infoItem}>
                <strong>Instagram:</strong>
                <a 
                  href="https://instagram.com/lucydesign" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.infoLink}
                >
                  @lucydesign
                </a>
              </div>
              <div className={styles.infoItem}>
                <strong>Oblast:</strong>
                <span>Praha a okolí</span>
              </div>
            </div>

            <div className={styles.infoText}>
              <p>
                Napište mi pár vět o vašem prostoru a termínu, kdy byste chtěli začít. 
                Ozvu se do 48 hodin a domluvíme se na konzultaci.
              </p>
            </div>
          </div>

          <div className={styles.formWrapper}>
            {isSubmitted ? (
              <div className={styles.successMessage}>
                <p>Děkuji, ozvu se brzy.</p>
                <button 
                  type="button" 
                  onClick={handleReset}
                  className={styles.resetButton}
                >
                  Poslat další zprávu
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Jméno *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    required
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <span className={styles.error}>{errors.name}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    required
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <span className={styles.error}>{errors.email}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Zpráva *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    required
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <span className={styles.error}>{errors.message}</span>
                  )}
                </div>

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Odesílám...' : 'Odeslat'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
