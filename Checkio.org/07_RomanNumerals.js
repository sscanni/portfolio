"use strict";
function romanNumerals(num) {
    let str = "";
    let s = "";
    let n = 0;

    const o = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const t = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const h = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const th = ["M", "MM", "MMM"];
    
    if (num > 3999)
        return null;
    
    if (num > 999) {
        s = num.toString();
        n = s.substr(0,1);
        str = th[n-1];
        num -= (n * 1000);
    }
    if (num > 99) {
        s = num.toString();
        n = s.substr(0,1);
        num -= (n * 100);
        n--;
        str = str + h[n];
    }
    if (num > 9) {
        s = num.toString();
        n = s.substr(0,1);
        num -= (n * 10);
        n--;
        str = str + t[n];
    }
    if (num > 0) {
        s = num.toString();
        n = s.substr(0,1);
        n--;
        str = str + o[n];
    }
    return str;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(romanNumerals(6), 'VI', "First");
    assert.equal(romanNumerals(76), 'LXXVI', "Second");
    assert.equal(romanNumerals(499), 'CDXCIX', "Third");
    assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII', "Forth");
    console.log("Done! Go Check!");
}

//let str = romanNumerals(6); // == 'VI'
// let str = romanNumerals(76); // == 'LXXVI'
// let str = romanNumerals(13); // == 'XIII'
// let str = romanNumerals(44); // == 'XLIV'
//let str = romanNumerals(3999); // == 'MMMCMXCIX'
// let str = romanNumerals(3888); // == 'MMMDCCCLXXXVIII'
                                      
// console.log("str=" + str);
/*
Roman numerals come from the ancient Roman numbering system. 
They are based on specific letters of the alphabet which are combined to signify the sum (or, in some cases, the difference) of their values. 
The first ten Roman numerals are:

I, II, III, IV, V, VI, VII, VIII, IX, and X.

The Roman numeral system is decimal based but not directly positional and does not include a zero. 
Roman numerals are based on combinations of these seven symbols:

Numeral	Value
I	1 (unus)
V	5 (quinque)
X	10 (decem)
L	50 (quinquaginta)
C	100 (centum)
D	500 (quingenti)
M	1,000 (mille)
More additional information about roman numerals can be found on the Wikipedia article.

For this task, you should return a roman numeral using the specified integer value ranging from 1 to 3999.

Input: A number as an integer.

Output: The Roman numeral as a string.

Example:

romanNumerals(6) == 'VI'
romanNumerals(76) == 'LXXVI'
romanNumerals(13) == 'XIII'
romanNumerals(44) == 'XLIV'
romanNumerals(3999) == 'MMMCMXCIX'

How it is used: This is an educational task that allows you to explore different numbering systems. Since roman numerals are often used in the typography, it can alternatively be used for text generation. The year of construction on building faces and cornerstones is most often written by Roman numerals. These numerals have many other uses in the modern world and you read about it here... Or maybe you will have a customer from Ancient Rome ;-)

Precondition: 0 < number < 4000
*/
