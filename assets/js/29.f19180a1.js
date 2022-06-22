(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{409:function(a,t,v){"use strict";v.r(t);var r=v(45),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"_3-v8工作原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-v8工作原理"}},[a._v("#")]),a._v(" 3-V8工作原理")]),a._v(" "),v("h2",{attrs:{id:"_01-栈空间和堆空间-数据是如何存储的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_01-栈空间和堆空间-数据是如何存储的"}},[a._v("#")]),a._v(" 01｜栈空间和堆空间：数据是如何存储的？")]),a._v(" "),v("p",[a._v("Javascript是一种弱类型、动态的语言。")]),a._v(" "),v("p",[a._v("栈空间: 原始类型（赋值会赋值变量值）；")]),a._v(" "),v("p",[a._v("堆空间: 引用类型（引用类型的赋值是复制引用地址）")]),a._v(" "),v("h3",{attrs:{id:"为什么所有数据不可以都放到栈中"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么所有数据不可以都放到栈中"}},[a._v("#")]),a._v(" 为什么所有数据不可以都放到栈中？")]),a._v(" "),v("p",[a._v("javascript引擎需要用栈来维护程序执行期间上下文的状态。，如果栈空间大来的话，所有的数据都存放在栈空间里面，\n那么会影响到上下文切换的效率，进而又影响到整个程序的执行效率。")]),a._v(" "),v("h2",{attrs:{id:"_02-垃圾回收-垃圾是如何自动回收的。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_02-垃圾回收-垃圾是如何自动回收的。"}},[a._v("#")]),a._v(" 02｜垃圾回收：垃圾是如何自动回收的。")]),a._v(" "),v("p",[a._v("调用栈：当一个函数执行结束之后，Javascript引擎会通过向下移动ESP来销毁该函数保存在栈中的执行上下文；")]),a._v(" "),v("p",[a._v("ESP：记录当前执行状态的指针")]),a._v(" "),v("p",[a._v("堆内存：")]),a._v(" "),v("p",[a._v("基于分代式，分为新生代和老生代。存活时间长短。")]),a._v(" "),v("p",[a._v("新生代：scavenger；1-8M的容量。两次垃圾回收依然还存活的对象，会被移到老生代。\n老生代：mark-compact；mark-sweep；")]),a._v(" "),v("h2",{attrs:{id:"_03-编译器和解释器-v8是如何执行一段javascript代码的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_03-编译器和解释器-v8是如何执行一段javascript代码的"}},[a._v("#")]),a._v(" 03｜编译器和解释器：V8是如何执行一段javascript代码的？")]),a._v(" "),v("h3",{attrs:{id:"编译器和解释器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译器和解释器"}},[a._v("#")]),a._v(" 编译器和解释器：")]),a._v(" "),v("p",[a._v('因为机器不能直接理解我们的所写的代码，所以在执行程序之前，需要将我们所写的代码"翻译"成机器能读懂的机器语言。')]),a._v(" "),v("p",[a._v("按照语言的执行流程，可以把雨呀分为编译型语言和解释型语言。")]),a._v(" "),v("h3",{attrs:{id:"v8如何执行一段javascript代码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#v8如何执行一段javascript代码"}},[a._v("#")]),a._v(" V8如何执行一段javascript代码")]),a._v(" "),v("ul",[v("li",[a._v("V8依据javascript代码生成AST和执行上下文。")]),a._v(" "),v("li",[a._v("基于AST生成字节码")]),a._v(" "),v("li",[a._v("通过解释器执行字节码")]),a._v(" "),v("li",[a._v("通过编译器来优化和编译字节码")])])])}),[],!1,null,null,null);t.default=s.exports}}]);