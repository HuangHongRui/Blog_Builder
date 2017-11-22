---
title: 'Cookie,WebStorage'
date: 2017-8-8 18:34:21
tags: WebStorage
categories: HTTP
---


具体 WebStorage API参考：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

### Cookie:
出生：1993年3月
主要用途：保存登录信息（如你登录某个网站市场可以看到“记住密码”，这通常就是通过在 Cookie 中存入一段辨别用户身份的数据来实现的。)
一般两个作用： 识别用户身份 & 记录历史
1. Cookie 是浏览器访问服务器后，服务器传给浏览器的一段数据。
2. 浏览器需要保存这段数据，不得轻易删除。
3. 此后每次浏览器访问该服务器，都必须带上这段数据。

### localStorage:
HTML5 标准中新加入的技术.
IE 6 时代，有一个叫 userData 的东西用于本地存储，而当时考虑到浏览器兼容性，更通用的方案是使用 Flash。
如今，localStorage 被大多数浏览器所支持，如果你的网站需要支持 IE6+，那以 userData 作为你的 polyfill 的方案是种不错的选择。
不参与网络传输。
一般用于性能优化，可以保存图片、js、css、html 模板、大量数据。

### sessionStorage:

与 localStorage 的接口类似，但保存数据的生命周期与 localStorage 不同。
sessionStorage 是一个前端的概念，它只可以将一部分数据在当前会话中保存下来，刷新页面数据依旧存在。但当页面关闭后，sessionStorage 中的数据就会被清空。

|性质|Cookie|localStorage|sessionStorage|
|:------:|:-:   |:---:        |:---:|
|大小          |4k|5M|5M|
| 生命周期 | 一般由服务器生成，可设置失效时间。如在浏览器端生成Cookie，默认是关闭浏览器后失效 |需手动清除，否则永久保存 | 只在当前会话下有效，关闭页面或浏览器后被清除|
|与服务器端通信 | 每次都会携带在HTTP头中，如使用cookie保存过多数据会带来性能问题| 只在浏览器中保存，不参与和服务器的通信 |<=一致 |
| 易用性|需要自己封装，源生的Cookie接口不友好 |源生接口可以接受，亦可再次封装来对Object和Array有更好的支持 | <=一致 |



使用场景

考虑到每个 HTTP 请求都会带着 Cookie 的信息，所以 Cookie 是能精简就精简。
比较常用的一个场景是判断用户是否登录，针对登录过的用户，服务器端会在他登录时往 Cookie 中插入一段加密过的唯一辨识单一用户的辨识码，下次只要读取这个值就可以判断当前用户是否登录。
以前使用 Cookie 来保存用户在电商网站的购物车信息，如今有了 localStorage，在这个方面也可以给 Cookie 放个假了~
而另一方面 localStorage 接替了 Cookie 管理购物车的工作，同时也能胜任其他一些工作。比如HTML5游戏通常会产生一些本地数据，localStorage 也是非常适用的。如果遇到一些内容特别多的表单，为了优化用户体验，我们可能要把表单页面拆分成多个子页面，然后按步骤引导用户填写。这时候 sessionStorage 的作用就发挥出来了。


安全性的考虑

需要注意的是，不是什么数据都适合放在 Cookie、localStorage 和 sessionStorage 中的。使用它们的时候，需要时刻注意是否有代码存在 XSS 注入的风险。因为只要打开控制台，你就随意修改它们的值，也就是说如果你的网站中有 XSS 的风险，它们就能对你的 localStorage 肆意妄为。所以千万不要用它们存储你系统中的敏感数据。


参考资料：
[what is the difference between localStorage, sessionStorage, session and cookie?](http://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookie)
[HTML5 localStorage security](http://stackoverflow.com/questions/3718349/html5-localstorage-security)
[维基百科 - Cookie](http://zh.wikipedia.org/wiki/Cookie)
[Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
[浏览器本地数据（sessionStorage、localStorage、cookie）与server端数据](http://han.guokai.blog.163.com/blog/static/13671827120112694851799/)
[HTMl5的sessionStorage和localStorage](http://www.cnblogs.com/yuzhongwusan/archive/2011/12/19/2293347.html)
[HTML5 LocalStorage 本地存储](http://www.cnblogs.com/xiaowei0705/archive/2011/04/19/2021372.html)
转自：[详说 Cookie, LocalStorage 与 SessionStorage](http://jerryzou.com/posts/cookie-and-web-storage/)

---


- session

当一个用户打开淘宝登录后，刷新浏览器仍然展示登录状态。服务器如何分辨这次发起请求的用户是刚才登录过的用户呢？

这里就使用了session保存状态。用户在输入用户名密码提交给服务端，服务端验证通过后会创建一个session用于记录用户的相关信息，这个 session 可保存在服务器内存中，也可保存在数据库中

创建session后，会把关联的session_id 通过setCookie 添加到http响应头部中。
浏览器在加载页面时发现响应头部有 set-cookie字段，就把这个cookie 种到浏览器指定域名下。
当下次刷新页面时，发送的请求会带上这条cookie， 服务端在接收到后根据这个session_id来识别用户。
cookie 是存储在浏览器里的一小段「数据」，而session是一种让服务器能识别某个用户的「机制」，session 在实现的过程中需要使用cookie。 二者不是同一维度的东西。