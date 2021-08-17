# module、chunk、bundle有啥区别?

## bundle
Glossary：Bundle: bundle 由许多不同的模块生成，包含已经经过加载和编译过程的源文件的最终版本。

## chunk
   
Glossary：Chunk: 此 webpack 特定术语在内部用于管理捆绑过程。输出束（bundle）由块组成，
其中有几种类型（例如 entry 和 child ）。
通常，块 直接与 输出束 (bundle）相对应，
但是，有些配置不会产生一对一的关系。

## module
Glossary Module: Module 
是离散功能块，相比于完整程序提供了更小的接触面。
精心编写的模块提供了可靠的抽象和封装界限，使得应用程序中每个模块都具有条理清楚的设计和明确的目的。


## 大白话解释：
module是webpack支持解析的模块；

chunk包含多个module，存在于webpack处理过程中的阶段；

bundle包含一个或多个chunk，是源码经过webpack处理后的最终版本；


## 举例 splitChunks

假设我们的`entry`有A和B两个入口，A和B都引入了`lodash`，打包出来的除了
A和B对应的`A.bundle.js`和`B.bundle.js`之外还有一个`vendors.js`包含lodash的bundle的文件。

1、你的项目入口（entry）

2、通过import()动态引入的代码

3、通过splitChunks拆分出来的代码

chunk包含着module，可能是一对多也可能是一对一。

这就是我们的两个module，生成了两个chunk，然后split，生成新的chunk，然后最后打包出来了3个bundle
