//let username = "JackOfAllTrades";
let username = "JACK";
let userCheck = /[a-z]|[a-z]\B[0-9]|\S{2}[^0-9]/gi; // Change this line
let result = userCheck.test(username);
console.log("result=" + result);