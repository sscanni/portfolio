
let haRegex = /Haz{3,}ah/;  //Look for three or more characters between.
let haStr = "Hazzzzzah";
let result = haRegex.test(haStr);
console.log("result=" + result);
