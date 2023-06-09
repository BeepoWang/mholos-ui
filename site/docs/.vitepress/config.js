export default {
  base: process.env.NODE_ENV === 'production' ? 'mholos' : '/',
  themeConfig: {
    siteTitle: 'Mholos UI',
    nav: [
      { text: '指南', link: '/guild/installation' },
      { text: '组件', link: '/components/button/index' }
    ],
    socialLinks: [{ icon: 'github', link: '' }],
    sidebar: {
      '/guild/': [
        {
          text: '基础',
          items: [
            { text: '安装', link: '/guild/installation' },
            { text: '快速开始', link: '/guild/quickstart' }
          ]
        },
        {
          text: '进阶',
          items: [{ text: 'xxx', link: '/xxxx' }]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [{ text: 'Button', link: '/components/button/index' }]
        }
      ]
    }
  }
};
