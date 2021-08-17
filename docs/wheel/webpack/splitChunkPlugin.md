# splitChunks讲述

## 默认配置
webpack 将根据以下条件自动拆分 chunks：

- 新的 chunk 可以被共享，或者模块来自于 node_modules 文件夹
- 新的 chunk 体积大于 20kb（在进行 min+gz 之前的体积）
- 当按需加载 chunks 时，并行请求的最大数量小于或等于 30
- 当加载初始化页面时，并发请求的最大数量小于或等于 30
当尝试满足最后两个条件时，最好使用较大的 chunks。


```js
module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'async', // 有效值为 all，async 和 initial。 all意味着chunk可以在异步和非异步chunk之间共享
      minSize: 20000, // 生成chunk的最小体积（以 bytes 为单位）
      //  仅在剩余单个 chunk 时生效
      minRemainingSize: 0, // 通过确保拆分过后剩余的最小chunk体积超过限制来避免大小为零的模块。开发环境默认0，其他情况，默认为minSize的值。（基本不需要手动指定）
      minChunks: 1, // 拆分前必须共享模块的最小 chunks 数
      maxAsyncRequests: 30, // 按需加载时的最大并行请求数。
      maxInitialRequests: 30, // 入口点的最大并行请求数
      enforceSizeThreshold: 50000, // 强制执行拆分的体积阈值和其他限制（minRemainingSize，maxAsyncRequests，maxInitialRequests）将被忽略。
      cacheGroups: { // 缓存组可以继承和/或覆盖来自 splitChunks.* 的任何选项。但是 test、priority 和 reuseExistingChunk 只能在缓存组级别上进行配置。将它们设置为 false以禁用任何默认缓存组。
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // 权重优先级
          reuseExistingChunk: true, // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块。这可能会影响 chunk 的结果文件名。
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};

```

## 配置那么多，我们抓最基本的几个点

### chunks
- async表示只从异步加载得模块（动态加载import()）里面进行拆分
- initial表示只从入口模块进行拆分
- all表示以上两者都包括
```jsx
import React from 'react'; // initial 
import ReactDOM from 'react-dom' // initial

const App = () => {
  let Page = null
  import('./routes/order').then(res => { // async
    Page = res
  })
  return (
    <div>
      <div>App</div>
      <Page/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
```

### 核心配置 cacheGroups

介绍一下`cacheGroups`，我们的`splictChunks`根据我们在缓存中定义的规则，如我们在上面所写的默认配置，
可以看到`webpack`为我们默认写来两个规则，

如果引用来自`node_modules`的命中`defaultVendors`对象规则，生成`defaultVendors.chunk.js`文件

如果引用来自其他文件目录的文件，例如我们的`components`或者`utils`的文件，被引用了2次及以上次数，命中
`default`规则，则生成`default.chunk.js`文件。

### 其他限制配置maxAsyncRequests/maxInitialRequests...
像其他这些配置项，我们对命中规则来做一些条件的约束，例如默认条件中，

`maxInitialRequests`：我们默认`initial`从入口开始拆分支持拆分30个文件，如果超过这个限制，那么就不再拆分，
而是会打包进当前chunk中。是用来限制入口的拆分数量

注意点：
- 入口文件本身算一个请求
- 如果入口里面有动态加载得模块这个不算在内
- 通过runtimeChunk拆分出的runtime不算在内
- 只算js文件的请求，css不算在内
- 如果同时有两个模块满足`cacheGroup`的规则要进行拆分，
但是`maxInitialRequests`的值只能允许再拆分一个模块，那尺寸更大的模块会被拆分出来

`maxAsyncRequests`：是用来限制异步模块内部的并行最大请求数的，说白了你可以理解为是每个import()它里面的最大并行请求数量。

当整个项目打包完之后，一个按需加载的包最终被拆分成 n 个包，maxAsyncRequests 就是用来限制 n 的最大值
- import()文件本身算一个请求

- 并不算js以外的公共资源请求比如css

- 如果同时有两个模块满足`cacheGroup`的规则要进行拆分，但是`maxAsyncRequests`的值只能允许再拆分一个模块，那尺寸更大的模块会被拆分出来


