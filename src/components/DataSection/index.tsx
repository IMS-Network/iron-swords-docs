import React from 'react';
import styles from './styles.module.css';
import { motion } from 'framer-motion';

const DataSection: React.FC = () => {
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.section 
      className={styles.dataSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className={styles.sectionTitle}>נתונים</h2>
      <ul className={styles.dataList}>
        {[
          "6000+ דפים",
          "3 מיליון מבקרים לחודש",
          "40 מיליון חיפושים בגוגל",
          "3.1 מיליון חיפושים במנוע החיפוש בינג",
          "1 מיליון חיפושים במנוע החיפוש הרוסי yandex",
        ].map((text, i) => (
          <motion.li 
            key={i}
            custom={i}
            variants={listItemVariants}
            initial="hidden"
            animate="visible"
            className={styles.listItem}
          >
            {text}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default DataSection;
