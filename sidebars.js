// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'getting-started',
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/bulk-link',
        'features/bulk-unlink',
        'features/link-summary',
      ],
    },
    'troubleshooting',
    'changelog',
  ],
};

export default sidebars;
