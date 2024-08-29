import React from 'react';
import styles from './styles.module.css';

function IconCardSection() {
  return (
    <section className={styles.iconCardSection}>
      <h2 className={styles.sectionTitle}>מה תרצו לעשות היום?</h2>
      <div className={styles.cardContainer}>
        <a href="/category/%D7%9E%D7%AA%D7%97%D7%99%D7%9C%D7%99%D7%9D" className={styles.card}>
          <i className={`${styles.icon} fas fa-user-graduate`}></i>
          <h3 className={styles.cardTitle}>מתחילים</h3>
        </a>
        <a href="/category/%D7%A1%D7%95%D7%92%D7%99-%D7%AA%D7%95%D7%9B%D7%9F" className={styles.card}>
          <i className={`${styles.icon} fas fa-file-alt`}></i>
          <h3 className={styles.cardTitle}>סוגי תוכן</h3>
        </a>
        <a href="/category/%D7%97%D7%95%D7%A7-%D7%95%D7%AA%D7%A7%D7%9F" className={styles.card}>
          <i className={`${styles.icon} fas fa-balance-scale`}></i>
          <h3 className={styles.cardTitle}>חוק ותקן</h3>
        </a>
      </div>
    </section>
  );
}

export default IconCardSection;
