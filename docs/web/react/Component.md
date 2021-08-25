# 起源Component

## 一 起源

在React世界里，一切皆组件，我们写的React项目起源于组件。组件可以分为两类，一类是类（Class）组件
一类是函数（Function）组件。


## 二 什么是React组件
```jsx
/* 类 */
class textClass {
    sayHello=()=>console.log('hello, my name is heimu')
}
/* 类组件 */
class Index extends React.Component{
    state={ message:`hello ，world!` }
    sayHello=()=> this.setState({ message : 'hello, my name is heimu' })
    render(){
        return <div style={{ marginTop:'50px' }} onClick={ this.sayHello } > { this.state.message }  </div>
    }
}
/* 函数 */
function textFun (){ 
    return 'hello, world'
}
/* 函数组件 */
function FunComponent(){
    const [ message , setMessage ] = useState('hello,world')
    return <div onClick={ ()=> setMessage('hello, my name is heimu')  } >{ message }</div>
}
```
我们从上面清楚看到，组件本质上就是类和函数，但是与常规的类和函数不同的是，**组件承载了渲染视图的UI
更新和更新视图的setState、useState等方法。** React在底层逻辑上会像正常实例化类和正常执行函数那样处理的
组件。

因此，函数和类的特性在React组件上同样具有，比如原型链，继承，静态属性等，所以不要把React组件和类与函数
独立开来。
我们一起着重看一下 React 对组件的处理流程。

** 对于类组件的执行，是在react-reconciler/src/ReactFiberClassComponent.js中：**
```js
function constructClassInstance(
    workInProgress, // 当前正在工作的 fiber 对象
    ctor,           // 我们的类组件
    props           // props 
){
     /* 实例化组件，得到组件实例 instance */
     const instance = new ctor(props, context)
}
```
**对于函数组件的执行，是在react-reconciler/src/ReactFiberHooks.js中**
```js
function renderWithHooks(
  current,          // 当前函数组件对应的 `fiber`， 初始化
  workInProgress,   // 当前正在工作的 fiber 对象
  Component,        // 我们函数组件
  props,            // 函数组件第一个参数 props
  secondArg,        // 函数组件其他参数
  nextRenderExpirationTime //下次渲染过期时间
){
     /* 执行我们的函数组件，得到 return 返回的 React.element对象 */
     let children = Component(props, secondArg);
}
```
从中，找到了执行类组件和函数组件的函数。那么为了搞清楚 React 底层是如何处理组件的，
首先来看一下**类和函数组件是什么时候被实例化和执行的？**
                    
在React调和渲染fiber节点的时候，如果发现fiber tag是ClassComponent = 1，则按照类组件逻辑处理，
如果是FunctionComponent = 0则按照函数组件逻辑处理。当然React也提供类一些内置的组件。比如说Suspense
、Profiler等

## 三 两种不同React组件

### class类组件

在class组件中，除了继承React.Component,底层还加入类updater对象，组件中调用的setState和forceUpdate
本质上是调用类Updater对象上的enqueueSetState和enqueueForceUpdate方法。

::: tip
react/src/ReactBaseClasses.js
:::

```js
function Component(props, context, updater) {
  this.props = props; // 绑定props
  this.context = context; // 绑定context
  this.refs = emptyObject; // 绑定ref
  this.updater = updater || ReactNoopUpdateQueue; //上面所属的updater 对象
}
/* 绑定setState 方法 */
Component.prototype.setState = function(partialState, callback) {
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
}
/* 绑定forceupdate 方法 */
Component.prototype.forceUpdate = function(callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
}
```

由上可以看出Component底层React的处理逻辑是，类组件执行构造函数过程中会在实例上绑定props和context，
初始化置空refs属性，原型链上绑定setState、forceUpdate方法。对于updater，React在实例化类组件之后会
单独绑定update对象。

::: tip

```js
/* 假设我们在 constructor 中这么写 */
constructor() {
    super()
    console.log(this.props) // 打印 undefined 为什么?
}
```

绑定 props 是在父类 Component 构造函数中，
执行 super 等于执行 Component 函数，
此时 props 没有作为第一个参数传给 super() ，
在 Component 中就会找不到 props 参数，从而变成 undefined ，
在接下来 constructor 代码中打印 props 为 undefined 。

```js
/* 解决问题 */
constructor(props) { 
    super(props)
}
```

:::

```jsx
class Index extends React.Component{
    constructor(...arg){
       super(...arg)                        /* 执行 react 底层 Component 函数 */
    }
    state = {}                              /* state */
    static number = 1                       /* 内置静态属性 */
    handleClick= () => console.log(111)     /* 方法： 箭头函数方法直接绑定在this实例上 */
    componentDidMount(){                    /* 生命周期 */
        console.log(Index.number,Index.number1) // 打印 1 , 2 
    }
    render(){                               /* 渲染函数 */
        return <div style={{ marginTop:'50px' }} onClick={ this.handerClick }  >hello,React!</div>
    }
}
Index.number1 = 2                           /* 外置静态属性 */
Index.prototype.handleClick = ()=> console.log(222) /* 方法: 绑定在 Index 原型链的 方法*/
```

### 函数组件

```jsx
function Index(){
    console.log(Index.number) // 打印 1 
    const [ message , setMessage  ] = useState('hello,world') /* hooks  */
    return <div onClick={() => setMessage('let us learn React!')  } > { message } </div> /* 返回值 作为渲染ui */
 }
 Index.number = 1 /* 绑定静态属性 */
```

::: warning 注意
不要尝试给函数组件 prototype 绑定属性或方法，即使绑定了也没有任何作用，
因为通过上面源码中 React 对函数组件的调用，是采用直接执行函数的方式，而不是通过new的方式。
::: 

## 四 函数组件和类组件本质的区别是什么？

**对于类组件来说，底层只需要实例化一次，实例中保存了组件的state等状态。对于每一次更新只需要调用render
方法以及对应的生命周期就可以了。但是在函数组件中，每一次更新都是新的函数执行，一次函数组件的更新，里面的变量
会重新声明。**

为了能让函数组件可以保存一些状态，执行一些副作用钩子，React Hooks应运而生，它可以帮助记录react中组件的状态
，处理一些额外的副作用。

## 组件通信方式
1. props 和 callback 方式
2. ef 方式。
3. React-redux 或 React-mobx 状态管理方式。
4. context 上下文方式。
5. event bus 事件总线。
