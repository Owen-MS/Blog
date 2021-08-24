# Ref

## 前置知识了解
### useEffect 和 useLayoutEffect
**useEffect**

对于 useEffect 执行，
 React 处理逻辑是采用异步调用 ， 对于每一个 effect 的 callback，
  React 会向 setTimeout回调函数一样，放入任务队列，
  等到主线程任务完成，DOM 更新，js 执行完成，视图绘制完毕，才执行。
  所以 effect 回调函数不会阻塞浏览器绘制视图。
  
**useLayoutEffect**

- 首先 useLayoutEffect 是在DOM 绘制之前，这样可以方便修改 DOM ，这样浏览器只会绘制一次，
如果修改 DOM 布局放在 useEffect ，那 useEffect 执行是在浏览器绘制视图之后，接下来又改 DOM ，
就可能会导致浏览器再次回流和重绘。而且由于两次绘制，视图上可能会造成闪现突兀的效果。
- useLayoutEffect callback 中代码执行会阻塞浏览器绘制。
## 
