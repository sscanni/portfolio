"use strict";
function SimpleAdding(num) {
    let total = 0;
    for (let index = 0; index <= num; index++) {
        total += index;
    }
    return total;
}
console.log(SimpleAdding(12));
console.log(SimpleAdding(140));
/*
Challenge
Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. 
For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. 
For the test cases, the parameter num will be any number from 1 to 1000. 

Sample Test Cases
Input:12
Output:78

Input:140
Output:9870
*/