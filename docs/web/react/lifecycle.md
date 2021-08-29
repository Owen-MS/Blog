# 理解lifeCycle

## 一、前言

在React生命周期之中，我们在jsx渲染时候了解了，如何从jsx - React element - fiber - Dom这样一个渲染过程。

这包含了React两个重要阶段，render阶段和commit阶段，React在调和（render）阶段会深度遍历React fiber树，
目的就是发现不同的（diff），不同的地方就是接下来需要更新的地方，对于变化的组件，就回执行render函数。在一次
调和过程完毕之后就到了commit阶段，commit阶段会创建修改真实的DOM节点。

如果在一次调和的过程中，法系哪里一个fiber tag = 1 类组件的情况，就回按照类组件的逻辑来处理。
对于类组件的处理逻辑，首先判断类组件是否已经被创建过，看源码。

```js  {1}
// react-reconciler/src/ReactFiberBeginWork.js


```
