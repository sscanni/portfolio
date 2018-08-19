"use strict";
function LongestWord(sen) {

    //Remove all characters that are not a-z, A-Z or spaces and put words into array.
    let arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ");
    console.log(arr);

    let maxStringLen = 0;
    let maxString = "";
    arr.forEach(function(element) {
        if (element.length > maxStringLen) {
            maxString = element;
            maxStringLen = element.length;
        }
    });
    return maxString;
}

console.log(LongestWord("fun&!! time"));
//console.log(LongestWord("I love dogs"));
/*
Challenge
Using the JavaScript language, have the function LongestWord(sen) 
take the sen parameter being passed and return the largest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. 

Sample Test Cases
Input:"fun&!! time"

Output:"time"


Input:"I love dogs"

Output:"love"
*/