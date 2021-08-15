
# browserslist

## 作用
用在不同前端工具之间共享目标浏览器（需要兼容的浏览器）和Node.js版本的配置

```
比如根据提供的目标浏览器的环境智能添加 css 前缀，实现不同浏览器之间的兼容。
```

## 共享使用browserlist的插件

browserlist 配置并不会单独发挥作用，通常是和其它插件件搭配使用，为其它组件提供目标浏览器。

| 插件  | 功能 |
| ------------- | ------------- |
| Autoprefixer | postcss 添加 css 前缀  |
| bable-preset-env  | 编译预设环境，智能添加 polyfill 垫片代码 |
| eslint-plugin-compat | |
| stylelint-no-unsupported-browser-features | |
| postcss-normalize | |
| ... | |

## 配置语句

| 语句  | 说明 |
| ------------- | ------------- |
| default | > 0.5%, last 2 versions, Firefox ESR, not dead  |
| > 1%  | 全球超过1%人使用的浏览器 |
| last 2 versions | 每个浏览器的最后2个版本 |
| Firefox ESR | |
| postcss-normalize | 火狐最新版本 |
| Firefox > 20 | 指定浏览器的版本范围 |
| not ie <=8 | 排除版本低于和等于8的 ie 浏览器 |
| maintained node versions | 所有 Node.js 版本 |

```JS
options: {
      presets: [
        [require.resolve('@babel/preset-env'), {
          targets: { browsers: '> 1%, last 2 versions' }
        }],
        require.resolve('@babel/preset-react')
      ]
    }
```
