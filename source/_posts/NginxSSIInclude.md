---
title: Nginx初试
date: 2017-12-03 23:19:15
tags: [Nginx,SSI,include]
categories: [服务端]
description:
---

公司所用的是 WINDOW 系统.服务端使用SSI(Server Side Include)——Win系统专属.

公司开发，为了不重复代码，将代码块使用`<#include>`插入到shtml中.(类似插脚本)。
使用在SSI可以读取到插入的 <#include>(作用)

自己的笔记本是Linux系统，不想刷回Win，所以想要正常操作，肯定要鼓捣的-。-（事实上也没时间）

## 正文：

Nginx（发音同engine x）是一个 Web服务器，也可以用作反向代理，负载平衡器和 HTTP缓存。
经过了解 Nginx 可以代替 SSi..以下是操作过程： [记得用sudo权限]

下载可使用该命令：`wget 包链接`

1、下载最新安装包.[nginx地址](https://nginx.org/en/download.html)

2、放在 `/opt/nginx/` 中，解压并进入。

3、考虑到需要让Nginx的SSI也支持相对路径，所以进入后，找到其该文件`src/http/modules/ngx_http_ssi_filter_module.c`.修改其内代码块：注释了!!
```
/*
if (ngx_http_parse_unsafe_uri(r, uri, &args, &flags) != NGX_OK) {
        return NGX_HTTP_SSI_ERROR;
    }
*/
```

3、使用命令： `./configure --prefix=/opt/nginx --with-http_stub_status_module --with-http_ssl_module --with-http_realip_module` 编译.
`--prefix`可指定安装目录，不填则默认安装目录为`/usr/local/nginx`

4、使用命令： `make && make install`

5、安装完后 进入其 `sbin` 中运行 `./nginx` 即可走你。(后面加 `-s stop`关闭 / `-s reload`重启 )

6、配置可在其 `conf/nginx.conf` 里设置.
```
location / {
   ssi on;                          #开启ssi
   ssi_silent_errors on;            #设置ssi解析出错静默模式
   root   html;                     #目标位置|代码位置
   index  index.html index.htm;     #默认打开
}
```
## 7、天坑=填坑：此时还没法显示正常，那就是这个问题了...
前后折腾了好久...
`<!-- #include file="header.html" -->`    //别想了，没法导入
`<!--#include file="header.html"-->`      //好吧，正确导入，显示完美。

8、删除|卸载？
删除目录就行..


终于可以在自己本上鼓捣了....
----


参考：
[Module ngx_http_ssi_module](http://nginx.org/en/docs/http/ngx_http_ssi_module.html)
[Nginx安装](http://www.cnblogs.com/hubavyn/p/4337903.html)
[linux下nginx安装，启动，停止，卸载，平滑升级，添加模块](http://happyqing.iteye.com/blog/1806561)

