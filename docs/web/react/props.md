# 深入props

## 一、前言

props的作用：将每个组件联系起来。

再次回想一次render的过程，就是调用React.createElement形成新的element过程，新的element上就会有
新的props属性，这个新props就是重新渲染视图的关键所在。

## 二、理解props

### 1. props是什么？
```jsx
/* props 定义绑定 */
class Index extends React.Component{
    state={  
        mes: "hello,React"
    }
    node = null
    say= () =>  this.setState({ mes:'let us learn React!' })
    render(){
        return <div>
            <PropsComponent  
               mes={this.state.mes}  // ① props 作为一个渲染数据源
               say={ this.say  }     // ② props 作为一个回调函数 callback
               Component={ ChidrenComponent } // ③ props 作为一个组件
               renderName={ ()=><div> my name is alien </div> } // ④ props 作为渲染函数
            >
                { ()=> <div>hello,world</div>  } { /* ⑤ render props, 和4的区别就是放到了children属性上 */ }
                <ChidrenComponent />             { /* ⑥ render component 插槽组件 */ }
            </PropsComponent>
        </div>
    }
}
```
### 2. React如何定义props？
- 组件中-传递信息
- 更新机制中-衍生出purComponent，memo等性能优化方案
- React插槽层面-转换成children属性。


