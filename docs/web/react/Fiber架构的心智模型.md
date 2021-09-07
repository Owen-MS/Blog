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
