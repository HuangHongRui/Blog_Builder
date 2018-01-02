---
title: 命令行FQ
date: 2018-01-02 10:16:56
tags: FQ
categories: 使用操作
description:
---

近期，使用终端 `git clone` 拉取包，每秒达到4KB高速...干等可是要等到明年才有可能clone下来..

一直开机启动飞机FQ...为什么还这么慢...

想起一个大佬前天刚提到命令行FQ..（命令行还要另外再翻？）

好吧，鼓捣命令行FQ前搜了下Google看有没其他办法...
有以下方法: (好像都没卵用)

```
$ git config --global http.proxy http://proxyuser:proxypwd@proxy.server.com:8080
$ git config --global https.proxy https://proxyuser:proxypwd@proxy.server.com:8080
```
无非都是这种更改 git 配置...的操作

没有奏效..还是保持4KB..继续折腾，选择命令行FQ：

## 步骤1：下载
[Git_proxychains-ng](https://github.com/rofl0r/proxychains-ng)
[proxychains-ng](https://sourceforge.net/projects/proxychains-ng/files/)

## 步骤2：编译
解压包，进入文件夹
输入 `make` ；
输入 `./configure --prefix=/usr --sysconfdir=/etc`
提示：`Done, now run make && make install`
输入：`make && make install`(可能会报错.我报了，所以继续下面操作)
输入：`sudo make install`
输入：`sudo make install-config`
输入：`make && make install`(没报错了...Done)

## 步骤3：配置
下载配置文件：`curl -L https://raw.githubusercontent.com/FrankFang/dot-files/master/proxychains.conf > ~/.proxychains.conf `
配置 bash alias 快捷
运行：`touch ~/.bashrc; echo 'alias pc="proxychains4 -f ~/.proxychains.conf"' >> ~/.bashrc`
运行：`source ~/.bashrc`
好了...

### 尝试：
`pc git clone` 拉取想要的包吧..
`pc brew install` 安装...
前面带自己设置的快捷命令即可～

### 预防：
有的大佬可能会遇到一种情况，
就是每次打开一个终端（Mac:Terminal）.
都需要 source ~/.bashrc.. 很是麻烦.
所以让为了让其自动执行该命令..把命令放到 .bash_profile 里去..如下～
`touch ~/.bash_profile; echo 'source ~/.bashrc'>> ~/.bash_profile`


Done..

