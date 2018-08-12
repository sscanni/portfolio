"use strict";
function mostWanted(str) {

    let arr = [];

    arr = str.toLowerCase().split("").sort();
    let newArr = arr.filter(element => element >= "a" && element <= "z");     //filer out everything except letters.

    let prevElement = "";
    let prevFreq = 0;
    let maxFreqElement = "";
    let maxFreq = 0;
    newArr.forEach(function(element) {
        if (element != prevElement) {
            if (prevFreq > maxFreq) {
                maxFreqElement = prevElement;
                maxFreq = prevFreq;
            }
            prevElement = element;
            prevFreq = 1;
        } else {
            prevFreq++;
        }
    });
    if (prevFreq > maxFreq) {
        maxFreqElement = prevElement;
        maxFreq = prevFreq;
    }
    return maxFreqElement;
}

//let l = mostWanted("Hello World!"); // == "l"
//let l = mostWanted("How do you do?"); // == "o"
//let l = mostWanted("One"); // == "e"
// let l = mostWanted("Oops!"); // == "o"
//let l = mostWanted("AAaooo!!!!"); // == "a"
 //let l = mostWanted("abe"); // == "a"

 let l = mostWanted("aabbccc"); // == "a"

console.log("l=" + l);
/*
You are given a text, which contains different english letters and punctuation symbols. You should find the most 
frequent letter in the text. The letter returned must be in lower case.
While checking for the most wanted letter, casing does not matter, so for the purpose of your search, "A" == "a". 
Make sure you do not count punctuation symbols, digits and whitespaces, only letters.

If you have two or more letters with the same frequency, then return the letter which comes first in the latin alphabet. 
For example -- "one" contains "o", "n", "e" only once for each, thus we choose "e".

Input: A text for analysis as a string.

Output: The most frequent letter in lower case as a string.

Example:

mostWanted("Hello World!") == "l"
mostWanted("How do you do?") == "o"
mostWanted("One") == "e"
mostWanted("Oops!") == "o"
mostWanted("AAaooo!!!!") == "a"
mostWanted("abe") == "a"

How it is used: For most decryption tasks you need to know the frequency of occurrence for various letters in a section of text. 
For example: we can easily crack a simple addition or substitution cipher if we know the frequency in which letters appear. 
This is interesting stuff for language experts!

Precondition:
A text contains only ASCII symbols.
0 < len(text) ≤ 105

*/