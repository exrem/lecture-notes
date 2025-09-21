import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'content',

  title: 'My Lecture Notes',
  description: "Notes I've taken during the lectures at ADA",
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://raw.githubusercontent.com/jdecked/twemoji/refs/heads/main/assets/svg/1f4dd.svg',
      },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Browse',
        items: [
          { text: 'Contents', link: '/contents' },
          {
            text: "Fall '25",
            items: [
              { text: 'Overview', link: '/fall-25/' },
              { text: 'ECON-1103', link: '/fall-25/econ-1103/' },
              { text: 'HIST-2302', link: '/fall-25/hist-2302/' },
              { text: 'PDEV-0901', link: '/fall-25/pdev-0901/' },
              { text: 'PDEV-2302', link: '/fall-25/pdev-2302/' },
              { text: 'SOCS-1102', link: '/fall-25/socs-1102/' },
              { text: 'WRIT-1101', link: '/fall-25/writ-1101/' },
            ],
          },
        ],
      },
    ],

    sidebar: {
      '/': [
        { text: 'Home', link: '/' },
        { text: 'Contents', link: '/contents' },
        { text: 'Semesters', items: [{ text: "Fall '25", link: '/fall-25/' }] },
      ],
      '/fall-25/': [
        {
          text: "Fall '25",
          items: [
            { text: 'Overview', link: '/fall-25/' },
            { text: 'Principles of Economics', link: '/fall-25/econ-1103/' },
            { text: 'History of Azerbijan', link: '/fall-25/hist-2302/' },
            { text: 'My ADA', link: '/fall-25/pdev-0901/' },
            { text: 'Data & Computing Skills', link: '/fall-25/pdev-2302/' },
            { text: 'Global Perspectives', link: '/fall-25/socs-1102/' },
            { text: 'Writing & Info Literacy', link: '/fall-25/writ-1101/' },
          ],
        },
      ],
      '/fall-25/econ-1103/': [
        {
          text: 'Principles of Economics',
          items: [{ text: 'Overview', link: '/fall-25/econ-1103/' }],
        },
      ],
      '/fall-25/hist-2302/': [
        {
          text: 'History of Azerbaijan',
          items: [{ text: 'Overview', link: '/fall-25/hist-2302/' }],
        },
      ],
      '/fall-25/pdev-0901/': [
        {
          text: 'My ADA',
          items: [{ text: 'Overview', link: '/fall-25/pdev-0901/' }],
        },
      ],
      '/fall-25/pdev-2302/': [
        {
          text: 'Data & Computing Skills',
          items: [{ text: 'Overview', link: '/fall-25/pdev-2302/' }],
        },
      ],
      '/fall-25/socs-1102/': [
        {
          text: 'Global Perspectives',
          items: [{ text: 'Overview', link: '/fall-25/socs-1102/' }],
        },
      ],
      '/fall-25/writ-1101/': [
        {
          text: 'Writing & Info Literacy',
          items: [{ text: 'Overview', link: '/fall-25/writ-1101/' }],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/exrem/lecture-notes' },
    ],
  },

  cleanUrls: true,
})
