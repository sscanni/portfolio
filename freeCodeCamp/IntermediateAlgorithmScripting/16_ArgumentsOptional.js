"use strict";
function addTogether() {
    let n = 0;
     for (var i = 0; i < arguments.length; i++) {
         if (typeof arguments[i] != 'number') {
             return undefined;
         }
     }
     if (arguments.length > 1) {
         let t = 0;
         for (var i = 0; i < arguments.length; i++) {
             t += arguments[i];
         }
         return t;    
     } else {
         n = arguments[0];
     }
     return function(p) {
         if (typeof p != 'number') {
             return undefined;
         }
         return n + p; 
     }
 }

let myCallBack = addTogether(5);

if (myCallBack != undefined) {
    console.log(myCallBack([3]));
}

// let myCallBack = addTogether(5,20);
// console.log(myCallBack);

/*
Intermediate Algorithm Scripting: Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, 
then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.
*/