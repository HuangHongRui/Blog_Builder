---
title: Meta标签作用
date: 2017-8-10 15:51:48
tags: Meta标签
categories: [Web前端知识]
description:
---
## Meta 标签作用

1. 是HTML语言HEAD区的一个辅助性标签; 
2. META标签的内容设置对于搜索引擎优化seo来说是至关重要的一个因素.
2. 常用于描述一个HTML网页文档的属性， 如作者、日期和时间、网页描述、关键词、页面刷新等。它提供的信息虽然用户不可见，但却是文档的最基本的元数据.
这些元数据将服务于浏览器（如何布局或重载页面），搜索引擎和其它网络服务;
3. Meta标签共有两个属性：`http-equiv`和`name`;

#### name 属性

name属性主要用于描述网页，如网页的关键词，叙述等。对应的属性为`content`，content中的内容是对name填入类型的具体描述，便于搜索引擎抓取。
```
name属性语法： <meta name="参数" content="具体的描述">。
```

Keywords(关键字)
说明：keywords用来告诉搜索引擎你网页的关键字是什么。
```
举例：＜meta name ="keywords" content="Rui,博客,程序猿,前端"＞
```
description(网站内容描述)
说明：description用来告诉搜索引擎你的网站主要内容。
```
举例：＜meta name="description" content="Rui,爱编程爱生活。这是我的博客."＞
```
viewport(移动端的窗口)
说明：该属性常用于设计移动端网页。在用bootstrap,AmazeUI等框架时候都有用过viewport。
```
举例（常用范例）： <meta name="viewport" content="width=device-width, initial-scale=1">
```
robots(定义搜索引擎爬虫的索引方式)
说明：robots用来告诉爬虫哪些页面需要索引，哪些页面不需要索引。 
content的参数有:
`none` : 搜索引擎将忽略此网页，等价于noindex，nofollow。
`noindex` : 搜索引擎不索引此网页。
`nofollow`: 搜索引擎不继续通过此网页的链接索引搜索其它的网页。
`all` : （默认）搜索引擎将索引此网页与继续通过此网页的链接索引，等价于index，follow。
`index` : 搜索引擎索引此网页。
`follow` : 搜索引擎继续通过此网页的链接索引搜索其它的网页。
```
举例： <meta name="robots" content="none">
```
author(作者)
说明：标注网页的作者
```
举例：＜meta name="author" content"锐锐君"＞
```
copyright(版权)
说明：用于标注版权信息
```
举例： <meta name="copyright" content="Rui"> 
```
revisit-after(搜索引擎爬虫重访时间)
说明：如页面不是经常更新，为了减轻搜索引擎爬虫对服务器带来的压力，可以设置一个爬虫的重访时间。如果重访时间过短，爬虫将按它们定义的默认时间来访问。
```
举例： <meta name="revisit-after" content="7 days" >
```
renderer(双核浏览器渲染方式)
说明：renderer是为双核浏览器准备的，用于指定双核浏览器默认以何种方式渲染页面。比如说360浏览器。
```
举例：
<meta name="renderer" content="webkit"> //默认webkit内核
<meta name="renderer" content="ie-comp"> //默认IE兼容模式
<meta name="renderer" content="ie-stand"> //默认IE标准模式
```


#### http-equiv属性

相当于http协议中文件头的作用，它可以向浏览器传回一些有用的信息，以帮助正确和精确地显示网页内容，与之对应的属性为content，content中的内容其实就是各个参数的变量值。
meta标签中http-equiv属性语法格式是：
```
<meta http-equiv="参数" content="具体的描述">
```
content-Type(设定网页字符集)(推荐使用HTML5的方式)
说明：用于设定网页字符集，便于浏览器解析与渲染页面
```
举例：
<meta http-equiv="content-Type" content="text/html;charset=utf-8">  //旧
<meta charset="utf-8"> //HTML5设定网页字符集的方式，推荐
```
X-UA-Compatible(浏览器采取何种版本渲染当前页面)
说明：用于告知浏览器以何种版本来渲染页面。（一般都设置为最新模式，在各大框架中这个设置也很常见。）
```
举例：
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/> //指定IE和Chrome使用最新版本渲染当前页面
```
cache-control(指定请求和响应遵循的缓存机制)
说明：指导浏览器如何缓存某个响应以及缓存多长时间。
五种用法：[HTTP缓存&性能优化](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=zh-cn#cache-control)
1. `no-cache`: 先发送请求，与服务器确认该资源是否被更改，如果未被更改，则使用缓存。
1. `no-store`: 不允许缓存，每次都要去服务器上，下载完整的响应。（安全措施）
1. `public` : 缓存所有响应，但并非必须。因为max-age也可以做到相同效果
1. `private`: 只为单个用户缓存，因此不允许任何中继进行缓存。（比如说CDN就不允许缓存private的响应）
1. `maxage` : 表示当前请求开始，该响应在多久内能被缓存和重用，而不去服务器重新请求。例如：max-age=60表示响应可以再缓存和重用 60 秒。
```
举例: <meta http-equiv="cache-control" content="no-cache">
```
expires(网页到期时间)
说明:用于设定网页的到期时间，过期后网页必须到服务器上重新传输。
```
举例： <meta http-equiv="expires" content="Sunday 26 October 2016 01:00 GMT" />
```
refresh(自动刷新并指向某页面)
说明：网页将在设定的时间内，自动刷新并调向设定的网址。
```
举例: <meta http-equiv="refresh" content="2；URL=http://blog.luckyman.xyz"> //意思是2秒后跳转向我的博客
```
Set-Cookie(cookie设定)
说明：如果网页过期。那么这个网页存在本地的cookies也会被自动删除。
```
<meta http-equiv="Set-Cookie" content="name, date"> //格式
<meta http-equiv="Set-Cookie" content="User=Rui; path=/; expires=Sunday, 10-Jan-16 10:00:00 GMT"> //具体范例
```
#### 最后：
meta标签的一个很重要的功能就是设置关键字，来帮助你的主页被各大搜索引擎登录，提高网站的访问量。在这个功能中，最重要的就是对Keywords和description的设置。因为按照搜索引擎的工作原理,搜索引擎首先派出机器人自动检索页面中的keywords和decription，并将其加入到自己的数据库，然后再根据关键词的密度将网站排序。因此，我们必须设置好关键字，来提高页面的搜索点击率。

参考：
[HTML meta标签总结与属性使用介绍](https://segmentfault.com/a/1190000004279791)
[html中meta标签的详解](http://zq210wl.github.io/2015/01/05/html-meta-tag/)