(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{459:function(t,s,a){"use strict";a.r(s);var r=a(45),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"browserslist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browserslist"}},[t._v("#")]),t._v(" browserslist")]),t._v(" "),a("h2",{attrs:{id:"作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),a("p",[t._v("用在不同前端工具之间共享目标浏览器（需要兼容的浏览器）和Node.js版本的配置")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("比如根据提供的目标浏览器的环境智能添加 css 前缀，实现不同浏览器之间的兼容。\n")])])]),a("h2",{attrs:{id:"共享使用browserlist的插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#共享使用browserlist的插件"}},[t._v("#")]),t._v(" 共享使用browserlist的插件")]),t._v(" "),a("p",[t._v("browserlist 配置并不会单独发挥作用，通常是和其它插件件搭配使用，为其它组件提供目标浏览器。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("插件")]),t._v(" "),a("th",[t._v("功能")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Autoprefixer")]),t._v(" "),a("td",[t._v("postcss 添加 css 前缀")])]),t._v(" "),a("tr",[a("td",[t._v("bable-preset-env")]),t._v(" "),a("td",[t._v("编译预设环境，智能添加 polyfill 垫片代码")])]),t._v(" "),a("tr",[a("td",[t._v("eslint-plugin-compat")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("stylelint-no-unsupported-browser-features")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("postcss-normalize")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("...")]),t._v(" "),a("td")])])]),t._v(" "),a("h2",{attrs:{id:"配置语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置语句"}},[t._v("#")]),t._v(" 配置语句")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("语句")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("default")]),t._v(" "),a("td",[t._v("> 0.5%, last 2 versions, Firefox ESR, not dead")])]),t._v(" "),a("tr",[a("td",[t._v("> 1%")]),t._v(" "),a("td",[t._v("全球超过1%人使用的浏览器")])]),t._v(" "),a("tr",[a("td",[t._v("last 2 versions")]),t._v(" "),a("td",[t._v("每个浏览器的最后2个版本")])]),t._v(" "),a("tr",[a("td",[t._v("Firefox ESR")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("postcss-normalize")]),t._v(" "),a("td",[t._v("火狐最新版本")])]),t._v(" "),a("tr",[a("td",[t._v("Firefox > 20")]),t._v(" "),a("td",[t._v("指定浏览器的版本范围")])]),t._v(" "),a("tr",[a("td",[t._v("not ie <=8")]),t._v(" "),a("td",[t._v("排除版本低于和等于8的 ie 浏览器")])]),t._v(" "),a("tr",[a("td",[t._v("maintained node versions")]),t._v(" "),a("td",[t._v("所有 Node.js 版本")])])])]),t._v(" "),a("div",{staticClass:"language-JS extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      presets"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/preset-env'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          targets"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" browsers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'> 1%, last 2 versions'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/preset-react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);