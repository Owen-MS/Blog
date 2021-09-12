## Fiber的心智模型
## 什么是代数效应。

代数效用是函数式编程的一个概念，用于将副作用从函数中分离。

async具有传染性。

## 代数效用在React中的应用

[suspense](https://codesandbox.io/s/frosty-hermann-bztrp?file=/src/index.js)
异步，但是是同步写法

## 代数效应与Generator

从React15到React16，协调器（Reconciler）重构的一大目的是：将老的同步更新的架构变为异步中断更新。

异步可中断更新可以理解为：更新在执行过程中可能会被打断（浏览器时间分片用尽或有更高优任务插队），当可以
继续执行时恢复之前执行的中间状态。

这就是浏览器原生支持类似的实现，这就是Generator。

但是Generator的一些缺陷使React团队放弃了他：
- 类似async，Generator也是传染性的，使用Generator则上下文的其他函数也需要作出改变。这样心智负担比较重
- Generator执行的中间状态是上下文关联的，是顺序的。

## 代数效应与fiber
Fiber并不是计算机术语中的新名词，他的中文翻译叫做纤程，与进程（process）、线程（Thread）、协程（Coroutine）同为程序执行过程。

在很多文章中将纤程理解为协程的一种实现。在JS中，协程的实现便是Generator。

所以我们可以将纤程（Fiber）、协程（Generator）理解为代数效应思想在JS中的体现。

React Fiber可以理解为：

React内部实现的一套状态更新机制。支持任务不同优先级，可中断与恢复，并且恢复后可以复用之前的中间状态。

