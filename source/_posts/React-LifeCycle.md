---
title: 理解 React 生命周期
date: 2017-8-20 16:03:15
tags: React
categories: [新知识]
description:
---

React「just the UI」，相比 Angular、Ember 等完整的解决方案，上手相对容易。不过，React 生命周期还是会让新手迷惑，而掌握每个生命周期方法扮演的角色和执行时间又是至关重要的：
- 什么时候进行事件绑定、数据请求、解除绑定等操作？
- 如何减少不必要的重渲染，提高性能？尽管 React 已经通过特定的算法优化渲染，但折中的处理方式仍会触发一些不必要的渲染。

React 组件的生命周期有三个主要场景：
- 装载（Mounting）：组件被插入到 DOM 中；
- 更新（Updating）：组件重新渲染以更新 DOM；
- 卸载（Unmounting）：组件从 DOM 中移除。

不同的场景会调用不同的生命周期方法，包含 `will` 的方法在某个时间节点**之前**执行，包含 `did` 方法在某个时间节点**之后**执行。

## 初始渲染（装载）
![](./box/Pic/initialMount.svg)
## getDefaultProps
```
object getDefaultProps()
```
该方法在**组件创建时（createClass）执行一次并缓存**返回值。如果组件使用时未设置属性，就从缓存中读取默认属性。**注意**：getDefaultProps() 返回的缓存数据会在所有实例间共享。

*注意：
getDefaultProps 在任何实例创建之前执行，不在装载阶段执行，放在这里只是为了方便理解 React 组件初始化流程。*

## getInitialState
```
object getInitialState()
```
组件装载之前执行一次，返回值用作 this.state 的初始值。

## componentWillMount
```
void componentWillMount()
```
初始渲染之前执行一次，前后端都有。如果在该方法中调用 setState，render() 将接收到更新后的数据，并且只会执行一次（即使状态已经改变）。

## componentDidMount
```
void componentDidMount()
```
初始渲染完成后立即执行一次，只在客户端执行（服务器端没有）。

子组件的 `componentDidMount()` 方法先于父组件之前执行，此时可以操作子组件的任何引用（如操作子组件 DOM）。

在此方法中可进行：

- 与其他 JavaScript 框架集成，如初始化 jQuery 插件；
- 使用 setTimeout/setInterval 设置定时器；
- 通过 Ajax/Fetch 获取数据；
- 绑定 DOM 事件；
- ……

## 更新
更新会在 React 组件初始渲染之后、卸载之前多次发生，属性、状态改变都会触发更新。

属性改变触发的更新流程：
![](./box/Pic/propsChange.svg)
状态改变触发的更新流程：
![](./box/Pic/stateChange.svg)

componentWillReceiveProps
```
void componentWillReceiveProps(
  object nextProps, object nextContext
)
```
组件即将接收新属性之前执行，初始渲染不执行。

该方法用于比较当前属性（`this.props`）和新属性（`nextProps`），以便决定是否通过 `this.setState()` 进行状态转换。此方法中调用 `this.setState()` 不会触发额外的渲染。
```
componentWillReceiveProps: function(nextProps) {
  this.setState({
    likesIncreasing: nextProps.likeCount > this.props.likeCount
  });
}
```

*注意：
一个常犯的错误是**编写此方法内的代码时，假定属性已经改变。**也就是说，即使属性没有改变，React 仍会在后续更新时执行此方法，所以在编写相关逻辑时，应该先判断属性是否发生改变。*

## shouldComponentUpdate
```
boolean shouldComponentUpdate(
  object nextProps, object nextState, object nextContext
)
```
组件接收到新属性或状态时执行，初始渲染及调用 `forceUpdate` 时不执行。

通过比较 `this.props` 与 `nextProps` 及 `this.state` 与 `nextState`，如果确定新属性、状态无需更新组件，则可以返回 `false`。
```
shouldComponentUpdate: function(nextProps, nextState) {
  return nextProps.id !== this.props.id;
}
```
如果 `shouldComponentUpdate` 返回 `false`，此次更新的将跳过 render()，此外，`componentWillUpdate` 和 `componentDidUpdate` 也不会执行。

`shouldComponentUpdate` 默认始终返回 `true`，以保证组件渲染与状态同步。

如果遇到性能瓶颈，尤其是有成百上千组件时，可以考虑使用 `shouldComponentUpdate` 优化应用。

## componentWillUpdate
```
void componentWillUpdate(
  object nextProps, object nextState, object nextContext
)
```
组件接收到新属性或状态即将重新渲染之前执行，初始渲染不执行。

*注意：
**不能**在此方法里使用 this.setState()。如果需要更新状态以响应属性变化，使用 componentWillReceiveProps 替代之。*

## componentDidUpdate
```
void componentDidUpdate(
  object prevProps, object prevState, object prevContext
)```

组件更新后立即执行，初始渲染不执行。可用作操作发生变化 DOM 的时机。


## 卸载
![](./box/Pic/unmount.svg)

## componentWillUnmount
```
void componentWillUnmount()
```

组件即将从 DOM 中卸载之前执行，可在此进行定时器清除、事件解绑等清理工作。

参考链接:
[React Docs: Working With the Browser - Component Lifecycle](https://facebook.github.io/react/docs/working-with-the-browser.html#component-lifecycle)
[React Docs: Component Specs and Lifecycle](https://facebook.github.io/react/docs/component-specs.html)
[React Docs: Advanced Performance](https://facebook.github.io/react/docs/advanced-performance.html)
[Execution sequence of a React component’s lifecycle methods](http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/)
[文章原处](https://csspod.com/understanding-reactjs-lifecycle-methods/)