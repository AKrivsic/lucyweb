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

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
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
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({ name: '', email: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <>
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <div className={styles.introInner}>
            <span className="eyebrow">Kontakt</span>
            <h1 className={styles.title}>
              Pojďme<br />si popovídat.
            </h1>
            <p className={styles.subtitle}>
              Napište mi pár vět o&nbsp;vašem prostoru a&nbsp;termínu, kdy
              byste chtěli začít. Ozvu se do&nbsp;48&nbsp;hodin a&nbsp;domluvíme
              se na konzultaci.
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.layout}>
            <aside className={styles.info}>
              <div className={styles.infoBlock}>
                <span className="eyebrow">Email</span>
                <a href="mailto:info@lucydesign.cz" className={styles.infoLink}>
                  info@lucydesign.cz
                </a>
              </div>
              <div className={styles.infoBlock}>
                <span className="eyebrow">Instagram</span>
                <a
                  href="https://instagram.com/lucydesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoLink}
                >
                  @lucydesign
                </a>
              </div>
              <div className={styles.infoBlock}>
                <span className="eyebrow">Oblast</span>
                <span className={styles.infoText}>Praha &amp; okolí</span>
              </div>
              <div className={styles.infoBlock}>
                <span className="eyebrow">Odpověď</span>
                <span className={styles.infoText}>Do 48 hodin</span>
              </div>
            </aside>

            <div className={styles.formWrap}>
              {isSubmitted ? (
                <div className={styles.success}>
                  <span className="eyebrow">Odesláno</span>
                  <h2 className={styles.successTitle}>Děkuji, ozvu se brzy.</h2>
                  <p className={styles.successText}>
                    Vaše zpráva dorazila. Odpovím nejpozději do&nbsp;48&nbsp;hodin.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn btn--outline-dark"
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
                      placeholder="Vaše jméno"
                    />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
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
                      placeholder="vase@email.cz"
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
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
                      placeholder="Pár vět o vašem prostoru, představách a termínu…"
                    />
                    {errors.message && <span className={styles.error}>{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className={`btn ${styles.submitButton}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Odesílám…' : 'Odeslat zprávu'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
