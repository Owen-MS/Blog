(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{454:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"问题与解答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题与解答"}},[t._v("#")]),t._v(" 问题与解答")]),t._v(" "),s("h2",{attrs:{id:"react根据什么来决定是否中断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react根据什么来决定是否中断"}},[t._v("#")]),t._v(" react根据什么来决定是否中断")]),t._v(" "),s("p",[t._v("答：在react的中render阶段，开启Concurrent Mode时，每次便利前，都会通过Scheduler提供的shouldYield方法\n来判断是否需要中断遍历，使浏览器有时间渲染。")]),t._v(" "),s("p",[t._v("是否中断的判断依据，最重要的一点就是每个任务的剩余时间是否用完，shouldYield()函数的作用就是检查时间是否到期。")]),t._v(" "),s("p",[t._v("在Scheduler中，每次到期就会跳出工作循环，把线程的控制权交给浏览器，然后下次任务再继续当前的工作。")]),t._v(" "),s("p",[t._v("这就是我们常说的时间切片。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fps "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    yieldInterval "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" fps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    yieldInterval "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"优先级控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优先级控制"}},[t._v("#")]),t._v(" 优先级控制")]),t._v(" "),s("ul",[s("li",[t._v("生命周期方法：是最高优先级、同步执行")]),t._v(" "),s("li",[t._v("受控的用户输入：比如输入框内输入文字，同步执行")]),t._v(" "),s("li",[t._v("一些交互事件：比如 动画，高优先级执行")])]),t._v(" "),s("p",[t._v("分为5类")]),t._v(" "),s("ul",[s("li",[t._v("立即执行的优先级，级别最高（ImmediatePriority）1")]),t._v(" "),s("li",[t._v("用户阻塞级别的优先级 （UserBlockingPriority）2")]),t._v(" "),s("li",[t._v("正常的优先级（NormalPriority）3")]),t._v(" "),s("li",[t._v("较低的优先级（LowPriority）4")]),t._v(" "),s("li",[t._v("优先级最低（IdlePriority）5，可以闲置。")])]),t._v(" "),s("h3",{attrs:{id:"批处理优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#批处理优化"}},[t._v("#")]),t._v(" 批处理优化")]),t._v(" "),s("h3",{attrs:{id:"starttransition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#starttransition"}},[t._v("#")]),t._v(" startTransition")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" startTransition "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Urgent: Show what was typed")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInputValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Mark any state updates inside as transitions")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startTransition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Transition: Show the results")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSearchQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("所有在 startTransition 回调中的更新都会被认为是 非紧急处理，\n如果出现更紧急的更新（比如用户又输入了新的值），则上面的更新都会被中断，\n直到没有其他紧急操作之后才会去继续执行更新。")]),t._v(" "),s("h3",{attrs:{id:"usedeferredvalue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usedeferredvalue"}},[t._v("#")]),t._v(" useDeferredValue")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("function App() {\n    const [text, setText] = useState('hello');\n    const deferText = useDeferredValue(text, { time : 200 });\n    return (\n        <div>\n            <input value={text} onchange={handleChange} />\n            <MySlowList text={deferText}/>\n        <div>    \n    )\n}\n")])])]),s("p",[t._v("那么它跟我们手动实现的防抖有啥区别呢？")]),t._v(" "),s("p",[t._v("防抖的主要问题是，不管我们的电脑渲染的有多快，它都会有一个固定的延迟，\n而 useDeferredValue 呢，只会在渲染比较耗时的情况下把优先级滞后，在多数情况下是不会有不必要的延迟的。")])])}),[],!1,null,null,null);a.default=e.exports}}]);