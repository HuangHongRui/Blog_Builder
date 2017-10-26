---
title: 两数之间的汉明距离
date: 2017-10-26 01:27:16
tags: [LeetCode,算法题]
categories: 每日一题
description:
---

两个整数之间的 [汉明距离](https://en.wikipedia.org/wiki/Hamming_distance) 是相应位不同的位置数。
给定两个整数，x并y计算汉明距离。
条件： `0 ≤ x，y <2的31次方`

栗子：

```
输入： x = 1，y = 4 输出： 2 说明： 
1（0 0 0 1）
4（0 1 0 0）
     ↑   ↑ 
上述箭头指向相应位不同的位置。
```

解答：

```
var hammingDistance = function(x, y) {
    var xBinary = x.toString(2),        //转为二进制
        yBinary = y.toString(2),
        xLen = xBinary.length,          //二进制的个数
        yLen = yBinary.length,
        yMaxNum = Math.pow(2,31),       //条件中的y的最大值
        diffNum = Math.abs(xLen - yLen),//两参的个数差
        resultNum = 0;                  //汉明距离
    // 相比.个数少的二进制将在其前面加上（差数）个0；
    function zero(sNum,diffNum){
        for(var i=1; i<diffNum+1; i++){
            sNum = i*0 + sNum
        }
        return sNum
    }
    // 对比2个参数，如同个位上的值不同，则resultNum++；
    function contrastNum(x,y){
        for(var i=0; i<x.length; i++){
            if(x[i] != y[i]){
                resultNum++
            }
        }
        return resultNum
    }
    if(x >= 0 && y < yMaxNum){
        switch(true){
                case(xLen > yLen):
                    yBinary = zero(yBinary,diffNum);
                    break;
                case(xLen < yLen):
                    xBinary = zero(xBinary,diffNum);
                    break;
            default:
                console.log(1)
        }
        contrastNum(xBinary,yBinary)
    }
    return(resultNum)
};
```