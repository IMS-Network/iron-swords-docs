import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ספר המדריכים למתנדב',
  tagline: 'אתר ההסברה הבינלאומי למלחמת חרבות ברזל',
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

  scripts: [
    {
      src: 'data:text/javascript,!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://forms.ims-network.net/api/packages/website";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e),setTimeout(function(){window.formbricks.init({environmentId:"cm0koyuj3005ujh81kahurco1",apiHost:"https://forms.ims-network.net"})},500);}();',
    }
  ],

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
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/iron-swords-background.jpg',
    navbar: {
      title: 'ספר המדריכים למתנדב',
      logo: {
        alt: 'חרבות ברזל',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'hasbara',
          position: 'left',
          html: '<i class="fas fa-light-bulb"></i> אתר ההסברה', 
        },
        {
          type: 'docSidebar',
          sidebarId: 'heroes',
          position: 'left',
          html: '<i class="fas fa-heart"></i> גיבורים',
        },
        {
          type: 'docSidebar',
          sidebarId: 'legal',
          position: 'left',
          label: 'חוק ותקן',
        },
        {
          type: 'dropdown',
          label: 'קישורים חיצוניים',
          position: 'right',
          items: [
            {
              href: 'https://iron-swords.co.il/',
              html: '<i class="fas fa-home"></i> אתר חרבות ברזל',
            },
            {
              href: 'https://app.clickup.com/9018603423/home',
              html: '<i class="fas fa-tasks"></i> קליקאפ',
            },
            {
              href: 'https://heroes.iron-swords.co.il/',
              html: '<i class="fas fa-user-shield"></i> פורטל הגיבורים',
            },
            {
              href: 'https://discord.gg/88aZaVxDy5',
              html: '<i class="fab fa-discord"></i> דיסקורד',
            },
          ],
        },
      {
        type:'dropdown',
        label: 'חברות וארגונים שותפים',
        position: 'right',
        items: [
          {
            href: 'https://tegriai.com/',
            label: 'TeGriAi',
          },
          {
            href: 'https://ims-network.net/',
            label: 'איי.אמ.אס טכנולוגיות',
          },
          {
            href: 'https://גיימינג.ישראל',
            label: 'איגוד הגיימינג הישראלי',
          },
        ],
      },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        
      ],
      copyright: `כל הזכויות שמורות לעם ישראל © ${new Date().getFullYear()}.
        <br> ביחד ננצח 🇮🇱🎗️ <br>
        הפרויקט אינו קשור לממשלת ישראל, לצה"ל או לכל גוף ממשלתי אחר, והוא מיזם עצמאי של ישראלים.`,

    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
