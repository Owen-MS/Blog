
module.exports = {
  title: '黑木小课堂开课了',
  description: 'waiting for some one',
  base: '/Blog/',
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: '主页', link: '/' },
      { text: '前端',
        items: [
          { text: 'JavaScript', link: '/web/js/' },
          { text: 'css', link: '/web/css/' },
          { text: '网络', link: '/web/network/' },
          { text: '数据结构', link: '/web/dataStructure/' },
        ]
      },
      { text: '工程', link: '/wheel/' ,
        items: [
          { text: 'webpack', link: '/wheel/webpack/' }
        ]
      },
      { text: '收藏', link: '/collect/' },
      { text: 'Go', link: '/go/' },
      { text: 'Node', link: '/node/' },
      { text: '日记', link: '/diary/' },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/Owen-MS/Blog' },
    ],
    sidebar: {
      '/wheel/webpack/': [
        '',
        'browserslist'
      ]
    },
    sidebarDepth: 1,
  },
}
