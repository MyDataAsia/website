module.exports = {
  title: 'MyData Asia',
  tagline: 'Make it happen, make it right!',
  url: 'https://mydataasia.org',
  baseUrl: '/',
  favicon: 'https://mydata.org/wp-content/uploads/sites/5/2017/11/mydata_favicon.png',
  organizationName: 'MyDataAsia', // Usually your GitHub org/user name.
  projectName: 'MyDataAsia.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'MyData Asia',
      logo: {
        alt: 'MyData Logo',
        src: 'img/mydata.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/MyDataAsia/website',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'MyData Global',
              href: 'https://mydata.org',
            },
            {
              label: 'Slack',
              href: 'https://mydataglobal.slack.com/archives/hub-asia',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/MydataAsia',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/MyDataAsia/website',
            },
          ],
        },
      ],
      copyright: `Copyright: (CC BY 4.0) ${new Date().getFullYear()} MyData.org. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/MyDataAsia/website/edit/master/mydataasia/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/MyDataAsia/website/edit/master/mydataasia/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
