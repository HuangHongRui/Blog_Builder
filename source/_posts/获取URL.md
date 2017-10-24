---
title: 获取URL
date: 2017-8-15 10:54:26
tags: Code
categories: [Code]
description:
---

## 获取 URL 键值

获取Key-Value字符串
先拆再合。

API: 
    `location.search` 获取以?开头的键值字符串.
    `split()` 指定 分隔号字符字符串 将一个String对象分割成字符串数组。
    `substr()` 返回一个字符串中从指定位置开始到指定字符数的字符。
```
function obtain(){
    let url = location.search,
        obj = new Object()
    if (url.indexOf('?') != -1){
        let str = url.substr(1),
            strs = str.split('&') 
        for (let i = 0; i < strs.length; i++){
            fast = strs[i].split('=')
            obj[fast[0]] = fast[1]
        }
    }
    return obj 
}
```

[更多方法-MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/location)