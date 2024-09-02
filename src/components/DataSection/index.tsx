import React from 'react';
import styles from './styles.module.css';

const DataSection: React.FC = () => {
  return (
    <section className={styles.dataSection}>
      <h2 className={styles.sectionTitle}>נתונים</h2>
      <ul className={styles.dataList}>
        <li>6000+ דפים</li>
        <li>3 מיליון מבקרים לחודש</li>
        <li>40 מיליון חיפושים בגוגל</li>
        <li>3.1 מיליון חיפושים במנוע החיפוש בינג</li>
        <li>1 מיליון חיפושים במנוע החיפוש הרוסי yandex</li>
      </ul>
    </section>
  );
}

export default DataSection;
