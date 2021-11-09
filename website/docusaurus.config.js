// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Meshtastic",
  tagline: "Open Source hiking, pilot, skiing and secure GPS mesh communicator",
  url: "https://meshtastic.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/meshtastic-design/web/favicon.ico",
  organizationName: "meshtastic",
  projectName: "meshtastic",
  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'play_store_workaround',
      content:
        'Android app unavailable in the Google Play Store store. Install by side-loading from <a href="https://github.com/meshtastic/Meshtastic-Android/releases">GitHub</a> or from <a href="https://www.amazon.com/Geeksville-Industries-Meshtastic/dp/B08CY9394Q">Amazon</a>.',
      backgroundColor: '#ff9999',
      textColor: '#091E42',
      isCloseable: false,
    },
    navbar: {
      title: "Meshtastic",
      logo: {
        alt: "Meshtastic Logo",
        src: "img/meshtastic-design/logo/svg/Mesh_Logo_Black.svg",
        srcDark: "img/meshtastic-design/logo/svg/Mesh_Logo_White.svg",
      },
      items: [
        {
          to: "docs/getting-started",
          activeBasePath: "docs/getting-started",
          label: "Getting Started",
          position: "left",
        },
        {
          to: "docs/software",
          activeBasePath: "docs/software",
          label: "Software",
          position: "left",
        },
        {
          to: "docs/hardware",
          activeBasePath: "docs/hardware",
          label: "Hardware",
          position: "left",
        },
        {
          to: "docs/developers",
          activeBasePath: "docs/developers",
          label: "Developers",
          position: "left",
        },
        {
          href: "https://meshtastic.discourse.group",
          label: "Forum",
          position: "left",
        },
        {
          href: "https://github.com/meshtastic/meshtastic",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting-started",
            },
            {
              label: "Software",
              to: "docs/software",
            },
            {
              label: "Hardware",
              to: "docs/hardware",
            },
            {
              label: "Developers",
              to: "docs/developers",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Forum",
              href: "https://meshtastic.discourse.group",
            },
            {
              label: "Discord",
              href: "https://discord.gg/UQJ5QuM7vq",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/meshtastic/meshtastic",
            },
            {
              label: "Legal",
              to: "docs/legal",
            },
          ],
        },
      ],
      copyright: `Meshtastic® trademark is a registered trademark belonging to Geeksville Industries LLC`,
    },
    algolia: {
      apiKey: "01ad7e13d3fe392d2ad26da3c69dbc21",
      indexName: "meshtastic",
      contextualSearch: false,
      searchParameters: {},
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/meshtastic/meshtastic/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

module.exports = config;
