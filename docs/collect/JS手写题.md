# 手写常见的JS面试题

## 1、寄生组合式继承
```javascript

function Parent(name) {
    this.name = name;
    this.say = () => {
        console.log(111);
    }
}
Parent.prototype.play = () => {
    console.log(222);
}

function Children(name) {
    Parent.call(this);
    this.name = name;
}

Children.prototype = Object.create(Parent.prototype);
Children.prototype.constructor = Children;
```
## 2、compose
```javascript
function fn1(x) {
    return x + 1;
}
function fn2(x) {
    return x + 2;
}
function fn3(x) {
    return x + 3;
}
function fn4(x) {
    return x + 4;
}

const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1));
```
实现代码如下
```javascript
function compose() {
    const arr = [...arguments];
    return function (x) {
        return arr.reduceRight((pre, cur) => {
            return pre += cur(pre);
        }, x)
    }
}
```

## 3、setTimeout模拟实现setInterval（带定时清除）；

setInterval的缺点：
- 使用 setInterval 时，某些间隔会被跳过；（函数操作耗时过长导致的不准确）
- 可能多个定时器会连续执行；

可以这么理解：每个 setTimeout 产生的任务会直接 push 到任务队列中；而 setInterval 在每次把任务 push 到任务队列前，都要进行一下判断(看上次的任务是否仍在队列中，如果有则不添加，没有则添加)。



```javascript

function mySetTimeout(fn, delay) {
    this.timer = null;
    function interval () {
        timer = setTimeout(fn, delay);
        interval();
    }
    interval();
    return {
        calcel: () => clearTimeout(timer)
    }
}
```

## 4、发布订阅模式
题目描述：
实现一个发布订阅模式拥有, 书写一下vue的bus管线

```javascript
class EventEmitter {
    constructor() {
        // handlers是一个map，用于存储事件与回调之间的对应关系
        this.handlers = {}
    }

    // on方法用于安装事件监听器，它接受目标事件名和回调函数作为参数
    on(eventName, cb) {
        // 先检查一下目标事件名有没有对应的监听函数队列
        if (!this.handlers[eventName]) {
            // 如果没有，那么首先初始化一个监听函数队列
            this.handlers[eventName] = []
        }

        // 把回调函数推入目标事件的监听函数队列里去
        this.handlers[eventName].push(cb);
    }

    // emit方法用于触发目标事件，它接受事件名和监听函数入参作为参数
    emit(eventName, ...args) {
        // 检查目标事件是否有监听函数队列
        if (this.handlers[eventName]) {
            // 这里需要对 this.handlers[eventName] 做一次浅拷贝，主要目的是为了避免通过 once 安装的监听器在移除的过程中出现顺序问题
            const handlers = this.handlers[eventName].slice()
            // 如果有，则逐个调用队列里的回调函数
            handlers.forEach((callback) => {
                callback(...args)
            })
        }
    }

    // 移除某个事件回调队列里的指定回调函数
    off(eventName, cb) {
        const callbacks = this.handlers[eventName]
        const index = callbacks.indexOf(cb)
        if (index !== -1) {
            callbacks.splice(index, 1)
        }
    }

    // 为事件注册单次监听器
    once(eventName, cb) {
        // 对回调函数进行包装，使其执行完毕自动被移除
        const wrapper = (...args) => {
            cb(...args)
            this.off(eventName, wrapper)
        }
        this.on(eventName, wrapper)
    }
}
// 使用如下
// const event = new EventEmitter();

// const handle = (...rest) => {
//   console.log(rest);
// };

// event.on("click", handle);

// event.emit("click", 1, 2, 3, 4);

// event.off("click", handle);

// event.emit("click", 1, 2);

// event.once("dbClick", () => {
//   console.log(123456);
// });
// event.emit("dbClick");
// event.emit("dbClick");
```

## 5、数组去重
```javascript
function uniqueArr(arr) {
    return [...new Set(arr)]; // 简单类型
}

function uniqueFunc(arr, uniId){
    const res = new Map(); // 对象去重
    return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));
}
```

## 6、数组扁平化
题目描述:实现一个方法使多维数组变成一维数组
```javascript
// 最常见的递归版本如下：
function flatter(arr) {
    if(!arr.length) return;
    return; arr.reduce((pre, cur) => {
        return Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur];
    }, []);
}
// console.log(flatter([1, 2, [1, [2, 3, [4, 5, [6]]]]]));
```
```javascript
// 迭代的方法
function flatter(arr) {
    if(!arr.length) return;
    while (arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr);
    }
    return arr;
}
// console.log(flatter([1, 2, [1, [2, 3, [4, 5, [6]]]]]));
```