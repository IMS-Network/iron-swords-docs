import React from 'react';
import styles from './styles.module.css';
import { MdOutlineVolunteerActivism, MdOutlineCreate, MdOutlineSearch, MdOutlineStar, MdOutlineKeyboard, MdOutlineLanguage } from 'react-icons/md';

const AboutHomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>הצטרפו אלינו בפרויקט הסברה לאומי 🇮🇱 🎗️</h1>
      <h2 className={styles.subtitle}>🚨 אנחנו זקוקים לעזרתכם 🚨</h2>
      <p className={styles.text}>
        אנחנו מרימים אתר הסברה לאומי חדש במטרה להציג את המידע האמין והעדכני ביותר על המלחמה מול הטרור.
        מטרתנו היא לתעד את המלחמה, תוך הדגשת גבורתם של חללי צה"ל ונפגעי הטרור.
      </p>
      <div>
        <h3 className={styles.subtitle}>איך אפשר לעזור?</h3>
        <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <MdOutlineVolunteerActivism className={styles.icon} />
          <p>לעזור למאמץ ההסברתי של מדינת ישראל! להפריך את השקרים של הנאצים תומכי הטרור מסביב לעולם</p>
        </div>
        <div className={styles.card}>
          <MdOutlineCreate className={styles.icon} />
          <p>לתעד את מלחמת העצמאות השנייה של מדינת ישראל!</p>
        </div>
        <div className={styles.card}>
          <MdOutlineStar className={styles.icon} />
          <p>לספר את סיפורי הגיבורים שנפלו בהגנה על הזכות שלנו לחיות במדינת ישראל ארץ ציון וירושליים</p>
        </div>
      </div>

      <h3 className={styles.subtitle}>מה צריך לדעת?</h3>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <MdOutlineKeyboard className={styles.icon} />
          <p>לדעת לעשות שימוש במקלדת ובעכבר שלכם וגם להצליב מידע ממקורות שונים</p>
        </div>
        <div className={styles.card}>
          <MdOutlineLanguage className={styles.icon} />
          <p>אנגלית ברמה טובה (ערבית, רוסית, צרפתית, ספרדית)</p>
        </div>
        <div className={styles.card}>
          <MdOutlineSearch className={styles.icon} />
          <p>רוח התנדבות, בגרות ומוטיבציה</p>
        </div>
      </div>
      </div>
      <h2 className={styles.subtitle}>
        <strong>יחד, נוכל ליצור זיכרון תמידי ברשת לכל אחד מהחללים והנרצחים, תוך הגנה על כבוד ישראל וחשיפת האמת לעולם</strong>
      </h2>
    </div>
  );
}

export default AboutHomePage;
