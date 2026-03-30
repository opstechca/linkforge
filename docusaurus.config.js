// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LinkForge',
  tagline: 'Bulk Issue Link Manager for Jira',
  favicon: 'img/favicon.ico',

  url: 'https://nag579.github.io',
  baseUrl: '/bulk-issue-linker-for-jira/',

  organizationName: 'nag579',
  projectName: 'bulk-issue-linker-for-jira',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'LinkForge',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/nag579/bulk-issue-linker-for-jira/issues',
            label: 'Support',
            position: 'right',
          },
          {
            href: 'https://github.com/nag579/bulk-issue-linker-for-jira',
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
              { label: 'Getting Started', to: '/getting-started' },
              { label: 'Bulk Link Issues', to: '/features/bulk-link' },
              { label: 'Bulk Unlink Issues', to: '/features/bulk-unlink' },
              { label: 'Link Summary Panel', to: '/features/link-summary' },
            ],
          },
          {
            title: 'Help',
            items: [
              { label: 'Troubleshooting', to: '/troubleshooting' },
              { label: 'Report a bug', href: 'https://github.com/nag579/bulk-issue-linker-for-jira/issues' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LinkForge. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
