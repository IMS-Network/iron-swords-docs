import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ספר המדריכים למתנדב',
  tagline: 'אתר ההסברה חרבות ברזל',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://docs.iron-swords.co.il',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ims-network', // Usually your GitHub org/user name.
  projectName: 'iron-swords-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'he',
    locales: ['he'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath : '/',
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/IMS-Network/iron-swords-docs/tree/production/',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/updates',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/IMS-Network/iron-swords-docs/tree/production/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/iron-swords-background.png',
    navbar: {
      title: 'ספר המדריכים למתנדב',
      logo: {
        alt: 'חרבות ברזל',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'מדריכים',
        },
        {
          position: 'left',
          label: 'עדכונים וחדשות',
          href: '/updates',
        },
        {
          href: 'https://iron-swords.co.il/',
          label: 'אתר ההסברה',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        
      ],
      copyright: `כל הזכויות שמורות לעם ישראל © ${new Date().getFullYear()}. ביחד ננצח 🇮🇱🎗️`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
