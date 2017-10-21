---
title: 常见 HTTP Method
date: 2017-8-13 21:50:49
tags: HTTP
categories: HTTP
description:
---

常见的六种 HTTP Method分別是 

|方法|描述|
|:---:|:---:|
|**head** | 与get一样，但无响应体|
|**get** | 请求一个指定资源的表示形式. 常被用于获取数据.|
|**post** | 用于将实体提交到指定的资源，通常导致状态或服务器上的副作用的更改.|
|**delete** | 删除指定的资源。
|**put** | 用请求有效载荷替换目标资源的所有当前表示。
|**patch** | 用于对资源应用部分修改。


不同的 Method 就是对同一件事情做不同的操作。
举个例子：
假设现在我們要点餐，
1. 需要先知道菜单是什么（get 获取），
1. 會向服务员点餐（post 提交），
1. 想要取消取消刚点的菜单（delete），
1. 想要重新一次（put），
1. 想要加点甜点和饮料（patch）。

head是取得get的http header而不取得內容，性質上我們可以當作跟get一樣

head：和get一樣，只是head只會取的HTTP header的資料。
get：取得我們想要的資料。
post：新增一項資料。（如果存在會新增一個新的）
put：新增一項資料，如果存在就覆蓋過去。（還是只有一筆資料）。
patch：附加新的資料在已經存在的資料後面。（資料必須已經存在，patch會擴充這項資料）
delete：刪除資料。


参考转载：
[常見的HTTP METHOD的不同性質分析：GET,POST和其他4種METHOD的差別](https://data-sci.info/2015/10/24/%E5%B8%B8%E8%A6%8B%E7%9A%84http-method%E7%9A%84%E4%B8%8D%E5%90%8C%E6%80%A7%E8%B3%AA%E5%88%86%E6%9E%90%EF%BC%9Agetpost%E5%92%8C%E5%85%B6%E4%BB%964%E7%A8%AEmethod%E7%9A%84%E5%B7%AE%E5%88%A5/)