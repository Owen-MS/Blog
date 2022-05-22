
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
      { text: '浏览器', link: '/browser/'},
      { text: '工程', link: '/wheel/' ,
        items: [
          { text: 'webpack', link: '/wheel/webpack/' }
        ]
      },
      { text: '博客', link: '/collect/' ,
        items: [
          { text: 'skuPath', link: '/collect/skuPath/' },
          { text: 'JS常见手写题', link: '/collect/JS/' },
          { text: '一套面试题', link: '/collect/一套面试题/' },
        ]
      },
      { text: '前端100问', link: '/100/' },
      { text: 'Node', link: '/node/' },
      { text: '随笔', link: '/diary/' },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/Owen-MS/Blog' },
    ],
    sidebar: {
      '/web/react/': [
        {
          title: 'React',   // 必要的
          path: '/web/react/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            {
              title: '基础篇',
              children: [
                '/web/react/jsx',
                '/web/react/Component',
                '/web/react/state',
                '/web/react/props',
                '/web/react/lifecycle',
                '/web/react/Ref',
              ]
            },
            {
              title: '原理篇',
              children: [
                '/web/react/新老架构',
                '/web/react/调度和时间分片',
                '/web/react/Fiber架构的心智模型',
                '/web/react/Fiber架构的实现原理',
                '/web/react/Fiber架构的工作原理',
                '/web/react/事件原理',
              ]
            }
          ]
        }
      ],
      '/web/js/': [
        '',
        'token',
        'browser_module_main'
      ],
      '/wheel/webpack/': [
        '',
        'browserslist',
        'chunk-bundle',
        'splitChunkPlugin'
      ],
      '/diary/': [
        '21-08-21',
        '前端面试',
        '垃圾回收',
        'url渲染'
      ],
      '/100/':[
        '1-10',
        '11-20',
        '21-30',
        '31-40',
        '41-50',
        '51-60',
        '61-70',
        '71-80',
        '81-90',
        '91-100'
      ],
      '/collect/JS/' :[
        '1-10',
        '11-20',
        '21-30',
        '31-36'
      ],
      '/collect/一套面试题/' : [
          '1-10',
          '11-20',
          '21-30'
      ],
      '/browser/': [
          'once',
          '2-浏览器中Javascript执行机制',
          '3-V8工作原理',
          '4-浏览器中的页面循环系统',
          '5-浏览器中页面',
          '6-浏览器中的网络',
          '7-浏览器安全'
      ]
    },
    //
    //   '/web/react/': [
    //     'base'
    //   ]
    // },
  },
}
