---
title: 初识TypeScript_2
date: 2017-8-19 16:48:44
tags: ScriptType
categories: [新手殿堂]
description:
---

## 原始数据类型 

JS 的类型分为两种：
- 原始数据类型（Primitive data types）**包括：布尔值、数值、字符串、null、undefined Symbol。**
- 对象类型（Object types）。

五种原始数据类型在 TypeScript 中的应用。

### 布尔值
布尔值是最基础的数据类型，在 TypeScript 中，使用 boolean 定义布尔值类型：
```
let isDone: boolean = false;
```

注意，使用构造函数 Boolean 创造的对象不是布尔值：
`let createdByNewBoolean: boolean = new Boolean(1);`
报错: // index.ts(1,5): error TS2322: Type 'Boolean' is not assignable to type 'boolean'.
      // 后面约定，未强调编译错误的代码片段，默认为编译通过

### 数值
使用 number 定义数值类型：
```
 let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```

### 字符串
使用 string 定义字符串类型：
```
let myName: string = 'Xcat Liu';
// 模板字符串
let sentence: string = `Hello, my name is ${myName}. I'll be ${myAge + 1} years old next month.`;
// 编译结果：模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
```

### 空值
JS 没有空值（Void）的概念，在 TypeScirpt 中，可以用 void 表示没有任何返回值的函数：
```
function alertName(): void {
  alert('My name is Rui');
}
```

声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
```
let unusable: void = undefined;
```

### Null 和 Undefined
在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
```
let u: undefined = undefined;
let n: null = null;
```

**undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null。**

与 void 的 **区别** 是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
```
// 不报错： let num: number = undefined;
// 不报错： let u: undefined; let num: number = u;
```

void 类型的变量不能赋值给 number 类型的变量：
```
let u: void; let num: number = u;
报错：// index.ts(2,5): error TS2322: Type 'void' is not assignable to type 'number'.
```

### 数组
TypeScript像JS一样可以操作数组元素。 有两种方式可以定义数组。
第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
`let list: number[] = [1, 2, 3];`
第二种方式是使用数组泛型，Array<元素类型>：
`let list: Array<string> = ['1', '2', '3'];`

### 元组 Tuple
元组类型允许表示一个**已知元素数量和类型**的数组，各元素的类型不必相同。 (比如，你可以定义一对值分别为 string和number类型的元组。)
```
let x: [string, number];
x = ['hello', 10]; // 正确
x = [10, 'hello']; // Error
```

当访问一个已知索引的元素，会得到正确的类型：
```
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
```

当访问一个越界的元素，会使用联合类型替代：
```
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
x[6] = true; // Error, 布尔不是(string | number)类型
```

### 枚举
`enum`类型是对JS 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
```
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

默认情况下，从0开始为元素编号。 
也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：
```
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```

或者，全部都采用手动赋值：
```
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
```

枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：
```
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
```

### Any
有时，会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 
这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 
这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 
那么我们可以使用 `any类型`来标记这些变量：
```
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
```

在对现有代码进行改写的时候，any类型是十分有用的， 它允许你在编译时可选择地包含或移除类型检查。 
当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：
```
let list: any[] = [1, true, "free"];
list[1] = 100;
```

### Never
`never类型`表示的是那些永不存在的值的类型。 
例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

下面是一些返回never类型的函数：
```
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

### 类型断言
有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 
通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

通过类型断言这种方式可以告诉编译器，**“相信我，我知道自己在干什么”**。 
类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 
它没有运行时的影响，只是在编译阶段起作用。 
TypeScript会假设你，程序员，已经进行了必须的检查。

类型断言有两种形式:
- 其一是“尖括号”语法：
```
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```
- 另一个为as语法：
```
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

两种形式是等价的。至于使用哪个大多数情况下是凭个人喜好；然而，当你**在TypeScript里使用JSX时，只有 as语法 断言是被允许的。**