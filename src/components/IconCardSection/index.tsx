import React from 'react';
import styles from './styles.module.css';

function IconCardSection() {
  return (
    <section className={styles.iconCardSection}>
      <div className={styles.card}>
        <i className={`${styles.icon} fas fa-fingerprint`}></i>
        <h3 className={styles.cardTitle}>פרטיות</h3>
      </div>
      <div className={styles.card}>
        <i className={`${styles.icon} fas fa-shield-alt`}></i>
        <h3 className={styles.cardTitle}>אבטחה</h3>
      </div>
      <div className={styles.card}>
        <i className={`${styles.icon} fas fa-search`}></i>
        <h3 className={styles.cardTitle}>שקיפות</h3>
      </div>
    </section>
  );
}

export default IconCardSection;
