import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import AboutHomePage from '@site/src/components/AboutHomePage';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          פורטל המדריכים למתנדב
        </Heading>
        <h2 className="hero__subtitle">{siteConfig.tagline}</h2>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro">
            מדריכים
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/updates">
            עדכונים וחדשות
          </Link>
        </div>
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
        <AboutHomePage />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}


