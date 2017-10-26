---
title: DailyQuestion-2
date: 2017-10-27 00:30:22
tags: [LeetCode,算法题]
categories: 每日一题
description:
---
### Judge Route Circle

Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.
栗子：
```
Example 1:
Input: "UD"
Output: true
Example 2:
Input: "LL"
Output: false
```

破解：
```
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let ifString = typeof(moves),   //判断字符串
       ifLen = moves.length,        //判断长度
       numObj = {},                 //对象收集action出现的次数
       result;
    if(ifString === 'string' && ifLen >= 2 ){   //第一条件
        for(let i=0; i<ifLen; i++){
            if(numObj[moves[i]]){
                numObj[moves[i]]++
            }else{
                numObj[moves[i]]=1
            }
        }
        // 只有左右、上下执行相同次数相等，才会回归到原来的位置（0,0）
        if(numObj['U'] === numObj['D'] && numObj['L'] === numObj['R']){
            result = true;
        }else{
            result = false
        }
    }
    return result
};
```
