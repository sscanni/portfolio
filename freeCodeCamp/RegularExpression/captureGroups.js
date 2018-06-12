let repeatNum = "100 100 100";
//let repeatNum = "regex regex regex";
let reRegex = /^(\d+?)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
console.log("result=" + result);



/*Your regex should match "42 42 42".
Your regex should match "100 100 100".
Your regex should not match "42 42 42 42".
Your regex should not match "42 42".
Your regex should not match "101 102 103".
Your regex should not match "1 2 3".
Your regex should match "10 10 10" */
