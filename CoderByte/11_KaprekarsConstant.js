"use strict";
 function  KaprekarsConstant(num) { 
    let result = 0; 
    let count = 0;
    let str = "";
    if (num > 9999) {
        console.log('Parm \"num\" can not be greater than 9999.');
        return "";
    }
    while (result !== 6174) {
        if (num < 1000) {
            str = "0" + num.toString();
        } else {
            str = num.toString();
        }
        let arr1 = str.split("").sort();
        let num1 = parseInt(arr1.join(""));
        console.log(num1);
        arr1 = arr1.sort(function(a, b){return b-a});
        let num2 = parseInt(arr1.join(""));
        console.log(num2);
        num = num2 - num1;
        result = num;
        count++;
    }
    return count;
 }
// console.log(KaprekarsConstant(5432));
//console.log(KaprekarsConstant(2111));
//console.log(KaprekarsConstant(9831));
console.log(KaprekarsConstant(10000));


 /*
Challenge
Using the JavaScript language, have the function KaprekarsConstant(num) take the num parameter 
being passed which will be a 4-digit number with at least two distinct digits. 
Your program should perform the following routine on the number: 
Arrange the digits in descending order and in ascending order 
(adding zeroes to fit it to a 4-digit number), 
and subtract the smaller number from the bigger number. 
Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. 
Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). 
Your program should return the number of times this routine must be performed until 6174 is reached. 
For example: if num is 3524 your program should return 3 because of the following steps: 
(1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174. 

Hard challenges are worth 15 points and you are not timed for them.

Sample Test Cases
Input:2111
Output:5

Input:9831
Output:7
 */