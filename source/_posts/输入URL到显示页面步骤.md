---
title: 输入URL到显示页面步骤
date: 2017-10-25 14:26:28
tags: URL
categories: HTTP
description:
---


### 1_ 在Client地址栏输入URL. (协议、域名、文件路径、端口)
### 2_ Client检查缓存.
- 有缓存：
 - 未过期：跳转到转码步骤
 - 过期：与Server进行验证
- 无缓存：
 - 发起新请求 

检验缓存有效期通常有两个HTTP头进行控制 `Expires` 和 `Cache-Control`
HTTP1.0提供Expires，值为一个绝对时间表示缓存新鲜日期. (容易因为时区或电脑时间有误导致失效)
HTTP1.1增加了Cache-Control: max-age=,值为以秒为单位的最大有效期时间. 

### 3_ Client解析URL获取协议，主机, 文件路径，端口 
### 4_ Client组装一个HTTP（GET）请求报文
### 5_ Client获取主机ip地址，过程如下：
- Client缓存
- 本机缓存
- hosts文件
- 路由器缓存
- ISP DNS缓存
- DNS递归查询 
![](./box/Pic/ServerIP.svg)

### 6_ 打开一个(套接字)socket与目标IP地址，端口建立TCP链接，三次握手如下：[详细文章](http://blog.luckyman.xyz/2017/08/14/TCP%E4%BC%A0%E8%BE%93%E7%9A%84%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%E7%AD%96%E7%95%A5/)
>客户端发送一个TCP的SYN=1，Seq=X的报文段到Server
>Server发回 SYN=1， ACK=X+1， Seq=Y的响应包
>客户端发送ACK=Y+1 ,Server收到后建立链接成功 

### 7_ TCP链接建立后发送HTTP请求.
### 8_ Server接受请求并解析，将请求转发到服务程序.. （如虚拟主机使用HTTP Host头部判断请求的服务程序.） 
### 9_ Server检查HTTP请求头是否包含缓存验证信息.. （如果验证缓存有效，返回304等对应状态码.） 
### 10_ 处理程序读取完整请求并准备HTTP响应.（可能需要查询数据库等操作 ）
### 11_ Server将响应报文通过TCP连接发送回Client.
### 12_ Client接收HTTP响应，然后根据情况选择关闭TCP连接或者保留重用，关闭TCP连接的四次挥手如下：(主动方可以说Server 或 Client)
>1. 主动方发送Fin=1， Ack=Z， Seq= X报文.
>1. 被动方发送ACK=X+1报文
>1. 被动方发送Fin=1，Seq=Y报文
>1. 主动方发送ACK=Y报文 

### 13_ Client检查响应状态吗：是否为1XX，3XX， 4XX， 5XX，这些情况处理与2XX不同 
### 14_ 如果资源可缓存，进行缓存 
### 15_ 对响应进行解码（如gzip压缩） 
### 16_ 根据资源类型决定如何处理（如资源为HTML文档） 
### 17_ **解析HTML文档、构件DOM树、下载资源、构造CSSOM树、执行js脚本**，这些操作没有严格的先后顺序，以下分别解释 
### 18_ 构建DOM树： 
- Tokenizing：根据HTML规范将字符流解析为标记
- Lexing：词法分析将标记转换为对象并定义属性和规则
- DOM construction：根据HTML标记关系将对象组成DOM树

### 19_ 解析过程中遇到图片、样式表、js文件，启动下载

### 20_ 构建CSSOM树：
- Tokenizing：字符流转换为标记流
- Node：根据标记创建节点
- CSSOM：节点创建CSSOM树

### 21_ 根据DOM树和CSSOM树构建渲染树
- 从DOM树的根节点遍历所有可见节点**，不可见节点包括：1）script,meta这样本身不可见的标签。2)被css隐藏的节点，如display: none
- 对每一个可见节点，找到恰当的CSSOM规则并应用
- 发布可视节点的内容和计算样式

### 22_ JS解析如下：
- Client创建Document对象并解析HTML，将解析到的元素和文本节点添加到文档中，此时document.readystate为loading
- HTML解析器遇到没有async和defer的script时，将他们添加到文档中，然后执行行内或外部脚本。这些脚本会同步执行，并且在脚本下载和执行时解析器会暂停。这样就可以用document.write()把文本插入到输入流中。同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作script和他们之前的文档内容
- 当解析器遇到设置了async属性的script时，开始下载脚本并继续解析文档。脚本会在它下载完成后尽快执行，但是解析器不会停下来等它下载。异步脚本禁止使用document.write()，它们可以访问自己script和之前的文档元素
当文档完成解析，document.readState变成interactive
- 所有defer脚本会按照在文档出现的顺序执行，延迟脚本能访问完整文档树，禁止使用document.write()
- Client在Document对象上触发DOMContentLoaded事件
- 此时文档完全解析完成，Client可能还在等待如图片等内容加载，等这些内容完成载入并且所有异步脚本完成载入和执行，document.readState变为complete,window触发load事件

### 23_ 显示页面（HTML解析过程中会逐步显示页面）


搬运参考：

[从浏览器地址栏输入URL到显示页面的步骤（http为例）](http://www.jianshu.com/p/551e92a02dc8)
[在浏览器地址栏输入一个URL后回车，背后会进行哪些技术步骤？](https://www.zhihu.com/question/34873227)