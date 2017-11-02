---
title: 初识TypeScript_1
date: 2017-8-17 13:56:31
tags: ScriptType
categories: [新知识]
description:
---

[TypeScript官网-当前2.5版本](http://www.typescriptlang.org/)

TypeScript是一种由微软开发的自由和开源的编程语言。
它是JavaScript的一个严格超集，并添加了可选的静态类型和基于类的面向对象编程。

**TypeScript设计目标：**是开发大型应用，然后转译成JavaScript。由于TypeScript是JavaScript的严格超集，任何现有的JavaScript程序都是合法的TypeScript程序。

安装： `npm i -g typescript`

根据官网提供的**第一个TypeScript例子**，创建一个 xxx.ts 文件，Code如下：
```
function greeter(person) {
    return "Hello, " + person;
}
var user = "Rui";
document.body.innerHTML = greeter(user);
```
Then,在命令行里输入 `tsc xxx.ts` ，可生成一个js文件..（将ts转换为js）
**Ps:** 使用TS开发快捷方便，最后转换为JS投入使用.

**第二个例子： 类型注解**
```
function greeter(person:string) {  // <<=这里
    return "Hello, " + person;
}
var user = [0,1,2];
document.body.innerHTML = greeter(user);
```
参数里面 `:string` 表示传入的参数变量值必须是字符串类型.. 
例子中传入的是数组：so 会自然报错：`error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.`，虽说报错，但是还是会生成JS文件（可能不会按预期执行）.
通过**类型注解**提供在编译时启动类型检查的静态类型。这是可选的，而且可以忽略而使用JavaScript常规的动态类型。 (对于基本类型的批注是number、bool和string。而弱或动态类型的结构则是any类型。)

**第三个例子： 接口**
```
interface Person {  <<= 1.接口
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {  <<= 2.类型注解
    return 'Hello, '+person.firstName + ' '+ person.lastName; 
}
var user = {firstName: Huang, lastName: Rui}
greeter(user)
```
这里使用接口来描述一个拥有firstName和lastName字段的对象。 
在TypeScript里，只在两个类型内部的结构兼容那么这两个类型就是兼容的。 
这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 implements语句。

**使用类来扩展最后一个例子： 类**
```
class Student{  <<= 类
    fullName: string;
    constructor(public firstName,public middleInitial, public lastName){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
interface Person{  <<= 接口
    firstName: string;
    lastName: string;
}
function greeter(person: Person){  <<= 类型注解
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student('Rui', 'L', 'User')  <<= 实例化
document.body.innerHTML = greeter(user)  
```
TypeScript支持JavaScript中的新功能，例如支持基于类的面向对象编程。
创建一个Student具有构造函数和几个公共字段的类。
**注意:**
1. 类和接口可以在一起共用，让程序员决定抽象的正确级别。
2. 在构造函数的参数上使用public等同于创建了同名的成员变量。
使用 `public XXX` 等同于 `this XXX = XXX` 实例将继承起变量。

运行TS Web应用：与平常引入外部JS脚本一样。
` <script src="greeter.js"></script>`

在Visual Studio里打开greeter.ts或者把代码复制到[TypeScript playground](https://www.typescriptlang.org/play/index.html)。 
1. 将鼠标悬停在标识符上查看它们的类型。 
2. 将光标放在 greeter函数上，点击F12可以跟踪到它的定义。
3. 你可以右键点击标识，使用重构功能来重命名。
**注意：**在某些情况下它们的类型可以被自动地推断出来。 重新输入一下最后一行代码，看一下自动补全列表和参数列表，它们会根据DOM元素类型而变化。

