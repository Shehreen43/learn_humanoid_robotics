import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI Robotics Book',
  tagline: 'Master Physical AI, ROS2, and Embodied Intelligence',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // --- GitHub Pages Production URL ---
  url: 'https://Shehreen43.github.io',
  baseUrl: '/learn_humanoid_robotics/',
  trailingSlash: false,

  // --- GitHub Repo Info ---
  organizationName: 'Shehreen43',
  projectName: 'learn_humanoid_robotics',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Shehreen43/learn_humanoid_robotics/tree/main/frontend/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/Shehreen43/learn_humanoid_robotics/tree/main/frontend/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'AI Robotics',
      logo: {
        alt: 'AI Robotics Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Course Modules',
        },
        {
          to: '/docs/intro/physical-ai-intro',
          label: 'About Physical AI',
          position: 'left',
        },
        {
          href: 'https://github.com/Shehreen43/learn_humanoid_robotics',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Shehreen43/learn_humanoid_robotics',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI Robotics Book. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
