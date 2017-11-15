---
title: React与Vue的区别
date: 2017-8-23 16:31:00
tags: 框架
categories: 框架
description:
---

相同：
- 支持服务端渲染
- 有Virtual DOM
- 组件化开发
- 通过 `props` 参数进行父子组件数据的传递
- 实现 `WebComponents` 规范
- 数据驱动视图
- 支持 `native` 方案——(React native & Vue weex)

不同：
- react 严格只针对MVC的View层 ，Vue 是MVVM模式
- **Virtual DOM 不同**。Vue会跟踪每一个组件的依赖关系，不需要重新渲染整个组件树。 React则是每当应用状态被更改时，全部子组件都会重新渲染——可通过`shouldComponentUpdate` 这个生命周期方法进行控制。
- **组件写法不同**。 React 推荐 JSX + inline Style写法，则是把HTML&CSS全部写入JavaScript中，即'All in JS'。Vue 推荐的是使用 Webpack + Vue-loader 的单文件组件格式，即html&CSS&JS写在同一文件中。
- **数据绑定不同**。 Vue实现了双向数据绑定，React则是单向数据流。
- **State 对象更新不同**。在React应用中是不可改变的，需要使用`setState`方法来更新状态；而Vue中，state对象不是必需的，数据由data属性在Vue对象中进行管理。

