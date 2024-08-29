import React from 'react';
import styles from './styles.module.css';


function IconCardSection() {
  return (
    <section className={styles.iconCardSection}>
      <h2 className={styles.sectionTitle}>מה תרצו לעשות היום?</h2>
      <div className={styles.cardContainer}>
        <a href="/privacy" className={styles.card}>
          <i className={`${styles.icon} fas fa-fingerprint`}></i>
          <h3 className={styles.cardTitle}>פרטיות</h3>
        </a>
        <a href="/security" className={styles.card}>
          <i className={`${styles.icon} fas fa-shield-alt`}></i>
          <h3 className={styles.cardTitle}>אבטחה</h3>
        </a>
        <a href="/transparency" className={styles.card}>
          <i className={`${styles.icon} fas fa-search`}></i>
          <h3 className={styles.cardTitle}>שקיפות</h3>
        </a>
      </div>
    </section>
  );
}

export default IconCardSection;
