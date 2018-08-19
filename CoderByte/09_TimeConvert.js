"use strict";
 function  TimeConvert(num) { 
     let hours = 0;
     let mins = 0;
     let hrMin = "";
     if (num >= 60) {
        hours = parseInt(num / 60);
        mins = num - (60 * hours);
        hrMin = hours + ":" + mins;
     } else {
        hrMin = "0:" + num;
     }
     return hrMin;
 }
console.log(TimeConvert(126));
console.log(TimeConvert(400));
console.log(TimeConvert(362));
console.log(TimeConvert(45));
console.log(TimeConvert(4000));
console.log(TimeConvert(59));
console.log(TimeConvert(60));
/*
Challenge
Using the JavaScript language, have the function TimeConvert(num) take the num parameter 
being passed and return the number of hours and minutes the parameter converts to 
(ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 

Sample Test Cases
Input:126
Output:"2:6"

Input:45
Output:"0:45"

*/