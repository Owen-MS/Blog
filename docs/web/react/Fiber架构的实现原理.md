# Fiber架构的实现原理
## 前言
在新的React架构中，我们提到的虚拟DOM在React中有个正式的称呼-Fiber。

## Fiber的起源
我们知道，在React15中，Reconciler采用递归的方式创建虚拟DOM，递归过程中不能中断。如果组件树的层级
很深，递归会占用线程很多时间，造成卡顿。

为了解决这个问题，React16将递归的无法中断的更新重构为异步的可中断更新，由于曾将用于递归的虚拟DOM数据
结构已经无法满足需求。于是，全新的Fiber架构应运而生。

## Fiber的含义

Fiber包含三层含义：

1. 作为架构来说，之前React15的Reconciler采用递归的方式执行，数据保存在递归调用栈中，所以被称为
stack Reconciler。React16的Reconciler基于Fiber节点实现，被称为Fiber Reconciler。

2. 作为静态的数据结构来说，每个Fiber节点对应一个React element，保存了该组件的类型（函数组件/类组件
/原生组件...）对应的DOM节点等信息。

3. 作为动态的工作单元来说，每个Fiber节点，保存了本次更新中该组件改变的状态、要执行的工作（需要被删除/
被插入页面中/被更新...）

## Fiber的结构
```js
function Fiber(
  tag: WorkTag,
  pendingProps: mixeds,
  key: null | string,
  mode: TypeOfMode
){
  // 作为静态数据结构
  this.tag = tag; // Fiber对应组件的类型 Function/Class/Host...
  this.key = key; // key属性
  this.elementType = null; // 大部分情况同type，某些情况不同，比如FunctionComponent使用React.memo包裹
  this.type = null; // 对于 FunctionComponent，指函数本身，对于ClassComponent，指class，对于HostComponent，指DOM节点tagName
  this.stateNode = null; // Fiber对应的真实DOM节点

  // 用于连接其他Fiber节点形成Fiber树
  this.return = null; // 指向父级Fiber节点
  this.child = null; // 指向子Fiber节点
  this.sibling = null; // 指向右边第一个兄弟Fiber节点
  this.index = 0;

  this.ref = null;

  // 作为动态的工作单元的属性
  // 保存本次更新造成的状态改变相关信息
  this.pendingProps = pendingProps;
  this.memoizedProps = null;
  this.updateQueue = null;
  this.memoizedState = null;
  this.dependencies = null;


  this.mode = mode;

  // 保存本次更新会造成的DOM操作
  this.effectTag = NoEffect;
  this.nextEffect = null;
    
  this.firstEffect = null;
  this.lastEffect = null;

 // 调度优先级相关
  this.lanes = NoLanes;
  this.childLanes = NoLanes;

  // 指向该fiber在另一次更新时对应的fiber
  this.alternate = null;
}

```
