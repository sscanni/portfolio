"use strict";
 function  ChessboardTraveling(str) { 
    str = str.replace(/\(/g, " ");    
    str = str.replace(/\)/g, "").trim().split(" ");
    let x = str[0];
    let y = str[1];
    let a = str[2];
    let b = str[3];
    // for (let i = x; i < a; i++) {
    //     console.log("i=" + i);
    // }
    // for (let i = y; i < b; i++) {
    //     console.log("i=" + i);
    // }
    return str;        
 }

//console.log(ChessboardTraveling("(1 1)(2 2)"));   //1,1 2,2
//console.log(ChessboardTraveling("(1 1)(3 3)"));   //1,1  1,2, 1,3, 2,2, 2,3, 3,3
console.log(ChessboardTraveling("(2 2)(4 3)"));
/*
Challenge
Using the JavaScript language, have the function ChessboardTraveling(str) read str which will be a string 
consisting of the location of a space on a standard 8x8 chess board with no pieces on the board along with 
another space on the chess board. The structure of str will be the following: "(x y)(a b)" where (x y) represents 
the position you are currently on with x and y ranging from 1 to 8 and (a b) represents some other space on the 
chess board with a and b also ranging from 1 to 8 where a > x and b > y. 
Your program should determine how many ways there are of traveling from (x y) on the board to (a b) moving only up and to the right. 
For example: if str is (1 1)(2 2) then your program should output 2 because there are only two possible ways to travel 
from space (1 1) on a chessboard to space (2 2) while making only moves up and to the right. 

Hard challenges are worth 15 points and you are not timed for them.
Sample Test Cases
Input:"(1 1)(3 3)"
Output:6

Input:"(2 2)(4 3)"
Output:3
*/
