"use strict";
 function  LetterCapitalize(str) { 
    str = str.split(" ");
    for (let i = 0; i < str.length;i++) {
        //str[i] = str[i].substr(0,1).toUpperCase() + str[i].slice(1);
        str[i] = str[i].slice(0,1).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
 }
 console.log(LetterCapitalize("hello world"));
 console.log(LetterCapitalize("i ran there"));

 /*
Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed 
and capitalize the first letter of each word. Words will be separated by only one space. 

Sample Test Cases
Input:"hello world"
Output:"Hello World"

Input:"i ran there"
Output:"I Ran There"
*/