"use strict";
 function  LetterChanges(str) { 
    const vowels = 'aeiouAEIOU';
    str = str.split('')
    for (let i = 0; i < str.length; i++) {
     // if (str[i] >= "a" && str[i] <= "z") {
        if (str[i].search(/[a-z]/i) !== -1) {
            if (str[i] == "z") {
                str[i] = "a"
            } else {
                str[i] = String.fromCharCode(str[i].charCodeAt(0) + 1);
            }
            if (vowels.indexOf(str[i]) !== -1) {
                str[i] = str[i].toUpperCase();
            }
        }
    }
    return str.join('');
}
console.log(LetterChanges('hello*3'));
console.log(LetterChanges('zfun times!'));

/*
Challenge
Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed 
and modify it using the following algorithm. Replace every letter in the string with the letter following 
it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) 
and finally return this modified string. 

Sample Test Cases
Input:"hello*3"

Output:"Ifmmp*3"

Input:"fun times!"

Output:"gvO Ujnft!"
*/