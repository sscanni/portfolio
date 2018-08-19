"use strict";
 function  CheckNums(num1, num2) { 
    return (num1 < num2) ? "true" : (num1 > num2) ? "false" : "-1";
 }
 console.log(CheckNums(3,122));
 console.log(CheckNums(67,67));

 /*
Challenge
Using the JavaScript language, have the function CheckNums(num1,num2) take both parameters 
being passed and return the string true if num2 is greater than num1, otherwise return the string false. 
If the parameter values are equal to each other then return the string -1. 
Sample Test Cases
Input:3 & num2 = 122

Output:"true"


Input:67 & num2 = 67

Output:"-1"

 */

 