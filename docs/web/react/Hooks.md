# Hooks原理

## 前言

问题：
- 1、React Hooks为什么必须在函数组件内部执行？React如何能够监听React Hooks在外部执行并抛出并抛出异常.
- 2、React Hooks如何能把状态保存起来？保存的信息存在了哪里？
答：FunctionComponent对应的fiber中。
```js
const fiber = {
  // 保存该FunctionComponent对应的Hooks链表
  memoizedState: null,
  // 指向App函数。
  stateNode: App
}
```
在更新的时候又从fiber中拿到
- 3、React Hooks为什么不能写在条件语句中？
- 4、useMemo内部引用了useRef为什么不需要添加依赖项，而useState就要添加依赖。
- 5、useEffect添加依赖项props.a, 为什么props.a改变，useEffect回调函数create重新执行。
- 6、React内部如何区别useEffect和useLayoutEffect，执行时机有什么不同？
答：
