---
title: Grid布局
date: 2018-02-05 12:21:01
tags:   Grid
categories: Css
description:    
---

![Can I Use](http://upload-images.jianshu.io/upload_images/4007920-b6501d4e083aa5cc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**Grid** 是CSS中最强大的布局系统。它是**2-Dimensional System**，这意味着它可以同时处理列和行.——(PS：Flex布局主要是1-Dimensional System)

## 使用基础：
1.必须先定义一个容器元素：`display: grid`
2.设置列与行：`grid-template-columns` | `grid-template-rows`
3.将它的子元素也融入到Grid中：`grid-column` | `grid-row`

与Flex布局类似，Grid的属性顺序无关紧要。您的CSS可以以任意顺序放置它们，这使得使用媒体查询重新排列网格变得非常容易。想象一下，定义整个页面的布局，然后完全重新排列它，以适应不同的屏幕宽度，只需要几行CSS。网格是有史以来最强大的CSS模块之一。

![Can I Use](http://upload-images.jianshu.io/upload_images/4007920-51611a2850216033.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 重要术语的理解

应用 `display: grid` 的元素，是为所有 grid items 的父元素：如例子中的container.
```
//Example：
<div class="container">  //Gird Container
  <div class="item item-1"></div>
  <div class="item item-2"></div>
  <div class="item item-3"></div>
</div>
```
Grid items 是 GridContainer 的**直接**后代！ 而像 sub-items 则不属于 Grid-items
```
Example：
<div class="container">
  <div class="item"></div> 
  <div class="item">
  	<p class="sub-item"></p>
  </div>
  <div class="item"></div>
</div>
```
## 线 （Grid Line） 
构成 Grid Line 的分界线，可以是垂直的（columns grid line）也可以是水平的（rows grid line），并可位于行/列的任一侧..

## 轨道 （Grid Track）
两条相邻的 Grid Line 中间的空间（中间的空间就是轨道），可以想象成Grid的 行或列！
Example中, 第二第三条Grid Line 中间就是Grid-Track
![Grid-Track](http://upload-images.jianshu.io/upload_images/4007920-a1bebf5438cb4a70.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 单元格 （Grid Cell）
两个相邻的 列和行的 Grid Line..组成一个 Grid Cell..
Example中，黄色部分由 1/2行与2/3列 构成的Grid-Cell
![Grid-Cell](http://upload-images.jianshu.io/upload_images/4007920-79a862c96e8e21b5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 区域 （Area）
Grid Area 可以由任意数量的 Grid Cell 组成。由四条 Grid Line 包围的总空间
Example：由行和列的1/3 Grid Line 包围形成
![Grid-Area](http://upload-images.jianshu.io/upload_images/4007920-e4f05e2b2bd22f5b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

# Grid 属性目录

|Properties for the Grid Container|Properties for the Grid Items |
| ---| ---|
|  display    |   grid-column-start   |
|   grid-template-columns   |   grid-column-end   |
|   grid-template-rows   |   grid-row-start   |
|   grid-template-areas   |   grid-row-end   |
|   grid-template    |   grid-column   |
|   grid-column-gap   |   grid-row   |
|   grid-row-gap   |   grid-area   |
|   grid-gap   |   justify-self   |
|   justify-items   |   align-self   |
|   align-items   |
|   justify-content   |
|   align-content   |
|   grid-auto-columns   |
|   grid-auto-rows   |
|   grid-auto-flow   |
|   grid   |

---

# 属性功能
```
display
```
可将元素定义为Grid容器，并为其内容建立新的Grid 格式上下文。

 * `Grid` 生成块级Grid
 * `inline-grid` 生成内联Grid
 * `subgrid` 如果 Grid Container 本身就是一个 Grid Items （嵌套的Grid）..那可使用这个值来根据父元素的行&列来调整大小.
```
.container {
  display: grid | inline-grid | subgrid;
}
```
---

### 行 & 列：
```
grid-template-columns 
grid-template-rows
```
使用空格分隔的值 列表定义网格的列和行。这些值表示轨道大小，它们之间的空间表示网格线。
*   `<track-size>` - 可以是Grid中的空闲空间的长度，百分比或小部分（使用`fr`单位）
*   `<line-name>` - Grid Line 的任意名称

```
.container {
  grid-template-columns: <track-size> ... | <line-name> <track-size> ...;
  grid-template-rows: <track-size> ... | <line-name> <track-size> ...;
}
```
```
Example
// 在轨迹值之间留出空白区域时，网格线会自动分配数字名称：
.container {
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;
}
```
![自动分配LineName](http://upload-images.jianshu.io/upload_images/4007920-f6533210e4965540.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

当然也可以命名GridLine..（需要注意的是：名称 需要带括号）
```
.container {
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
}
```
![命名Grid-Line](http://upload-images.jianshu.io/upload_images/4007920-d2ea0a49a6190261.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
一行中可以多个名称，如第二行有 row1-end 和 row2-start：它既是Grid Track 1 的结尾Grid Line 又是 Grid Track 2 的开头Grid Line
```
.container {
  grid-template-rows: [row1-start] 25% [row1-end row2-start] 25% [row2-end];
}
```

如果定义包含重复的部分...可以使用`repeat()`来简化..
```
grid-template-columns: repeat(3, 20px [col-start]) 5%;
//等于：
grid-template-columns: 20px [col-start] 20px [col-start] 20px [col-start] 5%;
```

`fr`单位允许设置的Track的大小为Grid Container的空间的一小部分。例如，这会将每个项目设置为网格容器宽度的三分之一：
```
.container {
  grid-template-columns: 1fr 1fr 1fr;
}
```
如果像下面这种情况...分为4列..拥有fr单位的3列将平分总长度（减去50px）：
```
.container {
  grid-template-columns: 1fr 50px 1fr 1fr;
}
```
---

### 区域：
```
grid-template-ares
```
通过引用由 grid-area 属性 指定的GridArea 的名称 来定义 Grid 模板.
重复GridArea 的名称 会让内容跨越这些 Grid Cell ..使用`.` 则代表一个空的Grid Cell
* **<grid-area-name>** - 指定的Grid Area的名称 -> `grid-area`
* `.` 表示一个空的 Grid Cell
* `none` 没有定义Grid Area
```
.container {
  grid-template-areas: 
    "<grid-area-name> | . | none | ..."
    "...";
}
```
```
//Example:
.item-a {
  grid-area: header;  //定义Grid Area 名称
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}

.container {
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
```
创建：
列 ：4列
行 ：自动
区域 第一行四个Grid Cell 均为 Header GridArea
区域 第二行两个Grid Cell 为 Main. 一个Cell为空`.`. 最后一个Cell为 Sidebar.
区域 第三行四个Grid Cell 均为 Footer
![Grid Area](http://upload-images.jianshu.io/upload_images/4007920-5f27a9e10852a37c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
每一行都需要相同数量的GridCell

---

### Grid-Template
这是一个 省略写法.
可以把 `grid-template-rows`/`grid-template-columns`和`grid-template-areas`.写在同一个声明中。
*   `none` - 将所有三个属性设置为其初始值
*   `subgrid` - 设置 `grid-template-rows` 和 `grid-template-columns` 到 子Grid中去，和将 `grid-template-areas` 作为它的初始值.
* `<grid-template-rows>`/`<grid-template-columns>` 分别设置 `grid-template-columns`和`grid-template-rows` 指定的值，并设置 `grid-template-areas`为none。

```
.container {
  grid-template: none | subgrid | <grid-template-rows> / <grid-template-columns>;
}
```
它接受一个更复杂但相当方便的语法来指定这三个
```
Example：
.container {
  grid-template:
    [row1-start] "header header header" 25px [row1-end]
    [row2-start] "footer footer footer" 25px [row2-end]
    / auto 50px auto;
}
//  相当：
.container {
  grid-template-rows: [row1-start] 25px [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;
  grid-template-areas: 
    "header header header" 
    "footer footer footer";
}
```
由于`grid-template`不会重置*隐式*Grid属性（`grid-auto-columns`, `grid-auto-rows`, 和 `grid-auto-flow`）,所以建议尽量使用 grid 属性...

---

### Grid-cloumns-gap | Grid-row-gap

指定 Grid-Line 的宽度...
可以想想成 列 & 行 之间的宽度..
只能在 行/列 之间（如 row 1 start 或 colum 1 start 就没法设置-。-因为在边缘）
*  <line-size> - Length Value.
```
.container {
  grid-column-gap: <line-size>;
  grid-row-gap: <line-size>;
}
```
```
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  grid-column-gap: 10px;
  grid-row-gap: 15px;
}
```
---

### Grid-Gap
又一种简写速记：`grid-colunm-gap`||`grid-row-gap`
* <grid-row-gap> <grid-colunm-gap> - Length Value
```
.container {
  grid-gap: <grid-row-gap> <grid-column-gap>;
}
```
```
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  grid-gap: 10px 15px;
}
//  如果无设置 grid-row-gap..它的值会设置为grid-column-gap
```

---

### Justify-Items

沿着 *行*轴 对齐Grid内的内容。该值适用于Container内的所有Grid Items。

*   **start** - 将内容对齐到Grid区域的左端
*   **end** - 将内容对齐到Grid区域的右端
*   **center** - 将Grid区域中心的内容对齐
*   **stretch** - 填充Grid区域的整个宽度（这是默认值）
```
.container {
  justify-items: start | end | center | stretch;
}
```

---
### Align-Items
沿 *列*轴 对齐Grid内的内容。该值适用于Container内的所有Grid Items。

*   **start** - 将内容对齐到Grid区域的顶部
*   **end** - 将内容对齐到Grid区域的底部
*   **center** - 将Grid区域中心的内容对齐
*   **stretch** - 填充Grid区域的整个高度（这是默认值）
```
.container {
  align-items: start | end | center | stretch;
}
```
---
### Justify-Content
有时，Grid 的总大小可能小于其Grid Container的大小。如果所有Grid-Items都使用非灵活单位(`fr`)进行调整，就可能发生这种情况`px`。在这种情况下，可以设置Grid Container 内的Grid的对齐方式。此属性沿着*行*轴对齐Grid.

*   **start** - 将Grid对齐到Grid Container的左端
*   **end** - 将Grid对齐到Grid Container的右端
*   **center** - 将Grid对齐到Grid Container的中心
*   **stretch** - 调整Grid Items的大小以允许Grid填充Grid Container的整个宽度
*   **space-around** - 在每个Grid物体之间放置一定量的空间。
*   **space-between** - 在每个Grid物品**之间**放置一个均匀的空间。
*   **space-evenly** - 在每个Grid Items之间放置一个均匀的空间.
```
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;	
}
```

---

####  align-content
跟 `justify-content` 差不多..
唯一不同的是 `align-content` 是设置水平方向

*   **start** - 将Grid对齐到Container的顶部
*   **end** - 将Grid对齐到Container的底部
*   **center** - 将Grid对齐到Container的中心
*   **stretch** - 调整Grid Items的大小，以允许网格填充Container的整个高度
*   **space-around** - 在每个Grid物体之间放置一定量的空间。
*   **space-between** - 在每个Grid物品**之间**放置一个均匀的空间
*   **space-evenly** - 在每个Grid-Items之间放置一个均匀的空间。
```
.container {
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;	
}
```
---

####  Grid-auto-columns & Grid-auto-rows

指定任何自动生成的Grid Track（又名*Implicit 
 Grid Track*）的大小。当明确定位超出定义的Grid范围的行或列（通过`grid-template-rows`/ `grid-template-columns`）时，会创建Implicit Grid Track。

*   **<track-size>** - 可以是Grid中的空闲空间的长度，百分比或是小部分（使用`fr`单位）
```
.container {
  grid-auto-columns: <track-size> ...;
  grid-auto-rows: <track-size> ...;
}
```
Example ：理解 Implicit Grid Track ↓
```
.container {
  grid-template-columns: 60px 60px;
  grid-template-rows: 90px 90px
}
```
![创建2 × 2的Grid](http://upload-images.jianshu.io/upload_images/4007920-7d0f1f633e9f9164.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

现在设想使用 `grid-column` 和 `grid-row` 定位这个Grid Items 是：
```
// 元素的属性知识.后面有讲，下面数字指 Grid Line 默认名
.item-a {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
.item-b {
  grid-column: 5 / 6;
  grid-row: 2 / 3;
}
```
![Grid-Items](http://upload-images.jianshu.io/upload_images/4007920-bdd588697d57275e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

我们设置 .item -b 从列5行开始，到列6行结束，*但是我们没有定义列5或6*。
因为引用了不存在的行！所以创建了宽度为0的隐式轨道来填补空白。可以使用`grid-auto-columns`和`grid-auto-rows`指定这些隐式轨道的宽度：
```
.container {
  grid-auto-columns: 60px;
}
```
![Result](http://upload-images.jianshu.io/upload_images/4007920-680943810e7338cd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

#### Grid-auto-flow
如果没有明确放置在Grid上的Grid Items，则自动放置算法会自动放置这些Items。该属性控制自动布局算法的。
可以理解是一种设置排序方向的属性（默认row
 从左到右，或从上到下的排序[流动方向].)

* **row** - 告诉自动布局算法依次填充每行，根据需要添加新行
* **column** - 告诉自动布局算法依次填充每列，根据需要添加新列
* **dense** - 告诉自动布局算法，如果稍后出现较小的items，则尝试在Grid中的填充空位。(dense 可能导致项目出现乱序)
```
.container {
  grid-auto-flow: row | column | row dense | column dense
}
```
```
Example：
<section class="container">
  <div class="item-a">item-a</div>
  <div class="item-b">item-b</div>
  <div class="item-c">item-c</div>
  <div class="item-d">item-d</div>
  <div class="item-e">item-e</div>
</section>
```
定义一个五行两行的Grid，并设置grid-auto-flow为row（默认值）：
```
.container {
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  grid-template-rows: 30px 30px;
  grid-auto-flow: row;
}
```
```
.item-a {
  grid-column: 1;
  grid-row: 1 / 3;
}
.item-e {
  grid-column: 5;
  grid-row: 1 / 3;
}
```
因为设置了 grid-auto-flow 为 row...Grid会呈现这个样子：
![Row](http://upload-images.jianshu.io/upload_images/4007920-f0871f11b7cebed6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
如果是设置 grid-auto-flow 为column 那么则会呈现如下：
![Column](http://upload-images.jianshu.io/upload_images/4007920-e7ac458c102e41f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

### Grid

简写模式：
可以设置的属性有：
```
grid-template-rows
grid-template-columns
grid-template-areas
grid-auto-rows
grid-auto-columns
grid-auto-flow
grid-column-gap
grid-row-gap
```
可设置值：
* **none** - 将所有子属性设置为初始值
* **<grid-template-rows>/<grid-template-columns>** - 分别设置指定值，并将所有其他属性设置为其初始值
* **<grid-auto-flow>[<grid-auto-rows>[/<grid-auto-columns>]]** - 接收所有相同的值 `grid-auto-flow`, `grid-auto-rows` 和`grid-auto-columns`.. 如果省略`grid-auto-columns` ，那么将其设置为`grid-auto-rows`指定的值. 如果两者都省略，那他们被设置为它们的初始值.
```
.container {
    grid: none | <grid-template-rows> / <grid-template-columns> | <grid-auto-flow> [<grid-auto-rows> [/ <grid-auto-columns>]];
}
```
```
Example:
.container {
  grid: 200px auto / 1fr auto 1fr;
}
//  等于：
.container {
  grid-template-rows: 200px auto;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: none;
}
```
```
Example：
.container {
  grid: column 1fr / auto;
}
//  等于
.container {
  grid-auto-flow: column;
  grid-auto-rows: 1fr;
  grid-auto-columns: auto;
}
```

Grid 也接收一个更复杂 但相当方便的语法来一次性设置所有内容。
指定`grid-template-areas`,`grid-template-rows`和`grid-template-columns` 所有其他子属性都设置为其初始值...指定Line名称和Track 大小 与 它们各自的Grid Areas ...
```
Example:
.container {
  grid: [row1-start] "header header header" 1fr [row1-end]
        [row2-start] "footer footer footer" 25px [row2-end]
        / auto 50px auto;
}
//  等于：
.container {
  grid-template-areas: 
    "header header header"
    "footer footer footer";
  grid-template-rows: [row1-start] 1fr [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;    
}
```

# 父级属性（Grid Container） End

---

# 子元素属性 （Grid Items）

#### grid-column-start | grid-column-end | grid-row-start | grid-row-end

通过引用特定的Grid-Line来确定Grid内Grid的位置。`grid-column-start`/ `grid-row-start`是Items开始的行/列，`grid-column-end`/ `grid-row-end`是Items结束的行/列。

* **<Number>** - 可以是一个数字来引用一个编号的Grid Line，或者一个名称来引用一个命名的Grid Line
* **span <number>** - Items 将跨越提供的Grid
 Track 数量
* **span <Name>** - Items 将跨越，直到它与提供的名称符合
* **auto** - 指示自动放置，自动跨度或默认跨度

Ps: Items可以相互重叠。可以使用 `z-index` 来控制其堆叠顺序。
```
Example：
.item-a {
  grid-column-start: 2;
  grid-column-end: five;
  grid-row-start: row1-start
  grid-row-end: 3
}
```
![Example](http://upload-images.jianshu.io/upload_images/4007920-da7aaf0085b93ef9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
.item-b {
  grid-column-start: 1;
  grid-column-end: span col4-start;
  grid-row-start: 2
  grid-row-end: span 2 // 跨越2个 Grid Track
}
```
![Example](http://upload-images.jianshu.io/upload_images/4007920-6a63a4b072c175cc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

###  grid-column | grid-row

简写速记分别为`grid-column-start`+ `grid-column-end`和`grid-row-start`+ `grid-row-end`

*   **<start-line> / <end-line>** - 每一个都接受相同的值，包括span
```
.item {
  grid-column: <start-line> / <end-line> | <start-line> / span <value>;
  grid-row: <start-line> / <end-line> | <start-line> / span <value>;
}
```
```
.item-c {
  grid-column: 3 / span 2;
  grid-row: third-line / 4;
}
```
![如果没有声明结束行值，则该项目默认跨越1个轨道。](http://upload-images.jianshu.io/upload_images/4007920-44fc3b2c6b757568.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

### Grid Areas

为Items提供一个名称，以便可以通过使用该`grid-template-areas`属性创建的模板来引用它。
或者，此属性可以用作`grid-row-start`+ `grid-column-start`+ `grid-row-end`+ `grid-column-end`的更简短的缩写。

*   **<Name>** - 选择的名称
*   **<row-start> / <column-start> / <row-end> / <column-end>**- 可以是数字或命名行
```
.item {
  grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
}
```
```
// 方法一：可为 Items 分配名称
.item-d {
  grid-area: header
}
```
```
//  方法二： 可作为 row start + column start + row end + column end 的一次性简写
.item-d {
  grid-area: 1 / col4-start / last-line / 6
}
```
![grid area 简写](http://upload-images.jianshu.io/upload_images/4007920-98e2947524e5a516.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

### Justify-self

沿着*行*轴对齐Grid内的内容。此值适用于单个Grid Items 内的内容。

*   **start** - 将内容对齐到Grid区域的左端
*   **end** - 将内容对齐到Grid区域的右端
*   **center** - 将Grid区域中心的内容对齐
*   **stretch** - 填充Grid区域的整个宽度（Default）
```
.item {
  justify-self: start | end | center | stretch;
}
```
```
Example:
.item-a {
  justify-self: start;
}
```
![](http://upload-images.jianshu.io/upload_images/4007920-e4b0270a1c49dc03.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

###  align-self

沿*列*轴对齐网格内的内容。此值适用于单个Grid Item内的内容。

价值观：

*   **start** - 将内容对齐到Grid区域的顶部
*   **end** - 将内容对齐到Grid区域的底部
*   **center** - 将Grid区域中心的内容对齐
*   **stretch** - 填充Grid区域的整个高度（Default）

---
# 子元素属性 结束——End

---

移植地点：[Links](http://chris.house/blog/a-complete-guide-css-grid-layout/)
移植地点：[Links2](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-columns-rows)
