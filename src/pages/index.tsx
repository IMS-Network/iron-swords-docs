import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import AboutHomePage from '@site/src/components/AboutHomePage';
import IconCardSection from '../components/IconCardSection';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.fullScreenHeader)}>
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>{siteConfig.title}</h1>
        <p className={styles.headerSubtitle}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="מדריכים מתנדבים אתר ההסברה הבין לאומי למלחמת חרבות בזרל">
      <HomepageHeader />
      <main>
        <IconCardSection />
        <AboutHomePage />
      </main>
    </Layout>
  );
}


