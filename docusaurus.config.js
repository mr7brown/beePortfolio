// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bhavya Suri | Portfolio",
  tagline:
    " As a versatile and accomplished medical writer, I bring expertise in various writing styles, from highly scientific research manuscripts to clinical practice guidelines, media-focused pieces, and more. With a solid understanding of medicine and clinical agent administration, I am adept at guiding scientific work creation and collaborating with volunteer leaders and medical writing teams.",
  favicon: "img/favicon.ico",
  url: "https://github.com",
  baseUrl: "/portfolio/", // Update baseURL to Github path.
  organizationName: "mr7brown", // Usually your GitHub org/username.
  projectName: "portfolio", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  deploymentBranch: "gh-pages",
  themeConfig: {
    algolia: {
      apiKey: "",
      indexName: "",
      contextualSearch: true,
      placeholder: "Search Bhavya's portfolio",
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "My Site Logo",
          src: "img/logoB.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Portfolio",
          },
          {
            href: "https://drive.google.com/file/d/1ui81pGcaMe3-oVA-w57roe4YxnonUmlC/view?usp=sharing", // Update to resume link.
            label: "Resume",
            position: "right",
          },
          // {
          //   href: "https://github.com/mr7brown", // Update URL to Github profile.
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      // Update footer to match appropriate external links
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Portfolio",
          //       to: "/docs/intro",
          //     },
          //   ],
          // },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/facebook/docusaurus",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bhavya Suri`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = {
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  },
};

module.exports = config;
