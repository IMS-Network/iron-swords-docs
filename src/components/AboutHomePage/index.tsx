import React from 'react';
import styles from './styles.module.css';
import { MdOutlineVolunteerActivism, MdOutlineCreate, MdOutlineSearch } from 'react-icons/md';

const AboutHomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>הצטרפו אלינו בפרויקט הסברה לאומי 🇮🇱 🎗️</h1>
      <h2 className={styles.subtitle}>🚨 אנחנו זקוקים לעזרתכם 🚨</h2>
      <p className={styles.text}>
        אנחנו מרימים אתר הסברה לאומי חדש במטרה להציג את המידע האמין והעדכני ביותר על המלחמה מול הטרור.
        מטרתנו להראות לעולם כולו שחמאס הם מחבלים ולא ממשלה לגיטימית, תוך הדגשת גבורתם של חללי צה"ל ונפגעי הטרור.
      </p>
      <div>
        <h3 className={styles.subtitle}>איך אפשר לעזור?</h3>
        <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <MdOutlineVolunteerActivism className={styles.icon} />
          <p>אם יש לכם זמן פנוי ורצון להתנדב לעזור למאמץ המלחמתי אז הירשמו בטופס למטה</p>
        </div>
        <div className={styles.card}>
          <MdOutlineCreate className={styles.icon} />
          <p>עזרו לנו לכתוב כ-2,000 פוסטים (600 לחללים ו-1400 לנרצחים)</p>
        </div>
        <div className={styles.card}>
          <MdOutlineSearch className={styles.icon} />
          <p>בשביל לספר את הסיפור שלהם, הגיבורים שנפלו במלחמה על הקיום שלנו בארץ ישראל</p>
        </div>
      </div>
      </div>
      <h3 className={styles.subtitle}>מה צריך לדעת?</h3>
      <ul className={styles.list}>
        <li>לעשות שימוש במקלדת ועכבר</li>
        <li>לחפש מידע באינטרנט ולדעת לעשות שימוש בבינה מלאכותית</li>
        <li>אנגלית ברמה טובה (ערבית, רוסית, צרפתית, ספרדית)</li>
        <li>רוח התנדבות, בגרות ומוטיבציה</li>
      </ul>
      <p className={styles.text}>
        <strong>יחד, נוכל ליצור זיכרון תמידי ברשת לכל אחד מהחללים והנרצחים, תוך הגנה על כבוד ישראל וחשיפת האמת לעולם</strong>
      </p>
    </div>
  );
}

export default AboutHomePage;
