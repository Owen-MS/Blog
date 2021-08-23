
module.exports = {
  title: '黑木小课堂开课了',
  description: 'waiting for some one',
  base: '/Blog/',
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: '主页', link: '/' },
      { text: 'React', link: '/web/react/' },
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
      { text: '随笔', link: '/diary/' },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/Owen-MS/Blog' },
    ],
    sidebar: [
      {
        title: 'React',   // 必要的
        path: '/web/react/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title: '基础篇',
            children: [
              '/web/react/jsx'
            ]
          }
        ]
      }
    ],
    // sidebar: {
    //   '/wheel/webpack/': [
    //     '',
    //     'browserslist',
    //     'chunk-bundle',
    //     'splitChunkPlugin'
    //   ],
    //   '/diary/': [
    //     '21-08-21'
    //   ],
    //
    //   '/web/react/': [
    //     'base'
    //   ]
    // },
  },
}
