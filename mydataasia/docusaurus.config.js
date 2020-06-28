module.exports = {
  title: 'MyData Asia',
  tagline: 'Make it happen, make it right!',
  url: 'https://mydataasia.org',
  baseUrl: '/',
  favicon: 'https://mydata.org/wp-content/uploads/sites/5/2017/11/mydata_favicon.png',
  organizationName: 'MyDataAsia', // Usually your GitHub org/user name.
  projectName: 'MyDataAsia.github.io', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    image: "/img/mydata_s.png",
    navbar: {
      title: 'MyData Asia',
      logo: {
        alt: 'MyData Logo',
        src: 'img/mydata.png',
      },
      links: [
        {
          to: 'docs/about',
          label: 'ABOUT',
          position: 'right',
        },
        {to: 'blog', label: 'BLOG', position: 'right'},
        {
          to: 'docs/contact_us',
          label: 'CONTACT US',
          position: 'right',
        },
        {
          href: 'https://github.com/MyDataAsia/website',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: '1fc83b0b0634079f0f14bc72f668ecc8',
      indexName: 'mydataasia',
      //appId: 'OUFRJMXD6B', // Optional, if you run the DocSearch crawler on your own
      //algoliaOptions: {}, // Optional, if provided by Algolia
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'MYDATA ASIA HUB',
          items: [
            {
              label: 'About',
              to: 'docs/',
            },
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
        {
          title: 'THE COMMUNITY',
          items: [
            {
              label: 'Slack',
              href: 'https://mydataglobal.slack.com/archives/hub-asia',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@MyDataAsia',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/MydataAsia',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/groups/MyDataAsia/',
            },
          ],
        },
        {
          title: 'MYDATA GLOBAL',
          items: [
            {
              label: 'MyData Global',
              href: 'https://mydata.org',
            },
          ],
        },
      ],
      copyright: `Copyright: (CC BY 4.0) ${new Date().getFullYear()} MyData.org. Built with Docusaurus. Government by Luiza Peixe from the Noun Project. Government by Made x Made from the Noun Project. Bee pollination by Monika from the Noun Project.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'about',
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
